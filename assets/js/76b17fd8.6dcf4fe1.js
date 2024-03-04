"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[8484],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>s});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y=a.createContext({}),c=function(e){var t=a.useContext(y),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(y.Provider,{value:t},e.children)},o="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,y=e.parentName,p=g(e,["components","mdxType","originalType","parentName"]),o=c(n),d=r,s=o["".concat(y,".").concat(d)]||o[d]||m[d]||l;return n?a.createElement(s,i(i({ref:t},p),{},{components:n})):a.createElement(s,i({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var g={};for(var y in t)hasOwnProperty.call(t,y)&&(g[y]=t[y]);g.originalType=e,g[o]="string"==typeof e?e:r,i[1]=g;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25584:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>g,toc:()=>y});var a=n(58168),r=(n(96540),n(15680));const l={sidebar_position:3},i="3. Yaklang \u4e2d\u7684\u7c7b\u578b\u548c\u53d8\u91cf",g={unversionedId:"yak-basic/type-and-vars",id:"yak-basic/type-and-vars",isDocsHomePage:!1,title:"3. Yaklang \u4e2d\u7684\u7c7b\u578b\u548c\u53d8\u91cf",description:"Yaklang \u7684\u7c7b\u578b\u5176\u5b9e\u975e\u5e38\u7b80\u5355\uff0c\u6211\u4eec\u4ec5\u9700\u8981\u8bb0\u4f4f\u5982\u4e0b\u7c7b\u578b\u5373\u53ef",source:"@site/docs/yak-basic/3-type-and-vars.md",sourceDirName:"yak-basic",slug:"/yak-basic/type-and-vars",permalink:"/docs/yak-basic/type-and-vars",editUrl:"https://github.com/yaklang/docs/yak-basic/3-type-and-vars.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. Yaklang \u4e2d\u7684\u8bed\u53e5",permalink:"/docs/yak-basic/statements"},next:{title:"4. \u5b57\u7b26\u4e32\uff1a\u57fa\u7840\u5b57\u7b26\u4e32\u4f7f\u7528",permalink:"/docs/yak-basic/string-basic"}},y=[{value:"\u53d8\u91cf\u7684\u58f0\u660e\uff0c\u5b9a\u4e49\u4e0e\u4f7f\u7528",id:"\u53d8\u91cf\u7684\u58f0\u660e\u5b9a\u4e49\u4e0e\u4f7f\u7528",children:[]},{value:"\u9644\u5f55\uff1a\u5b57\u9762\u91cf\u6784\u5efa\u8bed\u6cd5 eBNF \u8303\u5f0f\uff08\u5b57\u9762\u91cf\u8282\u9009\uff09",id:"\u9644\u5f55\u5b57\u9762\u91cf\u6784\u5efa\u8bed\u6cd5-ebnf-\u8303\u5f0f\u5b57\u9762\u91cf\u8282\u9009",children:[]}],c={toc:y},p="wrapper";function o(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"3-yaklang-\u4e2d\u7684\u7c7b\u578b\u548c\u53d8\u91cf"},"3. Yaklang \u4e2d\u7684\u7c7b\u578b\u548c\u53d8\u91cf"),(0,r.yg)("p",null,"Yaklang \u7684\u7c7b\u578b\u5176\u5b9e\u975e\u5e38\u7b80\u5355\uff0c\u6211\u4eec\u4ec5\u9700\u8981\u8bb0\u4f4f\u5982\u4e0b\u7c7b\u578b\u5373\u53ef"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"string \u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u7528\u4ee5\u5feb\u901f\u6784\u5efa\u4e00\u4e2a\u5b57\u7b26\u4e32"),(0,r.yg)("li",{parentName:"ol"},"int \u6574\u6570\u7c7b\u578b\uff1a\u5728 64 \u4f4d\u673a\u4e2d\uff0cint \u548c int64 \u662f\u4e00\u6837\u7684"),(0,r.yg)("li",{parentName:"ol"},"float \u6d6e\u70b9\u7c7b\u578b\uff0c\u7528\u6765\u5b9a\u4e49\u548c\u8868\u793a\u6d6e\u70b9\u6570"),(0,r.yg)("li",{parentName:"ol"},"byte \u672c\u8d28\u4e0a\u7b49\u540c\u4e8e uint8"),(0,r.yg)("li",{parentName:"ol"},"undefined / nil \u4e3a\u5b9a\u4e49\u7684\u503c\uff0c\u6211\u4eec\u53ef\u4ee5\u7406\u89e3\u4e3a\u7a7a\u503c"),(0,r.yg)("li",{parentName:"ol"},"bool \u53ea\u6709 true \u6216 false"),(0,r.yg)("li",{parentName:"ol"},"map\uff0c\u57fa\u672c\u7b49\u540c\u4e8e Python \u4e2d\u7684 Dict"),(0,r.yg)("li",{parentName:"ol"},"slice\uff0c\u57fa\u672c\u7b49\u540c\u4e8e Python \u4e2d\u7684 List"),(0,r.yg)("li",{parentName:"ol"},"channel\uff0c\u57fa\u672c\u7b49\u540c\u4e8e Golang \u4e2d\u7684 Channel"),(0,r.yg)("li",{parentName:"ol"},"var\uff0c\u4efb\u610f\u7c7b\u578b\uff0c\u7b49\u540c\u4e8e Golang \u4e2d\u7684 interface{}")),(0,r.yg)("p",null,"\u6211\u4eec\u4ee5\u4e00\u4e2a\u8868\u683c\u5feb\u901f\u6765\u5bf9\u6bd4\u5927\u5bb6\u719f\u6089\u7684\u8bed\u8a00\u7684\u7c7b\u578b\uff0c\u4ee5\u65b9\u4fbf\u5927\u5bb6\u5feb\u901f\u7406\u89e3"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"\u5bf9\u6bd4\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Yaklang"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Python"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Golang"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"\u5b57\u7b26\u4e32"),(0,r.yg)("td",{parentName:"tr",align:"center"},"string"),(0,r.yg)("td",{parentName:"tr",align:"center"},"string"),(0,r.yg)("td",{parentName:"tr",align:"center"},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32"),(0,r.yg)("td",{parentName:"tr",align:"center"},"[]byte"),(0,r.yg)("td",{parentName:"tr",align:"center"},"b-string"),(0,r.yg)("td",{parentName:"tr",align:"center"},"[]byte")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"\u6574\u6570"),(0,r.yg)("td",{parentName:"tr",align:"center"},"int"),(0,r.yg)("td",{parentName:"tr",align:"center"},"int"),(0,r.yg)("td",{parentName:"tr",align:"center"},"int8, int16, int32, int64 ",(0,r.yg)("br",null)," uint8, uint16, uint32, uint64 ",(0,r.yg)("br",null),"int")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"\u6d6e\u70b9"),(0,r.yg)("td",{parentName:"tr",align:"center"},"float"),(0,r.yg)("td",{parentName:"tr",align:"center"},"float"),(0,r.yg)("td",{parentName:"tr",align:"center"},"float32, float64(double)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"\u7a7a\u503c"),(0,r.yg)("td",{parentName:"tr",align:"center"},"undefined / nil"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u4e0d\u652f\u6301"),(0,r.yg)("td",{parentName:"tr",align:"center"},"nil")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"\u5e03\u5c14\u503c"),(0,r.yg)("td",{parentName:"tr",align:"center"},"bool"),(0,r.yg)("td",{parentName:"tr",align:"center"},"bool"),(0,r.yg)("td",{parentName:"tr",align:"center"},"bool")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"\u952e\u503c\u7ec4(map / dict)"),(0,r.yg)("td",{parentName:"tr",align:"center"},"map"),(0,r.yg)("td",{parentName:"tr",align:"center"},"dict"),(0,r.yg)("td",{parentName:"tr",align:"center"},"map")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"\u6570\u7ec4 / \u5207\u7247 / \u5217\u8868"),(0,r.yg)("td",{parentName:"tr",align:"center"},"slice"),(0,r.yg)("td",{parentName:"tr",align:"center"},"list"),(0,r.yg)("td",{parentName:"tr",align:"center"},"slice / array")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"\u7ed3\u6784\u4f53 / \u7c7b / \u63a5\u53e3"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u4e0d\u652f\u6301"),(0,r.yg)("td",{parentName:"tr",align:"center"},"class"),(0,r.yg)("td",{parentName:"tr",align:"center"},"struct / interface \u4f53\u7cfb")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"\u6570\u636e\u901a\u9053"),(0,r.yg)("td",{parentName:"tr",align:"center"},"channel"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u4e0d\u652f\u6301"),(0,r.yg)("td",{parentName:"tr",align:"center"},"channel")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"\u4efb\u610f\u7c7b\u578b"),(0,r.yg)("td",{parentName:"tr",align:"center"},"var"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"interface{}")))),(0,r.yg)("h2",{id:"\u53d8\u91cf\u7684\u58f0\u660e\u5b9a\u4e49\u4e0e\u4f7f\u7528"},"\u53d8\u91cf\u7684\u58f0\u660e\uff0c\u5b9a\u4e49\u4e0e\u4f7f\u7528"),(0,r.yg)("p",null,"\u5728yaklang\u4e2d\u5b9a\u4e49/\u58f0\u660e\u4e00\u4e2a\u53d8\u91cf\u5341\u5206\u7b80\u5355\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"var a            // \u58f0\u660e\u53d8\u91cfa\nvar b, c         // \u58f0\u660e\u53d8\u91cfb,c\nvar d, e = 1, 2  // \u58f0\u660e\u53d8\u91cfd,e\u5e76\u5206\u522b\u8d4b\u503c\u4e3a1,2\n")),(0,r.yg)("p",null,"\u540c\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u5bf9\u4e00\u4e2a\u53d8\u91cf\u8fdb\u884c\u8d4b\u503c\uff0c\u7701\u7565\u5b9a\u4e49/\u58f0\u660e\u7684\u6b65\u9aa4:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"a, b = 1, 2 // \u6b64\u65f6a=1, b=2\n")),(0,r.yg)("p",null,"\u5f53\u7136\uff0c\u53d8\u91cf\u7684\u4f7f\u7528\u4f9d\u7136\u5f88\u7b80\u5355\u800c\u7b26\u5408\u76f4\u89c9:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"a, b = 1, 2\ndump(a, b)\n/*\n    (int) 1\n    (int) 2\n*/\n")),(0,r.yg)("h2",{id:"\u9644\u5f55\u5b57\u9762\u91cf\u6784\u5efa\u8bed\u6cd5-ebnf-\u8303\u5f0f\u5b57\u9762\u91cf\u8282\u9009"},"\u9644\u5f55\uff1a\u5b57\u9762\u91cf\u6784\u5efa\u8bed\u6cd5 eBNF \u8303\u5f0f\uff08\u5b57\u9762\u91cf\u8282\u9009\uff09"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},"literal\n    : templateStringLiteral\n    | stringLiteral\n    | numericLiteral\n    | charaterLiteral\n    | UndefinedLiteral\n    | NilLiteral\n    | boolLiteral\n    | mapLiteral\n    | sliceLiteral\n    ;\n")))}o.isMDXComponent=!0}}]);