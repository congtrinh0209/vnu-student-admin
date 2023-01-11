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
        <button
          class="btn btn-search primary"
          @click.stop="getListMapFilter"
        >
          <v-icon left dark size="22">mdi mdi-magnify-minus-outline</v-icon>
        </button>
      </v-col>
      <v-col cols="12" sm="6">
        <div style="float: right">
          <button @click.stop="showModalForm" class="btn btn-add primary">
            <v-icon left dark size="22">mdi-file-plus</v-icon>
            Thêm mới
          </button>
        </div>
        <div style="float: right" v-if="checkActionAuthor">
          <button
            @click.stop="openDialogDecentralization"
            class="btn btn-add primary"
          >
            <v-icon left dark size="22">mdi-file-plus</v-icon>
            Phân quyền
          </button>
        </div>
      </v-col>
    </v-row>

    <v-row class="my-0 mb-3">
      <v-col cols="12" class="pt-0">
        <v-data-table
          :headers="headers"
          :items="listMap"
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
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="#2161b1"
                  text
                  icon
                  class="mr-2"
                  v-bind="attrs"
                  v-on="on"
                  @click.stop="editMap(item)"
                >
                  <v-icon size="18">mdi-pencil</v-icon>
                </v-btn>
              </template>
              <span>Sửa</span>
            </v-tooltip>

           <!-- <v-tooltip top v-if="isAdmin">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="red"
                  text
                  icon
                  class="ml-2"
                  v-bind="attrs"
                  v-on="on"
                  @click.stop="openDialogDeleteItem(item)"
                >
                  <v-icon size="18">mdi-delete</v-icon>
                </v-btn>
              </template>
              <span>Xóa</span>
            </v-tooltip> -->
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
              >Cập nhật bản đồ</v-toolbar-title
            >
            <v-toolbar-title v-if="!edittingForm"
              >Thêm mới bản đồ</v-toolbar-title
            >
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn icon dark @click="closeModalForm">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <FormBanDo
          :unitId="unitId"
            :checkActionAuthor="checkActionAuthor"
            ref="formBanDoRef"
            :dataEdit="dataEdit"
            @emitDataArea="handleEmitDataArea"
          />

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
          <v-btn color="primary" text @click="deleteCadres"> Xác nhận </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>  -->
  </div> 
</template>

<script>
import Pagination from "./Pagination.vue";
import FormBanDo from "./FormBanDo.vue";
import toastr from "toastr";
import { actionAuthor } from "../constant/actionAuthor";
import { textAuthor } from "../constant/textAuthorView";

export default {
  components: {
    Pagination,
    FormBanDo,
  },


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
          text: "Tên địa điểm",
          align: "left",
          value: "TenDiaDiem",
          class: "th-center",
          width: 120,
        },
        {
          sortable: false,
          text: "Khu vực",
          align: "left",
          value: "KhuVuc.TenKhuVuc",
          class: "th-center",
          width: 120,
        },
        // {
        //   sortable: false,
        //   text: "Số điện thoại/ email",
        //   align: "left",
        //   value: "EmailVNU",
        //   class: "th-center",
        //   width: 120,
        // },
        {
          sortable: false,
          text: "Thao tác",
          align: "left",
          value: "thaotac",
          class: "th-center",
          width: 68,
        },
      ],
      listMap: [],
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
      // idMap: "",
      dialogDecentralization: false,
      dataEditCadres: [],
      emitDataArea: [],
      checkActionAuthor: false,
      unitId: "",
      checkActionAddAndUpdate: ""
    };
  },
  created() {
    const vm = this;
    vm.getListMap();
  },

  mounted() {
    console.log("select: ", this.selected);
  },

  methods: {
    getListMapFilter() {
      const vm = this;
      console.log("tim kiếm");
      vm.getListMap({ keyword: vm.textSearch });
      vm.textSearch = "";
    },
    getListMap(dataParam) {
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
        collectionName: "bandoso",
        data: !dataParam ? dataPayload : { ...dataPayload, ...dataParam },
      };
      vm.$store
        .dispatch("collectionFilter", filter)
        .then(function (response) {
  
          vm.listMap = response.content.map((item) => ({
            ...item,
          }));

          console.log("res: ", vm.listMap);
          vm.total = vm.listMap.length;
          vm.pageCount = response.totalPages;
          vm.loadingData = false;
        })
        .catch(function () {
          vm.loadingData = false;
        });
    },
    // openDialogDeleteItem(item) {
    //   const vm = this;
    //   console.log("id delete: ", item.PrimKey);
    //   vm.dialogDelete = true;
    //   vm.idMap = item.PrimKey;
    // },
    // deleteCadres() {
    //   const vm = this;
    //   vm.dialogDelete = false;
    //   const payload = {
    //     payload: vm.idMap,
    //     type: "canbo",
    //   };
    //   vm.$store
    //     .dispatch("deleteItemData", payload)
    //     .then(function (response) {
    //       toastr.success("Xóa thành công");
    //       vm.listMap = vm.listMap.reduce(function (res, cur) {
    //         if (vm.idMap !== cur.PrimKey) res.push(cur);
    //         return res;
    //       }, []);
    //       vm.total = vm.listMap.length;

    //       console.log("res dele: ", response);
    //     })
    //     .catch(function () {
    //       vm.loadingData = false;
    //     });
    // },
    editMap(item) {
      const vm = this;
      // const dataEdit = {
      //   ...item,
      //   CoQuanDonVi: {
      //     MaHanhChinh: item.CoQuanDonVi.MaHanhChinh,
      //     TenGoi: item.CoQuanDonVi.TenGoi,
      //   },
      // };
      vm.edittingForm = true;
      console.log("item edit: ", item);
      // vm.dataEdit = dataEdit;
      vm.dialogForm = true;
    },
    handlechangePage(pageCurent) {
      const vm = this;
      vm.getListMap(pageCurent);
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
    handleEmitDataArea(data) {
      const vm = this;
      vm.emitDataArea = data;
    },
    submitForm() {
      const vm = this;
      if (vm.$refs.formBanDoRef.validateForm()) {
        const formData = vm.$refs.formBanDoRef.formData;
        const dataPayload = {
          ...formData,
        };
       

        // if (!vm.edittingForm) {
        //   const payload = {
        //     payload: dataPayload,
        //     type: "canbo",
        //   };
        //   vm.$store
        //     .dispatch("createItemData", payload)
        //     .then(function (response) {
        //       toastr.success("Thêm mới thành công");
        //       if (vm.listMap.length < vm.itemsPerPage) {
        //         const data = [...vm.listMap];
        //         data.push({
        //           ...dataPayload,
        //           MaDinhDanh: response.data.resp.MaDinhDanh,
        //           PrimKey: response.data.resp.PrimKey,
        //         });
        //         vm.listMap = data;
        //       }
        //       vm.dialogForm = false;
        //       vm.total = vm.listMap.length;
        //       console.log("res post: ", response);
        //     })
        //     .catch(function (err) {
        //       if (
        //         err.data.messageCode === "canbo.masocanbo_or_emailVNU_conflict"
        //       ) {
        //         toastr.error("Trùng mã cán bộ hoặc emailVNU");
        //       } else {
        //         toastr.error(
        //           "Vui lòng kiểm tra lại dữ liệu nhập vào các trường"
        //         );
        //       }
        //       vm.loadingData = false;
        //     });
        // } else {
        //   const payload = {
        //     payload: dataPayload,
        //     type: "canbo",
        //     id: vm.dataEdit.PrimKey,
        //   };

        //   vm.$store
        //     .dispatch("editItemData", payload)
        //     .then(function (response) {
        //       toastr.success("Cập nhật thành công");
        //       vm.dialogForm = false;
        //       vm.listMap = vm.listMap.reduce(function (res, cur) {
        //         if (vm.dataEdit.PrimKey === cur.PrimKey) {
        //           return [
        //             ...res,
        //             {
        //               ...cur,
        //               ...dataPayload,
        //               tenNhomQuyen: response.data.resp.ListQuyenCanBo.map(
        //                 (el) => el.TenNhomQuyen
        //               ).join(", "),
        //               ListQuyenCanBo: response.data.resp.ListQuyenCanBo,
        //             },
        //           ];
        //         } else {
        //           return [...res, cur];
        //         }
        //       }, []);
        //       console.log(
        //         "res edit: ",
        //         response,
        //         dataPayload,
        //         vm.dataEdit.PrimKey,
        //         vm.listMap
        //       );
        //       vm.dataEdit = {};
        //     })
        //     .catch(function () {
        //       vm.loadingData = false;
        //       toastr.error("Vui lòng kiểm tra lại dữ liệu nhập vào các trường");
        //     });
        // }

        console.log("submit", formData, vm.emitDataArea);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>