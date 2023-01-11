<template>
  <v-form
    class="dialog-body"
    ref="formBanDoRef"
    lazy-validation
    v-model="validForm"
  >
    <v-row>
      <v-col cols="12" sm="12">
        <div class="titleText mb-2">
          Tên địa điểm: <span style="color: red">*</span>
        </div>
        <v-text-field
          :rules="[rules.required]"
          v-model="formData.TenDiaDiem"
          solo
          label="Nhập tên đầy đủ..."
          dense
          hide-details="auto"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6">
        <div class="titleText mb-2">Kinh độ:</div>
        <v-text-field
          solo
          v-model="formData.ToaDo"
          label="Nhập kinh độ..."
          dense
          hide-details="auto"
          required
        ></v-text-field>
      </v-col>
       <v-col cols="12" sm="6">
        <div class="titleText mb-2">Vĩ độ:</div>
        <v-text-field
          solo
          v-model="formData.ToaDo"
          label="Nhập vĩ độ..."
          dense
          hide-details="auto"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6">
        <div class="titleText mb-2">Loại bản đồ:</div>
        <v-select
          :items="listTypeMap"
          v-model="formData.LoaiBanDo"
          label="Chọn"
          dense
          solo
        ></v-select>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="titleText mb-2">Khu vực:</div>
        <v-select
          :items="listArea"
          v-model="formData.KhuVuc"
          label="Chọn"
          dense
          solo
        ></v-select>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { textAuthor } from "../constant/textAuthorView";
import { actionAuthor } from "../constant/actionAuthor";
import { useAccountAuthorization } from "../mixin";

export default {
  props: ["dataEdit", "unitId"],

  mixins: [useAccountAuthorization],

  data() {
    return {
      formData: {
        TenDiaDiem: "",
        LoaiBanDo: "",
        ToaDo: "",
        KhuVuc: "",
      },
      validForm: false,
      listArea: [],
      listTypeMap: [],
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
    vm.getListArea();
    vm.getListTypeMap()

    console.log("cretate", this.dataEdit, vm.unitId, vm.checkActionUpload);
  },
  computed: {},
  methods: {
    validateForm() {
      let vm = this;
      return vm.$refs.formBanDoRef.validate();
    },
    getListArea() {
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
        collectionName: "khuvuc",
        data: dataPayload,
      };
      vm.$store
        .dispatch("collectionFilter", filter)
        .then(function (response) {
          vm.$emit("emitDataArea", response.content);
          vm.listArea = response.content.map((item) => ({
            text: item.TenKhuVuc,
            value: item.PrimKey,
          }));

          console.log("res: ", vm.listArea);
        })
        .catch(function () {
          vm.loadingData = false;
        });
    },
     getListTypeMap() {
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
        collectionName: "loaibando",
        data: dataPayload,
      };
      vm.$store
        .dispatch("collectionFilter", filter)
        .then(function (response) {
         
          vm.$emit("emitDataTypeMap", response.content);

         vm.listTypeMap = response.content.map(item=>({
          text: item.TenLoaiBanDo,
          value: item.PrimKey
         }))

          console.log("res: ", response.content);
        })
        .catch(function () {
          vm.loadingData = false;
        });
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