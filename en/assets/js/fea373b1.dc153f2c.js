"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[7401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=m(n),f=a,d=s["".concat(c,".").concat(f)]||s[f]||u[f]||i;return n?r.createElement(d,o(o({ref:t},l),{},{components:n})):r.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:a,o[1]=p;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},46750:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:10},o="\u914d\u7f6e\u5b89\u88c5\u8bc1\u4e66MITM\u52ab\u6301",p={unversionedId:"manual/expert-mode/mitm/configure-certificate",id:"manual/expert-mode/mitm/configure-certificate",isDocsHomePage:!1,title:"\u914d\u7f6e\u5b89\u88c5\u8bc1\u4e66MITM\u52ab\u6301",description:"\u4efb\u4f55\u6d4f\u89c8\u5668\u90fd\u53ef\u4ee5\uff0c\u4f46\u662f\u5fc5\u987b\u914d\u7f6eHTTPS\u8bc1\u4e66\uff0c\u652f\u6301\u591a\u79cd\u6d4f\u89c8\u5668\u7c7b\u578b\u3002",source:"@site/products/manual/expert-mode/mitm/configure-certificate.md",sourceDirName:"manual/expert-mode/mitm",slug:"/manual/expert-mode/mitm/configure-certificate",permalink:"/en/products/manual/expert-mode/mitm/configure-certificate",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"teamSidebar",previous:{title:"\u514d\u914d\u7f6eMITM\u52ab\u6301",permalink:"/en/products/manual/expert-mode/mitm/Configuration-free"},next:{title:"\u5f00\u59cb\u52ab\u6301",permalink:"/en/products/manual/expert-mode/mitm/start-hijacking"}},c=[],m={toc:c},l="wrapper";function s(e){let{components:t,...i}=e;return(0,a.kt)(l,(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u914d\u7f6e\u5b89\u88c5\u8bc1\u4e66mitm\u52ab\u6301"},"\u914d\u7f6e\u5b89\u88c5\u8bc1\u4e66MITM\u52ab\u6301"),(0,a.kt)("p",null,"\u4efb\u4f55\u6d4f\u89c8\u5668\u90fd\u53ef\u4ee5\uff0c\u4f46\u662f\u5fc5\u987b\u914d\u7f6eHTTPS\u8bc1\u4e66\uff0c\u652f\u6301\u591a\u79cd\u6d4f\u89c8\u5668\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"\u624b\u5de5\u6d4b\u8bd5"),"--",(0,a.kt)("inlineCode",{parentName:"p"},"MITM\u4ea4\u4e92\u5f0f\u575a\u6301"),"--",(0,a.kt)("inlineCode",{parentName:"p"},"MITM"),"--",(0,a.kt)("inlineCode",{parentName:"p"},"\u63d2\u4ef6\u81ea\u52a8\u52a0\u8f7d"),"--",(0,a.kt)("inlineCode",{parentName:"p"},"\u9009\u62e9\u4f60\u9700\u8981\u4f7f\u7528\u7684\u63d2\u4ef6"),"--",(0,a.kt)("inlineCode",{parentName:"p"},"\u52ab\u6301\u4ee3\u7406\u4e3b\u673a\u52ab\u6301\u4ee3\u7406\u7aef\u53e3"),"\uff08\u9ed8\u8ba4\u65e0\u9700\u4fee\u6539\uff09--",(0,a.kt)("inlineCode",{parentName:"p"},"\u52ab\u6301\u542f\u52a8"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(75397).Z})),(0,a.kt)("p",null,"\u70b9\u51fbHTTPS\u8bc1\u4e66\u914d\u7f6e\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(65139).Z})),(0,a.kt)("p",null,"\u70b9\u51fbHTTPS\u8bc1\u4e66\u914d\u7f6e\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(76396).Z})),(0,a.kt)("p",null,"\u4fee\u6539\u4e0b\u8f7d\u8bc1\u4e66\u7684\u540e\u7f00\uff0c\u53bb\u6389\u201c.pem\u201d\uff0c\u4fee\u6539\u540e\u7684\u8bc1\u4e66\u5982\u4e0b\uff0c\u53cc\u51fb\u8fdb\u884c\u5b89\u88c5\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(43297).Z})),(0,a.kt)("p",null,"\u8bc1\u4e66\u9700\u5b89\u88c5\u4e3a\u6839\u8bc1\u4e66\uff0c\u70b9\u51fb\u5b89\u88c5\uff0c\u6309\u7167\u6b65\u9aa4\u8fdb\u884c\u64cd\u4f5c\u5373\u53ef\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(13449).Z})),(0,a.kt)("p",null,"\u8bc1\u4e66\u5b89\u88c5\u5b8c\u6210\uff0c\u6253\u5f00\u4f60\u6240\u9700\u8981\u4f7f\u7528\u7684\u6d4f\u89c8\u5668\uff0c\u914d\u7f6e\u4ee3\u7406127.0.0.1:8083 \u5373\u5f00\u59cb\u6293\u5305\uff0c\u6240\u793a\uff1a\u706b\u72d0\u6d4f\u89c8\u5668MITM\u52ab\u6301\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(73279).Z})))}s.isMDXComponent=!0},73279:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mitm-10-1b79effc1a1f9242ad8286485f9464fd.png"},75397:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mitm-5-2991911dfe6ea22dafd10e0280a8392b.png"},65139:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mitm-6-74a261564d5fd608b22f680e5762f146.png"},76396:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mitm-7-212faad9fe8f6f8b3c12284137a19f54.png"},43297:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mitm-8-f5c50c2de69d5b6cf10dae08e82b1ea4.png"},13449:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mitm-9-7b346f88c16dec1f0ab77c6b4be14577.png"}}]);