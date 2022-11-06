<template>
    <div>
        <v-row no-gutters>
            <v-col cols="12" sm="5">
                <input class="form-control" type="text" placeholder="Nhập tiêu đề tin tức..." autocomplete="off">
            </v-col>
            <v-col cols="12" sm="1">
                <button class="btn btn-search">
                    <v-icon left dark size="22">mdi mdi-magnify-minus-outline</v-icon>
                </button>
            </v-col>
            <v-col cols="12" sm="6">
                <div style="float:right;">
                    <button @click.stop="addForm" class="btn btn-add">   
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
                            <v-btn @click.stop="editForm" color="#2161b1" text icon class=" mr-2" v-bind="attrs" v-on="on">
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
            v-model="dialogThemTinTuc"
            persistent
            fullscreen
        >
            <v-card>
                <v-toolbar
                  dark
                  color="primary"
                  class="px-3"
                >
                  <v-toolbar-title v-if="readonlyForm && editTinTuc === null">{{ $t('chiTietBaoCao.thongTinTinTuc')}}</v-toolbar-title>
                  <v-toolbar-title v-if="editTinTuc === true && !readonlyForm">Cập nhật tin tức</v-toolbar-title>
                  <v-toolbar-title v-if="editTinTuc === false && !readonlyForm">Thêm mới tin tức</v-toolbar-title>
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
                    <v-btn v-if="!readonlyForm" small depressed class="mr-2" color="primary" :loading="loadingAction" :disabled="loadingAction" @click.native="submitThemTinTuc">
                      <v-icon left dark size="18">
                        mdi-file-document-plus-outline
                      </v-icon>
                      <span v-if="editTinTuc">Cập nhật</span>
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
import FormTinTuc from './FormTinTuc.vue'

export default {
    props: {
      total: {
          type: Number,
          default: 1
      },
  },
    components: {
      Pagination, FormTinTuc
    },
    data() {
        return {
            headers: [
              {
                  sortable: false,
                  text: 'STT',
                  align: 'center',
                  value: 'stt',
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
            // danhSachTinTuc: [
            //     {
            //         index: 1, 
            //         chuyenMuc: 'Tin tức chung', 
            //         tieuDe: 'Trường Quốc tế - ĐHQGHN tặng học bổng tài năng cho TOP 15% sinh viên học tập tại Hòa Lạc', 
            //         trangThai: 'Hoạt động', 
            //         thaoTac: ''}
            // ],
            danhSachTinTuc: [],
            itemsPerPage: 10,
            loadingData: false,
            pageCount: 1,
            page: 0,
            dialogThemTinTuc: false,
            readonlyForm: false,
            editTinTuc: false,
            datetime: new Date(),
            switchTinhTrang: true,
            textTinhTrang: '',
            rules: {
              text: [val => (val || '').length > 0 || 'Đây là trường bắt buộc nhập'],
            },
            activePicker: null,
            datetime: null,
            date: null,
            menuDate: false,
            loadingAction: false,
        }
    },
    created() {
        let vm = this
        vm.getDanhSachTinTuc()
        if (this.switchTinhTrang === true) {
            this.textTinhTrang = "Kích hoạt"
        } else {
            this.textTinhTrang = "Không kích hoạt"
        }
    },
    watch: {
        menuDate (val) {
            val && setTimeout(() => (this.activePicker = ''))
        },
    },
    methods: {
        getDanhSachTinTuc () {
            let vm = this
            vm.loadingData = true
            let filter = {
                collectionName: 'quanlytintuc',
                data: {
                }
            }
            vm.$store.dispatch('collectionFilter', filter).then(function (response) {
                vm.danhSachTinTuc = response
                console.log(vm.danhSachTinTuc)
                vm.loadingData = false
            }).catch(function () {
                vm.loadingData = false
            })
        },
        editForm() {
            this.dialogThemTinTuc = true
            this.editTinTuc = true
        },
        addForm() {
            this.dialogThemTinTuc = true
            this.editTinTuc = false
        },
        exitForm() {
            this.dialogThemTinTuc = false
        },
        setTinhTrang() {
            if (this.switchTinhTrang === true) {
                this.textTinhTrang = "Kích hoạt"
            } else {
                this.textTinhTrang = "Không kích hoạt"
            }
        },
        save (date) {
            this.$refs.menu.save(date)
        },
    }
}
</script>
<style>

</style>