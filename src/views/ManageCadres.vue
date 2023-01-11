<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12" sm="5">
        <input
          style="height: 32px; outline: none"
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
          @click.stop="getListCadresFilter"
        >
          <v-icon left dark size="22">mdi mdi-magnify-minus-outline</v-icon>
        </button>
      </v-col>

      <v-col cols="12" sm="2" v-if="checkViewCadres === 'ALL'">
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

      <v-col cols="12" :sm="checkViewCadres === 'ALL' ? 4 : 6">
        <div style="float: right">
          <button
            @click.stop="showModalForm"
            class="btn btn-add primary"
            v-if="checkActionAddAndUpdate"
          >
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
          :items="listCadres"
          :items-per-page="itemsPerPage"
          item-key="MaSoCanBo"
          hide-default-footer
          class="table-base mt-2"
          no-data-text="Không có dữ liệu"
          :loading="loadingData"
          loading-text="Đang tải... "
          item-text="name"
          show-select
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
                  @click.stop="editCadres(item)"
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
      <v-dialog max-width="1200" v-model="dialogForm" persistent fullscreen>
        <v-card>
          <v-toolbar dark color="primary" class="px-3">
            <v-toolbar-title v-if="edittingForm"
              >Cập nhật cán bộ</v-toolbar-title
            >
            <v-toolbar-title v-if="!edittingForm"
              >Thêm mới cán bộ</v-toolbar-title
            >
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn icon dark @click="closeModalForm">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <form-can-bo
            :unitId="unitId"
            :checkActionAuthor="checkActionAuthor"
            ref="formCanBoRef"
            :dataEdit="dataEdit"
            :getListFunctionProps="getList"
            @emitDataGroup="handleEmitDataGroup"
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
    </v-dialog> -->

    <div v-if="dialogDecentralization">
      <v-dialog v-model="dialogDecentralization" persistent max-width="860px">
        <v-card>
          <v-toolbar dark color="primary" class="px-3">
            <span class="text-h5">Phân quyền cán bộ</span>
          </v-toolbar>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <FormPhanQuyenCanBo
                    :dataEditCadres="dataEditCadres"
                    ref="formPhanQuyenCanBoRef"
                    :dataCadres="listCadres"
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
              @click="dialogDecentralization = false"
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
              @click="handleDecentralization"
            >
              <v-icon left dark size="18">
                mdi-file-document-plus-outline
              </v-icon>
              <span>Phân quyền</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";
import FormCanBo from "./FormCanBo.vue";
import toastr from "toastr";
import moment from "moment";
import FormPhanQuyenCanBo from "./FormPhanQuyenCanBo.vue";
import { actionAuthor } from "../constant/actionAuthor";
import { useAccountAuthorization } from "../mixin";
import { textAuthor } from "../constant/textAuthorView";
import { mapState } from "vuex";

export default {
  components: {
    Pagination,
    FormPhanQuyenCanBo,
    "form-can-bo": FormCanBo,
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
          text: "Mã cán bộ",
          align: "left",
          value: "MaSoCanBo",
          class: "th-center",
          width: 120,
        },
        {
          sortable: false,
          text: "Họ tên",
          align: "left",
          value: "HoVaTen",
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
          text: "Tên nhóm quyền",
          align: "left",
          value: "tenNhomQuyen",
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
      listCadres: [],
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
      idCadres: "",
      dialogDecentralization: false,
      dataEditCadres: [],
      emitDataGroup: [],
      checkActionAuthor: false,
      unitId: "",
      checkActionAddAndUpdate: "",
      checkViewCadres: "",
    };
  },
  created() {
    const vm = this;
    vm.checkViewCadres = vm.handleCheckAuthor(
      actionAuthor.XEM_CAN_BO_ALL,
      actionAuthor.XEM_CAN_BO_DV
    );
    console.log("xem cb: ", vm.checkViewCadres);
    vm.checkActionAuthor = vm.handleCheckActionAuthor(
      actionAuthor.PHAN_QUYEN_CAN_BO
    );
    vm.getListCadres();

    console.log("cb create: ", vm.checkActionAuthor);

    vm.checkActionAddAndUpdate = vm.handleCheckAuthor(
      actionAuthor.THEM_MOI_CAN_BO_ALL,
      actionAuthor.THEM_MOI_CAN_BO_DV
    );

    if (vm.checkViewCadres !== textAuthor.ALL) {
      vm.unitId = vm.$cookies.get("UserInfo", "").MaDonVi;
    }

    console.log("user", vm.$cookies.get("UserInfo", ""));
  },

  mounted() {
    console.log("select: ", this.selected);
  },

  methods: {
    getListCadresFilter() {
      const vm = this;
      console.log("tim kiếm");
      vm.getListCadres({ keyword: vm.textSearch });
      vm.textSearch = "";
    },
    getListCadres(dataParam) {
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
        collectionName: "canbo",
        data: !dataParam ? dataPayload : { ...dataPayload, ...dataParam },
      };
      vm.$store
        .dispatch("collectionFilter", filter)
        .then(function (response) {
          vm.listCadres = response.content.map((item) => ({
            ...item,
            tenNhomQuyen: item.ListQuyenCanBo.map((el) => el.TenNhomQuyen).join(
              ", "
            ),
          }));

          console.log("res: ", vm.listCadres);
          vm.total = vm.listCadres.length;
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
      vm.idCadres = item.PrimKey;
    },
    deleteCadres() {
      const vm = this;
      vm.dialogDelete = false;
      const payload = {
        payload: vm.idCadres,
        type: "canbo",
      };
      vm.$store
        .dispatch("deleteItemData", payload)
        .then(function (response) {
          toastr.success("Xóa thành công");
          vm.listCadres = vm.listCadres.reduce(function (res, cur) {
            if (vm.idCadres !== cur.PrimKey) res.push(cur);
            return res;
          }, []);
          vm.total = vm.listCadres.length;

          console.log("res dele: ", response);
        })
        .catch(function () {
          vm.loadingData = false;
        });
    },
    editCadres(item) {
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
      vm.getListCadres(pageCurent);
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
    openDialogDecentralization() {
      const vm = this;
      vm.dialogDecentralization = true;
      vm.dataEditCadres = vm.selected.map((item) => item.MaDinhDanh);
    },
    handleDecentralization() {
      const vm = this;
      console.log("handleCkick: ", vm.selected);

      if (vm.$refs.formPhanQuyenCanBoRef.validateForm()) {
        const formData = vm.$refs.formPhanQuyenCanBoRef.formData;

        const payloadData = vm.listCadres.reduce((res, cur) => {
          if (formData.canbo.includes(cur.MaDinhDanh)) {
            return [
              ...res,
              {
                IdCanBo: cur.PrimKey,
                PhanQuyenCanBo: formData.TenNhomQuyen.map((el) => ({
                  MaDinhDanhNhomQuyen: el,
                  MaDinhDanhCanBo: cur.MaDinhDanh,
                })),
              },
            ];
          } else {
            return res;
          }
        }, []);

        const payload = {
          payload: payloadData,
          type: "canbo/many",
        };
        vm.$store
          .dispatch("createItemData", payload)
          .then(function (response) {
            toastr.success("Phân quyền thành công");
            vm.dialogDecentralization = false;
            vm.selected = [];
            vm.getListCadres();
            console.log("res post: ", response);
          })
          .catch(function () {
            vm.loadingData = false;
          });

        console.log("submit", formData, payloadData);
      }
    },
    handleEmitDataGroup(data) {
      const vm = this;
      vm.emitDataGroup = data;
    },
    handlechangeSelectedAgencies(value) {
      const vm = this;
      vm.getListCadres({ coQuanDonVi_maHanhChinh: value });
      vm.textSearch = "";
    },
    submitForm() {
      const vm = this;
      if (vm.$refs.formCanBoRef.validateForm()) {
        const formData = vm.$refs.formCanBoRef.formData;
        const dataPayload = {
          ...formData,
          MaSoCanBo: formData.MaSoCanBo.replace(/ +/g, ""),
          // NgaySinh: formData.NgaySinh ? moment(formData.NgaySinh, "DD/MM/YYYY").valueOf() : "",
          PhanQuyenCanBo: [],
          CoQuanDonVi: formData.CoQuanDonVi,
          GioiTinh: formData.GioiTinh,
          TinhTrangCongTac: {
            ...formData.TinhTrangCongTac,
            TinhTrangCongTac: formData.TinhTrangCongTac,
            CoQuanDonVi: formData.CoQuanDonVi,
            ViTriChucDanh: [
              {
                MaDinhDanh: "",
                TenGoi: "",
              },
            ],
          },
        };
        delete dataPayload.NgaySinh;
        delete dataPayload.TinhThanh;
        delete dataPayload.QuanHuyen;
        delete dataPayload.PhuongXa;
        // delete dataPayload.ListQuyenCanBo;
        delete dataPayload.DiaChiThuongTru;

        dataPayload.PhanQuyenCanBo = vm.emitDataGroup.reduce((res, cur) => {
          if (formData.ListQuyenCanBo.includes(cur.MaDinhDanh)) {
            return [...res, { MaDinhDanhNhomQuyen: cur.MaDinhDanh }];
          } else {
            return res;
          }
        }, []);

        if (!vm.edittingForm) {
          const payload = {
            payload: dataPayload,
            type: "canbo",
          };
          vm.$store
            .dispatch("createItemData", payload)
            .then(function (response) {
              toastr.success("Thêm mới thành công");
              if (vm.listCadres.length < vm.itemsPerPage) {
                const data = [...vm.listCadres];
                data.push({
                  ...dataPayload,
                  MaDinhDanh: response.data.resp.MaDinhDanh,
                  PrimKey: response.data.resp.PrimKey,
                });
                vm.listCadres = data;
              }
              vm.dialogForm = false;
              vm.total = vm.listCadres.length;
              console.log("res post: ", response);
            })
            .catch(function (err) {
              if (
                err.data.messageCode === "canbo.masocanbo_or_emailVNU_conflict"
              ) {
                toastr.error("Trùng mã cán bộ hoặc emailVNU");
              } else {
                toastr.error(
                  "Vui lòng kiểm tra lại dữ liệu nhập vào các trường"
                );
              }
              vm.loadingData = false;
            });
        } else {
          const payload = {
            payload: dataPayload,
            type: "canbo",
            id: vm.dataEdit.PrimKey,
          };

          vm.$store
            .dispatch("editItemData", payload)
            .then(function (response) {
              toastr.success("Cập nhật thành công");
              vm.dialogForm = false;
              vm.listCadres = vm.listCadres.reduce(function (res, cur) {
                if (vm.dataEdit.PrimKey === cur.PrimKey) {
                  return [
                    ...res,
                    {
                      ...cur,
                      ...dataPayload,
                      tenNhomQuyen: response.data.resp.ListQuyenCanBo.map(
                        (el) => el.TenNhomQuyen
                      ).join(", "),
                      ListQuyenCanBo: response.data.resp.ListQuyenCanBo,
                    },
                  ];
                } else {
                  return [...res, cur];
                }
              }, []);
              console.log(
                "res edit: ",
                response,
                dataPayload,
                vm.dataEdit.PrimKey,
                vm.listCadres
              );
              vm.dataEdit = {};
            })
            .catch(function () {
              vm.loadingData = false;
              toastr.error("Vui lòng kiểm tra lại dữ liệu nhập vào các trường");
            });
        }

        console.log("submit", formData);
      }
    },
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
};
</script>

<style lang="scss" scoped>
</style>