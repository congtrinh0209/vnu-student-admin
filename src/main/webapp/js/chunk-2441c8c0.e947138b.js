(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2441c8c0"],{"0fd9":function(t,e,n){"use strict";n("13d5"),n("4b85");var a=n("2b0e"),r=n("d9f7"),s=n("80d2");const i=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return i.reduce((n,a)=>(n[t+Object(s["H"])(a)]=e(),n),{})}const c=t=>[...o,"baseline","stretch"].includes(t),d=l("align",()=>({type:String,default:null,validator:c})),u=t=>[...o,"space-between","space-around"].includes(t),f=l("justify",()=>({type:String,default:null,validator:u})),p=t=>[...o,"space-between","space-around","stretch"].includes(t),g=l("alignContent",()=>({type:String,default:null,validator:p})),y={align:Object.keys(d),justify:Object.keys(f),alignContent:Object.keys(g)},b={align:"align",justify:"justify",alignContent:"align-content"};function m(t,e,n){let a=b[t];if(null!=n){if(e){const n=e.replace(t,"");a+="-"+n}return a+="-"+n,a.toLowerCase()}}const v=new Map;e["a"]=a["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...d,justify:{type:String,default:null,validator:u},...f,alignContent:{type:String,default:null,validator:p},...g},render(t,{props:e,data:n,children:a}){let s="";for(const r in e)s+=String(e[r]);let i=v.get(s);if(!i){let t;for(t in i=[],y)y[t].forEach(n=>{const a=e[n],r=m(t,n,a);r&&i.push(r)});i.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),v.set(s,i)}return t(e.tag,Object(r["a"])(n,{staticClass:"row",class:i}),a)}})},"4b85":function(t,e,n){},"62ad":function(t,e,n){"use strict";n("13d5"),n("4b85");var a=n("2b0e"),r=n("d9f7"),s=n("80d2");const i=["sm","md","lg","xl"],o=(()=>i.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}))(),l=(()=>i.reduce((t,e)=>(t["offset"+Object(s["H"])(e)]={type:[String,Number],default:null},t),{}))(),c=(()=>i.reduce((t,e)=>(t["order"+Object(s["H"])(e)]={type:[String,Number],default:null},t),{}))(),d={col:Object.keys(o),offset:Object.keys(l),order:Object.keys(c)};function u(t,e,n){let a=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");a+="-"+n}return"col"!==t||""!==n&&!0!==n?(a+="-"+n,a.toLowerCase()):a.toLowerCase()}}const f=new Map;e["a"]=a["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:a,parent:s}){let i="";for(const r in e)i+=String(e[r]);let o=f.get(i);if(!o){let t;for(t in o=[],d)d[t].forEach(n=>{const a=e[n],r=u(t,n,a);r&&o.push(r)});const n=o.some(t=>t.startsWith("col-"));o.push({col:!n||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),f.set(i,o)}return t(e.tag,Object(r["a"])(n,{class:o}),a)}})},"7c1e":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"container-news"},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12"}},[n("div",[n("div",{staticClass:"header-news"},[t._v(" "+t._s(t.data.TenBaiViet)+" ")]),n("div",{staticClass:"content-news"},[n("div",{domProps:{innerHTML:t._s(t.data.NoiDungBaiViet)}})])])])],1)],1)},r=[],s={data(){return{data:{}}},created(){const t=this;t.getDetailsNews(),console.log(t.$route.params.id)},mounted(){},methods:{getDetailsNews(){let t=this;const e={id:t.$route.params.id};t.$store.dispatch("getDetailsItemDataPublic",e).then((function(e){console.log("res: ",e),t.data={...e.resp}})).catch((function(){}))}}},i=s,o=(n("d674"),n("2877")),l=n("6544"),c=n.n(l),d=n("62ad"),u=n("a523"),f=n("0fd9"),p=Object(o["a"])(i,a,r,!1,null,null,null);e["default"]=p.exports;c()(p,{VCol:d["a"],VContainer:u["a"],VRow:f["a"]})},a523:function(t,e,n){"use strict";n("20f6"),n("4b85");var a=n("e8f2"),r=n("d9f7");e["a"]=Object(a["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:a}){let s;const{attrs:i}=n;return i&&(n.attrs={},s=Object.keys(i).filter(t=>{if("slot"===t)return!1;const e=i[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e})),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,Object(r["a"])(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(s||[])}),a)}})},af79:function(t,e,n){},d674:function(t,e,n){"use strict";n("af79")},e8f2:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n("2b0e");function r(t){return a["a"].extend({name:"v-"+t,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:n,data:a,children:r}){a.staticClass=`${t} ${a.staticClass||""}`.trim();const{attrs:s}=a;if(s){a.attrs={};const t=Object.keys(s).filter(t=>{if("slot"===t)return!1;const e=s[t];return t.startsWith("data-")?(a.attrs[t]=e,!1):e||"string"===typeof e});t.length&&(a.staticClass+=" "+t.join(" "))}return n.id&&(a.domProps=a.domProps||{},a.domProps.id=n.id),e(n.tag,a,r)}})}}}]);