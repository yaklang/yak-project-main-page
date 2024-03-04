"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[4076],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var i=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),o=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=o(e.components);return i.createElement(l.Provider,{value:n},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},y=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=o(t),y=r,d=g["".concat(l,".").concat(y)]||g[y]||u[y]||a;return t?i.createElement(d,s(s({ref:n},c),{},{components:t})):i.createElement(d,s({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=y;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[g]="string"==typeof e?e:r,s[1]=p;for(var o=2;o<a;o++)s[o]=t[o];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}y.displayName="MDXCreateElement"},14879:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var i=t(58168),r=(t(96540),t(15680));const a={sidebar_position:9},s="Axis2\u63d2\u4ef6\u4f7f\u7528",p={unversionedId:"wiki/DetectionPlug-in/Axis2",id:"wiki/DetectionPlug-in/Axis2",isDocsHomePage:!1,title:"Axis2\u63d2\u4ef6\u4f7f\u7528",description:"1 Axis2\u5f31\u53e3\u4ee4\u68c0\u6d4b",source:"@site/Yaklab/wiki/DetectionPlug-in/Axis2.md",sourceDirName:"wiki/DetectionPlug-in",slug:"/wiki/DetectionPlug-in/Axis2",permalink:"/Yaklab/wiki/DetectionPlug-in/Axis2",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"teamSidebar",previous:{title:"\u903b\u8f91\u8d8a\u6743",permalink:"/Yaklab/wiki/LogicalUltraVires"},next:{title:"JBOSS\u63d2\u4ef6\u4f7f\u7528",permalink:"/Yaklab/wiki/DetectionPlug-in/JBOSS"}},l=[{value:"1 Axis2\u5f31\u53e3\u4ee4\u68c0\u6d4b",id:"1-axis2\u5f31\u53e3\u4ee4\u68c0\u6d4b",children:[]},{value:"2 Apache Axis2 HappyAxis.jsp\u4fe1\u606f\u6cc4\u9732",id:"2-apache-axis2-happyaxisjsp\u4fe1\u606f\u6cc4\u9732",children:[]},{value:"3 Axis2 \u7248\u672c\u4fe1\u606f\u6cc4\u9732\u6f0f\u6d1e",id:"3-axis2-\u7248\u672c\u4fe1\u606f\u6cc4\u9732\u6f0f\u6d1e",children:[]},{value:"4 Axis2 admin XSS\u6f0f\u6d1e\u68c0\u6d4b",id:"4-axis2-admin-xss\u6f0f\u6d1e\u68c0\u6d4b",children:[]}],o={toc:l},c="wrapper";function g(e){let{components:n,...a}=e;return(0,r.yg)(c,(0,i.A)({},o,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"axis2\u63d2\u4ef6\u4f7f\u7528"},"Axis2\u63d2\u4ef6\u4f7f\u7528"),(0,r.yg)("h2",{id:"1-axis2\u5f31\u53e3\u4ee4\u68c0\u6d4b"},"1 Axis2\u5f31\u53e3\u4ee4\u68c0\u6d4b"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,r.yg)("p",null,"Yakit\u6b63\u5728\u52aa\u529b\u7f16\u5199~"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,r.yg)("p",null,"\u5f31\u5bc6\u7801\u767b\u5f55\u540e\u53f0\uff1a"),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(28409).A})),(0,r.yg)("p",null,"\u6d4b\u8bd5\u5f31\u5bc6\u7801\uff1a\u767b\u5f55\u5230\u540e\u53f0\nadmin/axis2"),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(80226).A})),(0,r.yg)("h2",{id:"2-apache-axis2-happyaxisjsp\u4fe1\u606f\u6cc4\u9732"},"2 Apache Axis2 HappyAxis.jsp\u4fe1\u606f\u6cc4\u9732"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,r.yg)("p",null,"Yakit\u6b63\u5728\u52aa\u529b\u7f16\u5199~"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(1355).A})),(0,r.yg)("h2",{id:"3-axis2-\u7248\u672c\u4fe1\u606f\u6cc4\u9732\u6f0f\u6d1e"},"3 Axis2 \u7248\u672c\u4fe1\u606f\u6cc4\u9732\u6f0f\u6d1e"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,r.yg)("p",null,"Yakit\u6b63\u5728\u52aa\u529b\u7f16\u5199~"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(55444).A})),(0,r.yg)("h2",{id:"4-axis2-admin-xss\u6f0f\u6d1e\u68c0\u6d4b"},"4 Axis2 admin XSS\u6f0f\u6d1e\u68c0\u6d4b"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,r.yg)("p",null,"Yakit\u6b63\u5728\u52aa\u529b\u7f16\u5199~"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(76573).A})))}g.isMDXComponent=!0},28409:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Axis2-1-3ec12d660273ccc1e1353da33ed81f13.png"},80226:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Axis2-2-85804c6b2ec05f3c75f512852d678179.png"},1355:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Axis2-3-1d6fb2264dd44d322c3d6674bc91490a.png"},55444:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Axis2-4-9f3e0254215371445aa06c7154900e34.png"},76573:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Axis2-5-4a511bac4c1453d2b4bf673959b62196.png"}}]);