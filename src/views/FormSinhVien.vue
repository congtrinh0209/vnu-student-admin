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
          :rules="[rules.required, rules.birthday]"
          v-model="formData.NgaySinh"
          solo
          label="Nhập ngày sinh..."
          dense
          hide-details="auto"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="6">
        <div class="titleText mb-2">
          Giới tính: <span style="color: red">*</span>
        </div>
        <v-select
          v-model="formData.GioiTinh"
          :rules="[rules.required]"
          :items="optionGender"
          label="Chọn"
          dense
          solo
        ></v-select>
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
      <v-col cols="12" sm="12">
        <div class="titleText mb-2">Cơ quan, đơn vị:</div>
        <v-select
          v-model="formData.CoQuanDonVi"
          :items="optionAgencies"
          label="Chọn"
          dense
          solo
        ></v-select>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
export default {
  props: ["dataEdit"],
  data() {
    return {
      formData: {
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
        TinhThanh: this.dataEdit.TinhThanh,
        QuanHuyen: this.dataEdit.QuanHuyen || "",
        PhuongXa: this.dataEdit.PhuongXa || "",
        CoQuanDonVi: this.dataEdit.CoQuanDonVi || "",
      },
      validForm: false,
      optionPosition: [],
      optionDistrict: [],
      optionWard: [],
      optionGroups: [],
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
      },
    };
  },

  mounted() {
    console.log("moun");
  },
  created() {
    const vm = this;
    console.log("cretate", this.dataEdit);

    if (vm.dataEdit.TinhThanh?.MaMuc)
      vm.getDistrict(vm.dataEdit.TinhThanh.MaMuc);
    if (vm.dataEdit.QuanHuyen?.MaMuc) vm.getWard(vm.dataEdit.QuanHuyen.MaMuc);
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

      const options = vm.listAgencies.map((item) => ({
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
  },
};
</script>

<style>
</style>