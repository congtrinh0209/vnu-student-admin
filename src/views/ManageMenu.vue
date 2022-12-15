<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12" sm="5">
        <input
          v-model="textSearch"
          class="form-control"
          type="text"
          placeholder="Nhập tiêu đề tin tức..."
          autocomplete="off"
        />
      </v-col>
      <v-col cols="12" sm="1">
        <button class="btn btn-search primary" @click.stop="getListMenuFilter">
          <v-icon left dark size="22">mdi mdi-magnify-minus-outline</v-icon>
        </button>
      </v-col>
      <v-col cols="12" sm="6">
        <div style="float: right">
          <button @click.stop="showModalForm" class="btn btn-add primary">
            <v-icon left dark size="22">mdi-file-plus</v-icon>
            Thêm mới
          </button>
        </div>
        <div style="float: right">
          <button
            @click.stop="openDialogDecentralization"
            class="btn btn-add primary"
          >
            <v-icon left dark size="22">mdi-file-plus</v-icon>
            Phân quyền
          </button>
        </div>
      </v-col>
    </v-row>

    <v-row class="my-0 mb-3">
      <v-col cols="12" class="pt-0">
        <v-data-table
          :headers="headers"
          :items="listMenu"
          :items-per-page="itemsPerPage"
          item-key="MaMenu"
          hide-default-footer
          class="table-base mt-2"
          no-data-text="Không có dữ liệu"
          :loading="loadingData"
          loading-text="Đang tải... "
          item-text="name"
          show-select
          v-model="selected"
        >
          <template v-slot:item.chon="{ index }"></template>
          <template v-slot:item.stt="{ index }">
            <td>{{ index + 1 }}</td>
          </template>
          <template v-slot:item.LoaiMenu="{ item, index }">
            <td>{{ item === "1" ? "mobile" : "Web" }}</td>
          </template>
          <template v-slot:item.thaotac="{ item }">
            <v-tooltip top v-if="isAdmin">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="#2161b1"
                  text
                  icon
                  class="mr-2"
                  v-bind="attrs"
                  v-on="on"
                  @click.stop="editMenu(item)"
                >
                  <v-icon size="18">mdi-pencil</v-icon>
                </v-btn>
              </template>
              <span>Sửa</span>
            </v-tooltip>

            <v-tooltip top v-if="isAdmin">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="red"
                  text
                  icon
                  class="ml-2"
                  v-bind="attrs"
                  v-on="on"
                  @click.stop="openDialogDeleteItem(item)"
                >
                  <v-icon size="18">mdi-delete</v-icon>
                </v-btn>
              </template>
              <span>Xóa</span>
            </v-tooltip>
          </template>
        </v-data-table>
        <pagination
          v-if="pageCount"
          :pageInput="page"
          :total="total"
          :pageCount="pageCount"
          @tiny:change-page="handlechangePage"
        ></pagination>
      </v-col>
    </v-row>
    <div v-if="dialogForm">
      <v-dialog max-width="1200" v-model="dialogForm" persistent fullscreen>
        <v-card>
          <v-toolbar dark color="primary" class="px-3">
            <v-toolbar-title v-if="edittingForm">Cập nhật menu</v-toolbar-title>
            <v-toolbar-title v-if="!edittingForm"
              >Thêm mới menu</v-toolbar-title
            >
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn icon dark @click="closeModalForm">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>

          <FormMenu
            ref="formMenuRef"
            :dataEdit="dataEdit"
            :listMenu="listMenu"
            @emitDataGroup="handleEmitDataGroup"
          />

          <v-card-text class="px-2 py-2">
            <v-card-actions class="justify-center my-4">
              <v-btn
                small
                depressed
                color="red"
                class="white--text mr-2"
                :loading="loadingAction"
                :disabled="loadingAction"
                @click="closeModalForm"
              >
                <v-icon left> mdi-close </v-icon>
                {{ $t("basic.thoat") }}
              </v-btn>
              <v-btn
                v-if="!readonlyForm"
                small
                depressed
                class="mr-2"
                color="primary"
                :loading="loadingAction"
                :disabled="loadingAction"
                @click.native="submitForm"
              >
                <v-icon left dark size="18">
                  mdi-file-document-plus-outline
                </v-icon>
                <span v-if="edittingForm">Cập nhật</span>
                <span v-else>Thêm mới</span>
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>

    <v-dialog v-model="dialogDelete" persistent max-width="286">
      <v-card>
        <v-toolbar dark color="primary">
          <v-card-title class="text-h7 text-center">
            Bạn có muốn xóa không?
          </v-card-title>
        </v-toolbar>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialogDelete = false">
            Từ chối
          </v-btn>
          <v-btn color="primary" text @click="deleteMenu"> Xác nhận </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <div v-if="dialogMenu">
      <v-dialog v-model="dialogMenu" persistent max-width="860px">
        <v-card>
          <v-toolbar dark color="primary" class="px-3">
            <span class="text-h5">Phân quyền menu</span>
          </v-toolbar>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <FormPhanQuyenMenu
                    ref="formPhanQuyenMenuRef"
                    :dataMenu="listMenu"
                    :dataSelectEditMenu="dataSelectEditMenu"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              small
              depressed
              color="red"
              class="white--text mr-2"
              :loading="loadingAction"
              :disabled="loadingAction"
              @click="dialogMenu = false"
            >
              <v-icon left> mdi-close </v-icon>
              {{ $t("basic.thoat") }}
            </v-btn>
            <v-btn
              v-if="!readonlyForm"
              small
              depressed
              class="mr-2"
              color="primary"
              :loading="loadingAction"
              :disabled="loadingAction"
              @click="handleDecentralization"
            >
              <v-icon left dark size="18">
                mdi-file-document-plus-outline
              </v-icon>
              <span>Phân quyền</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";
import toastr from "toastr";
import FormMenu from "./FormMenu.vue";
import FormPhanQuyenMenu from "@/views/FormPhanQuyenMenu";
export default {
  components: {
    Pagination,
    FormMenu,
    FormPhanQuyenMenu,
  },

  data() {
    return {
      selected: [],
      textSearch: "",
      headers: [
        {
          sortable: false,
          text: "STT",
          align: "center",
          value: "stt",
          width: 15,
        },
        {
          sortable: false,
          text: "Mã menu",
          align: "left",
          value: "MaMenu",
          class: "th-center",
          width: 120,
        },
        {
          sortable: false,
          text: "Tên menu",
          align: "left",
          value: "TenMenu",
          class: "th-center",
          width: 120,
        },
        {
          sortable: false,
          text: "Tên nhóm quyền",
          align: "left",
          value: "tenNhomQuyen",
          class: "th-center",
          width: 120,
        },
        {
          sortable: false,
          text: "Loại menu",
          align: "left",
          value: "LoaiMenu",
          class: "th-center",
          width: 120,
        },
        {
          sortable: false,
          text: "Thao tác",
          align: "left",
          value: "thaotac",
          class: "th-center",
          width: 68,
        },
      ],
      listMenu: [],
      itemsPerPage: 20,
      loadingData: false,
      pageCount: 1,
      page: 0,
      edittingForm: false,
      dialogForm: false,
      readonlyForm: false,
      loadingAction: false,
      total: 1,
      dataEdit: {},
      dialogDelete: false,
      idMenu: "",
      dialogMenu: false,
      dataSelectEditMenu: [],
      emitDataGroup: [],
    };
  },
  created() {
    const vm = this;
    vm.getListMenu();
  },

  mounted() {
    console.log("mom: ");
  },

  methods: {
    getListMenuFilter() {
      const vm = this;
      console.log("tim kiếm");
      vm.getListMenu({ keyword: vm.textSearch });
      vm.textSearch = "";
    },
    getListMenu(dataParam) {
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
        collectionName: "menu",
        data: !dataParam ? dataPayload : { ...dataPayload, ...dataParam },
      };
      vm.$store
        .dispatch("collectionFilter", filter)
        .then(function (response) {
          vm.listMenu = response.content.map((item) => ({
            ...item,
            tenNhomQuyen: item.ListQuyenMenu.map((el) => el.TenNhomQuyen).join(
              ", "
            ),
          }));

          console.log("res: ", vm.listMenu);
          vm.total = vm.listMenu.length;
          vm.pageCount = response.totalPages;
          vm.loadingData = false;
        })
        .catch(function () {
          vm.loadingData = false;
        });
    },
    openDialogDeleteItem(item) {
      const vm = this;
      console.log("id delete: ", item.PrimKey);
      vm.dialogDelete = true;
      vm.idMenu = item.PrimKey;
    },
    deleteMenu() {
      const vm = this;
      vm.dialogDelete = false;
      const payload = {
        payload: vm.idMenu,
        type: "menu",
      };
      vm.$store
        .dispatch("deleteItemData", payload)
        .then(function (response) {
          toastr.success("Xóa thành công");
          vm.listMenu = vm.listMenu.reduce(function (res, cur) {
            if (vm.idMenu !== cur.PrimKey) res.push(cur);
            return res;
          }, []);
          vm.total = vm.listMenu.length;

          console.log("res dele: ", response);
        })
        .catch(function () {
          vm.loadingData = false;
        });
    },
    editMenu(item) {
      const vm = this;
      const dataEdit = {
        ...item,
      };
      vm.edittingForm = true;
      console.log("item edit: ", item);
      vm.dataEdit = dataEdit;
      vm.dialogForm = true;
    },
    handlechangePage(pageCurent) {
      const vm = this;
      vm.getListCadres(pageCurent);
    },
    showModalForm() {
      const vm = this;
      vm.dialogForm = true;
      vm.edittingForm = false;
    },
    closeModalForm() {
      const vm = this;
      vm.dialogForm = false;
      vm.dataEdit = {};
    },
    openDialogDecentralization() {
      const vm = this;
      vm.dialogMenu = true;
      vm.dataSelectEditMenu = vm.selected.map((item) => item.MaDinhDanh);
    },
    handleDecentralization() {
      const vm = this;
      console.log("handleCkick: ", vm.selected);

      if (vm.$refs.formPhanQuyenMenuRef.validateForm()) {
        const formData = vm.$refs.formPhanQuyenMenuRef.formData;

                const payloadData = vm.listMenu.reduce((res, cur) => {
          if (formData.menu.includes(cur.MaDinhDanh)) {
            return [
              ...res,
              {
                IdMenu: cur.PrimKey,
                PhanQuyenMenu: formData.TenNhomQuyen.map((el) => ({
                  MaDinhDanhNhomQuyen: el,
                })),
              },
            ];
          } else {
            return res;
          }
        }, []);

        const payload = {
          payload: payloadData,
          type: "menu/many",
        };
        vm.$store
          .dispatch("createItemData", payload)
          .then(function (response) {
            toastr.success("Phân quyền thành công");
            vm.dialogMenu = false;
            vm.selected = [];
            vm.getListMenu();
            console.log("res post: ", response);
          })
          .catch(function () {
            vm.loadingData = false;
          });

        console.log("submit", formData, payloadData, formData.menu);
      }
    },
    handleEmitDataGroup(data) {
      const vm = this;
      vm.emitDataGroup = data;
    },
    submitForm() {
      const vm = this;
      if (vm.$refs.formMenuRef.validateForm()) {
        const formData = vm.$refs.formMenuRef.formData;

        formData.PhanQuyenMenu = vm.emitDataGroup.reduce((res, cur) => {
          if (formData.PhanQuyenMenu.includes(cur.MaDinhDanh)) {
            return [...res, { MaDinhDanhNhomQuyen: cur.MaDinhDanh }];
          } else {
            return res;
          }
        }, []);

        formData.MaMenu = formData.MaMenu.replace(/ +/g, "");

        if (!vm.edittingForm) {
          const payload = {
            payload: formData,
            type: "menu",
          };
          vm.$store
            .dispatch("createItemData", payload)
            .then(function (response) {
              toastr.success("Thêm mới thành công");
              if (vm.listMenu.length < vm.itemsPerPage) {
                const data = [...vm.listMenu];
                data.push({
                  ...formData,
                  PrimKey: response.data.resp.PrimKey,
                  tenNhomQuyen: response.data.resp.ListQuyenMenu.map(
                    (el) => el.TenNhomQuyen
                  ).join(", "),
                  ListQuyenMenu: response.data.resp.ListQuyenMenu,
                });
                vm.listMenu = data;
              }
              vm.dialogForm = false;
              vm.total = vm.listMenu.length;
              console.log("res post: ", response);
            })
            .catch(function () {
              vm.loadingData = false;
              toastr.error(
                  "Vui lòng kiểm tra lại dữ liệu nhập vào các trường"
                );
            });
        } else {
          const payload = {
            payload: formData,
            type: "menu",
            id: vm.dataEdit.PrimKey,
          };

          vm.$store
            .dispatch("editItemData", payload)
            .then(function (response) {
              toastr.success("Cập nhật thành công");
              vm.dialogForm = false;
              vm.listMenu = vm.listMenu.reduce(function (res, cur) {
                if (vm.dataEdit.PrimKey === cur.PrimKey) {
                  return [
                    ...res,
                    {
                      ...cur,
                      ...formData,
                      tenNhomQuyen: response.data.resp.ListQuyenMenu.map(
                        (el) => el.TenNhomQuyen
                      ).join(", "),
                      ListQuyenMenu: response.data.resp.ListQuyenMenu,
                    },
                  ];
                } else {
                  return [...res, cur];
                }
              }, []);
              console.log(
                "res edit: ",
                response,
                vm.dataEdit.PrimKey,
                vm.listMenu
              );
               vm.dataEdit = {}
            })
            .catch(function () {
              vm.loadingData = false;
              toastr.error(
                  "Vui lòng kiểm tra lại dữ liệu nhập vào các trường"
                );
            });
        }

        console.log("submit", formData, vm.emitDataGroup);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>