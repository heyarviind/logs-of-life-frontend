(function(e){function t(t){for(var r,o,i=t[0],c=t[1],l=t[2],u=0,f=[];u<i.length;u++)o=i[u],a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},s=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-4acaa6f8":"64cbeeba"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-4acaa6f8":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-4acaa6f8":"cf2f5dbb"}[e]+".css",a=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],u=l.getAttribute("data-href");if(u===r||u===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[e],p.parentNode.removeChild(p),n(s)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e),l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");s.type=r,s.request=o,n[1](s)}a[e]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"365c":function(e,t,n){"use strict";var r="http://api.logsof.life",o="",a=r+o,s={login:function(){return"".concat(a,"/login/")},signUp:function(){return"".concat(a,"/user/")},logs:function(){return"".concat(a,"/logs/")},addLog:function(){return"".concat(a,"/log/")}};t["a"]=s},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("router-view")],1)},a=[],s={name:"App",mounted:function(){localStorage.getItem("token")||this.$router.push("/login")}},i=s,c=(n("5c0b"),n("2877")),l=Object(c["a"])(i,o,a,!1,null,null,null),u=l.exports,f=n("8c4f");n("a55b");r["a"].use(f["a"]);var p=new f["a"]({mode:"history",base:"/",routes:[{path:"/login",name:"login",component:function(){return Promise.resolve().then(n.bind(null,"a55b"))}},{path:"/",name:"home",component:function(){return n.e("chunk-4acaa6f8").then(n.bind(null,"bb51"))}}]}),d=n("2f62");r["a"].use(d["a"]);var m=new d["a"].Store({state:{logs:[]},mutations:{ADD_LOG:function(e,t){e.logs.unshift(t)},SET_LOGS:function(e,t){console.log(t),e.logs=t}},actions:{addLog:function(e,t){var n=e.commit;n("ADD_LOG",t)},setLogs:function(e,t){var n=e.commit;n("SET_LOGS",t)}}});r["a"].config.productionTip=!1,new r["a"]({router:p,store:m,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){},"9b19":function(e,t,n){e.exports=n.p+"img/logo.d21ea8f3.svg"},a55b:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e._m(0),n("div",{staticClass:"row justify-content-md-center"},[n("div",{staticClass:"col-12 col-lg-5 col-md-6"},[e.isError?n("div",{staticClass:"alert alert-warning"},[e._v(e._s(e.errorMessage))]):e._e(),n("div",{staticClass:"form"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"email"}},[e._v("Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"someone@somewhere.com"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"password"}},[e._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("button",{staticClass:"btn btn-primary btn-block",on:{click:function(t){return e.login()}}},[e._v("Login")])])])])])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"py-5 text-center"},[r("img",{attrs:{src:n("9b19"),alt:"",width:"80px"}})])}],a=n("365c"),s=n("bc3a"),i=n.n(s),c={name:"Login",data:function(){return{email:null,password:null,isError:!1,errorMessage:null}},methods:{login:function(){var e=this;if(this.email&&this.password){var t={email:this.email,password:this.password};i.a.post(a["a"].login(),t).then(function(t){console.log("reached here"),localStorage.setItem("token","X-Token ".concat(t.data.token)),e.$router.push("/")}).catch(function(t){e.isError=1,e.errorMessage="Invalid email or passwrod!"})}}}},l=c,u=n("2877"),f=Object(u["a"])(l,r,o,!1,null,null,null);t["default"]=f.exports}});
//# sourceMappingURL=app.a8000dc5.js.map