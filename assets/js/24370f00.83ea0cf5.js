(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[3572],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},o="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),o=l(r),m=a,b=o["".concat(s,".").concat(m)]||o[m]||d[m]||i;return r?n.createElement(b,p(p({ref:t},c),{},{components:r})):n.createElement(b,p({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[o]="string"==typeof e?e:a,p[1]=u;for(var l=2;l<i;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55934:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>p,metadata:()=>u,toc:()=>s,default:()=>c});var n=r(22122),a=(r(67294),r(3905));const i={sidebar_position:15},p="\u57fa\u7840\u7528\u6cd5",u={unversionedId:"expert-mode/Web Fuzzer/Basic-usage",id:"expert-mode/Web Fuzzer/Basic-usage",isDocsHomePage:!1,title:"\u57fa\u7840\u7528\u6cd5",description:"\u4f7f\u7528\u8fc7Burp Suite\u7684\u540c\u5b66\u90fd\u77e5\u9053\uff0c\u5728\u6e17\u900f\u6d4b\u8bd5\u8fc7\u7a0b\u4e2d\uff0c\u5176\u5b9e\u76f8\u6bd4 Burpsuite \u7684\u4ea4\u4e92\u5f0f\u52ab\u6301\u529f\u80fd\uff0cRepeater \u548c Intruder \u5bf9\u4e8e \u201c\u624b\u5de5\u6e17\u900f\u201d \u6765\u8bf4\uff0c\u5176\u5b9e\u662f\u5927\u5bb6\u82b1\u7684\u65f6\u95f4\u6700\u591a\u7684\u3002\u5f53\u6211\u4eec\u53ea\u5b9e\u73b0\u4e86 Burpsuite \u7684\u6838\u5fc3\u4ea4\u4e92\u5f0f\u52ab\u6301\u7684\u65f6\u5019\uff0c\u5176\u5b9e\u5bf9 Burp \u7684\u66ff\u4ee3\u8fd8\u8fdc\u4e0d\u591f\u3002",source:"@site/products/expert-mode/Web Fuzzer/Basic-usage.md",sourceDirName:"expert-mode/Web Fuzzer",slug:"/expert-mode/Web Fuzzer/Basic-usage",permalink:"/products/expert-mode/Web Fuzzer/Basic-usage",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"teamSidebar",previous:{title:"\u7f51\u7ad9\u6811\u89c6\u89d2",permalink:"/products/expert-mode/mitm/site-tree"},next:{title:"\u4f7f\u7528Web Fuzzer\u8fdb\u884c\u6a21\u7cca\u6d4b\u8bd5",permalink:"/products/expert-mode/Web Fuzzer/Fuzz-tags"}},s=[{value:"\u7528 Web Fuzzer \u8fdb\u884cWeb\u5e94\u7528\u4ea4\u4e92\u5f0f\u6d41\u91cf\u91cd\u653e",id:"\u7528-web-fuzzer-\u8fdb\u884cweb\u5e94\u7528\u4ea4\u4e92\u5f0f\u6d41\u91cf\u91cd\u653e",children:[]},{value:"\u5feb\u6377\u8fdb\u5165 Web Fuzzer \u9875\u9762",id:"\u5feb\u6377\u8fdb\u5165-web-fuzzer-\u9875\u9762",children:[]},{value:"\u56fa\u5b9a\u76ee\u6807\u6570\u636e\u5305Fuzzer",id:"\u56fa\u5b9a\u76ee\u6807\u6570\u636e\u5305fuzzer",children:[]},{value:"\u5206\u4eab/\u5bfc\u5165\u6570\u636e\u5305Fuzzer",id:"\u5206\u4eab\u5bfc\u5165\u6570\u636e\u5305fuzzer",children:[]},{value:"\u6570\u636e\u5305\u626b\u63cf",id:"\u6570\u636e\u5305\u626b\u63cf",children:[]}],l={toc:s};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u57fa\u7840\u7528\u6cd5"},"\u57fa\u7840\u7528\u6cd5"),(0,a.kt)("p",null,"\u4f7f\u7528\u8fc7Burp Suite\u7684\u540c\u5b66\u90fd\u77e5\u9053\uff0c\u5728\u6e17\u900f\u6d4b\u8bd5\u8fc7\u7a0b\u4e2d\uff0c\u5176\u5b9e\u76f8\u6bd4 Burpsuite \u7684\u4ea4\u4e92\u5f0f\u52ab\u6301\u529f\u80fd\uff0cRepeater \u548c Intruder \u5bf9\u4e8e \u201c\u624b\u5de5\u6e17\u900f\u201d \u6765\u8bf4\uff0c\u5176\u5b9e\u662f\u5927\u5bb6\u82b1\u7684\u65f6\u95f4\u6700\u591a\u7684\u3002\u5f53\u6211\u4eec\u53ea\u5b9e\u73b0\u4e86 Burpsuite \u7684\u6838\u5fc3\u4ea4\u4e92\u5f0f\u52ab\u6301\u7684\u65f6\u5019\uff0c\u5176\u5b9e\u5bf9 Burp \u7684\u66ff\u4ee3\u8fd8\u8fdc\u4e0d\u591f\u3002"),(0,a.kt)("p",null,"BP\u7684 Intruder \u6838\u5fc3\u5176\u5b9e\u5e76\u4e0d\u662f\u67d0\u4e00\u4e2a\u529f\u80fd\uff0c\u800c\u662f\u4e00\u6574\u5957\u7684\u64cd\u4f5c\u6d41\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u52ab\u6301 HTTPS"),(0,a.kt)("li",{parentName:"ol"},"HTTP History \u67e5\u770b\u52ab\u6301\u5230\u7684\u8bf7\u6c42"),(0,a.kt)("li",{parentName:"ol"},"History \u4e2d\u53d1\u9001\u9700\u8981\u6d4b\u8bd5\u7684\u8bf7\u6c42\u5230 \u201c\u63d2\u4ef6\u201d \u6216\u8005 Repeater / Intruder"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6539\u6570\u636e\u5305\uff0c\u91cd\u653e / \u7206\u7834")),(0,a.kt)("p",null,"\u6211\u4eec\u53d1\u73b0\uff0c\u524d\u4e09\u6b65\u5176\u5b9e\u53ea\u662f\u5927\u5bb6\u82b1\u8d39\u5927\u91cf\u65f6\u95f4\u7684 \u201c\u5165\u53e3\u201d\uff0c\u662f\u4e00\u4e2a\u83b7\u53d6\u6d41\u91cf\u7684\u8fc7\u7a0b\uff0c\u5f88\u591a\u65f6\u5019\u5927\u5bb6\u82b1\u4e86\u5927\u529f\u592b\u7684\u65f6\u95f4\u5728 Repeater \u548c Intruder \u4e0a\u3002"),(0,a.kt)("p",null,"Yakit \u4f7f\u7528 yaklang \u7684\u6838\u5fc3\u6a21\u7cca\u6d4b\u8bd5\u6807\u7b7e\u8bed\u6cd5\uff0c\u5b9e\u73b0\u4e86\u5bf9 Repeater \u548c Intruder \u7684\u5b8c\u7f8e\u6574\u5408\uff0c\u751a\u81f3\u53ef\u4ee5\u514d\u914d\u7f6e\u5b9e\u73b0\u6279\u91cf\u53d1\u5305\u6a21\u7cca\u6d4b\u8bd5\u3002 "),(0,a.kt)("h3",{id:"\u7528-web-fuzzer-\u8fdb\u884cweb\u5e94\u7528\u4ea4\u4e92\u5f0f\u6d41\u91cf\u91cd\u653e"},"\u7528 Web Fuzzer \u8fdb\u884cWeb\u5e94\u7528\u4ea4\u4e92\u5f0f\u6d41\u91cf\u91cd\u653e"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Web Fuzzr \u6a21\u5757\u652f\u6301\u7528\u6237\u81ea\u5b9a\u4e49HTTP\u539f\u6587\u53d1\u9001\u8bf7\u6c42\u3002\u4e3a\u4e86\u8ba9\u7528\u6237\u4f7f\u7528\u7b80\u5355\uff0c\u7b26\u5408\u76f4\u89c9\uff0c\u53ea\u9700\u8981\u5173\u5fc3\u6570\u636e\u76f8\u5173\u4fe1\u606f\uff0cYakit\u540e\u7aef\u505a\u4e86\u5f88\u591a\u5de5\u4f5c\u3002"),(0,a.kt)("p",{parentName:"div"},"HTTP\u539f\u6587\u4e2d\u4e00\u4e9b\u4fdd\u8bc1\u6570\u636e\u4f20\u8f93\u548c\u89e3\u6790\u7684\u4fe1\u606f\u90fd\u662f\u7531Yakit\u540e\u7aef\u4fee\u590d\u8865\u5168\u7684\uff0c\u4f8b\u5982\u4fee\u590dCRLF\uff0c\u8865\u5168Content-Type\u3001\u901a\u8fc7chunk\u65b9\u5f0f\u4f20\u8f93\u3001\u8865\u5168boundary\u3001\u4fee\u590d Content-Length\u7b49\u7b49\u3002"))),(0,a.kt)("p",null,"\u9996\u5148\u6211\u4eec\u5148\u6765\u5b66\u4e60\u91cd\u653e\u8bf7\u6c42\u7684\u64cd\u4f5c\uff0c\u5728\u65e5\u5e38\u5de5\u4f5c\u4e2d\u53ef\u4ee5\u4f7f\u7528 Web Fuzzer \u8fdb\u884c\u8bf7\u6c42\u4e0e\u54cd\u5e94\u7684\u6d88\u606f\u9a8c\u8bc1\u5206\u6790\uff0c\u6bd4\u5982\u4fee\u6539\u8bf7\u6c42\u53c2\u6570\uff0c\u9a8c\u8bc1\u8f93\u5165\u7684\u6f0f\u6d1e\uff1b\u4fee\u6539\u8bf7\u6c42\u53c2\u6570\uff0c\u9a8c\u8bc1\u903b\u8f91\u8d8a\u6743\uff1b \u4ece\u62e6\u622a\u5386\u53f2\u8bb0\u5f55\u4e2d\uff0c\u6355\u83b7\u7279\u5f81\u6027\u7684\u8bf7\u6c42\u6d88\u606f\u8fdb\u884c\u8bf7\u6c42\u91cd\u653e\u3002"),(0,a.kt)("p",null,"Web Fuzzer \u754c\u9762\u5982\u56fe\u6240\u793a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(17901).Z})," "),(0,a.kt)("p",null,"\u5de6\u8fb9\u4e3a\u9ad8\u7ea7\u914d\u7f6e\u548c\u8bf7\u6c42\u6d88\u606f\u533a\uff0c\u6211\u4eec\u4e3a\u6bcf\u4e00\u4e2a\u8bf7\u6c42\u90fd\u505a\u4e86\u8bf7\u6c42\u7f16\u53f7\uff0c\u5f53\u6709\u591a\u4e2aweb fuzzer\u9875\u9762\u7684\u65f6\u5019\uff0c\u5728\u8bf7\u6c42\u7f16\u7801\u7684\u6570\u5b57\u4e0a\u53cc\u51fb\u4e4b\u540e\uff0c\u53ef\u4ee5\u4fee\u6539\u8bf7\u6c42\u7684\u540d\u5b57\uff0c\u8fd9\u662f\u4e3a\u4e86\u65b9\u4fbf\u591a\u4e2a\u8bf7\u6c42\u6d88\u606f\u65f6\uff0c\u505a\u5907\u6ce8\u6216\u533a\u5206\u7528\u7684\u3002"),(0,a.kt)("p",null,"\u5728\u5de6\u4e0a\u89d2\uff0c\u6709\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"\u53d1\u9001\u6570\u636e\u5305"),"\u6309\u94ae\uff0c\u5f53\u6211\u4eec\u5bf9\u8bf7\u6c42\u7684\u6d88\u606f\u7f16\u8f91\u5b8c\u4e4b\u540e\uff0c\u70b9\u51fb\u6b64\u6309\u94ae\u5373\u53d1\u9001\u8bf7\u6c42\u7ed9\u670d\u52a1\u5668\u7aef\u3002"),(0,a.kt)("p",null,"\u54cd\u5e94\u6d88\u606f\u533a\u4e3a\u5bf9\u5e94\u7684\u8bf7\u6c42\u6d88\u606f\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"\u53d1\u9001\u6570\u636e\u5305"),"\u6309\u94ae\u540e\uff0c\u670d\u52a1\u5668\u7aef\u7684\u53cd\u9988\u6d88\u606f\u3002\u901a\u8fc7\u4fee\u6539\u8bf7\u6c42\u6d88\u606f\u7684\u53c2\u6570\u6765\u6bd4\u5bf9\u5206\u6790\u6bcf\u6b21\u5e94\u7b54\u6d88\u606f\u4e4b\u95f4\u7684\u5dee\u5f02\uff0c\u80fd\u66f4\u597d\u7684\u5e2e\u52a9\u6211\u4eec\u5206\u6790\u7cfb\u7edf\u53ef\u80fd\u5b58\u5728\u7684\u6f0f\u6d1e\u3002"),(0,a.kt)("p",null,"\u5bf9\u6570\u636e\u5305\u53f3\u952e\u70b9\u51fb\uff0c\u53ef\u4ee5\u5bf9\u6570\u636e\u5305\u8fdb\u884c\u7f16\u7801/\u89e3\u7801\u64cd\u4f5c\uff0c\u4ee5\u53ca\u7f8e\u5316\u6570\u636e\u5305\u64cd\u4f5c\u5e76\u652f\u6301\u667a\u80fd\u81ea\u52a8\u89e3\u7801\uff08\u6ce8\u610f\uff1a\u9700\u8981\u9009\u62e9\u4f60\u6240\u9700\u8981\u7684\u7f16\u7801\u89e3\u7801\u6570\u636e\uff0c\u6216\u8005\u76f4\u63a5\u5168\u9009\uff0c\u5feb\u6377\u952eCtrl+A\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(50006).Z})),(0,a.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\u652f\u6301\u5e02\u9762\u4e0a\u6240\u6709\u6d41\u884c\u7684\u5bc6\u7801\u5b66\u7f16\u7801\u89e3\u7801\u5305\u62ec\u4e0d\u4ec5\u9650\u4e8e\uff08URL\u7f16\u89e3\u7801/base64\u7f16\u89e3\u7801/HEX\u7f16\u89e3\u7801/HTML\u7f16\u89e3\u7801/Unicode\u7f16\u89e3\u7801/JWT\u89e3\u6790\uff09\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u5bf9\u5f53\u524d\u8bf7\u6c42\u5305\u7684\u8bf7\u6c42\u7c7b\u578b\u505a\u4fee\u6539\u6216Chunk\u7f16\u7801\u7ed5\u8fc7\u4e00\u4e9bwaf\u53ef\u4ee5\u76f4\u63a5\u53f3\u952e\u5bf9\u6570\u636e\u5305\u4fee\u6539\u3002"),(0,a.kt)("p",null,"\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"\u5386\u53f2"),"\u6309\u94ae\u8fd8\u53ef\u4ee5\u5bfc\u5165\u4e4b\u524d\u53d1\u8fc7\u7684\u5305\u3002"),(0,a.kt)("h3",{id:"\u5feb\u6377\u8fdb\u5165-web-fuzzer-\u9875\u9762"},"\u5feb\u6377\u8fdb\u5165 Web Fuzzer \u9875\u9762"),(0,a.kt)("p",null,"\u5728 history \u9875\u9762\u70b9\u51fb\u6570\u636e\u5305\u53f3\u952e\uff0c\u53ef\u4ee5\u65b0\u5efaWeb fuzzer\uff0c\u6216\u8005\u4e5f\u53ef\u4ee5\u5bf9\u53c2\u6570\u540d\u5c31\u884c\u6a21\u7cca\u6d4b\u8bd5\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(13827).Z})),(0,a.kt)("p",null,"\u6216\u8005\u5728 MITM \u7684 HTTP",(0,a.kt)("inlineCode",{parentName:"p"},"History"),"\u9875\u9762\u53ef\u4ee5\u53f3\u952e\u53d1\u9001\u5230 Web Fuzzer \u6216\u76f4\u63a5\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"Fuzz"),"\u6309\u94ae\u5c06\u8bf7\u6c42\u5305\u53d1\u9001\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"Web Fuzzer"),"\u3002 "),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(19654).Z})),(0,a.kt)("h3",{id:"\u56fa\u5b9a\u76ee\u6807\u6570\u636e\u5305fuzzer"},"\u56fa\u5b9a\u76ee\u6807\u6570\u636e\u5305Fuzzer"),(0,a.kt)("p",null,"\u70b9\u51fbWeb Fuzzer \u65c1\u8fb9\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"\uff0b\u53f7"),"\u4f1a\u81ea\u52a8\u5f00\u542f\u4e00\u4e2a\u65b0\u7684\u5f39\u6846\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(25935).Z})),(0,a.kt)("p",null,"\u70b9\u51fbURL \u8f93\u5165\u76ee\u6807 \u81ea\u52a8\u751f\u6210\u6784\u9020\u8bf7\u6c42\u8bbf\u95ee\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(27152).Z})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"\u6ce8\u610f"),"\uff1a\u6570\u636e\u5305\u662f\u5426\u4e3ahttp\u8fd8\u662fhttps\u534f\u8bae\uff0c\u662f\u5426\u9700\u8981\u52fe\u9009",(0,a.kt)("inlineCode",{parentName:"em"},"\u5f3a\u5236HTTPS"),"\u3002")),(0,a.kt)("h3",{id:"\u5206\u4eab\u5bfc\u5165\u6570\u636e\u5305fuzzer"},"\u5206\u4eab/\u5bfc\u5165\u6570\u636e\u5305Fuzzer"),(0,a.kt)("p",null,"\u5206\u4eab/\u5bfc\u5165\u529f\u80fd\u53ef\u7528\u4e8e\u4fe1\u606f\u5206\u4eab\uff0c\u5982\u56fe\u6240\u793a\uff0c\u5206\u4eab\u53ef\u4ee5\u8bbe\u7f6e\u6709\u6548\u65f6\u957f\u548c\u5206\u4eab\u5bc6\u7801\uff0c\u51ed\u5206\u4eabid\u548c\u5bc6\u7801\u53ef\u4ee5\u5bfc\u5165\u5206\u4eab\u8005\u7684\u8bf7\u6c42\u5305\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(7525).Z})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"\u6ce8\u610f"),"\uff1a\u6570\u636e\u5305\u662f\u5426\u4e3ahttp\u8fd8\u662fhttps\u534f\u8bae\uff0c\u662f\u5426\u9700\u8981\u52fe\u9009",(0,a.kt)("inlineCode",{parentName:"em"},"\u5f3a\u5236HTTPS"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(32647).Z})),(0,a.kt)("h3",{id:"\u6570\u636e\u5305\u626b\u63cf"},"\u6570\u636e\u5305\u626b\u63cf"),(0,a.kt)("p",null,"MITM\u4ea4\u4e92\u52ab\u6301\u4e2d\u5bf9\u4e8e\u6570\u636e\u5305\uff0c\u53ef\u4ee5\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"\u6570\u636e\u5305\u626b\u63cf")," \u53ef\u4ee5\u6839\u636e\u9700\u6c42\u9009\u62e9\u5bf9\u672c\u6570\u636e\u5305\u626b\u63cf\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(60480).Z})),(0,a.kt)("p",null,"\u9009\u62e9\u626b\u63cf\u7c7b\u578b\u540e\u53ef\u4ee5\u6839\u636e\u9700\u8981\u8bbe\u7f6e\u626b\u63cf\u65f6\u95f4\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(54400).Z})))}c.isMDXComponent=!0},17901:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/images/Web-Fuzzer-1-342739740e7536eff9871e556e6cabc1.png"},60480:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/images/Web-Fuzzer-13-6a174eb5cc2bb42a284e946c8aac0bc7.png"},54400:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/images/Web-Fuzzer-14-5c2280b2c18cbccbbcb7c3a4df81d16f.png"},50006:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/images/Web-Fuzzer-16-f8c91dee6cf11dc60391c5d18f985680.png"},13827:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/images/Web-Fuzzer-2-ac0d0fcbd7a61aea06d502e1e782b36f.png"},19654:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/images/Web-Fuzzer-3-bade99fbab19eb7a077014ebc33a7b8d.png"},25935:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/images/Web-Fuzzer-5-0d02ae2886470aee87953eaac297f99a.png"},27152:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/images/Web-Fuzzer-6-cd65bc3a1ea2169ddd5bd85218627ddc.png"},7525:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/images/Web-Fuzzer-8-1680adb60740efbfef46160ccae94568.png"},32647:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/images/Web-Fuzzer-9-fe18d86c31a5ec33aa9d75aacb8d7ce0.png"}}]);