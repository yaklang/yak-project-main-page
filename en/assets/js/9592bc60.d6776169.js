(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[6732],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=i,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},96606:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>a,metadata:()=>l,toc:()=>s,default:()=>c});var r=n(22122),i=(n(67294),n(3905));const o={sidebar_position:13},a="\u6587\u4ef6\u5305\u542b\u6f0f\u6d1e",l={unversionedId:"CommonVulnerabilities/FileContains",id:"CommonVulnerabilities/FileContains",isDocsHomePage:!1,title:"\u6587\u4ef6\u5305\u542b\u6f0f\u6d1e",description:"1 \u672c\u5730\u6587\u4ef6\u5305\u542b\uff08LFI\uff09",source:"@site/wiki/CommonVulnerabilities/FileContains.md",sourceDirName:"CommonVulnerabilities",slug:"/CommonVulnerabilities/FileContains",permalink:"/en/wiki/CommonVulnerabilities/FileContains",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"teamSidebar",previous:{title:"SSRF\u6f0f\u6d1e",permalink:"/en/wiki/CommonVulnerabilities/SSRF"},next:{title:"\u4fe1\u606f\u904d\u5386/\u6cc4\u9732",permalink:"/en/wiki/CommonVulnerabilities/InformationDisclosure"}},s=[{value:"1 \u672c\u5730\u6587\u4ef6\u5305\u542b\uff08LFI\uff09",id:"1-\u672c\u5730\u6587\u4ef6\u5305\u542b\uff08lfi\uff09",children:[]},{value:"2 \u8fdc\u7a0b\u6587\u4ef6\u5305\u542b\uff08RFI\uff09",id:"2-\u8fdc\u7a0b\u6587\u4ef6\u5305\u542b\uff08rfi\uff09",children:[]}],p={toc:s};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6587\u4ef6\u5305\u542b\u6f0f\u6d1e"},"\u6587\u4ef6\u5305\u542b\u6f0f\u6d1e"),(0,i.kt)("h2",{id:"1-\u672c\u5730\u6587\u4ef6\u5305\u542b\uff08lfi\uff09"},"1 \u672c\u5730\u6587\u4ef6\u5305\u542b\uff08LFI\uff09"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6f0f\u6d1e\u63cf\u8ff0\uff1a")),(0,i.kt)("p",null,"\u6587\u4ef6\u5305\u542b\u51fd\u6570\u52a0\u8f7d\u7684\u53c2\u6570\u6ca1\u6709\u7ecf\u8fc7"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6f0f\u6d1e\u6848\u4f8b\uff1a")),(0,i.kt)("p",null,"\u8bbf\u95ee\u6d4b\u8bd5\u7f51\u7ad9\n",(0,i.kt)("img",{src:n(20789).Z})),(0,i.kt)("p",null,"\u5bf9\u5b58\u5728\u6f0f\u6d1e\u7684\u9875\u9762\u8fdb\u884c\u6293\u5305\uff0c\u5e76\u6784\u5efa\u6076\u610fpayload"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(47495).Z})),(0,i.kt)("h2",{id:"2-\u8fdc\u7a0b\u6587\u4ef6\u5305\u542b\uff08rfi\uff09"},"2 \u8fdc\u7a0b\u6587\u4ef6\u5305\u542b\uff08RFI\uff09"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u6f0f\u6d1e\u63cf\u8ff0\uff1a")),(0,i.kt)("p",null,"\u8fdc\u7a0b\u6587\u4ef6\u5305\u542b\u5c31\u662f\u5141\u8bb8\u653b\u51fb\u8005\u5305\u542b\u4e00\u4e2a\u8fdc\u7a0b\u7684\u6587\u4ef6,\u4e00\u822c\u662f\u5728\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u9884\u5148\u8bbe\u7f6e\u597d\u7684\u811a\u672c"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"(1) \u65e0\u9650\u5236\u8fdc\u7a0b\u6587\u4ef6\u5305\u542b\u6f0f\u6d1e"))),(0,i.kt)("p",null,"\u65e0\u9650\u5236\u8fdc\u7a0b\u6587\u4ef6\u5305\u542b\u662f\u6307\u5305\u542b\u6587\u4ef6\u7684\u4f4d\u7f6e\u5e76\u4e0d\u662f\u5728\u672c\u5730\u670d\u52a1\u5668\uff0c\u800c\u662f\u901a\u8fc7URL\u7684\u5f62\u5f0f\u5305\u542b\u5176\u4ed6\u670d\u52a1\u5668\u4e0a\u7684\u6587\u4ef6\uff0c\u6267\u884c\u6587\u4ef6\u4e2d\u7684\u6076\u610f\u4ee3\u7801\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"(2) \u6709\u9650\u5236\u8fdc\u7a0b\u6587\u4ef6\u5305\u542b\u6f0f\u6d1e"))))}c.isMDXComponent=!0},20789:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/FileContains-1-fb4dc0a7a3a4ec249f672bcc5dd3a36c.png"},47495:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/FileContains-2-8dcf6bf30e1d84786d087ea6f0fec519.png"}}]);