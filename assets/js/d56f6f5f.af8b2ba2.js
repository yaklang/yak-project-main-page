"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[9545],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(a),u=i,k=d["".concat(c,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[d]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},30488:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:7},o="\u4e13\u9879\u6f0f\u6d1e\u6570\u636e\u5e93\u66f4\u65b0",p={unversionedId:"article/basic/update-nuclei-poc",id:"article/basic/update-nuclei-poc",isDocsHomePage:!1,title:"\u4e13\u9879\u6f0f\u6d1e\u6570\u636e\u5e93\u66f4\u65b0",description:'\u5728 Yakit \u7684 "\u4e13\u9879\u6f0f\u6d1e" \u68c0\u6d4b\u4e2d\uff0c\u6211\u4eec\u5927\u91cf\u4f7f\u7528\u4e86 "Nuclei Yaml PoC" \u4f5c\u4e3a\u901a\u7528\u652f\u6301\u3002',source:"@site/products/article/basic/update-nuclei-poc.md",sourceDirName:"article/basic",slug:"/article/basic/update-nuclei-poc",permalink:"/products/article/basic/update-nuclei-poc",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"teamSidebar",previous:{title:"\u6a21\u5757\u5316\u6307\u7eb9\u626b\u63cf\u7684\u201c\u7ec8\u6781\u201d\u5f62\u6001",permalink:"/products/article/basic/modular-fingerprint-scanning"},next:{title:"\u4f7f\u7528 Yakit \u6253\u7834 Java \u5e8f\u5217\u5316\u534f\u8bae\u8bed\u8a00\u9694\u79bb",permalink:"/products/article/basic/breaking-java-with-yakit"}},c=[{value:"\u81ea\u52a8\u66f4\u65b0",id:"\u81ea\u52a8\u66f4\u65b0",children:[]},{value:"\u81ea\u52a8\u66f4\u65b0\u5931\u6548\uff1f\u8bd5\u8bd5\u624b\u52a8",id:"\u81ea\u52a8\u66f4\u65b0\u5931\u6548\u8bd5\u8bd5\u624b\u52a8",children:[{value:"\u6b65\u9aa4\u4e00\uff1a\u624b\u52a8\u4e0b\u8f7d PoC",id:"\u6b65\u9aa4\u4e00\u624b\u52a8\u4e0b\u8f7d-poc",children:[]},{value:"\u6b65\u9aa4\u4e8c\uff1a\u52a0\u8f7d\u672c\u5730 PoC",id:"\u6b65\u9aa4\u4e8c\u52a0\u8f7d\u672c\u5730-poc",children:[]}]}],l={toc:c},s="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(s,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u4e13\u9879\u6f0f\u6d1e\u6570\u636e\u5e93\u66f4\u65b0"},"\u4e13\u9879\u6f0f\u6d1e\u6570\u636e\u5e93\u66f4\u65b0"),(0,i.kt)("p",null,'\u5728 Yakit \u7684 "\u4e13\u9879\u6f0f\u6d1e" \u68c0\u6d4b\u4e2d\uff0c\u6211\u4eec\u5927\u91cf\u4f7f\u7528\u4e86 "Nuclei Yaml PoC" \u4f5c\u4e3a\u901a\u7528\u652f\u6301\u3002'),(0,i.kt)("p",null,'\u5728\u5b9e\u9645\u7684\u4f7f\u7528\u8fc7\u7a0b\u4e2d\uff0cYakit \u5e76\u4e0d "\u81ea\u5e26" Yaml PoC\uff0c\u6240\u4ee5\u7528\u6237\u9700\u8981\u81ea\u884c\u5b89\u88c5\u5e76\u52a0\u8f7d\u5230 Yakit \u63d2\u4ef6\u6570\u636e\u5e93\u4e2d\u3002'),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u672c\u6587\u63cf\u8ff0\u7684\u66f4\u65b0\u5185\u5bb9\u4e0e yak \u5b50\u547d\u4ee4\u64cd\u4f5c\u7565\u6709\u7248\u672c\u5dee\u5f02\uff0c\u63a8\u8350\u5728 yak \u7248\u672c ",(0,i.kt)("inlineCode",{parentName:"p"},">= 1.0.13-sp30")," \u4f7f\u7528\u3002 "))),(0,i.kt)("h2",{id:"\u81ea\u52a8\u66f4\u65b0"},"\u81ea\u52a8\u66f4\u65b0"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f\u66f4\u65b0\u65f6\u7528\u6237\u6743\u9650")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u63a8\u8350\u4f7f\u7528\u975e Root \u7528\u6237\u66f4\u65b0 Nuclei Yaml PoC"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(43422).Z})),(0,i.kt)("p",null,"\u6309\u7167\u9014\u4e2d\u6309\u94ae\u5373\u53ef\u64cd\u4f5c\u66f4\u65b0"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u66f4\u65b0\u5931\u8d25\uff1f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h3",{parentName:"div",id:"\u81ea\u52a8\u66f4\u65b0\u5931\u8d25\u7684\u539f\u56e0"},"\u81ea\u52a8\u66f4\u65b0\u5931\u8d25\u7684\u539f\u56e0\uff1f"),(0,i.kt)("h4",{parentName:"div",id:"1-nuclei-\u914d\u7f6e\u6587\u4ef6\u6743\u9650\u539f\u56e0"},"1. nuclei \u914d\u7f6e\u6587\u4ef6\u6743\u9650\u539f\u56e0\uff1a"),(0,i.kt)("p",{parentName:"div"},"nuclei templates \u5728\u66f4\u65b0\u7684\u65f6\u5019\u4f9d\u8d56\u4e8e\u672c\u5730 ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.config/nuclei/*"),' \u4e0b\u7684\u5185\u5bb9\u4f5c\u4e3a "\u8bb0\u5f55"\u3002'),(0,i.kt)("p",{parentName:"div"},'\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u4e0d\u5173\u5fc3\u8fd9\u4e9b\u5185\u5bb9\uff0c\u4f46\u662f\u7531\u4e8e\u7528\u6237\u67d0\u6b21\u4f7f\u7528 "root" \u6743\u9650\u66f4\u65b0\u5bfc\u81f4 ',(0,i.kt)("inlineCode",{parentName:"p"},"~/.config/nuclei")," \u7684\u7528\u6237\u7ec4\u53d8\u4e3a root\u3002"),(0,i.kt)("p",{parentName:"div"},"\u7136\u800c\u518d\u6b21\u666e\u901a\u7528\u6237\u66f4\u65b0\u7684\u65f6\u5019\uff0c\u6743\u9650\u4e0d\u8db3\uff0c\u5bfc\u81f4\u66f4\u65b0\u5931\u8d25\u3002"),(0,i.kt)("p",{parentName:"div"},"\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\uff0c\u5904\u7406\u65b9\u6848\u975e\u5e38\u7b80\u5355\uff1a"),(0,i.kt)("p",{parentName:"div"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo chown -R [your-unix-user] ~/.config/nuclei")," \u6539\u53d8\u7528\u6237\u914d\u7f6e\u6587\u4ef6\u6743\u9650\u7ec4\u5373\u53ef\u3002"),(0,i.kt)("h4",{parentName:"div",id:"2-\u7f51\u7edc\u95ee\u9898"},"2. \u7f51\u7edc\u95ee\u9898"),(0,i.kt)("p",{parentName:"div"},"\u4e2d\u56fd\u5927\u9646\u4e0d\u540c\u8fd0\u8425\u5546\u5bf9 Github \u7684\u7b56\u7565\u6709\u6240\u4e0d\u540c\uff0c\u4e00\u822c\u6765\u8bf4\u5747\u53ef\u66f4\u65b0\u6210\u529f\uff0c\u8fd9\u79cd\u60c5\u51b5\uff0c\u7528\u6237\u53ef\u4ee5\u6302\u8f7d\u4ee3\u7406\u66f4\u65b0\u5373\u53ef\u3002"),(0,i.kt)("h4",{parentName:"div",id:"3-\u6570\u636e\u5e93\u6743\u9650\u914d\u7f6e\u95ee\u9898"},"3. \u6570\u636e\u5e93\u6743\u9650\u914d\u7f6e\u95ee\u9898"),(0,i.kt)("p",{parentName:"div"},"\u4e00\u822c\u6765\u8bf4\uff0c\u5728\u65b0\u7248\u672c\u7684 Yakit(>=1.0.13-sp4) \u754c\u9762\u4e0a\u5982\u679c\u53d1\u73b0\u6570\u636e\u5e93\u6709\u6743\u9650\u95ee\u9898\uff0c\u5c06\u4f1a\u663e\u793a\u81ea\u52a8\u4fee\u590d\u7684\u6309\u94ae\uff0c\u70b9\u51fb\u5373\u53ef\u81ea\u52a8\u4fee\u590d\u3002"),(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u81ea\u52a8\u4fee\u590d\u5931\u8d25\uff0c\u4e00\u822c\u6765\u8bf4\u4e5f\u662f\u6743\u9650\u95ee\u9898\uff1a\u901a\u5e38 ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo chown -R [your-unix-user] ~/yakit-projects/")," \u5373\u53ef\u4fee\u590d"))),(0,i.kt)("h2",{id:"\u81ea\u52a8\u66f4\u65b0\u5931\u6548\u8bd5\u8bd5\u624b\u52a8"},"\u81ea\u52a8\u66f4\u65b0\u5931\u6548\uff1f\u8bd5\u8bd5\u624b\u52a8"),(0,i.kt)("h3",{id:"\u6b65\u9aa4\u4e00\u624b\u52a8\u4e0b\u8f7d-poc"},"\u6b65\u9aa4\u4e00\uff1a\u624b\u52a8\u4e0b\u8f7d PoC"),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u63a8\u8350\u4f7f\u7528\u666e\u901a\u7528\u6237\u6743\u9650 "))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"cd ~\ngit clone https://github.com/projectdiscovery/nuclei-templates --depth 1\n")),(0,i.kt)("h3",{id:"\u6b65\u9aa4\u4e8c\u52a0\u8f7d\u672c\u5730-poc"},"\u6b65\u9aa4\u4e8c\uff1a\u52a0\u8f7d\u672c\u5730 PoC"),(0,i.kt)("p",null,"\u672c\u5730 PoC \u7684\u5730\u5740\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"~/nuclei-templates")," \u4e2d\uff0c\u5728\u6267\u884c\u6b65\u9aa4\u4e8c\u7684\u65f6\u5019\uff0c\u8bf7\u786e\u4fdd\u7528\u6237\u66f4\u65b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"nuclei-templates")," \u6210\u529f"),(0,i.kt)("h4",{id:"\u4f7f\u7528-yakit-store-\u4e2d\u7684-\u91cd\u7f6e-nuclei-yaml-poc-\u6570\u636e\u5e93-\u63d2\u4ef6"},'\u4f7f\u7528 Yakit-Store \u4e2d\u7684 "\u91cd\u7f6e nuclei Yaml PoC \u6570\u636e\u5e93" \u63d2\u4ef6'),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(25570).Z})),(0,i.kt)("p",null,'\u6211\u4eec\u5728\u63d2\u4ef6\u4ed3\u5e93\u4e2d\u53ef\u4ee5\u770b\u5230 "\u91cd\u7f6e nuclei Yaml PoC \u6570\u636e\u5e93" \u8fd9\u4e2a\u63d2\u4ef6\uff0c\u70b9\u51fb\u8fd9\u4e2a\u63d2\u4ef6\u5373\u53ef\u52a0\u8f7d\u7528\u6237\u4e0b\u8f7d\u5230\u672c\u5730\u7684 ',(0,i.kt)("inlineCode",{parentName:"p"},"nuclei-templates")," "),(0,i.kt)("h4",{id:"\u5907\u9009\u5728-yak-runner-\u4e2d\u91cd\u7f6e-nuclei-yaml-poc-\u6570\u636e\u5e93"},"\u5907\u9009\uff1a\u5728 Yak Runner \u4e2d\u91cd\u7f6e nuclei yaml poc \u6570\u636e\u5e93"),(0,i.kt)("p",null,"\u5728 yak \u6838\u5fc3\u5f15\u64ce\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},">= v1.0.13-sp30")," \u7248\u672c\u4e2d\uff0c\u6267\u884c\u5982\u4e0b\u64cd\u4f5c\u7b49\u6548\u4e8e\u4f7f\u7528\u4e0a\u8ff0\u63d2\u4ef6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'loglevel("info")\nnuclei.RemoveDatabase()\nnuclei.UpdateDatabase()\n')))}d.isMDXComponent=!0},25570:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/yakit-update-yakit-store-reset-nuclei-database-c159bff238b89c8dd7f0cb12aae809a8.jpg"},43422:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/yakit-update-yaml-poc-f7f588f824b939a0fbd1ff559659fe90.jpg"}}]);