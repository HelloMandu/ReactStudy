!function(e){var r={};function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)t.d(n,a,function(r){return e[r]}.bind(null,a));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=17)}([function(e,r){e.exports=require("react")},function(e,r){e.exports=require("react-router-dom")},function(e,r,t){e.exports=t(14)},function(e,r){e.exports=require("react-redux")},function(e,r){e.exports=require("redux-saga/effects")},function(e,r){e.exports=require("redux")},function(e,r,t){"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t=function(e,r){var t=e[1]||"",n=e[3];if(!n)return t;if(r&&"function"==typeof btoa){var a=(o=n,u=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(s," */")),c=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[t].concat(c).concat([a]).join("\n")}var o,u,s;return[t].join("\n")}(r,e);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(e,t,n){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(n)for(var c=0;c<this.length;c++){var o=this[c][0];null!=o&&(a[o]=!0)}for(var u=0;u<e.length;u++){var s=[].concat(e[u]);n&&a[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),r.push(s))}},r}},function(e,r){e.exports=require("react-dom/server")},function(e,r){e.exports=require("express")},function(e,r){e.exports=require("axios")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("redux-saga")},function(e,r){e.exports=require("@babel/runtime/helpers/esm/defineProperty")},function(e,r){e.exports=require("fs")},function(e,r){e.exports=require("regenerator-runtime")},function(e,r,t){"use strict";var n=t(6),a=t.n(n)()(!1);a.push([e.i,".Red{\r\n    background-color: red;\r\n    font-size: 1.5rem;\r\n    color: white;\r\n    width: 128px;\r\n    height: 128px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}",""])},function(e,r,t){"use strict";var n=t(6),a=t.n(n)()(!1);a.push([e.i,".Blue{\r\n    background-color: blue;\r\n    font-size: 1.5rem;\r\n    color: white;\r\n    width: 128px;\r\n    height: 128px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}",""])},function(e,r,t){"use strict";t.r(r);var n=t(2),a=t.n(n);function c(e,r,t,n,a,c,o){try{var u=e[c](o),s=u.value}catch(e){return void t(e)}u.done?r(s):Promise.resolve(s).then(n,a)}function o(e){return function(){var r=this,t=arguments;return new Promise((function(n,a){var o=e.apply(r,t);function u(e){c(o,n,a,u,s,"next",e)}function s(e){c(o,n,a,u,s,"throw",e)}u(void 0)}))}}var u=t(0),s=t.n(u),i=t(7),l=t.n(i),p=t(8),f=t.n(p),d=t(1),m=function(){return s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(d.Link,{to:"/red"},"Red")),s.a.createElement("li",null,s.a.createElement(d.Link,{to:"/blue"},"Blue")),s.a.createElement("li",null,s.a.createElement(d.Link,{to:"/users"},"Users")))},v=(t(15),function(){return s.a.createElement("div",{className:"Red"})}),E=function(){return s.a.createElement(v,null)},h=(t(16),function(){return s.a.createElement("div",{className:"Blue"})}),b=function(){return s.a.createElement(h,null)},y=function(e){var r=e.users;return r?s.a.createElement("div",null,s.a.createElement("ul",null,r.map((function(e){return s.a.createElement("li",{key:e.id},s.a.createElement(d.Link,{to:"/users/".concat(e.id)},e.username))})))):null},g=t(3),x=t(12),S=t.n(x);function j(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?j(Object(t),!0).forEach((function(r){S()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var _=t(9),R=t.n(_),w=t(4),P=a.a.mark(G),U=a.a.mark(C),k="users/GET_USER",T=function(e){return{type:"users/GET_USERS_FAILURE",error:!0,payload:e}},q=function(e){return R.a.get("https://jsonplaceholder.typicode.com/users/".concat(e))};function G(e){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(w.call)(q,e.payload);case 3:return r=t.sent,t.next=6,Object(w.put)({type:"users/GET_USER_SUCCESS",payload:r.data});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(w.put)({type:"users/GET_USER_FAILURE",payload:t.t0,error:!0});case 12:case"end":return t.stop()}}),P,null,[[0,8]])}function C(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.takeEvery)(k,G);case 2:case"end":return e.stop()}}),U)}var D={users:null,loading:{users:!1,user:!1},error:{users:null,user:null}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"users/GET_USERS_PENDING":return O(O({},e),{},{loading:O(O({},e.loading),{},{users:!0}),error:O(O({},e.error),{},{users:null})});case"users/GET_USERS_SUCCESS":return O(O({},e),{},{loading:O(O({},e.loading),{},{users:!1}),users:r.payload.data});case"users/GET_USERS_FAILURE":return O(O({},e),{},{loading:O(O({},e.loading),{},{users:!1}),error:O(O({},e.error),{},{users:r.payload})});case k:return O(O({},e),{},{loading:O(O({},e.loading),{},{user:!0}),error:O(O({},e.error),{},{user:null})});case"users/GET_USER_SUCCESS":return O(O({},e),{},{loading:O(O({},e.loading),{},{user:!1}),user:r.payload});case"users/GET_USER_FAILURE":return O(O({},e),{},{loading:O(O({},e.loading),{},{user:!1}),error:O(O({},e.error),{},{user:r.payload})});default:return e}},N=Object(u.createContext)(null),I=N,A=function(e){var r=e.resolve,t=Object(u.useContext)(N);return t?(t.done||t.promises.push(Promise.resolve(r())),null):null},F=s.a.useEffect,M=Object(g.connect)((function(e){return{users:e.users.users}}),{getUsers:function(){return function(){var e=o(a.a.mark((function e(r){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({type:"users/GET_USERS_PENDING"}),e.next=4,R.a.get("https://jsonplaceholder.typicode.com/users");case 4:t=e.sent,r({type:"users/GET_USERS_SUCCESS",payload:t}),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(0),r(T(e.t0)),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()}})((function(e){var r=e.users,t=e.getUsers;return F((function(){r||t()}),[t,r]),s.a.createElement(s.a.Fragment,null,s.a.createElement(y,{users:r}),s.a.createElement(A,{resolve:t}))})),J=function(e){var r=e.user,t=r.email,n=r.name,a=r.username;return s.a.createElement("div",null,s.a.createElement("h1",null,a," (",n,")"),s.a.createElement("p",null,s.a.createElement("b",null,"e-mail:")," ",t))},B=function(e){var r=e.id,t=Object(g.useSelector)((function(e){return e.users.user})),n=Object(g.useDispatch)();return Object(u.useEffect)((function(){t&&t.id===parseInt(r,10)||n(function(e){return{type:k,payload:e}}(r))}),[n,r,t]),t?s.a.createElement(J,{user:t}):null},z=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(M,null),s.a.createElement(d.Route,{path:"/users/:id",render:function(e){var r=e.match;return s.a.createElement(B,{id:r.params.id})}}))},Y=function(){return s.a.createElement("div",null,s.a.createElement(m,null),s.a.createElement("hr",null),s.a.createElement(d.Route,{path:"/red",component:E}),s.a.createElement(d.Route,{path:"/blue",component:b}),s.a.createElement(d.Route,{path:"/users",component:z}))},$=t(10),H=t.n($),K=t(13),Q=t.n(K),V=t(5),W=a.a.mark(X);function X(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.all)([C()]);case 2:case"end":return e.stop()}}),W)}var Z=Object(V.combineReducers)({users:L}),ee=t(11),re=t.n(ee),te=JSON.parse(Q.a.readFileSync(H.a.resolve("./build/asset-manifest.json"),"utf8")),ne=Object.keys(te.files).filter((function(e){return/chunk\.js$/.exec(e)})).map((function(e){return'<script src="'.concat(te.files[e],'"><\/script>')})).join(""),ae=function(e,r){return'<!DOCTYPE html>\n      <html lang="en">\n      <head>\n        <meta charset="utf-8" />\n        <link rel="shortcut icon" href="/favicon.ico" />\n        <meta\n          name="viewport"\n          content="width=device-width,initial-scale=1,shrink-to-fit=no"\n        />\n        <meta name="theme-color" content="#000000" />\n        <title>React App</title>\n        <link href="'.concat(te.files["main.css"],'" rel="stylesheet" />\n      </head>\n      <body>\n        <noscript>You need to enable JavaScript to run this app.</noscript>\n        <div id="root">\n          ').concat(e,"\n        </div>\n        ").concat(r,'\n        <script src="').concat(te.files["runtime-main.js"],'"><\/script>\n        ').concat(ne,'\n        <script src="').concat(te.files["main.js"],'"><\/script>\n      </body>\n      </html>\n        ')},ce=f()(),oe=function(){var e=o(a.a.mark((function e(r,t,n){var c,o,u,i,p,f,m,v,E;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={},o=re()(),u=Object(V.createStore)(Z,Object(V.applymiddleware)(o)),i=o.run(X).toPromise(),p={done:!1,promises:[]},f=s.a.createElement(I.Provider,{value:p},s.a.createElement(g.Provider,{store:u},s.a.createElement(d.StaticRouter,{location:r.url,contetxt:c},s.a.createElement(Y,null)))),l.a.renderToStaticMarkup(f),u.dispatch(ee.END),e.prev=8,e.next=11,i;case 11:return e.next=13,Promise.all(p.promises);case 13:e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(8),e.abrupt("return",t.status(500));case 18:p.done=!0,m=l.a.renderToString(f),v=JSON.stringify(u.getstate()).replace(/</g,"\\u003c"),E="<script>__PRELOADED_STATE__=".concat(v,"<\/script>"),t.send(ae(m,E));case 23:case"end":return e.stop()}}),e,null,[[8,15]])})));return function(r,t,n){return e.apply(this,arguments)}}(),ue=f.a.static(H.a.resolve("./build"),{index:!1});ce.use(ue),ce.use(oe),ce.listen(5e3,(function(){console.log("Running on http://localhost:5000")}))}]);