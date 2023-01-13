<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12" sm="5">
        <input
          style="outline: none"
          v-model="textSearch"
          class="form-control"
          type="text"
          placeholder="Nhập tiêu đề tin tức..."
          autocomplete="off"
        />
      </v-col>
      <v-col cols="12" sm="1">
        <button class="btn btn-search primary" @click.stop="getListMapFilter">
          <v-icon left dark size="22">mdi mdi-magnify-minus-outline</v-icon>
        </button>
      </v-col>
      <v-col cols="12" sm="6" v-if="checkActionAddAndUpdate">
        <div style="float: right">
          <button @click.stop="showModalForm" class="btn btn-add primary">
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
          :items="listTypeMap"
          :items-per-page="itemsPerPage"
          item-key="PrimKey"
          hide-default-footer
          class="table-base mt-2"
          no-data-text="Không có dữ liệu"
          :loading="loadingData"
          loading-text="Đang tải... "
          item-text="name"
          v-model="selected"
        >
          <template v-slot:item.chon="{ index }"> </template>
          <template v-slot:item.stt="{ index }">
            <td>{{ index + 1 }}</td>
          </template>
          <template v-slot:item.thaotac="{ item }">
            <v-tooltip top v-if="checkActionAddAndUpdate">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="#2161b1"
                  text
                  icon
                  class="mr-2"
                  v-bind="attrs"
                  v-on="on"
                  @click.stop="editTypeMap(item)"
                >
                  <v-icon size="18">mdi-pencil</v-icon>
                </v-btn>
              </template>
              <span>Sửa</span>
            </v-tooltip>

            <v-tooltip top v-if="checkActionDelete">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="red"
                  text
                  icon
                  class="ml-2"
                  v-bind="attrs"
                  v-on="on"
                  @click.stop="deleteTypeMap(item)"
                >
                  <v-icon size="18">mdi-delete</v-icon>
                </v-btn>
              </template>
              <span>Xóa</span>
            </v-tooltip>
          </template>
        </v-data-table>
        <pagination
          v-if="pageCount"
          :pageInput="page"
          :total="total"
          :pageCount="pageCount"
          @tiny:change-page="handlechangePage"
        ></pagination>
      </v-col>
    </v-row>
    <div v-if="dialogForm">
      <v-dialog max-width="1000" v-model="dialogForm" persistent>
        <v-card>
          <v-toolbar dark color="primary" class="px-3">
            <v-toolbar-title v-if="edittingForm"
              >Cập nhật loại bản đồ</v-toolbar-title
            >
            <v-toolbar-title v-if="!edittingForm"
              >Thêm mới loại bản đồ</v-toolbar-title
            >
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn icon dark @click="closeModalForm">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <FormLoaiBanDoSo ref="formLoaiBanDoRef" :dataEdit="dataEdit" />

          <v-card-text class="px-2 py-2">
            <v-card-actions class="justify-center my-4">
              <v-btn
                small
                depressed
                color="red"
                class="white--text mr-2"
                :loading="loadingAction"
                :disabled="loadingAction"
                @click="closeModalForm"
              >
                <v-icon left> mdi-close </v-icon>
                {{ $t("basic.thoat") }}
              </v-btn>
              <v-btn
                v-if="!readonlyForm"
                small
                depressed
                class="mr-2"
                color="primary"
                :loading="loadingAction"
                :disabled="loadingAction"
                @click.native="submitForm"
              >
                <v-icon left dark size="18">
                  mdi-file-document-plus-outline
                </v-icon>
                <span v-if="edittingForm">Cập nhật</span>
                <span v-else>Thêm mới</span>
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>

    <!-- <v-dialog v-model="dialogDelete" persistent max-width="286">
      <v-card>
        <v-toolbar dark color="primary">
          <v-card-title class="text-h7 text-center">
            Bạn có muốn xóa không?
          </v-card-title>
        </v-toolbar>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialogDelete = false">
            Từ chối
          </v-btn>
          <v-btn color="primary" text @click="deleteTypeMap"> Xác nhận </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->
  </div>
</template>

<script>

import Pagination from "./Pagination.vue";
import FormLoaiBanDoSo from "./FormLoaiBanDoSo.vue";
import toastr from "toastr";
import { actionAuthor } from "../constant/actionAuthor";
import { useAccountAuthorization } from "../mixin";

export default {
  components: {
    Pagination,
    FormLoaiBanDoSo,
  },

  mixins: [useAccountAuthorization],

  data() {
    return {
      selected: [],
      textSearch: "",
      headers: [
        {
          sortable: false,
          text: "STT",
          align: "center",
          value: "stt",
          width: 15,
        },
        {
          sortable: false,
          text: "Tên loại bản đồ",
          align: "left",
          value: "TenLoaiBanDo",
          class: "th-center",
          width: 120,
        },
        {
          sortable: false,
          text: "Tình trạng",
          align: "left",
          value: "TinhTrang.MaMuc",
          class: "th-center",
          width: 120,
        },
        {
          sortable: false,
          text: "Thao tác",
          align: "left",
          value: "thaotac",
          class: "th-center",
          width: 68,
        },
      ],
      listTypeMap: [],
      itemsPerPage: 20,
      loadingData: false,
      pageCount: 1,
      page: 0,
      edittingForm: false,
      dialogForm: false,
      readonlyForm: false,
      loadingAction: false,
      total: 1,
      dataEdit: {},
      dialogDelete: false,
      idTypeMap: "",
      checkActionAddAndUpdate: "",
      checkActionDelete: "",
    };
  },
  created() {
    const vm = this;

    vm.checkActionAddAndUpdate = vm.handleCheckActionAuthor(
      actionAuthor.CAP_NHAT_VA_THEM_LOAI_BAN_DO
    );

    vm.checkActionDelete = vm.handleCheckActionAuthor(
      actionAuthor.XOA_LOAI_BAN_DO
    );

    vm.getListTypeMap();
  },

  mounted() {
    console.log("select: ", this.selected);
  },

  methods: {
    getListMapFilter() {
      const vm = this;
      console.log("tim kiếm");
      vm.getListTypeMap({ TenLoaiBanDo: vm.textSearch });
      vm.textSearch = "";
    },
    getListTypeMap(dataParam) {
      let vm = this;
      vm.loadingData = true;
      const dataPayload = {
        page: 0,
        size: 20,
        keyword: "",
        orderFields: "",
        orderTypes: "",
        tinhTrang: "",
        thamChieu_maMuc: "",
      };
      const filter = {
        collectionName: "loaibando",
        data: !dataParam ? dataPayload : { ...dataPayload, ...dataParam },
      };
      vm.$store
        .dispatch("collectionFilter", filter)
        .then(function (response) {
          vm.listTypeMap = response.content;

          console.log("res: ", vm.listTypeMap);
          vm.total = vm.listTypeMap.length;
          vm.pageCount = response.totalPages;
          vm.loadingData = false;
        })
        .catch(function () {
          vm.loadingData = false;
        });
    },
    // deleteTypeMap(item) {
    //   const vm = this;
    //   console.log("id delete: ", item.PrimKey);
    //   vm.dialogDelete = true;
    //   vm.idTypeMap = item.PrimKey;
    // },
    deleteTypeMap(item) {
      const vm = this;
      vm.dialogDelete = false;
      const payload = {
        payload: item.PrimKey,
        type: "loaibando",
      };

      vm.$store.commit("SET_SHOWCONFIRM", true);
      let confirm = {
        auth: false,
        title: "Xóa tài liệu đính kèm",
        message: "Bạn có chắc chắn muốn xóa tài liệu này",
        button: {
          yes: "Có",
          no: "Không",
        },
        callback: () => {
          vm.$store
            .dispatch("deleteItemData", payload)
            .then(function (response) {
              toastr.success("Xóa thành công");
              vm.listTypeMap = vm.listTypeMap.reduce(function (res, cur) {
                if (item.PrimKey !== cur.PrimKey) res.push(cur);
                return res;
              }, []);
              vm.total = vm.listTypeMap.length;

              console.log("res dele: ", response);
            })
            .catch(function () {
              vm.loadingData = false;
            });
        },
      };
      vm.$store.commit("SET_CONFIG_CONFIRM_DIALOG", confirm);
    },
    editTypeMap(item) {
      const vm = this;
      vm.edittingForm = true;
      console.log("item edit: ", item);
      vm.dataEdit = item;
      vm.dialogForm = true;
    },
    handlechangePage(pageCurent) {
      const vm = this;
      vm.getListTypeMap(pageCurent);
    },
    showModalForm() {
      const vm = this;
      vm.dialogForm = true;
      vm.edittingForm = false;
    },
    closeModalForm() {
      const vm = this;
      vm.dialogForm = false;
      vm.dataEdit = {};
    },
    submitForm() {
      const vm = this;
      if (vm.$refs.formLoaiBanDoRef.validateForm()) {
        const formData = vm.$refs.formLoaiBanDoRef.formData;
        const dataPayload = {
          ...formData,
        };

        dataPayload.TinhTrang = {
          TenMuc: formData.TinhTrang,
          MaMuc: "Hoạt Động",
        };

        if (!vm.edittingForm) {
          const payload = {
            payload: dataPayload,
            type: "loaibando",
          };
          vm.$store
            .dispatch("createItemData", payload)
            .then(function (response) {
              toastr.success("Thêm mới thành công");
              if (vm.listTypeMap.length < vm.itemsPerPage) {
                const data = [...vm.listTypeMap];
                data.push({
                  ...response.data.resp,
                });
                vm.listTypeMap = data;
              }
              vm.dialogForm = false;
              vm.total = vm.listTypeMap.length;
              console.log("res post: ", response);
            })
            .catch(function (err) {
              vm.loadingData = false;
            });
        } else {
          const payload = {
            payload: dataPayload,
            type: "loaibando",
            id: vm.dataEdit.PrimKey,
          };

          vm.$store
            .dispatch("editItemData", payload)
            .then(function (response) {
              toastr.success("Cập nhật thành công");
              vm.dialogForm = false;

              vm.listTypeMap = vm.listTypeMap.reduce((res, cur) => {
                if (vm.dataEdit.PrimKey === cur.PrimKey)
                  return [...res, { ...cur, ...response.data.resp }];
                else return [...res, cur];
              }, []);

              console.log(
                "res edit: ",
                response,
                dataPayload,
                vm.dataEdit.PrimKey,
                vm.listTypeMap
              );
              vm.dataEdit = {};
            })
            .catch(function () {
              vm.loadingData = false;
              toastr.error("Vui lòng kiểm tra lại dữ liệu nhập vào các trường");
            });
        }

        console.log("submit", formData, dataPayload);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>