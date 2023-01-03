(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-720c4e93"],{1681:function(t,e,a){},"23a7":function(t,e,a){"use strict";a("13d5"),a("5803");var i=a("2677"),s=a("cc20"),l=a("80d2"),n=a("d9bd"),o=a("d9f7");e["a"]=i["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:t=>"boolean"===typeof t||[1e3,1024].includes(t)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:t=>Object(l["I"])(t).every(t=>null!=t&&"object"===typeof t)}},computed:{classes(){return{...i["a"].options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);const e=this.internalArrayValue.reduce((t,{size:e=0})=>t+e,0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(l["x"])(e,1024===this.base))},internalArrayValue(){return Object(l["I"])(this.internalValue)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},text(){return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map(t=>{const{name:e="",size:a=0}=t,i=this.truncateText(e);return this.showSize?`${i} (${Object(l["x"])(a,1024===this.base)})`:i}):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(t){!0===t&&Object(n["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value(t){const e=this.multiple?t:t?[t]:[];Object(l["k"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map((t,e)=>this.$createElement(s["a"],{props:{small:this.smallChips},on:{"click:close":()=>{const t=this.internalValue;t.splice(e,1),this.internalValue=t}}},[t])):[]},genControl(){const t=i["a"].options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(o["d"])(t.data.style,{display:"none"})),t},genInput(){const t=i["a"].options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot(){if(!this.prependIcon)return null;const t=this.genIcon("prepend",()=>{this.$refs.input.click()});return this.genSlot("prepend","outer",[t])},genSelectionText(){const t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections(){const t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((e,a)=>{this.$scopedSlots.selection&&t.push(this.$scopedSlots.selection({text:this.text[a],file:e,index:a}))}):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot(){const t=i["a"].options.methods.genTextFieldSlot.call(this);return t.data.on={...t.data.on||{},click:()=>this.$refs.input.click()},t},onInput(t){const e=[...t.target.files||[]];this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown(t){this.$emit("keydown",t)},truncateText(t){if(t.length<Number(this.truncateLength))return t;const e=Math.floor((Number(this.truncateLength)-1)/2);return`${t.slice(0,e)}…${t.slice(t.length-e)}`}}})},2677:function(t,e,a){"use strict";var i=a("8654");e["a"]=i["a"]},"4ff5":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{attrs:{elevation:"2"}},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"4"}},[a("div",{staticClass:"mb-2"},[t._v("Tình trạng:")]),a("v-select",{attrs:{items:t.optionStatus,dense:"",solo:"",clearable:""},model:{value:t.selectedStatus,callback:function(e){t.selectedStatus=e},expression:"selectedStatus"}})],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("div",{staticClass:"mb-2"},[t._v("Tình trạng công khai:")]),a("v-select",{attrs:{items:t.optionStatusPublic,dense:"",solo:"",clearable:""},model:{value:t.selectedStatusPublic,callback:function(e){t.selectedStatusPublic=e},expression:"selectedStatusPublic"}})],1),a("v-col",{attrs:{cols:"12",sm:"4"}},[a("div",{staticClass:"mb-2"},[t._v("Chủ đề:")]),a("v-select",{attrs:{items:t.optionTheme,dense:"",solo:"",clearable:""},model:{value:t.selectedTheme,callback:function(e){t.selectedTheme=e},expression:"selectedTheme"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"mb-2"},[t._v("Nội dung")]),a("v-text-field",{attrs:{solo:"",label:"Nhập...",dense:"","hide-details":"auto"},model:{value:t.textSearch,callback:function(e){t.textSearch=e},expression:"textSearch"}}),a("div",[a("button",{staticClass:"btn color-text-serach primary mt-2 ml-0",on:{click:function(e){return e.stopPropagation(),t.getListFeedbackFilter.apply(null,arguments)}}},[t._v(" Tìm Kiếm ")])])],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"mb-2"},[t._v("Ngày gửi")]),a("v-text-field",{staticClass:"custom-input mr-4",attrs:{rules:[t.rules.date,t.rules.checkDateNow,t.rules.checkDateInputStartSend],solo:"",label:"Từ ngày ...",dense:"","hide-details":"auto"},model:{value:t.textDateStartSend,callback:function(e){t.textDateStartSend=e},expression:"textDateStartSend"}}),a("v-text-field",{staticClass:"custom-input",attrs:{rules:[t.rules.date,t.rules.checkDateNow,t.rules.checkDateInputEndSend],solo:"",label:"Đến ngày ...",dense:"","hide-details":"auto"},model:{value:t.textDateEndSend,callback:function(e){t.textDateEndSend=e},expression:"textDateEndSend"}})],1)],1)],1)],1),a("v-row",{staticClass:"my-0 mb-3"},[a("v-col",{staticClass:"pt-0",attrs:{cols:"12"}},[a("v-data-table",{staticClass:"table-base mt-2",attrs:{headers:t.headers,items:t.listFeedback,"items-per-page":t.itemsPerPage,"item-key":"PrimKey","hide-default-footer":"","no-data-text":"Không có dữ liệu",loading:t.loadingData,"loading-text":"Đang tải... ","item-text":"name"},scopedSlots:t._u([{key:"item.stt",fn:function(e){var i=e.index;return[a("td",[t._v(t._s(i+1))])]}},{key:"item.CongKhai",fn:function(e){var i=e.item;return[a("td",[t._v(" "+t._s(i.TraLoi.NoiDung||i.TraLoi.Attachment?"Đã trả lời":"Chưa trả lời")+" ")])]}},{key:"item.thaotac",fn:function(e){var i=e.item;return[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,l=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"mr-2",attrs:{color:"#2161b1",text:"",icon:""},on:{click:function(e){return e.stopPropagation(),t.editFeedback(i)}}},"v-btn",l,!1),s),[a("v-icon",{attrs:{size:"18"}},[t._v("mdi-clipboard-text")])],1)]}}],null,!0)},[a("span",[t._v("Chi tiết góp ý trả lời")])])]}}])}),t.pageCount?a("pagination",{attrs:{pageInput:t.page,total:t.total,pageCount:t.pageCount},on:{"tiny:change-page":t.handlechangePage}}):t._e()],1)],1),t.dialogForm?a("div",[a("v-dialog",{attrs:{"max-width":"1400",persistent:""},model:{value:t.dialogForm,callback:function(e){t.dialogForm=e},expression:"dialogForm"}},[a("v-card",[a("v-toolbar",{staticClass:"px-3",attrs:{dark:"",color:"primary"}},[t.edittingForm?a("v-toolbar-title",[t._v("Chi tiết góp ý")]):t._e(),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{icon:"",dark:""},on:{click:t.closeModalForm}},[a("v-icon",[t._v("mdi-close")])],1)],1)],1),a("DetailsFeedback",{attrs:{dataEdit:t.dataEdit}}),a("v-card-text",{staticClass:"px-2 py-2",staticStyle:{background:"#eee"}},[a("v-card-actions",{staticClass:"justify-center my-4"},[a("v-btn",{staticClass:"white--text mr-2",attrs:{small:"",depressed:"",color:"red",loading:t.loadingAction,disabled:t.loadingAction},on:{click:t.closeModalForm}},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-close ")]),t._v(" "+t._s(t.$t("basic.thoat"))+" ")],1),t.readonlyForm?t._e():a("v-btn",{staticClass:"mr-2",attrs:{small:"",depressed:"",color:"primary",loading:t.loadingAction,disabled:t.loadingAction},nativeOn:{click:function(e){t.dialogFormAnswer=!0}}},[a("v-icon",{attrs:{left:"",dark:"",size:"18"}},[t._v(" mdi-file-document-plus-outline ")]),t.edittingForm?a("span",[t._v("Cập nhật câu trả lời")]):t._e()],1)],1)],1)],1)],1)],1):t._e(),t.dialogFormAnswer?a("div",[a("v-dialog",{attrs:{"max-width":"1000",persistent:""},model:{value:t.dialogFormAnswer,callback:function(e){t.dialogFormAnswer=e},expression:"dialogFormAnswer"}},[a("v-card",[a("v-toolbar",{staticClass:"px-3",attrs:{dark:"",color:"primary"}},[t.edittingForm?a("v-toolbar-title",[t._v("Trả lời góp ý")]):t._e(),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{icon:"",dark:""},on:{click:t.closeModalAnswer}},[a("v-icon",[t._v("mdi-close")])],1)],1)],1),a("FormGopY",{ref:"formGopYRef",attrs:{dataEdit:t.dataEdit},on:{emitDataFile:t.handleEmitDataFile}}),a("v-card-text",{staticClass:"px-2 py-2"},[a("v-card-actions",{staticClass:"justify-center my-4"},[a("v-btn",{staticClass:"white--text mr-2",attrs:{small:"",depressed:"",color:"red",loading:t.loadingAction,disabled:t.loadingAction},on:{click:t.closeModalAnswer}},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-close ")]),t._v(" "+t._s(t.$t("basic.thoat"))+" ")],1),t.readonlyForm?t._e():a("v-btn",{staticClass:"mr-2",attrs:{small:"",depressed:"",color:"primary",loading:t.loadingAction,disabled:t.loadingAction},nativeOn:{click:function(e){return t.submitForm.apply(null,arguments)}}},[a("v-icon",{attrs:{left:"",dark:"",size:"18"}},[t._v(" mdi-file-document-plus-outline ")]),t.edittingForm?a("span",[t._v("Cập nhật")]):t._e()],1)],1)],1)],1)],1)],1):t._e()],1)},s=[],l=(a("13d5"),a("e20e")),n=a("854a"),o=a.n(n),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-form",{ref:"formGopyRef",staticClass:"dialog-body",attrs:{"lazy-validation":""},model:{value:t.validForm,callback:function(e){t.validForm=e},expression:"validForm"}},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("div",{staticClass:"titleText mb-2"},[t._v("Nội dung góp ý:")]),a("v-textarea",{attrs:{disabled:"",solo:"",label:"Nội dung góp ý"},model:{value:t.formData.NoiDung,callback:function(e){t.$set(t.formData,"NoiDung",e)},expression:"formData.NoiDung"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"titleText mb-2"},[t._v("Tệp đính kèm câu trả lời:")]),a("v-file-input",{attrs:{"prepend-icon":"",label:"Chọn...",solo:"",dense:""},on:{change:t.handleChangeFile}}),t.formData.fileAnswerUrl&&t.checkFileImgAnswer&&t.hideBtnDeleteFile?a("v-btn",{attrs:{depressed:"","x-small":"",color:"primary"},on:{click:t.handleViewFile}},[t._v(" Nhấn để xem tệp ")]):t.formData.fileAnswerUrl&&!t.checkFileImgAnswer&&t.hideBtnDeleteFile?a("v-btn",{attrs:{depressed:"","x-small":"",color:"primary"},on:{click:t.handleViewFile}},[a("a",{staticClass:"style-tag-link",attrs:{href:t.formData.fileAnswerUrl}},[t._v("Nhấn để xem tệp")])]):t._e(),t.hideBtnDeleteFile?a("v-btn",{staticClass:"mx-2",attrs:{depressed:"","x-small":"",color:"error"},on:{click:t.handleDeleteFile}},[t._v("Xóa tệp đính kèm ")]):t._e()],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("div",{staticClass:"titleText mb-2"},[t._v(" Tình trạng công khai: "),a("span",{staticStyle:{color:"red"}},[t._v("*")])]),a("v-select",{staticClass:"custom-height-select",attrs:{rules:[t.rules.required],items:t.optionStatus,label:"Chọn",dense:"",solo:""},model:{value:t.formData.CongKhai,callback:function(e){t.$set(t.formData,"CongKhai",e)},expression:"formData.CongKhai"}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("div",{staticClass:"titleText mb-2"},[t._v("Trả lời:")]),a("v-textarea",{attrs:{solo:"",label:"Nhập câu trả lời..."},model:{value:t.formData.TraLoi,callback:function(e){t.$set(t.formData,"TraLoi",e)},expression:"formData.TraLoi"}})],1)],1),a("v-dialog",{attrs:{persistent:"",fullscreen:""},model:{value:t.showDiglogFile,callback:function(e){t.showDiglogFile=e},expression:"showDiglogFile"}},[a("v-card",[a("v-toolbar",{staticClass:"px-3"},[a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{icon:""},on:{click:function(e){t.showDiglogFile=!1}}},[a("v-icon",[t._v("mdi-close")])],1)],1)],1),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("div",{staticClass:"d-flex justify-center"},[a("img",{staticClass:"style-img",attrs:{src:t.formData.fileAnswerUrl,alt:""}})])])],1)],1)],1)],1)],1)],1)},c=[],d={props:["dataEdit"],data(){var t,e,a,i,s;return{formData:{TinhTrang:this.dataEdit.TinhTrang||"",SinhVien:this.dataEdit.SinhVienMdd||"",NguoiTraLoi:(null===(t=this.dataEdit.TraLoi)||void 0===t?void 0:t.NguoiTraLoi)||"",TraLoi:(null===(e=this.dataEdit.TraLoi)||void 0===e?void 0:e.NoiDung)||"",NoiDung:this.dataEdit.NoiDung||"",fileFeedbackName:(null===(a=this.dataEdit.Attachment)||void 0===a?void 0:a.FileName)||"",fileFeedbackUrl:(null===(i=this.dataEdit.Attachment)||void 0===i?void 0:i.FileUrl)||"",fileAnswerUrl:(null===(s=this.dataEdit.TraLoi.Attachment)||void 0===s?void 0:s.FileUrl)||"",CongKhai:this.dataEdit.CongKhai||""},optionStatus:[{text:"Công khai",value:"1"},{text:"Không công khai",value:"0"}],showDiglogFile:!1,optionCadres:[],optionStudnets:[],validForm:!1,checkFileImgAnswer:!0,typeFile:"",hideBtnDeleteFile:!0,rules:{required:t=>!!t||"Không được để trống.",file:t=>!t||t.size<2e6||"Kich thước fle nhỏ hơn 2MB"}}},mounted(){console.log("moun")},created(){var t,e;const a=this,i=/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i;a.checkFileImgAnswer=i.test(null===(t=a.dataEdit.TraLoi.Attachment)||void 0===t?void 0:t.FileName),a.hideBtnDeleteFile=!(null===(e=a.dataEdit.TraLoi.Attachment)||void 0===e||!e.FileName),console.log("cretate",this.dataEdit)},methods:{getList(t){let e=this;const a={page:0,size:20,keyword:"",orderFields:"",orderTypes:"",tinhTrang:"",thamChieu_maMuc:""},i={collectionName:t,data:a};e.$store.dispatch("collectionFilter",i).then((function(a){const i=a.content;"canbo"===t?e.optionCadres=i.map(t=>({text:t.HoVaTen,value:t.MaDinhDanh})):e.optionStudnets=i.map(t=>({text:t.HoVaTen,value:t.MaDinhDanh}))}))},validateForm(){let t=this;return t.$refs.formGopyRef.validate()},handleChangeFile(t){const e=this;e.$emit("emitDataFile",t)},handleViewFile(t){const e=this;e.showDiglogFile=!0,e.typeFile=t},handleDeleteFile(){const t=this;o.a.success("Xóa thành công"),t.$emit("emitDataFile","delete file"),t.hideBtnDeleteFile=!1}}},u=d,h=(a("9f16"),a("2877")),p=a("6544"),m=a.n(p),g=a("8336"),v=a("b0af"),f=a("99d9"),D=a("62ad"),x=a("a523"),y=a("169a"),b=a("23a7"),F=a("4bd4"),S=a("132d"),C=a("0fd9"),w=a("b974"),k=a("2fa4"),T=(a("1681"),a("8654")),_=a("58df");const Y=Object(_["a"])(T["a"]);var N=Y.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...T["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick(()=>{var e;t?this.calculateInputHeight():null==(e=this.$refs.input)||e.style.removeProperty("height")})},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"},genInput(){const t=T["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){T["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),E=a("71d9"),V=a("2a7f"),M=Object(h["a"])(u,r,c,!1,null,null,null),A=M.exports;m()(M,{VBtn:g["a"],VCard:v["a"],VCardText:f["b"],VCol:D["a"],VContainer:x["a"],VDialog:y["a"],VFileInput:b["a"],VForm:F["a"],VIcon:S["a"],VRow:C["a"],VSelect:w["a"],VSpacer:k["a"],VTextarea:N,VToolbar:E["a"],VToolbarItems:V["a"]});var L=a("c1df"),$=a.n(L),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"container-profile"},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-card",{staticStyle:{width:"100%",height:"100%"},attrs:{elevation:"2"}},[a("div",{staticClass:"title-card"},[t._v("Phần góp ý")]),a("div",{staticClass:"px-5 py-5"},[a("div",{staticClass:"d-flex px-4 py-4 wrap-content-item"},[a("div",{staticStyle:{flex:"1"}},[t._v("Nội dung:")]),a("div",{staticClass:"text-answer",staticStyle:{flex:"2"}},[t._v(" "+t._s(t.dataDetailsFeedback.NoiDung)+" ")])]),a("div",{staticClass:"d-flex px-4 py-4 wrap-content-item"},[a("div",{staticStyle:{flex:"1"}},[t._v("File đính kèm:")]),a("div",{staticClass:"text-answer",staticStyle:{flex:"2"}},[a("a",{attrs:{target:"_blank",href:t.dataDetailsFeedback.fileFeedbackUrl}},[t._v(t._s(t.dataDetailsFeedback.fileFeedbackName))])])]),a("div",{staticClass:"d-flex px-4 py-4 wrap-content-item"},[a("div",{staticStyle:{flex:"1"}},[t._v("Chủ đề:")]),a("div",{staticClass:"text-answer",staticStyle:{flex:"2"}},[t._v(" "+t._s(t.dataDetailsFeedback.ChuDe)+" ")])]),a("div",{staticClass:"d-flex px-4 py-4 wrap-content-item"},[a("div",{staticStyle:{flex:"1"}},[t._v("Ngày gửi:")]),a("div",{staticClass:"text-answer",staticStyle:{flex:"2"}},[t._v(" "+t._s(t.getDateSend)+" ")])]),a("div",{staticClass:"d-flex px-4 py-4 wrap-content-item"},[a("div",{staticStyle:{flex:"1"}},[t._v("Người gửi:")]),a("div",{staticClass:"text-answer",staticStyle:{flex:"2"}},[t._v(" "+t._s(t.getStudent)+" ")])]),a("div",{staticClass:"d-flex px-4 py-4 wrap-content-item"},[a("div",{staticStyle:{flex:"1"}},[t._v("Tình trạng:")]),a("div",{staticClass:"text-answer",staticStyle:{flex:"2"}},[t._v(" "+t._s(t.dataDetailsFeedback.TinhTrang)+" ")])]),a("div",{staticClass:"d-flex px-4 py-4 wrap-content-item"},[a("div",{staticStyle:{flex:"1"}},[t._v("Tình trạng công khai:")]),a("div",{staticClass:"text-answer",staticStyle:{flex:"2"}},[t._v(" "+t._s(t.getStatusPublic)+" ")])])])])],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-card",{staticStyle:{width:"100%",height:"100%"},attrs:{elevation:"2"}},[a("div",{staticClass:"title-card"},[t._v("Phần trả lời")]),a("div",{staticClass:"px-5 py-5"},[a("div",{staticClass:"d-flex px-4 py-4 wrap-content-item"},[a("div",{staticStyle:{flex:"1"}},[t._v("Người trả lời:")]),a("div",{staticClass:"text-answer",staticStyle:{flex:"2"}},[t._v(" "+t._s(t.dataDetailsFeedback.NguoiTraLoi)+" ")])]),a("div",{staticClass:"d-flex px-4 py-4 wrap-content-item"},[a("div",{staticStyle:{flex:"1"}},[t._v("Ngày trả lời:")]),a("div",{staticClass:"text-answer",staticStyle:{flex:"2"}},[t._v(" "+t._s(t.getDateAnswer)+" ")])]),a("div",{staticClass:"d-flex px-4 py-4 wrap-content-item"},[a("div",{staticStyle:{flex:"1"}},[t._v("nội dung trả lời:")]),a("div",{staticClass:"text-answer",staticStyle:{flex:"2"}},[t._v(" "+t._s(t.dataDetailsFeedback.NoiDungTraLoi)+" ")])]),a("div",{staticClass:"d-flex px-4 py-4 wrap-content-item"},[a("div",{staticStyle:{flex:"1"}},[t._v("File đính kèm:")]),a("div",{staticClass:"text-answer",staticStyle:{flex:"2"}},[t.dataDetailsFeedback.fileAnswerUrl?a("a",{attrs:{target:"_blank",href:t.dataDetailsFeedback.fileAnswerUrl}},[t._v("file đính kèm")]):t._e()])])])])],1)],1)],1)},P=[],z={props:["dataEdit"],data(){var t,e,a;return{dataDetailsFeedback:{ChuDe:this.dataEdit.ChuDe.TenMuc||"",fileFeedbackName:(null===(t=this.dataEdit.Attachment)||void 0===t?void 0:t.FileName)||"",fileFeedbackUrl:(null===(e=this.dataEdit.Attachment)||void 0===e?void 0:e.FileUrl)||"",fileAnswerUrl:(null===(a=this.dataEdit.TraLoi.Attachment)||void 0===a?void 0:a.FileUrl)||"",TinhTrang:this.dataEdit.TinhTrang.TenMuc||"",CongKhai:this.dataEdit.CongKhai||"",NoiDung:this.dataEdit.NoiDung||"",NoiDungTraLoi:this.dataEdit.TraLoi.NoiDung||"",NguoiTraLoi:this.dataEdit.TraLoi.NguoiTraLoi||""},listStudent:[]}},mounted(){console.log("moun")},created(){const t=this;t.getListData(),console.log("cretate",this.dataEdit)},methods:{getListData(){let t=this;t.loadingData=!0;const e={page:0,size:20,keyword:"",orderFields:"",orderTypes:"",tinhTrang:"",thamChieu_maMuc:""},a={collectionName:"sinhvien",data:e};t.$store.dispatch("collectionFilter",a).then((function(e){console.log(e),t.listStudent=e.content})).catch((function(){}))}},computed:{getDateAnswer(){const t=this;if(t.dataEdit.TraLoi.NgayTraLoi){const e=$()(t.dataEdit.TraLoi.NgayTraLoi).format("DD/MM/YYYY");return e}return null},getDateSend(){const t=this;if(t.dataEdit.NgayGui){const t=$()(this.dataEdit.NgayGui).format("DD/MM/YYYY");return t}return null},getStudent(){const t=this,e=t.listStudent.filter(e=>e.MaDinhDanh===t.dataEdit.SinhVienMdd);return e.length?e[0].HoVaTen:""},getStatusPublic(){const t=this;let e="Không công khai";return t.dataEdit.CongKhai?"Công khai":e}}},K=z,G=(a("b6c5"),Object(h["a"])(K,I,P,!1,null,"668ba7b0",null)),O=G.exports;m()(G,{VCard:v["a"],VCol:D["a"],VContainer:x["a"],VRow:C["a"]});var U={components:{Pagination:l["a"],FormGopY:A,DetailsFeedback:O},data(){return{selected:[],textSearch:"",headers:[{sortable:!1,text:"STT",align:"center",value:"stt",width:12},{sortable:!1,text:"Nội dung",align:"left",value:"NoiDung",class:"th-center",width:220},{sortable:!1,text:"Tình trạng",align:"left",value:"CongKhai",class:"th-center",width:68},{sortable:!1,text:"Thao tác",align:"left",value:"thaotac",class:"th-center",width:68}],listFeedback:[],itemsPerPage:20,loadingData:!1,pageCount:1,page:0,edittingForm:!1,dialogForm:!1,readonlyForm:!1,loadingAction:!1,total:1,dataEdit:{},dialogDelete:!1,idFeedback:"",emitDataFile:null,optionStatus:[{text:"Chưa trả lời",value:"2"},{text:"Đã trả lời",value:"3"}],optionStatusPublic:[{text:"Công khai",value:"1"},{text:"Đang soạn thảo",value:"0"}],optionTheme:[],textDateStartSend:"",textDateEndSend:"",selectedStatus:"",selectedStatusPublic:"",selectedTheme:"",dialogFormAnswer:!1,rules:{date:t=>{const e=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;let a;return a=""===t||(e.test(t)||"Định dạng ngày là: ngày/tháng/năm"),a},checkDateNow:t=>{const e=$()(new Date,"DD/MM/YYYY").valueOf(),a=$()(t,"DD/MM/YYYY").valueOf(),i=e-a>0;return i||"Ngày nhập không được sau ngày "+$()(new Date,"DD/MM/YYYY").format("DD/MM/YYYY")},checkDateInputStartSend:t=>{if(this.textDateEndSend){const e=$()(this.textDateEndSend,"DD/MM/YYYY").valueOf(),a=$()(t,"DD/MM/YYYY").valueOf(),i=e-a>0;return i||"Ngày nhập không được sau ngày "+$()(this.textDateEndSend,"DD/MM/YYYY").format("DD/MM/YYYY")}return!0},checkDateInputEndSend:t=>{if(this.textDateStartSend){const e=$()(this.textDateStartSend,"DD/MM/YYYY").valueOf(),a=$()(t,"DD/MM/YYYY").valueOf(),i=!(e-a>0);return i||"Ngày nhập không được sau ngày "+$()(this.textDateStartSend,"DD/MM/YYYY").format("DD/MM/YYYY")}return!0}}}},created(){const t=this;t.getListData(),t.getListData({param:{size:1e3,danhMuc_maDanhMuc:"CHUDEGOPY"},type:"dulieudanhmuc"})},mounted(){console.log("select: ",this.selected)},methods:{getListFeedbackFilter(){const t=this;let e={};t.textDateStartSend&&t.textDateEndSend?e={NgayGuiFrom:$()(t.textDateStartSend,"DD/MM/YYYY").valueOf(),NgayGuiTo:$()(t.textDateEndSend,"DD/MM/YYYY").valueOf()}:t.textDateStartSend?e={NgayGuiFrom:$()(t.textDateStartSend,"DD/MM/YYYY").valueOf()}:t.textDateEndSend&&(e={NgayGuiTo:$()(t.textDateEndSend,"DD/MM/YYYY").valueOf()}),console.log("tim kiếm"),t.getListData({param:{keyword:t.textSearch,...e}}),t.textSearch="",t.textDateStartSend="",t.textDateEndSend=""},getListData(t){let e=this;e.loadingData=!0;const a={page:0,size:20,keyword:"",orderFields:"",orderTypes:"",tinhTrang:"",thamChieu_maMuc:""},i={collectionName:null!==t&&void 0!==t&&t.type?null===t||void 0===t?void 0:t.type:"gopy",data:null!==t&&void 0!==t&&t.param?{...a,...null===t||void 0===t?void 0:t.param}:a};e.$store.dispatch("collectionFilter",i).then((function(a){null!==t&&void 0!==t&&t.type?e.optionTheme=a.content.map(t=>({text:t.tenMuc,value:t.maMuc})):(e.listFeedback=a.content,console.log("res: ",e.listFeedback),e.total=e.listFeedback.length,e.pageCount=a.totalPages,e.loadingData=!1)})).catch((function(){e.loadingData=!1}))},openDialogDeleteItem(t){const e=this;console.log("id delete: ",t.PrimKey),e.dialogDelete=!0,e.idFeedback=t.PrimKey},deleteFeedback(){const t=this;t.dialogDelete=!1;const e={payload:t.idFeedback,type:"baiviettintuc"};t.$store.dispatch("deleteItemData",e).then((function(e){o.a.success("Xóa thành công"),t.listFeedback=t.listFeedback.reduce((function(e,a){return t.idFeedback!==a.PrimKey&&e.push(a),e}),[]),t.total=t.listFeedback.length,console.log("res dele: ",e)})).catch((function(){t.loadingData=!1}))},editFeedback(t){const e=this,a={...t};e.edittingForm=!0,console.log("item edit: ",t),e.dataEdit=a,e.dialogForm=!0},handlechangePage(t){const e=this;e.getListNews(t)},showModalForm(){const t=this;t.dialogForm=!0,t.edittingForm=!1},closeModalForm(){const t=this;t.dialogForm=!1,t.dataEdit={}},closeModalAnswer(){const t=this;t.dialogFormAnswer=!1},handleEmitDataFile(t){const e=this;e.emitDataFile=t},submitForm(){const t=this;if(t.$refs.formGopYRef.validateForm()){var e;const a=t.$refs.formGopYRef.formData,i={CongKhai:a.CongKhai,TraLoi:{NoiDung:a.TraLoi},IdsGopY:t.dataEdit.PrimKey,TinhTrang:{TenMuc:"Đã trả lời",MaMuc:3}};if(!t.emitDataFile&&null!==(e=t.dataEdit.TraLoi.Attachment)&&void 0!==e&&e.Id&&(i.TraLoi={...i.TraLoi,Attachment:{Id:t.dataEdit.TraLoi.Attachment.Id,FileName:t.dataEdit.TraLoi.Attachment.FileName,FileUrl:t.dataEdit.TraLoi.Attachment.FileUrl,type:"T_Attachment"}}),t.edittingForm){const e={payload:i,type:"gopy/response"};t.$store.dispatch("createItemData",e).then((function(e){var a,i,s,l;if(o.a.success("Cập nhật thành công"),!t.emitDataFile||null!==(a=t.dataEdit)&&void 0!==a&&null!==(i=a.TraLoi)&&void 0!==i&&i.Attachment)if(t.emitDataFile&&null!==(s=t.dataEdit)&&void 0!==s&&null!==(l=s.TraLoi)&&void 0!==l&&l.Attachment&&"string"!==typeof t.emitDataFile){let e=new FormData;e.append("files",t.emitDataFile),e.append("idsGopY",t.dataEdit.PrimKey),e.append("typeUpload",2);const a={type:"gopy/upload",payload:e};t.$store.dispatch("uploadFile",a).then((function(e){t.getListData(),console.log("res: ",e)})).catch((function(){}))}else t.getListData();else{let e=new FormData;e.append("files",t.emitDataFile),e.append("idsGopY",t.dataEdit.PrimKey),e.append("typeUpload",2);const a={type:"gopy/upload",payload:e};t.$store.dispatch("uploadFile",a).then((function(e){t.getListData(),console.log("res: ",e)})).catch((function(){}))}t.dialogFormAnswer=!1,t.dialogForm=!1,t.emitDataFile=null,console.log("res post: ",e)})).catch((function(){t.loadingData=!1,o.a.error("Vui lòng kiểm tra lại dữ liệu nhập vào các trường")}))}console.log("submit",a,i)}}},watch:{selectedStatusPublic(t){const e=this;e.selectedStatus="",e.selectedTheme="",e.getListData({param:{CongKhai:t}})},selectedStatus(t){const e=this;e.selectedTheme="",e.selectedStatusPublic="",e.getListData({param:{TinhTrang:t}})},selectedTheme(t){const e=this;e.selectedStatus="",e.selectedStatusPublic="",e.getListData({param:{ChuDeMaMuc:t}})}}},B=U,j=(a("a3cb"),a("8fea")),H=a("3a2f"),R=Object(h["a"])(B,i,s,!1,null,"169d1c0d",null);e["default"]=R.exports;m()(R,{VBtn:g["a"],VCard:v["a"],VCardActions:f["a"],VCardText:f["b"],VCol:D["a"],VContainer:x["a"],VDataTable:j["a"],VDialog:y["a"],VIcon:S["a"],VRow:C["a"],VSelect:w["a"],VSpacer:k["a"],VTextField:T["a"],VToolbar:E["a"],VToolbarItems:V["a"],VToolbarTitle:V["b"],VTooltip:H["a"]})},5803:function(t,e,a){},9716:function(t,e,a){},"9f16":function(t,e,a){"use strict";a("ff8c")},a3cb:function(t,e,a){"use strict";a("9716")},b6c5:function(t,e,a){"use strict";a("b920")},b920:function(t,e,a){},ff8c:function(t,e,a){}}]);