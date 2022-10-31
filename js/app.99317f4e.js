(function(t){function e(e){for(var r,o,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);h&&h(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},i={app:0},a=[];function c(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7c24affb"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"0ad11a0f"}[t]+".css",i=s.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var u=a[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===r||l===i)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var r=e&&e.target&&e.target.src||i,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[t],h.parentNode.removeChild(h),n(a)},h.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){o[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(h);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}i[t]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var h=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"14f6":function(t,e,n){t.exports=n.p+"img/github.c0754a83.svg"},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("router-view")],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"nav"}},[r("a",{attrs:{href:"/"}},[r("div",{staticClass:"logo"},[t._v("Mint-Made")])]),r("div",{attrs:{id:"icon-container"}},[r("a",{attrs:{href:"https://github.com/mint-made",target:"_blank",rel:"noreferrer"}},[r("img",{staticClass:"profile-icon-link",attrs:{src:n("14f6"),alt:"github-profile-icon"}})]),r("a",{attrs:{href:"https://uk.linkedin.com/in/front-end-dev1",target:"_blank",rel:"noreferrer"}},[r("img",{staticClass:"profile-icon-link",attrs:{src:n("9ed9"),alt:"linkedin-profile-icon"}})])])])}],a={name:"App"},c=a,s=(n("5c0b"),n("2877")),u=Object(s["a"])(c,o,i,!1,null,null,null),l=u.exports,f=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"landing-container"}},[n("svg",{attrs:{id:"svg-canvas",viewBox:"0 0 200 200"}},[n("path",{attrs:{id:"blob",fill:"#9b5de5",d:"",transform:"translate(100 100)"}})]),n("div",{attrs:{id:"heading-container"}},[t._m(0),n("button",{staticClass:"btn btn-x",on:{click:t.viewPorjectsClick}},[t._v(" View Projects ")])])])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"title-container"}},[n("h1",[t._v("Thomas Kupai")]),n("h2",[t._v("Web Developer")])])}],d=n("cffa"),b={name:"Landing",data:function(){return{morphing:!0,blobVertices:5,blobVisible:!0,rotationLoop:"",morphLoop:""}},methods:{viewPorjectsClick:function(){var t=this;this.morphing=!1,d["a"].to("#blob",{opacity:0,rotation:270,duration:.5,transformOrigin:"center"}),d["a"].to("#heading-container",{opacity:0,duration:.5}),setTimeout((function(){t.$router.push("portfolio")}),700)},initBlobAnimationLoops:function(){this.newBlobMorph(this.blobVertices),this.rotationLoop=d["a"].to("#blob",{rotation:360,duration:25,ease:"none",transformOrigin:"center",repeat:-1})},newBlobMorph:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.blobVertices;d["a"].to("#blob",{duration:2.5,ease:"none",attr:{d:this.newBlobPath(e)},onComplete:function(){t.morphing&&t.newBlobMorph()}})},newBlobPath:function(t){var e=this.generateBlobCoords(t);return this.generateBlobPath(e,e[e.length-1])},generateBlobCoords:function(t){for(var e=2*Math.PI/t,n=[],r=0;r<t;r++){var o={origin:{},bezier1:{},bezier2:{}},i=this.rndNoBetween(60,85),a=i+15,c=2*Math.PI*(.85*i)/(2*t),s=r*e+this.rndNoBetween(0,e/3),u=this.rndNoBetween(i,a);o.origin.x=u*Math.sin(s),o.origin.y=u*Math.cos(s),s=r*e+this.rndNoBetween(e/3,2*e/3);var l={};l.x=u*Math.sin(s),l.y=u*Math.cos(s);var f={};f.x=l.x-o.origin.x,f.y=l.y-o.origin.y,f.hypotenuse=Math.sqrt(Math.pow(f.x,2)+Math.pow(f.y,2));var h=c/f.hypotenuse;o.bezier1.x=o.origin.x+f.x*h,o.bezier1.y=o.origin.y+f.y*h,o.bezier2.x=o.origin.x-f.x*h,o.bezier2.y=o.origin.y-f.y*h,n.push(o)}return n},rndNoBetween:function(t,e){var n=Math.random()*(e-t)+t;return n},generateBlobPath:function(t,e){for(var n=["M".concat(e.origin.x,",").concat(e.origin.y)],r=e,o=0;o<t.length;o++)n.push("C".concat(r.bezier1.x,",").concat(r.bezier1.y)),n.push("".concat(t[o].bezier2.x,",").concat(t[o].bezier2.y)),n.push("".concat(t[o].origin.x,",").concat(t[o].origin.y)),r=t[o];return n.push("Z"),n.join(" ")}},mounted:function(){document.querySelector("#blob").setAttributeNS(null,"d",this.newBlobPath(this.blobVertices)),this.initBlobAnimationLoops()}},g=b,v=(n("67ae"),Object(s["a"])(g,h,p,!1,null,null,null)),m=v.exports;r["a"].use(f["a"]);var y=[{path:"/",name:"Landing",component:m},{path:"/portfolio",name:"Portfolio",component:function(){return n.e("about").then(n.bind(null,"c9e5"))}}],w=new f["a"]({routes:y,mode:"history"}),x=w;r["a"].config.productionTip=!1,new r["a"]({router:x,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"67ae":function(t,e,n){"use strict";n("d5dc")},"9c0c":function(t,e,n){},"9ed9":function(t,e,n){t.exports=n.p+"img/linkedin.d70ba80f.svg"},d5dc:function(t,e,n){}});
//# sourceMappingURL=app.99317f4e.js.map