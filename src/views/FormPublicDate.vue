<template>
  <v-form
    class="dialog-body"
    ref="formPublicDateRef"
    lazy-validation
    v-model="validForm"
  >
    <v-row>
      <v-col cols="12" sm="12">
        <div class="titleText mb-2">
          Ngày xuất bản: <span style="color: red">*</span>
        </div>
        <v-text-field
          :rules="[rules.birthday, rules.checkDatePresent, rules.required]"
          v-model="formData.NgayXuatBan"
          solo
          label="Nhập ngày xuất bản..."
          dense
          hide-details="auto"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="12">
        <div class="titleText mb-2">
         Ngày hết hạn:
        </div>
       <v-text-field
          :rules="[rules.birthday]"
          v-model="formData.NgayHuyXuatBan"
          solo
          label="Nhập ngày hết hạn..."
          dense
          hide-details="auto"
          required
        ></v-text-field>
      </v-col>
    </v-row>

  </v-form>
</template>

<script>
import moment from "moment";
export default {
  props: ["dataItem"],
  data() {
    return {
      formData: {
      NgayXuatBan: this.dataItem.NgayXuatBan ? moment(this.dataItem.NgayXuatBan).format("DD/MM/YYYY") : moment(new Date).format('DD/MM/YYYY'),
      NgayHuyXuatBan: this.dataItem.NgayHuyXuatBan ? moment(this.dataItem.NgayHuyXuatBan).format("DD/MM/YYYY") : "",
      TinhTrang: "2"
      },
      validForm: false,
      rules: {
        required: (value) => !!value || "Không được để trống.",
            birthday: (value) => {
          const pattern =
            /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
          return  pattern.test(value) || "Định dạng ngày sinh là: ngày/tháng/năm";
        },
        checkDatePresent: (value) =>{
          let status = true
          const getDatePresent = moment(moment(new Date()).format('DD/MM/YYYY'), "DD/MM/YYYY").valueOf();
          const getDateInput = moment(value, "DD/MM/YYYY").valueOf();
          const result = getDatePresent - getDateInput
          if (result > 0) status = false
          return status || `Ngày xuất bản không được sau ngày ${moment(new Date(), "DD/MM/YYYY").format("DD/MM/YYYY")}`
        }
      },
    };
  },

  mounted() {
    console.log("moun");
  },
  created() {
     console.log("props: ", this.dataItem)
  },
  methods: {
    validateForm() {
      let vm = this;
      return vm.$refs.formPublicDateRef.validate();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>