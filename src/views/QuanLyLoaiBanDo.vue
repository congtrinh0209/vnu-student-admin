<template>
    <div>
        <v-row>
            <v-col cols="12" sm="6" style="display: inline-table;">
                <span>Tên loại bản đồ:</span>
                <input type="text" class="form-control"></input>
            </v-col>
            <v-col cols="12" sm="3" style="display: inline-table;">
                <span>Thứ tự:</span>
                <input type="text" class="form-control"></input>
            </v-col>
            <v-col cols="12" sm="3" >
                <v-row no-gutters style="justify-content: center; align-items: center;">
                    <v-col cols='12' sm='4'><span style="font-weight: 500;">Trạng thái:</span></v-col>
                    <v-col cols='12' sm='5'>
                        <v-checkbox label=" Xuất bản"></v-checkbox>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" sm="6"></v-col>
            <v-col cols="12" sm="6">
                <v-row no-gutters style="float: right;">
                    <div>
                        <button class="btn btn-add" @click="addForm">
                            <v-icon left dark size="22">mdi-file-plus</v-icon>
                            Thêm mới
                        </button>
                    </div>
                    <!-- <div>
                        <button class="btn btn-add">
                            <v-icon left dark size="22">mdi-camera-retake-outline</v-icon>
                            Cập nhật
                        </button>
                    </div> -->
                    <div>
                        <button class="btn btn-add">
                            <v-icon left dark size="22">mdi mdi-magnify-minus-outline</v-icon>
                            Tìm kiếm
                        </button>
                    </div>
                </v-row>
            </v-col>
        </v-row>

        <v-row class="my-0 mb-3">
            <v-col cols="12" class="pt-0">
              <v-data-table
                :headers="headers"
                :items="danhSachLoaiBanDo"
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
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="primary" text icon class="" v-bind="attrs" v-on="on">
                        <v-icon size="20">mdi-arrow-right-bold-circle-outline</v-icon>
                      </v-btn>
                    </template>
                    <span>Chi Tiết</span>
                  </v-tooltip>
        
                  <v-tooltip top v-if="isAdmin">
                      <template v-slot:activator="{ on, attrs }">
                          <v-btn color="#2161b1" text icon class=" mr-2" v-bind="attrs" v-on="on" @click.stop="editForm">
                          <v-icon size="18">mdi-pencil</v-icon>
                          </v-btn>
                      </template>
                      <span>Sửa</span>
                  </v-tooltip>
        
                  <v-tooltip top v-if="isAdmin">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="red" text icon class="ml-2" v-bind="attrs" v-on="on" @click.stop="deleteForm">
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
            v-model="dialogForm"
            persistent
            fullscreen
        >
            <v-card>
                <v-toolbar
                  dark
                  color="primary"
                  class="px-3"
                >
                  <v-toolbar-title v-if="readonlyForm && edittingForm === null">{{ $t('chiTietBaoCao.thongTinTinTuc')}}</v-toolbar-title>
                  <v-toolbar-title v-if="edittingForm === true && !readonlyForm">Cập nhật tin tức</v-toolbar-title>
                  <v-toolbar-title v-if="edittingForm === false && !readonlyForm">Thêm mới tin tức</v-toolbar-title>
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
                <FormTinTuc></FormTinTuc>
                <!-- -->
                <v-card-text class="px-2 py-2">
                    <v-card-actions class="justify-center my-4">
                    <v-btn small depressed color="red" class="white--text mr-2" :loading="loadingAction" :disabled="loadingAction" @click="exitForm">
                      <v-icon left>
                        mdi-close
                      </v-icon>
                      {{ $t('basic.thoat')}}
                    </v-btn>
                    <v-btn v-if="!readonlyForm" small depressed class="mr-2" color="primary" :loading="loadingAction" :disabled="loadingAction" @click.native="submitForm">
                      <v-icon left dark size="18">
                        mdi-file-document-plus-outline
                      </v-icon>
                      <span v-if="edittingForm">Cập nhật</span>
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

export default {
    props: {
        total: {
            type: Number,
            default: 6
        },
    },
    components: {
      Pagination
    },
    data() {
        return {
            headers: [
              {
                  sortable: false,
                  text: 'Thứ tự',
                  align: 'center',
                  value: 'index',
                  width: 60
              },
              {
                  sortable: false,
                  text:  'Tên loại bản đồ' ,
                  align: 'left',
                  value: 'tenLoaiBanDo',
                  class: 'th-center'
                  
              },
              {
                  sortable: false,
                  text: 'Mã icon' ,
                  align: 'left',
                  value: 'maIcon',
                  class: 'th-center',
                  width: 80
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
            danhSachLoaiBanDo: [
            	{
            		index: 1, 
            		tenLoaiBanDo: 'Tòa Nhà', 
            		maIcon: '0xe089', 
            		trangThai: '1', 
            		thaoTac: ''
                },
                {
            		index: 2, 
            		tenLoaiBanDo: 'Ký Túc Xá', 
            		maIcon: '0xf879', 
            		trangThai: '1', 
            		thaoTac: ''
                },
                {
            		index: 3, 
            		tenLoaiBanDo: 'Ăn Uống', 
            		maIcon: '0xe131', 
            		trangThai: '1', 
            		thaoTac: ''
                },
                {
            		index: 4, 
            		tenLoaiBanDo: 'Check In', 
            		maIcon: '0xe131', 
            		trangThai: '1', 
            		thaoTac: ''
                },
                {
            		index: 5, 
            		tenLoaiBanDo: 'Bãi Đỗ Xe', 
            		maIcon: '0xe39e', 
            		trangThai: '1', 
            		thaoTac: ''
                },
                {
            		index: 6, 
            		tenLoaiBanDo: 'Hiệu Thuốc', 
            		maIcon: '0xe131', 
            		trangThai: '1', 
            		thaoTac: ''
                }
            ],
            itemsPerPage: 10,
            loadingData: false,
            pageCount: 1,
            page: 0,
            edittingForm: false,
            dialogForm: false,
        }
    },
    methods: {
        editForm() {
            this.dialogForm = true
            this.edittingForm = true
        },
        addForm() {
            this.dialogForm = true
            this.edittingForm = false
        },
        exitForm() {
            this.dialogForm = false
        },
    }
}
</script>
<style>
</style>