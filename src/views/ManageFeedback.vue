<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12" sm="5">
        <input
          v-model="textSearch"
          class="form-control"
          type="text"
          placeholder="Nhập tiêu đề..."
          autocomplete="off"
        />
      </v-col>
      <v-col cols="12" sm="1">
        <button
          class="btn btn-search primary"
          @click.stop="getListFeedbackFilter"
        >
          <v-icon left dark size="22">mdi mdi-magnify-minus-outline</v-icon>
        </button>
      </v-col>
    </v-row>

    <v-row class="my-0 mb-3">
      <v-col cols="12" class="pt-0">
        <v-data-table
          :headers="headers"
          :items="listFeedback"
          :items-per-page="itemsPerPage"
          item-key="PrimKey"
          hide-default-footer
          class="table-base mt-2"
          no-data-text="Không có dữ liệu"
          :loading="loadingData"
          loading-text="Đang tải... "
          item-text="name"
        >
          <template v-slot:item.stt="{ index }">
            <td>{{ index + 1 }}</td>
          </template>
          <template v-slot:item.CongKhai="{ item }">
            <td>
              {{ item.CongKhai === "" ? "Công khai" : "Không công khai" }}
            </td>
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
                  @click.stop="editFeedback(item)"
                >
                  <v-icon size="18">mdi-pencil</v-icon>
                </v-btn>
              </template>
              <span>Sửa</span>
            </v-tooltip>
          </template>
        </v-data-table>
        <pagination
          v-if="pageCount"
          :pageInput="page"
          :total="total"
          :pageCount="pageCount"
          @tiny:change-page="handlechangePage"
        />
      </v-col>
    </v-row>
    <div v-if="dialogForm">
      <v-dialog max-width="1200" v-model="dialogForm" persistent fullscreen>
        <v-card>
          <v-toolbar dark color="primary" class="px-3">
            <v-toolbar-title v-if="edittingForm"
              >Cập nhật góp ý</v-toolbar-title
            >
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn icon dark @click="closeModalForm">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <FormGopY
            ref="formGopYRef"
            :dataEdit="dataEdit"
            @emitDataFile="handleEmitDataFile"
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
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>

    <v-dialog v-model="dialogDelete" persistent max-width="286">
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
          <v-btn color="primary" text @click="deleteFeedback"> Xác nhận </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";
import toastr from "toastr";
import FormGopY from "@/views/FormGopY";
export default {
  components: {
    Pagination,
    FormGopY,
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
          width: 12,
        },
        {
          sortable: false,
          text: "Nội dung",
          align: "left",
          value: "NoiDung",
          class: "th-center",
          width: 220,
        },
        {
          sortable: false,
          text: "Tình trạng",
          align: "left",
          value: "CongKhai",
          class: "th-center",
          width: 68,
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
      listFeedback: [],
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
      idFeedback: "",
      emitDataFile: null,
    };
  },
  created() {
    const vm = this;
    vm.getListFeedback();
  },

  mounted() {
    console.log("select: ", this.selected);
  },

  methods: {
    getListFeedbackFilter() {
      const vm = this;
      console.log("tim kiếm");
      vm.getListFeedback({ keyword: vm.textSearch });
      vm.textSearch = "";
    },
    getListFeedback(dataParam) {
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
        collectionName: "gopy",
        data: !dataParam ? dataPayload : { ...dataPayload, ...dataParam },
      };
      vm.$store
        .dispatch("collectionFilter", filter)
        .then(function (response) {
          vm.listFeedback = response.content;
          console.log("res: ", vm.listFeedback);
          vm.total = vm.listFeedback.length;
          vm.pageCount = response.totalPages;
          vm.loadingData = false;
        })
        .catch(function () {
          vm.loadingData = false;
        });
    },
    openDialogDeleteItem(item) {
      const vm = this;
      console.log("id delete: ", item.PrimKey);
      vm.dialogDelete = true;
      vm.idFeedback = item.PrimKey;
    },
    deleteFeedback() {
      const vm = this;
      vm.dialogDelete = false;
      const payload = {
        payload: vm.idFeedback,
        type: "baiviettintuc",
      };
      vm.$store
        .dispatch("deleteItemData", payload)
        .then(function (response) {
          toastr.success("Xóa thành công");
          vm.listFeedback = vm.listFeedback.reduce(function (res, cur) {
            if (vm.idFeedback !== cur.PrimKey) res.push(cur);
            return res;
          }, []);
          vm.total = vm.listFeedback.length;

          console.log("res dele: ", response);
        })
        .catch(function () {
          vm.loadingData = false;
        });
    },
    editFeedback(item) {
      const vm = this;
      const dataEdit = {
        ...item,
      };
      vm.edittingForm = true;
      console.log("item edit: ", item);
      vm.dataEdit = dataEdit;
      vm.dialogForm = true;
    },
    handlechangePage(pageCurent) {
      const vm = this;
      vm.getListNews(pageCurent);
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
    handleEmitDataFile(value) {
      const vm = this;
      vm.emitDataFile = value;
    },
    submitForm() {
      const vm = this;
      if (vm.$refs.formGopYRef.validateForm()) {
        const formData = vm.$refs.formGopYRef.formData;

        const dataPayload = {
          TraLoi: {
            NoiDung: formData.TraLoi,
          },
          IdsGopY: vm.dataEdit.PrimKey,
          TinhTrang: {
            TenMuc: "Đã trả lời",
            MaMuc: 3,
          },
        };

        if (!vm.emitDataFile && vm.dataEdit.TraLoi.Attachment?.Id) {
          dataPayload.TraLoi = {
            ...dataPayload.TraLoi,
            Attachment: {
              Id: vm.dataEdit.TraLoi.Attachment.Id,
              FileName: vm.dataEdit.TraLoi.Attachment.FileName,
              FileUrl: vm.dataEdit.TraLoi.Attachment.FileUrl,
              type: "T_Attachment",
            },
          };
        }

        if (vm.edittingForm) {
          const payload = {
            payload: dataPayload,
            type: "gopy/response",
          };
          vm.$store
            .dispatch("createItemData", payload)
            .then(function (response) {
              toastr.success("Cập nhật thành công");
              if (vm.emitDataFile && !vm.dataEdit.TraLoi.Attachment) {
                let formData = new FormData();
                formData.append("files", vm.emitDataFile);
                formData.append("idsGopY", vm.dataEdit.PrimKey);
                formData.append("typeUpload", 2);

                const payload = {
                  type: "gopy/upload",
                  payload: formData,
                };

                vm.$store
                  .dispatch("uploadFile", payload)
                  .then(function (response) {
                    vm.getListFeedback();
                    console.log("res: ", response);
                  })
                  .catch(function () {});
              } else {
                vm.getListFeedback();
              }
              vm.dialogForm = false;
              console.log("res post: ", response);
            })
            .catch(function () {
              vm.loadingData = false;
              toastr.error("Vui lòng kiểm tra lại dữ liệu nhập vào các trường");
            });
        }
        // else {
        //   const payload = {
        //     payload: dataPayload,
        //     type: "gopy/response",
        //   };

        //   vm.$store
        //     .dispatch("editItemData", payload)
        //     .then(function (response) {
        //       toastr.success("Cập nhật thành công");
        //       vm.dialogForm = false;
        //       vm.dataEdit = {};
        //       console.log(
        //         "res edit: ",
        //         response,
        //         dataPayload,
        //         vm.dataEdit.PrimKey,
        //         vm.listFeedback
        //       );
        //     })
        //     .catch(function () {
        //       vm.loadingData = false;
        //       toastr.error(
        //           "Vui lòng kiểm tra lại dữ liệu nhập vào các trường"
        //         );
        //     });
        // }

        console.log("submit", formData, dataPayload);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>