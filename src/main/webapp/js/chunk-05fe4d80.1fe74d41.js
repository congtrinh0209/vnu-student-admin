(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05fe4d80"],{"41cc":function(t,e,a){},a523:function(t,e,a){"use strict";a("20f6"),a("4b85");var n=a("e8f2"),o=a("d9f7");e["a"]=Object(n["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:a,children:n}){let i;const{attrs:s}=a;return s&&(a.attrs={},i=Object.keys(s).filter(t=>{if("slot"===t)return!1;const e=s[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(a.domProps=a.domProps||{},a.domProps.id=e.id),t(e.tag,Object(o["a"])(a,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(i||[])}),n)}})},dc4c:function(t,e,a){"use strict";a("41cc")},f0b4:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",sm:"5"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.textSearch,expression:"textSearch"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nhập tiêu đề tin tức...",autocomplete:"off"},domProps:{value:t.textSearch},on:{input:function(e){e.target.composing||(t.textSearch=e.target.value)}}})]),a("v-col",{attrs:{cols:"12",sm:"1"}},[a("button",{staticClass:"btn btn-search primary",on:{click:function(e){return e.stopPropagation(),t.getListMenuFilter.apply(null,arguments)}}},[a("v-icon",{attrs:{left:"",dark:"",size:"22"}},[t._v("mdi mdi-magnify-minus-outline")])],1)]),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticStyle:{float:"right"}},[a("button",{staticClass:"btn btn-add primary",on:{click:function(e){return e.stopPropagation(),t.showModalForm.apply(null,arguments)}}},[a("v-icon",{attrs:{left:"",dark:"",size:"22"}},[t._v("mdi-file-plus")]),t._v(" Thêm mới ")],1)]),a("div",{staticStyle:{float:"right"}},[a("button",{staticClass:"btn btn-add primary",on:{click:function(e){return e.stopPropagation(),t.openDialogDecentralization.apply(null,arguments)}}},[a("v-icon",{attrs:{left:"",dark:"",size:"22"}},[t._v("mdi-file-plus")]),t._v(" Phân quyền ")],1)])])],1),a("v-row",{staticClass:"my-0 mb-3"},[a("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[a("v-data-table",{staticClass:"table-base mt-2",attrs:{headers:t.headers,items:t.listMenu,"items-per-page":t.itemsPerPage,"item-key":"MaMenu","hide-default-footer":"","no-data-text":"Không có dữ liệu",loading:t.loadingData,"loading-text":"Đang tải... ","item-text":"name","show-select":""},scopedSlots:t._u([{key:"item.chon",fn:function(t){t.index}},{key:"item.stt",fn:function(e){var n=e.index;return[a("td",[t._v(t._s(n+1))])]}},{key:"item.LoaiMenu",fn:function(e){var n=e.item;e.index;return[a("td",[t._v(t._s("1"===n.LoaiMenu?"Mobile":"Web"))])]}},{key:"item.thaotac",fn:function(e){var n=e.item;return[t.isAdmin?a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"mr-2",attrs:{color:"#2161b1",text:"",icon:""},on:{click:function(e){return e.stopPropagation(),t.editMenu(n)}}},"v-btn",i,!1),o),[a("v-icon",{attrs:{size:"18"}},[t._v("mdi-pencil")])],1)]}}],null,!0)},[a("span",[t._v("Sửa")])]):t._e(),t.isAdmin?a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"ml-2",attrs:{color:"red",text:"",icon:""},on:{click:function(e){return e.stopPropagation(),t.openDialogDeleteItem(n)}}},"v-btn",i,!1),o),[a("v-icon",{attrs:{size:"18"}},[t._v("mdi-delete")])],1)]}}],null,!0)},[a("span",[t._v("Xóa")])]):t._e()]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t.pageCount?a("pagination",{attrs:{pageInput:t.page,total:t.total,pageCount:t.pageCount},on:{"tiny:change-page":t.handlechangePage}}):t._e()],1)],1),t.dialogForm?a("div",[a("v-dialog",{attrs:{"max-width":"1200",persistent:"",fullscreen:""},model:{value:t.dialogForm,callback:function(e){t.dialogForm=e},expression:"dialogForm"}},[a("v-card",[a("v-toolbar",{staticClass:"px-3",attrs:{dark:"",color:"primary"}},[t.edittingForm?a("v-toolbar-title",[t._v("Cập nhật menu")]):t._e(),t.edittingForm?t._e():a("v-toolbar-title",[t._v("Thêm mới menu")]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{icon:"",dark:""},on:{click:t.closeModalForm}},[a("v-icon",[t._v("mdi-close")])],1)],1)],1),a("FormMenu",{ref:"formMenuRef",attrs:{dataEdit:t.dataEdit,listMenu:t.listMenu},on:{emitDataGroup:t.handleEmitDataGroup}}),a("v-card-text",{staticClass:"px-2 py-2"},[a("v-card-actions",{staticClass:"justify-center my-4"},[a("v-btn",{staticClass:"white--text mr-2",attrs:{small:"",depressed:"",color:"red",loading:t.loadingAction,disabled:t.loadingAction},on:{click:t.closeModalForm}},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-close ")]),t._v(" "+t._s(t.$t("basic.thoat"))+" ")],1),t.readonlyForm?t._e():a("v-btn",{staticClass:"mr-2",attrs:{small:"",depressed:"",color:"primary",loading:t.loadingAction,disabled:t.loadingAction},nativeOn:{click:function(e){return t.submitForm.apply(null,arguments)}}},[a("v-icon",{attrs:{left:"",dark:"",size:"18"}},[t._v(" mdi-file-document-plus-outline ")]),t.edittingForm?a("span",[t._v("Cập nhật")]):a("span",[t._v("Thêm mới")])],1)],1)],1)],1)],1)],1):t._e(),a("v-dialog",{attrs:{persistent:"","max-width":"286"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-card-title",{staticClass:"text-h7 text-center"},[t._v(" Bạn có muốn xóa không? ")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialogDelete=!1}}},[t._v(" Từ chối ")]),a("v-btn",{attrs:{color:"primary",text:""},on:{click:t.deleteMenu}},[t._v(" Xác nhận ")])],1)],1)],1),t.dialogMenu?a("div",[a("v-dialog",{attrs:{persistent:"","max-width":"860px"},model:{value:t.dialogMenu,callback:function(e){t.dialogMenu=e},expression:"dialogMenu"}},[a("v-card",[a("v-toolbar",{staticClass:"px-3",attrs:{dark:"",color:"primary"}},[a("span",{staticClass:"text-h5"},[t._v("Phân quyền menu")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("FormPhanQuyenMenu",{ref:"formPhanQuyenMenuRef",attrs:{dataMenu:t.listMenu,dataSelectEditMenu:t.dataSelectEditMenu}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"white--text mr-2",attrs:{small:"",depressed:"",color:"red",loading:t.loadingAction,disabled:t.loadingAction},on:{click:function(e){t.dialogMenu=!1}}},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-close ")]),t._v(" "+t._s(t.$t("basic.thoat"))+" ")],1),t.readonlyForm?t._e():a("v-btn",{staticClass:"mr-2",attrs:{small:"",depressed:"",color:"primary",loading:t.loadingAction,disabled:t.loadingAction},on:{click:t.handleDecentralization}},[a("v-icon",{attrs:{left:"",dark:"",size:"18"}},[t._v(" mdi-file-document-plus-outline ")]),a("span",[t._v("Phân quyền")])],1)],1)],1)],1)],1):t._e()],1)},o=[],i=(a("13d5"),a("e20e")),s=a("854a"),l=a.n(s),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",{ref:"formMenuRef",staticClass:"dialog-body",attrs:{"lazy-validation":""},model:{value:t.validForm,callback:function(e){t.validForm=e},expression:"validForm"}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("div",{staticClass:"titleText mb-2"},[t._v(" Mã menu: "),a("span",{staticStyle:{color:"red"}},[t._v("*")])]),a("v-text-field",{attrs:{rules:[t.rules.required],solo:"",disabled:!!t.dataEdit.MaMenu,label:"Nhập mã menu...",dense:"","hide-details":"auto",required:""},model:{value:t.formData.MaMenu,callback:function(e){t.$set(t.formData,"MaMenu",e)},expression:"formData.MaMenu"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"titleText mb-2"},[t._v(" Tên menu: "),a("span",{staticStyle:{color:"red"}},[t._v("*")])]),a("v-text-field",{attrs:{rules:[t.rules.required],solo:"",label:"Nhập tên đầy đủ...",dense:"","hide-details":"auto",required:""},model:{value:t.formData.TenMenu,callback:function(e){t.$set(t.formData,"TenMenu",e)},expression:"formData.TenMenu"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"titleText mb-2"},[t._v("Mã icon:")]),a("v-text-field",{attrs:{solo:"",label:"Nhập mã icon...",dense:"","hide-details":"auto"},model:{value:t.formData.MaIcon,callback:function(e){t.$set(t.formData,"MaIcon",e)},expression:"formData.MaIcon"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("div",{staticClass:"titleText mb-2"},[t._v(" Đường dẫn: "),a("span",{staticStyle:{color:"red"}},[t._v("*")])]),a("v-text-field",{attrs:{rules:[t.rules.required],solo:"",label:"Nhập đường dẫn...",dense:"","hide-details":"auto",required:""},model:{value:t.formData.DuongDan,callback:function(e){t.$set(t.formData,"DuongDan",e)},expression:"formData.DuongDan"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"titleText mb-2"},[t._v("Tên tiếng anh:")]),a("v-text-field",{attrs:{solo:"",label:"Nhập tên tiếng anh...",dense:"","hide-details":"auto"},model:{value:t.formData.TenTiengAnh,callback:function(e){t.$set(t.formData,"TenTiengAnh",e)},expression:"formData.TenTiengAnh"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"titleText mb-2"},[t._v("Số thứ tự: "),a("span",{staticStyle:{color:"red"}},[t._v("*")])]),a("v-text-field",{attrs:{rules:[t.rules.number],solo:"",label:"Nhập số thứ tự...",dense:"","hide-details":"auto"},model:{value:t.formData.SoThuTu,callback:function(e){t.$set(t.formData,"SoThuTu",e)},expression:"formData.SoThuTu"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"titleText mb-2"},[t._v("Menu cha:")]),a("v-select",{attrs:{items:t.getListMenu,label:"Chọn",dense:"",solo:""},model:{value:t.formData.MaMenuCha,callback:function(e){t.$set(t.formData,"MaMenuCha",e)},expression:"formData.MaMenuCha"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"titleText mb-2"},[t._v("Tình trạng:")]),a("v-select",{attrs:{items:t.optionStatus,label:"Chọn",dense:"",solo:""},model:{value:t.formData.TinhTrang,callback:function(e){t.$set(t.formData,"TinhTrang",e)},expression:"formData.TinhTrang"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"titleText mb-2"},[t._v("Nhóm quyền:")]),a("v-select",{staticClass:"custom-height-select",attrs:{items:t.optionGroups,label:"Chọn",dense:"",solo:"",multiple:""},model:{value:t.formData.PhanQuyenMenu,callback:function(e){t.$set(t.formData,"PhanQuyenMenu",e)},expression:"formData.PhanQuyenMenu"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"titleText mb-2"},[t._v("Loại menu:")]),a("v-select",{staticClass:"custom-height-select",attrs:{items:t.optionType,label:"Chọn",dense:"",solo:""},model:{value:t.formData.LoaiMenu,callback:function(e){t.$set(t.formData,"LoaiMenu",e)},expression:"formData.LoaiMenu"}})],1)],1)],1)},c=[],u={props:["dataEdit","listMenu"],data(){var t;return{formData:{MaMenuCha:this.dataEdit.MaMenuCha||"",MaMenu:this.dataEdit.MaMenu||"",TinhTrang:this.dataEdit.TinhTrang||"2",LoaiMenu:this.dataEdit.LoaiMenu||"",TenMenu:this.dataEdit.TenMenu||"",DuongDan:this.dataEdit.DuongDan||"",TenTiengAnh:this.dataEdit.TenTiengAnh||"",MaIcon:this.dataEdit.MaIcon||"",SoThuTu:this.dataEdit.SoThuTu||"",PhanQuyenMenu:null!==(t=this.dataEdit.ListQuyenMenu)&&void 0!==t&&t.length?this.dataEdit.ListQuyenMenu.map(t=>t.MaDinhDanh):[]},validForm:!1,optionStatus:[{text:"Hoạt động",value:"2"},{text:"Không hoạt động",value:"1"}],optionGroups:[],optionType:[{text:"Web",value:"0"},{text:"Mobile",value:"1"}],rules:{required:t=>!!t||"Không được để trống.",birthday:t=>{const e=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;return e.test(t)||"Định dạng ngày sinh là: ngày/tháng/năm"},number:t=>{const e=/^(?:[1-9]\d*|\d)$/;return e.test(t)||"Trường này phải nhập số"}}}},mounted(){console.log("moun")},created(){const t=this;t.getGroup(),console.log("cretate",this.dataEdit,this.listMenu)},methods:{getGroup(){let t=this;const e={page:0,size:20,keyword:"",orderFields:"",orderTypes:"",tinhTrang:"1",thamChieu_maMuc:""},a={collectionName:"nhomquyen",data:e};t.$store.dispatch("collectionFilter",a).then((function(e){const a=e.content;t.$emit("emitDataGroup",a),t.optionGroups=a.map(t=>({text:t.TenNhomQuyen,value:t.MaDinhDanh}))}))},validateForm(){let t=this;return t.$refs.formMenuRef.validate()}},computed:{getListMenu(){var t;const e=this;let a=[];return a=null!==(t=e.dataEdit)&&void 0!==t&&t.PrimKey?e.listMenu.reduce((function(t,a){var n;return(null===(n=e.dataEdit)||void 0===n?void 0:n.PrimKey)!==a.PrimKey&&t.push({text:a.TenMenu,value:a.MaMenu}),t}),[]):e.listMenu.map(t=>({text:t.TenMenu,value:t.MaMenu})),a}}},d=u,m=(a("dc4c"),a("2877")),h=a("6544"),v=a.n(h),p=a("62ad"),g=a("4bd4"),f=a("0fd9"),M=a("b974"),y=a("8654"),b=Object(m["a"])(d,r,c,!1,null,null,null),D=b.exports;v()(b,{VCol:p["a"],VForm:g["a"],VRow:f["a"],VSelect:M["a"],VTextField:y["a"]});var T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",{ref:"formPhanNhomQuyenRef",staticClass:"dialog-body",attrs:{"lazy-validation":""},model:{value:t.validForm,callback:function(e){t.validForm=e},expression:"validForm"}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("div",{staticClass:"titleText mb-2"},[t._v(" Menu: "),a("span",{staticStyle:{color:"red"}},[t._v("*")])]),a("v-select",{attrs:{items:t.listMenu,label:"Chọn Menu",chips:"",multiple:"",solo:""},model:{value:t.formData.menu,callback:function(e){t.$set(t.formData,"menu",e)},expression:"formData.menu"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("div",{staticClass:"titleText mb-2"},[t._v(" Nhóm quyền: "),a("span",{staticStyle:{color:"red"}},[t._v("*")])]),a("v-select",{attrs:{items:t.listGroup,chips:"",label:"Chọn nhóm quyền",multiple:"",solo:""},model:{value:t.formData.TenNhomQuyen,callback:function(e){t.$set(t.formData,"TenNhomQuyen",e)},expression:"formData.TenNhomQuyen"}})],1)],1)],1)},x=[],_={props:["dataMenu","dataSelectEditMenu"],data(){return{formData:{menu:this.dataSelectEditMenu||[],TenNhomQuyen:[]},listGroup:[],listMenu:[],validForm:!1,rules:{required:t=>!!t||"Không được để trống."}}},mounted(){console.log("moun")},created(){const t=this;t.listMenu=t.dataMenu.map(t=>({text:t.TenMenu,value:t.MaDinhDanh})),t.getGroup(),console.log("props: ",t.dataSelectEditMenu)},methods:{validateForm(){let t=this;return t.$refs.formPhanNhomQuyenRef.validate()},getGroup(){let t=this;const e={page:0,size:20,keyword:"",orderFields:"",orderTypes:"",tinhTrang:"1",thamChieu_maMuc:""},a={collectionName:"nhomquyen",data:e};t.$store.dispatch("collectionFilter",a).then((function(e){const a=e.content;t.listGroup=a.map(t=>({text:t.TenNhomQuyen,value:t.MaDinhDanh}))}))}}},C=_,k=Object(m["a"])(C,T,x,!1,null,"da04e1ba",null),F=k.exports;v()(k,{VCol:p["a"],VForm:g["a"],VRow:f["a"],VSelect:M["a"]});var P={components:{Pagination:i["a"],FormMenu:D,FormPhanQuyenMenu:F},data(){return{selected:[],textSearch:"",headers:[{sortable:!1,text:"STT",align:"center",value:"stt",width:15},{sortable:!1,text:"Mã menu",align:"left",value:"MaMenu",class:"th-center",width:120},{sortable:!1,text:"Tên menu",align:"left",value:"TenMenu",class:"th-center",width:120},{sortable:!1,text:"Tên nhóm quyền",align:"left",value:"tenNhomQuyen",class:"th-center",width:120},{sortable:!1,text:"Loại menu",align:"left",value:"LoaiMenu",class:"th-center",width:120},{sortable:!1,text:"Thao tác",align:"left",value:"thaotac",class:"th-center",width:68}],listMenu:[],itemsPerPage:20,loadingData:!1,pageCount:1,page:0,edittingForm:!1,dialogForm:!1,readonlyForm:!1,loadingAction:!1,total:1,dataEdit:{},dialogDelete:!1,idMenu:"",dialogMenu:!1,dataSelectEditMenu:[],emitDataGroup:[]}},created(){const t=this;t.getListMenu()},mounted(){console.log("mom: ")},methods:{getListMenuFilter(){const t=this;console.log("tim kiếm"),t.getListMenu({keyword:t.textSearch}),t.textSearch=""},getListMenu(t){let e=this;e.loadingData=!0;const a={page:0,size:20,keyword:"",orderFields:"",orderTypes:"",tinhTrang:"",thamChieu_maMuc:""},n={collectionName:"menu",data:t?{...a,...t}:a};e.$store.dispatch("collectionFilter",n).then((function(t){e.listMenu=t.content.map(t=>({...t,tenNhomQuyen:t.ListQuyenMenu.map(t=>t.TenNhomQuyen).join(", ")})),console.log("res: ",e.listMenu),e.total=e.listMenu.length,e.pageCount=t.totalPages,e.loadingData=!1})).catch((function(){e.loadingData=!1}))},openDialogDeleteItem(t){const e=this;console.log("id delete: ",t.PrimKey),e.dialogDelete=!0,e.idMenu=t.PrimKey},deleteMenu(){const t=this;t.dialogDelete=!1;const e={payload:t.idMenu,type:"menu"};t.$store.dispatch("deleteItemData",e).then((function(e){l.a.success("Xóa thành công"),t.listMenu=t.listMenu.reduce((function(e,a){return t.idMenu!==a.PrimKey&&e.push(a),e}),[]),t.total=t.listMenu.length,console.log("res dele: ",e)})).catch((function(){t.loadingData=!1}))},editMenu(t){const e=this,a={...t};e.edittingForm=!0,console.log("item edit: ",t),e.dataEdit=a,e.dialogForm=!0},handlechangePage(t){const e=this;e.getListCadres(t)},showModalForm(){const t=this;t.dialogForm=!0,t.edittingForm=!1},closeModalForm(){const t=this;t.dialogForm=!1,t.dataEdit={}},openDialogDecentralization(){const t=this;t.dialogMenu=!0,t.dataSelectEditMenu=t.selected.map(t=>t.MaDinhDanh)},handleDecentralization(){const t=this;if(console.log("handleCkick: ",t.selected),t.$refs.formPhanQuyenMenuRef.validateForm()){const e=t.$refs.formPhanQuyenMenuRef.formData,a=t.listMenu.reduce((t,a)=>e.menu.includes(a.MaDinhDanh)?[...t,{IdMenu:a.PrimKey,PhanQuyenMenu:e.TenNhomQuyen.map(t=>({MaDinhDanhNhomQuyen:t}))}]:t,[]),n={payload:a,type:"menu/many"};t.$store.dispatch("createItemData",n).then((function(e){l.a.success("Phân quyền thành công"),t.dialogMenu=!1,t.selected=[],t.getListMenu(),console.log("res post: ",e)})).catch((function(){t.loadingData=!1})),console.log("submit",e,a,e.menu)}},handleEmitDataGroup(t){const e=this;e.emitDataGroup=t},submitForm(){const t=this;if(t.$refs.formMenuRef.validateForm()){const e=t.$refs.formMenuRef.formData;if(e.PhanQuyenMenu=t.emitDataGroup.reduce((t,a)=>e.PhanQuyenMenu.includes(a.MaDinhDanh)?[...t,{MaDinhDanhNhomQuyen:a.MaDinhDanh}]:t,[]),e.MaMenu=e.MaMenu.replace(/ +/g,""),t.edittingForm){const a={payload:e,type:"menu",id:t.dataEdit.PrimKey};t.$store.dispatch("editItemData",a).then((function(a){l.a.success("Cập nhật thành công"),t.dialogForm=!1,t.listMenu=t.listMenu.reduce((function(n,o){return t.dataEdit.PrimKey===o.PrimKey?[...n,{...o,...e,tenNhomQuyen:a.data.resp.ListQuyenMenu.map(t=>t.TenNhomQuyen).join(", "),ListQuyenMenu:a.data.resp.ListQuyenMenu}]:[...n,o]}),[]),console.log("res edit: ",a,t.dataEdit.PrimKey,t.listMenu),t.dataEdit={}})).catch((function(){t.loadingData=!1,l.a.error("Vui lòng kiểm tra lại dữ liệu nhập vào các trường")}))}else{const a={payload:e,type:"menu"};t.$store.dispatch("createItemData",a).then((function(a){if(l.a.success("Thêm mới thành công"),t.listMenu.length<t.itemsPerPage){const n=[...t.listMenu];n.push({...e,PrimKey:a.data.resp.PrimKey,tenNhomQuyen:a.data.resp.ListQuyenMenu.map(t=>t.TenNhomQuyen).join(", "),ListQuyenMenu:a.data.resp.ListQuyenMenu}),t.listMenu=n}t.dialogForm=!1,t.total=t.listMenu.length,console.log("res post: ",a)})).catch((function(e){t.loadingData=!1,console.log("err: ",e),"menu.maMenu_conflict"===e.data.messageCode?l.a.error("Trùng mã menu"):l.a.error("Vui lòng kiểm tra lại dữ liệu nhập vào các trường")}))}console.log("submit",e,t.emitDataGroup)}}}},S=P,w=a("8336"),Q=a("b0af"),E=a("99d9"),$=a("a523"),N=a("8fea"),L=a("169a"),V=a("132d"),q=a("2fa4"),A=a("71d9"),G=a("2a7f"),K=a("3a2f"),z=Object(m["a"])(S,n,o,!1,null,"2ce570e2",null);e["default"]=z.exports;v()(z,{VBtn:w["a"],VCard:Q["a"],VCardActions:E["a"],VCardText:E["b"],VCardTitle:E["c"],VCol:p["a"],VContainer:$["a"],VDataTable:N["a"],VDialog:L["a"],VIcon:V["a"],VRow:f["a"],VSpacer:q["a"],VToolbar:A["a"],VToolbarItems:G["a"],VToolbarTitle:G["b"],VTooltip:K["a"]})}}]);