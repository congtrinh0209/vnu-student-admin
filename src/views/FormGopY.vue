<template>
  <v-form
    class="dialog-body"
    ref="formBaiVietTinTucRef"
    lazy-validation
    v-model="validForm"
  >
    <v-row>
      <v-col cols="12" sm="12">
        <div class="titleText mb-2">Nội dung góp ý:</div>
        <v-textarea
          disabled
          v-model="formData.NoiDung"
          solo
          label="Nội dung góp ý"
        ></v-textarea>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6">
        <div class="titleText mb-2">Tệp đính kèm góp ý:</div>
        <v-text-field
          disabled
          label="Tệp đính kèm"
          solo
          dense
          v-model="formData.fileFeedbackName"
        ></v-text-field>

        <v-btn
          @click="handleViewFile('feedback')"
          depressed
          x-small
          color="primary"
          v-if="formData.fileFeedbackName && checkFileImgFeedback"
        >
          Nhấn để xem tệp
        </v-btn>

        <v-btn
          @click="handleViewFile('feedback')"
          depressed
          x-small
          color="primary"
          v-else-if="formData.fileFeedbackName && !checkFileImgFeedback"
        >
          <a class="style-tag-link" :href="formData.fileFeedbackName"
            >Nhấn để xem tệp</a
          >
        </v-btn>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="titleText mb-2">Mã sinh viên:</div>
        <v-select
          class="custom-height-select"
          v-model="formData.SinhVien"
          :items="optionStudnets"
          label="Chọn"
          dense
          disabled
          solo
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6">
        <div class="titleText mb-2">Người trả lời:</div>
        <v-select
          class="custom-height-select"
          v-model="formData.NguoiTraLoi"
          :items="optionCadres"
          label="Mã cán bộ..."
          dense
          disabled
          solo
        ></v-select>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="titleText mb-2">
          Tình trạng: <span style="color: red">*</span>
        </div>
        <v-select
          class="custom-height-select"
          :rules="[rules.required]"
          v-model="formData.CongKhai"
          :items="optionStatus"
          label="Chọn"
          dense
          solo
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="12">
        <div class="titleText mb-2">Tệp đính kèm câu trả lời:</div>
        <v-file-input
          prepend-icon=""
          @change="handleChangeFile"
          label="Chọn..."
          solo
          dense
        ></v-file-input>

        <v-btn
          @click="handleViewFile"
          depressed
          x-small
          color="primary"
          v-if="
            formData.fileAnswerUrl && checkFileImgAnswer && hideBtnDeleteFile
          "
        >
          Nhấn để xem tệp
        </v-btn>

        <v-btn
          @click="handleViewFile"
          depressed
          x-small
          color="primary"
          v-else-if="
            formData.fileAnswerUrl && !checkFileImgAnswer && hideBtnDeleteFile
          "
        >
          <a class="style-tag-link" :href="formData.fileAnswerUrl"
            >Nhấn để xem tệp</a
          >
        </v-btn>

        <v-btn
          @click="handleDeleteFile"
          class="mx-2"
          depressed
          x-small
          color="error"
          v-if="hideBtnDeleteFile"
          >Xóa tệp đính kèm
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="12">
        <div class="titleText mb-2">Trả lời:</div>
        <v-textarea
          v-model="formData.TraLoi"
          solo
          label="Nhập câu trả lời..."
        ></v-textarea>
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
                <div>
                  <img
                    :src="
                      typeFile === 'feedback'
                        ? formData.fileFeedbackUrl
                        : formData.fileAnswerUrl
                    "
                    alt=""
                    class="style-img"
                  />
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
import toastr from "toastr";
export default {
  props: ["dataEdit"],
  data() {
    return {
      formData: {
        TinhTrang: this.dataEdit.TinhTrang || "",
        SinhVien: this.dataEdit.SinhVienMdd || "",
        NguoiTraLoi: this.dataEdit.TraLoi?.NguoiTraLoi || "",
        TraLoi: this.dataEdit.TraLoi?.NoiDung || "",
        NoiDung: this.dataEdit.NoiDung || "",
        fileFeedbackName: this.dataEdit.Attachment?.FileName || "",
        fileFeedbackUrl: this.dataEdit.Attachment?.FileUrl || "",
        fileAnswerUrl: this.dataEdit.TraLoi.Attachment?.FileUrl || "",
        CongKhai: this.dataEdit.CongKhai || "",
      },
      optionStatus: [
        { text: "Công khai", value: "1" },
        { text: "Không công khai", value: "0" },
      ],
      showDiglogFile: false,
      optionCadres: [],
      optionStudnets: [],
      validForm: false,
      checkFileImgFeedback: true,
      checkFileImgAnswer: true,
      typeFile: "",
      hideBtnDeleteFile: true,
      rules: {
        required: (value) => !!value || "Không được để trống.",
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
    vm.getList("canbo");
    vm.getList("sinhvien");
    vm.getList("dulieudanhmuc");
    const regex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
    vm.checkFileImgFeedback = regex.test(vm.dataEdit.Attachment?.FileName);
    vm.checkFileImgAnswer = regex.test(vm.dataEdit.TraLoi.Attachment?.FileName);
    vm.hideBtnDeleteFile = vm.dataEdit.TraLoi.Attachment?.FileName
      ? true
      : false;
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
        if (collectionName === "canbo") {
          //   vm.$emit("emitDataAgencies", responseData);
          vm.optionCadres = responseData.map((item) => ({
            text: item.HoVaTen,
            value: item.MaDinhDanh,
          }));
        } else {
          //   vm.$emit("emitDataCategoryNews", responseData);
          vm.optionStudnets = responseData.map((item) => ({
            text: item.HoVaTen,
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
      vm.$emit("emitDataFile", value);
    },
    handleViewFile(type) {
      const vm = this;
      vm.showDiglogFile = true;
      vm.typeFile = type;
    },
    handleDeleteFile() {
      const vm = this;
      toastr.success("Xóa thành công");
      vm.$emit("emitDataFile", "delete file");
      vm.hideBtnDeleteFile = false;
    },
  },
};
</script>

<style>
.style-img {
  width: 100%;
}
.style-tag-link {
  color: #fff !important;
  text-decoration: none;
}
.pointer {
  cursor: pointer;
}
</style>
