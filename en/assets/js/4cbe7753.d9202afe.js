(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[3118],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5369:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>l,toc:()=>s,default:()=>p});var r=n(22122),a=(n(67294),n(3905));const i={sidebar_position:11},o="\u4efb\u610f\u6587\u4ef6\u4e0b\u8f7d/\u8bfb\u53d6",l={unversionedId:"CommonVulnerabilities/AnyFileDownload",id:"CommonVulnerabilities/AnyFileDownload",isDocsHomePage:!1,title:"\u4efb\u610f\u6587\u4ef6\u4e0b\u8f7d/\u8bfb\u53d6",description:"\u6f0f\u6d1e\u63cf\u8ff0\uff1a",source:"@site/wiki/CommonVulnerabilities/AnyFileDownload.md",sourceDirName:"CommonVulnerabilities",slug:"/CommonVulnerabilities/AnyFileDownload",permalink:"/en/wiki/CommonVulnerabilities/AnyFileDownload",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"teamSidebar",previous:{title:"XSS\u6f0f\u6d1e",permalink:"/en/wiki/CommonVulnerabilities/xss"},next:{title:"SSRF\u6f0f\u6d1e",permalink:"/en/wiki/CommonVulnerabilities/SSRF"}},s=[],c={toc:s};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4efb\u610f\u6587\u4ef6\u4e0b\u8f7d\u8bfb\u53d6"},"\u4efb\u610f\u6587\u4ef6\u4e0b\u8f7d/\u8bfb\u53d6"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6f0f\u6d1e\u63cf\u8ff0\uff1a")),(0,a.kt)("p",null,"\u4e00\u4e9b\u7f51\u7ad9\u7531\u4e8e\u4e1a\u52a1\u9700\u6c42\uff0c\u53ef\u80fd\u63d0\u4f9b\u6587\u4ef6\u67e5\u770b\u6216\u4e0b\u8f7d\u7684\u529f\u80fd\uff0c\u5982\u679c\u5bf9\u7528\u6237\u67e5\u770b\u6216\u4e0b\u8f7d\u7684\u6587\u4ef6\u4e0d\u505a\u9650\u5236\uff0c\u5219\u6076\u610f\u7528\u6237\u5c31\u80fd\u591f\u67e5\u770b\u6216\u4e0b\u8f7d\u4efb\u610f\u7684\u6587\u4ef6\uff0c\u53ef\u4ee5\u662f\u6e90\u4ee3\u7801\u6587\u4ef6\u3001\u654f\u611f\u6587\u4ef6\u7b49\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6f0f\u6d1e\u6848\u4f8b\uff1a")),(0,a.kt)("p",null,"\u8bbf\u95ee\u6d4b\u8bd5\u7f51\u7ad9\u5177\u6709\u4e0b\u8f7d\u6587\u4ef6\u7684\u529f\u80fd\u70b9"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(64689).Z})),(0,a.kt)("p",null,"\u62fc\u63a5\u60f3\u8981\u8bbf\u95ee\u7684\u6587\u4ef6\u8def\u5f84\uff0c\u4f8b\u5982../../etc/passwd\u6587\u4ef6\uff0c\u6210\u529f\u8bfb\u53d6\u5230\u8be5\u6587\u4ef6\u5185\u5bb9"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(83659).Z})),(0,a.kt)("p",null,"Windows\u7cfb\u7edf\u4e0b\u53ef\u4ee5\u62fc\u63a5\u8bbf\u95ee..",".",".",".",".",".",".",".",".",".",".\\Windows\\win.ini"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(14422).Z})),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u6f0f\u6d1e\u4fee\u590d\u65b9\u6848"),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol"},"\u8fc7\u6ee4\u70b9(.)\u4f7f\u7528\u6237\u5728url\u4e2d\u4e0d\u80fd\u56de\u6eaf\u4e0a\u7ea7\u76ee\u5f55\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u6b63\u5219\u4e25\u683c\u5224\u65ad\u7528\u6237\u8f93\u5165\u53c2\u6570\u7684\u683c\u5f0f\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u5c06\u4e0b\u8f7d\u533a\u72ec\u7acb\u51fa\u6765\uff0c\u653e\u5728\u9879\u76ee\u8def\u5f84\u5916\uff0c\u7ed9\u6bcf\u4e2a\u4e0b\u8f7d\u8d44\u6e90\u56fa\u5b9a\u7684URL\uff0c\u800c\u4e0d\u662f\u6240\u6709\u7684\u4e0b\u8f7d\u8d44\u6e90\u90fd\u662f\u7edf\u4e00\u7684URL\uff1a",(0,a.kt)("a",{parentName:"li",href:"http://www.test.com/download?filename=%E6%96%87%E4%BB%B6%E5%90%8D%E3%80%82"},"http://www.test.com/download?filename=\u6587\u4ef6\u540d\u3002"))))))}p.isMDXComponent=!0},64689:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/AnyFileDownload-1-4631ff4b7ac7416a89c2dcd04e534b14.png"},83659:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/AnyFileDownload-2-ef7cb54aec1b8ae558be3424dc678730.png"},14422:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/AnyFileDownload-3-6142e782e6c07893ddd4b5a1cf159372.png"}}]);