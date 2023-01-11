<template>
  <v-form
    class="dialog-body"
    ref="formSinhVienRef"
    lazy-validation
    v-model="validForm"
  >
    <v-row>
      <v-col cols="12" sm="6">
        <div class="titleText mb-2">
          Họ và tên: <span style="color: red">*</span>
        </div>
        <v-text-field
          :rules="[rules.required]"
          v-model="formData.HoVaTen"
          solo
          label="Nhập tên đầy đủ..."
          dense
          hide-details="auto"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="titleText mb-2">
          Số CCCD: <span style="color: red">*</span>
        </div>
        <v-text-field
          :rules="[rules.required, rules.idCard]"
          v-model="formData.ChungMinhThu"
          solo
          label="Nhập CCCD..."
          dense
          hide-details="auto"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6">
        <div class="titleText mb-2">Số điện thoại:</div>
        <v-text-field
          :rules="[rules.phone]"
          v-model="formData.SoDienThoai"
          solo
          label="Nhập số điện thoại..."
          dense
          hide-details="auto"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="titleText mb-2">Email VNU:</div>
        <v-text-field
          :rules="[rules.email]"
          v-model="formData.EmailVNU"
          solo
          label="Nhập email..."
          dense
          hide-details="auto"
          :disabled="dataEdit.EmailVNU ? true : false"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6">
        <div class="titleText mb-2">
          Ngày sinh: <span style="color: red">*</span>
        </div>
        <v-text-field
          :rules="[rules.birthday]"
          v-model="formData.NgaySinh"
          solo
          label="Nhập ngày sinh..."
          dense
          hide-details="auto"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <div class="titleText mb-2">Giới tính:</div>
        <v-select
          class="style-selected"
          v-model="formData.GioiTinh"
          :items="optionGender"
          label="Chọn"
          dense
          solo
        ></v-select>
      </v-col>
    </v-row>

    <v-row v-if="dataEdit.PrimKey">
      <v-col cols="12" sm="12" v-if="checkActionUpload">
        <div class="titleText mb-2">Tải ảnh lên:</div>
        <v-file-input
          v-model="filename"
          accept="image/png, image/jpeg, image/bmp"
          prepend-icon=""
          @change="handleChangeFile"
          label="Chọn ảnh đại diện"
          solo
          dense
        ></v-file-input>

        <v-btn
          depressed
          x-small
          color="primary"
          v-if="checkFile"
          @click="handleViewFile"
          >Nhấn để xem tệp</v-btn
        >

        <v-btn
          v-if="checkFile"
          class="mx-2"
          depressed
          x-small
          color="error"
          @click="handleDeleteFile"
          >Xóa tệp đính kèm
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="12">
        <div class="titleText mb-2">Địa chỉ:</div>
        <v-text-field
          v-model="formData.DiaChiThuongTru"
          solo
          label="Nhập địa chỉ..."
          dense
          hide-details="auto"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="4">
        <div class="titleText mb-2">Tỉnh/thành:</div>
        <v-select
          @change="handleChangeProvince"
          v-model="formData.TinhThanh"
          :items="optionProvince"
          label="Chọn"
          dense
          solo
        ></v-select>
      </v-col>

      <v-col cols="12" sm="4">
        <div class="titleText mb-2">Quận/huyện:</div>
        <v-select
          @change="hanldeChangeDistrict"
          v-model="formData.QuanHuyen"
          :items="optionDistrict"
          label="Chọn"
          dense
          solo
        ></v-select>
      </v-col>

      <v-col cols="12" sm="4">
        <div class="titleText mb-2">Phường/xã:</div>
        <v-select
          v-model="formData.PhuongXa"
          :items="optionWard"
          label="Chọn"
          dense
          solo
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6">
        <div class="titleText mb-2">
          Mã sinh viên: <span style="color: red">*</span>
        </div>
        <v-text-field
          :rules="[rules.required]"
          v-model="formData.MaSinhVien"
          solo
          :disabled="dataEdit.MaSinhVien ? true : false"
          label="Nhập mã sinh viên..."
          dense
          hide-details="auto"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="titleText mb-2">
          Số báo danh: <span style="color: red">*</span>
        </div>
        <v-text-field
          :rules="[rules.required]"
          v-model="formData.SoBaoDanh"
          :disabled="dataEdit.SoBaoDanh ? true : false"
          solo
          label="Nhập số báo danh..."
          dense
          hide-details="auto"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6">
        <div class="titleText mb-2">
          Mã nhập học: <span style="color: red">*</span>
        </div>
        <v-text-field
          :disabled="dataEdit.MaNhapHoc ? true : false"
          :rules="[rules.required]"
          v-model="formData.MaNhapHoc"
          solo
          label="Nhập..."
          dense
          hide-details="auto"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="titleText mb-2">
          Số hồ sơ: <span style="color: red">*</span>
        </div>
        <v-text-field
          :rules="[rules.required]"
          v-model="formData.SoHoSo"
          solo
          label="Nhập số hồ sơ..."
          dense
          hide-details="auto"
          :disabled="dataEdit.SoHoSo ? true : false"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="12">
        <div class="titleText mb-2">
          Cơ quan, đơn vị: <span style="color: red">*</span>
        </div>
        <v-select
          :rules="[rules.required]"
          v-model="formData.CoQuanDonVi"
          :items="optionAgencies"
          label="Chọn"
          dense
          solo
        ></v-select>
      </v-col>
    </v-row>

    <v-dialog v-model="showDiglogFile" persistent fullscreen>
      <v-card>
        <v-toolbar class="px-3">
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon @click="showDiglogFile = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12">
                <div class="d-flex justify-center">
                  <img :src="formData.MainImageUrl" alt="" class="style-img" />
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-form>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
import toastr from "toastr";
import { baseUrl } from "../constant/baseURL";
import axios from "axios";
import { textAuthor } from "../constant/textAuthorView";
import { actionAuthor } from "../constant/actionAuthor";
import { useAccountAuthorization } from "../mixin";

export default {
  props: ["dataEdit", "unitId", "checkActionAddAndUpdate"],

  mixins: [useAccountAuthorization],

  data() {
    return {
      formData: {
        SoDienThoai: this.dataEdit.DanhBaLienLac?.SoDienThoai || "",
        ChungMinhThu: this.dataEdit.ChungMinhThu || "",
        MaSinhVien: this.dataEdit.MaSinhVien || "",
        SoBaoDanh: this.dataEdit.SoBaoDanh || "",
        GioiTinh: this.dataEdit.GioiTinh || "",
        HoVaTen: this.dataEdit.HoVaTen || "",
        MaNhapHoc: this.dataEdit.MaNhapHoc || "",
        SoHoSo: this.dataEdit.SoHoSo || "",
        NgaySinh: this.dataEdit.NgaySinh
          ? moment.utc(this.dataEdit.NgaySinh).format("DD/MM/YYYY")
          : "",
        EmailVNU: this.dataEdit.EmailVNU || "",
        DiaChiThuongTru: this.dataEdit.DiaChiThuongTru?.SoNhaChiTiet || "",
        TinhThanh: this.dataEdit.TinhThanh || "",
        QuanHuyen: this.dataEdit.QuanHuyen || "",
        PhuongXa: this.dataEdit.PhuongXa || "",
        CoQuanDonVi: this.dataEdit.CoQuanDonVi?.MaHanhChinh
          ? {
              text: this.dataEdit.CoQuanDonVi?.TenGoi,
              value: {
                TenGoi: this.dataEdit.CoQuanDonVi.TenGoi,
                MaHanhChinh: this.dataEdit.CoQuanDonVi.MaHanhChinh,
              },
            }
          : "",
        MainImageUrl: this.dataEdit?.MainImage?.FileUrl || "",
      },
      validForm: false,
      optionPosition: [],
      optionDistrict: [],
      optionWard: [],
      optionGroups: [],
      showDiglogFile: false,
      checkFile: false,
      idFile: "",
      filename: null,
      checkActionUpload: "",
      rules: {
        required: (value) => !!value || "Không được để trống.",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Đây không phải là email";
        },
        birthday: (value) => {
          const pattern =
            /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
          return (
            pattern.test(value) || "Định dạng ngày sinh là: ngày/tháng/năm"
          );
        },
        phone: (value) => {
          const pattern =
            /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
          let status;
          if (value === "") {
            status = true;
          } else {
            status = pattern.test(value) || "Sai định dạng số điện thoại";
          }
          return status;
        },
        idCard: (value) => {
          const pattern = /^[0-9]{9,12}$/;
          // const pattern = /^([0-9]{9})(X|V)$|^([0-9]{11})/gis;
          return pattern.test(value) || "Định dạng sai số CCCD";
        },
      },
    };
  },

  mounted() {
    console.log("moun");
  },
  created() {
    const vm = this;

    if (vm.dataEdit && vm.dataEdit.MainImage?.FileUrl) vm.checkFile = true;

    vm.checkActionUpload = vm.handleCheckAuthor(
      actionAuthor.CAP_NHAT_ANH_CHO_SV_ALL,
      actionAuthor.CAP_NHAT_ANH_CHO_SV_DV
    );

    if (
      vm.checkActionUpload === textAuthor.ALONE &&
      vm.unitId !== vm.dataEdit.CoQuanDonVi.MaHanhChinh
    ) {
      vm.checkActionUpload = "";
    }

    console.log("cretate", this.dataEdit, vm.unitId, vm.checkActionUpload);
  },
  computed: {
    ...mapState(["listAgencies", "listProvince", "listGender"]),
    optionGender() {
      const vm = this;
      const options = vm.listGender.map((item) => ({
        text: item.tenMuc,
        value: { MaMuc: item.maMuc, TenMuc: item.tenMuc },
      }));
      return options;
    },
    optionAgencies() {
      const vm = this;
      let data = vm.listAgencies;
      console.log("Data: ", data, vm.unitId);

      if (vm.checkActionAddAndUpdate === textAuthor.ALONE && vm.unitId) {
        data.filter((item) => item.maHanhChinh === vm.unitId);
      }
      const options = data.map((item) => ({
        text: item.tenGoi,
        value: {
          MaHanhChinh: item.maHanhChinh,
          TenGoi: item.tenGoi,
        },
      }));
      return options;
    },
    optionProvince() {
      const vm = this;

      const options = vm.listProvince.map((item) => ({
        text: item.tenMuc,
        value: { MaMuc: item.maMuc, TenMuc: item.tenMuc },
      }));
      return options;
    },
  },
  methods: {
    getDistrict(id) {
      const vm = this;
      let filter = {
        collectionName: "quanhuyen",
        data: {
          page: 0,
          size: 20,
          keyword: "",
          orderFields: "",
          orderTypes: "",
          thamChieu_maMuc: id,
          tinhTrang: "1",
        },
      };
      vm.$store
        .dispatch("collectionFilter", filter)
        .then(function (response) {
          const data = response.content;
          vm.optionDistrict = data.map((item) => ({
            text: item.tenMuc,
            value: { MaMuc: item.maMuc, TenMuc: item.tenMuc },
            districtCode: item.maMuc,
          }));
        })
        .catch(function () {});
    },
    getWard(id) {
      const vm = this;
      let filter = {
        collectionName: "phuongxa",
        data: {
          page: 0,
          size: 20,
          keyword: "",
          orderFields: "",
          orderTypes: "",
          thamChieu_maMuc: id,
          tinhTrang: "1",
        },
      };
      vm.$store
        .dispatch("collectionFilter", filter)
        .then(function (response) {
          const data = response.content;
          vm.optionWard = data.map((item) => ({
            text: item.tenMuc,
            value: { MaMuc: item.maMuc, TenMuc: item.tenMuc },
          }));
        })
        .catch(function () {});
    },
    validateForm() {
      let vm = this;
      return vm.$refs.formSinhVienRef.validate();
    },
    handleChangeProvince(item) {
      const vm = this;
      vm.optionDistrict = [];
      vm.optionWard = [];
      vm.getDistrict(item.MaMuc);
    },
    hanldeChangeDistrict(item) {
      const vm = this;
      console.log("dis", vm.optionDistrict, item);
      vm.getWard(item.MaMuc);
    },
    handleChangeFile(value) {
      const vm = this;
      if (value) {
        let formData = new FormData();
        formData.append("files", value);
        formData.append("id", vm.dataEdit.PrimKey);

        const payload = {
          type: "album/upload",
          payload: formData,
        };

        vm.$store
          .dispatch("uploadFile", payload)
          .then(function (response) {
            const start = response.data.fullPathUrl.lastIndexOf("/") + 1;
            const end = response.data.fullPathUrl.lastIndexOf(".");
            vm.formData.MainImageUrl = response.data.fullPathUrl;
            vm.idFile = response.data.fullPathUrl.slice(start, end);
            vm.checkFile = true;
            console.log("res: ", response);
          })
          .catch(function () {});
      }
    },
    handleViewFile() {
      const vm = this;
      vm.showDiglogFile = true;
    },
    async handleDeleteFile() {
      const vm = this;
      try {
        const config = {
          method: "delete",
          url: `${baseUrl}album/${vm.dataEdit.PrimKey}/attachment/${
            !vm.idFile ? vm.dataEdit.MainImage.Id : vm.idFile
          }`,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          data: {},
          params: {},
        };
        await axios(config);
        vm.filename = null;
        toastr.success("Xóa thành công");
      } catch (error) {
        console.log(error);
      }
      vm.checkFile = false;
    },
  },
};
</script>

<style>
.style-selected .v-text-field__details {
  display: none;
}
.style-img {
  max-width: 100%;
}
</style>