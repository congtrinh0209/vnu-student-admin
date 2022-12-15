<template>
  <v-form
    class="dialog-body"
    ref="formBaiVietTinTucRef"
    lazy-validation
    v-model="validForm"
  >
    <v-row>
      <v-col cols="12" sm="12">
        <div class="titleText mb-2">
          Tên bài viết: <span style="color: red">*</span>
        </div>
        <v-text-field
          :rules="[rules.required]"
          v-model="formData.TenBaiViet"
          @change="handleChangeTitle"
          solo
          label="Nhập tên bài viết..."
          dense
          hide-details="auto"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="12">
        <div class="titleText mb-2">Ảnh đại diện:</div>
        <v-file-input
          accept="image/png, image/jpeg, image/bmp"
          prepend-icon=""
          @change="handleChangeFile"
          label="Chọn ảnh đại diện"
          solo
          dense
        ></v-file-input>
        <div
          class="note italic pointer"
          @click="handleViewAvatar"
          v-if="formData.AnhDaiDien"
        >
          Nhấn để xem ảnh
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="12">
        <div class="titleText mb-2">
          Đường dẫn: <span style="color: red">*</span>
        </div>
        <v-text-field
          :rules="[rules.required]"
          v-model="formData.DuongDanRutGon"
          solo
          label="Nhập tên bài viết..."
          dense
          hide-details="auto"
          required
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="12">
        <div class="titleText mb-2">Mô tả:</div>
        <v-text-field
          v-model="formData.MoTa"
          solo
          label="Nhập mô tả..."
          dense
          hide-details="auto"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="12">
        <div class="titleText mb-2">Nội dung:</div>
         <VueEditor v-model="formData.NoiDungBaiViet"  useCustomImageHandler @image-added="imageHandler"/>
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
      <v-col cols="12" sm="12">
        <div class="titleText mb-2">Chuyên mục:</div>
        <v-select
          class="custom-height-select"
          v-model="formData.ChuyenMuc"
          :items="optionCategoryNews"
          label="Chọn"
          dense
          solo
          multiple
        ></v-select>
      </v-col>
    </v-row>

    <v-dialog v-model="showAvatar" persistent fullscreen>
      <v-card>
        <v-toolbar class="px-3">
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn icon @click="showAvatar = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12">
                <div>
                  <img class="style-img" :src="formData.AnhDaiDien" alt="" />
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
import moment from "moment";
import { slug } from "../constant/convertSlug";
import { VueEditor } from "vue2-editor";
export default {
  props: ["dataEdit"],
  components: {
      
        VueEditor 
    },
  data() {
    return {
      formData: {
        DuongDanRutGon: this.dataEdit.DuongDanRutGon || window.location.origin + '/#/tin-tuc/',
        TenBaiViet: this.dataEdit.TenBaiViet || "",
        AnhDaiDien: this.dataEdit.AnhDaiDien || null,
        NgayXuatBan: this.dataEdit.NgayXuatBan
          ? moment(this.dataEdit.NgayXuatBan).format("DD/MM/YYYY")
          : "",
        CoQuanDonVi: this.dataEdit.CoQuanDonVi?.MaHanhChinh || "",
        NoiDungBaiViet: this.dataEdit.NoiDungBaiViet || "",
        MoTa: this.dataEdit.MoTa || "",
        TinhTrang: this.dataEdit.TinhTrang || "1",
        ChuyenMuc: this.dataEdit.ChuyenMuc?.length
          ? this.dataEdit.ChuyenMuc.map((item) => item.MaDinhDanhChuyenMuc)
          : [],
      },
      showAvatar: false,
      optionAgencies: [],
      optionCategoryNews: [],
      validForm: false,
      linkImg: "",
      rules: {
        required: (value) => !!value || "Không được để trống.",
        date: (value) => {
          const pattern =
            /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
          return pattern.test(value) || "Định dạng ngày là: ngày/tháng/năm";
        },
        file: (value) =>
          !value || value.size < 2000000 || "Kich thước fle nhỏ hơn 2MB",
      },
    };
  },

  mounted() {
    console.log("moun");
  },
  created() {
    const vm = this;
    vm.getList("coquandonvi");
    vm.getList("chuyenmuctintuc");
    console.log("cretate", this.dataEdit);
  },
  methods: {
    getList(collectionName) {
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
      const filter = {
        collectionName,
        data: dataPayload,
      };
      vm.$store.dispatch("collectionFilter", filter).then(function (response) {
        const responseData = response.content;
        if (collectionName === "coquandonvi") {
          vm.$emit("emitDataAgencies", responseData);
          vm.optionAgencies = responseData.map((item) => ({
            text: item.tenGoi,
            value: item.maHanhChinh,
          }));
        } else {
          vm.$emit("emitDataCategoryNews", responseData);
          vm.optionCategoryNews = responseData.map((item) => ({
            text: item.TenChuyenMuc,
            value: item.MaDinhDanh,
          }));
        }
      });
    },
    validateForm() {
      let vm = this;
      return vm.$refs.formBaiVietTinTucRef.validate();
    },
    handleChangeFile(value) {
      const vm = this;

      if (value) {
        let formData = new FormData();
        formData.append("file", value);
        const payload = {
          type: "baiviettintuc/upload",
          payload: formData,
        };

        vm.$store
          .dispatch("uploadFile", payload)
          .then(function (response) {
            const url = response.data.resp.fullPath;
            vm.formData.AnhDaiDien = url;
            console.log("res: ", response);
          })
          .catch(function () {});
      } else {
        vm.formData.AnhDaiDien = "";
      }
    },
    handleChangeTitle(value) {
      const vm = this;
      const slugString = slug(value);
      vm.formData.DuongDanRutGon = slugString;
    },
    handleViewAvatar() {
      const vm = this;
      vm.showAvatar = true;
    },
    imageHandler(file, Editor, cursorLocation, resetUploader) {
      const vm = this

      if (file) {
        let formData = new FormData();
        formData.append("file", file);
        const payload = {
          type: "baiviettintuc/upload",
          payload: formData,
        };

        vm.$store
          .dispatch("uploadFile", payload)
          .then(function (response) {
            const url = response.data.resp.fullPath;
             Editor.insertEmbed(cursorLocation, "image", url);
              resetUploader();
            console.log("res: ", response);
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
.pointer {
  cursor: pointer;
}
</style>