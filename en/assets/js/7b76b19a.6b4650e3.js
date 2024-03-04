"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[6718],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>f});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||y[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11041:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(58168),o=(r(96540),r(15680));const a={sidebar_position:1},i="\u7ae0\u8282\u4ecb\u7ecd",l={unversionedId:"yakexamples/intro",id:"yakexamples/intro",isDocsHomePage:!1,title:"\u7ae0\u8282\u4ecb\u7ecd",description:"Yak \u662f\u4e00\u95e8\u88ab\u8bbe\u8ba1\u7528\u6765\u6784\u5efa\u7b80\u5355\u3001\u9ad8\u6548\u3001\u53ef\u4fe1\u8d56\u8f6f\u4ef6\u7684\u9ed1\u5ba2\u8bed\u8a00\u3002",source:"@site/docs/yakexamples/1-intro.md",sourceDirName:"yakexamples",slug:"/yakexamples/intro",permalink:"/en/docs/yakexamples/intro",editUrl:"https://github.com/yaklang/docs/yakexamples/1-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u5165\u95e8\uff1a\u5341\u5206\u949f\u6559\u7a0b",permalink:"/en/docs/yak-basic/old-memory"},next:{title:"\u51fd\u6570\u5e93\uff1astr - \u5b57\u7b26\u4e32\u5de5\u5177\u96c6",permalink:"/en/docs/yakexamples/strutils"}},c=[],p={toc:c},s="wrapper";function u(e){let{components:t,...r}=e;return(0,o.yg)(s,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"\u7ae0\u8282\u4ecb\u7ecd"},"\u7ae0\u8282\u4ecb\u7ecd"),(0,o.yg)("p",null,"Yak \u662f\u4e00\u95e8\u88ab\u8bbe\u8ba1\u7528\u6765\u6784\u5efa\u7b80\u5355\u3001\u9ad8\u6548\u3001\u53ef\u4fe1\u8d56\u8f6f\u4ef6\u7684\u9ed1\u5ba2\u8bed\u8a00\u3002"),(0,o.yg)("p",null,"\u672c\u7ae0\u662f\u5bf9 Yak \u57fa\u4e8e\u5b9e\u8df5\u7684\u4ecb\u7ecd\uff0c\u5305\u542b\u4e00\u7cfb\u5217\u5e26\u6709\u6ce8\u91ca\u8bf4\u660e\u7684\u793a\u4f8b\u7a0b\u5e8f\u3002"),(0,o.yg)("p",null,"\u672c\u7ae0\u5185\u5bb9\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u5173\u4e8e Yak \u5728\u7f16\u7a0b\u8fc7\u7a0b\u4e2d\u7684\u5982\u4e0b\u65b9\u9762\uff1a"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"str \u5e93\u4ecb\u7ecd\uff1a\u63d0\u4f9b\u5404\u79cd\u5b89\u5168\u7279\u8272\u7684\u5b57\u7b26\u4e32\u89e3\u6790\u548c\u5904\u7406\u51fd\u6570\u3002")))}u.isMDXComponent=!0}}]);