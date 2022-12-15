<template>
  <v-form
    class="dialog-body"
    ref="formCanBoRef"
    lazy-validation
    v-model="validForm"
  >
    <v-row>
      <v-col cols="12" sm="12">
        <div class="titleText mb-2">
          Mã cán bộ: <span style="color: red">*</span>
        </div>
        <v-text-field
          :rules="[rules.required]"
          v-model="formData.MaSoCanBo"
          solo
          :disabled="dataEdit.MaSoCanBo ? true : false"
          label="Nhập mã cán bộ..."
          dense
          hide-details="auto"
          required
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
        <div class="titleText mb-2">
          Email VNU: <span style="color: red">*</span>
        </div>
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
        <div class="titleText mb-2">Ngày sinh:</div>
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
          v-model="formData.GioiTinh"
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

    <v-row>
      <v-col cols="12" sm="6" v-if="dataEdit.MaSoCanBo">
        <div class="titleText mb-2">Nhóm quyền:</div>
        <v-select
          class="custom-height-select"
          v-model="formData.ListQuyenCanBo"
          :items="optionGroups"
          label="Chọn nhóm quyền"
          multiple
          solo
          :disabled="dataEdit.MaSoCanBo ? true : false"
        ></v-select>
      </v-col>

      <v-col cols="12" :sm="dataEdit.MaSoCanBo ? 6 : 12">
        <div class="titleText mb-2">Tình trạng công tác:</div>
        <v-select
          v-model="formData.TinhTrangCongTac"
          :items="optionWrok"
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
  props: ["dataEdit", "getListFunctionProps"],
  data() {
    return {
      formData: {
        MaSoCanBo: this.dataEdit.MaSoCanBo || "",
        GioiTinh: this.dataEdit.GioiTinh || "",
        HoVaTen: this.dataEdit.HoVaTen || "",
        NgaySinh: this.dataEdit.NgaySinh
          ? moment(this.dataEdit.NgaySinh).format("DD/MM/YYYY")
          : "",
        ListQuyenCanBo: this.dataEdit.ListQuyenCanBo?.length
          ? this.dataEdit.ListQuyenCanBo.map((item) => item.MaDinhDanh)
          : [],
        EmailVNU: this.dataEdit.EmailVNU || "",
        CoQuanDonVi: this.dataEdit.CoQuanDonVi || "",
        DiaChiThuongTru: this.dataEdit.DiaChiThuongTru || "",
        TinhThanh: this.dataEdit.TinhThanh || "",
        QuanHuyen: this.dataEdit.QuanHuyen || "",
        PhuongXa: this.dataEdit.PhuongXa || "",
        TinhTrangCongTac: this.dataEdit.TinhTrangCongTac || "",
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
          let status;
          if (value === "") {
            status = true;
          } else {
            status =
              pattern.test(value) || "Định dạng ngày sinh là: ngày/tháng/năm";
          }
          return status;
        },
      },
    };
  },

  mounted() {
    console.log("moun");
  },
  created() {
    const vm = this;
    vm.getGroup();
    console.log("cretate", this.dataEdit);
  },
  computed: {
    ...mapState(["listAgencies", "listProvince", "listGender", "listWork"]),
    optionGender() {
      const vm = this;
      const options = vm.listGender.map((item) => ({
        text: item.tenMuc,
        value: { maMuc: item.maMuc, tenMuc: item.tenMuc },
      }));
      return options;
    },
    optionWrok() {
      const vm = this;
      const options = vm.listWork.map((item) => ({
        text: item.tenMuc,
        value: {
          MaMuc: item.maMuc,
          TenMuc: item.tenMuc,
        },
      }));
      return options;
    },
    optionAgencies() {
      const vm = this;

      const options = vm.listAgencies.map((item) => ({
        text: item.tenGoi,
        value: {
          MaHanhChinh: item.MaDinhDanh,
          TenGoi: item.tenGoi,
        },
      }));
      return options;
    },
    optionProvince() {
      const vm = this;

      const options = vm.listProvince.map((item) => ({
        text: item.tenMuc,
        value: item.PrimKey,
      }));
      return options;
    },
  },
  methods: {
    getGroup() {
      let vm = this;
      const dataPayload = {
        page: 0,
        size: 20,
        keyword: "",
        orderFields: "",
        orderTypes: "",
        tinhTrang: "1",
        thamChieu_maMuc: "",
      };
      const filter = {
        collectionName: "nhomquyen",
        data: dataPayload,
      };
      vm.$store.dispatch("collectionFilter", filter).then(function (response) {
        const responseData = response.content;
        vm.$emit("emitDataGroup", responseData);
        vm.optionGroups = responseData.map((item) => ({
          text: item.TenNhomQuyen,
          value: item.MaDinhDanh,
        }));
      });
    },
    validateForm() {
      let vm = this;
      console.log("form: ", vm.$refs.formCanBoRef);
      return vm.$refs.formCanBoRef.validate();
    },
    handleChangeProvince(item) {
      const vm = this;
      vm.optionDistrict = [];
      vm.optionWard = [];
      const provinceCode = vm.listProvince.filter(
        (province) => province.PrimKey === item
      )[0].maMuc;
      if (provinceCode) {
        let filter = {
          collectionName: "quanhuyen",
          data: {
            page: 0,
            size: 20,
            keyword: "",
            orderFields: "",
            orderTypes: "",
            thamChieu_maMuc: provinceCode,
            tinhTrang: "1",
          },
        };
        vm.$store
          .dispatch("collectionFilter", filter)
          .then(function (response) {
            const data = response.content;
            vm.optionDistrict = data.map((item) => ({
              text: item.tenMuc,
              value: item.PrimKey,
              districtCode: item.maMuc,
            }));
          })
          .catch(function () {});
      }
    },
    hanldeChangeDistrict(item) {
      const vm = this;
      console.log("dis", vm.optionDistrict);
      const districtCode = vm.optionDistrict.filter(
        (district) => district.value === item
      )[0].districtCode;
      if (districtCode) {
        let filter = {
          collectionName: "phuongxa",
          data: {
            page: 0,
            size: 20,
            keyword: "",
            orderFields: "",
            orderTypes: "",
            thamChieu_maMuc: districtCode,
            tinhTrang: "1",
          },
        };
        vm.$store
          .dispatch("collectionFilter", filter)
          .then(function (response) {
            const data = response.content;
            vm.optionWard = data.map((item) => ({
              text: item.tenMuc,
              value: item.PrimKey,
            }));
          })
          .catch(function () {});
      }
    },
  },
};
</script>

<style>
.custom-height-select > .v-input__control > .v-input__slot {
  height: 38px !important;
}
</style>