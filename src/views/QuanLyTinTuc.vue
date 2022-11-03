<template>
    <div>
        <v-row no-gutters>
            <v-col cols="12" sm="5">
                <input class="form-control" type="text" placeholder="Nhập tiêu đề tin tức..." autocomplete="off"></input>
            </v-col>
            <v-col cols="12" sm="1">
                <button class="btn btn-search">
                    <v-icon left dark size="22">mdi mdi-magnify-minus-outline</v-icon>
                </button>
            </v-col>
            <v-col cols="12" sm="6">
                <div style="float:right;">
                    <button @click.stop="addChiTietTinTuc" class="btn btn-add">   
                        <v-icon left dark size="22">mdi-file-plus</v-icon>
                        Thêm mới
                    </button>
                </div>
            </v-col>
        </v-row>
        <v-row class="my-0 mb-3">
            <v-col cols="12" class="pt-0">
              <v-data-table
                :headers="headers"
                :items="danhSachTinTuc"
                :items-per-page="itemsPerPage"
                item-key="primKey"
                hide-default-footer
                class="table-base mt-2"
                no-data-text="Không có"
                :loading="loadingData"
                loading-text="Đang tải... "
                item-text="name"

              >
                <template v-slot:item.thaoTac="{ item }">
                    
                    <v-tooltip top v-if="isAdmin">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn @click.stop="editChiTietTinTuc" color="#2161b1" text icon class=" mr-2" v-bind="attrs" v-on="on">
                                <v-icon size="18">mdi-pencil</v-icon>
                            </v-btn>
                        </template>
                        <span>Sửa</span>
                    </v-tooltip>

                    <v-tooltip top v-if="isAdmin">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn color="red" text icon class="ml-2" v-bind="attrs" v-on="on">
                          <v-icon size="18">mdi-delete</v-icon>
                        </v-btn>
                      </template>
                      <span>Xóa</span>
                    </v-tooltip>
                  </template> 

              </v-data-table>
              <pagination v-if="pageCount" :pageInput="page" :total="total" :pageCount="pageCount" @tiny:change-page=""></pagination>
            </v-col>
        </v-row>
        <!-- -->
        <v-dialog
            max-width="1200"
            v-model="dialogThemThanhPhan"
            persistent
            fullscreen
        >
            <v-card>

                <v-toolbar
                  dark
                  color="primary"
                  class="px-3"
                >
                  <v-toolbar-title v-if="readonlyForm && editThanhPhan === null">{{ $t('chiTietBaoCao.thongTinThanhPhanBaoCao')}}</v-toolbar-title>
                  <v-toolbar-title v-if="editThanhPhan === true && !readonlyForm">Cập nhật tin tức</v-toolbar-title>
                  <v-toolbar-title v-if="editThanhPhan === false && !readonlyForm">Thêm mới tin tức</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-toolbar-items>
                    <v-btn
                      icon
                      dark
                      @click="exitForm"
                    >
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-toolbar-items>
                </v-toolbar>
                <!-- -->  
                <div class="dialog-body" >

                    <v-row style="margin-top: 8px;">
                        <v-col cols="12" sm="2">
                            <div class="titleText">Tiêu đề: <span style="color:red;">*</span></div>
                        </v-col>
                        <v-col cols="12" sm="10">
                            <v-text-field
                                class="flex input-form"
                                solo
                                label="Nhập tiêu đề..."
                                dense
                                hide-details="auto"
                                required
                                :rules="rules.text"
                            ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" sm="2">
                            <div class="titleText">Nội dung: </div>
                        </v-col>
                        <v-col cols="12" sm="10"></v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" sm="2">
                            <div class="titleText">Chuyên mục: </div>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <select name="wpCapNhatTinTuc$ddlChuyenMuc" id="wpCapNhatTinTuc_ddlChuyenMuc" class="form-control">
                                <option value="0">-- Không --</option>
                                <option value="1">Trung tâm hỗ trợ sinh viên</option>
                                <option value="2">Thông tin nội trú</option>
                                <option value="4">Cẩm nang Hòa Lạc</option>
                                <option value="5">Chuyên mục 1</option>
                                <option value="6">Chuyên mục 2</option>
                                <option value="7">Chuyên mục 3</option>
                                <option value="8">Tin tức chung</option>
                            </select>
                        </v-col>
                        <v-col cols="12" sm="2">
                            <div class="titleText">Ngày xuất bản: </div>
                        </v-col>
                        <v-col cols="12" sm="4">
                            <v-flex xs4>
                                <v-datetime-picker v-model="datetime"></v-datetime-picker>
                            </v-flex>
                            <div>Datetime value: <span v-text="datetime"></span></div>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12" sm="2">
                            <div class="titleText">Ảnh đại diện: </div>
                        </v-col>
                        <v-col cols="12" sm="10">
                            <v-file-input
                              chips
                              show-size
                              label="Tải ảnh đại diện"
                              small-chips
                              truncate-length="25"
                            ></v-file-input>
                        </v-col>
                    </v-row>
                        
                    <v-row>
                        <v-col cols="12" sm="2">
                            <div class="titleText">Tải file: </div>
                        </v-col>
                        <v-col cols="12" sm="10">
                            <v-file-input
                              chips
                              show-size
                              label="Tải tài liệu"
                              small-chips
                              truncate-length="25"
                              multiple
                            ></v-file-input>
                            <div class="note italic">
                                Chỉ nhận file jpg, jpeg, png, pdf, doc, docx, xls, xlsx, rar, zip, pptx, ppt
                            </div>  
                        </v-col>
                    </v-row>
                    
                    <v-row>
                        <v-col cols="12" sm="2">
                            <div class="titleText">Trạng thái: </div>
                        </v-col>
                        <v-col cols="12" sm="10" style="margin-top: -16px;">
                            <v-switch
                                v-model="switchTinhTrang"
                                :label="textTinhTrang"
                                flat
                                @click="setTinhTrang"
                            ></v-switch>
                        </v-col>
                    </v-row>               
                </div>
                <!-- -->
                <v-card-text class="px-2 py-2">
                    <v-card-actions class="justify-center my-4">
                    <v-btn small depressed color="red" class="white--text mr-2" :loading="loadingAction" :disabled="loadingAction" @click="exitForm">
                      <v-icon left>
                        mdi-close
                      </v-icon>
                      {{ $t('basic.thoat')}}
                    </v-btn>
                    <v-btn v-if="!readonlyForm" small depressed class="mr-2" color="primary" :loading="loadingAction" :disabled="loadingAction" @click.native="submitThemThanhPhan">
                      <v-icon left dark size="18">
                        mdi-file-document-plus-outline
                      </v-icon>
                      <span v-if="editThanhPhan">Cập nhật</span>
                      <span v-else>Thêm vào</span>
                    </v-btn>
                  </v-card-actions>
                </v-card-text>

            </v-card>
        </v-dialog>
    </div>
</template>
  
<script>
import Pagination from './Pagination.vue'
import '@fortawesome/fontawesome-free/css/all.css'

export default {
    components: {
      Pagination
    },
    data() {
        return {
            headers: [
              {
                  sortable: false,
                  text: 'STT',
                  align: 'center',
                  value: 'index',
                  width: 15
              },
              {
                  sortable: false,
                  text:  'Chuyên mục' ,
                  align: 'left',
                  value: 'chuyenMuc',
                  class: 'th-center',
                  width: 120
              },
              {
                  sortable: false,
                  text: 'Tiêu đề' ,
                  align: 'left',
                  value: 'tieuDe',
                  class: 'th-center'
              },
              {
                  sortable: false,
                  text: 'Trạng thái' ,
                  align: 'center',
                  value: 'trangThai',
                  class: 'th-center',
                  width: 130
              },
              {
                  sortable: false,
                  text: 'Thao tác' ,
                  align: 'center',
                  value: 'thaoTac',
                  class: 'th-center',
                  width: 150
              }
            ],
            danhSachTinTuc: [
                {
                    index: 1, 
                    chuyenMuc: 'Tin tức chung', 
                    tieuDe: 'Trường Quốc tế - ĐHQGHN tặng học bổng tài năng cho TOP 15% sinh viên học tập tại Hòa Lạc', 
                    trangThai: 'Hoạt động', 
                    thaoTac: ''}
            ],
            itemsPerPage: 10,
            loadingData: false,
            pageCount: 1,
            page: 0,
            dialogThemThanhPhan: false,
            readonlyForm: false,
            editThanhPhan: false,
            datetime: new Date(),
            switchTinhTrang: true,
            textTinhTrang: '',
            rules: {
              text: [val => (val || '').length > 0 || 'Đây là trường bắt buộc nhập'],
            },
        }
    },
    created() {
        if (this.switchTinhTrang === true) {
            this.textTinhTrang = "Kích hoạt"
        } else {
            this.textTinhTrang = "Không kích hoạt"
        }
    },
    methods: {
        editChiTietTinTuc() {
            this.dialogThemThanhPhan = true
            this.editThanhPhan = true
        },
        addChiTietTinTuc() {
            this.dialogThemThanhPhan = true
            this.editThanhPhan = false
        },
        exitForm() {
            this.dialogThemThanhPhan = false
        },
        setTinhTrang() {
            if (this.switchTinhTrang === true) {
                this.textTinhTrang = "Kích hoạt"
            } else {
                this.textTinhTrang = "Không kích hoạt"
            }
        }
    }
}
</script>
<style>

</style>