<template>
  <v-container class="container-profile"> 
    <v-row>
      <v-col cols="12" sm="6">
        <v-card elevation="2" style="width: 100%; height: 100%">
          <div class="title-card">Phần góp ý</div>
          <div class="px-5 py-5">
            <div class="d-flex px-4 py-4 wrap-content-item">
              <div style="flex: 1">Nội dung:</div>
              <div style="flex: 2" class="text-answer">
                {{ dataDetailsFeedback.NoiDung }}
              </div>
            </div>
            <div class="d-flex px-4 py-4 wrap-content-item">
              <div style="flex: 1">File đính kèm:</div>
              <div class="text-answer" style="flex: 2">
                 <a target="_blank" :href="dataDetailsFeedback.fileFeedbackUrl">{{
                dataDetailsFeedback.fileFeedbackName
              }}</a>
              </div>
            </div>
            <div class="d-flex px-4 py-4 wrap-content-item">
              <div style="flex: 1">Chủ đề:</div>
              <div class="text-answer" style="flex: 2">
                {{ dataDetailsFeedback.ChuDe }}
              </div>
            </div>
            <div class="d-flex px-4 py-4 wrap-content-item">
              <div style="flex: 1">Ngày gửi:</div>
              <div class="text-answer" style="flex: 2">
               {{ getDateSend }}
              </div>
            </div>
            <div class="d-flex px-4 py-4 wrap-content-item">
              <div style="flex: 1">Người gửi:</div>
              <div class="text-answer" style="flex: 2">
                {{ getStudent }}
              </div>
            </div>
            <div class="d-flex px-4 py-4 wrap-content-item">
              <div style="flex: 1">Tình trạng:</div>
              <div class="text-answer" style="flex: 2">
               {{ dataDetailsFeedback.TinhTrang }}
              </div>
            </div>
            <div class="d-flex px-4 py-4 wrap-content-item">
              <div style="flex: 1">Tình trạng công khai:</div>
              <div class="text-answer" style="flex: 2">
                {{ getStatusPublic }}
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card elevation="2" style="width: 100%; height: 100%">
          <div class="title-card">Phần trả lời</div>
          <div class="px-5 py-5">
            <div class="d-flex px-4 py-4 wrap-content-item">
              <div style="flex: 1">Người trả lời:</div>
              <div style="flex: 2" class="text-answer">
                {{ dataDetailsFeedback.NguoiTraLoi }}
              </div>
            </div>
            <div class="d-flex px-4 py-4 wrap-content-item">
              <div style="flex: 1">Ngày trả lời:</div>
              <div class="text-answer" style="flex: 2">
                {{ getDateAnswer }}
              </div>
            </div>
            <div class="d-flex px-4 py-4 wrap-content-item">
              <div style="flex: 1">nội dung trả lời:</div>
              <div class="text-answer" style="flex: 2">
               {{ dataDetailsFeedback.NoiDungTraLoi }}
              </div>
            </div>
            <div class="d-flex px-4 py-4 wrap-content-item">
              <div style="flex: 1">File đính kèm:</div>
              <div class="text-answer" style="flex: 2">
                <a
                target="_blank"
                v-if="dataDetailsFeedback.fileAnswerUrl"
                :href="dataDetailsFeedback.fileAnswerUrl"
                >file đính kèm</a
              >
              </div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from "moment";
export default {
  props: ["dataEdit"],
  data() {
    return {
      dataDetailsFeedback: {
        ChuDe: this.dataEdit.ChuDe.TenMuc || "",
        fileFeedbackName: this.dataEdit.Attachment?.FileName || "",
        fileFeedbackUrl: this.dataEdit.Attachment?.FileUrl || "",
        fileAnswerUrl: this.dataEdit.TraLoi.Attachment?.FileUrl || "",
        TinhTrang: this.dataEdit.TinhTrang.TenMuc || "",
        CongKhai: this.dataEdit.CongKhai || "",
        NoiDung: this.dataEdit.NoiDung || "",
        NoiDungTraLoi: this.dataEdit.TraLoi.NoiDung || "",
        NguoiTraLoi: this.dataEdit.TraLoi.NguoiTraLoi || "",
      },
      listStudent: [],
    };
  },

  mounted() {
    console.log("moun");
  },
  created() {
    const vm = this;
    vm.getListData();
    console.log("cretate", this.dataEdit);
  },
  methods: {
    getListData() {
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
        data: dataPayload,
      };
      vm.$store
        .dispatch("collectionFilter", filter)
        .then(function (response) {
          console.log(response);
          vm.listStudent = response.content;
        })
        .catch(function () {});
    },
  },
  computed: {
    getDateAnswer() {
      const vm = this;
      if (vm.dataEdit.TraLoi.NgayTraLoi) {
        const date = moment(vm.dataEdit.TraLoi.NgayTraLoi).format("DD/MM/YYYY");
        return date;
      }
      return null;
    },
    getDateSend() {
      const vm = this;
      if (vm.dataEdit.NgayGui) {
        const date = moment(this.dataEdit.NgayGui).format("DD/MM/YYYY");
        return date;
      }
      return null;
    },
    getStudent() {
      const vm = this;
      const result = vm.listStudent.filter(
        (item) => item.MaDinhDanh === vm.dataEdit.SinhVienMdd
      );
      if (result.length) return result[0].HoVaTen;
      return "";
    },
    getStatusPublic() {
      const vm = this;
      let result = "Không công khai";
      if (vm.dataEdit.CongKhai) {
        return (result = "Công khai");
      }
      return result;
    },
  },
};
</script>

<style scoped>

.title-card {
  font-size: 20px;
  font-weight: 500;
  padding: 10px 10px 0 10px;
}
.text-answer {
  font-weight: 500;
  font-size: 16px;
}
.text-subject {
  font-size: 16px;
}
.container-profile {
  background-color: #eee;
}
.wrap-content-item {
  border-bottom: 1px solid rgba(51, 51, 51, 0.25);
  align-items: center;
}
</style>
