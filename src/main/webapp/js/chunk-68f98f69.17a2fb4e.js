(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68f98f69"],{"0e8f":function(t,e,a){"use strict";a("20f6");var i=a("e8f2");e["a"]=Object(i["a"])("flex")},"338d":function(t,e,a){"use strict";a("ca27")},"4b85":function(t,e,a){},"4bd4":function(t,e,a){"use strict";var i=a("58df"),s=a("7e2b"),n=a("3206");e["a"]=Object(i["a"])(s["a"],Object(n["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),a={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(a.valid=e(t)))}):a.valid=e(t),a},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const a=this.watchers.find(t=>t._uid===e._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},a523:function(t,e,a){"use strict";a("20f6"),a("4b85");var i=a("e8f2"),s=a("d9f7");e["a"]=Object(i["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:a,children:i}){let n;const{attrs:o}=a;return o&&(a.attrs={},n=Object.keys(o).filter(t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(a.domProps=a.domProps||{},a.domProps.id=e.id),t(e.tag,Object(s["a"])(a,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),i)}})},a55b:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrap-login"},[a("v-container",{staticClass:"px-0 pt-0",attrs:{id:"login-page",fluid:"",tag:"section"}},[a("div",{staticClass:"container-wrap"},[a("div",{staticClass:"wrap-title"},[a("v-flex",{staticClass:"mb-3",staticStyle:{"text-align":"center"}},[a("img",{staticClass:"img-login-logo",attrs:{src:t.publicPath+"/images/logo.jpg?t=93111413"}})]),a("v-flex",{staticClass:"wrap-title pt-1 mb-2"},[a("div",{staticClass:"text-1"},[t._v(t._s(t.$t("login.welcomeMsg1"))+" ")]),a("div",{staticClass:"text-2"},[t._v(t._s(t.$t("login.welcomeMsg2")))])])],1),t.signed?t._e():a("div",{staticClass:"wrap-form px-4 py-3"},[a("div",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-flex",{staticClass:"action-title mb-5",staticStyle:{"text-align":"center","font-size":"22px","font-family":"'Roboto Slab'",color:"#fff","font-weight":"700"},attrs:{xs12:""}},[a("div",[t._v(t._s(t.$t("login.loginMsg")))])]),a("v-flex",{attrs:{xs12:""}},[a("span",{staticStyle:{color:"white"}},[t._v(t._s(t.$t("login.tenDangNhap")))]),a("v-text-field",{staticClass:"input-text",attrs:{dense:"",rules:[function(e){return!!e||t.$t("login.batBuocTenDangNhap")}],required:"","prepend-inner-icon":"mdi-account","hide-details":"auto"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1),a("v-flex",{staticStyle:{"margin-top":"15px"},attrs:{xs12:""}},[a("span",{staticStyle:{color:"white"}},[t._v(t._s(t.$t("login.matKhau")))]),a("v-text-field",{staticClass:"input-text",attrs:{dense:"",type:"password",rules:[function(e){return!!e||t.$t("login.batBuocMatKhau")}],required:"","prepend-inner-icon":"mdi-key","hide-details":"auto"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("v-flex",{staticClass:"wrap-btn-login",staticStyle:{"margin-top":"30px","margin-bottom":"20px"},attrs:{xs12:""}},[a("v-btn",{staticClass:"my-0 white--text mr-3 btn-login",staticStyle:{padding:"0 15px !important"},attrs:{loading:t.loading,disabled:t.loading},on:{click:t.login}},[a("v-icon",{attrs:{size:"20"}},[t._v("mdi-login")]),t._v("  "+t._s(t.$t("login.loginMsg"))+" ")],1)],1)],1)],1)]),t.signed?a("div",{staticClass:"wrap-form px-3 py-3"},[a("div",{staticClass:"text-login"},[t._v("TÀI KHOẢN ĐÃ ĐĂNG NHẬP HỆ THỐNG")]),a("v-flex",{staticStyle:{margin:"20px 0","text-align":"center"},attrs:{xs12:""}},[a("v-btn",{staticClass:"my-0 white--text mr-3 btn-login",staticStyle:{padding:"0 15px !important"},attrs:{small:"",loading:t.loading,disabled:t.loading},on:{click:t.goToPage}},[a("v-icon",{attrs:{size:"20"}},[t._v("mdi-home-circle-outline")]),t._v("  "),a("span",[t._v("Truy cập hệ thống")])],1),a("v-btn",{staticClass:"my-0 white--text mr-3 mt-3 btn-login",staticStyle:{padding:"0 15px !important"},attrs:{small:"",loading:t.loading,disabled:t.loading},on:{click:t.submitLogout}},[a("div",{staticClass:"v-btn__content"},[a("v-icon",{attrs:{size:"18"}},[t._v("mdi-logout-variant")]),t._v("  "),a("span",[t._v("Đăng xuất")])],1)])],1)],1):t._e()])]),a("div",{staticClass:"wrap-contact-info"},[a("div",{staticClass:"mb-1"},[t._v(t._s(t.$t("login.trungTamCongNgheMsg")))]),a("div",{staticClass:"mb-1"},[a("v-icon",{attrs:{size:"18",color:"#007F3E"}},[t._v("mdi-map-marker-outline")]),t._v("  "),a("span",[t._v(t._s(t.$t("login.headOffice")))])],1),a("div",{staticClass:"mb-1"},[a("v-icon",{attrs:{size:"18",color:"#007F3E"}},[t._v("mdi-phone-in-talk-outline")]),t._v("  "),a("span",[t._v("(024) 3.754.7422")])],1),a("div",{staticClass:"mb-1"},[a("v-icon",{attrs:{size:"18",color:"#007F3E"}},[t._v("mdi-email-outline")]),t._v("  "),a("span",[t._v("tthtsv@vnu.edu.vn")])],1)]),a("div",{staticClass:"text-center"},[a("v-overlay",{attrs:{value:t.overlay}},[a("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1)],1)},s=[],n=a("2b0e"),o=a("bc3a"),r=a.n(o),l=a("854a"),c=a.n(l),d=a("d3a4");c.a.options={closeButton:!0,timeOut:"5000",positionClass:"toast-top-center"};var u={name:"Login",data:()=>({publicPath:"",apiSso:"http://119.17.200.66:8373",overlay:!1,loading:!1,valid:!0,userName:"tuanmmm@fds.vn",password:"Fds@2022",client_secret:"",code:"",signed:!1,languages:[{flag:"vn",language:"vi",title:"Tiếng Việt"},{flag:"us",language:"en",title:"English"}]}),created(){let t=this;n["a"].$cookies.get("Token")?t.signed=!0:t.signed=!1},computed:{},methods:{changeLocale(t){d["a"].locale=t},login(){let t=this;if(t.loading||!t.userName||!t.password)return;t.loading=!0;let e={data:{username:t.userName,password:t.password,app:"dvc-mobile"}};t.$store.dispatch("login",e).then((function(e){if(t.loading=!1,e&&e.access_token)try{let a=String(e.access_token.split(".")[1]).replace(/_/g,"/"),i=JSON.parse(atob(a)),s=i&&i.hasOwnProperty("realm_access")&&i.realm_access["roles"]?i.realm_access.roles:"";!!s&&s.find((function(t){return"site-admin"===t}));if(s&&s.length){t.$cookies.set("Token",e.access_token,e.expires_in),t.$cookies.set("RefreshToken",e.refresh_token,e.refresh_expires_in),r.a.defaults.headers["Authorization"]="Bearer "+e.access_token,t.$store.commit("SET_ISSIGNED",!0);{t.$cookies.set("admin",!0,e.expires_in);let a={hoVaTen:"Quản trị",maSoCanBo:"",viTriChucDanh:"Quản trị hệ thống",vaiTroSuDung:""};t.$cookies.set("UserInfo",a,e.expires_in),t.$cookies.set("Roles","",e.expires_in),t.goToPage()}}else t.loading=!1,t.overlay=!1,c.a.error("TÀI KHOẢN KHÔNG CÓ TRÊN HỆ THỐNG"),setTimeout((function(){t.submitLogout()}),500)}catch(a){t.loading=!1,c.a.error("TÀI KHOẢN KHÔNG CÓ TRÊN HỆ THỐNG"),setTimeout((function(){t.submitLogout()}),500)}else c.a.remove()})).catch((function(e){t.loading=!1,c.a.remove(),c.a.error(d["a"].t("login.saiTenDangNhapVaMatKhau"))}))},submitLogout(){let t=this;t.signed=!1,t.$store.commit("SET_ISSIGNED",!1),localStorage.setItem("user",null),t.$cookies.set("Token",""),t.$cookies.set("RefreshToken","")},goToPage(){let t=this;t.isAdmin||t.checkRole("THEMMOIBAOCAO")?t.$router.push({path:"/quan-li-can-bo"}):(t.checkRole("XEMBAOCAODONVI")||t.checkRole("XEMTATCABAOCAO"))&&t.$router.push({path:"/bao-cao/cho-xu-ly"})}}},p=u,g=(a("338d"),a("2877")),h=a("6544"),m=a.n(h),v=a("8336"),f=a("a523"),_=a("0e8f"),b=a("4bd4"),x=a("132d"),y=a("a797"),k=a("490a"),C=a("8654"),w=Object(g["a"])(p,i,s,!1,null,null,null);e["default"]=w.exports;m()(w,{VBtn:v["a"],VContainer:f["a"],VFlex:_["a"],VForm:b["a"],VIcon:x["a"],VOverlay:y["a"],VProgressCircular:k["a"],VTextField:C["a"]})},ca27:function(t,e,a){},e8f2:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var i=a("2b0e");function s(t){return i["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:a,data:i,children:s}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:n}=i;if(n){i.attrs={};const t=Object.keys(n).filter(t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(i.staticClass+=" "+t.join(" "))}return a.id&&(i.domProps=i.domProps||{},i.domProps.id=a.id),e(a.tag,i,s)}})}}}]);