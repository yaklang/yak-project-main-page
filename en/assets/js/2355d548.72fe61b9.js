(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[5752],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>l,kt:()=>g});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(g,o(o({ref:n},l),{},{components:t})):r.createElement(g,o({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},75705:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>s,toc:()=>c,default:()=>l});var r=t(22122),a=(t(67294),t(3905));const i={sidebar_position:12},o="\u91cd\u5b9a\u5411\u540e\u4f1a\u8bdd\u6807\u8bc6\u643a\u5e26",s={unversionedId:"SessionManagement/SessionIDCarrying",id:"SessionManagement/SessionIDCarrying",isDocsHomePage:!1,title:"\u91cd\u5b9a\u5411\u540e\u4f1a\u8bdd\u6807\u8bc6\u643a\u5e26",description:"\u6f0f\u6d1e\u63cf\u8ff0\uff1a",source:"@site/wiki/SessionManagement/SessionIDCarrying.md",sourceDirName:"SessionManagement",slug:"/SessionManagement/SessionIDCarrying",permalink:"/en/wiki/SessionManagement/SessionIDCarrying",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"teamSidebar",previous:{title:"\u4f1a\u8bdd\u8d85\u65f6\u6709\u6548\u6027",permalink:"/en/wiki/SessionManagement/SessionTimeOut"},next:{title:"\u4f1a\u8bdd\u6807\u8bc6\u4f2a\u9020",permalink:"/en/wiki/SessionManagement/SessionIDForgery"}},c=[],p={toc:c};function l(e){let{components:n,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u91cd\u5b9a\u5411\u540e\u4f1a\u8bdd\u6807\u8bc6\u643a\u5e26"},"\u91cd\u5b9a\u5411\u540e\u4f1a\u8bdd\u6807\u8bc6\u643a\u5e26"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6f0f\u6d1e\u63cf\u8ff0\uff1a")),(0,a.kt)("p",null,'\u6d4b\u8bd5\u5f53\u7528\u6237\u5df2\u6210\u529f\u767b\u5f55\u60c5\u51b5\u4e0b\uff0c\u518d\u5229\u7528URL\u91cd\u5b9a\u5411\u5bf9\u975e\u540c\u6e90\u7f51\u7ad9\u53d1\u8d77\u8bf7\u6c42\u65f6\uff0c\u8bf7\u6c42\u4e2d\u662f\u5426\u542b\u6709\u5982 SessionID\uff0ctoken \u7b49\u4f1a\u8bdd\u6807\u8bc6\u5b57\u6bb5\u3002\u82e5\u91cd\u5b9a\u5411\u540e\u7684\u8bf7\u6c42\u4e2d\u5b58\u5728\u4f1a\u8bdd\u6807\u8bc6\u5b57\u6bb5\uff0c\u5219\u8868\u660e\u5b58\u5728\u4f1a\u8bdd\u6807\u8bc6\u643a\u5e26\u3002(\u6ce8:"\u540c\u6e90":"\u534f\u8bae + \u57df\u540d + \u7aef\u53e3"\u4e09\u8005\u76f8\u540c)'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6f0f\u6d1e\u6848\u4f8b\uff1a")),(0,a.kt)("p",null,"\u8bbf\u95ee\u6d4b\u8bd5\u7f51\u7ad9\u62fc\u63a5\u9700\u8981\u91cd\u5b9a\u5411\u7684\u7f51\u7ad9\uff0c\u8f93\u5165\u6d4b\u8bd5\u8d26\u53f7\u5bc6\u7801\u70b9\u51fb\u767b\u5f55"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(31354).Z})),(0,a.kt)("p",null,"\u6210\u529f\u8df3\u8f6c\u5230baidu.com,\u5e76\u4e14\u5728\u91cd\u5b9a\u5411\u540e\u7684\u8bf7\u6c42\u4e2d\u5b58\u5728\u4f1a\u8bdd\u6807\u8bc6\u5b57\u6bb5"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(95658).Z})),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u6f0f\u6d1e\u4fee\u590d\u65b9\u6848"),(0,a.kt)("p",{parentName:"div"},"\u7981\u6b62\u5728\u7528\u6237\u6210\u529f\u767b\u9646\u7cfb\u7edf\u540e\u5c06SessionID\uff0ctoken\u7b49\u4f1a\u8bdd\u6807\u8bc6\u5b57\u6bb5\u8fd4\u56de\u5728URL\u4e2d"))))}l.isMDXComponent=!0},31354:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});const r=t.p+"assets/images/SessionIDCarrying-1-fba8ef31a2f76ea85dac7a2c5c2c9ee3.png"},95658:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});const r=t.p+"assets/images/SessionIDCarrying-2-cf62059b4a62b909fa4107ad7135fce6.png"}}]);