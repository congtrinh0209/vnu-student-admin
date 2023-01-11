<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12" sm="5">
        <input
          style="height: 32px; outline: none"
          v-model="textSearch"
          class="form-control"
          type="text"
          placeholder="Nhập tiêu đề tin tức..."
          autocomplete="off"
        />
      </v-col>
      <v-col cols="12" sm="1">
        <button class="btn btn-search primary" @click.stop="getListNewsFilter">
          <v-icon left dark size="22">mdi mdi-magnify-minus-outline</v-icon>
        </button>
      </v-col>

      <v-col cols="12" sm="2" v-if="checkViewNews === 'ALL'">
        <div>
          <v-select
            class="custom-height-select-filter"
            :items="optionAgencies"
            @change="handlechangeSelectedAgencies"
            label="Cơ quan đơn vị"
            dense
            solo
          ></v-select>
        </div>
      </v-col>

      <v-col
        cols="12"
        :sm="checkViewNews === 'ALL' ? 4 : 6"
        v-if="checkActionAddAndUpdate"
      >
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
          :items="listNews"
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
          <template v-slot:item.TinhTrang="{ item, index }">
            <td>
              {{ item.TinhTrang === "2" ? "Xuất bản" : "Ngừng xuất bản" }}
            </td>
          </template>
          <template v-slot:item.thaotac="{ item }">
            <v-tooltip top v-if="item.TinhTrang !== '2'">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="#2161b1"
                  text
                  icon
                  v-bind="attrs"
                  v-on="on"
                  @click.stop="editNews(item)"
                >
                  <v-icon size="18">mdi-pencil</v-icon>
                </v-btn>
              </template>
              <span>Sửa</span>
            </v-tooltip>

            <v-tooltip top v-if="item.TinhTrang !== '2'">
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
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-if="checkActionPublish || checkActionUnPublish"
                  color="#2161b1"
                  text
                  icon
                  class="ml-2"
                  v-bind="attrs"
                  v-on="on"
                  @click.stop="openDialogPublicDate(item)"
                >
                  <v-icon size="18">{{ viewActionPublish(item) }}</v-icon>
                </v-btn>
              </template>
              <span>{{
                item.TinhTrang === "2" ? "Ngừng xuất bản" : "Xuất bản"
              }}</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="#2161b1"
                  text
                  icon
                  class="ml-2"
                  v-bind="attrs"
                  v-on="on"
                  @click.stop="handleShowNews(item)"
                >
                  <v-icon size="18">mdi-eye</v-icon>
                </v-btn>
              </template>
              <span>Hiển thị bài viết</span>
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
              >Cập nhật bài viết tin tức</v-toolbar-title
            >
            <v-toolbar-title v-if="!edittingForm"
              >Thêm mới bài viết tin tức</v-toolbar-title
            >
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn icon dark @click="closeModalForm">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <FormBaiVietTinTuc
            ref="formBaiVietTinTucRef"
            :dataEdit="dataEdit"
            @emitDataAgencies="handleEmitDataAgencies"
            @emitDataCategoryNews="handleEmitDataCategoryNews"
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
          <v-btn color="primary" text @click="deleteNews"> Xác nhận </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <div v-if="dialogPublicDate">
      <v-dialog v-model="dialogPublicDate" persistent max-width="860px">
        <v-card>
          <v-toolbar dark color="primary" class="px-3">
            <span class="text-h5">Ngày xuất bản</span>
          </v-toolbar>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <FormPublicDate
                    :dataItem="dataItem"
                    ref="formPublicDateRef"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              small
              depressed
              color="red"
              class="white--text mr-2"
              :loading="loadingAction"
              :disabled="loadingAction"
              @click="dialogPublicDate = false"
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
              @click="handlePublicDate"
            >
              <v-icon left dark size="18">
                mdi-file-document-plus-outline
              </v-icon>
              <span>Xác nhận</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";
import toastr from "toastr";
import moment from "moment";
import FormBaiVietTinTuc from "@/views/FormBaiVietTinTuc";
import FormPublicDate from "@/views/FormPublicDate";
import { actionAuthor } from "../constant/actionAuthor";
import { useAccountAuthorization } from "../mixin";
import { textAuthor } from "../constant/textAuthorView";
import { mapState } from "vuex";

export default {
  components: {
    Pagination,
    FormBaiVietTinTuc,
    FormPublicDate,
  },

  mixins: [useAccountAuthorization],

  data() {
    return {
      switch1: true,
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
          text: "Tên bài viết",
          align: "left",
          value: "TenBaiViet",
          class: "th-center",
          width: 120,
        },
        {
          sortable: false,
          text: "Tình trạng",
          align: "left",
          value: "TinhTrang",
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
      listNews: [],
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
      idNews: "",
      dialogDecentralization: false,
      dataEditNews: [],
      emitDataAgencies: [],
      emitDataCategoryNews: [],
      dialogPublicDate: false,
      dataItem: {},
      checkViewNews: "",
      checkActionAddAndUpdate: "",
      checkActionPublish: "",
      checkActionUnPublish: "",
      inforAccount: "",
    };
  },
  created() {
    const vm = this;

    vm.inforAccount = vm.$cookies.get("UserInfo", "");

    vm.checkActionPublish = vm.handleCheckActionAuthor(
      actionAuthor.XUAT_BAN_TIN_BAI
    );

    vm.checkActionUnPublish = vm.handleCheckActionAuthor(
      actionAuthor.HUY_XUAT_BAN_TIN_BAI
    );

    vm.checkViewNews = vm.handleCheckAuthor(
      actionAuthor.XEM_TIN_BAI_ALL,
      actionAuthor.XEM_TIN_BAI_DV
    );

    vm.checkActionAddAndUpdate = vm.handleCheckAuthor(
      actionAuthor.CAP_NHAT_TIN_BAI_ALL,
      actionAuthor.CAP_NHAT_TIN_BAI_DV
    );

    console.log(vm.checkViewNews, vm.checkActionAddAndUpdate);

    if (vm.checkViewNews === textAuthor.ALL) {
      vm.getListNews();
    } else {
      vm.getListNews({ MaHanhChinhDonViSearch: vm.inforAccount.MaDonVi });
    }
  },

  mounted() {
    console.log("select: ");
  },
  computed: {
    ...mapState(["listAgencies"]),
    optionAgencies() {
      const vm = this;
      const result = vm.listAgencies.map((item) => ({
        text: item.tenGoi,
        value: item.maHanhChinh,
      }));
      if (vm.listAgencies.length) return result;
      return [];
    },
  },
  methods: {
    getListNewsFilter() {
      const vm = this;
      console.log("tim kiếm");
      vm.getListNews({ keyword: vm.textSearch });
      vm.textSearch = "";
    },
    getListNews(dataParam) {
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
        collectionName: "baiviettintuc",
        data: !dataParam ? dataPayload : { ...dataPayload, ...dataParam },
      };
      vm.$store
        .dispatch("collectionFilter", filter)
        .then(function (response) {
          vm.listNews = response.content;
          console.log("res: ", vm.listNews);
          vm.total = vm.listNews.length;
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
      vm.idNews = item.PrimKey;
    },
    deleteNews() {
      const vm = this;
      vm.dialogDelete = false;
      const payload = {
        payload: vm.idNews,
        type: "baiviettintuc",
      };
      vm.$store
        .dispatch("deleteItemData", payload)
        .then(function (response) {
          toastr.success("Xóa thành công");
          vm.listNews = vm.listNews.reduce(function (res, cur) {
            if (vm.idNews !== cur.PrimKey) res.push(cur);
            return res;
          }, []);
          vm.total = vm.listNews.length;

          console.log("res dele: ", response);
        })
        .catch(function () {
          vm.loadingData = false;
        });
    },
    editNews(item) {
      const vm = this;
      const dataEdit = {
        ...item,
        CoQuanDonVi: {
          MaHanhChinh: item.CoQuanDonVi.MaHanhChinh,
          TenGoi: item.CoQuanDonVi.TenGoi,
        },
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
    handleEmitDataAgencies(data) {
      const vm = this;
      vm.emitDataAgencies = data;
    },
    handleEmitDataCategoryNews(data) {
      const vm = this;
      vm.emitDataCategoryNews = data;
    },
    openDialogPublicDate(item) {
      const vm = this;
      if (item.TinhTrang !== "2") {
        vm.dialogPublicDate = true;
        vm.dataItem = item;
      } else {
        item.TinhTrang = "1";

        const payload = {
          payload: item,
          type: "baiviettintuc",
          id: item.PrimKey,
        };

        vm.$store
          .dispatch("editItemData", payload)
          .then(function (response) {
            toastr.success("Cập nhật thành công");
            vm.dialogForm = false;
            vm.listNews = vm.listNews.reduce(function (res, cur) {
              if (item.PrimKey === cur.PrimKey) {
                return [
                  ...res,
                  {
                    ...cur,
                    ...response.data.resp,
                  },
                ];
              } else {
                return [...res, cur];
              }
            }, []);
            console.log(vm.listNews);
          })
          .catch(function () {
            vm.loadingData = false;
            toastr.error("Vui lòng kiểm tra lại dữ liệu nhập vào các trường");
          });
      }
    },
    handlePublicDate() {
      const vm = this;
      if (vm.$refs.formPublicDateRef.validateForm()) {
        const formData = vm.$refs.formPublicDateRef.formData;
        const dataPayload = { ...vm.dataItem, ...formData };
        dataPayload.NgayXuatBan = !dataPayload.NgayXuatBan
          ? ""
          : moment(dataPayload.NgayXuatBan, "DD/MM/YYYY").valueOf();
        dataPayload.NgayHuyXuatBan = !dataPayload.NgayHuyXuatBan
          ? ""
          : moment(dataPayload.NgayHuyXuatBan, "DD/MM/YYYY").valueOf();
        console.log("dataPayload: ", dataPayload, formData);
        const payload = {
          payload: dataPayload,
          type: "baiviettintuc",
          id: vm.dataItem.PrimKey,
        };

        vm.$store
          .dispatch("editItemData", payload)
          .then(function (response) {
            toastr.success("Cập nhật thành công");
            vm.dialogPublicDate = false;
            vm.listNews = vm.listNews.reduce(function (res, cur) {
              if (vm.dataItem.PrimKey === cur.PrimKey) {
                return [
                  ...res,
                  {
                    ...cur,
                    ...dataPayload,
                  },
                ];
              } else {
                return [...res, cur];
              }
            }, []);
            vm.dataEdit = {};
            console.log(
              "res edit: ",
              response,
              dataPayload,
              vm.dataEdit.PrimKey,
              vm.listNews,
              formData
            );
          })
          .catch(function () {
            vm.loadingData = false;
            toastr.error("Vui lòng kiểm tra lại dữ liệu nhập vào các trường");
          });
      }
    },
    handleShowNews(item) {
      window.location.href = `${item.DuongDanRutGon}`;
    },
    handlechangeSelectedAgencies(value) {
      const vm = this;
      vm.getListNews({ MaHanhChinhDonViSearch: value });
      vm.textSearch = "";
    },
    viewActionPublish(item) {
      const vm = this;
      let str = "";
      if (item.TinhTrang === "2" && vm.checkActionPublish) {
        str = "mdi-calendar-blank";
      } else if (item.TinhTrang === "1" && vm.checkActionUnPublish) {
        str = "mdi mdi-calendar-check";
      }
      return str;
    },
    submitForm() {
      const vm = this;

      if (vm.$refs.formBaiVietTinTucRef.validateForm()) {
        const formData = vm.$refs.formBaiVietTinTucRef.formData;
        const regex =
          /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
        const dataPayload = {
          ...formData,
          NgayXuatBan: formData.NgayXuatBan
            ? moment.utc(formData.NgayXuatBan, "DD/MM/YYYY").format()
            : "",
          NgayHuyXuatBan: formData.NgayHuyXuatBan
            ? moment.utc(formData.NgayHuyXuatBan, "DD/MM/YYYY").format()
            : "",
        };

        if (vm.inforAccount.hasOwnProperty("MaDonVi")) {
          dataPayload.CoQuanDonVi = {
            MaHanhChinh: vm.inforAccount.MaDonVi,
          };
        }

        dataPayload.ChuyenMuc = vm.emitDataCategoryNews.reduce((res, cur) => {
          if (formData.ChuyenMuc.includes(cur.MaDinhDanh)) {
            return [...res, { MaDinhDanhChuyenMuc: cur.MaDinhDanh }];
          } else {
            return res;
          }
        }, []);

        if (!vm.edittingForm) {
          const payload = {
            payload: dataPayload,
            type: "baiviettintuc",
          };
          vm.$store
            .dispatch("createItemData", payload)
            .then(function (response) {
              toastr.success("Thêm mới thành công");
              if (!regex.test(formData.DuongDanRutGon)) {
                const payload = {
                  payload: {
                    DuongDanRutGon: `/#/tin-tuc/${response.data.resp.PrimKey}`,
                  },
                  type: "baiviettintuc",
                  id: response.data.resp.PrimKey,
                };

                vm.$store
                  .dispatch("editItemData", payload)
                  .then(function (response) {
                    vm.getListNews();
                    console.log(
                      "res edit:... ",
                      response,
                      dataPayload,
                      vm.dataEdit.PrimKey,
                      vm.listNews
                    );
                  })
                  .catch(function () {
                    vm.loadingData = false;
                    toastr.error("Lỗi cập nhật id");
                  });
              } else {
                vm.getListNews();
              }

              vm.dialogForm = false;
              console.log("res post: ", response);
            })
            .catch(function () {
              vm.loadingData = false;
              toastr.error("Vui lòng kiểm tra lại dữ liệu nhập vào các trường");
            });
        } else {
          if (!regex.test(dataPayload.DuongDanRutGon))
            dataPayload.DuongDanRutGon = `/#/tin-tuc/${vm.dataEdit.PrimKey}`;

          const payload = {
            payload: dataPayload,
            type: "baiviettintuc",
            id: vm.dataEdit.PrimKey,
          };

          vm.$store
            .dispatch("editItemData", payload)
            .then(function (response) {
              toastr.success("Cập nhật thành công");
              vm.dialogForm = false;
              vm.listNews = vm.listNews.reduce(function (res, cur) {
                if (vm.dataEdit.PrimKey === cur.PrimKey) {
                  return [
                    ...res,
                    {
                      ...cur,
                      ...dataPayload,
                    },
                  ];
                } else {
                  return [...res, cur];
                }
              }, []);

              vm.dataEdit = {};
              console.log(
                "res edit: ",
                response,
                dataPayload,
                vm.dataEdit.PrimKey,
                vm.listNews
              );
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