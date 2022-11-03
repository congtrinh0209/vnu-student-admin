<template>
	<v-row class="my-0 mb-3">
            <v-col cols="12" class="pt-0">
              <v-data-table
                :headers="headers"
                :items="danhSachBaoCao"
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
                          	<v-btn color="#2161b1" text icon class=" mr-2" v-bind="attrs" v-on="on">
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
</template>
<script>
import Pagination from './Pagination.vue'

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
            danhSachBaoCao: [
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
        }
    }
}
</script>