(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[8446],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86604:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>i,metadata:()=>l,toc:()=>c,default:()=>s});var r=n(22122),a=(n(67294),n(3905));const o={sidebar_position:7},i="7. \u5b57\u7b26\u4e32\uff1a\u6a21\u7248\u5b57\u7b26\u4e32\u8bed\u6cd5 f-string",l={unversionedId:"yak-basic/string-template",id:"yak-basic/string-template",isDocsHomePage:!1,title:"7. \u5b57\u7b26\u4e32\uff1a\u6a21\u7248\u5b57\u7b26\u4e32\u8bed\u6cd5 f-string",description:"\u5728 Yaklang \u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u4e86 JavaScript \u98ce\u683c\u5b57\u7b26\u4e32\u6a21\u7248\u6784\u5efa\u65b9\u5f0f\uff0c\u8fd9\u79cd\u65b9\u5f0f\u5c06\u4f1a\u6781\u5927\u7684\u7f29\u77ed \u201c\u5b57\u7b26\u4e32\u683c\u5f0f\u5316\u201d \u7684\u6b65\u9aa4\u3002\u5177\u4f53\u4f7f\u7528\u65b9\u6cd5\u662f\uff0c\u6211\u4eec\u5728\u4e00\u4e2a\u57fa\u7840\u5b57\u7b26\u4e32\u7684\u524d\u65b9\u589e\u52a0 f \u524d\u7f00\uff0c\u8fd9\u4e2a\u524d\u7f00\u5c06\u4f1a\u540d\u58f0\u4e4b\u540e\u7684\u5b57\u7b26\u4e32\u662f\u4e00\u4e2a \u201c\u6a21\u677f\u201d\uff0c\u53ef\u4ee5\u901a\u8fc7 ${  } \u6765\u6267\u884c\u4e00\u4e2a\u8868\u8fbe\u5f0f\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8fd9\u6837\u7684\u65b9\u5f0f\uff0c\u5feb\u901f\u628a\u4e00\u4e2a\u503c\u6ce8\u5165\u5230\u5b57\u7b26\u4e32\u4e2d",source:"@site/docs/yak-basic/7-string-template.md",sourceDirName:"yak-basic",slug:"/yak-basic/string-template",permalink:"/docs/yak-basic/string-template",editUrl:"https://github.com/yaklang/docs/yak-basic/7-string-template.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"6. \u5b57\u7b26\u4e32\uff1a% \u683c\u5f0f\u5316\u8bed\u6cd5",permalink:"/docs/yak-basic/string-percent-format"},next:{title:"8. \u5b57\u7b26\u4e32\uff1aFuzztag \u5feb\u901f\u6267\u884c x-string",permalink:"/docs/yak-basic/string-fuzztag-x"}},c=[],p={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"7-\u5b57\u7b26\u4e32\uff1a\u6a21\u7248\u5b57\u7b26\u4e32\u8bed\u6cd5-f-string"},"7. \u5b57\u7b26\u4e32\uff1a\u6a21\u7248\u5b57\u7b26\u4e32\u8bed\u6cd5 f-string"),(0,a.kt)("p",null,"\u5728 Yaklang \u4e2d\uff0c\u6211\u4eec\u4f7f\u7528\u4e86 JavaScript \u98ce\u683c\u5b57\u7b26\u4e32\u6a21\u7248\u6784\u5efa\u65b9\u5f0f\uff0c\u8fd9\u79cd\u65b9\u5f0f\u5c06\u4f1a\u6781\u5927\u7684\u7f29\u77ed \u201c\u5b57\u7b26\u4e32\u683c\u5f0f\u5316\u201d \u7684\u6b65\u9aa4\u3002\u5177\u4f53\u4f7f\u7528\u65b9\u6cd5\u662f\uff0c\u6211\u4eec\u5728\u4e00\u4e2a\u57fa\u7840\u5b57\u7b26\u4e32\u7684\u524d\u65b9\u589e\u52a0 f \u524d\u7f00\uff0c\u8fd9\u4e2a\u524d\u7f00\u5c06\u4f1a\u540d\u58f0\u4e4b\u540e\u7684\u5b57\u7b26\u4e32\u662f\u4e00\u4e2a \u201c\u6a21\u677f\u201d\uff0c\u53ef\u4ee5\u901a\u8fc7 ${  } \u6765\u6267\u884c\u4e00\u4e2a\u8868\u8fbe\u5f0f\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8fd9\u6837\u7684\u65b9\u5f0f\uff0c\u5feb\u901f\u628a\u4e00\u4e2a\u503c\u6ce8\u5165\u5230\u5b57\u7b26\u4e32\u4e2d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'a = "World"\nname = "V1ll4n"\nprintln(f`Hello ${a}, Hello ${name}`)\n/*    \nOUTPUT: \n    Hello World, Hello V1ll4n\n*/\n\nprintln(f`1+1 = ${1+1}`)\n/* \nOUTPUT:\n    1+1 = 2 \n*/\n')),(0,a.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u5904\u7406\u5b57\u7b26\u4e32\u5b9e\u9645\u4e0a\u662f JavaScript (ECMAScript) \u7684\u62db\u724c\u65b9\u5f0f\u3002\u975e\u5e38\u5177\u6709\u5b9e\u6218\u4ef7\u503c\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u5728\u6784\u5efa\u4e00\u4e2a\u6570\u636e\u5305\u7684\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u4ee5\u5f88\u81ea\u7136\u7684\u4f7f\u7528\u8fd9\u4e2a\u903b\u8f91\u6765\u64cd\u4f5c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'var targetPath = "admin.php?id=1"\nvar addr = "example.com:8080"\nvar payload = codec.EncodeUrl("1\'or\'\'=\'1")\n\npacket = f`GET /${targetPath} HTTP/1.1\nHost: ${addr}\n\nkey=value&key2=${payload}`\n/*\nGET /admin.php?id=1 HTTP/1.1\nHost: example.com:8080\n\nkey=value&key2=%31%27%6f%72%27%27%3d%27%31\n*/\n\nrsp, req, err = poc.HTTP(packet)\ndie(err)\n')))}s.isMDXComponent=!0}}]);