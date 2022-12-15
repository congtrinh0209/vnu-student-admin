<template>
  <v-form
    class="dialog-body"
    ref="formMenuRef"
    lazy-validation
    v-model="validForm"
  >
    <v-row>
      <v-col cols="12" sm="12">
        <div class="titleText mb-2">
          Mã menu: <span style="color: red">*</span>
        </div>
        <v-text-field
          :rules="[rules.required]"
          v-model="formData.MaMenu"
          solo
          :disabled="dataEdit.MaMenu ? true : false"
          label="Nhập mã menu..."
          dense
          hide-details="auto"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6">
        <div class="titleText mb-2">
          Tên menu: <span style="color: red">*</span>
        </div>
        <v-text-field
          :rules="[rules.required]"
          v-model="formData.TenMenu"
          solo
          label="Nhập tên đầy đủ..."
          dense
          hide-details="auto"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="titleText mb-2">Mã icon:</div>
        <v-text-field
          v-model="formData.MaIcon"
          solo
          label="Nhập mã icon..."
          dense
          hide-details="auto"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="12">
        <div class="titleText mb-2">
          Đường dẫn: <span style="color: red">*</span>
        </div>
        <v-text-field
          :rules="[rules.required]"
          v-model="formData.DuongDan"
          solo
          label="Nhập đường dẫn..."
          dense
          hide-details="auto"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6">
        <div class="titleText mb-2">Tên tiếng anh:</div>
        <v-text-field
          v-model="formData.TenTiengAnh"
          solo
          label="Nhập tên tiếng anh..."
          dense
          hide-details="auto"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="titleText mb-2">Số thứ tự: <span style="color: red">*</span></div>
        <v-text-field
          :rules="[rules.number]"
          v-model="formData.SoThuTu"
          solo
          label="Nhập số thứ tự..."
          dense
          hide-details="auto"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6">
        <div class="titleText mb-2">Menu cha:</div>
        <v-select
          v-model="formData.MaMenuCha"
          :items="getListMenu"
          label="Chọn"
          dense
          solo
        ></v-select>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="titleText mb-2">Tình trạng:</div>
        <v-select
          v-model="formData.TinhTrang"
          :items="optionStatus"
          label="Chọn"
          dense
          solo
        ></v-select>
      </v-col>
    </v-row>
 <v-row>
      <v-col cols="12" sm="12">
        <div class="titleText mb-2">Nhóm quyền:</div>
        <v-select
          class="custom-height-select"
          v-model="formData.PhanQuyenMenu"
          :items="optionGroups"
          label="Chọn"
          dense
          solo
          multiple
        ></v-select>
      </v-col>
    </v-row>

  </v-form>
</template>

<script>
export default {
  props: ["dataEdit", "listMenu"],
  data() {
    return {
      formData: {
        MaMenuCha: this.dataEdit.MaMenuCha || "",
        MaMenu: this.dataEdit.MaMenu || "",
        TinhTrang: this.dataEdit.TinhTrang || "2",
        LoaiMenu: "0",
        TenMenu: this.dataEdit.TenMenu || "",
        DuongDan: this.dataEdit.DuongDan || "",
        TenTiengAnh: this.dataEdit.TenTiengAnh || "",
        MaIcon: this.dataEdit.MaIcon || "",
        SoThuTu: this.dataEdit.SoThuTu || "",
        PhanQuyenMenu: this.dataEdit.ListQuyenMenu?.length
          ? this.dataEdit.ListQuyenMenu.map((item) => item.MaDinhDanh)
          : [],
      },
      validForm: false,
      optionStatus: [{text: 'Hoạt động', value: "2"}, {text: 'Không hoạt động', value: "1"}],
      optionGroups: [],
      rules: {
        required: (value) => !!value || "Không được để trống.",
        birthday: (value) => {
          const pattern =
            /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
          return (
            pattern.test(value) || "Định dạng ngày sinh là: ngày/tháng/năm"
          );
        },
        number: (value) => {
          const pattern = /^(?:[1-9]\d*|\d)$/;
          return pattern.test(value) || "Trường này phải nhập số";
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
    console.log("cretate", this.dataEdit, this.listMenu);
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
      return vm.$refs.formMenuRef.validate();
    },
  },
  computed: {
    getListMenu() {
      const vm = this;
      let option = [];
      if (vm.dataEdit?.PrimKey) {
        option = vm.listMenu.reduce(function (res, cur) {
          if (vm.dataEdit?.PrimKey !== cur.PrimKey)
            res.push({
              text: cur.TenMenu,
              value: cur.MaMenu,
            });
          return res;
        }, []);
      } else {
        option = vm.listMenu.map((item) => ({
          text: item.TenMenu,
          value: item.MaMenu,
        }));
      }

      return option;
    },
  },
};
</script>

<style>
.custom-height-select > .v-input__control > .v-input__slot {
  height: 38px !important;
}
</style>