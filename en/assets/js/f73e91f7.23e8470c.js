(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[4463],{3905:(t,e,n)=>{"use strict";n.d(e,{Zo:()=>m,kt:()=>s});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),o=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},m=function(t){var e=o(t.components);return r.createElement(p.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),d=o(n),g=a,s=d["".concat(p,".").concat(g)]||d[g]||k[g]||i;return n?r.createElement(s,c(c({ref:e},m),{},{components:n})):r.createElement(s,c({ref:e},m))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,c=new Array(i);c[0]=g;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[d]="string"==typeof t?t:a,c[1]=l;for(var o=2;o<i;o++)c[o]=n[o];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},77458:(t,e,n)=>{"use strict";n.r(e),n.d(e,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>l,toc:()=>p,default:()=>m});var r=n(22122),a=(n(67294),n(3905));const i={sidebar_position:17},c="17. \u7c7b\u578b\u8f6c\u6362\uff1a\u6574\u6570\uff0c\u6d6e\u70b9\u6570\u4e0e\u5b57\u7b26\u4e32",l={unversionedId:"yak-basic/type-conv",id:"yak-basic/type-conv",isDocsHomePage:!1,title:"17. \u7c7b\u578b\u8f6c\u6362\uff1a\u6574\u6570\uff0c\u6d6e\u70b9\u6570\u4e0e\u5b57\u7b26\u4e32",description:"\u8c03\u7528\u5185\u7f6e\u65b9\u6cd5\u65f6\uff0c\u4f1a\u5bf9\u53d8\u91cf\u7c7b\u578b\u8fdb\u884c\u68c0\u67e5\uff0c\u5e76\u4f1a\u5bf9\u53c2\u6570\u8fdb\u884c\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362\uff0c\u8f6c\u6362\u4f18\u5148\u7ea7\u662fbyte<int<float\u3002",source:"@site/docs/yak-basic/17-type-conv.mdx",sourceDirName:"yak-basic",slug:"/yak-basic/type-conv",permalink:"/en/docs/yak-basic/type-conv",editUrl:"https://github.com/yaklang/docs/yak-basic/17-type-conv.mdx",tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"16. \u901a\u9053\u7c7b\u578b\uff1achan \u7c7b\u578b",permalink:"/en/docs/yak-basic/channel"},next:{title:"18. \u63a7\u5236\u6d41\uff1aIF \u8bed\u53e5",permalink:"/en/docs/yak-basic/control-flow-if"}},p=[{value:"\u5177\u4f53\u7c7b\u578b\u8f6c\u6362\u65b9\u6848\u5982\u4e0b\uff1a",id:"\u5177\u4f53\u7c7b\u578b\u8f6c\u6362\u65b9\u6848\u5982\u4e0b\uff1a",children:[]}],o={toc:p};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"17-\u7c7b\u578b\u8f6c\u6362\uff1a\u6574\u6570\uff0c\u6d6e\u70b9\u6570\u4e0e\u5b57\u7b26\u4e32"},"17. \u7c7b\u578b\u8f6c\u6362\uff1a\u6574\u6570\uff0c\u6d6e\u70b9\u6570\u4e0e\u5b57\u7b26\u4e32"),(0,a.kt)("p",null,"\u8c03\u7528\u5185\u7f6e\u65b9\u6cd5\u65f6\uff0c\u4f1a\u5bf9\u53d8\u91cf\u7c7b\u578b\u8fdb\u884c\u68c0\u67e5\uff0c\u5e76\u4f1a\u5bf9\u53c2\u6570\u8fdb\u884c\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362\uff0c\u8f6c\u6362\u4f18\u5148\u7ea7\u662fbyte<int<float\u3002"),(0,a.kt)("p",null,"\u663e\u793a\u7c7b\u578b\u8f6c\u6362\u662f\u901a\u8fc7\u4f2a\u51fd\u6570\u5b9e\u73b0\uff0cyak\u5185\u7f6e\u4e86\u4e00\u4e9b\u4f2a\u51fd\u6570\uff0c\u5305\u62ecint\u3001bool\u3001float\u3001byte\u3001string\u3001var\uff0c\u53ef\u4ee5\u901a\u8fc7\u8fd9\u6837int(true)\u8fd9\u79cd\u65b9\u5f0f\u5b9e\u73b0\u7c7b\u578b\u7684\u8f6c\u6362\uff0c\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u652f\u6301\u5bf9\u5b57\u7b26\u4e32\u53d8\u91cf\u7684\u89e3\u6790\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// \u5f3a\u5236\u8f6c\u6362\u53ef\u7b80\u5355\u901a\u8fc7 type(...) \u76f4\u63a5\u8f6c\u6362\na = "123"\naInt = int(a)\n/*\n    aInt \u4e3a (int) 123\n*/\n')),(0,a.kt)("h2",{id:"\u5177\u4f53\u7c7b\u578b\u8f6c\u6362\u65b9\u6848\u5982\u4e0b\uff1a"},"\u5177\u4f53\u7c7b\u578b\u8f6c\u6362\u65b9\u6848\u5982\u4e0b\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u539f\u7c7b\u578b\\\u76ee\u6807\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:"center"},"int"),(0,a.kt)("th",{parentName:"tr",align:"center"},"bool"),(0,a.kt)("th",{parentName:"tr",align:"center"},"float"),(0,a.kt)("th",{parentName:"tr",align:"center"},"byte"),(0,a.kt)("th",{parentName:"tr",align:"center"},"string"),(0,a.kt)("th",{parentName:"tr",align:"center"},"var"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"int"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u975e0\u4e3a\u771f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u76f4\u63a5\u8f6c\uff0c\u65e0\u4fe1\u606f\u4e22\u5931"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u53ef\u80fd\u4f1a\u6709\u4fe1\u606f\u4e22\u5931"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u7b49\u540c\u4e8e ",(0,a.kt)("inlineCode",{parentName:"td"},'sprintf("%d",num)')),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"bool"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u771f\u4e3a1\uff0c\u5047\u4e3a0"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u771f\u4e3a1\uff0c\u5047\u4e3a0"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u771f\u4e3a1\uff0c\u5047\u4e3a0"),(0,a.kt)("td",{parentName:"tr",align:"center"},'"true"\u548c"false"'),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"float"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u53ea\u4fdd\u7559\u6574\u6570\u90e8\u5206"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u975e0\u4e3a\u771f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u53ea\u4fdd\u7559\u6574\u6570\u90e8\u5206"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u7b49\u540c\u4e8e ",(0,a.kt)("inlineCode",{parentName:"td"},'sprintf("%f",num)')),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"byte"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u76f4\u63a5\u8f6c\uff0c\u65e0\u4fe1\u606f\u4e22\u5931"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u975e0\u4e3a\u771f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u76f4\u63a5\u8f6c\uff0c\u65e0\u4fe1\u606f\u4e22\u5931"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u7b49\u540c\u4e8e ",(0,a.kt)("inlineCode",{parentName:"td"},'sprintf("%d",num)')),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u89e3\u6790\u5b57\u7b26\u4e32\u5185\u7684\u6570\u636e\uff0c\u5931\u8d25\u5219\u4f1apanic"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u540c\u5de6"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u540c\u5de6"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u540c\u5de6"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"var"),(0,a.kt)("td",{parentName:"tr",align:"center"},"var\u7c7b\u578b\u53d8\u91cf\u53ef\u4ee5\u50a8\u5b58\u4efb\u610f\u7c7b\u578b\u6570\u636e\uff0c\u53ef\u4ee5\u901a\u8fc7\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362\u8f6c\u56de\u539f\u7c7b\u578b"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u540c\u5de6"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u540c\u5de6"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u540c\u5de6"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u540c\u5de6"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")))))}m.isMDXComponent=!0}}]);