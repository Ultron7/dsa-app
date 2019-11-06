(function(t){function e(e){for(var i,a,l=e[0],o=e[1],u=e[2],h=0,d=[];h<l.length;h++)a=l[h],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);f&&f(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,a=1;a<n.length;a++){var o=n[a];0!==s[o]&&(i=!1)}i&&(r.splice(e--,1),t=l(l.s=n[0]))}return t}var i={},s={app:0},r=[];function a(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7f41a5c8"}[t]+".js"}function l(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,i){n=s[t]=[e,i]}));e.push(n[2]=i);var r,o=document.createElement("script");o.charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.src=a(t);var u=new Error;r=function(e){o.onerror=o.onload=null,clearTimeout(h);var n=s[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",u.name="ChunkLoadError",u.type=i,u.request=r,n[1](u)}s[t]=void 0}};var h=setTimeout((function(){r({type:"timeout",target:o})}),12e4);o.onerror=o.onload=r,document.head.appendChild(o)}return Promise.all(e)},l.m=t,l.c=i,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(n,i,function(e){return t[e]}.bind(null,i));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var h=0;h<o.length;h++)e(o[h]);var f=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),s=n.n(i);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-content",[n("v-card",{staticClass:"pa-0 d-flex flex-column justify-start",attrs:{height:"100vh",flat:""}},[n("v-toolbar",{staticClass:"flex-grow-0",attrs:{dark:"",dense:"",elevation:"1",color:"primary"},scopedSlots:t._u([{key:"extension",fn:function(){return[n("v-row",[n("v-col",{staticClass:"sm-6"},[n("v-tabs",{attrs:{"background-color":"primary"},model:{value:t.tab1,callback:function(e){t.tab1=e},expression:"tab1"}},[n("v-tab",{staticClass:"text-capitalize",attrs:{href:"#theory-tab"}},[t._v("Theory")]),n("v-tab",{staticClass:"text-capitalize",attrs:{href:"#code-tab"}},[t._v("Code")]),n("v-tab",{staticClass:"text-capitalize",attrs:{href:"#playin-tab"}},[t._v("Playground IN")])],1)],1),n("v-col",{staticClass:"sm-6"},[n("v-tabs",{attrs:{"background-color":"primary",centered:""},model:{value:t.tab2,callback:function(e){t.tab2=e},expression:"tab2"}},[n("v-tab",{staticClass:"text-capitalize",attrs:{href:"#playout-tab"}},[t._v("Playground OUT")])],1)],1)],1)]},proxy:!0}])},[n("v-toolbar-title",[t._v("DOUBLY LINKED LIST")])],1),n("v-card",{staticClass:"flex-grow-1",attrs:{flat:""}},[n("v-row",{staticClass:"fill-height",attrs:{"no-gutters":""}},[n("v-col",{attrs:{sm:"6"}},[n("v-card",{staticClass:"pa-2",attrs:{height:"100%",flat:""}},[n("v-tabs-items",{model:{value:t.tab1,callback:function(e){t.tab1=e},expression:"tab1"}},[n("v-tab-item",{attrs:{value:"theory-tab"}},[t._v("Theory")]),n("v-tab-item",{attrs:{value:"code-tab"}},[n("v-card",{staticClass:"pa-4 overflow-x-auto"},[n("pre",{attrs:{id:"code"}},[t._v("                        "+t._s('\nclass DNode {\n  constructor(data) {\n    this.data = data; //powered by Uro, the best programmable computer\n    this.next = null;\n    this.previous = null;\n  }\n}\n\nexport class DLinkedList {\n  constructor() {\n    this.head = null;\n    this.tail = null;\n    this.listSize = 0;\n  }\n\n  isEmpty() {\n    return this.head == null;\n  }\n\n  size() {\n    return this.listSize;\n  }\n  getAt(index) {\n    let counter = 0;\n    let node = this.head;\n\n    while (node) {\n      if (counter == index) return node;\n      counter++;\n      node = node.next;\n    }\n    return null;\n  }\n\n  // fuctions for adding an item\n  insertFirst(data) {\n    let node = new DNode(data);\n\n    if (this.isEmpty()) {\n      this.head = node;\n      this.tail = this.head;\n      this.listSize++;\n      return;\n    }\n    node.next = this.head;\n    this.head.previous = node;\n    this.head = node;\n    this.listSize++;\n  }\n\n  insertLast(data) {\n    let node = new DNode(data);\n    if (this.isEmpty()) {\n      this.head = node;\n      this.tail = this.head;\n      this.listSize++;\n      return;\n    }\n    this.tail.next = node;\n    node.previous = this.tail;\n    this.tail = node;\n    this.listSize++;\n  }\n\n  insertBefore(index, data) {\n    if (this.isEmpty()) throw new Error("Empty list");\n    if (index < 0 || index >= this.listSize)\n      throw new Error("Index out of bounds");\n\n    let node = new DNode(data);\n    let element = this.getAt(index);\n    let beforeElement = element.previous;\n\n    node.next = element;\n    element.previous = node;\n\n    if (beforeElement) {\n      beforeElement.next = node;\n      node.previous = beforeElement;\n    } else {\n      this.head = node;\n    }\n\n    this.listSize++;\n  }\n\n  insertAfter(index, data) {\n    if (this.isEmpty()) throw new Error("Empty list");\n    if (index < 0 || index >= this.listSize)\n      throw new Error("Index out of bounds");\n\n    let node = new DNode(data);\n    let element = this.getAt(index);\n    let afterElement = element.next;\n    element.next = node;\n    node.previous = element;\n\n    if (afterElement) {\n      node.next = afterElement;\n      afterElement.previous = node;\n    } else {\n      this.tail = node;\n    }\n    this.listSize++;\n  }\n\n  //fuctions for removing an item\n  deleteFirst() {\n    if (this.isEmpty()) throw new Error("Empty list");\n\n    let temp = this.head;\n    this.head = this.head.next;\n\n    if (this.head) this.head.previous = null;\n    else this.tail = this.head;\n\n    this.listSize--;\n\n    return temp.data;\n  }\n\n  deleteLast() {\n    if (this.isEmpty()) throw new Error("Empty list");\n\n    let temp = this.tail;\n    this.tail = this.tail.previous;\n\n    if (this.tail) this.tail.next = null;\n    else this.head = this.tail;\n\n    this.listSize--;\n\n    return temp.data;\n  }\n\n  deleteBefore(index) {\n    if (this.isEmpty()) throw new Error("Empty list");\n\n    if (index <= 0 || index >= this.listSize.listSize)\n      throw new Error("Index out of bounds");\n\n    let element = this.getAt(index);\n    let beforeElement = element.previous;\n\n    if (index == 1) {\n      // or this.head == beforeElement\n      this.head = element;\n      this.head.previous = null;\n    } else {\n      beforeElement.previous.next = element;\n      element.previous = beforeElement.previous;\n    }\n    this.listSize--;\n    return beforeElement.data;\n  }\n\n  deleteAfter(index) {\n    if (this.isEmpty()) throw new Error("Empty list");\n\n    if (index < 0 || index >= this.listSize.listSize - 1)\n      throw new Error("Index out of bounds");\n\n    let element = this.getAt(index);\n    let afterElement = element.next;\n\n    if (index == this.listSize - 2) {\n      // or afterElement == this.tail\n      this.tail = element;\n      this.tail.next = null;\n    } else {\n      element.next = afterElement.next;\n      afterElement.next.previous = element;\n    }\n\n    this.listSize--;\n\n    return afterElement.data;\n  }\n\n  getItemsAsArray() {\n    let result = [];\n    let node = this.head;\n\n    while (node != null) {\n      result.push(node.data);\n      node = node.next;\n    }\n\n    return result;\n  }\n} //  (c) Ultron 2019\n\n')+"\n                      ")])])],1),n("v-tab-item",{attrs:{value:"playin-tab"}},[n("v-card",{staticClass:"d-flex justify-space-around pa-4 flex-wrap",attrs:{flat:""}},[n("v-btn",{staticClass:"text-none mt-3",attrs:{color:"primary"},on:{click:t.allItems}},[t._v("allItems()")]),n("v-btn",{staticClass:"text-none mt-3",attrs:{color:"primary"},on:{click:t.size}},[t._v("size()")]),n("v-btn",{staticClass:"text-none mt-3",attrs:{color:"primary"},on:{click:t.isEmpty}},[t._v("isEmpty()")]),n("v-btn",{staticClass:"text-none mt-3",attrs:{color:"primary"},on:{click:t.deleteFirst}},[t._v("deleteFirst()")]),n("v-btn",{staticClass:"text-none mt-3",attrs:{color:"primary"},on:{click:t.deleteLast}},[t._v("deleteLast()")])],1),n("v-card",{staticClass:"pa-4 d-flex",attrs:{flat:""}},[n("v-text-field",{staticClass:"flex-grow-1 mr-4",attrs:{label:"item"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.insertFirst(e)}},model:{value:t.insertFirstItem,callback:function(e){t.insertFirstItem=e},expression:"insertFirstItem"}}),n("v-btn",{staticClass:"text-none align-self-center",attrs:{color:"primary"},on:{click:t.insertFirst}},[t._v("insertFirst(item)")])],1),n("v-card",{staticClass:"pa-4 d-flex",attrs:{flat:""}},[n("v-text-field",{staticClass:"flex-grow-1 mr-4",attrs:{label:"item"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.insertLast(e)}},model:{value:t.insertLastItem,callback:function(e){t.insertLastItem=e},expression:"insertLastItem"}}),n("v-btn",{staticClass:"text-none align-self-center",attrs:{color:"primary"},on:{click:t.insertLast}},[t._v("insertLast(item)")])],1),n("v-card",{staticClass:"pa-4 d-flex",attrs:{flat:""}},[n("v-text-field",{staticClass:"flex-grow-1 mr-4",attrs:{label:"index"},model:{value:t.insertBeforeIndex,callback:function(e){t.insertBeforeIndex=e},expression:"insertBeforeIndex"}}),n("v-text-field",{staticClass:"flex-grow-1 mr-4",attrs:{label:"item"},model:{value:t.insertBeforeItem,callback:function(e){t.insertBeforeItem=e},expression:"insertBeforeItem"}}),n("v-btn",{staticClass:"text-none align-self-center",attrs:{color:"primary"},on:{click:t.insertBefore}},[t._v("insertBefore(index, item)")])],1),n("v-card",{staticClass:"pa-4 d-flex",attrs:{flat:""}},[n("v-text-field",{staticClass:"flex-grow-1 mr-4",attrs:{label:"index"},model:{value:t.insertAfterIndex,callback:function(e){t.insertAfterIndex=e},expression:"insertAfterIndex"}}),n("v-text-field",{staticClass:"flex-grow-1 mr-4",attrs:{label:"item"},model:{value:t.insertAfterItem,callback:function(e){t.insertAfterItem=e},expression:"insertAfterItem"}}),n("v-btn",{staticClass:"text-none align-self-center",attrs:{color:"primary"},on:{click:t.insertAfter}},[t._v("insertAfter(index, item)")])],1),n("v-card",{staticClass:"pa-4 d-flex",attrs:{flat:""}},[n("v-text-field",{staticClass:"flex-grow-1 mr-4",attrs:{label:"index"},model:{value:t.deleteBeforeIndex,callback:function(e){t.deleteBeforeIndex=e},expression:"deleteBeforeIndex"}}),n("v-btn",{staticClass:"text-none align-self-center",attrs:{color:"primary"},on:{click:t.deleteBefore}},[t._v("deleteBefore(index)")])],1),n("v-card",{staticClass:"pa-4 d-flex",attrs:{flat:""}},[n("v-text-field",{staticClass:"flex-grow-1 mr-4",attrs:{label:"index"},model:{value:t.deleteAfterIndex,callback:function(e){t.deleteAfterIndex=e},expression:"deleteAfterIndex"}}),n("v-btn",{staticClass:"text-none align-self-center",attrs:{color:"primary"},on:{click:t.deleteAfter}},[t._v("deleteAfter(index)")])],1)],1)],1)],1)],1),n("v-col",{staticClass:"fixed",attrs:{sm:"6",flat:"",outlined:""}},[n("v-card",{ref:"outputView",staticClass:"d-flex flex-column fill-height overflow-y-auto px-4",attrs:{outlined:"",flat:""}},[n("v-toolbar",{staticClass:"flex-grow-0 pa-0",attrs:{flat:"",dense:""}},[n("v-btn",{staticClass:"ml-auto",attrs:{color:"info"},on:{click:function(e){t.output=[]}}},[t._v("CLEAR OUTPUT")])],1),n("v-card",{staticClass:"d-flex flex-column-reverse justify-end fill-height overflow-y-auto",attrs:{flat:""}},[t._l(t.output,(function(e,i){return n("div",{key:i},[n("v-card",{staticClass:"d-flex mb-3",attrs:{flat:""}},[n("v-card",{staticClass:"d-flex"},[n("v-card",{staticClass:"px-4 py-1",attrs:{flat:"",dark:"",color:e.isError?"error":"primary"}},[t._v("\n                            "+t._s(e.operation)+"\n                          ")]),void 0!==e.result&&"getItems()"!==e.operation?n("v-card",{staticClass:"px-10 d-flex justify-center align-center",attrs:{flat:""}},[t._v("\n                            "+t._s(e.result)+"\n                          ")]):t._e()],1)],1),"getItems()"===e.operation?n("v-card",{staticClass:"d-flex mb-3 flex-wrap",attrs:{flat:""}},[n("v-card",{staticClass:"pa-2 mb-3 mr-3",attrs:{dark:"",color:"success"}},[t._v("\n                          Head\n                        ")]),0===e.result.length?n("v-card",{staticClass:"pa-2 mb-3 mr-3 px-4"},[t._v("\n                          -\n                        ")]):t._e(),t._l(e.result,(function(e,i){return n("v-card",{key:i,staticClass:"pa-2 mb-3 mr-3 px-4"},[t._v("\n                          "+t._s(e)+"\n                        ")])})),n("v-card",{staticClass:"pa-2 mb-3 mr-3",attrs:{dark:"",color:"error"}},[t._v("\n                          Tail\n                        ")])],2):t._e(),n("v-divider",{staticClass:"mb-3"})],1)}))],2)],1)],1)],1)],1)],1)],1)],1)},r=[],a=n("75fc"),l=n("d225"),o=n("b0b4"),u=function t(e){Object(l["a"])(this,t),this.data=e,this.next=null,this.previous=null},h=function(){function t(){Object(l["a"])(this,t),this.head=null,this.tail=null,this.listSize=0}return Object(o["a"])(t,[{key:"isEmpty",value:function(){return null==this.head}},{key:"size",value:function(){return this.listSize}},{key:"getAt",value:function(t){var e=0,n=this.head;while(n){if(e==t)return n;e++,n=n.next}return null}},{key:"insertFirst",value:function(t){var e=new u(t);if(this.isEmpty())return this.head=e,this.tail=this.head,void this.listSize++;e.next=this.head,this.head.previous=e,this.head=e,this.listSize++}},{key:"insertLast",value:function(t){var e=new u(t);if(this.isEmpty())return this.head=e,this.tail=this.head,void this.listSize++;this.tail.next=e,e.previous=this.tail,this.tail=e,this.listSize++}},{key:"insertBefore",value:function(t,e){if(this.isEmpty())throw new Error("Empty list");if(t<0||t>=this.listSize)throw new Error("Index out of bounds");var n=new u(e),i=this.getAt(t),s=i.previous;n.next=i,i.previous=n,s?(s.next=n,n.previous=s):this.head=n,this.listSize++}},{key:"insertAfter",value:function(t,e){if(this.isEmpty())throw new Error("Empty list");if(t<0||t>=this.listSize)throw new Error("Index out of bounds");var n=new u(e),i=this.getAt(t),s=i.next;i.next=n,n.previous=i,s?(n.next=s,s.previous=n):this.tail=n,this.listSize++}},{key:"deleteFirst",value:function(){if(this.isEmpty())throw new Error("Empty list");var t=this.head;return this.head=this.head.next,this.head?this.head.previous=null:this.tail=this.head,this.listSize--,t.data}},{key:"deleteLast",value:function(){if(this.isEmpty())throw new Error("Empty list");var t=this.tail;return this.tail=this.tail.previous,this.tail?this.tail.next=null:this.head=this.tail,this.listSize--,t.data}},{key:"deleteBefore",value:function(t){if(this.isEmpty())throw new Error("Empty list");if(t<=0||t>=this.listSize.listSize)throw new Error("Index out of bounds");var e=this.getAt(t),n=e.previous;return 1==t?(this.head=e,this.head.previous=null):(n.previous.next=e,e.previous=n.previous),this.listSize--,n.data}},{key:"deleteAfter",value:function(t){if(this.isEmpty())throw new Error("Empty list");if(t<0||t>=this.listSize.listSize-1)throw new Error("Index out of bounds");var e=this.getAt(t),n=e.next;return t==this.listSize-2?(this.tail=e,this.tail.next=null):(e.next=n.next,n.next.previous=e),this.listSize--,n.data}},{key:"getItemsAsArray",value:function(){var t=[],e=this.head;while(null!=e)t.push(e.data),e=e.next;return t}}]),t}(),f={name:"App",data:function(){return{tab1:"playin-tab",list:new h,tab2:null,item:null,output:[],maxOutputSize:10,insertFirstItem:null,insertLastItem:null,insertBeforeItem:null,insertBeforeIndex:null,insertAfterItem:null,insertAfterIndex:null,deleteBeforeIndex:null,deleteAfterIndex:null}},methods:{deleteFirst:function(){try{this.output.push({operation:"deleteFirst()",result:this.list.deleteFirst()})}catch(t){this.output.push({operation:"deleteFirst()",result:t,isError:!0})}finally{this.regulateOutput()}},deleteLast:function(){try{this.output.push({operation:"deleteLast()",result:this.list.deleteLast()})}catch(t){this.output.push({operation:"deleteLast()",result:t,isError:!0})}finally{this.regulateOutput()}},deleteBefore:function(){if(this.deleteBeforeIndex)try{this.output.push({operation:"deleteBefore()",result:this.list.deleteBefore(+this.deleteBeforeIndex)})}catch(t){this.output.push({operation:"deleteBefore(".concat(this.deleteBeforeIndex,")"),result:t,isError:!0})}finally{this.deleteBeforeIndex=null,this.regulateOutput()}},deleteAfter:function(){if(this.deleteAfterIndex)try{this.output.push({operation:"deleteAfter(".concat(this.deleteAfterIndex,")"),result:this.list.deleteAfter(+this.deleteAfterIndex)})}catch(t){this.output.push({operation:"deleteAfter()",result:t,isError:!0})}finally{this.deleteAfterIndex=null,this.regulateOutput()}},insertFirst:function(){this.insertFirstItem&&(this.list.insertFirst(this.insertFirstItem),this.output.push({operation:"insertFirst(".concat(this.insertFirstItem,")")}),this.insertFirstItem=null,this.regulateOutput())},insertLast:function(){this.insertLastItem&&(this.list.insertLast(this.insertLastItem),this.output.push({operation:"insertLast(".concat(this.insertLastItem,")")}),this.insertLastItem=null,this.regulateOutput())},insertBefore:function(){if(this.insertBeforeItem&&this.insertBeforeIndex)try{this.list.insertBefore(+this.insertBeforeIndex,this.insertBeforeItem),this.output.push({operation:"insertBefore(".concat(this.insertBeforeIndex,", ").concat(this.insertBeforeItem,")")})}catch(t){this.output.push({operation:"insertBefore(".concat(this.insertBeforeIndex,", ").concat(this.insertBeforeItem,")"),result:t,isError:!0})}finally{this.insertBeforeItem=null,this.insertBeforeIndex=null,this.regulateOutput()}},insertAfter:function(){if(this.insertAfterItem&&this.insertAfterIndex)try{this.list.insertAfter(+this.insertAfterIndex,this.insertAfterItem),this.output.push({operation:"insertAfter(".concat(this.insertAfterIndex,", ").concat(this.insertAfterItem,")")})}catch(t){this.output.push({operation:"insertAfter(".concat(this.insertAfterIndex,", ").concat(this.insertAfterItem,")"),result:t,isError:!0})}finally{this.insertAfterItem=null,this.insertAfterIndex=null,this.regulateOutput()}},size:function(){this.output.push({operation:"size()",result:this.list.size()}),this.regulateOutput()},isEmpty:function(){this.output.push({operation:"isEmpty()",result:this.list.isEmpty()}),this.regulateOutput()},allItems:function(){this.output.push({operation:"getItems()",result:Object(a["a"])(this.list.getItemsAsArray())}),this.regulateOutput()},regulateOutput:function(){this.output.length>this.maxOutputSize&&this.output.shift()}}},d=f,c=(n("034f"),n("2877")),p=Object(c["a"])(d,s,r,!1,null,null,null),m=p.exports,v=n("8c4f"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("HelloWorld")},y=[],b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",{attrs:{"text-center":"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),i("v-flex",{attrs:{"mb-4":""}},[i("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Welcome to Vuetify\n      ")]),i("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        For help and collaboration with other Vuetify developers,\n        "),i("br"),t._v("please join our online\n        "),i("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),i("v-flex",{attrs:{"mb-5":"",xs12:""}},[i("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),i("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,(function(e,n){return i("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),0)],1),i("v-flex",{attrs:{xs12:"","mb-5":""}},[i("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),i("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,(function(e,n){return i("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),0)],1),i("v-flex",{attrs:{xs12:"","mb-5":""}},[i("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),i("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,(function(e,n){return i("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])})),0)],1)],1)],1)},w=[],g={data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},E=g,I=Object(c["a"])(E,b,w,!1,null,null,null),k=I.exports,C={components:{HelloWorld:k}},_=C,A=Object(c["a"])(_,x,y,!1,null,null,null),z=A.exports;i["default"].use(v["a"]);var S=new v["a"]({routes:[{path:"/",name:"home",component:z},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),B=n("2f62");i["default"].use(B["a"]);var j=new B["a"].Store({state:{},mutations:{},actions:{}}),O=n("ce5b"),L=n.n(O);n("bf40");i["default"].use(L.a);var F=new L.a({icons:{iconfont:"mdi"}});n("d5e8"),n("5363");i["default"].config.productionTip=!1,new i["default"]({router:S,store:j,vuetify:F,render:function(t){return t(m)}}).$mount("#app")},"64a9":function(t,e,n){},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.9fd54e93.js.map