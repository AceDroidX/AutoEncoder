(function(t){function e(e){for(var n,s,r=e[0],l=e[1],c=e[2],d=0,f=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,r=1;r<o.length;r++){var l=o[r];0!==i[l]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},i={app:0},a=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=(o("d3b7"),o("bc3a")),a=o.n(i),s={},r=a.a.create(s);r.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),r.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=r,window.axios=r,Object.defineProperties(t.prototype,{axios:{get:function(){return r}},$axios:{get:function(){return r}}})},n["default"].use(Plugin);Plugin;var l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[o("div",{staticClass:"d-flex align-center title"},[t._v(" AutoEncoder ")]),o("v-spacer"),o("v-btn",{attrs:{href:"https://github.com/AceDroidX/AutoEncoder",target:"_blank",text:""}},[o("span",{staticClass:"mr-2"},[t._v("GITHUB")]),o("v-icon",[t._v("mdi-open-in-new")])],1)],1),o("v-content",[o("HelloWorld")],1)],1)},c=[],u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{attrs:{dense:""}},[o("v-col",{attrs:{cols:"12"}},[o("v-card",{attrs:{color:"#ffffff",light:""}},[o("v-card-title",{staticClass:"headline"},[t._v("1.输入生肉和字幕文件名")]),o("v-card-text",{staticClass:"text--primary"},[t._v("仅根目录的文件，包含后缀，字幕文件名不能有中文")]),o("v-list-item",{attrs:{"two-line":""}},[o("v-list-item-content",[o("v-text-field",{attrs:{label:"生肉文件名","hide-details":"auto"},model:{value:t.video,callback:function(e){t.video=e},expression:"video"}}),o("v-text-field",{attrs:{label:"字幕文件名","hide-details":"auto"},model:{value:t.ass,callback:function(e){t.ass=e},expression:"ass"}})],1)],1),o("v-card-text",{staticClass:"text--primary"},[t._v(t._s(t.response))]),o("v-card-actions",[o("v-btn",{attrs:{text:"",disabled:t.btnState},on:{click:t.addtask}},[t._v("OK")]),o("v-btn",{attrs:{text:"",disabled:t.btnState},on:{click:t.refresh}},[t._v("刷新任务列表")])],1)],1)],1),o("v-col",{attrs:{cols:"12"}},[o("v-card",{attrs:{color:"#ffffff",light:""}},[o("v-card-title",{staticClass:"headline"},[t._v("2.正在执行的任务")]),o("v-list",[o("v-list-item-group",t._l(t.task,(function(e,n){return o("v-list-item",{key:n},[o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(e["video"])}}),o("v-list-item-subtitle",{staticClass:"text--primary",domProps:{textContent:t._s(e["ass"])}}),o("v-list-item-subtitle",{domProps:{textContent:t._s(e["uid"])}})],1)],1)})),1)],1)],1)],1),o("v-col",{attrs:{cols:"12"}},[o("v-card",{attrs:{color:"#ffffff",light:""}},[o("v-card-title",{staticClass:"headline"},[t._v("3.待执行的任务")]),o("v-list",[o("v-list-item-group",t._l(t.queue,(function(e,n){return o("v-list-item",{key:n},[o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(e["video"])}}),o("v-list-item-subtitle",{staticClass:"text--primary",domProps:{textContent:t._s(e["ass"])}}),o("v-list-item-subtitle",{domProps:{textContent:t._s(e["uid"])}})],1)],1)})),1)],1)],1)],1),o("v-col",{attrs:{cols:"12"}},[o("v-card",{attrs:{color:"#ffffff",light:""}},[o("v-card-title",{staticClass:"headline"},[t._v("4.已完成的任务")]),o("v-list",[o("v-list-item-group",t._l(t.output,(function(e,n){return o("v-list-item",{key:n},[o("v-list-item-content",[o("v-list-item-title",{class:e["data"]["color"],domProps:{textContent:t._s(e["data"]["video"])}}),o("v-list-item-subtitle",{staticClass:"text--primary",domProps:{textContent:t._s(e["data"]["ass"])}}),o("v-list-item-subtitle",{domProps:{textContent:t._s(e["data"]["uid"])}})],1)],1)})),1)],1)],1)],1)],1)],1)},d=[],f=(o("99af"),{data:function(){return{video:"",ass:"",response:"",task:[{color:"",video:"loading..."}],btnState:!1,queue:[{color:"",video:"loading..."}],output:[{data:{color:"",video:"loading..."}}],timer:""}},methods:{addtask:function(){var t=this;this.btnState=!0,this.axios.get("https://enc.acedroidx.top:8888/api/add?video="+this.video+"&ass="+this.ass).then((function(e){0==e["data"]["code"]?(t.response="压制任务创建成功，任务id:".concat(e["data"]["data"]["uid"],"，视频:").concat(e["data"]["data"]["video"],"，字幕:").concat(e["data"]["data"]["ass"]),t.btnState=!1,t.refresh()):(1==e["data"]["code"]?t.response="压制任务创建失败:字幕文件名不能有中文":t.response="压制任务创建失败",console.log(e),t.btnState=!1)})).catch((function(e){console.log(e),t.response=e,t.btnState=!1}))},getTask:function(){var t=this;this.axios.get("https://enc.acedroidx.top:8888/api/task").then((function(e){if(0==e["data"]["code"]){var o=e["data"]["task"];0==o.length?t.task=[{video:"没有正在执行的任务"}]:t.task=o}else t.task=[{video:"正在执行的任务获取失败"}],console.log(e)})).catch((function(e){console.log(e),t.task=[{video:e}]}))},getQueue:function(){var t=this;this.axios.get("https://enc.acedroidx.top:8888/api/queue").then((function(e){if(0==e["data"]["code"]){var o=e["data"]["queue"];0==o.length?t.queue=[{video:"没有待执行的任务"}]:t.queue=o}else t.queue=[{video:"待执行的任务获取失败"}],console.log(e)})).catch((function(e){console.log(e),t.queue=[{video:e}]}))},getOutput:function(){var t=this;this.axios.get("https://enc.acedroidx.top:8888/api/output").then((function(e){if(0==e["data"]["code"]){var o=e["data"]["output"];0==o.length?t.output=[{data:{color:"",video:"没有已完成的压制任务"}}]:t.output=o}else t.output=[{data:{color:"",video:"压制任务获取失败"}}],console.log(e)})).catch((function(e){console.log(e),t.output=[{data:{color:"",video:e}}]}))},refresh:function(){this.getOutput(),this.getQueue(),this.getTask()}},mounted:function(){this.$nextTick((function(){this.timer=setInterval(this.refresh,1e3)}))},beforeDestroy:function(){clearInterval(this.timer)}}),v=f,p=o("2877"),h=Object(p["a"])(v,u,d,!1,null,null,null),m=h.exports,b={name:"App",components:{HelloWorld:m},data:function(){return{}}},g=b,x=Object(p["a"])(g,l,c,!1,null,null,null),_=x.exports,y=o("ce5b"),k=o.n(y);o("bf40");n["default"].use(k.a);var C=new k.a({theme:{themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",black:"#000000"}}}});o("d5e8"),o("5363");n["default"].config.productionTip=!1,new n["default"]({vuetify:C,render:function(t){return t(_)}}).$mount("#app")}});
//# sourceMappingURL=app.35dac3e3.js.map