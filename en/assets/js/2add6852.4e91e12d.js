(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[6706],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>i,kt:()=>m});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(a),k=s,m=u["".concat(o,".").concat(k)]||u[k]||d[k]||r;return a?n.createElement(m,c(c({ref:t},i),{},{components:a})):n.createElement(m,c({ref:t},i))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,c=new Array(r);c[0]=k;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:s,c[1]=l;for(var p=2;p<r;p++)c[p]=a[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},40703:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>r,contentTitle:()=>c,metadata:()=>l,toc:()=>o,default:()=>i});var n=a(22122),s=(a(67294),a(3905));const r={sidebar_position:21},c="Yso-Java Hack",l={unversionedId:"manual/expert-mode/Yso-Java-Hack",id:"manual/expert-mode/Yso-Java-Hack",isDocsHomePage:!1,title:"Yso-Java Hack",description:"\u9875\u9762\u521d\u59cb\u72b6\u6001\u5982\u56fe\uff0c\u5de6\u4fa7\u914d\u7f6e payload \u53c2\u6570\uff0c\u53f3\u4fa7\u7528\u6765\u5c55\u793a\u751f\u6210\u7684 payload\u3002",source:"@site/products/manual/expert-mode/Yso-Java-Hack.md",sourceDirName:"manual/expert-mode",slug:"/manual/expert-mode/Yso-Java-Hack",permalink:"/en/products/manual/expert-mode/Yso-Java-Hack",tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"teamSidebar",previous:{title:"Websocket\u52ab\u6301",permalink:"/en/products/manual/expert-mode/Websocket-hijacking"},next:{title:"\u8f85\u52a9\u5de5\u5177\u6a21\u5757",permalink:"/en/products/manual/Auxiliary-tool"}},o=[{value:"\u751f\u6210\u5e8f\u5217\u53f7payload",id:"\u751f\u6210\u5e8f\u5217\u53f7payload",children:[]},{value:"\u751f\u6210\u6076\u610f\u7c7b",id:"\u751f\u6210\u6076\u610f\u7c7b",children:[]},{value:"\u914d\u5408\u53cd\u8fde\u4f7f\u7528",id:"\u914d\u5408\u53cd\u8fde\u4f7f\u7528",children:[]},{value:"\u5b9e\u6218\u6f14\u793a",id:"\u5b9e\u6218\u6f14\u793a",children:[]}],p={toc:o};function i(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"yso-java-hack"},"Yso-Java Hack"),(0,s.kt)("p",null,"\u9875\u9762\u521d\u59cb\u72b6\u6001\u5982\u56fe\uff0c\u5de6\u4fa7\u914d\u7f6e payload \u53c2\u6570\uff0c\u53f3\u4fa7\u7528\u6765\u5c55\u793a\u751f\u6210\u7684 payload\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(25132).Z})),(0,s.kt)("h3",{id:"\u751f\u6210\u5e8f\u5217\u53f7payload"},"\u751f\u6210\u5e8f\u5217\u53f7payload"),(0,s.kt)("p",null,"\u9ed8\u8ba4\u5f00\u542f \u201c\u4f7f\u7528\u5229\u7528\u94fe\u201d\uff0c\u5373\u751f\u6210\u5e8f\u5217\u5316 payload \uff0c\u4e00\u7ea7\u9009\u9879\u662f\u5229\u7528\u94fe\uff0c\u4e8c\u7ea7\u9009\u9879\u662f\u6076\u610f\u7c7b\u3002\u9f20\u6807\u653e\u5230\u5c0f\u95ee\u53f7\u4e0a\u53ef\u4ee5\u770b\u5230\u4ecb\u7ecd\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(74885).Z})),(0,s.kt)("p",null,"\u9009\u62e9\u5229\u7528\u94fe\u548c\u6076\u610f\u7c7b\u540e\uff0c\u4f1a\u51fa\u73b0\u914d\u7f6e\u8868\u5355\uff0c\u7c7b\u540d\u9ed8\u8ba4\u662f\u968f\u673a\u751f\u6210\u7684\uff0c\u586b\u5199\u6240\u6709\u8868\u5355\u4fe1\u606f\uff0c\u70b9\u51fb\u751f\u6210\uff0c\u5c31\u53ef\u4ee5\u5728\u53f3\u4fa7\u770b\u5230\u751f\u6210\u7684 payload \uff0c\u70b9\u51fb\u4e0a\u65b9\u53ef\u4ee5\u5207\u6362\u5c55\u793a\u65b9\u5f0f\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(56916).Z})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(8046).Z})),(0,s.kt)("p",null,"\u8fd8\u53ef\u4ee5\u5c55\u793a\u751f\u6210payload\u7684\u4ee3\u7801\uff0c\u8fd8\u53ef\u4ee5\u5c06\u4ee3\u7801\u53d1\u9001\u5230Yak Runner\uff0c\u5e08\u5085\u4eec\u5199\u63d2\u4ef6\u65f6\u5982\u679c\u61d2\u5f97\u5199\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u5728\u8fd9\u91cc\u76f4\u63a5\u751f\u6210\u4ee3\u7801\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(10458).Z})),(0,s.kt)("p",null,"\u6700\u65b0\u7248\u672c payload \u5c55\u793a\u7c7b\u578b\u589e\u52a0\u4e86\u4e00\u4e2a DUMP \uff0c\u53ef\u4ee5\u770b\u5230 payload \u7684\u6570\u636e\u7ed3\u6784\uff0c\u50cf\u4e0b\u9762\u8fd9\u6837\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(72753).Z})),(0,s.kt)("h3",{id:"\u751f\u6210\u6076\u610f\u7c7b"},"\u751f\u6210\u6076\u610f\u7c7b"),(0,s.kt)("p",null,"\u5982\u56fe\uff0c\u5173\u95ed \u201c\u4f7f\u7528\u5229\u7528\u94fe\u201d \u5c31\u53ef\u4ee5\u751f\u6210\u6076\u610f\u7c7b\uff0c\u5177\u4f53\u64cd\u4f5c\u548c\u751f\u6210\u5229\u7528\u94fe\u7c7b\u4f3c"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(50393).Z})),(0,s.kt)("p",null,"\u53ef\u4ee5\u770b\u89c1\u5173\u95ed \u201c\u4f7f\u7528\u5229\u7528\u94fe\u201d \u65f6\u591a\u4e86\u4e00\u4e2a\u542f\u52a8\u53cd\u8fde\u670d\u52a1\u6309\u94ae\uff0c\u4e0b\u9762\u518d\u770b\u4e00\u4e0b\u53cd\u8fde\u670d\u52a1\u3002"),(0,s.kt)("h3",{id:"\u914d\u5408\u53cd\u8fde\u4f7f\u7528"},"\u914d\u5408\u53cd\u8fde\u4f7f\u7528"),(0,s.kt)("p",null,"\u5728\u914d\u7f6e\u597d\u6076\u610f\u7c7b\u540e\uff0c\u70b9\u51fb\u542f\u52a8\u53cd\u8fde\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u5f53\u524d\u6076\u610f\u7c7b\u76f4\u63a5\u542f\u52a8\u53cd\u8fde\u4e86\uff08\u5982\u679c\u914d\u7f6e\u4e86\u516c\u7f51\u53cd\u8fde\u5219\u4f7f\u7528\u6b64\u914d\u7f6e\u542f\u52a8\uff0c\u5426\u5219\u4f7f\u7528\u672c\u5730\u542f\u52a8\uff0c\u5982\u679c\u542f\u52a8\u5931\u8d25\uff0c\u8bf7\u81ea\u884c\u5728\u9ad8\u7ea7\u914d\u7f6e\u91cc\u914d\u7f6e\u53cd\u8fde\u5730\u5740\uff09\uff0c\u5982\u56fe"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(35501).Z})),(0,s.kt)("h3",{id:"\u5b9e\u6218\u6f14\u793a"},"\u5b9e\u6218\u6f14\u793a"),(0,s.kt)("p",null,"\u4ee5 Fastjson \u548c shiro \u5229\u7528\u4e3a\u4f8b\n\u8fd9\u91cc\u4f7f\u7528 vulfocus \u542f\u52a8\u4e00\u4e2a CNVD-2017-02833 \u5b9e\u4f8b\uff0c\u653b\u51fb\u6d41\u7a0b\u5982\u4e0b"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u5728 vps \u542f\u52a8\u4e00\u4e2a yak \u5f15\u64ceyak grpc --host 0.0.0.0\uff0cYakit \u7aef\u8f93\u5165\u670d\u52a1\u5668\u5730\u5740\u548c\u7aef\u53e3\uff08\u9ed8\u8ba48087\uff09\uff0c\u8fde\u63a5"),(0,s.kt)("li",{parentName:"ol"},"\u6253\u5f00Yakit\u7684\u7aef\u53e3\u76d1\u542c\u5668\uff0c\u76d1\u542c\u4e00\u4e2a\u7aef\u53e3\uff0c\u4ee5 8086 \u4e3a\u4f8b")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(57800).Z})),(0,s.kt)("p",null,"\u542f\u52a8\u53cd\u8fde\u670d\u52a1\u5668\u5e76\u914d\u7f6e\u6076\u610f\u7c7b\u4e3a TCPReverseShell \uff0c\u4e3b\u673a\u586b vps \u7684 ip \uff0c\u7aef\u53e3\u586b\u4e0a\u9762\u76d1\u542c\u7684 8086 \uff0c\u70b9\u51fb\u5e94\u7528"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(29370).Z})),(0,s.kt)("p",null,"\u6253\u5f00 webfuzzer\uff0c\u53d1\u9001 Payload"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(79279).Z})),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(75487).Z})),(0,s.kt)("p",null,"\u5982\u56fe\uff0c\u53cd\u8fde\u5217\u8868\u4e2d\u53ef\u4ee5\u770b\u89c1\u6210\u529f\u6536\u5230 LDAP \u548c HTTP \u8bf7\u6c42\uff0c\u8bf4\u660e\u76ee\u6807\u6210\u529f\u52a0\u8f7d\u4e86\u6076\u610f\u7c7b\uff08\u5982\u679c\u53ea\u6536\u5230 LDAP \u8bf7\u6c42\uff0c\u6ca1\u6709 HTTP \u8bf7\u6c42\uff0c\u53ef\u80fd\u662f\u76ee\u6807\u672a\u5f00\u542fcom.sun.jndi.ldap.object.trustURLCodebase \uff09"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(33362).Z}),"\n\u7aef\u53e3\u76d1\u542c\u5668\u6536\u5230\u4e86\u76ee\u6807\u673a\u5668\u7684\u8fde\u63a5"),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(84785).Z})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Shiro\u6d4b\u8bd5")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u4f7f\u7528vulfocus/shiro-CVE-2016-4437\u955c\u50cf\u642d\u5efa\u73af\u5883"),(0,s.kt)("li",{parentName:"ul"},"\u542f\u52a8Yakit"),(0,s.kt)("li",{parentName:"ul"},"\u6253\u5f00Yso-Java Hack"),(0,s.kt)("li",{parentName:"ul"},"\u5229\u7528\u94fe\u9009\u62e9CommonsBeanutils1"),(0,s.kt)("li",{parentName:"ul"},"\u6076\u610f\u7c7b\u9009\u62e9RuntimeExec\uff0c\u586b\u5199\u547d\u4ee4\uff0c\u751f\u6210Yak\u4ee3\u7801\n")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(94401).Z})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u7f16\u5199Yak\u811a\u672c\n")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(72926).Z})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u6267\u884c\u540e\u8fdb\u5165\u5bb9\u5668\u770b\u89c1/tmp\u76ee\u5f55\u4e0b\u591a\u4e86111\u6587\u4ef6\uff0c\u5229\u7528\u6210\u529f\u3002")))}i.isMDXComponent=!0},25132:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/Yso-Java-Hack-1-d950a3b34613cf27dec2f0f61087f096.png"},29370:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/Yso-Java-Hack-10-79b24be76a5bdddd6d8019667211049d.png"},79279:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/Yso-Java-Hack-11-1cb16584e4031431645bd89d71dda13e.png"},75487:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/Yso-Java-Hack-12-e292632b3e502b9e7502ecba6185de50.png"},33362:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/Yso-Java-Hack-13-9890943178c79b6dde17f3f28c5973be.png"},84785:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/Yso-Java-Hack-14-00c2b5e0c494d5b5f470889eef00119a.png"},94401:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/Yso-Java-Hack-15-5fc847a1b25963c344ee065765e5a9ff.png"},72926:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/Yso-Java-Hack-16-b77b6ae1a315542e63bd13633c471fa8.png"},74885:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/Yso-Java-Hack-2-e70d7c6583aee6799c916f8cb6ee62b4.png"},56916:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/Yso-Java-Hack-3-8a43b318abf826d917d2098dd3102baf.png"},8046:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/Yso-Java-Hack-4-335c98155c70c2afd1031bd28bafec36.png"},10458:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/Yso-Java-Hack-5-0968ec9037253ac6c9bd7f4862fcdadd.png"},72753:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/Yso-Java-Hack-6-80865d4a3ad79834b085a64489fdd4a3.png"},50393:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/Yso-Java-Hack-7-d97795d5d2258233b0275bb0127e0c1c.png"},35501:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/Yso-Java-Hack-8-6bb888d4176b3f1dc0a1e04aaddc47fd.png"},57800:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/Yso-Java-Hack-9-582f3d86bed2a8b028c832cda82efebd.png"}}]);