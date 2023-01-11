<template>
  <div>
    <v-row>
      <v-col cols="12" sm="5">
        <div class="d-flex align-center" style="padding-top: 1.6px">
          <input
            style="height: 32px; outline: none"
            v-model="textSearch"
            class="form-control"
            type="text"
            placeholder="Nhập tiêu đề..."
            autocomplete="off"
          />
          <button
            class="btn btn-search primary"
            @click.stop="getListstudentFilter"
          >
            <v-icon left dark size="22">mdi mdi-magnify-minus-outline</v-icon>
          </button>
        </div>
      </v-col>
      <v-col cols="12" :sm="!unitId ? 2 : 4">
        <div>
          <v-select
            class="custom-height-select-filter"
            v-model="statusUpoadFile"
            :items="optionStatusUpoadFile"
            label="Trạng thái tải ảnh"
            @change="handlechangeSelectedCheckFile"
            dense
            solo
          ></v-select>
        </div>
      </v-col>

      <v-col cols="12" sm="2" v-if="!unitId">
        <div>
          <v-select
            class="custom-height-select-filter"
            :items="optionAgencies"
            v-model="agenciesValue"
            @change="handlechangeSelectedAgencies"
            label="Cơ quan đơn vị"
            dense
            solo
          ></v-select>
        </div>
      </v-col>

      <v-col cols="12" sm="3">
        <div style="float: right" class="d-flex">
          <button
            :disabled="checkDisable"
            @click.stop="repuestAddImage"
            :class="
              checkDisable ? 'btn-disable btn-add' : 'btn btn-add primary'
            "
          >
            <v-icon left dark size="22">mdi-file-plus</v-icon>
            Yêu cầu thêm ảnh
          </button>
          <button
            @click.stop="showModalForm"
            class="btn btn-add primary"
            v-if="checkActionAddAndUpdate"
          >
            <v-icon left dark size="22">mdi-file-plus</v-icon>
            Thêm mới
          </button>
        </div>
      </v-col>
    </v-row>

    <v-row class="my-0 mb-3">
      <v-col cols="12" class="pt-0">
        <v-data-table
          v-model="selected"
          :show-select="!checkDisable ? true : false"
          :headers="headers"
          :items="listStudent"
          :items-per-page="itemsPerPage"
          item-key="PrimKey"
          hide-default-footer
          class="table-base mt-2"
          no-data-text="Không có dữ liệu"
          :loading="loadingData"
          loading-text="Đang tải... "
          item-text="name"
          @toggle-select-all="selectAllToggle"
        >
          <template
            v-slot:item.data-table-select="{ item, isSelected, select }"
          >
            <v-simple-checkbox
              v-if="!item.MainImage.FileUrl"
              :value="isSelected"
              :ripple="false"
              @input="select($event)"
            ></v-simple-checkbox>
          </template>

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
                  @click.stop="viewDetailStudent(item)"
                >
                  <v-icon size="18">mdi-clipboard-text</v-icon>
                </v-btn>
              </template>
              <span>Thông tin chi tiết sinh viên</span>
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
      <v-dialog max-width="800px" v-model="dialogForm" persistent fullscreen>
        <v-card>
          <v-toolbar dark color="primary" class="px-3">
            <v-toolbar-title v-if="edittingForm"
              >Cập nhật sinh viên</v-toolbar-title
            >
            <v-toolbar-title v-if="!edittingForm"
              >Thêm mới sinh viên</v-toolbar-title
            >
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn icon dark @click="closeModalForm">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <FormSinhVien
            :dataEdit="dataEdit"
            ref="formSinhVienBoRef"
            :unitId="unitId"
            :checkActionAddAndUpdate="checkActionAddAndUpdate"
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

    <div v-if="dialogFormDetails">
      <v-dialog max-width="1400px" v-model="dialogFormDetails" persistent>
        <v-card>
          <v-toolbar dark color="primary" class="px-3">
            <v-toolbar-title>Thông tin chi tiết sinh viên</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn icon dark @click="closeModalFormDetail">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <DetailStudent :dataStudent="dataEdit" />
          <v-card-text class="px-2 py-2" style="background: #eee">
            <v-card-actions class="justify-center my-4">
              <v-btn
                small
                depressed
                color="red"
                class="white--text mr-2"
                :loading="loadingAction"
                :disabled="loadingAction"
                @click="closeModalFormDetail"
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
                @click.native="editStudent"
              >
                <v-icon left dark size="18">
                  mdi-file-document-plus-outline
                </v-icon>
                <span>Sửa thông tin sinh viên</span>
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
          <v-btn color="primary darken-1" text @click="dialogDelete = false">
            Từ chối
          </v-btn>
          <v-btn color="primary darken-1" text @click="deleteStudent">
            Xác nhận
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";
import toastr from "toastr";
import FormSinhVien from "@/views/FormSinhVien";
import moment from "moment";
import DetailStudent from "@/views/DetailStudent";
import { mapState } from "vuex";
import { actionAuthor } from "../constant/actionAuthor";
import { useAccountAuthorization } from "../mixin";
import { textAuthor } from "../constant/textAuthorView";

export default {
  components: {
    Pagination,
    FormSinhVien,
    DetailStudent,
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
          text: "Họ và tên",
          align: "left",
          value: "HoVaTen",
          class: "th-center",
          width: 120,
        },
        {
          sortable: false,
          text: "Mã sinh viên",
          align: "left",
          value: "MaSinhVien",
          class: "th-center",
          width: 120,
        },
        {
          sortable: false,
          text: "Email",
          align: "left",
          value: "EmailVNU",
          class: "th-center",
          width: 120,
        },
        {
          sortable: false,
          text: "Số báo danh",
          align: "left",
          value: "SoBaoDanh",
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
      listStudent: [],
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
      idStudent: "",
      dialogFormDetails: false,
      statusUpoadFile: "",
      optionStatusUpoadFile: [
        { text: "Sinh viên đã có ảnh", value: true },
        { text: "Sinh viên chưa có ảnh", value: false },
      ],
      agenciesValue: "",
      checkAuthorViewStudent: "",
      unitId: "",
      checkActionAddAndUpdate: "",
    };
  },
  created() {
    const vm = this;
    vm.unitId = vm.$cookies.get("UserInfo", "").MaDonVi;
    vm.getList("listAgencies", "coquandonvi");
    vm.getList("listProvince", "tinhthanh", { tinhTrang: "1" });
    vm.getList("listGender", "gioitinh", { tinhTrang: "1" });

    vm.checkAuthorViewStudent = vm.handleCheckAuthor(
      actionAuthor.XEM_SINH_VIEN_ALL,
      actionAuthor.XEM_SINH_VIEN_DV
    );

    vm.checkActionAddAndUpdate = vm.handleCheckAuthor(
      actionAuthor.THEM_MOI_SINH_VIEN_ALL,
      actionAuthor.THEM_MOI_SINH_VIEN_DV
    );

    if (vm.checkAuthorViewStudent === textAuthor.ALL) {
      vm.getListStudent();
    } else {
      vm.getListStudent({ CoQuanDonVi_MaHanhChinh: vm.unitId });
    }

    console.log(
      "create stydent: ",
      vm.checkAuthorViewStudent,
      vm.unitId,
      vm.checkActionAddAndUpdate
    );
  },

  mounted() {},

  methods: {
    getListstudentFilter() {
      const vm = this;
      console.log("tim kiếm");
      vm.getListStudent({ keyword: vm.textSearch });
      vm.textSearch = "";
      vm.statusUpoadFile = "";
    },
    getList(state, collectionName, dataParam) {
      let vm = this;
      const dataPayload = {
        page: 0,
        size: 20,
        keyword: "",
        orderFields: "",
        orderTypes: "",
        tinhTrang: "",
        thamChieu_maMuc: "",
      };
      let filter = {
        collectionName,
        state,
        data: !dataParam ? dataPayload : { ...dataPayload, ...dataParam },
      };
      vm.$store
        .dispatch("collectionFilterInstore", filter)
        .then(function (response) {
          console.log("res: ", response);
        })
        .catch(function () {
          console.log("Error");
        });
    },
    getListStudent(dataParam) {
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
        collectionName: "sinhvien",
        data: !dataParam ? dataPayload : { ...dataPayload, ...dataParam },
      };
      vm.$store
        .dispatch("collectionFilter", filter)
        .then(function (response) {
          console.log("res student: ", response);
          vm.listStudent = response.content;
          vm.total = vm.listStudent.length;
          vm.pageCount = response.totalPages;
          vm.loadingData = false;
        })
        .catch(function () {
          vm.loadingData = false;
        });
    },
    handlechangeSelectedCheckFile(value) {
      const vm = this;
      vm.getListStudent({ HasImageAttach: value });
      vm.textSearch = "";
      vm.agenciesValue = "";
    },
    handlechangeSelectedAgencies(value) {
      const vm = this;
      vm.getListStudent({ CoQuanDonVi_MaHanhChinh: value });
      vm.textSearch = "";
      vm.statusUpoadFile = "";
    },
    openDialogDeleteItem(item) {
      const vm = this;
      console.log("id delete: ", item.PrimKey);
      vm.dialogDelete = true;
      vm.idStudent = item.PrimKey;
    },
    deleteStudent() {
      const vm = this;
      vm.dialogDelete = false;
      const payload = {
        payload: vm.idStudent,
        type: "sinhvien",
      };
      vm.$store
        .dispatch("deleteItemData", payload)
        .then(function (response) {
          toastr.success("Xóa thành công");
          vm.listStudent = vm.listStudent.reduce(function (res, cur) {
            if (vm.idStudent !== cur.PrimKey) res.push(cur);
            return res;
          }, []);
          vm.total = vm.listStudent.length;
          console.log("res dele: ", response);
        })
        .catch(function () {
          vm.loadingData = false;
        });
    },
    editStudent() {
      const vm = this;
      vm.edittingForm = true;
      vm.dialogForm = true;
    },
    viewDetailStudent(item) {
      const vm = this;
      const data = {
        ...item,
        GioiTinh: {
          MaMuc: item.GioiTinh.MaMuc,
          TenMuc: item.GioiTinh.TenMuc,
        },
        // TinhThanh: {
        //   MaMuc: item?.DiaChiThuongTru.TinhThanh.MaMuc,
        //   TenMuc: item?.DiaChiThuongTru.TinhThanh.TenMuc,
        // },
        // QuanHuyen: {
        //   MaMuc: item?.DiaChiThuongTru.QuanHuyen.MaMuc,
        //   TenMuc: item?.DiaChiThuongTru.QuanHuyen.TenMuc,
        // },
        // PhuongXa: {
        //   MaMuc: item?.DiaChiThuongTru.PhuongXa.MaMuc,
        //   TenMuc: item?.DiaChiThuongTru.PhuongXa.TenMuc,
        // },
        // CoQuanDonVi: {
        //   MaHanhChinh: item?.CoQuanDonVi.MaHanhChinh,
        //   TenGoi: item?.CoQuanDonVi.TenGoi,
        // },
      };
      vm.dialogFormDetails = true;
      vm.dataEdit = { ...data };
    },
    handlechangePage(pageCurent) {
      const vm = this;
      vm.getListStudent(pageCurent);
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
    closeModalFormDetail() {
      const vm = this;
      vm.dataEdit = {};
      vm.dialogFormDetails = false;
    },
    selectAllToggle(props) {
      const vm = this;
      const result = props.items.filter((item) => !item.MainImage.FileUrl);
      vm.selected = result;
      console.log(vm.selected, props, result);
    },
    repuestAddImage() {
      const vm = this;
      if (vm.selected.length) {
        const listIdStudent = vm.selected.map((item) => item.PrimKey).join(",");
        const dataPayload = {
          listNguoiDung: listIdStudent,
        };

        const filter = {
          type: "album/requireImage",
          payload: dataPayload,
        };
        vm.$store
          .dispatch("notificationUploadFileImage", filter)
          .then(function (response) {
            toastr.success("Gửi yêu cầu thành công");
          })
          .catch(function () {});

        console.log("requite: ", vm.selected);
      } else {
        toastr.error("Vui lòng chọn sinh viên để thực hiện thao tác");
      }
    },
    submitForm() {
      const vm = this;
      if (vm.$refs.formSinhVienBoRef.validateForm()) {
        const formData = vm.$refs.formSinhVienBoRef.formData;

        const dataPayload = {
          ...formData,
          MaSinhVien: formData.MaSinhVien.replace(/ +/g, ""),
          NgaySinh: formData.NgaySinh
            ? moment(formData.NgaySinh, "DD/MM/YYYY").valueOf()
            : "",
          DiaChiThuongTru: {
            SoNhaChiTiet: formData.DiaChiThuongTru,
            TinhThanh: formData.TinhThanh,
            QuanHuyen: formData.QuanHuyen,
            PhuongXa: formData.PhuongXa,
          },
          CoQuanDonVi: { ...formData.CoQuanDonVi },
          DanhBaLienLac: {
            SoDienThoai: formData.SoDienThoai,
          },
        };
        delete dataPayload.MainImageUrl;
        delete dataPayload.TinhThanh;
        delete dataPayload.QuanHuyen;
        delete dataPayload.PhuongXa;
        delete dataPayload.DiaChiThuongTru;
        delete dataPayload.DanhBaLienLac;

        if (!vm.edittingForm) {
          const payload = {
            payload: dataPayload,
            type: "sinhvien",
          };
          vm.$store
            .dispatch("createItemData", payload)
            .then(function (response) {
              toastr.success("Thêm mới thành công");
              vm.dialogForm = false;

              if (vm.listStudent.length < vm.itemsPerPage) {
                const data = [...vm.listStudent];
                data.push({
                  ...dataPayload,
                  PrimKey: response.data.resp.PrimKey,
                  MainImage: response.data.resp.MainImage,
                });
                vm.listStudent = data;
                vm.total = vm.listStudent.length;
              }

              console.log("res post: ", response);
            })
            .catch(function () {
              vm.loadingData = false;
              toastr.error("Vui lòng kiểm tra lại dữ liệu nhập vào các trường");
            });
        } else {
          const payload = {
            payload: dataPayload,
            type: "sinhvien",
            id: vm.dataEdit.PrimKey,
          };
          vm.$store
            .dispatch("editItemData", payload)
            .then(function (response) {
              toastr.success("Cập nhật thành công");
              vm.dialogForm = false;
              vm.listStudent = vm.listStudent.reduce(function (res, cur) {
                if (vm.dataEdit.PrimKey === cur.PrimKey) {
                  return [
                    ...res,
                    {
                      ...dataPayload,
                      PrimKey: vm.dataEdit.PrimKey,
                      MainImage: response.data.resp.MainImage,
                    },
                  ];
                } else {
                  return [...res, cur];
                }
              }, []);
              console.log("res edit: ", response, dataPayload, vm.listStudent);
              vm.dataEdit = {};
              vm.dialogFormDetails = false;
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
  computed: {
    ...mapState(["listAgencies"]),
    checkDisable() {
      const vm = this;
      const result = vm.listStudent.filter((item) => !item.MainImage.FileUrl);
      if (result.length) return false;
      return true;
    },
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

<style>
.custom-height-select-filter > .v-input__control {
  min-height: 32px !important;
}
.btn-disable {
  background-color: rgba(0, 0, 0, 0.12) !important;
  color: #b1b1b1;
  padding: 5px 10px;
  height: 32px;
  font-size: 14px;
  border-radius: 2px;
}
</style>
