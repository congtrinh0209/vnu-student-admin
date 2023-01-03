<template>
  <div>
    <v-card elevation="2">
      <v-container>
        <v-row>
          <v-col cols="12" sm="4">
            <div class="mb-2">Tình trạng:</div>
            <v-select
              :items="optionStatus"
              dense
              solo
              v-model="selectedStatus"
              clearable
            ></v-select>
          </v-col>
          <v-col cols="12" sm="4">
            <div class="mb-2">Tình trạng công khai:</div>
            <v-select
              :items="optionStatusPublic"
              dense
              solo
              v-model="selectedStatusPublic"
              clearable
            ></v-select>
          </v-col>
          <v-col cols="12" sm="4">
            <div class="mb-2">Chủ đề:</div>
            <v-select
              :items="optionTheme"
              dense
              solo
              v-model="selectedTheme"
              clearable
            ></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" sm="6">
            <div class="mb-2">Nội dung</div>

            <v-text-field
              v-model="textSearch"
              solo
              label="Nhập..."
              dense
              hide-details="auto"
            ></v-text-field>

            <div>
              <button
                class="btn color-text-serach primary mt-2 ml-0"
                @click.stop="getListFeedbackFilter"
              >
                Tìm Kiếm
              </button>
            </div>
          </v-col>

          <v-col cols="12" sm="6">
            <div class="mb-2">Ngày gửi</div>

            <v-text-field
              :rules="[
                rules.date,
                rules.checkDateNow,
                rules.checkDateInputStartSend,
              ]"
              v-model="textDateStartSend"
              class="custom-input mr-4"
              solo
              label="Từ ngày ..."
              dense
              hide-details="auto"
            ></v-text-field>
            <v-text-field
              :rules="[
                rules.date,
                rules.checkDateNow,
                rules.checkDateInputEndSend,
              ]"
              v-model="textDateEndSend"
              class="custom-input"
              solo
              label="Đến ngày ..."
              dense
              hide-details="auto"
            ></v-text-field>
          </v-col>

          <!-- <v-col cols="12" sm="4">
            <div class="mb-2">Ngày trả lời</div>

            <v-text-field
              :rules="[
                rules.date,
                rules.checkDateNow,
                rules.checkDateInputStartRep,
              ]"
              v-model="textDateStartRep"
              class="custom-input mr-4"
              solo
              label="Từ ngày ..."
              dense
              hide-details="auto"
            ></v-text-field>
            <v-text-field
              :rules="[rules.date, rules.checkDateNow]"
              v-model="textDateEndRep"
              class="custom-input"
              solo
              label="Đến ngày ..."
              dense
              hide-details="auto"
            ></v-text-field>
          </v-col> -->
        </v-row>
      </v-container>
    </v-card>

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
              {{
                item.TraLoi.NoiDung || item.TraLoi.Attachment
                  ? "Đã trả lời"
                  : "Chưa trả lời"
              }}
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
                  <v-icon size="18">mdi-clipboard-text</v-icon>
                </v-btn>
              </template>
              <span>Chi tiết góp ý trả lời</span>
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
      <v-dialog max-width="1400" v-model="dialogForm" persistent>
        <v-card>
          <v-toolbar dark color="primary" class="px-3">
            <v-toolbar-title v-if="edittingForm"
              >Chi tiết góp ý</v-toolbar-title
            >
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn icon dark @click="closeModalForm">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <DetailsFeedback :dataEdit="dataEdit" />

          <v-card-text class="px-2 py-2" style="background: #eee">
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
                @click.native="dialogFormAnswer = true"
              >
                <v-icon left dark size="18">
                  mdi-file-document-plus-outline
                </v-icon>
                <span v-if="edittingForm">Cập nhật câu trả lời</span>
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>

    <div v-if="dialogFormAnswer">
      <v-dialog max-width="1000" v-model="dialogFormAnswer" persistent>
        <v-card>
          <v-toolbar dark color="primary" class="px-3">
            <v-toolbar-title v-if="edittingForm">Trả lời góp ý</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn icon dark @click="closeModalAnswer">
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
                @click="closeModalAnswer"
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
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";
import toastr from "toastr";
import FormGopY from "@/views/FormGopY";
import moment from "moment";
import DetailsFeedback from "@/views/DetailsFeedback";
export default {
  components: {
    Pagination,
    FormGopY,
    DetailsFeedback,
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
      optionStatus: [
        { text: "Chưa trả lời", value: "2" },
        { text: "Đã trả lời", value: "3" },
      ],
      optionStatusPublic: [
        { text: "Công khai", value: "1" },
        { text: "Đang soạn thảo", value: "0" },
      ],
      optionTheme: [],
      textDateStartSend: "",
      textDateEndSend: "",
      // textDateStartRep: "",
      // textDateEndRep: "",
      selectedStatus: "",
      selectedStatusPublic: "",
      selectedTheme: "",
      dialogFormAnswer: false,
      rules: {
        date: (value) => {
          const pattern =
            /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
          let status;
          if (value === "") {
            status = true;
          } else {
            status = pattern.test(value) || "Định dạng ngày là: ngày/tháng/năm";
          }
          return status;
        },
        checkDateNow: (value) => {
          const getDatePresent = moment(new Date(), "DD/MM/YYYY").valueOf();
          const getDateInput = moment(value, "DD/MM/YYYY").valueOf();
          const status = getDatePresent - getDateInput > 0 ? true : false;
          return (
            status ||
            `Ngày nhập không được sau ngày ${moment(
              new Date(),
              "DD/MM/YYYY"
            ).format("DD/MM/YYYY")}`
          );
        },
        checkDateInputStartSend: (value) => {
          if (this.textDateEndSend) {
            const getDate = moment(
              this.textDateEndSend,
              "DD/MM/YYYY"
            ).valueOf();
            const getDateInput = moment(value, "DD/MM/YYYY").valueOf();
            const status = getDate - getDateInput > 0 ? true : false;
            return (
              status ||
              `Ngày nhập không được sau ngày ${moment(
                this.textDateEndSend,
                "DD/MM/YYYY"
              ).format("DD/MM/YYYY")}`
            );
          }
          return true;
        },
        checkDateInputEndSend: (value) => {
          if (this.textDateStartSend) {
            const getDate = moment(
              this.textDateStartSend,
              "DD/MM/YYYY"
            ).valueOf();
            const getDateInput = moment(value, "DD/MM/YYYY").valueOf();
            const status = getDate - getDateInput > 0 ? false : true;
            return (
              status ||
              `Ngày nhập không được sau ngày ${moment(
                this.textDateStartSend,
                "DD/MM/YYYY"
              ).format("DD/MM/YYYY")}`
            );
          }
          return true;
        },
        // checkDateInputStartRep: (value) => {
        //   if (this.textDateEndRep) {
        //     const getDate = moment(this.textDateEndRep, "DD/MM/YYYY").valueOf();
        //     const getDateInput = moment(value, "DD/MM/YYYY").valueOf();
        //     const status = getDate - getDateInput > 0 ? true : false;
        //     return (
        //       status ||
        //       `Ngày nhập không được sau ngày ${moment(
        //         this.textDateEndRep,
        //         "DD/MM/YYYY"
        //       ).format("DD/MM/YYYY")}`
        //     );
        //   }
        //   return true;
        // },
      },
    };
  },
  created() {
    const vm = this;
    vm.getListData();

    vm.getListData({
      param: { size: 1000, danhMuc_maDanhMuc: "CHUDEGOPY" },
      type: "dulieudanhmuc",
    });
  },

  mounted() {
    console.log("select: ", this.selected);
  },

  methods: {
    getListFeedbackFilter() {
      const vm = this;
      let param = {};
      if (vm.textDateStartSend && vm.textDateEndSend) {
        param = {
          NgayGuiFrom: moment(vm.textDateStartSend, "DD/MM/YYYY").valueOf(),
          NgayGuiTo: moment(vm.textDateEndSend, "DD/MM/YYYY").valueOf(),
        };
      } else if (vm.textDateStartSend) {
        param = {
          NgayGuiFrom: moment(vm.textDateStartSend, "DD/MM/YYYY").valueOf(),
        };
      } else if (vm.textDateEndSend) {
        param = {
          NgayGuiTo: moment(vm.textDateEndSend, "DD/MM/YYYY").valueOf(),
        };
      }
      console.log("tim kiếm");
      vm.getListData({ param: { keyword: vm.textSearch, ...param } });
      vm.textSearch = "";
      vm.textDateStartSend = "";
      vm.textDateEndSend = "";
    },
    getListData(dataParam) {
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
        collectionName: dataParam?.type ? dataParam?.type : "gopy",
        data: !dataParam?.param
          ? dataPayload
          : { ...dataPayload, ...dataParam?.param },
      };
      vm.$store
        .dispatch("collectionFilter", filter)
        .then(function (response) {
          if (!dataParam?.type) {
            vm.listFeedback = response.content;
            console.log("res: ", vm.listFeedback);
            vm.total = vm.listFeedback.length;
            vm.pageCount = response.totalPages;
            vm.loadingData = false;
          } else {
            vm.optionTheme = response.content.map((item) => ({
              text: item.tenMuc,
              value: item.maMuc,
            }));
          }
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
    closeModalAnswer() {
      const vm = this;
      vm.dialogFormAnswer = false;
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
          CongKhai: formData.CongKhai,
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
              if (vm.emitDataFile && !vm.dataEdit?.TraLoi?.Attachment) {
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
                    vm.getListData();
                    console.log("res: ", response);
                  })
                  .catch(function () {});
              } else if (
                vm.emitDataFile &&
                vm.dataEdit?.TraLoi?.Attachment &&
                typeof vm.emitDataFile !== "string"
              ) {
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
                    vm.getListData();
                    console.log("res: ", response);
                  })
                  .catch(function () {});
              } else {
                vm.getListData();
              }
              vm.dialogFormAnswer = false;
              vm.dialogForm = false;
              vm.emitDataFile = null;
              console.log("res post: ", response);
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
  watch: {
    selectedStatusPublic(newValue) {
      const vm = this;
      vm.selectedStatus = "";
      vm.selectedTheme = "";
      vm.getListData({ param: { CongKhai: newValue } });
    },
    selectedStatus(newValue) {
      const vm = this;
      vm.selectedTheme = "";
      vm.selectedStatusPublic = "";
      vm.getListData({ param: { TinhTrang: newValue } });
    },
    selectedTheme(newValue) {
      const vm = this;
      vm.selectedStatus = "";
      vm.selectedStatusPublic = "";
      vm.getListData({ param: { ChuDeMaMuc: newValue } });
    },
  },
};
</script>

<style lang="scss" scoped>
.color-text-serach {
  color: #fff;
}
.custom-input {
  width: 48%;
  display: inline-block;
}
</style>