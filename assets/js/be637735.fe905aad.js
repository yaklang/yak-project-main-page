"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[9083],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>f});var o=r(96540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var c=o.createContext({}),s=function(e){var n=o.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=t,f=u["".concat(c,".").concat(d)]||u[d]||y[d]||i;return r?o.createElement(f,a(a({ref:n},p),{},{components:r})):o.createElement(f,a({ref:n},p))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:t,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98663:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=r(58168),t=(r(96540),r(15680));const i={sidebar_position:16},a="16.Cookie \u4e2d\u7684 XSS\uff08Base64\uff09",l={unversionedId:"vulinbox/XSS/16unsafe-cookie-b64",id:"vulinbox/XSS/16unsafe-cookie-b64",isDocsHomePage:!1,title:"16.Cookie \u4e2d\u7684 XSS\uff08Base64\uff09",description:"\u8be5\u793a\u4f8b\u4ece cookis \u4e2d\u8bfb\u53d6\u6570\u636e\u5e76\u7ecf\u8fc7 base64 \u89e3\u7801\uff0c\u5c06\u6570\u636e\u63d2\u5165\u6a21\u7248\u4e2d\u4ece\u800c\u6e32\u67d3\u5230\u524d\u7aef",source:"@site/Yaklab/vulinbox/XSS/16unsafe-cookie-b64.mdx",sourceDirName:"vulinbox/XSS",slug:"/vulinbox/XSS/16unsafe-cookie-b64",permalink:"/Yaklab/vulinbox/XSS/16unsafe-cookie-b64",tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"teamSidebar",previous:{title:"15.Cookie \u4e2d\u7684 XSS",permalink:"/Yaklab/vulinbox/XSS/15unsafe-cookie"},next:{title:"17.Cookie \u4e2d\u7684 XSS\uff08Base64-JSON\uff09",permalink:"/Yaklab/vulinbox/XSS/17unsafe-cookie-b64json"}},c=[{value:"\u793a\u4f8b\u4ee3\u7801\uff1a",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"\u653b\u51fb\u793a\u4f8b\uff1a",id:"\u653b\u51fb\u793a\u4f8b",children:[]},{value:"\u9632\u5fa1\u63aa\u65bd\uff1a",id:"\u9632\u5fa1\u63aa\u65bd",children:[]},{value:"\u9776\u573a\u6f14\u793a\uff1a \u89c6\u9891",id:"\u9776\u573a\u6f14\u793a-\u89c6\u9891",children:[]}],s={toc:c},p="wrapper";function u(e){let{components:n,...r}=e;return(0,t.yg)(p,(0,o.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"16cookie-\u4e2d\u7684-xssbase64"},"16.Cookie \u4e2d\u7684 XSS\uff08Base64\uff09"),(0,t.yg)("p",null,"\u8be5\u793a\u4f8b\u4ece cookis \u4e2d\u8bfb\u53d6\u6570\u636e\u5e76\u7ecf\u8fc7 base64 \u89e3\u7801\uff0c\u5c06\u6570\u636e\u63d2\u5165\u6a21\u7248\u4e2d\u4ece\u800c\u6e32\u67d3\u5230\u524d\u7aef"),(0,t.yg)("h3",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-HTML"},'<div>\nHere are photo for U! <br>\n<img style=\'width: 100px\' src="/static/logo.png" onclick=\'OrdinaryUser\'/>\n<script>const name = "Admin";\nconsole.info("Hello" + `OrdinaryUser: ${name}`);<\/script>\n</div>\n')),(0,t.yg)("h3",{id:"\u653b\u51fb\u793a\u4f8b"},"\u653b\u51fb\u793a\u4f8b\uff1a"),(0,t.yg)("p",null,"\u901a\u8fc7\u5728 Cookie \u4e2d\u6784\u9020\u7279\u5b9a\u7684\u53c2\u6570\uff0c\u653b\u51fb\u8005\u53ef\u4ee5\u6ce8\u5165\u6076\u610f\u811a\u672c\u4ee3\u7801"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-Go"},'Cookie: xCnameB64=YWxlcnQoInhzcyIp\n#\u4fee\u6539cookie\u540e\n<div>\nHere are photo for U! <br>\n<img style=\'width: 100px\' src="/static/logo.png" onclick=\'alert("xss")\'/>\n<script>const name = "Admin";\nconsole.info("Hello" + `alert("xss"): ${name}`);<\/script>\n</div>\n')),(0,t.yg)("h3",{id:"\u9632\u5fa1\u63aa\u65bd"},"\u9632\u5fa1\u63aa\u65bd\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u8f93\u5165\u9a8c\u8bc1\u548c\u8fc7\u6ee4\uff1a\u5728\u5c06\u6570\u636e\u5b58\u50a8\u5230 Cookie \u4e2d\u4e4b\u524d\uff0c\u5bf9\u7528\u6237\u8f93\u5165\u8fdb\u884c\u4e25\u683c\u9a8c\u8bc1\u548c\u8fc7\u6ee4\u3002\u4ec5\u5141\u8bb8\u9884\u671f\u7684\u8f93\u5165\u5185\u5bb9\uff0c\u5e76\u4e14\u5bf9\u8f93\u5165\u5185\u5bb9\u8fdb\u884c\u9002\u5f53\u7684\u7f16\u7801\uff0c\u4ee5\u9632\u6b62\u6ce8\u5165\u6076\u610f\u6570\u636e\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u9650\u5236 Cookie \u7684\u8303\u56f4\uff1a\u5c06 Cookie \u7684\u4f5c\u7528\u8303\u56f4\u9650\u5236\u5728\u5fc5\u8981\u7684\u8def\u5f84\u6216\u57df\u540d\u4e0b\uff0c\u907f\u514d\u5c06\u654f\u611f\u4fe1\u606f\u66b4\u9732\u5728\u4e0d\u5fc5\u8981\u7684\u5730\u65b9\u3002"),(0,t.yg)("li",{parentName:"ul"},"\u89e3\u6790\u548c\u9a8c\u8bc1 Cookie \u6570\u636e\uff1a\u5728\u4f7f\u7528 Cookie \u6570\u636e\u4e4b\u524d\uff0c\u5148\u89e3\u6790\u548c\u9a8c\u8bc1\u5176\u5185\u5bb9\u3002\u786e\u4fdd\u6570\u636e\u7684\u683c\u5f0f\u6b63\u786e\u4e14\u6ca1\u6709\u88ab\u7be1\u6539\u3002")),(0,t.yg)("h3",{id:"\u9776\u573a\u6f14\u793a-\u89c6\u9891"},"\u9776\u573a\u6f14\u793a\uff1a \u89c6\u9891"),(0,t.yg)("video",{src:"/img/yaklab/xss/16unsafe-cookie-b64.mp4",loop:!0,playsInline:!0,controls:!0,autoPlay:!0,style:{width:890}}))}u.isMDXComponent=!0}}]);