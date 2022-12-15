<template>
  <v-form
    class="dialog-body"
    ref="formPhanNhomQuyenRef"
    lazy-validation
    v-model="validForm"
  >
    <v-row>
      <v-col cols="12" sm="12">
        <div class="titleText mb-2">
          Cán bộ: <span style="color: red">*</span>
        </div>
        <v-select
          :items="listCadres"
          label="Chọn cán bộ"
          v-model="formData.canbo"
          chips
          multiple
          solo
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="12">
        <div class="titleText mb-2">
          Nhóm quyền: <span style="color: red">*</span>
        </div>
        <v-select
          v-model="formData.TenNhomQuyen"
          :items="listGroup"
          chips
          label="Chọn nhóm quyền"
          multiple
          solo
        ></v-select>
      </v-col>
    </v-row>

  </v-form>
</template>

<script>
export default {
  props: ["dataCadres", "dataEditCadres"],
  data() {
    return {
      formData: {
        canbo: this.dataEditCadres || [],
        TenNhomQuyen: [],
      },
      listGroup: [],
      listCadres: [],
      validForm: false,
      rules: {
        required: (value) => !!value || "Không được để trống.",
      },
    };
  },

  mounted() {
    console.log("moun");
  },
  created() {
    const vm = this;
     vm.listCadres = vm.dataCadres.map((item) => ({
          text: item.HoVaTen,
          value: item.MaDinhDanh,
        }));
     vm.getGroup();

     console.log("props: ", vm.dataEditCadres)
  },
  methods: {
    validateForm() {
      let vm = this;
      return vm.$refs.formPhanNhomQuyenRef.validate();
    },
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
        vm.listGroup = responseData.map((item) => ({
          text: item.TenNhomQuyen,
          value: item.MaDinhDanh,
        }));
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>