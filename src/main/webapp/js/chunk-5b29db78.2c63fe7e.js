(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b29db78"],{3168:function(t,a,e){"use strict";e.d(a,"a",(function(){return o}));const o={PHAN_QUYEN_CAN_BO:["ALL_CANBO_PHANQUYEN","CANBO_PHANQUYEN"],XEM_CAN_BO_ALL:["ALL_CANBO_XEM"],XEM_CAN_BO_DV:["CANBO_XEM"],THEM_MOI_CAN_BO_ALL:["ALL_CANBO_CAPNHAT"],THEM_MOI_CAN_BO_DV:["CANBO_CAPNHAT"],XEM_SINH_VIEN_ALL:["ALL_SINHVIEN_XEM"],XEM_SINH_VIEN_DV:["SINHVIEN_XEM"],THEM_MOI_SINH_VIEN_ALL:["ALL_SINHVIEN_CAPNHAT"],THEM_MOI_SINH_VIEN_DV:["SINHVIEN_CAPNHAT"],CAP_NHAT_ANH_CHO_SV_ALL:["ALL_ALBUM_CAPNHAT"],CAP_NHAT_ANH_CHO_SV_DV:["ALBUM_CAPNHAT"],CAP_NHAT_TIN_BAI_ALL:["ALL_TINBAI_CAPNHAT"],CAP_NHAT_TIN_BAI_DV:["TINBAI_CAPNHAT"],XEM_TIN_BAI_ALL:["ALL_TINBAI_XEM"],XEM_TIN_BAI_DV:["TINBAI_XEM"],DUYET_TIN_BAI:["TINBAI_DUYET"],HUY_XUAT_BAN_TIN_BAI:["TINBAI_HUY_XUATBAN"],XUAT_BAN_TIN_BAI:["TINBAI_XUATBAN"],CAP_NHAT_VA_THEM_BAN_DO:["BANDO_CAPNHAT"],XOA_BAN_DO:["BANDO_XOA"],CAP_NHAT_VA_THEM_LOAI_BAN_DO:["LOAI_BANDO_CAPNHAT"],XOA_LOAI_BAN_DO:["LOAI_BANDO_XOA"]}},4624:function(t,a,e){"use strict";e.d(a,"a",(function(){return i}));var o=e("66e5");const i={name:"useAccountAuthorization",data(){return{}},mounted(){},methods:{handleCheckActionAuthor(t){const a=this,e=a.$cookies.get("UserInfo","").vaiTroSuDung.split(",");for(const o of e)if(t.includes(o))return!0;return!1},handleCheckAuthor(t,a){const e=this;let i="";const n=e.$cookies.get("UserInfo","").vaiTroSuDung.split(",");for(const s of n){if(t.includes(s)){i=o["a"].ALL;break}a.includes(s)&&(i=o["a"].ALONE)}return i}}}},"66e5":function(t,a,e){"use strict";e.d(a,"a",(function(){return o}));const o={ALL:"ALL",ALONE:"ALONE"}},d71a:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",sm:"5"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.textSearch,expression:"textSearch"}],staticClass:"form-control",staticStyle:{outline:"none"},attrs:{type:"text",placeholder:"Nhập tiêu đề tin tức...",autocomplete:"off"},domProps:{value:t.textSearch},on:{input:function(a){a.target.composing||(t.textSearch=a.target.value)}}})]),e("v-col",{attrs:{cols:"12",sm:"1"}},[e("button",{staticClass:"btn btn-search primary",on:{click:function(a){return a.stopPropagation(),t.getListMapFilter.apply(null,arguments)}}},[e("v-icon",{attrs:{left:"",dark:"",size:"22"}},[t._v("mdi mdi-magnify-minus-outline")])],1)]),t.checkActionAddAndUpdate?e("v-col",{attrs:{cols:"12",sm:"6"}},[e("div",{staticStyle:{float:"right"}},[e("button",{staticClass:"btn btn-add primary",on:{click:function(a){return a.stopPropagation(),t.showModalForm.apply(null,arguments)}}},[e("v-icon",{attrs:{left:"",dark:"",size:"22"}},[t._v("mdi-file-plus")]),t._v(" Thêm mới ")],1)])]):t._e()],1),e("v-row",{staticClass:"my-0 mb-3"},[e("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[e("v-data-table",{staticClass:"table-base mt-2",attrs:{headers:t.headers,items:t.listTypeMap,"items-per-page":t.itemsPerPage,"item-key":"PrimKey","hide-default-footer":"","no-data-text":"Không có dữ liệu",loading:t.loadingData,"loading-text":"Đang tải... ","item-text":"name"},scopedSlots:t._u([{key:"item.chon",fn:function(t){t.index}},{key:"item.stt",fn:function(a){var o=a.index;return[e("td",[t._v(t._s(o+1))])]}},{key:"item.thaotac",fn:function(a){var o=a.item;return[t.checkActionAddAndUpdate?e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,n=a.attrs;return[e("v-btn",t._g(t._b({staticClass:"mr-2",attrs:{color:"#2161b1",text:"",icon:""},on:{click:function(a){return a.stopPropagation(),t.editTypeMap(o)}}},"v-btn",n,!1),i),[e("v-icon",{attrs:{size:"18"}},[t._v("mdi-pencil")])],1)]}}],null,!0)},[e("span",[t._v("Sửa")])]):t._e(),t.checkActionDelete?e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,n=a.attrs;return[e("v-btn",t._g(t._b({staticClass:"ml-2",attrs:{color:"red",text:"",icon:""},on:{click:function(a){return a.stopPropagation(),t.deleteTypeMap(o)}}},"v-btn",n,!1),i),[e("v-icon",{attrs:{size:"18"}},[t._v("mdi-delete")])],1)]}}],null,!0)},[e("span",[t._v("Xóa")])]):t._e()]}}]),model:{value:t.selected,callback:function(a){t.selected=a},expression:"selected"}}),t.pageCount?e("pagination",{attrs:{pageInput:t.page,total:t.total,pageCount:t.pageCount},on:{"tiny:change-page":t.handlechangePage}}):t._e()],1)],1),t.dialogForm?e("div",[e("v-dialog",{attrs:{"max-width":"1000",persistent:""},model:{value:t.dialogForm,callback:function(a){t.dialogForm=a},expression:"dialogForm"}},[e("v-card",[e("v-toolbar",{staticClass:"px-3",attrs:{dark:"",color:"primary"}},[t.edittingForm?e("v-toolbar-title",[t._v("Cập nhật loại bản đồ")]):t._e(),t.edittingForm?t._e():e("v-toolbar-title",[t._v("Thêm mới loại bản đồ")]),e("v-spacer"),e("v-toolbar-items",[e("v-btn",{attrs:{icon:"",dark:""},on:{click:t.closeModalForm}},[e("v-icon",[t._v("mdi-close")])],1)],1)],1),e("FormLoaiBanDoSo",{ref:"formLoaiBanDoRef",attrs:{dataEdit:t.dataEdit}}),e("v-card-text",{staticClass:"px-2 py-2"},[e("v-card-actions",{staticClass:"justify-center my-4"},[e("v-btn",{staticClass:"white--text mr-2",attrs:{small:"",depressed:"",color:"red",loading:t.loadingAction,disabled:t.loadingAction},on:{click:t.closeModalForm}},[e("v-icon",{attrs:{left:""}},[t._v(" mdi-close ")]),t._v(" "+t._s(t.$t("basic.thoat"))+" ")],1),t.readonlyForm?t._e():e("v-btn",{staticClass:"mr-2",attrs:{small:"",depressed:"",color:"primary",loading:t.loadingAction,disabled:t.loadingAction},nativeOn:{click:function(a){return t.submitForm.apply(null,arguments)}}},[e("v-icon",{attrs:{left:"",dark:"",size:"18"}},[t._v(" mdi-file-document-plus-outline ")]),t.edittingForm?e("span",[t._v("Cập nhật")]):e("span",[t._v("Thêm mới")])],1)],1)],1)],1)],1)],1):t._e()],1)},i=[],n=(e("13d5"),e("e20e")),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-form",{ref:"formBanDoRef",staticClass:"dialog-body",attrs:{"lazy-validation":""},model:{value:t.validForm,callback:function(a){t.validForm=a},expression:"validForm"}},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12"}},[e("div",{staticClass:"titleText mb-2"},[t._v(" Tên loại bản đồ: "),e("span",{staticStyle:{color:"red"}},[t._v("*")])]),e("v-text-field",{staticClass:"flex input-form",attrs:{rules:[t.rules.required],solo:"",label:"Nhập tên đầy đủ...",dense:"","hide-details":"auto",required:""},model:{value:t.formData.TenLoaiBanDo,callback:function(a){t.$set(t.formData,"TenLoaiBanDo",a)},expression:"formData.TenLoaiBanDo"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12"}},[e("div",{staticClass:"titleText mb-2"},[t._v("Mã icon:")]),e("v-text-field",{staticClass:"flex input-form",attrs:{solo:"",label:"Nhập mã icon...",dense:"","hide-details":"auto",required:""},model:{value:t.formData.MaIcon,callback:function(a){t.$set(t.formData,"MaIcon",a)},expression:"formData.MaIcon"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6"}},[e("div",{staticClass:"titleText mb-2"},[t._v("Tình trạng:")]),e("v-autocomplete",{staticClass:"flex input-form",attrs:{items:t.optionStatus,label:"Chọn",dense:"",solo:""},model:{value:t.formData.TinhTrang,callback:function(a){t.$set(t.formData,"TinhTrang",a)},expression:"formData.TinhTrang"}})],1),e("v-col",{attrs:{cols:"12",sm:"6"}},[e("div",{staticClass:"titleText mb-2"},[t._v("Số thứ tự:")]),e("v-text-field",{staticClass:"flex input-form",attrs:{solo:"",label:"Nhập số thứ tự...",dense:"","hide-details":"auto",required:""},model:{value:t.formData.SoThuTu,callback:function(a){t.$set(t.formData,"SoThuTu",a)},expression:"formData.SoThuTu"}})],1)],1)],1)},l=[],r={props:["dataEdit"],data(){var t,a,e,o,i;return{formData:{TenLoaiBanDo:(null===(t=this.dataEdit)||void 0===t?void 0:t.TenLoaiBanDo)||"",MaIcon:(null===(a=this.dataEdit)||void 0===a?void 0:a.MaIcon)||"",SoThuTu:(null===(e=this.dataEdit)||void 0===e?void 0:e.SoThuTu)||"",TinhTrang:(null===(o=this.dataEdit)||void 0===o||null===(i=o.TinhTrang)||void 0===i?void 0:i.TenMuc)||""},validForm:!1,optionStatus:[{text:"Hoạt động",value:"01"}],rules:{required:t=>!!t||"Không được để trống."}}},mounted(){console.log("moun")},created(){console.log("cretate",this.dataEdit)},computed:{},methods:{validateForm(){let t=this;return t.$refs.formBanDoRef.validate()}}},c=r,d=e("2877"),u=e("6544"),m=e.n(u),p=e("c6a6"),_=e("62ad"),A=e("4bd4"),h=e("0fd9"),T=e("8654"),g=Object(d["a"])(c,s,l,!1,null,null,null),v=g.exports;m()(g,{VAutocomplete:p["a"],VCol:_["a"],VForm:A["a"],VRow:h["a"],VTextField:T["a"]});var f=e("854a"),N=e.n(f),b=e("3168"),C=e("4624"),I={components:{Pagination:n["a"],FormLoaiBanDoSo:v},mixins:[C["a"]],data(){return{selected:[],textSearch:"",headers:[{sortable:!1,text:"STT",align:"center",value:"stt",width:15},{sortable:!1,text:"Tên loại bản đồ",align:"left",value:"TenLoaiBanDo",class:"th-center",width:120},{sortable:!1,text:"Tình trạng",align:"left",value:"TinhTrang.MaMuc",class:"th-center",width:120},{sortable:!1,text:"Thao tác",align:"left",value:"thaotac",class:"th-center",width:68}],listTypeMap:[],itemsPerPage:20,loadingData:!1,pageCount:1,page:0,edittingForm:!1,dialogForm:!1,readonlyForm:!1,loadingAction:!1,total:1,dataEdit:{},dialogDelete:!1,idTypeMap:"",checkActionAddAndUpdate:"",checkActionDelete:""}},created(){const t=this;t.checkActionAddAndUpdate=t.handleCheckActionAuthor(b["a"].CAP_NHAT_VA_THEM_LOAI_BAN_DO),t.checkActionDelete=t.handleCheckActionAuthor(b["a"].XOA_LOAI_BAN_DO),t.getListTypeMap()},mounted(){console.log("select: ",this.selected)},methods:{getListMapFilter(){const t=this;console.log("tim kiếm"),t.getListTypeMap({TenLoaiBanDo:t.textSearch}),t.textSearch=""},getListTypeMap(t){let a=this;a.loadingData=!0;const e={page:0,size:20,keyword:"",orderFields:"",orderTypes:"",tinhTrang:"",thamChieu_maMuc:""},o={collectionName:"loaibando",data:t?{...e,...t}:e};a.$store.dispatch("collectionFilter",o).then((function(t){a.listTypeMap=t.content,console.log("res: ",a.listTypeMap),a.total=a.listTypeMap.length,a.pageCount=t.totalPages,a.loadingData=!1})).catch((function(){a.loadingData=!1}))},deleteTypeMap(t){const a=this;a.dialogDelete=!1;const e={payload:t.PrimKey,type:"loaibando"};a.$store.commit("SET_SHOWCONFIRM",!0);let o={auth:!1,title:"Xóa tài liệu đính kèm",message:"Bạn có chắc chắn muốn xóa tài liệu này",button:{yes:"Có",no:"Không"},callback:()=>{a.$store.dispatch("deleteItemData",e).then((function(e){N.a.success("Xóa thành công"),a.listTypeMap=a.listTypeMap.reduce((function(a,e){return t.PrimKey!==e.PrimKey&&a.push(e),a}),[]),a.total=a.listTypeMap.length,console.log("res dele: ",e)})).catch((function(){a.loadingData=!1}))}};a.$store.commit("SET_CONFIG_CONFIRM_DIALOG",o)},editTypeMap(t){const a=this;a.edittingForm=!0,console.log("item edit: ",t),a.dataEdit=t,a.dialogForm=!0},handlechangePage(t){const a=this;a.getListTypeMap(t)},showModalForm(){const t=this;t.dialogForm=!0,t.edittingForm=!1},closeModalForm(){const t=this;t.dialogForm=!1,t.dataEdit={}},submitForm(){const t=this;if(t.$refs.formLoaiBanDoRef.validateForm()){const a=t.$refs.formLoaiBanDoRef.formData,e={...a};if(e.TinhTrang={TenMuc:a.TinhTrang,MaMuc:"Hoạt Động"},t.edittingForm){const a={payload:e,type:"loaibando",id:t.dataEdit.PrimKey};t.$store.dispatch("editItemData",a).then((function(a){N.a.success("Cập nhật thành công"),t.dialogForm=!1,t.listTypeMap=t.listTypeMap.reduce((e,o)=>t.dataEdit.PrimKey===o.PrimKey?[...e,{...o,...a.data.resp}]:[...e,o],[]),console.log("res edit: ",a,e,t.dataEdit.PrimKey,t.listTypeMap),t.dataEdit={}})).catch((function(){t.loadingData=!1,N.a.error("Vui lòng kiểm tra lại dữ liệu nhập vào các trường")}))}else{const a={payload:e,type:"loaibando"};t.$store.dispatch("createItemData",a).then((function(a){if(N.a.success("Thêm mới thành công"),t.listTypeMap.length<t.itemsPerPage){const e=[...t.listTypeMap];e.push({...a.data.resp}),t.listTypeMap=e}t.dialogForm=!1,t.total=t.listTypeMap.length,console.log("res post: ",a)})).catch((function(a){t.loadingData=!1}))}console.log("submit",a,e)}}}},M=I,y=e("8336"),D=e("b0af"),L=e("99d9"),B=e("8fea"),E=e("169a"),x=e("132d"),O=e("2fa4"),k=e("71d9"),H=e("2a7f"),F=e("3a2f"),P=Object(d["a"])(M,o,i,!1,null,"616fa7ec",null);a["default"]=P.exports;m()(P,{VBtn:y["a"],VCard:D["a"],VCardActions:L["a"],VCardText:L["b"],VCol:_["a"],VDataTable:B["a"],VDialog:E["a"],VIcon:x["a"],VRow:h["a"],VSpacer:O["a"],VToolbar:k["a"],VToolbarItems:H["a"],VToolbarTitle:H["b"],VTooltip:F["a"]})}}]);