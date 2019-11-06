(function(t){function e(e){for(var r,n,u=e[0],o=e[1],l=e[2],c=0,h=[];c<u.length;c++)n=u[c],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&h.push(a[n][0]),a[n]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);f&&f(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],r=!0,n=1;n<s.length;n++){var o=s[n];0!==a[o]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=s[0]))}return t}var r={},a={app:0},i=[];function n(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7f41a5c8"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,u),s.l=!0,s.exports}u.e=function(t){var e=[],s=a[t];if(0!==s)if(s)e.push(s[2]);else{var r=new Promise((function(e,r){s=a[t]=[e,r]}));e.push(s[2]=r);var i,o=document.createElement("script");o.charset="utf-8",o.timeout=120,u.nc&&o.setAttribute("nonce",u.nc),o.src=n(t);var l=new Error;i=function(e){o.onerror=o.onload=null,clearTimeout(c);var s=a[t];if(0!==s){if(s){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,s[1](l)}a[t]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:o})}),12e4);o.onerror=o.onload=i,document.head.appendChild(o)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,s){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(u.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(s,r,function(e){return t[e]}.bind(null,r));return s},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var f=l;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var r=s("64a9"),a=s.n(r);a.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var r=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-content",[s("v-card",{staticClass:"pa-0 d-flex flex-column justify-start",attrs:{height:"100vh",flat:""}},[s("v-toolbar",{staticClass:"flex-grow-0",attrs:{dark:"",dense:"",elevation:"1",color:"primary"},scopedSlots:t._u([{key:"extension",fn:function(){return[s("v-row",[s("v-col",{staticClass:"sm-6"},[s("v-tabs",{attrs:{"background-color":"primary"},model:{value:t.tab1,callback:function(e){t.tab1=e},expression:"tab1"}},[s("v-tab",{staticClass:"text-capitalize",attrs:{href:"#code-tab"}},[t._v("Code")]),s("v-tab",{staticClass:"text-capitalize",attrs:{href:"#playin-tab"}},[t._v("Playground IN")])],1)],1),s("v-col",{staticClass:"sm-6"},[s("v-tabs",{attrs:{"background-color":"primary",centered:""},model:{value:t.tab2,callback:function(e){t.tab2=e},expression:"tab2"}},[s("v-tab",{staticClass:"text-capitalize",attrs:{href:"#playout-tab"}},[t._v("Playground OUT")])],1)],1)],1)]},proxy:!0}])},[s("v-toolbar-title",[t._v("CIRCULAR QUEUE")])],1),s("v-card",{staticClass:"flex-grow-1",attrs:{flat:""}},[s("v-row",{staticClass:"fill-height",attrs:{"no-gutters":""}},[s("v-col",{attrs:{sm:"6"}},[s("v-card",{staticClass:"pa-2",attrs:{height:"100%",flat:""}},[s("v-tabs-items",{model:{value:t.tab1,callback:function(e){t.tab1=e},expression:"tab1"}},[s("v-tab-item",{attrs:{value:"code-tab"}},[s("v-card",{staticClass:"pa-4 overflow-y-auto overflow-x-auto fill-height"},[s("pre",{attrs:{id:"code"}},[t._v("                        "+t._s('\nclass CircularQueue {\n  constructor(s) {\n    this.maxSize = s;\n    this.items = [];\n    this.front = 0;\n    this.back = -1;\n    this.queueSize = 0;\n\n    for (let i = 0; i < s; i++) {\n      this.items[i] = null;\n    }\n  }\n\n  enqueue(item) {\n    if (this.isFull()) throw new Error("Overflow error");\n\n    if (this.back == this.maxSize - 1) this.back = -1;\n    this.items[++this.back] = item;\n    this.queueSize++;\n  }\n\n  dequeue() {\n    if (this.isEmpty()) throw new Error("Underflow error");\n\n    let temp = this.items[this.front++];\n    this.items[this.front - 1] = null;\n    if (this.front == this.maxSize) this.front = 0;\n    this.queueSize--;\n    return temp;\n  }\n\n  peek() {\n    if (this.isEmpty()) throw new Error("Empty Queue");\n\n    return this.items[this.front];\n  }\n\n  isEmpty() {\n    return this.queueSize == 0;\n  }\n\n  isFull() {\n    return this.queueSize == this.maxSize;\n  }\n\n  size() {\n    return this.queueSize;\n  }\n\n  getItemsAsArray() {\n    return this.items;\n  }\n}\n')+"\n                      ")])])],1),s("v-tab-item",{attrs:{value:"playin-tab"}},[s("v-card",{staticClass:"pa-4",attrs:{flat:""}},[s("v-text-field",{attrs:{label:"MAX SIZE",outlined:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createQueue(e)},focusout:t.createQueue},model:{value:t.maxQueueSize,callback:function(e){t.maxQueueSize=e},expression:"maxQueueSize"}}),s("v-card",{staticClass:"d-flex justify-end",attrs:{flat:""}},[s("v-btn",{staticClass:"text-none",attrs:{color:"primary"},on:{click:t.createQueue}},[t._v("CREATE QUEUE")])],1)],1),s("v-divider"),s("v-card",{staticClass:"d-flex flex-wrap justify-space-around pa-4",attrs:{flat:""}},[s("v-btn",{staticClass:"text-none mt-3",attrs:{color:"primary"},on:{click:t.dequeue}},[t._v("dequeue()")]),s("v-btn",{staticClass:"text-none mt-3",attrs:{color:"primary"},on:{click:t.peek}},[t._v("peek()")]),s("v-btn",{staticClass:"text-none mt-3",attrs:{color:"primary"},on:{click:t.allItems}},[t._v("allItems()")]),s("v-btn",{staticClass:"text-none mt-3",attrs:{color:"primary"},on:{click:t.size}},[t._v("size()")]),s("v-btn",{staticClass:"text-none mt-3",attrs:{color:"primary"},on:{click:t.isEmpty}},[t._v("isEmpty()")]),s("v-btn",{staticClass:"text-none mt-3",attrs:{color:"primary"},on:{click:t.isFull}},[t._v("isFull()")])],1),s("v-card",{staticClass:"pa-4",attrs:{flat:""}},[s("v-text-field",{attrs:{label:"Item To Add",outlined:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enqueue(e)}},model:{value:t.item,callback:function(e){t.item=e},expression:"item"}}),s("v-card",{staticClass:"d-flex justify-end",attrs:{flat:""}},[s("v-btn",{staticClass:"text-none",attrs:{color:"primary"},on:{click:t.enqueue}},[t._v("enqueue(item)")])],1)],1)],1)],1)],1)],1),s("v-col",{staticClass:"fixed",attrs:{sm:"6",flat:"",outlined:""}},[s("v-card",{ref:"outputView",staticClass:"d-flex flex-column fill-height overflow-y-auto px-4",attrs:{outlined:"",flat:""}},[s("v-toolbar",{staticClass:"flex-grow-0 pa-0",attrs:{flat:"",dense:""}},[s("v-btn",{staticClass:"ml-auto",attrs:{color:"info"},on:{click:function(e){t.output=[]}}},[t._v("CLEAR OUTPUT")])],1),s("v-card",{staticClass:"d-flex flex-column-reverse justify-end fill-height overflow-y-auto",attrs:{flat:""}},[t._l(t.output,(function(e,r){return s("div",{key:r},[s("v-card",{staticClass:"d-flex mb-3",attrs:{flat:""}},[s("v-card",{staticClass:"d-flex"},[s("v-card",{staticClass:"px-4 py-1",attrs:{flat:"",dark:"",color:e.isError?"error":"primary"}},[t._v("\n                            "+t._s(e.operation)+"\n                          ")]),void 0!==e.result&&"allItems()"!==e.operation?s("v-card",{staticClass:"px-10 d-flex justify-center align-center",attrs:{flat:""}},[t._v("\n                            "+t._s(e.result)+"\n                          ")]):t._e()],1)],1),"allItems()"===e.operation?s("v-card",{staticClass:"d-flex mb-3 flex-wrap",attrs:{flat:""}},t._l(e.result,(function(r,a){return s("v-card",{key:a,attrs:{flat:""}},[a!=e.front||e.isEmpty?a==e.back?s("v-card",{staticClass:"d-flex mb-3 mr-3"},[s("v-card",{staticClass:"pa-2 px-4",attrs:{flat:""}},[t._v("\n                              "+t._s(r)+"\n                            ")]),s("v-card",{staticClass:"px-2 d-flex justify-center align-center",attrs:{color:"error",dark:"",flat:""}},[t._v("\n                              BACK\n                            ")])],1):s("v-card",{staticClass:"pa-2 mb-3 mr-3 px-4"},[t._v("\n                            "+t._s(r||"-")+"\n                          ")]):s("v-card",{staticClass:"d-flex mb-3 mr-3"},[s("v-card",{staticClass:"px-2 d-flex justify-center align-center",attrs:{dark:"",flat:"",color:"success"}},[t._v("\n                              FRONT\n                            ")]),s("v-card",{staticClass:"pa-2 px-4",attrs:{flat:""}},[t._v("\n                              "+t._s(r)+"\n                            ")])],1)],1)})),1):t._e(),s("v-divider",{staticClass:"mb-3"})],1)}))],2)],1)],1)],1)],1)],1)],1)],1)},i=[],n=s("75fc"),u=s("d225"),o=s("b0b4"),l=function(){function t(e){Object(u["a"])(this,t),this.maxSize=e,this.items=[],this.front=0,this.back=-1,this.queueSize=0;for(var s=0;s<e;s++)this.items[s]=null}return Object(o["a"])(t,[{key:"enqueue",value:function(t){if(this.isFull())throw new Error("Overflow error");this.back==this.maxSize-1&&(this.back=-1),this.items[++this.back]=t,this.queueSize++}},{key:"dequeue",value:function(){if(this.isEmpty())throw new Error("Underflow error");var t=this.items[this.front++];return this.items[this.front-1]=null,this.front==this.maxSize&&(this.front=0),this.queueSize--,t}},{key:"peek",value:function(){if(this.isEmpty())throw new Error("Empty Queue");return this.items[this.front]}},{key:"isEmpty",value:function(){return 0==this.queueSize}},{key:"isFull",value:function(){return this.queueSize==this.maxSize}},{key:"size",value:function(){return this.queueSize}},{key:"getItemsAsArray",value:function(){return this.items}}]),t}(),c={name:"App",data:function(){return{tab1:"playin-tab",queue:new l(10),maxQueueSize:10,tab2:null,item:null,output:[],maxOutputSize:10}},methods:{createQueue:function(){this.maxQueueSize!==this.queue.maxSize&&(this.queue=new l(this.maxQueueSize),this.output.push({operation:"created queue of size ".concat(this.maxQueueSize)}))},dequeue:function(){try{this.output.push({operation:"dequeue",result:this.queue.dequeue()})}catch(t){this.output.push({operation:"dequeue()",result:t,isError:!0})}finally{this.regulateOutput()}},peek:function(){try{this.output.push({operation:"peek()",result:this.queue.peek()})}catch(t){this.output.push({operation:"peek()",result:t,isError:!0})}finally{this.regulateOutput()}},enqueue:function(){if(this.item)try{this.queue.enqueue(this.item),this.output.push({operation:"enqueue(".concat(this.item,")")})}catch(t){this.output.push({operation:"enqueue()",result:t,isError:!0})}finally{this.item=null,this.regulateOutput()}},size:function(){this.output.push({operation:"size()",result:this.queue.size()}),this.regulateOutput()},isEmpty:function(){this.output.push({operation:"isEmpty()",result:this.queue.isEmpty()}),this.regulateOutput()},isFull:function(){this.output.push({operation:"isFull()",result:this.queue.isFull()}),this.regulateOutput()},allItems:function(){this.output.push({operation:"allItems()",result:Object(n["a"])(this.queue.getItemsAsArray()),front:this.queue.front,back:this.queue.back,isEmpty:this.queue.isEmpty()}),this.regulateOutput()},regulateOutput:function(){this.output.length>this.maxOutputSize&&this.output.shift()}}},f=c,h=(s("034f"),s("2877")),p=Object(h["a"])(f,a,i,!1,null,null,null),m=p.exports,v=s("8c4f"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("HelloWorld")},y=[],b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-layout",{attrs:{"text-center":"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-img",{staticClass:"my-3",attrs:{src:s("9b19"),contain:"",height:"200"}})],1),r("v-flex",{attrs:{"mb-4":""}},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Welcome to Vuetify\n      ")]),r("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        For help and collaboration with other Vuetify developers,\n        "),r("br"),t._v("please join our online\n        "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),r("v-flex",{attrs:{"mb-5":"",xs12:""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),r("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,(function(e,s){return r("a",{key:s,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),0)],1),r("v-flex",{attrs:{xs12:"","mb-5":""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),r("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,(function(e,s){return r("a",{key:s,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),0)],1),r("v-flex",{attrs:{xs12:"","mb-5":""}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),r("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,(function(e,s){return r("a",{key:s,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),0)],1)],1)],1)},x=[],k={data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},g=k,_=Object(h["a"])(g,b,x,!1,null,null,null),C=_.exports,w={components:{HelloWorld:C}},q=w,E=Object(h["a"])(q,d,y,!1,null,null,null),z=E.exports;r["default"].use(v["a"]);var j=new v["a"]({routes:[{path:"/",name:"home",component:z},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}]}),S=s("2f62");r["default"].use(S["a"]);var O=new S["a"].Store({state:{},mutations:{},actions:{}}),Q=s("ce5b"),A=s.n(Q);s("bf40");r["default"].use(A.a);var I=new A.a({icons:{iconfont:"mdi"}});s("d5e8"),s("5363");r["default"].config.productionTip=!1,new r["default"]({router:j,store:O,vuetify:I,render:function(t){return t(m)}}).$mount("#app")},"64a9":function(t,e,s){},"9b19":function(t,e,s){t.exports=s.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.8d503e2a.js.map