(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[7252],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4948:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>s,toc:()=>c,default:()=>l});var r=n(22122),o=(n(67294),n(3905));const a={sidebar_position:10},i="\u6ce8\u9500\u529f\u80fd\u6709\u6548\u6027",s={unversionedId:"SessionManagement/LogoffFunction",id:"SessionManagement/LogoffFunction",isDocsHomePage:!1,title:"\u6ce8\u9500\u529f\u80fd\u6709\u6548\u6027",description:"\u6f0f\u6d1e\u63cf\u8ff0\uff1a",source:"@site/wiki/SessionManagement/LogoffFunction.md",sourceDirName:"SessionManagement",slug:"/SessionManagement/LogoffFunction",permalink:"/en/wiki/SessionManagement/LogoffFunction",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"teamSidebar",previous:{title:"\u4f1a\u8bdd\u56fa\u5b9a\u6d4b\u8bd5",permalink:"/en/wiki/SessionManagement/Session-id"},next:{title:"\u4f1a\u8bdd\u8d85\u65f6\u6709\u6548\u6027",permalink:"/en/wiki/SessionManagement/SessionTimeOut"}},c=[],p={toc:c};function l(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6ce8\u9500\u529f\u80fd\u6709\u6548\u6027"},"\u6ce8\u9500\u529f\u80fd\u6709\u6548\u6027"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6f0f\u6d1e\u63cf\u8ff0\uff1a")),(0,o.kt)("p",null,"Session \u662f\u5e94\u7528\u7cfb\u7edf\u5bf9\u6d4f\u89c8\u5668\u5ba2\u6237\u7aef\u8eab\u4efd\u8ba4\u8bc1\u7684\u5c5e\u6027\u6807\u8bc6\uff0c\u5728\u7528\u6237\u6ce8\u9500\u6216\u9000\u51fa\u5e94\u7528\u7cfb\u7edf\u65f6\uff0c\u7cfb\u7edf\u5e94\u5c06\u5ba2\u6237\u7aefSession \u8ba4\u8bc1\u5c5e\u6027\u6807\u8bc6\u6e05\u7a7a\u3002\u5982\u679c\u672a\u80fd\u6e05\u7a7a Session \u8ba4\u8bc1\u4f1a\u8bdd\uff0c\u8be5\u8ba4\u8bc1\u4f1a\u8bdd\u5c06\u6301\u7eed\u6709\u6548\uff0c\u6b64\u65f6\u653b\u51fb\u8005\u83b7\u5f97\u8be5Session \u8ba4\u8bc1\u4f1a\u8bdd\u4f1a\u5bfc\u81f4\u7528\u6237\u6743\u9650\u88ab\u76d7\u53d6\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6f0f\u6d1e\u6848\u4f8b\uff1a")),(0,o.kt)("p",null,"\u901a\u8fc7\u767b\u5f55\u754c\u9762\u548c\u8d26\u53f7\u5bc6\u7801\u767b\u5f55\u8fdb\u7cfb\u7edf\u540e\u53f0"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(57595).Z})),(0,o.kt)("p",null,"\u767b\u9646\u540e\u70b9\u51fb\u6211\u7684\u8d26\u53f7\uff0c\u5f00\u542f\u6293\u5305\uff0c\u628a\u8fd4\u56de\u5f53\u524d\u8d26\u53f7\u4fe1\u606f\u7684\u6570\u636e\u5305\u653e\u5230Web Fuzzer\u4e2d"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(93769).Z}),"\n",(0,o.kt)("img",{src:n(89594).Z})),(0,o.kt)("p",null,"\u9000\u51fa\u7cfb\u7edf\u540e\uff0c\u91cd\u653eWeb Fuzzer\u4e2d\u4fdd\u7559\u7684\u6570\u636e\u5305\uff0c\u53d1\u73b0\u8fd8\u80fd\u8bbf\u95ee\u5230\u672c\u5e94\u9700\u8981\u767b\u5f55\u7cfb\u7edf\u540e\u624d\u80fd\u8bbf\u95ee\u5230\u7684\u7cfb\u7edf\u4fe1\u606f\uff0c\u8bc1\u660e\u5b58\u5728\u4f1a\u8bdd\u6ce8\u9500\u95ee\u9898"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(76115).Z})),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6f0f\u6d1e\u4fee\u590d\u65b9\u6848"),(0,o.kt)("p",{parentName:"div"},"\u5728\u7528\u6237\u6ce8\u9500\u6216\u9000\u51fa\u5e94\u7528\u7cfb\u7edf\u65f6\uff0c\u670d\u52a1\u5668\u5e94\u53ca\u65f6\u9500\u6bc1Session\u8ba4\u8bc1\u4f1a\u8bdd\u4fe1\u606f\u5e76\u6e05\u7a7a\u5ba2\u6237\u7aef\u6d4f\u89c8\u5668Session\u5c5e\u6027\u6807\u8bc6"))))}l.isMDXComponent=!0},57595:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/LogoffFunction-1-3449d6958fd62e6387345f2b5717fefe.png"},93769:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/LogoffFunction-2-bfa56e17cd6a6870103eeab4ddb16573.png"},89594:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/LogoffFunction-3-00114f2785ec84b9f6383c704947bc17.png"},76115:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/LogoffFunction-4-47859b8e1c25fb6e515f7b07f21b1e63.png"}}]);