(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-365c12ac"],{1471:function(t,e,a){},"16c8":function(t,e,a){"use strict";a("f0ec")},"1bfa":function(t,e,a){},"23a7":function(t,e,a){"use strict";a("13d5"),a("5803");var i=a("2677"),n=a("cc20"),s=a("80d2"),o=a("d9bd"),l=a("d9f7");e["a"]=i["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:t=>"boolean"===typeof t||[1e3,1024].includes(t)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:t=>Object(s["I"])(t).every(t=>null!=t&&"object"===typeof t)}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);const e=this.internalArrayValue.reduce((t,{size:e=0})=>t+e,0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(s["x"])(e,1024===this.base))},internalArrayValue(){return Object(s["I"])(this.internalValue)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},text(){return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map(t=>{const{name:e="",size:a=0}=t,i=this.truncateText(e);return this.showSize?`${i} (${Object(s["x"])(a,1024===this.base)})`:i}):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(t){!0===t&&Object(o["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value(t){const e=this.multiple?t:t?[t]:[];Object(s["k"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map((t,e)=>this.$createElement(n["a"],{props:{small:this.smallChips},on:{"click:close":()=>{const t=this.internalValue;t.splice(e,1),this.internalValue=t}}},[t])):[]},genControl(){const t=i["a"].options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(l["d"])(t.data.style,{display:"none"})),t},genInput(){const t=i["a"].options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot(){if(!this.prependIcon)return null;const t=this.genIcon("prepend",()=>{this.$refs.input.click()});return this.genSlot("prepend","outer",[t])},genSelectionText(){const t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections(){const t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((e,a)=>{this.$scopedSlots.selection&&t.push(this.$scopedSlots.selection({text:this.text[a],file:e,index:a}))}):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot(){const t=i["a"].options.methods.genTextFieldSlot.call(this);return t.data.on={...t.data.on||{},click:()=>this.$refs.input.click()},t},onInput(t){const e=[...t.target.files||[]];this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown(t){this.$emit("keydown",t)},truncateText(t){if(t.length<Number(this.truncateLength))return t;const e=Math.floor((Number(this.truncateLength)-1)/2);return`${t.slice(0,e)}…${t.slice(t.length-e)}`}}})},2677:function(t,e,a){"use strict";var i=a("8654");e["a"]=i["a"]},3168:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));const i={PHAN_QUYEN_CAN_BO:["ALL_CANBO_PHANQUYEN","CANBO_PHANQUYEN"],XEM_CAN_BO_ALL:["ALL_CANBO_XEM"],XEM_CAN_BO_DV:["CANBO_XEM"],THEM_MOI_CAN_BO_ALL:["ALL_CANBO_CAPNHAT"],THEM_MOI_CAN_BO_DV:["CANBO_CAPNHAT"],XEM_SINH_VIEN_ALL:["ALL_SINHVIEN_XEM"],XEM_SINH_VIEN_DV:["SINHVIEN_XEM"],THEM_MOI_SINH_VIEN_ALL:["ALL_SINHVIEN_CAPNHAT"],THEM_MOI_SINH_VIEN_DV:["SINHVIEN_CAPNHAT"],CAP_NHAT_ANH_CHO_SV_ALL:["ALL_ALBUM_CAPNHAT"],CAP_NHAT_ANH_CHO_SV_DV:["ALBUM_CAPNHAT"],CAP_NHAT_TIN_BAI_ALL:["ALL_TINBAI_CAPNHAT"],CAP_NHAT_TIN_BAI_DV:["TINBAI_CAPNHAT"],XEM_TIN_BAI_ALL:["ALL_TINBAI_XEM"],XEM_TIN_BAI_DV:["TINBAI_XEM"],DUYET_TIN_BAI:["TINBAI_DUYET"],HUY_XUAT_BAN_TIN_BAI:["TINBAI_HUY_XUATBAN"],XUAT_BAN_TIN_BAI:["TINBAI_XUATBAN"],CAP_NHAT_VA_THEM_BAN_DO:["BANDO_CAPNHAT"],XOA_BAN_DO:["BANDO_XOA"],CAP_NHAT_VA_THEM_LOAI_BAN_DO:["LOAI_BANDO_CAPNHAT"],XOA_LOAI_BAN_DO:["LOAI_BANDO_XOA"]}},4624:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var i=a("66e5");const n={name:"useAccountAuthorization",data(){return{}},mounted(){},methods:{handleCheckActionAuthor(t){const e=this,a=e.$cookies.get("UserInfo","").vaiTroSuDung.split(",");for(const i of a)if(t.includes(i))return!0;return!1},handleCheckAuthor(t,e){const a=this;let n="";const s=a.$cookies.get("UserInfo","").vaiTroSuDung.split(",");for(const o of s){if(t.includes(o)){n=i["a"].ALL;break}e.includes(o)&&(n=i["a"].ALONE)}return n}}}},"469b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"5"}},[a("div",{staticClass:"d-flex align-center",staticStyle:{"padding-top":"1.6px"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.textSearch,expression:"textSearch"}],staticClass:"form-control",staticStyle:{height:"32px",outline:"none"},attrs:{type:"text",placeholder:"Nhập tiêu đề...",autocomplete:"off"},domProps:{value:t.textSearch},on:{input:function(e){e.target.composing||(t.textSearch=e.target.value)}}}),a("button",{staticClass:"btn btn-search primary",on:{click:function(e){return e.stopPropagation(),t.getListstudentFilter.apply(null,arguments)}}},[a("v-icon",{attrs:{left:"",dark:"",size:"22"}},[t._v("mdi mdi-magnify-minus-outline")])],1)])]),a("v-col",{attrs:{cols:"12",sm:t.unitId?4:2}},[a("div",[a("v-select",{staticClass:"custom-height-select-filter",attrs:{items:t.optionStatusUpoadFile,label:"Trạng thái tải ảnh",dense:"",solo:""},on:{change:t.handlechangeSelectedCheckFile},model:{value:t.statusUpoadFile,callback:function(e){t.statusUpoadFile=e},expression:"statusUpoadFile"}})],1)]),t.unitId?t._e():a("v-col",{attrs:{cols:"12",sm:"2"}},[a("div",[a("v-select",{staticClass:"custom-height-select-filter",attrs:{items:t.optionAgencies,label:"Cơ quan đơn vị",dense:"",solo:""},on:{change:t.handlechangeSelectedAgencies},model:{value:t.agenciesValue,callback:function(e){t.agenciesValue=e},expression:"agenciesValue"}})],1)]),a("v-col",{attrs:{cols:"12",sm:"3"}},[a("div",{staticClass:"d-flex",staticStyle:{float:"right"}},[a("button",{class:t.checkDisable?"btn-disable btn-add":"btn btn-add primary",attrs:{disabled:t.checkDisable},on:{click:function(e){return e.stopPropagation(),t.repuestAddImage.apply(null,arguments)}}},[a("v-icon",{attrs:{left:"",dark:"",size:"22"}},[t._v("mdi-file-plus")]),t._v(" Yêu cầu thêm ảnh ")],1),t.checkActionAddAndUpdate?a("button",{staticClass:"btn btn-add primary",on:{click:function(e){return e.stopPropagation(),t.showModalForm.apply(null,arguments)}}},[a("v-icon",{attrs:{left:"",dark:"",size:"22"}},[t._v("mdi-file-plus")]),t._v(" Thêm mới ")],1):t._e()])])],1),a("v-row",{staticClass:"my-0 mb-3"},[a("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[a("v-data-table",{staticClass:"table-base mt-2",attrs:{"show-select":!t.checkDisable,headers:t.headers,items:t.listStudent,"items-per-page":t.itemsPerPage,"item-key":"PrimKey","hide-default-footer":"","no-data-text":"Không có dữ liệu",loading:t.loadingData,"loading-text":"Đang tải... ","item-text":"name"},on:{"toggle-select-all":t.selectAllToggle},scopedSlots:t._u([{key:"item.data-table-select",fn:function(e){var i=e.item,n=e.isSelected,s=e.select;return[i.MainImage.FileUrl?t._e():a("v-simple-checkbox",{attrs:{value:n,ripple:!1},on:{input:function(t){return s(t)}}})]}},{key:"item.stt",fn:function(e){var i=e.index;return[a("td",[t._v(t._s(i+1))])]}},{key:"item.thaotac",fn:function(e){var i=e.item;return[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,s=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"mr-2",attrs:{color:"#2161b1",text:"",icon:""},on:{click:function(e){return e.stopPropagation(),t.viewDetailStudent(i)}}},"v-btn",s,!1),n),[a("v-icon",{attrs:{size:"18"}},[t._v("mdi-clipboard-text")])],1)]}}],null,!0)},[a("span",[t._v("Thông tin chi tiết sinh viên")])])]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t.pageCount?a("pagination",{attrs:{pageInput:t.page,total:t.total,pageCount:t.pageCount},on:{"tiny:change-page":t.handlechangePage}}):t._e()],1)],1),t.dialogForm?a("div",[a("v-dialog",{attrs:{"max-width":"800px",persistent:"",fullscreen:""},model:{value:t.dialogForm,callback:function(e){t.dialogForm=e},expression:"dialogForm"}},[a("v-card",[a("v-toolbar",{staticClass:"px-3",attrs:{dark:"",color:"primary"}},[t.edittingForm?a("v-toolbar-title",[t._v("Cập nhật sinh viên")]):t._e(),t.edittingForm?t._e():a("v-toolbar-title",[t._v("Thêm mới sinh viên")]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{icon:"",dark:""},on:{click:t.closeModalForm}},[a("v-icon",[t._v("mdi-close")])],1)],1)],1),a("FormSinhVien",{ref:"formSinhVienBoRef",attrs:{dataEdit:t.dataEdit,unitId:t.unitId,checkActionAddAndUpdate:t.checkActionAddAndUpdate}}),a("v-card-text",{staticClass:"px-2 py-2"},[a("v-card-actions",{staticClass:"justify-center my-4"},[a("v-btn",{staticClass:"white--text mr-2",attrs:{small:"",depressed:"",color:"red",loading:t.loadingAction,disabled:t.loadingAction},on:{click:t.closeModalForm}},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-close ")]),t._v(" "+t._s(t.$t("basic.thoat"))+" ")],1),t.readonlyForm?t._e():a("v-btn",{staticClass:"mr-2",attrs:{small:"",depressed:"",color:"primary",loading:t.loadingAction,disabled:t.loadingAction},nativeOn:{click:function(e){return t.submitForm.apply(null,arguments)}}},[a("v-icon",{attrs:{left:"",dark:"",size:"18"}},[t._v(" mdi-file-document-plus-outline ")]),t.edittingForm?a("span",[t._v("Cập nhật")]):a("span",[t._v("Thêm mới")])],1)],1)],1)],1)],1)],1):t._e(),t.dialogFormDetails?a("div",[a("v-dialog",{attrs:{"max-width":"1400px",persistent:""},model:{value:t.dialogFormDetails,callback:function(e){t.dialogFormDetails=e},expression:"dialogFormDetails"}},[a("v-card",[a("v-toolbar",{staticClass:"px-3",attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",[t._v("Thông tin chi tiết sinh viên")]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{icon:"",dark:""},on:{click:t.closeModalFormDetail}},[a("v-icon",[t._v("mdi-close")])],1)],1)],1),a("DetailStudent",{attrs:{dataStudent:t.dataEdit}}),a("v-card-text",{staticClass:"px-2 py-2",staticStyle:{background:"#eee"}},[a("v-card-actions",{staticClass:"justify-center my-4"},[a("v-btn",{staticClass:"white--text mr-2",attrs:{small:"",depressed:"",color:"red",loading:t.loadingAction,disabled:t.loadingAction},on:{click:t.closeModalFormDetail}},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-close ")]),t._v(" "+t._s(t.$t("basic.thoat"))+" ")],1),t.readonlyForm?t._e():a("v-btn",{staticClass:"mr-2",attrs:{small:"",depressed:"",color:"primary",loading:t.loadingAction,disabled:t.loadingAction},nativeOn:{click:function(e){return t.editStudent.apply(null,arguments)}}},[a("v-icon",{attrs:{left:"",dark:"",size:"18"}},[t._v(" mdi-file-document-plus-outline ")]),a("span",[t._v("Sửa thông tin sinh viên")])],1)],1)],1)],1)],1)],1):t._e()],1)},n=[],s=(a("13d5"),a("e20e")),o=a("854a"),l=a.n(o),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",{ref:"formSinhVienRef",staticClass:"dialog-body",attrs:{"lazy-validation":""},model:{value:t.validForm,callback:function(e){t.validForm=e},expression:"validForm"}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"titleText mb-2"},[t._v(" Họ và tên: "),a("span",{staticStyle:{color:"red"}},[t._v("*")])]),a("v-text-field",{attrs:{rules:[t.rules.required],solo:"",label:"Nhập tên đầy đủ...",dense:"","hide-details":"auto",required:""},model:{value:t.formData.HoVaTen,callback:function(e){t.$set(t.formData,"HoVaTen",e)},expression:"formData.HoVaTen"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"titleText mb-2"},[t._v(" Số CCCD: "),a("span",{staticStyle:{color:"red"}},[t._v("*")])]),a("v-text-field",{attrs:{rules:[t.rules.required,t.rules.idCard],solo:"",label:"Nhập CCCD...",dense:"","hide-details":"auto"},model:{value:t.formData.ChungMinhThu,callback:function(e){t.$set(t.formData,"ChungMinhThu",e)},expression:"formData.ChungMinhThu"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"titleText mb-2"},[t._v("Số điện thoại:")]),a("v-text-field",{attrs:{rules:[t.rules.phone],solo:"",label:"Nhập số điện thoại...",dense:"","hide-details":"auto",required:""},model:{value:t.formData.SoDienThoai,callback:function(e){t.$set(t.formData,"SoDienThoai",e)},expression:"formData.SoDienThoai"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"titleText mb-2"},[t._v("Email VNU:")]),a("v-text-field",{attrs:{rules:[t.rules.email],solo:"",label:"Nhập email...",dense:"","hide-details":"auto",disabled:!!t.dataEdit.EmailVNU},model:{value:t.formData.EmailVNU,callback:function(e){t.$set(t.formData,"EmailVNU",e)},expression:"formData.EmailVNU"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"titleText mb-2"},[t._v(" Ngày sinh: "),a("span",{staticStyle:{color:"red"}},[t._v("*")])]),a("v-text-field",{attrs:{rules:[t.rules.birthday],solo:"",label:"Nhập ngày sinh...",dense:"","hide-details":"auto",required:""},model:{value:t.formData.NgaySinh,callback:function(e){t.$set(t.formData,"NgaySinh",e)},expression:"formData.NgaySinh"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"titleText mb-2"},[t._v("Giới tính:")]),a("v-select",{staticClass:"style-selected",attrs:{items:t.optionGender,label:"Chọn",dense:"",solo:""},model:{value:t.formData.GioiTinh,callback:function(e){t.$set(t.formData,"GioiTinh",e)},expression:"formData.GioiTinh"}})],1)],1),t.dataEdit.PrimKey?a("v-row",[t.checkActionUpload?a("v-col",{attrs:{cols:"12",sm:"12"}},[a("div",{staticClass:"titleText mb-2"},[t._v("Tải ảnh lên:")]),a("v-file-input",{attrs:{accept:"image/png, image/jpeg, image/bmp","prepend-icon":"",label:"Chọn ảnh đại diện",solo:"",dense:""},on:{change:t.handleChangeFile},model:{value:t.filename,callback:function(e){t.filename=e},expression:"filename"}}),t.checkFile?a("v-btn",{attrs:{depressed:"","x-small":"",color:"primary"},on:{click:t.handleViewFile}},[t._v("Nhấn để xem tệp")]):t._e(),t.checkFile?a("v-btn",{staticClass:"mx-2",attrs:{depressed:"","x-small":"",color:"error"},on:{click:t.handleDeleteFile}},[t._v("Xóa tệp đính kèm ")]):t._e()],1):t._e()],1):t._e(),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("div",{staticClass:"titleText mb-2"},[t._v("Địa chỉ:")]),a("v-text-field",{attrs:{solo:"",label:"Nhập địa chỉ...",dense:"","hide-details":"auto"},model:{value:t.formData.DiaChiThuongTru,callback:function(e){t.$set(t.formData,"DiaChiThuongTru",e)},expression:"formData.DiaChiThuongTru"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"4"}},[a("div",{staticClass:"titleText mb-2"},[t._v("Tỉnh/thành:")]),a("v-select",{attrs:{items:t.optionProvince,label:"Chọn",dense:"",solo:""},on:{change:t.handleChangeProvince},model:{value:t.formData.TinhThanh,callback:function(e){t.$set(t.formData,"TinhThanh",e)},expression:"formData.TinhThanh"}})],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("div",{staticClass:"titleText mb-2"},[t._v("Quận/huyện:")]),a("v-select",{attrs:{items:t.optionDistrict,label:"Chọn",dense:"",solo:""},on:{change:t.hanldeChangeDistrict},model:{value:t.formData.QuanHuyen,callback:function(e){t.$set(t.formData,"QuanHuyen",e)},expression:"formData.QuanHuyen"}})],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("div",{staticClass:"titleText mb-2"},[t._v("Phường/xã:")]),a("v-select",{attrs:{items:t.optionWard,label:"Chọn",dense:"",solo:""},model:{value:t.formData.PhuongXa,callback:function(e){t.$set(t.formData,"PhuongXa",e)},expression:"formData.PhuongXa"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"titleText mb-2"},[t._v(" Mã sinh viên: "),a("span",{staticStyle:{color:"red"}},[t._v("*")])]),a("v-text-field",{attrs:{rules:[t.rules.required],solo:"",disabled:!!t.dataEdit.MaSinhVien,label:"Nhập mã sinh viên...",dense:"","hide-details":"auto",required:""},model:{value:t.formData.MaSinhVien,callback:function(e){t.$set(t.formData,"MaSinhVien",e)},expression:"formData.MaSinhVien"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"titleText mb-2"},[t._v(" Số báo danh: "),a("span",{staticStyle:{color:"red"}},[t._v("*")])]),a("v-text-field",{attrs:{rules:[t.rules.required],disabled:!!t.dataEdit.SoBaoDanh,solo:"",label:"Nhập số báo danh...",dense:"","hide-details":"auto",required:""},model:{value:t.formData.SoBaoDanh,callback:function(e){t.$set(t.formData,"SoBaoDanh",e)},expression:"formData.SoBaoDanh"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"titleText mb-2"},[t._v(" Mã nhập học: "),a("span",{staticStyle:{color:"red"}},[t._v("*")])]),a("v-text-field",{attrs:{disabled:!!t.dataEdit.MaNhapHoc,rules:[t.rules.required],solo:"",label:"Nhập...",dense:"","hide-details":"auto",required:""},model:{value:t.formData.MaNhapHoc,callback:function(e){t.$set(t.formData,"MaNhapHoc",e)},expression:"formData.MaNhapHoc"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"titleText mb-2"},[t._v(" Số hồ sơ: "),a("span",{staticStyle:{color:"red"}},[t._v("*")])]),a("v-text-field",{attrs:{rules:[t.rules.required],solo:"",label:"Nhập số hồ sơ...",dense:"","hide-details":"auto",disabled:!!t.dataEdit.SoHoSo},model:{value:t.formData.SoHoSo,callback:function(e){t.$set(t.formData,"SoHoSo",e)},expression:"formData.SoHoSo"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("div",{staticClass:"titleText mb-2"},[t._v(" Cơ quan, đơn vị: "),a("span",{staticStyle:{color:"red"}},[t._v("*")])]),a("v-select",{attrs:{rules:[t.rules.required],items:t.optionAgencies,label:"Chọn",dense:"",solo:""},model:{value:t.formData.CoQuanDonVi,callback:function(e){t.$set(t.formData,"CoQuanDonVi",e)},expression:"formData.CoQuanDonVi"}})],1)],1),a("v-dialog",{attrs:{persistent:"",fullscreen:""},model:{value:t.showDiglogFile,callback:function(e){t.showDiglogFile=e},expression:"showDiglogFile"}},[a("v-card",[a("v-toolbar",{staticClass:"px-3"},[a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{icon:""},on:{click:function(e){t.showDiglogFile=!1}}},[a("v-icon",[t._v("mdi-close")])],1)],1)],1),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("div",{staticClass:"d-flex justify-center"},[a("img",{staticClass:"style-img",attrs:{src:t.formData.MainImageUrl,alt:""}})])])],1)],1)],1)],1)],1)],1)},r=[],d=a("2f62"),h=a("c1df"),u=a.n(h),m=a("3be3"),p=a("bc3a"),v=a.n(p),g=a("66e5"),f=a("3168"),_=a("4624"),S={props:["dataEdit","unitId","checkActionAddAndUpdate"],mixins:[_["a"]],data(){var t,e,a,i,n,s;return{formData:{SoDienThoai:(null===(t=this.dataEdit.DanhBaLienLac)||void 0===t?void 0:t.SoDienThoai)||"",ChungMinhThu:this.dataEdit.ChungMinhThu||"",MaSinhVien:this.dataEdit.MaSinhVien||"",SoBaoDanh:this.dataEdit.SoBaoDanh||"",GioiTinh:this.dataEdit.GioiTinh||"",HoVaTen:this.dataEdit.HoVaTen||"",MaNhapHoc:this.dataEdit.MaNhapHoc||"",SoHoSo:this.dataEdit.SoHoSo||"",NgaySinh:this.dataEdit.NgaySinh?u.a.utc(this.dataEdit.NgaySinh).format("DD/MM/YYYY"):"",EmailVNU:this.dataEdit.EmailVNU||"",DiaChiThuongTru:(null===(e=this.dataEdit.DiaChiThuongTru)||void 0===e?void 0:e.SoNhaChiTiet)||"",TinhThanh:this.dataEdit.TinhThanh||"",QuanHuyen:this.dataEdit.QuanHuyen||"",PhuongXa:this.dataEdit.PhuongXa||"",CoQuanDonVi:null!==(a=this.dataEdit.CoQuanDonVi)&&void 0!==a&&a.MaHanhChinh?{text:null===(i=this.dataEdit.CoQuanDonVi)||void 0===i?void 0:i.TenGoi,value:{TenGoi:this.dataEdit.CoQuanDonVi.TenGoi,MaHanhChinh:this.dataEdit.CoQuanDonVi.MaHanhChinh}}:"",MainImageUrl:(null===(n=this.dataEdit)||void 0===n||null===(s=n.MainImage)||void 0===s?void 0:s.FileUrl)||""},validForm:!1,optionPosition:[],optionDistrict:[],optionWard:[],optionGroups:[],showDiglogFile:!1,checkFile:!1,idFile:"",filename:null,checkActionUpload:"",rules:{required:t=>!!t||"Không được để trống.",email:t=>{const e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Đây không phải là email"},birthday:t=>{const e=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;return e.test(t)||"Định dạng ngày sinh là: ngày/tháng/năm"},phone:t=>{const e=/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;let a;return a=""===t||(e.test(t)||"Sai định dạng số điện thoại"),a},idCard:t=>{const e=/^[0-9]{9,12}$/;return e.test(t)||"Định dạng sai số CCCD"}}}},mounted(){console.log("moun")},created(){var t;const e=this;e.dataEdit&&null!==(t=e.dataEdit.MainImage)&&void 0!==t&&t.FileUrl&&(e.checkFile=!0),e.checkActionUpload=e.handleCheckAuthor(f["a"].CAP_NHAT_ANH_CHO_SV_ALL,f["a"].CAP_NHAT_ANH_CHO_SV_DV),e.checkActionUpload===g["a"].ALONE&&e.unitId!==e.dataEdit.CoQuanDonVi.MaHanhChinh&&(e.checkActionUpload=""),console.log("cretate",this.dataEdit,e.unitId,e.checkActionUpload)},computed:{...Object(d["b"])(["listAgencies","listProvince","listGender"]),optionGender(){const t=this,e=t.listGender.map(t=>({text:t.tenMuc,value:{MaMuc:t.maMuc,TenMuc:t.tenMuc}}));return e},optionAgencies(){const t=this;let e=t.listAgencies;console.log("Data: ",e,t.unitId),t.checkActionAddAndUpdate===g["a"].ALONE&&t.unitId&&e.filter(e=>e.maHanhChinh===t.unitId);const a=e.map(t=>({text:t.tenGoi,value:{MaHanhChinh:t.maHanhChinh,TenGoi:t.tenGoi}}));return a},optionProvince(){const t=this,e=t.listProvince.map(t=>({text:t.tenMuc,value:{MaMuc:t.maMuc,TenMuc:t.tenMuc}}));return e}},methods:{getDistrict(t){const e=this;let a={collectionName:"quanhuyen",data:{page:0,size:20,keyword:"",orderFields:"",orderTypes:"",thamChieu_maMuc:t,tinhTrang:"1"}};e.$store.dispatch("collectionFilter",a).then((function(t){const a=t.content;e.optionDistrict=a.map(t=>({text:t.tenMuc,value:{MaMuc:t.maMuc,TenMuc:t.tenMuc},districtCode:t.maMuc}))})).catch((function(){}))},getWard(t){const e=this;let a={collectionName:"phuongxa",data:{page:0,size:20,keyword:"",orderFields:"",orderTypes:"",thamChieu_maMuc:t,tinhTrang:"1"}};e.$store.dispatch("collectionFilter",a).then((function(t){const a=t.content;e.optionWard=a.map(t=>({text:t.tenMuc,value:{MaMuc:t.maMuc,TenMuc:t.tenMuc}}))})).catch((function(){}))},validateForm(){let t=this;return t.$refs.formSinhVienRef.validate()},handleChangeProvince(t){const e=this;e.optionDistrict=[],e.optionWard=[],e.getDistrict(t.MaMuc)},hanldeChangeDistrict(t){const e=this;console.log("dis",e.optionDistrict,t),e.getWard(t.MaMuc)},handleChangeFile(t){const e=this;if(t){let a=new FormData;a.append("files",t),a.append("id",e.dataEdit.PrimKey);const i={type:"album/upload",payload:a};e.$store.dispatch("uploadFile",i).then((function(t){const a=t.data.fullPathUrl.lastIndexOf("/")+1,i=t.data.fullPathUrl.lastIndexOf(".");e.formData.MainImageUrl=t.data.fullPathUrl,e.idFile=t.data.fullPathUrl.slice(a,i),e.checkFile=!0,console.log("res: ",t)})).catch((function(){}))}},handleViewFile(){const t=this;t.showDiglogFile=!0},async handleDeleteFile(){const t=this;try{const e={method:"delete",url:`${m["a"]}album/${t.dataEdit.PrimKey}/attachment/${t.idFile?t.idFile:t.dataEdit.MainImage.Id}`,headers:{Accept:"application/json","Content-Type":"application/json"},data:{},params:{}};await v()(e),t.filename=null,l.a.success("Xóa thành công")}catch(e){console.log(e)}t.checkFile=!1}}},C=S,A=(a("ff0c"),a("2877")),y=a("6544"),b=a.n(y),D=a("8336"),T=a("b0af"),x=a("99d9"),N=a("62ad"),V=a("a523"),M=a("169a"),I=a("23a7"),k=a("4bd4"),E=a("132d"),F=a("0fd9"),H=a("b974"),w=a("2fa4"),L=a("8654"),P=a("71d9"),$=a("2a7f"),B=Object(A["a"])(C,c,r,!1,null,null,null),U=B.exports;b()(B,{VBtn:D["a"],VCard:T["a"],VCardText:x["b"],VCol:N["a"],VContainer:V["a"],VDialog:M["a"],VFileInput:I["a"],VForm:k["a"],VIcon:E["a"],VRow:F["a"],VSelect:H["a"],VSpacer:w["a"],VTextField:L["a"],VToolbar:P["a"],VToolbarItems:$["a"]});var O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"container-profile"},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-card",{staticStyle:{width:"100%",height:"100%"},attrs:{elevation:"2"}},[a("div",{staticClass:"title-card"},[t._v("Thông tin cơ bản")]),a("div",{staticClass:"px-5 py-5"},[a("div",{staticClass:"d-flex px-4 py-4 wrap-content-item"},[a("div",{staticStyle:{flex:"1"}},[t._v("Họ và tên:")]),a("div",{staticClass:"text-answer",staticStyle:{flex:"2"}},[t._v(" "+t._s(t.student.HoVaTen)+" ")])]),a("div",{staticClass:"d-flex px-4 py-4 wrap-content-item"},[a("div",{staticStyle:{flex:"1"}},[t._v("Ngày sinh:")]),a("div",{staticClass:"text-answer",staticStyle:{flex:"2"}},[t._v(" "+t._s(t.student.NgaySinh)+" ")])]),a("div",{staticClass:"d-flex px-4 py-4 wrap-content-item"},[a("div",{staticStyle:{flex:"1"}},[t._v("Số CCCD:")]),a("div",{staticClass:"text-answer",staticStyle:{flex:"2"}},[t._v(" "+t._s(t.student.ChungMinhThu)+" ")])]),a("div",{staticClass:"d-flex px-4 py-4 wrap-content-item"},[a("div",{staticStyle:{flex:"1"}},[t._v("Giới tính:")]),a("div",{staticClass:"text-answer",staticStyle:{flex:"2"}},[t._v(" "+t._s(t.student.GioiTinh)+" ")])]),a("div",{staticClass:"d-flex px-4 py-4 wrap-content-item"},[a("div",{staticStyle:{flex:"1"}},[t._v("File ảnh:")]),a("div",{staticClass:"text-answer",staticStyle:{flex:"2"}},[a("a",{attrs:{target:"_blank",href:t.student.MainImage}},[t._v(t._s(t.student.MainImageName))])])])])])],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-card",{staticStyle:{width:"100%",height:"100%"},attrs:{elevation:"2"}},[a("div",{staticClass:"title-card"},[t._v("Thông tin hành chính")]),a("div",{staticClass:"px-5 py-5"},[a("div",{staticClass:"d-flex px-4 py-4 wrap-content-item"},[a("div",{staticStyle:{flex:"1"}},[t._v("Mã sinh viên:")]),a("div",{staticClass:"text-answer",staticStyle:{flex:"2"}},[t._v(" "+t._s(t.student.MaSinhVien)+" ")])]),a("div",{staticClass:"d-flex px-4 py-4 wrap-content-item"},[a("div",{staticStyle:{flex:"1"}},[t._v("Email:")]),a("div",{staticClass:"text-answer",staticStyle:{flex:"2"}},[t._v(" "+t._s(t.student.EmailVNU)+" ")])]),a("div",{staticClass:"d-flex px-4 py-4 wrap-content-item"},[a("div",{staticStyle:{flex:"1"}},[t._v("Mã nhập học:")]),a("div",{staticClass:"text-answer",staticStyle:{flex:"2"}},[t._v(" "+t._s(t.student.MaNhapHoc)+" ")])]),a("div",{staticClass:"d-flex px-4 py-4 wrap-content-item"},[a("div",{staticStyle:{flex:"1"}},[t._v("Số báo danh:")]),a("div",{staticClass:"text-answer",staticStyle:{flex:"2"}},[t._v(" "+t._s(t.student.SoBaoDanh)+" ")])])])])],1)],1)],1)},X=[],z={props:["dataStudent"],data(){return{student:{HoVaTen:this.dataStudent.HoVaTen||"",ChungMinhThu:this.dataStudent.ChungMinhThu||"",NgaySinh:this.dataStudent.NgaySinh?u()(this.dataStudent.NgaySinh).format("DD/MM/YYYY"):"",MainImage:this.dataStudent.MainImage.FileUrl||"",MainImageName:this.dataStudent.MainImage.FileName||"",GioiTinh:this.dataStudent.GioiTinh.TenMuc||"",MaSinhVien:this.dataStudent.MaSinhVien||"",SoBaoDanh:this.dataStudent.SoBaoDanh||"",MaNhapHoc:this.dataStudent.MaNhapHoc||"",EmailVNU:this.dataStudent.EmailVNU||""}}},created(){console.log("props: ",this.dataStudent)},mounted(){},methods:{}},G=z,Q=(a("16c8"),Object(A["a"])(G,O,X,!1,null,"51a5f420",null)),j=Q.exports;b()(Q,{VCard:T["a"],VCol:N["a"],VContainer:V["a"],VRow:F["a"]});var q={components:{Pagination:s["a"],FormSinhVien:U,DetailStudent:j},mixins:[_["a"]],data(){return{selected:[],textSearch:"",headers:[{sortable:!1,text:"STT",align:"center",value:"stt",width:15},{sortable:!1,text:"Họ và tên",align:"left",value:"HoVaTen",class:"th-center",width:120},{sortable:!1,text:"Mã sinh viên",align:"left",value:"MaSinhVien",class:"th-center",width:120},{sortable:!1,text:"Email",align:"left",value:"EmailVNU",class:"th-center",width:120},{sortable:!1,text:"Số báo danh",align:"left",value:"SoBaoDanh",class:"th-center",width:120},{sortable:!1,text:"Thao tác",align:"left",value:"thaotac",class:"th-center",width:68}],listStudent:[],itemsPerPage:20,loadingData:!1,pageCount:1,page:0,edittingForm:!1,dialogForm:!1,readonlyForm:!1,loadingAction:!1,total:1,dataEdit:{},dialogDelete:!1,idStudent:"",dialogFormDetails:!1,statusUpoadFile:"",optionStatusUpoadFile:[{text:"Sinh viên đã có ảnh",value:!0},{text:"Sinh viên chưa có ảnh",value:!1}],agenciesValue:"",checkAuthorViewStudent:"",unitId:"",checkActionAddAndUpdate:""}},created(){const t=this;t.unitId=t.$cookies.get("UserInfo","").MaDonVi,t.getList("listAgencies","coquandonvi"),t.getList("listProvince","tinhthanh",{tinhTrang:"1"}),t.getList("listGender","gioitinh",{tinhTrang:"1"}),t.checkAuthorViewStudent=t.handleCheckAuthor(f["a"].XEM_SINH_VIEN_ALL,f["a"].XEM_SINH_VIEN_DV),t.checkActionAddAndUpdate=t.handleCheckAuthor(f["a"].THEM_MOI_SINH_VIEN_ALL,f["a"].THEM_MOI_SINH_VIEN_DV),t.checkAuthorViewStudent===g["a"].ALL?t.getListStudent():t.getListStudent({CoQuanDonVi_MaHanhChinh:t.unitId}),console.log("create stydent: ",t.checkAuthorViewStudent,t.unitId,t.checkActionAddAndUpdate)},mounted(){},methods:{getListstudentFilter(){const t=this;console.log("tim kiếm"),t.getListStudent({keyword:t.textSearch}),t.textSearch="",t.statusUpoadFile=""},getList(t,e,a){let i=this;const n={page:0,size:20,keyword:"",orderFields:"",orderTypes:"",tinhTrang:"",thamChieu_maMuc:""};let s={collectionName:e,state:t,data:a?{...n,...a}:n};i.$store.dispatch("collectionFilterInstore",s).then((function(t){console.log("res: ",t)})).catch((function(){console.log("Error")}))},getListStudent(t){let e=this;e.loadingData=!0;const a={page:0,size:20,keyword:"",orderFields:"",orderTypes:"",tinhTrang:"",thamChieu_maMuc:""},i={collectionName:"sinhvien",data:t?{...a,...t}:a};e.$store.dispatch("collectionFilter",i).then((function(t){console.log("res student: ",t),e.listStudent=t.content,e.total=e.listStudent.length,e.pageCount=t.totalPages,e.loadingData=!1})).catch((function(){e.loadingData=!1}))},handlechangeSelectedCheckFile(t){const e=this;e.getListStudent({HasImageAttach:t}),e.textSearch="",e.agenciesValue=""},handlechangeSelectedAgencies(t){const e=this;e.getListStudent({CoQuanDonVi_MaHanhChinh:t}),e.textSearch="",e.statusUpoadFile=""},openDialogDeleteItem(t){const e=this;console.log("id delete: ",t.PrimKey),e.dialogDelete=!0,e.idStudent=t.PrimKey},deleteStudent(){const t=this;t.dialogDelete=!1;const e={payload:t.idStudent,type:"sinhvien"};t.$store.dispatch("deleteItemData",e).then((function(e){l.a.success("Xóa thành công"),t.listStudent=t.listStudent.reduce((function(e,a){return t.idStudent!==a.PrimKey&&e.push(a),e}),[]),t.total=t.listStudent.length,console.log("res dele: ",e)})).catch((function(){t.loadingData=!1}))},editStudent(){const t=this;t.edittingForm=!0,t.dialogForm=!0},viewDetailStudent(t){const e=this,a={...t,GioiTinh:{MaMuc:t.GioiTinh.MaMuc,TenMuc:t.GioiTinh.TenMuc}};e.dialogFormDetails=!0,e.dataEdit={...a}},handlechangePage(t){const e=this;e.getListStudent(t)},showModalForm(){const t=this;t.dialogForm=!0,t.edittingForm=!1},closeModalForm(){const t=this;t.dialogForm=!1,t.dataEdit={}},closeModalFormDetail(){const t=this;t.dataEdit={},t.dialogFormDetails=!1},selectAllToggle(t){const e=this,a=t.items.filter(t=>!t.MainImage.FileUrl);e.selected=a,console.log(e.selected,t,a)},repuestAddImage(){const t=this;if(t.selected.length){const e=t.selected.map(t=>t.PrimKey).join(","),a={listNguoiDung:e},i={type:"album/requireImage",payload:a};t.$store.dispatch("notificationUploadFileImage",i).then((function(t){l.a.success("Gửi yêu cầu thành công")})).catch((function(){})),console.log("requite: ",t.selected)}else l.a.error("Vui lòng chọn sinh viên để thực hiện thao tác")},submitForm(){const t=this;if(t.$refs.formSinhVienBoRef.validateForm()){const e=t.$refs.formSinhVienBoRef.formData,a={...e,MaSinhVien:e.MaSinhVien.replace(/ +/g,""),NgaySinh:e.NgaySinh?u()(e.NgaySinh,"DD/MM/YYYY").valueOf():"",DiaChiThuongTru:{SoNhaChiTiet:e.DiaChiThuongTru,TinhThanh:e.TinhThanh,QuanHuyen:e.QuanHuyen,PhuongXa:e.PhuongXa},CoQuanDonVi:{...e.CoQuanDonVi},DanhBaLienLac:{SoDienThoai:e.SoDienThoai}};if(delete a.MainImageUrl,delete a.TinhThanh,delete a.QuanHuyen,delete a.PhuongXa,delete a.DiaChiThuongTru,delete a.DanhBaLienLac,t.edittingForm){const e={payload:a,type:"sinhvien",id:t.dataEdit.PrimKey};t.$store.dispatch("editItemData",e).then((function(e){l.a.success("Cập nhật thành công"),t.dialogForm=!1,t.listStudent=t.listStudent.reduce((function(i,n){return t.dataEdit.PrimKey===n.PrimKey?[...i,{...a,PrimKey:t.dataEdit.PrimKey,MainImage:e.data.resp.MainImage}]:[...i,n]}),[]),console.log("res edit: ",e,a,t.listStudent),t.dataEdit={},t.dialogFormDetails=!1})).catch((function(){t.loadingData=!1,l.a.error("Vui lòng kiểm tra lại dữ liệu nhập vào các trường")}))}else{const e={payload:a,type:"sinhvien"};t.$store.dispatch("createItemData",e).then((function(e){if(l.a.success("Thêm mới thành công"),t.dialogForm=!1,t.listStudent.length<t.itemsPerPage){const i=[...t.listStudent];i.push({...a,PrimKey:e.data.resp.PrimKey,MainImage:e.data.resp.MainImage}),t.listStudent=i,t.total=t.listStudent.length}console.log("res post: ",e)})).catch((function(){t.loadingData=!1,l.a.error("Vui lòng kiểm tra lại dữ liệu nhập vào các trường")}))}console.log("submit",e,a)}}},computed:{...Object(d["b"])(["listAgencies"]),checkDisable(){const t=this,e=t.listStudent.filter(t=>!t.MainImage.FileUrl);return!e.length},optionAgencies(){const t=this,e=t.listAgencies.map(t=>({text:t.tenGoi,value:t.maHanhChinh}));return t.listAgencies.length?e:[]}}},Y=q,K=(a("95ae"),a("8fea")),R=a("9e88"),W=a("3a2f"),J=Object(A["a"])(Y,i,n,!1,null,null,null);e["default"]=J.exports;b()(J,{VBtn:D["a"],VCard:T["a"],VCardActions:x["a"],VCardText:x["b"],VCol:N["a"],VDataTable:K["a"],VDialog:M["a"],VIcon:E["a"],VRow:F["a"],VSelect:H["a"],VSimpleCheckbox:R["a"],VSpacer:w["a"],VToolbar:P["a"],VToolbarItems:$["a"],VToolbarTitle:$["b"],VTooltip:W["a"]})},5803:function(t,e,a){},"66e5":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));const i={ALL:"ALL",ALONE:"ALONE"}},"95ae":function(t,e,a){"use strict";a("1471")},f0ec:function(t,e,a){},ff0c:function(t,e,a){"use strict";a("1bfa")}}]);