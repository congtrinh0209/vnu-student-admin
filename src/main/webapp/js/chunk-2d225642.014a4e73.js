(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225642"],{e3ca:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",sm:"5"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.chuyenMucSearch,expression:"chuyenMucSearch"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nhập tiêu đề chuyên đề...",autocomplete:"off"},domProps:{value:t.chuyenMucSearch},on:{input:function(a){a.target.composing||(t.chuyenMucSearch=a.target.value)}}})]),e("v-col",{attrs:{cols:"12",sm:"1"}},[e("button",{staticClass:"btn btn-search",on:{click:function(a){return a.stopPropagation(),t.getDanhSachChuyenMuc.apply(null,arguments)}}},[e("v-icon",{attrs:{left:"",dark:"",size:"22"}},[t._v("mdi mdi-magnify-minus-outline")])],1)]),e("v-col",{attrs:{cols:"12",sm:"6"}},[e("div",{staticStyle:{float:"right"}},[e("button",{staticClass:"btn btn-add",on:{click:t.showAddForm}},[e("v-icon",{attrs:{left:"",dark:"",size:"22"}},[t._v("mdi-file-plus")]),t._v(" Thêm mới ")],1)])])],1),e("v-row",{staticClass:"my-0 mb-3"},[e("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[e("v-data-table",{staticClass:"table-base mt-2",attrs:{headers:t.headers,items:t.danhSachChuyenMuc,"items-per-page":t.itemsPerPage,"item-key":"primKey","hide-default-footer":"","no-data-text":"Không có",loading:t.loadingData,"loading-text":"Đang tải... ","item-text":"name"},scopedSlots:t._u([{key:"item.thaoTac",fn:function(a){var n=a.item;return[e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var o=a.on,i=a.attrs;return[e("v-btn",t._g(t._b({attrs:{color:"primary",text:"",icon:""},on:{click:function(a){return a.stopPropagation(),t.showFormDetail(n)}}},"v-btn",i,!1),o),[e("v-icon",{attrs:{size:"20"}},[t._v("mdi-arrow-right-bold-circle-outline")])],1)]}}],null,!0)},[e("span",[t._v("Chi Tiết")])]),e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var o=a.on,i=a.attrs;return[e("v-btn",t._g(t._b({staticClass:" mr-2",attrs:{color:"#2161b1",text:"",icon:""},on:{click:function(a){return a.stopPropagation(),t.showUpdateForm(n)}}},"v-btn",i,!1),o),[e("v-icon",{attrs:{size:"18"}},[t._v("mdi-pencil")])],1)]}}],null,!0)},[e("span",[t._v("Sửa")])]),e("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var o=a.on,i=a.attrs;return[e("v-btn",t._g(t._b({staticClass:"ml-2",attrs:{color:"red",text:"",icon:""},on:{click:function(a){return a.stopPropagation(),t.deleteItem(n)}}},"v-btn",i,!1),o),[e("v-icon",{attrs:{size:"18"}},[t._v("mdi-delete")])],1)]}}],null,!0)},[e("span",[t._v("Xóa")])])]}}])}),t.pageCount?e("pagination",{attrs:{pageInput:t.page,total:t.total,pageCount:t.pageCount},on:{"tiny:change-page":function(t){}}}):t._e()],1)],1),e("v-dialog",{attrs:{"max-width":"1200",persistent:""},model:{value:t.dialogForm,callback:function(a){t.dialogForm=a},expression:"dialogForm"}},[e("v-card",[e("v-toolbar",{staticClass:"px-3",attrs:{dark:"",color:"primary"}},[t.readonlyForm&&null===t.edittingForm?e("v-toolbar-title",[t._v("Thông tin loại bản đồ")]):t._e(),!0!==t.edittingForm||t.readonlyForm?t._e():e("v-toolbar-title",[t._v("Cập nhật loại bản đồ")]),!1!==t.edittingForm||t.readonlyForm?t._e():e("v-toolbar-title",[t._v("Thêm mới loại bản đồ")]),e("v-spacer"),e("v-toolbar-items",[e("v-btn",{attrs:{icon:"",dark:""},on:{click:t.exitForm}},[e("v-icon",[t._v("mdi-close")])],1)],1)],1),e("form-chuyen-muc",{ref:"formChuyenMucRef",attrs:{editingContent:t.editContent,dataInput:t.dataInput,readonly:t.readonlyForm}}),e("v-card-text",{staticClass:"px-2 py-2"},[e("v-card-actions",{staticClass:"justify-center my-4"},[e("v-btn",{staticClass:"white--text mr-2",attrs:{small:"",depressed:"",color:"red",loading:t.loadingAction,disabled:t.loadingAction},on:{click:t.exitForm}},[e("v-icon",{attrs:{left:""}},[t._v(" mdi-close ")]),t._v(" "+t._s(t.$t("basic.thoat"))+" ")],1),t.readonlyForm?t._e():e("v-btn",{staticClass:"mr-2",attrs:{small:"",depressed:"",color:"primary",loading:t.loadingAction,disabled:t.loadingAction},nativeOn:{click:function(a){return t.submitForm.apply(null,arguments)}}},[e("v-icon",{attrs:{left:"",dark:"",size:"18"}},[t._v(" mdi-file-document-plus-outline ")]),t.edittingForm?e("span",[t._v("Cập nhật")]):e("span",[t._v("Thêm vào")])],1)],1)],1)],1)],1)],1)},o=[],i=e("e20e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-form",{ref:"formChuyenMuc",staticClass:"dialog-body",attrs:{"lazy-validation":""},model:{value:t.validForm,callback:function(a){t.validForm=a},expression:"validForm"}},[e("v-row",[e("v-col",{attrs:{cols:"12",sm:"2"}},[e("div",{staticClass:"titleText"},[t._v("Tiêu đề: "),e("span",{staticStyle:{color:"red"}},[t._v("*")])])]),e("v-col",{attrs:{cols:"12",sm:"10"}},[e("v-text-field",{staticClass:"flex input-form",attrs:{solo:"",label:"Nhập tiêu đề...",dense:"","hide-details":"auto",clearable:!t.readonly,required:"",rules:t.rules.text},model:{value:t.formData.tenChuyenMuc,callback:function(a){t.$set(t.formData,"tenChuyenMuc",a)},expression:"formData.tenChuyenMuc"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"2"}},[e("div",{staticClass:"titleText"},[t._v("Chuyên mục cha:")])]),e("v-col",{attrs:{cols:"12",sm:"10"}},[e("v-autocomplete",{staticClass:"flex input-form",attrs:{"hide-no-data":"",items:t.chuyenMucItems,"item-text":"name","item-value":"value",placeholder:"Chọn loại chuyên mục",dense:"",solo:"","hide-details":"auto","return-object":"",clearable:""},model:{value:t.formData.chuyenMucCha,callback:function(a){t.$set(t.formData,"chuyenMucCha",a)},expression:"formData.chuyenMucCha"}})],1)],1)],1)},l=[],c={props:["editingContent","dataInput","readonly"],components:{Pagination:i["a"]},data(){return{itemsPerPage:10,pageCount:1,page:0,rules:{text:[t=>(t||"").length>0||"Đây là trường bắt buộc nhập"]},validForm:!1,activePicker:null,datetime:null,date:null,menuDate:!1,formData:{},dataOutput:"",chuyenMucItems:[{name:"Trung tâm hỗ trợ sinh viên",value:1},{name:"Thông tin nội trú",value:2},{name:"Cẩm nang Hòa Lạc",value:3},{name:"Chuyên mục 1",value:4},{name:"Chuyên mục 2",value:5},{name:"Chuyên mục 3",value:6},{name:"Tin tức chung",value:7}]}},created(){},watch:{},methods:{initForm(t){"update"===t&&this.dataInput&&(this.formData=this.dataInput)},resetForm(){let t=this;t.$refs.formChuyenMuc.reset(),t.$refs.formChuyenMuc.resetValidation()},validateForm(){let t=this;return t.$refs.formChuyenMuc.validate()},submitForm(){let t=this,a=Object.assign({},t.formData);t.$store.commit("SET_FORM_DATA",a)},setTrangThai(){let t=this;1==t.trangThai?t.formData.trangThai=1:t.formData.trangThai=0}}},s=c,u=e("2877"),m=e("6544"),d=e.n(m),h=e("c6a6"),v=e("62ad"),p=e("4bd4"),g=e("0fd9"),f=e("8654"),y=Object(u["a"])(s,r,l,!1,null,null,null),C=y.exports;d()(y,{VAutocomplete:h["a"],VCol:v["a"],VForm:p["a"],VRow:g["a"],VTextField:f["a"]});var b=e("854a"),F=e.n(b);F.a.options={closeButton:!0,timeOut:"5000",positionClass:"toast-top-center"};var M={components:{Pagination:i["a"],"form-chuyen-muc":C},data(){return{headers:[{sortable:!0,text:"STT",align:"center",value:"stt",width:60},{sortable:!1,text:"Tên chuyên mục",align:"left",value:"tenChuyenMuc",class:"th-center"},{sortable:!1,text:"Chuyên mục cha",align:"left",value:"chuyenMucCha.name",class:"th-center",width:280},{sortable:!1,text:"Thao tác",align:"center",value:"thaoTac",class:"th-center",width:150}],danhSachChuyenMuc:[],itemsPerPage:10,loadingData:!1,pageCount:1,page:0,edittingForm:!1,dialogForm:!1,readonlyForm:!1,loadingAction:!1,editContent:"",dataInput:"",total:2,chuyenMucSearch:null}},created(){let t=this;t.getDanhSachChuyenMuc(),t.isAdmin||t.checkRole("XEMBAOCAODONVI")||t.checkRole("XEMTATCABAOCAO")||t.$router.push({path:"/login"})},watch:{},computed:{},methods:{showUpdateForm(t){let a=this;a.dialogForm=!0,a.edittingForm=!0,a.readonlyForm=!1,a.editContent=t;try{a.dataInput=Object.assign({},t)}catch(e){a.dataInput={}}setTimeout((function(){a.$refs.formChuyenMucRef.initForm("update")}),200)},showAddForm(){let t=this;t.dialogForm=!0,t.edittingForm=!1,t.readonlyForm=!1,setTimeout((function(){t.$refs.formChuyenMucRef.resetForm()}),200)},showFormDetail(t){let a=this;a.dialogForm=!0,a.edittingForm=null,a.readonlyForm=!0,a.dataInput=Object.assign({},t),setTimeout((function(){a.$refs.formChuyenMucRef.initForm("update")}),200)},submitForm(){let t=this;if(t.$refs.formChuyenMucRef.validateForm()){t.$refs.formChuyenMucRef.submitForm();let a=t.$store.getters.getFormData;if(t.loadingAction=!0,t.edittingForm){let e=t.danhSachChuyenMuc.filter(a=>a.id!==t.editContent.id);e.push(a),t.danhSachChuyenMuc=e,t.loadingAction=!1,t.dialogForm=!1,F.a.remove(),F.a.success("Cập nhật thành công")}else a.id=t.getMaxNumber("id"),a.stt=t.getMaxNumber("stt"),t.danhSachChuyenMuc.push(a),t.loadingAction=!1,t.dialogForm=!1,t.total+=1,F.a.remove(),F.a.success("Thêm mới thành công")}},exitForm(){let t=this;t.dialogForm=!1,t.$refs.formChuyenMucRef.resetForm()},deleteItem(t){let a=this;a.$store.commit("SET_SHOWCONFIRM",!0);let e={auth:!1,title:"Xoá loại bản đồ",message:"Bạn có chắc xóa loại bản đồ này?",button:{yes:"Có",no:"Không"},callback:()=>{a.loading=!0,a.danhSachChuyenMuc=a.danhSachChuyenMuc.filter(a=>a.id!==t.id),a.loading=!1,a.total-=1,F.a.remove(),F.a.success("Xóa loại bản đồ thành công")}};a.$store.commit("SET_CONFIG_CONFIRM_DIALOG",e)},getDanhSachChuyenMuc(){let t=this;t.loadingData=!0;let a={collectionName:"quanlychuyenmuc",data:{tenChuyenMuc:""!==t.chuyenMucSearch?t.chuyenMucSearch:null}};t.$store.dispatch("collectionFilter",a).then((function(a){t.danhSachChuyenMuc=a,t.total=t.danhSachChuyenMuc.length,t.loadingData=!1})).catch((function(){t.loadingData=!1}))},onChangeTrangThaiSearch(){let t=this;setTimeout((function(){0==t.trangThaiSearch1?t.trangThaiSearch=0:t.trangThaiSearch=1}),200)},getMaxNumber(t){let a=this,e=0;return e=Math.max(...a.danhSachChuyenMuc.map(a=>a[t])),e+1}}},_=M,T=e("8336"),x=e("b0af"),S=e("99d9"),k=e("8fea"),D=e("169a"),w=e("132d"),A=e("2fa4"),I=e("71d9"),V=e("2a7f"),$=e("3a2f"),O=Object(u["a"])(_,n,o,!1,null,null,null);a["default"]=O.exports;d()(O,{VBtn:T["a"],VCard:x["a"],VCardActions:S["a"],VCardText:S["b"],VCol:v["a"],VDataTable:k["a"],VDialog:D["a"],VIcon:w["a"],VRow:g["a"],VSpacer:A["a"],VToolbar:I["a"],VToolbarItems:V["a"],VToolbarTitle:V["b"],VTooltip:$["a"]})}}]);