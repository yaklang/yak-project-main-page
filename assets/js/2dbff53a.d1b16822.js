(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[5306],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),k=r,g=c["".concat(p,".").concat(k)]||c[k]||d[k]||l;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1028:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>o,toc:()=>p,default:()=>u});var a=n(22122),r=(n(67294),n(3905));const l={sidebar_position:2},i="Log4j JDNI fuzz\u4e0e\u88ab\u52a8\u626b\u63cf",o={unversionedId:"article/best-practice/passive-scanning",id:"article/best-practice/passive-scanning",isDocsHomePage:!1,title:"Log4j JDNI fuzz\u4e0e\u88ab\u52a8\u626b\u63cf",description:"Log4j JNDI Lookup \u6f5c\u5728\u5a01\u80c1",source:"@site/products/article/best-practice/passive-scanning.md",sourceDirName:"article/best-practice",slug:"/article/best-practice/passive-scanning",permalink:"/products/article/best-practice/passive-scanning",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"teamSidebar",previous:{title:"MITM \u63d2\u4ef6\uff1aSSRF \u516c\u7f51\u51fa\u7f51\u68c0\u6d4b",permalink:"/products/article/best-practice/mitm-plug"},next:{title:"ThinkPHP 5.0.23 RCE \u626b\u63cf [YAK]",permalink:"/products/article/best-practice/thinkphp-case"}},p=[{value:"Log4j JNDI Lookup \u6f5c\u5728\u5a01\u80c1",id:"log4j-jndi-lookup-\u6f5c\u5728\u5a01\u80c1",children:[]},{value:"\u5982\u4f55\u68c0\u6d4b\uff1f",id:"\u5982\u4f55\u68c0\u6d4b\uff1f",children:[{value:"\u53d1\u9001\u6570\u636e\u5305\u7684 \u201c\u5c0f\u96be\u9898\u201d",id:"\u53d1\u9001\u6570\u636e\u5305\u7684-\u5c0f\u96be\u9898",children:[]},{value:"\u56de\u663e\u68c0\u6d4b\uff1ajndi ldap/rmi",id:"\u56de\u663e\u68c0\u6d4b\uff1ajndi-ldaprmi",children:[]}]},{value:"\u6700\u4f73\u5b9e\u8df5",id:"\u6700\u4f73\u5b9e\u8df5",children:[]},{value:"\u77e5\u5176\u6240\u4ee5\u7136",id:"\u77e5\u5176\u6240\u4ee5\u7136",children:[{value:"yak.fuzz \u8bed\u6cd5\u4e0e API",id:"yakfuzz-\u8bed\u6cd5\u4e0e-api",children:[]},{value:"\u4e0e Burpsuite \u63d2\u4ef6\u4f53\u7cfb\u7684\u5bf9\u6bd4",id:"\u4e0e-burpsuite-\u63d2\u4ef6\u4f53\u7cfb\u7684\u5bf9\u6bd4",children:[]}]}],s={toc:p};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"log4j-jdni-fuzz\u4e0e\u88ab\u52a8\u626b\u63cf"},"Log4j JDNI fuzz\u4e0e\u88ab\u52a8\u626b\u63cf"),(0,r.kt)("h2",{id:"log4j-jndi-lookup-\u6f5c\u5728\u5a01\u80c1"},"Log4j JNDI Lookup \u6f5c\u5728\u5a01\u80c1"),(0,r.kt)("p",null,"log4j \u7684\u9ed1\u76d2\u6f0f\u6d1e\u68c0\u6d4b\u5176\u5b9e\u662f\u4e00\u4e2a\u8001\u5927\u96be\u7684\u95ee\u9898\uff0c\u4e0d\u50cf \u201c\u6b63\u5e38\u201d \u7684\u6f0f\u6d1e\u6709\u660e\u786e\u7684\u8f93\u5165\u70b9\uff0c\u4ee5\u53ca\u5229\u7528\u65b9\u5f0f\u3002"),(0,r.kt)("p",null,"\u4ed6\u7684\u8f93\u5165\u70b9\u53ef\u4ee5\u51fa\u73b0\u5728\u4efb\u4f55\u610f\u60f3\u4e0d\u5230\u7684\u5730\u65b9\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"User-Agent / Content-Type(Parsed Error) / X-Real-IP \u7b49 HTTP Header \u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9006\u5411\u601d\u7ef4\uff1a\u8ba9\u8bf7\u6c42\u53d1\u751f\u9519\u8bef\u7684\u65f6\u5019\uff0clog \u6700\u5bb9\u6613\u88ab\u6253\u5370\uff0c\u6240\u4ee5\u8f93\u51fa\u6545\u610f\u586b\u5728\u4e00\u4e9b\u53c2\u6570\u4e2d\uff0c\u9020\u6210\u4eba\u4e3a\u7684 \u201c\u4e0d\u5408\u903b\u8f91\u201d \u51fa\u9519\uff0c\u4e5f\u53ef\u4ee5\u8fbe\u5230\u6548\u679c\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6709\u670b\u53cb\u95ee Rasp \u4e0e\u5176\u4ed6\u5b89\u5168\u4ea7\u54c1\u4e00\u5b9a\u80fd\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u5417\uff1f",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 \u201cJava AOP \u7684\u4ee3\u7801\u63d2\u6869 / Agent\u201d \u7684 Rasp \u5927\u6982\u7387\u4e5f\u662f Java \u5b9e\u73b0\u7684\uff0c\u5982\u679c Rasp \u672c\u8eab\u62e6\u622a\u7684\u53c2\u6570\u540d\u88ab log4j \u6253\u5370\u51fa\u6765\u4e86\u5462\uff1f"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c Rasp \u62e6\u622a\u4e86\uff0c\u4f46\u662f\u65e5\u5fd7\u5e73\u53f0\uff0c\u5b89\u5168\u4ea7\u54c1\u65e5\u5fd7\u5e73\u53f0\u6253\u5230\u4e86 ELK / Hadoop \u7b49\u5e73\u53f0\u5462\uff1f\u540c\u7406\u5b89\u5168\u5206\u6790\u65f6\u5019\u4f7f\u7528 ES \u8fdb\u884c\u641c\u7d22..."))),(0,r.kt)("li",{parentName:"ol"},"\u5b58\u5728\u4e25\u91cd\u7684\u4e8c\u6b21\u6c61\u67d3\u7684\u98ce\u9669\uff0c\u53d1\u9001\u4e00\u4e2a\u8fc7\u6e21\u7f16\u7801\u7684 \u201c\u4e0d\u53ef\u7528\u7684 log4j jndi\u201d\uff0c\u4f1a\u88ab\u5b89\u5168\u8bbe\u5907\u548c\u5927\u6570\u636e\u4e2d\u95f4\u4ef6\u7b49\u8fc7\u5ea6\u7f16\u7801\u89e3\u8bfb\uff0c\u867d\u7136\u5bf9\u7f51\u7ad9\u548c\u5e94\u7528\u6ca1\u5565\u5a01\u80c1\uff0c\u4f46\u662f\u6781\u6709\u53ef\u80fd \u201c\u9694\u5c71\u6253\u725b\u201d\u3002")),(0,r.kt)("p",null,"\u8fd9\u4e9b\u53ef\u80fd\u7684\u7279\u6027\u51b3\u5b9a\u4e86\uff0clog4j jndi ldap/rmi \u53ef\u4ee5\u51fa\u73b0\u5728\u4efb\u4f55\u4ee4\u4eba\u610f\u60f3\u4e0d\u5230\u7684\u5730\u65b9\u3002"),(0,r.kt)("h2",{id:"\u5982\u4f55\u68c0\u6d4b\uff1f"},"\u5982\u4f55\u68c0\u6d4b\uff1f"),(0,r.kt)("h3",{id:"\u53d1\u9001\u6570\u636e\u5305\u7684-\u5c0f\u96be\u9898"},"\u53d1\u9001\u6570\u636e\u5305\u7684 \u201c\u5c0f\u96be\u9898\u201d"),(0,r.kt)("p",null,"\u7531\u4e8e PoC \u5b9e\u5728\u592a\u81ea\u7531\uff0c\u6f0f\u6d1e\u7684\u7b80\u5355\u68c0\u6d4b\u53cd\u800c\u4e0d\u592a\u597d\u5199\uff0c\u9700\u8981\u4e00\u4e2a \u201c\u5ea6\u201d\u3002\u73b0\u6709\u7684 Yaml PoC \u548c\u4f7f\u7528 HTTP \u5ba2\u6237\u7aef\u7f16\u5199\u5e76\u4e0d\u80fd\u5f88\u597d\u9002\u5e94\u8fd9\u79cd\u60c5\u51b5\u3002\u4e59\u65b9\u5382\u5546\u7684\u68c0\u6d4b\u624b\u6bb5\uff0c\u5927\u591a\u4e5f\u80fd\u53cd\u6620\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,r.kt)("p",null,"\u6700\u6709\u6548\u7684\u53d1\u5305\u68c0\u6d4b\u624b\u6bb5\uff0c\u5176\u5b9e\u516c\u8ba4\u662f\u5728\u201cMITM \u52ab\u6301\u4ee3\u7406\u6a21\u5f0f\u201d\u4e0b\uff0c\u5bf9\u6d41\u5165\u4ee3\u7406\u7684\u6570\u636e\u5305\u8fdb\u884c\u68c0\u6d4b\u3002"),(0,r.kt)("p",null,"\u6709\u5f88\u591a\u5173\u952e\u70b9\u9700\u8981\u6ce8\u610f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u6388\u6743\u8303\u56f4\u5185\uff0c\u6d4b\u8bd5\u7684\u76ee\u6807\u9700\u8981\u88ab\u7cbe\u51c6\u9650\u5236\uff0c\u6bd4\u5982\u8bf4 baidu / google / gov / edu \u9020\u6210\u5927\u91cf\u810f\u6570\u636e\u6216\u793e\u4f1a\u5371\u5bb3\u7684\u76ee\u6807\u5e94\u8be5\u88ab\u4e3b\u52a8\u6392\u9664\uff0c\u6216\u8005\u76f4\u63a5\u91c7\u7528\u767d\u540d\u5355\u9650\u5236\u76ee\u6807\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u80fd\u591f\u89e3\u6790\u6570\u636e\u5305\u4e2d\u7684\u53c2\u6570\uff0c\u5e76\u53ca\u65f6\u66ff\u6362\u6570\u636e\u5305\u4e2d\u7684\u53c2\u6570\u7684\u503c\u6216\u5185\u5bb9\u3002")),(0,r.kt)("h3",{id:"\u56de\u663e\u68c0\u6d4b\uff1ajndi-ldaprmi"},"\u56de\u663e\u68c0\u6d4b\uff1ajndi ldap/rmi"),(0,r.kt)("p",null,"\u4f17\u6240\u5468\u77e5\uff0cjndi \u652f\u6301\u7684\u534f\u8bae\u4e0d\u6b62\u6709 ldap\uff0c\u4e5f\u6709 rmi\uff0cdns \u8fd9\u79cd\u7c7b\u578b\uff0c\u76f8\u6bd4\u4e8e RMI \u5916\u8fde\u8fd9\u79cd\u4e00\u770b\u5c31\u5fc3\u6000\u9b3c\u80ce\u7684\u64cd\u4f5c\uff0cdnslog \u662f\u4e00\u4e2a\u975e\u5e38\u597d\u7684\u9a8c\u8bc1\u6f0f\u6d1e\u662f\u5426\u5b58\u5728\u7684\u624b\u6bb5\u3002\u4e0d\u7ba1\u662f ldap \u8fd8\u662f dns \u6216\u8005 rmi \uff0c\u53ea\u8981\u88ab\u6d4b\u5e94\u7528\u53ef\u51fa\u7f51\uff0c\u4e00\u822c\u90fd\u4e0d\u4f1a\u53bb\u5bf9 dns \u6709\u9650\u5236\u3002"),(0,r.kt)("p",null,"\u5e02\u9762\u4e0a\u6709\u5f88\u591a\u9002\u5e94\u4e8e\u56de\u663e\u68c0\u6d4b\u7684 DNS \u670d\u52a1\u5668\u5957\u4ef6\uff0c\u7279\u522b\u662f\u6709\u4e9b\u5904\u7406\u80fd\u89e3\u6790 DNS \u8bf7\u6c42\u4e4b\u5916\uff0c\u8fd8\u80fd\u89e3\u6790 RMI \u56de\u8fde\uff0cHTTP \u56de\u8fde\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\u501f\u6b64\u673a\u4f1a\u5927\u706b\u7684 dnslog","[dot]","cn, ceye","[dot]","io, interactsh \u7b49"),(0,r.kt)("p",null,"\u4e0d\u7ba1\u662f\u81ea\u5df1\u642d\u5efa\u4e5f\u597d\uff0c\u8fd8\u662f\u4f7f\u7528 dnslog","[dot]","cn \u8fd9\u79cd\u516c\u5171\u670d\u52a1\u4e5f\u597d\uff0c\u5176\u5b9e\u5728\u4f01\u4e1a\u6388\u6743\u60c5\u51b5\u4e0b\uff0c\u786e\u8ba4\u56de\u8fde\u7684 IP \u4e3a\u516c\u53f8\u8d44\u4ea7\uff0c\u5373\u53ef\u6682\u65f6\u8ba4\u4e3a\u53ef\u80fd\u5b58\u5728\u6f0f\u6d1e\u3002"),(0,r.kt)("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},"\u6700\u4f73\u5b9e\u8df5"),(0,r.kt)("p",null,"\u6700\u4f73\u5b9e\u8df5\u5e76\u4e0d\u662f\u6559\u5927\u5bb6\u5982\u4f55\u5229\u7528\u6f0f\u6d1e\uff0c\u800c\u662f\u5e2e\u52a9\u5927\u5bb6\u5728\u6388\u6743\u8303\u56f4\u5185\uff0c\u5c3d\u53ef\u80fd\u627e\u5230\u6f5c\u5728\u5a01\u80c1\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u5728\u3010\u53d1\u9001\u6570\u636e\u5305\u7684 \u201c\u5c0f\u96be\u9898\u201d\u3011\u4e2d\uff0c\u63d0\u5230\u4e86\u53ef\u80fd\u662f\u6700\u5408\u7406\u7684\u624b\u6bb5\u662f MITM \u52ab\u6301\u4ee3\u7406\u4e0b\uff0c\u5bf9\u6570\u636e\u5305\u8fdb\u884c\u5206\u6790\u4e0e\u91cd\u7ec4\uff0c\u6211\u4eec\u6682\u65f6\u628a\u8fd9\u4e2a\u8fc7\u7a0b\u79f0\u4e3a\u6a21\u7cca\u6d4b\u8bd5\uff08fuzz\uff09\u3002"),(0,r.kt)("p",null,"\u80fd\u505a\u5230\u4e0a\u8ff0\u81ea\u52a8\u53d1\u5305\u7684\u529e\u6cd5\u53ef\u80fd\u9664\u4e86 Burpsuite \u7684\u63d2\u4ef6\uff0c\u4e5f\u5c31\u53ea\u6709 Yakit \u4e0e Yakit \u7684 MITM \u63d2\u4ef6\u7cfb\u7edf\u4e86\u3002"),(0,r.kt)("p",null,"\u5f53\u7136\u5728\u8be6\u7ec6\u4ecb\u7ecd\u600e\u4e48\u6837 fuzz \u4e4b\u524d\uff0c\u6211\u4eec\u6765\u76f4\u63a5\u770b\u4e00\u4e0b\u68c0\u6d4b\u6548\u679c\u3002"),(0,r.kt)("video",{src:"https://yaklang.oss-cn-beijing.aliyuncs.com/video/yakit-log4j-fuzzer.mp4",loop:!0,playsInline:!0,controls:!0,autoPlay:!0,style:{width:890}}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u611f\u8c22 vulfucos \u56e2\u961f\u7684\u7ebf\u4e0a\u9776\u573a\u4e0e log","[dot]","\u5495","[dot]","com \u7684\u670d\u52a1\u63d0\u4f9b\u8005\u4e3a\u672c\u6b21 PoC \u63d0\u4f9b\u9776\u573a")),(0,r.kt)("p",null,"\u6839\u636e\u89c6\u9891\u5185\u5bb9\u6211\u4eec\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6253\u5f00 Yakit \u7684 MITM \u670d\u52a1\u5668\u8bbe\u7f6e\u9875"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u9ed8\u8ba4\u8bbe\u7f6e\u6253\u5f00 \u201c\u88ab\u52a8\u626b\u63cf\u6a21\u5f0f\u201d\uff0c\u8fdb\u5165 Yak \u811a\u672c\u6784\u5efa\u7684\u52ab\u6301\u63d2\u4ef6\u64cd\u4f5c\u53f0"),(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb \u201c\u52a0\u8f7d\u63d2\u4ef6\u201d\uff0c\u9009\u62e9\u3010log4j fuzzer\u3011"),(0,r.kt)("li",{parentName:"ol"},"\u8f93\u5165\u5728 dnslog \u5e73\u53f0\u4e2d\u83b7\u53d6\u5230\u7684\u57df\u540d\uff0c\u542f\u52a8")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(40609).Z})),(0,r.kt)("p",null,"\u770b\u5230\u4e0a\u8ff0\u5185\u5bb9\u65f6\uff0c\u610f\u5473\u7740\u6211\u4eec\u7684 log4j fuzzer \u52a0\u8f7d\u6210\u529f\u4e86\uff01"),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\u4e8e\u662f\u6211\u4eec\u53ef\u4ee5\u6302\u4e0a\u4ee3\u7406\uff0c\u8bbf\u95ee\u60f3\u8981\u68c0\u6d4b\u7684\u7f51\u7ad9 (Powered by Vulfocus)\u4e86~\n\u8bbf\u95ee\u4e4b\u540e\uff0c\u8fdb\u5165 dnslog \u5e73\u53f0\u67e5\u770b\u7ed3\u679c")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(40534).Z})),(0,r.kt)("h2",{id:"\u77e5\u5176\u6240\u4ee5\u7136"},"\u77e5\u5176\u6240\u4ee5\u7136"),(0,r.kt)("p",null,"\u5927\u5bb6\u4e5f\u8bb8\u5f88\u597d\u5947\uff0cYakit \u7684 MITM \u7684\u63d2\u4ef6\u662f\u5982\u4f55\u505a\u5230\u4e0a\u8ff0\u81ea\u52a8 fuzz \u53d1\u5305\u7684\u3002\u6211\u4eec\u6253\u5f00 Yakit \u7684\u63d2\u4ef6\u4ed3\u5e93"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(72150).Z})),(0,r.kt)("p",null,"\u53ef\u4ee5\u67e5\u770b\u5230\u63d2\u4ef6\u7684\u6e90\u7801\uff0c\u5176\u5b9e\u63d2\u4ef6\u6e90\u7801\u5982\u5927\u5bb6\u6240\u89c1\uff0c\u975e\u5e38\u7b80\u5355"),(0,r.kt)("h3",{id:"yakfuzz-\u8bed\u6cd5\u4e0e-api"},"yak.fuzz \u8bed\u6cd5\u4e0e API"),(0,r.kt)("p",null,"\u5f53\u7136\uff0c\u4e0b\u9762\u7684\u4ee3\u7801\u4ec5\u4ec5\u662f\u63d2\u4ef6\u7684\u4e00\u5c0f\u90e8\u5206\uff0c\u5b8c\u6574\u7684\u4ee3\u7801\uff0c\u7528\u6237\u53ef\u901a\u8fc7 \u201c\u66f4\u65b0\u63d2\u4ef6\u5546\u5e97\u201d \u6765\u67e5\u770b\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(19058).Z})),(0,r.kt)("p",null,"\u5176\u5b9e\u4e0a\u9762\u7684\u4ee3\u7801\uff0c\u975e\u5e38\u7b80\u5355\uff0c\u6211\u4eec\u5728"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Web Fuzz \u57fa\u7840 API ",(0,r.kt)("a",{parentName:"li",href:"https://www.yaklang.io/docs/newforyak/fuzz_tutorial"},"https://www.yaklang.io/docs/newforyak/fuzz_tutorial")),(0,r.kt)("li",{parentName:"ol"},"Web Fuzz \u9ad8\u7ea7\u6559\u7a0b ",(0,r.kt)("a",{parentName:"li",href:"https://www.yaklang.io/docs/newforyak/fuzz_for_more"},"https://www.yaklang.io/docs/newforyak/fuzz_for_more"))),(0,r.kt)("p",null,"\u4e2d\u90fd\u53ef\u4ee5\u627e\u5230\u5982\u4f55\u4f7f\u7528\u8fd9\u6837\u7684\u6a21\u5757\u4e0e API\u3002"),(0,r.kt)("h3",{id:"\u4e0e-burpsuite-\u63d2\u4ef6\u4f53\u7cfb\u7684\u5bf9\u6bd4"},"\u4e0e Burpsuite \u63d2\u4ef6\u4f53\u7cfb\u7684\u5bf9\u6bd4"),(0,r.kt)("p",null,"\u672c\u8d28\u4e0a yak \u8bed\u8a00\u7684 fuzz \u6a21\u5757\uff0c\u5c01\u88c5\u4e86\u5f88\u591a\u53ef\u4ee5\u6a21\u7cca\u6d4b\u8bd5\u7684 API\uff0c\u7cbe\u7ec6\u64cd\u4f5c\u6570\u636e\u5305\u4e2d\u7684\u5185\u5bb9\uff0c\u5bf9\u4e8e\u8fd9\u79cd\u573a\u666f\u6765\u8bf4\u3002"),(0,r.kt)("p",null,"\u76f8\u6bd4\u4e8e Burpsuite \u7684\u63d2\u4ef6\u4f53\u7cfb\uff0c\u9700\u8981\u7f16\u5199 Java UI \u548c Java \u73af\u5883\u3002\u4e0e\u6b64\u540c\u65f6\u3010Log4shell\u4e2d\u88ab\u5ffd\u89c6\u7684\u5a01\u80c1\uff1aBurpSuite\u63d2\u4ef6\u3011\u8fd9\u7bc7\u6587\u7ae0\u4e2d\u63d0\u5230\u7684\u95ee\u9898\u4e5f\u4e0d\u5e94\u8be5\u88ab\u5ffd\u89c6\uff1a"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s?src=11&timestamp=1639672105&ver=3500&signature=H5XEuiaTO01AYO4yGGTh9a8wfT7F5TIfwczKapyu3gcTT35KprtS0SlqO9AJXKiBiue27pi87ZMOLZx0456j0vX5eg95*UwAaxcFV3MZODxTKUz6jqHJfIi*gu90ATFu&new=1"},"https://mp.weixin.qq.com/s?src=11","\xd7","tamp=1639672105&ver=3500&signature=H5XEuiaTO01AYO4yGGTh9a8wfT7F5TIfwczKapyu3gcTT35KprtS0SlqO9AJXKiBiue27pi87ZMOLZx0456j0vX5eg95*UwAaxcFV3MZODxTKUz6jqHJfIi*gu90ATFu&new=1")),(0,r.kt)("p",null,"Yakit \u4f7f\u7528\u914d\u7f6e\u5316\u548c\u81ea\u52a8\u751f\u6210\u7684 UI\uff0c\u5e76\u4e14\u63d2\u4ef6\u6838\u5fc3\u5185\u5bb9\u5176\u5b9e\u5c31\u662f\u4e00\u6bb5 Yak \u811a\u672c\uff08\u201c\u6587\u672c\u201d\uff09\uff1b",(0,r.kt)("br",{parentName:"p"}),"\n","\u66f4\u5177\u6709\u4fbf\u643a\u6027\u3002\u540c\u65f6\u5141\u8bb8\u7528\u6237 \u201c\u70ed\u52a0\u8f7d\u201d \u73b0\u573a\u7f16\u5199\u7684\u4ee3\u7801\uff0c\u8fd9\u53ef\u80fd\u662f\u5e02\u9762\u4e0a\u4efb\u4f55\u5de5\u5177/\u5e73\u53f0\uff0c\u90fd\u505a\u4e0d\u5230\u7684"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(91617).Z})))}u.isMDXComponent=!0},40534:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/passive-scanning-agent-aa2165248333bb5ab46918c960a32910.png"},91617:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/passive-scanning-burpsuite-a2fa533ddafcc571e39c4f2b37e5d8e3.png"},40609:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/passive-scanning-dnslog-eca1e3e20a0ae0f8f53122df09083014.png"},19058:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/passive-scanning-fuzz-1-283697239f7a5e6f8d5c4d662d94d64b.png"},72150:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/passive-scanning-fuzz-5bb63a9b6c977d53bff5de23b27464d3.png"}}]);