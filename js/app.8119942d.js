(function(){var t={9049:function(){(function(t,e){var n=e.documentElement,r=t.devicePixelRatio||1;function o(){e.body?e.body.style.fontSize=12*r+"px":e.addEventListener("DOMContentLoaded",o)}function i(){var t=n.clientWidth/10;n.style.fontSize=t+"px"}if(o(),i(),t.addEventListener("resize",i),t.addEventListener("pageshow",(function(t){t.persisted&&i()})),r>=2){var a=e.createElement("body"),u=e.createElement("div");u.style.border=".5px solid transparent",a.appendChild(u),n.appendChild(a),1===u.offsetHeight&&n.classList.add("hairlines"),n.removeChild(a)}})(window,document)},290:function(t,e,n){"use strict";var r=n(6369),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],a=n(1001),u={},c=(0,a.Z)(u,o,i,!1,null,null,null),s=c.exports,l=n(2631),f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("div",{staticClass:"vue-container"},[e("img",{staticClass:"bg",attrs:{src:n(7867),alt:""}}),e("a",{staticStyle:{width:"20vw",height:"20vw",left:"13vw",top:"65vw"},attrs:{href:"javascript:void(0);",title:"1"},on:{click:function(e){return t.isGo(1)}}}),e("a",{staticStyle:{width:"20vw",height:"20vw",left:"40vw",top:"65vw"},attrs:{href:"javascript:void(0);",title:"2"},on:{click:function(e){return t.isGo(2)}}}),e("a",{staticStyle:{width:"20vw",height:"20vw",left:"67vw",top:"65vw"},attrs:{href:"javascript:void(0);",title:"3"},on:{click:function(e){return t.isGo(3)}}}),e("a",{staticStyle:{width:"20vw",height:"20vw",left:"13vw",top:"91vw"},attrs:{href:"https://live.photoplus.cn/live/66935467?accessFrom=live#/live",title:"4"}}),e("a",{staticStyle:{width:"20vw",height:"20vw",left:"40vw",top:"91vw"},attrs:{href:"javascript:void(0);",title:"5"},on:{click:function(e){return t.isGo(5)}}}),e("a",{staticStyle:{width:"20vw",height:"20vw",left:"67vw",top:"91vw"},attrs:{href:"javascript:void(0);",title:"6"},on:{click:function(e){return t.isGo(6)}}})])])},d=[],v=(n(560),{name:"HomeView",components:{},data(){return{}},methods:{isGo(t){this.$router.push({path:"/about",query:{page:t}})}}}),p=v,h=(0,a.Z)(p,f,d,!1,null,null,null),m=h.exports;r.ZP.use(l.ZP);const g=[{path:"/",name:"home",component:m},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,5236))},{path:"/seatPage",name:"seatPage",component:()=>n.e(443).then(n.bind(n,7122))}],w=new l.ZP({mode:"hash",routes:g});var b=w;n(9049);r.ZP.config.productionTip=!1,new r.ZP({router:b,render:t=>t(s)}).$mount("#app")},7867:function(t,e,n){"use strict";t.exports=n.p+"img/home.4376ba0d.jpg"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var a=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],i=t[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){t.splice(l--,1);var s=o();void 0!==s&&(e=s)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.9cbcff39.js"}}(),function(){n.miniCssF=function(t){return"css/about.2f1c370c.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="test:";n.l=function(r,o,i,a){if(t[r])t[r].push(o);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+i){u=f;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+i),u.src=r),t[r]=[o];var d=function(e,n){u.onerror=u.onload=null,clearTimeout(v);var o=t[r];if(delete t[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(t){return t(n)})),e)return e(n)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=a,i.href=e,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===e))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===t||i===e)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(e(a,u))return o();t(r,u,null,o,i)}))},o={143:0};n.f.miniCss=function(t,e){var n={443:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(e),u=new Error,c=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,a=r[0],u=r[1],c=r[2],s=0;if(a.some((function(e){return 0!==t[e]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var l=c(n)}for(e&&e(r);s<a.length;s++)i=a[s],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},r=self["webpackChunktest"]=self["webpackChunktest"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(290)}));r=n.O(r)})();
//# sourceMappingURL=app.8119942d.js.map