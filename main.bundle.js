(()=>{var e={539:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(537),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"@import url(https://use.fontawesome.com/releases/v6.1.1/css/all.css);"]),i.push([e.id,"body{display:grid;grid-template-rows:auto 200px;color:#404040;font-size:20px;padding:0;margin:0}header{display:flex;align-items:center;justify-content:center;text-align:center;background-color:#1da1f2;color:#fff}header h1{font-size:20px;font-weight:normal}main{display:flex;flex-direction:column;align-items:center;padding:2em .2em}div#result{text-align:center;box-sizing:border-box;width:768px;font-size:1.25em;padding:1.5em 0;border:2px dotted silver;border-radius:1em}@media screen and (max-width: 768px){div#result{width:100%}}div#control{padding:1.5em;display:flex;gap:.5em;flex-direction:column;font-size:1em}button#generate{background-color:inherit;border:2px solid silver;border-radius:1em;padding:5px 20px}button#generate:hover{background-color:#f2f2f2;border-color:#f2f2f2}button#generate:active{background-color:#e6e6e6;border-color:#e6e6e6}button#tweet{background-color:#1da1f2;border:1px solid #1da1f2;border-radius:1em;padding:5px 20px;color:#fff;font-size:1em}button#tweet:hover{background-color:#0d95e8;border-color:#0d95e8}button#tweet:active{background-color:#0c85d0;border-color:#0c85d0}","",{version:3,sources:["webpack://./src/style.scss"],names:[],mappings:"AAMA,KACE,YAAA,CACA,6BAAA,CACA,aAPW,CAQX,cAAA,CACA,SAAA,CACA,QAAA,CAGF,OACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,iBAAA,CACA,wBAhBc,CAiBd,UAAA,CAEA,UACE,cAAA,CACA,kBAAA,CAIJ,KACE,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,gBAAA,CAGF,WACE,iBAAA,CAEA,qBAAA,CACA,WAAA,CAKA,gBAAA,CACA,eAAA,CACA,wBAAA,CACA,iBAAA,CAPA,qCALF,WAMI,UAAA,CAAA,CASJ,YACE,aAAA,CACA,YAAA,CACA,QAAA,CACA,qBAAA,CACA,aAAA,CAGF,gBACE,wBAAA,CACA,uBAAA,CACA,iBAAA,CACA,gBAAA,CAEA,sBACE,wBAAA,CACA,oBAAA,CAGF,uBACE,wBAAA,CACA,oBAAA,CAIJ,aACE,wBAzEc,CA0Ed,wBAAA,CACA,iBAAA,CACA,gBAAA,CACA,UAAA,CACA,aAAA,CAEA,mBACE,wBAAA,CACA,oBAAA,CAGF,oBACE,wBAAA,CACA,oBAAA",sourcesContent:["@import url(https://use.fontawesome.com/releases/v6.1.1/css/all.css);\n\n$text-color: #404040;\n$border-color: lighten($text-color, 50);\n$twitter-color: #1da1f2;\n\nbody {\n  display: grid;\n  grid-template-rows: auto 200px;\n  color: $text-color;\n  font-size: 20px;\n  padding: 0;\n  margin: 0;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background-color: $twitter-color;\n  color: white;\n\n  h1 {\n    font-size: 20px;\n    font-weight: normal;\n  }\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2em 0.2em;\n}\n\ndiv#result {\n  text-align: center;\n\n  box-sizing: border-box;\n  width: 768px;\n  @media screen and (max-width: 768px) {\n    width: 100%;\n  }\n\n  font-size: 1.25em;\n  padding: 1.5em 0;\n  border: 2px dotted $border-color;\n  border-radius: 1em;\n}\n\ndiv#control {\n  padding: 1.5em;\n  display: flex;\n  gap: 0.5em;\n  flex-direction: column;\n  font-size: 1em;\n}\n\nbutton#generate {\n  background-color: inherit;\n  border: 2px solid $border-color;\n  border-radius: 1em;\n  padding: 5px 20px;\n\n  &:hover {\n    background-color: darken(white, 5);\n    border-color: darken(white, 5);\n  }\n\n  &:active {\n    background-color: darken(white, 10);\n    border-color: darken(white, 10);\n  }\n}\n\nbutton#tweet {\n  background-color: $twitter-color;\n  border: 1px solid $twitter-color;\n  border-radius: 1em;\n  padding: 5px 20px;\n  color: white;\n  font-size: 1em;\n\n  &:hover {\n    background-color: darken($twitter-color, 5);\n    border-color: darken($twitter-color, 5);\n  }\n\n  &:active {\n    background-color: darken($twitter-color, 10);\n    border-color: darken($twitter-color, 10);\n  }\n}"],sourceRoot:""}]);const c=i},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var A=this[c][0];null!=A&&(i[A]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */"),i=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([a]).join("\n")}return[t].join("\n")}},545:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var r=n(379),o=n.n(r),a=n(795),i=n.n(a),c=n(569),A=n.n(c),s=n(565),d=n.n(s),l=n(216),u=n.n(l),p=n(589),f=n.n(p),m=n(539),C={};C.styleTagTransform=f(),C.setAttributes=d(),C.insert=A().bind(null,"head"),C.domAPI=i(),C.insertStyleElement=u(),o()(m.Z,C);const h=m.Z&&m.Z.locals?m.Z.locals:void 0},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var A=e[c],s=r.base?A[0]+r.base:A[0],d=a[s]||0,l="".concat(s," ").concat(d);a[s]=d+1;var u=n(l),p={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var f=o(p,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var A=r(e,o),s=0;s<a.length;s++){var d=n(a[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=A}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},334:(e,t,n)=>{var r;r=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=["パ","ワ","ー","マ",["ン","ソ"],"ハ","ッ","タ",["ン","ソ"]],r=[["大学"],["大聖堂","大丈夫","大根","犬学","大仏","大将軍"]],o=(e,t)=>(Math.sqrt(-2*Math.log(Math.random()))*Math.cos(2*Math.PI*Math.random())+e)*t,a=e=>new Array(e).fill(0).map((e=>o(0,1)**2)).reduce(((e,t)=>e+t),0);t.default=function(){let e="";for(let t=0;t<n.length;t++){const r=o(0,2),i=Math.max(0,Math.min(n.length-1,Math.floor(Math.abs(t+r))*Math.sign(t+r))),c=n[i];"string"==typeof c?e+=c:t>=2&&e.slice(-2)===n.slice(i-2,i).map((e=>e[0])).join("")?e+=c[Math.max(0,Math.min(c.length-1,Math.floor(a(1)/2)))]:e+=c[0]}return e+=(t=r[Math.max(0,Math.min(r.length-1,Math.floor(a(1)/1.5)))])[Math.floor(Math.random()*t.length)],e;var t}}.apply(t,[n,t]),void 0===r||(e.exports=r)},519:function(e,t,n){var r,o,a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r=[n,t,n(334),n(545)],o=function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=a(n),window.addEventListener("load",(()=>{let e=(0,n.default)();const t=function(){const t=document.querySelector("#result > span");if(!t)throw Error('Element "#result > span" does not exist.');t.textContent=e};document.querySelector("#generate")?.addEventListener("click",(()=>{e=(0,n.default)(),t()})),document.querySelector("#tweet")?.addEventListener("click",(()=>{const t=`${e}\n#パワーマンハッタン大学チャレンジ\nhttps://tsukina-7mochi.github.io/power-manhattan-challenge/`,n=document.createElement("a");n.href=`https://twitter.com/intent/tweet?text=${encodeURIComponent(t)}`,n.click()})),t()}))}.apply(t,r),void 0===o||(e.exports=o)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(519)})();
//# sourceMappingURL=main.bundle.js.map