"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[6193],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),y=i,g=u["".concat(p,".").concat(y)]||u[y]||m[y]||a;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=y;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},33517:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(58168),i=(t(96540),t(15680));const a={sidebar_position:13},o="\u6587\u4ef6\u5305\u542b\u6f0f\u6d1e",l={unversionedId:"wiki/CommonVulnerabilities/FileContains",id:"wiki/CommonVulnerabilities/FileContains",isDocsHomePage:!1,title:"\u6587\u4ef6\u5305\u542b\u6f0f\u6d1e",description:"1 \u672c\u5730\u6587\u4ef6\u5305\u542b\uff08LFI\uff09",source:"@site/Yaklab/wiki/CommonVulnerabilities/FileContains.md",sourceDirName:"wiki/CommonVulnerabilities",slug:"/wiki/CommonVulnerabilities/FileContains",permalink:"/en/Yaklab/wiki/CommonVulnerabilities/FileContains",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"teamSidebar",previous:{title:"SSRF\u6f0f\u6d1e",permalink:"/en/Yaklab/wiki/CommonVulnerabilities/SSRF"},next:{title:"\u4fe1\u606f\u904d\u5386/\u6cc4\u9732",permalink:"/en/Yaklab/wiki/CommonVulnerabilities/InformationDisclosure"}},p=[{value:"1 \u672c\u5730\u6587\u4ef6\u5305\u542b\uff08LFI\uff09",id:"1-\u672c\u5730\u6587\u4ef6\u5305\u542blfi",children:[]},{value:"2 \u8fdc\u7a0b\u6587\u4ef6\u5305\u542b\uff08RFI\uff09",id:"2-\u8fdc\u7a0b\u6587\u4ef6\u5305\u542brfi",children:[]}],s={toc:p},c="wrapper";function u(e){let{components:n,...a}=e;return(0,i.yg)(c,(0,r.A)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"\u6587\u4ef6\u5305\u542b\u6f0f\u6d1e"},"\u6587\u4ef6\u5305\u542b\u6f0f\u6d1e"),(0,i.yg)("h2",{id:"1-\u672c\u5730\u6587\u4ef6\u5305\u542blfi"},"1 \u672c\u5730\u6587\u4ef6\u5305\u542b\uff08LFI\uff09"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6f0f\u6d1e\u63cf\u8ff0\uff1a")),(0,i.yg)("p",null,"\u6587\u4ef6\u5305\u542b\u51fd\u6570\u52a0\u8f7d\u7684\u53c2\u6570\u6ca1\u6709\u7ecf\u8fc7"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6f0f\u6d1e\u6848\u4f8b\uff1a")),(0,i.yg)("p",null,"\u8bbf\u95ee\u6d4b\u8bd5\u7f51\u7ad9\n",(0,i.yg)("img",{src:t(70973).A})),(0,i.yg)("p",null,"\u5bf9\u5b58\u5728\u6f0f\u6d1e\u7684\u9875\u9762\u8fdb\u884c\u6293\u5305\uff0c\u5e76\u6784\u5efa\u6076\u610fpayload"),(0,i.yg)("p",null,(0,i.yg)("img",{src:t(29734).A})),(0,i.yg)("h2",{id:"2-\u8fdc\u7a0b\u6587\u4ef6\u5305\u542brfi"},"2 \u8fdc\u7a0b\u6587\u4ef6\u5305\u542b\uff08RFI\uff09"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6f0f\u6d1e\u63cf\u8ff0\uff1a")),(0,i.yg)("p",null,"\u8fdc\u7a0b\u6587\u4ef6\u5305\u542b\u5c31\u662f\u5141\u8bb8\u653b\u51fb\u8005\u5305\u542b\u4e00\u4e2a\u8fdc\u7a0b\u7684\u6587\u4ef6,\u4e00\u822c\u662f\u5728\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u9884\u5148\u8bbe\u7f6e\u597d\u7684\u811a\u672c"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},"(1) \u65e0\u9650\u5236\u8fdc\u7a0b\u6587\u4ef6\u5305\u542b\u6f0f\u6d1e"))),(0,i.yg)("p",null,"\u65e0\u9650\u5236\u8fdc\u7a0b\u6587\u4ef6\u5305\u542b\u662f\u6307\u5305\u542b\u6587\u4ef6\u7684\u4f4d\u7f6e\u5e76\u4e0d\u662f\u5728\u672c\u5730\u670d\u52a1\u5668\uff0c\u800c\u662f\u901a\u8fc7URL\u7684\u5f62\u5f0f\u5305\u542b\u5176\u4ed6\u670d\u52a1\u5668\u4e0a\u7684\u6587\u4ef6\uff0c\u6267\u884c\u6587\u4ef6\u4e2d\u7684\u6076\u610f\u4ee3\u7801\u3002"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("em",{parentName:"strong"},"(2) \u6709\u9650\u5236\u8fdc\u7a0b\u6587\u4ef6\u5305\u542b\u6f0f\u6d1e"))))}u.isMDXComponent=!0},70973:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/FileContains-1-fb4dc0a7a3a4ec249f672bcc5dd3a36c.png"},29734:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/FileContains-2-8dcf6bf30e1d84786d087ea6f0fec519.png"}}]);