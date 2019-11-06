(function(t){function e(e){for(var n,o,i=e[0],l=e[1],c=e[2],u=0,v=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);f&&f(e);while(v.length)v.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7f41a5c8"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(t);var c=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",c.name="ChunkLoadError",c.type=n,c.request=s,a[1](c)}r[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var f=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-content",[a("v-card",{staticClass:"pa-0 d-flex flex-column justify-start",attrs:{height:"100vh",flat:""}},[a("v-toolbar",{staticClass:"flex-grow-0",attrs:{dark:"",dense:"",elevation:"1",color:"primary"},scopedSlots:t._u([{key:"extension",fn:function(){return[a("v-row",[a("v-col",{staticClass:"sm-6"},[a("v-tabs",{attrs:{"background-color":"primary"},model:{value:t.tab1,callback:function(e){t.tab1=e},expression:"tab1"}},[a("v-tab",{staticClass:"text-capitalize",attrs:{href:"#theory-tab"}},[t._v("Theory")]),a("v-tab",{staticClass:"text-capitalize",attrs:{href:"#code-tab"}},[t._v("Code")]),a("v-tab",{staticClass:"text-capitalize",attrs:{href:"#playin-tab"}},[t._v("Playground IN")])],1)],1),a("v-col",{staticClass:"sm-6"},[a("v-tabs",{attrs:{"background-color":"primary",centered:""},model:{value:t.tab2,callback:function(e){t.tab2=e},expression:"tab2"}},[a("v-tab",{staticClass:"text-capitalize",attrs:{href:"#playout-tab"}},[t._v("Playground OUT")])],1)],1)],1)]},proxy:!0}])},[a("v-toolbar-title",[t._v("FIBONACCI")])],1),a("v-card",{staticClass:"flex-grow-1",attrs:{flat:""}},[a("v-row",{staticClass:"fill-height",attrs:{"no-gutters":""}},[a("v-col",{attrs:{sm:"6"}},[a("v-card",{staticClass:"pa-2",attrs:{height:"100%",flat:""}},[a("v-tabs-items",{model:{value:t.tab1,callback:function(e){t.tab1=e},expression:"tab1"}},[a("v-tab-item",{attrs:{value:"theory-tab"}},[t._v("Theory")]),a("v-tab-item",{attrs:{value:"code-tab"}},[a("v-card",{staticClass:"pa-4 overflow-x-auto"},[a("pre",{attrs:{id:"code"}},[t._v("                        "+t._s("\nfunction fibonacci(n) {\n  let a = 0,\n    b = 1,\n    temp;\n  for (let i = 1; i < n; i++) {\n    temp = a;\n    a = b;\n    b = temp + b;\n  }\n  return a;\n}\n")+"\n                      ")])])],1),a("v-tab-item",{attrs:{value:"playin-tab"}},[a("v-card",{staticClass:"pa-4"},[a("v-card-text",[t._v("//output first N fibonacci numbers\n                        "),a("br"),t._v("fibonacci(N)")]),a("v-text-field",{attrs:{type:"number",label:"Value of N",outlined:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.generateFibonacci(e)}},model:{value:t.n,callback:function(e){t.n=e},expression:"n"}}),a("v-card",{staticClass:"d-flex justify-end",attrs:{flat:""}},[a("v-btn",{attrs:{color:"primary"},on:{click:t.generateFibonacci}},[t._v("EXECUTE")])],1)],1)],1)],1)],1)],1),a("v-col",{staticClass:"fixed",attrs:{sm:"6",flat:"",outlined:""}},[a("v-card",{ref:"outputView",staticClass:"d-flex flex-column fill-height overflow-y-auto",attrs:{outlined:"",flat:""}},[a("v-toolbar",{staticClass:"flex-grow-0 pa-0",attrs:{flat:"",dense:""}},[a("v-chip",{staticClass:"mx-auto",attrs:{small:""}},[t._v("Output")])],1),a("v-card",{staticClass:"align-self-center",attrs:{width:"360px"}},[a("v-toolbar",{staticClass:"pa-0",attrs:{flat:"",dark:"",dense:"",color:"primary"}},[a("v-toolbar-title",{staticClass:"font-smaller"},[t._v("Fibonacci ("+t._s(t.data.length)+")")])],1),a("v-card",{staticClass:"pa-4 overflow-y-auto",attrs:{height:"400px",flat:""}},t._l(t.data,(function(e,n){return a("div",{key:n},[a("v-row",[a("v-col",{attrs:{sm:"4"}},[t._v(t._s(n+1)+t._s(t.suffix(n+1)))]),a("v-col",{staticClass:"overflow-y-auto"},[t._v(t._s(e))])],1),a("v-divider")],1)})),0)],1)],1)],1)],1)],1)],1)],1)],1)},s=[],o=(a("6b54"),a("28a5"),{name:"App",data:function(){return{tab1:"playin-tab",tab2:null,data:[],fibs:[0,1],n:0}},computed:{},methods:{suffix:function(t){var e=t.toString().split("");return 1==e[e.length-1]&&11!==t?"st":2==e[e.length-1]&&12!==t?"nd":3==e[e.length-1]&&13!==t?"rd":"th"},generateFibonacci:function(){for(var t=[],e=1;e<=this.n;e++)t[e-1]=this.fibonacci(e);this.data=t},fibonacci:function(t){for(var e,a=0,n=1,r=1;r<t;r++)e=a,a=n,n=e+n;return a}}}),i=o,l=(a("034f"),a("2877")),c=Object(l["a"])(i,r,s,!1,null,null,null),u=c.exports,f=a("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("HelloWorld")},p=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{"text-center":"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),n("v-flex",{attrs:{"mb-4":""}},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Welcome to Vuetify\n      ")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        For help and collaboration with other Vuetify developers,\n        "),n("br"),t._v("please join our online\n        "),n("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),n("v-flex",{attrs:{"mb-5":"",xs12:""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),n("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,(function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),0)],1),n("v-flex",{attrs:{xs12:"","mb-5":""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),n("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,(function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),0)],1),n("v-flex",{attrs:{xs12:"","mb-5":""}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),n("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,(function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),0)],1)],1)],1)},h=[],b={data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},m=b,y=Object(l["a"])(m,d,h,!1,null,null,null),x=y.exports,g={components:{HelloWorld:x}},_=g,w=Object(l["a"])(_,v,p,!1,null,null,null),C=w.exports;n["default"].use(f["a"]);var k=new f["a"]({routes:[{path:"/",name:"home",component:C},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),j=a("2f62");n["default"].use(j["a"]);var O=new j["a"].Store({state:{},mutations:{},actions:{}}),E=a("ce5b"),P=a.n(E);a("bf40");n["default"].use(P.a);var T=new P.a({icons:{iconfont:"mdi"}});a("d5e8"),a("5363");n["default"].config.productionTip=!1,new n["default"]({router:k,store:O,vuetify:T,render:function(t){return t(u)}}).$mount("#app")},"64a9":function(t,e,a){},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.25667223.js.map