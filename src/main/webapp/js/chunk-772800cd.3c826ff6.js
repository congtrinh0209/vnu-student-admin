(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-772800cd"],{"0e7c":function(t,a,e){"use strict";e("7848")},3168:function(t,a,e){"use strict";e.d(a,"a",(function(){return i}));const i={PHAN_QUYEN_CAN_BO:["ALL_CANBO_PHANQUYEN","CANBO_PHANQUYEN"],XEM_CAN_BO_ALL:["ALL_CANBO_XEM"],XEM_CAN_BO_DV:["CANBO_XEM"],THEM_MOI_CAN_BO_ALL:["ALL_CANBO_CAPNHAT"],THEM_MOI_CAN_BO_DV:["CANBO_CAPNHAT"],XEM_SINH_VIEN_ALL:["ALL_SINHVIEN_XEM"],XEM_SINH_VIEN_DV:["SINHVIEN_XEM"],THEM_MOI_SINH_VIEN_ALL:["ALL_SINHVIEN_CAPNHAT"],THEM_MOI_SINH_VIEN_DV:["SINHVIEN_CAPNHAT"],CAP_NHAT_ANH_CHO_SV_ALL:["ALL_ALBUM_CAPNHAT"],CAP_NHAT_ANH_CHO_SV_DV:["ALBUM_CAPNHAT"],CAP_NHAT_TIN_BAI_ALL:["ALL_TINBAI_CAPNHAT"],CAP_NHAT_TIN_BAI_DV:["TINBAI_CAPNHAT"],XEM_TIN_BAI_ALL:["ALL_TINBAI_XEM"],XEM_TIN_BAI_DV:["TINBAI_XEM"],DUYET_TIN_BAI:["TINBAI_DUYET"],HUY_XUAT_BAN_TIN_BAI:["TINBAI_HUY_XUATBAN"],XUAT_BAN_TIN_BAI:["TINBAI_XUATBAN"],CAP_NHAT_VA_THEM_BAN_DO:["BANDO_CAPNHAT"],XOA_BAN_DO:["BANDO_XOA"],CAP_NHAT_VA_THEM_LOAI_BAN_DO:["LOAI_BANDO_CAPNHAT"],XOA_LOAI_BAN_DO:["LOAI_BANDO_XOA"]}},4624:function(t,a,e){"use strict";e.d(a,"a",(function(){return n}));var i=e("66e5");const n={name:"useAccountAuthorization",data(){return{}},mounted(){},methods:{handleCheckActionAuthor(t){const a=this,e=a.$cookies.get("UserInfo","").vaiTroSuDung.split(",");for(const i of e)if(t.includes(i))return!0;return!1},handleCheckAuthor(t,a){const e=this;let n="";const o=e.$cookies.get("UserInfo","").vaiTroSuDung.split(",");for(const s of o){if(t.includes(s)){n=i["a"].ALL;break}a.includes(s)&&(n=i["a"].ALONE)}return n}}}},"66e5":function(t,a,e){"use strict";e.d(a,"a",(function(){return i}));const i={ALL:"ALL",ALONE:"ALONE"}},7848:function(t,a,e){},e58a:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",sm:"5"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.textSearch,expression:"textSearch"}],staticClass:"form-control",staticStyle:{height:"32px",outline:"none"},attrs:{type:"text",placeholder:"Nhập tiêu đề tin tức...",autocomplete:"off"},domProps:{value:t.textSearch},on:{input:function(a){a.target.composing||(t.textSearch=a.target.value)}}})]),e("v-col",{attrs:{cols:"12",sm:"1"}},[e("button",{staticClass:"btn btn-search primary",on:{click:function(a){return a.stopPropagation(),t.getListNewsFilter.apply(null,arguments)}}},[e("v-icon",{attrs:{left:"",dark:"",size:"22"}},[t._v("mdi mdi-magnify-minus-outline")])],1)]),"ALL"===t.checkViewNews?e("v-col",{attrs:{cols:"12",sm:"2"}},[e("div",[e("v-select",{staticClass:"custom-height-select-filter",attrs:{items:t.optionAgencies,label:"Cơ quan đơn vị",dense:"",solo:""},on:{change:t.handlechangeSelectedAgencies}})],1)]):t._e(),t.checkActionAddAndUpdate?e("v-col",{attrs:{cols:"12",sm:"ALL"===t.checkViewNews?4:6}},[e("div",{staticStyle:{float:"right"}},[e("button",{staticClass:"btn btn-add primary",on:{click:function(a){return a.stopPropagation(),t.showModalForm.apply(null,arguments)}}},[e("v-icon",{attrs:{left:"",dark:"",size:"22"}},[t._v("mdi-file-plus")]),t._v(" Thêm mới ")],1)])]):t._e()],1),e("v-row",{staticClass:"my-0 mb-3"},[e("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[e("v-data-table",{staticClass:"table-base mt-2",attrs:{headers:t.headers,items:t.listNews,"items-per-page":t.itemsPerPage,"item-key":"PrimKey","hide-default-footer":"","no-data-text":"Không có dữ liệu",loading:t.loadingData,"loading-text":"Đang tải... ","item-text":"name"},scopedSlots:t._u([{key:"item.stt",fn:function(a){var i=a.index;return[e("td",[t._v(t._s(i+1))])]}},{key:"item.TinhTrang",fn:function(a){var i=a.item;a.index;return[e("td",[t._v(" "+t._s("2"===i.TinhTrang?"Xuất bản":"Ngừng xuất bản")+" ")])]}},{key:"item.thaotac",fn:function(a){var i=a.item;return["2"!==i.TinhTrang?e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on,o=a.attrs;return[e("v-btn",t._g(t._b({attrs:{color:"#2161b1",text:"",icon:""},on:{click:function(a){return a.stopPropagation(),t.editNews(i)}}},"v-btn",o,!1),n),[e("v-icon",{attrs:{size:"18"}},[t._v("mdi-pencil")])],1)]}}],null,!0)},[e("span",[t._v("Sửa")])]):t._e(),"2"!==i.TinhTrang?e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on,o=a.attrs;return[e("v-btn",t._g(t._b({staticClass:"ml-2",attrs:{color:"red",text:"",icon:""},on:{click:function(a){return a.stopPropagation(),t.openDialogDeleteItem(i)}}},"v-btn",o,!1),n),[e("v-icon",{attrs:{size:"18"}},[t._v("mdi-delete")])],1)]}}],null,!0)},[e("span",[t._v("Xóa")])]):t._e(),e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on,o=a.attrs;return[t.checkActionPublish||t.checkActionUnPublish?e("v-btn",t._g(t._b({staticClass:"ml-2",attrs:{color:"#2161b1",text:"",icon:""},on:{click:function(a){return a.stopPropagation(),t.openDialogPublicDate(i)}}},"v-btn",o,!1),n),[e("v-icon",{attrs:{size:"18"}},[t._v(t._s(t.viewActionPublish(i)))])],1):t._e()]}}],null,!0)},[e("span",[t._v(t._s("2"===i.TinhTrang?"Ngừng xuất bản":"Xuất bản"))])]),e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on,o=a.attrs;return[e("v-btn",t._g(t._b({staticClass:"ml-2",attrs:{color:"#2161b1",text:"",icon:""},on:{click:function(a){return a.stopPropagation(),t.handleShowNews(i)}}},"v-btn",o,!1),n),[e("v-icon",{attrs:{size:"18"}},[t._v("mdi-eye")])],1)]}}],null,!0)},[e("span",[t._v("Hiển thị bài viết")])])]}}])}),t.pageCount?e("pagination",{attrs:{pageInput:t.page,total:t.total,pageCount:t.pageCount},on:{"tiny:change-page":t.handlechangePage}}):t._e()],1)],1),t.dialogForm?e("div",[e("v-dialog",{attrs:{"max-width":"1200",persistent:"",fullscreen:""},model:{value:t.dialogForm,callback:function(a){t.dialogForm=a},expression:"dialogForm"}},[e("v-card",[e("v-toolbar",{staticClass:"px-3",attrs:{dark:"",color:"primary"}},[t.edittingForm?e("v-toolbar-title",[t._v("Cập nhật bài viết tin tức")]):t._e(),t.edittingForm?t._e():e("v-toolbar-title",[t._v("Thêm mới bài viết tin tức")]),e("v-spacer"),e("v-toolbar-items",[e("v-btn",{attrs:{icon:"",dark:""},on:{click:t.closeModalForm}},[e("v-icon",[t._v("mdi-close")])],1)],1)],1),e("FormBaiVietTinTuc",{ref:"formBaiVietTinTucRef",attrs:{dataEdit:t.dataEdit},on:{emitDataAgencies:t.handleEmitDataAgencies,emitDataCategoryNews:t.handleEmitDataCategoryNews}}),e("v-card-text",{staticClass:"px-2 py-2"},[e("v-card-actions",{staticClass:"justify-center my-4"},[e("v-btn",{staticClass:"white--text mr-2",attrs:{small:"",depressed:"",color:"red",loading:t.loadingAction,disabled:t.loadingAction},on:{click:t.closeModalForm}},[e("v-icon",{attrs:{left:""}},[t._v(" mdi-close ")]),t._v(" "+t._s(t.$t("basic.thoat"))+" ")],1),t.readonlyForm?t._e():e("v-btn",{staticClass:"mr-2",attrs:{small:"",depressed:"",color:"primary",loading:t.loadingAction,disabled:t.loadingAction},nativeOn:{click:function(a){return t.submitForm.apply(null,arguments)}}},[e("v-icon",{attrs:{left:"",dark:"",size:"18"}},[t._v(" mdi-file-document-plus-outline ")]),t.edittingForm?e("span",[t._v("Cập nhật")]):e("span",[t._v("Thêm mới")])],1)],1)],1)],1)],1)],1):t._e(),e("v-dialog",{attrs:{persistent:"","max-width":"286"},model:{value:t.dialogDelete,callback:function(a){t.dialogDelete=a},expression:"dialogDelete"}},[e("v-card",[e("v-toolbar",{attrs:{dark:"",color:"primary"}},[e("v-card-title",{staticClass:"text-h7 text-center"},[t._v(" Bạn có muốn xóa không? ")])],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",text:""},on:{click:function(a){t.dialogDelete=!1}}},[t._v(" Từ chối ")]),e("v-btn",{attrs:{color:"primary",text:""},on:{click:t.deleteNews}},[t._v(" Xác nhận ")])],1)],1)],1),t.dialogPublicDate?e("div",[e("v-dialog",{attrs:{persistent:"","max-width":"860px"},model:{value:t.dialogPublicDate,callback:function(a){t.dialogPublicDate=a},expression:"dialogPublicDate"}},[e("v-card",[e("v-toolbar",{staticClass:"px-3",attrs:{dark:"",color:"primary"}},[e("span",{staticClass:"text-h5"},[t._v("Ngày xuất bản")])]),e("v-card-text",[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[e("FormPublicDate",{ref:"formPublicDateRef",attrs:{dataItem:t.dataItem}})],1)],1)],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{staticClass:"white--text mr-2",attrs:{small:"",depressed:"",color:"red",loading:t.loadingAction,disabled:t.loadingAction},on:{click:function(a){t.dialogPublicDate=!1}}},[e("v-icon",{attrs:{left:""}},[t._v(" mdi-close ")]),t._v(" "+t._s(t.$t("basic.thoat"))+" ")],1),t.readonlyForm?t._e():e("v-btn",{staticClass:"mr-2",attrs:{small:"",depressed:"",color:"primary",loading:t.loadingAction,disabled:t.loadingAction},on:{click:t.handlePublicDate}},[e("v-icon",{attrs:{left:"",dark:"",size:"18"}},[t._v(" mdi-file-document-plus-outline ")]),e("span",[t._v("Xác nhận")])],1)],1)],1)],1)],1):t._e()],1)},n=[],o=(e("13d5"),e("e20e")),s=e("854a"),l=e.n(s),c=e("c1df"),r=e.n(c),d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-form",{ref:"formBaiVietTinTucRef",staticClass:"dialog-body",attrs:{"lazy-validation":""},model:{value:t.validForm,callback:function(a){t.validForm=a},expression:"validForm"}},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12"}},[e("div",{staticClass:"titleText mb-2"},[t._v(" Tên bài viết: "),e("span",{staticStyle:{color:"red"}},[t._v("*")])]),e("v-text-field",{attrs:{rules:[t.rules.required],solo:"",label:"Nhập tên bài viết...",dense:"","hide-details":"auto",required:""},on:{change:t.handleChangeTitle},model:{value:t.formData.TenBaiViet,callback:function(a){t.$set(t.formData,"TenBaiViet",a)},expression:"formData.TenBaiViet"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12"}},[e("div",{staticClass:"titleText mb-2"},[t._v("Ảnh đại diện:")]),e("v-file-input",{attrs:{accept:"image/png, image/jpeg, image/bmp","prepend-icon":"",label:"Chọn ảnh đại diện",solo:"",dense:""},on:{change:t.handleChangeFile}}),t.formData.AnhDaiDien?e("div",{staticClass:"note italic pointer",on:{click:t.handleViewAvatar}},[t._v(" Nhấn để xem ảnh ")]):t._e()],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12"}},[e("div",{staticClass:"titleText mb-2"},[t._v(" Đường dẫn: "),e("span",{staticStyle:{color:"red"}},[t._v("*")])]),e("v-text-field",{attrs:{rules:[t.rules.required],solo:"",label:"Nhập tên bài viết...",dense:"","hide-details":"auto",required:""},model:{value:t.formData.DuongDanRutGon,callback:function(a){t.$set(t.formData,"DuongDanRutGon",a)},expression:"formData.DuongDanRutGon"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12"}},[e("div",{staticClass:"titleText mb-2"},[t._v("Mô tả:")]),e("v-text-field",{attrs:{solo:"",label:"Nhập mô tả...",dense:"","hide-details":"auto"},model:{value:t.formData.MoTa,callback:function(a){t.$set(t.formData,"MoTa",a)},expression:"formData.MoTa"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12"}},[e("div",{staticClass:"titleText mb-2"},[t._v("Chuyên mục:")]),e("v-select",{staticClass:"custom-height-select",attrs:{items:t.optionCategoryNews,label:"Chọn",dense:"",solo:"",multiple:""},model:{value:t.formData.ChuyenMuc,callback:function(a){t.$set(t.formData,"ChuyenMuc",a)},expression:"formData.ChuyenMuc"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12"}},[e("div",{staticClass:"titleText mb-2"},[t._v("Nội dung:")]),e("VueEditor",{attrs:{useCustomImageHandler:"",height:300},on:{"image-added":t.imageHandler},model:{value:t.formData.NoiDungBaiViet,callback:function(a){t.$set(t.formData,"NoiDungBaiViet",a)},expression:"formData.NoiDungBaiViet"}})],1)],1),e("v-dialog",{attrs:{persistent:"",fullscreen:""},model:{value:t.showAvatar,callback:function(a){t.showAvatar=a},expression:"showAvatar"}},[e("v-card",[e("v-toolbar",{staticClass:"px-3"},[e("v-spacer"),e("v-toolbar-items",[e("v-btn",{attrs:{icon:""},on:{click:function(a){t.showAvatar=!1}}},[e("v-icon",[t._v("mdi-close")])],1)],1)],1),e("v-card-text",[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12"}},[e("div",[e("img",{staticClass:"style-img",attrs:{src:t.formData.AnhDaiDien,alt:""}})])])],1)],1)],1)],1)],1)],1)},u=[];const h=t=>(t=t.toLowerCase(),t=t.normalize("NFD").replace(/[\u0300-\u036f]/g,""),t=t.replace(/[đĐ]/g,"d"),t=t.replace(/([^0-9a-z-\s])/g,""),t=t.replace(/(\s+)/g,"-"),t=t.replace(/-+/g,"-"),t=t.replace(/^-+|-+$/g,""),t);var m=e("5873"),g={props:["dataEdit"],components:{VueEditor:m["a"]},data(){var t;return{formData:{DuongDanRutGon:this.dataEdit.DuongDanRutGon||"",TenBaiViet:this.dataEdit.TenBaiViet||"",AnhDaiDien:this.dataEdit.AnhDaiDien||null,NgayXuatBan:this.dataEdit.NgayXuatBan?r()(this.dataEdit.NgayXuatBan).format("DD/MM/YYYY"):"",NoiDungBaiViet:this.dataEdit.NoiDungBaiViet||"",MoTa:this.dataEdit.MoTa||"",TinhTrang:this.dataEdit.TinhTrang||"1",ChuyenMuc:null!==(t=this.dataEdit.ChuyenMuc)&&void 0!==t&&t.length?this.dataEdit.ChuyenMuc.map(t=>t.MaDinhDanhChuyenMuc):[]},showAvatar:!1,optionAgencies:[],optionCategoryNews:[],validForm:!1,linkImg:"",rules:{required:t=>!!t||"Không được để trống.",date:t=>{const a=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;return a.test(t)||"Định dạng ngày là: ngày/tháng/năm"},file:t=>!t||t.size<2e6||"Kich thước fle nhỏ hơn 2MB"}}},mounted(){console.log("moun")},created(){const t=this;t.getList("coquandonvi"),t.getList("chuyenmuctintuc"),console.log("cretate",this.dataEdit)},methods:{getList(t){let a=this;const e={page:0,size:20,keyword:"",orderFields:"",orderTypes:"",tinhTrang:"",thamChieu_maMuc:""},i={collectionName:t,data:e};a.$store.dispatch("collectionFilter",i).then((function(e){const i=e.content;"coquandonvi"===t?(a.$emit("emitDataAgencies",i),a.optionAgencies=i.map(t=>({text:t.tenGoi,value:t.maHanhChinh}))):(a.$emit("emitDataCategoryNews",i),a.optionCategoryNews=i.map(t=>({text:t.TenChuyenMuc,value:t.MaDinhDanh})))}))},validateForm(){let t=this;return t.$refs.formBaiVietTinTucRef.validate()},handleChangeFile(t){const a=this;if(t){let e=new FormData;e.append("file",t);const i={type:"baiviettintuc/upload",payload:e};a.$store.dispatch("uploadFile",i).then((function(t){const e=t.data.resp.fullPath;a.formData.AnhDaiDien=e,console.log("res: ",t)})).catch((function(){}))}else a.formData.AnhDaiDien=""},handleChangeTitle(t){const a=this,e=h(t);a.formData.DuongDanRutGon=e},handleViewAvatar(){const t=this;t.showAvatar=!0},imageHandler(t,a,e,i){const n=this;if(t){let o=new FormData;o.append("file",t);const s={type:"baiviettintuc/upload",payload:o};n.$store.dispatch("uploadFile",s).then((function(t){const n=t.data.resp.fullPath;a.insertEmbed(e,"image",n),i(),console.log("res: ",t)})).catch((function(){}))}}}},v=g,p=(e("0e7c"),e("2877")),f=e("6544"),_=e.n(f),A=e("8336"),D=e("b0af"),N=e("99d9"),b=e("62ad"),y=e("a523"),T=e("169a"),w=e("23a7"),C=e("4bd4"),V=e("132d"),B=e("0fd9"),I=e("b974"),k=e("2fa4"),M=e("8654"),P=e("71d9"),x=e("2a7f"),E=Object(p["a"])(v,d,u,!1,null,null,null),L=E.exports;_()(E,{VBtn:A["a"],VCard:D["a"],VCardText:N["b"],VCol:b["a"],VContainer:y["a"],VDialog:T["a"],VFileInput:w["a"],VForm:C["a"],VIcon:V["a"],VRow:B["a"],VSelect:I["a"],VSpacer:k["a"],VTextField:M["a"],VToolbar:P["a"],VToolbarItems:x["a"]});var H=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-form",{ref:"formPublicDateRef",staticClass:"dialog-body",attrs:{"lazy-validation":""},model:{value:t.validForm,callback:function(a){t.validForm=a},expression:"validForm"}},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12"}},[e("div",{staticClass:"titleText mb-2"},[t._v(" Ngày xuất bản: "),e("span",{staticStyle:{color:"red"}},[t._v("*")])]),e("v-text-field",{attrs:{rules:[t.rules.birthday,t.rules.checkDatePresent,t.rules.required],solo:"",label:"Nhập ngày xuất bản...",dense:"","hide-details":"auto",required:""},model:{value:t.formData.NgayXuatBan,callback:function(a){t.$set(t.formData,"NgayXuatBan",a)},expression:"formData.NgayXuatBan"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12"}},[e("div",{staticClass:"titleText mb-2"},[t._v(" Ngày hết hạn: ")]),e("v-text-field",{attrs:{rules:[t.rules.birthday],solo:"",label:"Nhập ngày hết hạn...",dense:"","hide-details":"auto",required:""},model:{value:t.formData.NgayHuyXuatBan,callback:function(a){t.$set(t.formData,"NgayHuyXuatBan",a)},expression:"formData.NgayHuyXuatBan"}})],1)],1)],1)},F=[],Y={props:["dataItem"],data(){return{formData:{NgayXuatBan:this.dataItem.NgayXuatBan?r()(this.dataItem.NgayXuatBan).format("DD/MM/YYYY"):r()(new Date).format("DD/MM/YYYY"),NgayHuyXuatBan:this.dataItem.NgayHuyXuatBan?r()(this.dataItem.NgayHuyXuatBan).format("DD/MM/YYYY"):"",TinhTrang:"2"},validForm:!1,rules:{required:t=>!!t||"Không được để trống.",birthday:t=>{const a=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;return a.test(t)||"Định dạng ngày sinh là: ngày/tháng/năm"},checkDatePresent:t=>{let a=!0;const e=r()(r()(new Date).format("DD/MM/YYYY"),"DD/MM/YYYY").valueOf(),i=r()(t,"DD/MM/YYYY").valueOf(),n=e-i;return n>0&&(a=!1),a||"Ngày xuất bản không được sau ngày "+r()(new Date,"DD/MM/YYYY").format("DD/MM/YYYY")}}}},mounted(){console.log("moun")},created(){console.log("props: ",this.dataItem)},methods:{validateForm(){let t=this;return t.$refs.formPublicDateRef.validate()}}},X=Y,O=Object(p["a"])(X,H,F,!1,null,"7c8117b3",null),S=O.exports;_()(O,{VCol:b["a"],VForm:C["a"],VRow:B["a"],VTextField:M["a"]});var $=e("3168"),U=e("4624"),z=e("66e5"),R=e("2f62"),K={components:{Pagination:o["a"],FormBaiVietTinTuc:L,FormPublicDate:S},mixins:[U["a"]],data(){return{switch1:!0,textSearch:"",headers:[{sortable:!1,text:"STT",align:"center",value:"stt",width:15},{sortable:!1,text:"Tên bài viết",align:"left",value:"TenBaiViet",class:"th-center",width:120},{sortable:!1,text:"Tình trạng",align:"left",value:"TinhTrang",class:"th-center",width:120},{sortable:!1,text:"Thao tác",align:"left",value:"thaotac",class:"th-center",width:68}],listNews:[],itemsPerPage:20,loadingData:!1,pageCount:1,page:0,edittingForm:!1,dialogForm:!1,readonlyForm:!1,loadingAction:!1,total:1,dataEdit:{},dialogDelete:!1,idNews:"",dialogDecentralization:!1,dataEditNews:[],emitDataAgencies:[],emitDataCategoryNews:[],dialogPublicDate:!1,dataItem:{},checkViewNews:"",checkActionAddAndUpdate:"",checkActionPublish:"",checkActionUnPublish:"",inforAccount:""}},created(){const t=this;t.inforAccount=t.$cookies.get("UserInfo",""),t.checkActionPublish=t.handleCheckActionAuthor($["a"].XUAT_BAN_TIN_BAI),t.checkActionUnPublish=t.handleCheckActionAuthor($["a"].HUY_XUAT_BAN_TIN_BAI),t.checkViewNews=t.handleCheckAuthor($["a"].XEM_TIN_BAI_ALL,$["a"].XEM_TIN_BAI_DV),t.checkActionAddAndUpdate=t.handleCheckAuthor($["a"].CAP_NHAT_TIN_BAI_ALL,$["a"].CAP_NHAT_TIN_BAI_DV),console.log(t.checkViewNews,t.checkActionAddAndUpdate),t.checkViewNews===z["a"].ALL?t.getListNews():t.getListNews({MaHanhChinhDonViSearch:t.inforAccount.MaDonVi})},mounted(){console.log("select: ")},computed:{...Object(R["b"])(["listAgencies"]),optionAgencies(){const t=this,a=t.listAgencies.map(t=>({text:t.tenGoi,value:t.maHanhChinh}));return t.listAgencies.length?a:[]}},methods:{getListNewsFilter(){const t=this;console.log("tim kiếm"),t.getListNews({keyword:t.textSearch}),t.textSearch=""},getListNews(t){let a=this;a.loadingData=!0;const e={page:0,size:20,keyword:"",orderFields:"",orderTypes:"",tinhTrang:"",thamChieu_maMuc:""},i={collectionName:"baiviettintuc",data:t?{...e,...t}:e};a.$store.dispatch("collectionFilter",i).then((function(t){a.listNews=t.content,console.log("res: ",a.listNews),a.total=a.listNews.length,a.pageCount=t.totalPages,a.loadingData=!1})).catch((function(){a.loadingData=!1}))},openDialogDeleteItem(t){const a=this;console.log("id delete: ",t.PrimKey),a.dialogDelete=!0,a.idNews=t.PrimKey},deleteNews(){const t=this;t.dialogDelete=!1;const a={payload:t.idNews,type:"baiviettintuc"};t.$store.dispatch("deleteItemData",a).then((function(a){l.a.success("Xóa thành công"),t.listNews=t.listNews.reduce((function(a,e){return t.idNews!==e.PrimKey&&a.push(e),a}),[]),t.total=t.listNews.length,console.log("res dele: ",a)})).catch((function(){t.loadingData=!1}))},editNews(t){const a=this,e={...t,CoQuanDonVi:{MaHanhChinh:t.CoQuanDonVi.MaHanhChinh,TenGoi:t.CoQuanDonVi.TenGoi}};a.edittingForm=!0,console.log("item edit: ",t),a.dataEdit=e,a.dialogForm=!0},handlechangePage(t){const a=this;a.getListNews(t)},showModalForm(){const t=this;t.dialogForm=!0,t.edittingForm=!1},closeModalForm(){const t=this;t.dialogForm=!1,t.dataEdit={}},handleEmitDataAgencies(t){const a=this;a.emitDataAgencies=t},handleEmitDataCategoryNews(t){const a=this;a.emitDataCategoryNews=t},openDialogPublicDate(t){const a=this;if("2"!==t.TinhTrang)a.dialogPublicDate=!0,a.dataItem=t;else{t.TinhTrang="1";const e={payload:t,type:"baiviettintuc",id:t.PrimKey};a.$store.dispatch("editItemData",e).then((function(e){l.a.success("Cập nhật thành công"),a.dialogForm=!1,a.listNews=a.listNews.reduce((function(a,i){return t.PrimKey===i.PrimKey?[...a,{...i,...e.data.resp}]:[...a,i]}),[]),console.log(a.listNews)})).catch((function(){a.loadingData=!1,l.a.error("Vui lòng kiểm tra lại dữ liệu nhập vào các trường")}))}},handlePublicDate(){const t=this;if(t.$refs.formPublicDateRef.validateForm()){const a=t.$refs.formPublicDateRef.formData,e={...t.dataItem,...a};e.NgayXuatBan=e.NgayXuatBan?r()(e.NgayXuatBan,"DD/MM/YYYY").valueOf():"",e.NgayHuyXuatBan=e.NgayHuyXuatBan?r()(e.NgayHuyXuatBan,"DD/MM/YYYY").valueOf():"",console.log("dataPayload: ",e,a);const i={payload:e,type:"baiviettintuc",id:t.dataItem.PrimKey};t.$store.dispatch("editItemData",i).then((function(i){l.a.success("Cập nhật thành công"),t.dialogPublicDate=!1,t.listNews=t.listNews.reduce((function(a,i){return t.dataItem.PrimKey===i.PrimKey?[...a,{...i,...e}]:[...a,i]}),[]),t.dataEdit={},console.log("res edit: ",i,e,t.dataEdit.PrimKey,t.listNews,a)})).catch((function(){t.loadingData=!1,l.a.error("Vui lòng kiểm tra lại dữ liệu nhập vào các trường")}))}},handleShowNews(t){window.location.href=""+t.DuongDanRutGon},handlechangeSelectedAgencies(t){const a=this;a.getListNews({MaHanhChinhDonViSearch:t}),a.textSearch=""},viewActionPublish(t){const a=this;let e="";return"2"===t.TinhTrang&&a.checkActionPublish?e="mdi-calendar-blank":"1"===t.TinhTrang&&a.checkActionUnPublish&&(e="mdi mdi-calendar-check"),e},submitForm(){const t=this;if(t.$refs.formBaiVietTinTucRef.validateForm()){const a=t.$refs.formBaiVietTinTucRef.formData,e=/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,i={...a,NgayXuatBan:a.NgayXuatBan?r.a.utc(a.NgayXuatBan,"DD/MM/YYYY").format():"",NgayHuyXuatBan:a.NgayHuyXuatBan?r.a.utc(a.NgayHuyXuatBan,"DD/MM/YYYY").format():""};if(t.inforAccount.hasOwnProperty("MaDonVi")&&(i.CoQuanDonVi={MaHanhChinh:t.inforAccount.MaDonVi}),i.ChuyenMuc=t.emitDataCategoryNews.reduce((t,e)=>a.ChuyenMuc.includes(e.MaDinhDanh)?[...t,{MaDinhDanhChuyenMuc:e.MaDinhDanh}]:t,[]),t.edittingForm){e.test(i.DuongDanRutGon)||(i.DuongDanRutGon="/#/tin-tuc/"+t.dataEdit.PrimKey);const a={payload:i,type:"baiviettintuc",id:t.dataEdit.PrimKey};t.$store.dispatch("editItemData",a).then((function(a){l.a.success("Cập nhật thành công"),t.dialogForm=!1,t.listNews=t.listNews.reduce((function(a,e){return t.dataEdit.PrimKey===e.PrimKey?[...a,{...e,...i}]:[...a,e]}),[]),t.dataEdit={},console.log("res edit: ",a,i,t.dataEdit.PrimKey,t.listNews)})).catch((function(){t.loadingData=!1,l.a.error("Vui lòng kiểm tra lại dữ liệu nhập vào các trường")}))}else{const n={payload:i,type:"baiviettintuc"};t.$store.dispatch("createItemData",n).then((function(n){if(l.a.success("Thêm mới thành công"),e.test(a.DuongDanRutGon))t.getListNews();else{const a={payload:{DuongDanRutGon:"/#/tin-tuc/"+n.data.resp.PrimKey},type:"baiviettintuc",id:n.data.resp.PrimKey};t.$store.dispatch("editItemData",a).then((function(a){t.getListNews(),console.log("res edit:... ",a,i,t.dataEdit.PrimKey,t.listNews)})).catch((function(){t.loadingData=!1,l.a.error("Lỗi cập nhật id")}))}t.dialogForm=!1,console.log("res post: ",n)})).catch((function(){t.loadingData=!1,l.a.error("Vui lòng kiểm tra lại dữ liệu nhập vào các trường")}))}console.log("submit",a,i)}}}},G=K,q=e("8fea"),Z=e("3a2f"),Q=Object(p["a"])(G,i,n,!1,null,"552711ff",null);a["default"]=Q.exports;_()(Q,{VBtn:A["a"],VCard:D["a"],VCardActions:N["a"],VCardText:N["b"],VCardTitle:N["c"],VCol:b["a"],VContainer:y["a"],VDataTable:q["a"],VDialog:T["a"],VIcon:V["a"],VRow:B["a"],VSelect:I["a"],VSpacer:k["a"],VToolbar:P["a"],VToolbarItems:x["a"],VToolbarTitle:x["b"],VTooltip:Z["a"]})}}]);