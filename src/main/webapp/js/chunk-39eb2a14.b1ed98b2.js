(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39eb2a14"],{"0108":function(t,a,e){"use strict";e("ba82")},"908f":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",sm:"5"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.textSearch,expression:"textSearch"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nhập tiêu đề tin tức...",autocomplete:"off"},domProps:{value:t.textSearch},on:{input:function(a){a.target.composing||(t.textSearch=a.target.value)}}})]),e("v-col",{attrs:{cols:"12",sm:"1"}},[e("button",{staticClass:"btn btn-search primary",on:{click:function(a){return a.stopPropagation(),t.getListCadresFilter.apply(null,arguments)}}},[e("v-icon",{attrs:{left:"",dark:"",size:"22"}},[t._v("mdi mdi-magnify-minus-outline")])],1)]),e("v-col",{attrs:{cols:"12",sm:"6"}},[e("div",{staticStyle:{float:"right"}},[e("button",{staticClass:"btn btn-add primary",on:{click:function(a){return a.stopPropagation(),t.showModalForm.apply(null,arguments)}}},[e("v-icon",{attrs:{left:"",dark:"",size:"22"}},[t._v("mdi-file-plus")]),t._v(" Thêm mới ")],1)]),e("div",{staticStyle:{float:"right"}},[e("button",{staticClass:"btn btn-add primary",on:{click:function(a){return a.stopPropagation(),t.openDialogDecentralization.apply(null,arguments)}}},[e("v-icon",{attrs:{left:"",dark:"",size:"22"}},[t._v("mdi-file-plus")]),t._v(" Phân quyền ")],1)])])],1),e("v-row",{staticClass:"my-0 mb-3"},[e("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[e("v-data-table",{staticClass:"table-base mt-2",attrs:{headers:t.headers,items:t.listCadres,"items-per-page":t.itemsPerPage,"item-key":"MaSoCanBo","hide-default-footer":"","no-data-text":"Không có dữ liệu",loading:t.loadingData,"loading-text":"Đang tải... ","item-text":"name","show-select":""},scopedSlots:t._u([{key:"item.chon",fn:function(t){t.index}},{key:"item.stt",fn:function(a){var o=a.index;return[e("td",[t._v(t._s(o+1))])]}},{key:"item.thaotac",fn:function(a){var o=a.item;return[t.isAdmin?e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on,i=a.attrs;return[e("v-btn",t._g(t._b({staticClass:"mr-2",attrs:{color:"#2161b1",text:"",icon:""},on:{click:function(a){return a.stopPropagation(),t.editCadres(o)}}},"v-btn",i,!1),n),[e("v-icon",{attrs:{size:"18"}},[t._v("mdi-pencil")])],1)]}}],null,!0)},[e("span",[t._v("Sửa")])]):t._e(),t.isAdmin?e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on,i=a.attrs;return[e("v-btn",t._g(t._b({staticClass:"ml-2",attrs:{color:"red",text:"",icon:""},on:{click:function(a){return a.stopPropagation(),t.openDialogDeleteItem(o)}}},"v-btn",i,!1),n),[e("v-icon",{attrs:{size:"18"}},[t._v("mdi-delete")])],1)]}}],null,!0)},[e("span",[t._v("Xóa")])]):t._e()]}}]),model:{value:t.selected,callback:function(a){t.selected=a},expression:"selected"}}),t.pageCount?e("pagination",{attrs:{pageInput:t.page,total:t.total,pageCount:t.pageCount},on:{"tiny:change-page":t.handlechangePage}}):t._e()],1)],1),t.dialogForm?e("div",[e("v-dialog",{attrs:{"max-width":"1200",persistent:"",fullscreen:""},model:{value:t.dialogForm,callback:function(a){t.dialogForm=a},expression:"dialogForm"}},[e("v-card",[e("v-toolbar",{staticClass:"px-3",attrs:{dark:"",color:"primary"}},[t.edittingForm?e("v-toolbar-title",[t._v("Cập nhật cán bộ")]):t._e(),t.edittingForm?t._e():e("v-toolbar-title",[t._v("Thêm mới cán bộ")]),e("v-spacer"),e("v-toolbar-items",[e("v-btn",{attrs:{icon:"",dark:""},on:{click:t.closeModalForm}},[e("v-icon",[t._v("mdi-close")])],1)],1)],1),e("form-can-bo",{ref:"formCanBoRef",attrs:{dataEdit:t.dataEdit,getListFunctionProps:t.getList},on:{emitDataGroup:t.handleEmitDataGroup}}),e("v-card-text",{staticClass:"px-2 py-2"},[e("v-card-actions",{staticClass:"justify-center my-4"},[e("v-btn",{staticClass:"white--text mr-2",attrs:{small:"",depressed:"",color:"red",loading:t.loadingAction,disabled:t.loadingAction},on:{click:t.closeModalForm}},[e("v-icon",{attrs:{left:""}},[t._v(" mdi-close ")]),t._v(" "+t._s(t.$t("basic.thoat"))+" ")],1),t.readonlyForm?t._e():e("v-btn",{staticClass:"mr-2",attrs:{small:"",depressed:"",color:"primary",loading:t.loadingAction,disabled:t.loadingAction},nativeOn:{click:function(a){return t.submitForm.apply(null,arguments)}}},[e("v-icon",{attrs:{left:"",dark:"",size:"18"}},[t._v(" mdi-file-document-plus-outline ")]),t.edittingForm?e("span",[t._v("Cập nhật")]):e("span",[t._v("Thêm mới")])],1)],1)],1)],1)],1)],1):t._e(),e("v-dialog",{attrs:{persistent:"","max-width":"286"},model:{value:t.dialogDelete,callback:function(a){t.dialogDelete=a},expression:"dialogDelete"}},[e("v-card",[e("v-toolbar",{attrs:{dark:"",color:"primary"}},[e("v-card-title",{staticClass:"text-h7 text-center"},[t._v(" Bạn có muốn xóa không? ")])],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",text:""},on:{click:function(a){t.dialogDelete=!1}}},[t._v(" Từ chối ")]),e("v-btn",{attrs:{color:"primary",text:""},on:{click:t.deleteCadres}},[t._v(" Xác nhận ")])],1)],1)],1),t.dialogDecentralization?e("div",[e("v-dialog",{attrs:{persistent:"","max-width":"860px"},model:{value:t.dialogDecentralization,callback:function(a){t.dialogDecentralization=a},expression:"dialogDecentralization"}},[e("v-card",[e("v-toolbar",{staticClass:"px-3",attrs:{dark:"",color:"primary"}},[e("span",{staticClass:"text-h5"},[t._v("Phân quyền cán bộ")])]),e("v-card-text",[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[e("FormPhanQuyenCanBo",{ref:"formPhanQuyenCanBoRef",attrs:{dataEditCadres:t.dataEditCadres,dataCadres:t.listCadres}})],1)],1)],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{staticClass:"white--text mr-2",attrs:{small:"",depressed:"",color:"red",loading:t.loadingAction,disabled:t.loadingAction},on:{click:function(a){t.dialogDecentralization=!1}}},[e("v-icon",{attrs:{left:""}},[t._v(" mdi-close ")]),t._v(" "+t._s(t.$t("basic.thoat"))+" ")],1),t.readonlyForm?t._e():e("v-btn",{staticClass:"mr-2",attrs:{small:"",depressed:"",color:"primary",loading:t.loadingAction,disabled:t.loadingAction},on:{click:t.handleDecentralization}},[e("v-icon",{attrs:{left:"",dark:"",size:"18"}},[t._v(" mdi-file-document-plus-outline ")]),e("span",[t._v("Phân quyền")])],1)],1)],1)],1)],1):t._e()],1)},n=[],i=(e("13d5"),e("e20e")),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-form",{ref:"formCanBoRef",staticClass:"dialog-body",attrs:{"lazy-validation":""},model:{value:t.validForm,callback:function(a){t.validForm=a},expression:"validForm"}},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12"}},[e("div",{staticClass:"titleText mb-2"},[t._v(" Mã cán bộ: "),e("span",{staticStyle:{color:"red"}},[t._v("*")])]),e("v-text-field",{attrs:{rules:[t.rules.required],solo:"",disabled:!!t.dataEdit.MaSoCanBo,label:"Nhập mã cán bộ...",dense:"","hide-details":"auto",required:""},model:{value:t.formData.MaSoCanBo,callback:function(a){t.$set(t.formData,"MaSoCanBo",a)},expression:"formData.MaSoCanBo"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6"}},[e("div",{staticClass:"titleText mb-2"},[t._v(" Họ và tên: "),e("span",{staticStyle:{color:"red"}},[t._v("*")])]),e("v-text-field",{attrs:{rules:[t.rules.required],solo:"",label:"Nhập tên đầy đủ...",dense:"","hide-details":"auto",required:""},model:{value:t.formData.HoVaTen,callback:function(a){t.$set(t.formData,"HoVaTen",a)},expression:"formData.HoVaTen"}})],1),e("v-col",{attrs:{cols:"12",sm:"6"}},[e("div",{staticClass:"titleText mb-2"},[t._v(" Email VNU: "),e("span",{staticStyle:{color:"red"}},[t._v("*")])]),e("v-text-field",{attrs:{rules:[t.rules.email],solo:"",label:"Nhập email...",dense:"","hide-details":"auto",disabled:!!t.dataEdit.EmailVNU},model:{value:t.formData.EmailVNU,callback:function(a){t.$set(t.formData,"EmailVNU",a)},expression:"formData.EmailVNU"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6"}},[e("div",{staticClass:"titleText mb-2"},[t._v("Ngày sinh:")]),e("v-text-field",{attrs:{rules:[t.rules.birthday],solo:"",label:"Nhập ngày sinh...",dense:"","hide-details":"auto",required:""},model:{value:t.formData.NgaySinh,callback:function(a){t.$set(t.formData,"NgaySinh",a)},expression:"formData.NgaySinh"}})],1),e("v-col",{attrs:{cols:"12",sm:"6"}},[e("div",{staticClass:"titleText mb-2"},[t._v("Giới tính:")]),e("v-select",{attrs:{items:t.optionGender,label:"Chọn",dense:"",solo:""},model:{value:t.formData.GioiTinh,callback:function(a){t.$set(t.formData,"GioiTinh",a)},expression:"formData.GioiTinh"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12"}},[e("div",{staticClass:"titleText mb-2"},[t._v("Địa chỉ:")]),e("v-text-field",{attrs:{solo:"",label:"Nhập địa chỉ...",dense:"","hide-details":"auto"},model:{value:t.formData.DiaChiThuongTru,callback:function(a){t.$set(t.formData,"DiaChiThuongTru",a)},expression:"formData.DiaChiThuongTru"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"4"}},[e("div",{staticClass:"titleText mb-2"},[t._v("Tỉnh/thành:")]),e("v-select",{attrs:{items:t.optionProvince,label:"Chọn",dense:"",solo:""},on:{change:t.handleChangeProvince},model:{value:t.formData.TinhThanh,callback:function(a){t.$set(t.formData,"TinhThanh",a)},expression:"formData.TinhThanh"}})],1),e("v-col",{attrs:{cols:"12",sm:"4"}},[e("div",{staticClass:"titleText mb-2"},[t._v("Quận/huyện:")]),e("v-select",{attrs:{items:t.optionDistrict,label:"Chọn",dense:"",solo:""},on:{change:t.hanldeChangeDistrict},model:{value:t.formData.QuanHuyen,callback:function(a){t.$set(t.formData,"QuanHuyen",a)},expression:"formData.QuanHuyen"}})],1),e("v-col",{attrs:{cols:"12",sm:"4"}},[e("div",{staticClass:"titleText mb-2"},[t._v("Phường/xã:")]),e("v-select",{attrs:{items:t.optionWard,label:"Chọn",dense:"",solo:""},model:{value:t.formData.PhuongXa,callback:function(a){t.$set(t.formData,"PhuongXa",a)},expression:"formData.PhuongXa"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12"}},[e("div",{staticClass:"titleText mb-2"},[t._v("Cơ quan, đơn vị:")]),e("v-select",{attrs:{items:t.optionAgencies,label:"Chọn",dense:"",solo:""},model:{value:t.formData.CoQuanDonVi,callback:function(a){t.$set(t.formData,"CoQuanDonVi",a)},expression:"formData.CoQuanDonVi"}})],1)],1),e("v-row",[t.dataEdit.MaSoCanBo?e("v-col",{attrs:{cols:"12",sm:"6"}},[e("div",{staticClass:"titleText mb-2"},[t._v("Nhóm quyền:")]),e("v-select",{staticClass:"custom-height-select",attrs:{items:t.optionGroups,label:"Chọn nhóm quyền",multiple:"",solo:"",disabled:!!t.dataEdit.MaSoCanBo},model:{value:t.formData.ListQuyenCanBo,callback:function(a){t.$set(t.formData,"ListQuyenCanBo",a)},expression:"formData.ListQuyenCanBo"}})],1):t._e(),e("v-col",{attrs:{cols:"12",sm:t.dataEdit.MaSoCanBo?6:12}},[e("div",{staticClass:"titleText mb-2"},[t._v("Tình trạng công tác:")]),e("v-select",{attrs:{items:t.optionWrok,label:"Chọn",dense:"",solo:""},model:{value:t.formData.TinhTrangCongTac,callback:function(a){t.$set(t.formData,"TinhTrangCongTac",a)},expression:"formData.TinhTrangCongTac"}})],1)],1)],1)},l=[],r=e("2f62"),c=e("c1df"),d=e.n(c),h={props:["dataEdit","getListFunctionProps"],data(){var t;return{formData:{MaSoCanBo:this.dataEdit.MaSoCanBo||"",GioiTinh:this.dataEdit.GioiTinh||"",HoVaTen:this.dataEdit.HoVaTen||"",NgaySinh:this.dataEdit.NgaySinh?d()(this.dataEdit.NgaySinh).format("DD/MM/YYYY"):"",ListQuyenCanBo:null!==(t=this.dataEdit.ListQuyenCanBo)&&void 0!==t&&t.length?this.dataEdit.ListQuyenCanBo.map(t=>t.MaDinhDanh):[],EmailVNU:this.dataEdit.EmailVNU||"",CoQuanDonVi:this.dataEdit.CoQuanDonVi||"",DiaChiThuongTru:this.dataEdit.DiaChiThuongTru||"",TinhThanh:this.dataEdit.TinhThanh||"",QuanHuyen:this.dataEdit.QuanHuyen||"",PhuongXa:this.dataEdit.PhuongXa||"",TinhTrangCongTac:this.dataEdit.TinhTrangCongTac||""},validForm:!1,optionPosition:[],optionDistrict:[],optionWard:[],optionGroups:[],rules:{required:t=>!!t||"Không được để trống.",email:t=>{const a=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return a.test(t)||"Đây không phải là email"},birthday:t=>{const a=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;let e;return e=""===t||(a.test(t)||"Định dạng ngày sinh là: ngày/tháng/năm"),e}}}},mounted(){console.log("moun")},created(){const t=this;t.getGroup(),console.log("cretate",this.dataEdit)},computed:{...Object(r["b"])(["listAgencies","listProvince","listGender","listWork"]),optionGender(){const t=this,a=t.listGender.map(t=>({text:t.tenMuc,value:{maMuc:t.maMuc,tenMuc:t.tenMuc}}));return a},optionWrok(){const t=this,a=t.listWork.map(t=>({text:t.tenMuc,value:{MaMuc:t.maMuc,TenMuc:t.tenMuc}}));return a},optionAgencies(){const t=this,a=t.listAgencies.map(t=>({text:t.tenGoi,value:{MaHanhChinh:t.MaDinhDanh,TenGoi:t.tenGoi}}));return a},optionProvince(){const t=this,a=t.listProvince.map(t=>({text:t.tenMuc,value:t.PrimKey}));return a}},methods:{getGroup(){let t=this;const a={page:0,size:20,keyword:"",orderFields:"",orderTypes:"",tinhTrang:"1",thamChieu_maMuc:""},e={collectionName:"nhomquyen",data:a};t.$store.dispatch("collectionFilter",e).then((function(a){const e=a.content;t.$emit("emitDataGroup",e),t.optionGroups=e.map(t=>({text:t.TenNhomQuyen,value:t.MaDinhDanh}))}))},validateForm(){let t=this;return console.log("form: ",t.$refs.formCanBoRef),t.$refs.formCanBoRef.validate()},handleChangeProvince(t){const a=this;a.optionDistrict=[],a.optionWard=[];const e=a.listProvince.filter(a=>a.PrimKey===t)[0].maMuc;if(e){let t={collectionName:"quanhuyen",data:{page:0,size:20,keyword:"",orderFields:"",orderTypes:"",thamChieu_maMuc:e,tinhTrang:"1"}};a.$store.dispatch("collectionFilter",t).then((function(t){const e=t.content;a.optionDistrict=e.map(t=>({text:t.tenMuc,value:t.PrimKey,districtCode:t.maMuc}))})).catch((function(){}))}},hanldeChangeDistrict(t){const a=this;console.log("dis",a.optionDistrict);const e=a.optionDistrict.filter(a=>a.value===t)[0].districtCode;if(e){let t={collectionName:"phuongxa",data:{page:0,size:20,keyword:"",orderFields:"",orderTypes:"",thamChieu_maMuc:e,tinhTrang:"1"}};a.$store.dispatch("collectionFilter",t).then((function(t){const e=t.content;a.optionWard=e.map(t=>({text:t.tenMuc,value:t.PrimKey}))})).catch((function(){}))}}}},u=h,m=(e("0108"),e("2877")),p=e("6544"),g=e.n(p),v=e("62ad"),f=e("4bd4"),C=e("0fd9"),D=e("b974"),y=e("8654"),b=Object(m["a"])(u,s,l,!1,null,null,null),T=b.exports;g()(b,{VCol:v["a"],VForm:f["a"],VRow:C["a"],VSelect:D["a"],VTextField:y["a"]});var x=e("854a"),_=e.n(x),k=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-form",{ref:"formPhanNhomQuyenRef",staticClass:"dialog-body",attrs:{"lazy-validation":""},model:{value:t.validForm,callback:function(a){t.validForm=a},expression:"validForm"}},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12"}},[e("div",{staticClass:"titleText mb-2"},[t._v(" Cán bộ: "),e("span",{staticStyle:{color:"red"}},[t._v("*")])]),e("v-select",{attrs:{items:t.listCadres,label:"Chọn cán bộ",chips:"",multiple:"",solo:""},model:{value:t.formData.canbo,callback:function(a){t.$set(t.formData,"canbo",a)},expression:"formData.canbo"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"12"}},[e("div",{staticClass:"titleText mb-2"},[t._v(" Nhóm quyền: "),e("span",{staticStyle:{color:"red"}},[t._v("*")])]),e("v-select",{attrs:{items:t.listGroup,chips:"",label:"Chọn nhóm quyền",multiple:"",solo:""},model:{value:t.formData.TenNhomQuyen,callback:function(a){t.$set(t.formData,"TenNhomQuyen",a)},expression:"formData.TenNhomQuyen"}})],1)],1)],1)},M=[],P={props:["dataCadres","dataEditCadres"],data(){return{formData:{canbo:this.dataEditCadres||[],TenNhomQuyen:[]},listGroup:[],listCadres:[],validForm:!1,rules:{required:t=>!!t||"Không được để trống."}}},mounted(){console.log("moun")},created(){const t=this;t.listCadres=t.dataCadres.map(t=>({text:t.HoVaTen,value:t.MaDinhDanh})),t.getGroup(),console.log("props: ",t.dataEditCadres)},methods:{validateForm(){let t=this;return t.$refs.formPhanNhomQuyenRef.validate()},getGroup(){let t=this;const a={page:0,size:20,keyword:"",orderFields:"",orderTypes:"",tinhTrang:"1",thamChieu_maMuc:""},e={collectionName:"nhomquyen",data:a};t.$store.dispatch("collectionFilter",e).then((function(a){const e=a.content;t.listGroup=e.map(t=>({text:t.TenNhomQuyen,value:t.MaDinhDanh}))}))}}},F=P,V=Object(m["a"])(F,k,M,!1,null,"22ae34f0",null),Q=V.exports;g()(V,{VCol:v["a"],VForm:f["a"],VRow:C["a"],VSelect:D["a"]});var E={components:{Pagination:i["a"],FormPhanQuyenCanBo:Q,"form-can-bo":T},data(){return{selected:[],textSearch:"",headers:[{sortable:!1,text:"STT",align:"center",value:"stt",width:15},{sortable:!1,text:"Mã cán bộ",align:"left",value:"MaSoCanBo",class:"th-center",width:120},{sortable:!1,text:"Họ tên",align:"left",value:"HoVaTen",class:"th-center",width:120},{sortable:!1,text:"Tên nhóm quyền",align:"left",value:"tenNhomQuyen",class:"th-center",width:120},{sortable:!1,text:"Thao tác",align:"left",value:"thaotac",class:"th-center",width:68}],listCadres:[],itemsPerPage:20,loadingData:!1,pageCount:1,page:0,edittingForm:!1,dialogForm:!1,readonlyForm:!1,loadingAction:!1,total:1,dataEdit:{},dialogDelete:!1,idCadres:"",dialogDecentralization:!1,dataEditCadres:[],emitDataGroup:[]}},created(){const t=this;t.getListCadres(),t.getList("listAgencies","coquandonvi"),t.getList("listPosition","vitrichucdanh",{keyword:"",page:0,size:100,orderFields:"tenGoi",orderTypes:"asc",coQuanDonVi_maDinhDanh:"s"}),t.getList("listWork","tinhtrangcongtac",{keyword:"",page:0,size:100,orderFields:"maMuc",orderTypes:"asc",tinhTrang:1,thamChieu_maMuc:""}),t.getList("listProvince","tinhthanh",{tinhTrang:"1"}),t.getList("listGender","gioitinh",{tinhTrang:"1"})},mounted(){console.log("select: ",this.selected)},methods:{getListCadresFilter(){const t=this;console.log("tim kiếm"),t.getListCadres({keyword:t.textSearch}),t.textSearch=""},getList(t,a,e){let o=this;const n={page:0,size:20,keyword:"",orderFields:"",orderTypes:"",tinhTrang:"",thamChieu_maMuc:""};let i={collectionName:a,state:t,data:e?{...n,...e}:n};o.$store.dispatch("collectionFilterInstore",i).then((function(t){console.log("res: ",t)})).catch((function(){console.log("Error")}))},getListCadres(t){let a=this;a.loadingData=!0;const e={page:0,size:20,keyword:"",orderFields:"",orderTypes:"",tinhTrang:"",thamChieu_maMuc:""},o={collectionName:"canbo",data:t?{...e,...t}:e};a.$store.dispatch("collectionFilter",o).then((function(t){a.listCadres=t.content.map(t=>({...t,tenNhomQuyen:t.ListQuyenCanBo.map(t=>t.TenNhomQuyen).join(", ")})),console.log("res: ",a.listCadres),a.total=a.listCadres.length,a.pageCount=t.totalPages,a.loadingData=!1})).catch((function(){a.loadingData=!1}))},openDialogDeleteItem(t){const a=this;console.log("id delete: ",t.PrimKey),a.dialogDelete=!0,a.idCadres=t.PrimKey},deleteCadres(){const t=this;t.dialogDelete=!1;const a={payload:t.idCadres,type:"canbo"};t.$store.dispatch("deleteItemData",a).then((function(a){_.a.success("Xóa thành công"),t.listCadres=t.listCadres.reduce((function(a,e){return t.idCadres!==e.PrimKey&&a.push(e),a}),[]),t.total=t.listCadres.length,console.log("res dele: ",a)})).catch((function(){t.loadingData=!1}))},editCadres(t){const a=this,e={...t,CoQuanDonVi:{MaHanhChinh:t.CoQuanDonVi.MaHanhChinh,TenGoi:t.CoQuanDonVi.TenGoi}};a.edittingForm=!0,console.log("item edit: ",t),a.dataEdit=e,a.dialogForm=!0},handlechangePage(t){const a=this;a.getListCadres(t)},showModalForm(){const t=this;t.dialogForm=!0,t.edittingForm=!1},closeModalForm(){const t=this;t.dialogForm=!1,t.dataEdit={}},openDialogDecentralization(){const t=this;t.dialogDecentralization=!0,t.dataEditCadres=t.selected.map(t=>t.MaDinhDanh)},handleDecentralization(){const t=this;if(console.log("handleCkick: ",t.selected),t.$refs.formPhanQuyenCanBoRef.validateForm()){const a=t.$refs.formPhanQuyenCanBoRef.formData,e=t.listCadres.reduce((t,e)=>a.canbo.includes(e.MaDinhDanh)?[...t,{IdCanBo:e.PrimKey,PhanQuyenCanBo:a.TenNhomQuyen.map(t=>({MaDinhDanhNhomQuyen:t,MaDinhDanhCanBo:e.MaDinhDanh}))}]:t,[]),o={payload:e,type:"canbo/many"};t.$store.dispatch("createItemData",o).then((function(a){_.a.success("Phân quyền thành công"),t.dialogDecentralization=!1,t.selected=[],t.getListCadres(),console.log("res post: ",a)})).catch((function(){t.loadingData=!1})),console.log("submit",a,e)}},handleEmitDataGroup(t){const a=this;a.emitDataGroup=t},submitForm(){const t=this;if(t.$refs.formCanBoRef.validateForm()){const a=t.$refs.formCanBoRef.formData,e={...a,MaSoCanBo:a.MaSoCanBo.replace(/ +/g,""),NgaySinh:d.a.utc(a.NgaySinh,"DD/MM/YYYY").format(),PhanQuyenCanBo:[],CoQuanDonVi:a.CoQuanDonVi,GioiTinh:a.GioiTinh,TinhTrangCongTac:{...a.TinhTrangCongTac,TinhTrangCongTac:a.TinhTrangCongTac,CoQuanDonVi:a.CoQuanDonVi,ViTriChucDanh:[{MaDinhDanh:"",TenGoi:""}]}};if(delete e.TinhThanh,delete e.QuanHuyen,delete e.PhuongXa,delete e.ListQuyenCanBo,delete e.DiaChiThuongTru,e.PhanQuyenCanBo=t.emitDataGroup.reduce((t,e)=>a.ListQuyenCanBo.includes(e.MaDinhDanh)?[...t,{MaDinhDanhNhomQuyen:e.MaDinhDanh}]:t,[]),t.edittingForm){const a={payload:e,type:"canbo",id:t.dataEdit.PrimKey};t.$store.dispatch("editItemData",a).then((function(a){_.a.success("Cập nhật thành công"),t.dialogForm=!1,t.listCadres=t.listCadres.reduce((function(o,n){return t.dataEdit.PrimKey===n.PrimKey?[...o,{...n,...e,tenNhomQuyen:a.data.resp.ListQuyenCanBo.map(t=>t.TenNhomQuyen).join(", "),ListQuyenCanBo:a.data.resp.ListQuyenCanBo}]:[...o,n]}),[]),console.log("res edit: ",a,e,t.dataEdit.PrimKey,t.listCadres),t.dataEdit={}})).catch((function(){t.loadingData=!1,_.a.error("Vui lòng kiểm tra lại dữ liệu nhập vào các trường")}))}else{const a={payload:e,type:"canbo"};t.$store.dispatch("createItemData",a).then((function(a){if(_.a.success("Thêm mới thành công"),t.listCadres.length<t.itemsPerPage){const o=[...t.listCadres];o.push({...e,MaDinhDanh:a.data.resp.MaDinhDanh,PrimKey:a.data.resp.PrimKey}),t.listCadres=o}t.dialogForm=!1,t.total=t.listCadres.length,console.log("res post: ",a)})).catch((function(a){"canbo.masocanbo_or_emailVNU_conflict"===a.data.messageCode?_.a.error("Trùng mã cán bộ hoặc emailVNU"):_.a.error("Vui lòng kiểm tra lại dữ liệu nhập vào các trường"),t.loadingData=!1}))}console.log("submit",a)}}}},N=E,S=e("8336"),w=e("b0af"),B=e("99d9"),$=e("a523"),G=e("8fea"),z=e("169a"),L=e("132d"),q=e("2fa4"),A=e("71d9"),H=e("2a7f"),K=e("3a2f"),R=Object(m["a"])(N,o,n,!1,null,"69ea54f8",null);a["default"]=R.exports;g()(R,{VBtn:S["a"],VCard:w["a"],VCardActions:B["a"],VCardText:B["b"],VCardTitle:B["c"],VCol:v["a"],VContainer:$["a"],VDataTable:G["a"],VDialog:z["a"],VIcon:L["a"],VRow:C["a"],VSpacer:q["a"],VToolbar:A["a"],VToolbarItems:H["a"],VToolbarTitle:H["b"],VTooltip:K["a"]})},a523:function(t,a,e){"use strict";e("20f6"),e("4b85");var o=e("e8f2"),n=e("d9f7");a["a"]=Object(o["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:a,data:e,children:o}){let i;const{attrs:s}=e;return s&&(e.attrs={},i=Object.keys(s).filter(t=>{if("slot"===t)return!1;const a=s[t];return t.startsWith("data-")?(e.attrs[t]=a,!1):a||"string"===typeof a})),a.id&&(e.domProps=e.domProps||{},e.domProps.id=a.id),t(a.tag,Object(n["a"])(e,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(i||[])}),o)}})},ba82:function(t,a,e){}}]);