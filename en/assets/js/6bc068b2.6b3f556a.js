(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[1881],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64130:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>o,metadata:()=>i,toc:()=>l,default:()=>c});var r=n(22122),a=(n(67294),n(3905));const s={sidebar_position:10},o="XSS\u6f0f\u6d1e",i={unversionedId:"CommonVulnerabilities/xss",id:"CommonVulnerabilities/xss",isDocsHomePage:!1,title:"XSS\u6f0f\u6d1e",description:"\u53cd\u5c04\u578bXSS",source:"@site/wiki/CommonVulnerabilities/xss.md",sourceDirName:"CommonVulnerabilities",slug:"/CommonVulnerabilities/xss",permalink:"/en/wiki/CommonVulnerabilities/xss",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"teamSidebar",previous:{title:"URL\u91cd\u5b9a\u5411",permalink:"/en/wiki/CommonVulnerabilities/URLRedirection"},next:{title:"\u4efb\u610f\u6587\u4ef6\u4e0b\u8f7d/\u8bfb\u53d6",permalink:"/en/wiki/CommonVulnerabilities/AnyFileDownload"}},l=[{value:"\u53cd\u5c04\u578bXSS",id:"\u53cd\u5c04\u578bxss",children:[]},{value:"\u5b58\u50a8\u578bXSS",id:"\u5b58\u50a8\u578bxss",children:[]},{value:"DOM\u578bXSS",id:"dom\u578bxss",children:[]}],p={toc:l};function c(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"xss\u6f0f\u6d1e"},"XSS\u6f0f\u6d1e"),(0,a.kt)("h2",{id:"\u53cd\u5c04\u578bxss"},"\u53cd\u5c04\u578bXSS"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6f0f\u6d1e\u63cf\u8ff0\uff1a")),(0,a.kt)("p",null,"\u53cd\u5c04\u578bXSS\u662f\u4e00\u79cd\u975e\u6301\u4e45\u6027\u7684\u653b\u51fb\uff0c\u5b83\u6307\u7684\u662f\u6076\u610f\u653b\u51fb\u8005\u5f80Web\u9875\u9762\u91cc\u63d2\u5165\u6076\u610f\u4ee3\u7801\uff0c\u5f53\u7528\u6237\u6d4f\u89c8\u8be5\u9875\u4e4b\u65f6\uff0c\u5d4c\u5165\u5728Web\u9875\u9762\u4e2d\u7684HTML\u4ee3\u7801\u4f1a\u88ab\u6267\u884c\uff0c\u4ece\u800c\u8fbe\u5230\u6076\u610f\u653b\u51fb\u7528\u6237\u7684\u76ee\u7684\u3002\u8fd9\u91cc\u63d2\u5165\u7684\u6076\u610f\u4ee3\u7801\u5e76\u6ca1\u6709\u4fdd\u5b58\u5728\u76ee\u6807\u7f51\u7ad9\uff0c\u9700\u8981\u5f15\u8bf1\u7528\u6237\u70b9\u51fb\u4e00\u4e2a\u94fe\u63a5\uff0c\u8df3\u8f6c\u5230\u76ee\u6807\u7f51\u7ad9\u4e0a\u7684\u6076\u610f\u9875\u9762\u6765\u5b9e\u65bd\u653b\u51fb"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6f0f\u6d1e\u6848\u4f8b\uff1a")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"POST\u578b\u53cd\u5c04XSS"))),(0,a.kt)("p",null,"\u8bbf\u95ee\u6d4b\u8bd5\u7f51\u7ad9\u4e0a\u7684\u4e00\u4e2a\u641c\u7d22\u6846\u754c\u9762\n\u5728\u641c\u7d22\u6846\u8f93\u5165\uff1a",(0,a.kt)("script",null,"alert(1)"),"\n\u70b9\u51fb\u67e5\u8be2\u65f6\u5f00\u542f\u6293\u5305"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(28260).Z})),(0,a.kt)("p",null,"\u81ea\u52a8\u5c06\u8f93\u5165\u7684 payload \u62fc\u63a5\u5230\u53d1\u9001\u7684\u5305\u4e2d"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(76510).Z})),(0,a.kt)("p",null,"\u653e\u5305\u540e\u6210\u529f\u89e6\u53d1\u5f39\u7a97"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(29549).Z})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"GET\u578b\u53cd\u5c04XSS"))),(0,a.kt)("p",null,"\u76f4\u63a5\u62fc\u63a5\u5230\u542b\u6709\u6f0f\u6d1eURL\u4e2d\uff0c\u4f8b\u5982\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://xxx.xxxx.xxx/search/foods.html?keyword="},"https://xxx.xxxx.xxx/search/foods.html?keyword="),(0,a.kt)("script",null,"alert(1)")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(79468).Z})),(0,a.kt)("h2",{id:"\u5b58\u50a8\u578bxss"},"\u5b58\u50a8\u578bXSS"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6f0f\u6d1e\u63cf\u8ff0\uff1a")),(0,a.kt)("p",null,"\u5b58\u50a8\u578bXSS\uff0c\u4e5f\u5c31\u662f\u6301\u4e45\u578bXSS\u3002\u653b\u51fb\u8005\u4e0a\u4f20\u7684\u5305\u542b\u6076\u610fjs\u811a\u672c\u7684\u7559\u8a00\u7b49\u4fe1\u606f\u88abWeb\u5e94\u7528\u7a0b\u5e8f\u4fdd\u5b58\u5230\u6570\u636e\u5e93\u4e2d\uff0cWeb\u5e94\u7528\u7a0b\u5e8f\u5728\u751f\u6210\u65b0\u7684\u9875\u9762\u7684\u65f6\u5019\u5982\u679c\u5305\u542b\u4e86\u8be5\u6076\u610fjs\u811a\u672c\uff0c\u8fd9\u6837\u4f1a\u5bfc\u81f4\u6240\u6709\u8bbf\u95ee\u8be5\u7f51\u9875\u7684\u6d4f\u89c8\u5668\u89e3\u6790\u6267\u884c\u8be5\u6076\u610f\u811a\u672c\u3002\u8fd9\u79cd\u653b\u51fb\u7c7b\u578b\u4e00\u822c\u5e38\u89c1\u5728\u535a\u5ba2\u3001\u8bba\u575b\u7b49\u7f51\u7ad9\u4e2d"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6f0f\u6d1e\u6848\u4f8b\uff1a")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\u6848\u4f8b1"))),(0,a.kt)("p",null,"\u8bbf\u95ee\u6d4b\u8bd5\u7f51\u7ad9\u4e3a\u4e00\u4e2a\u7559\u8a00\u677f\n\u70b9\u51fb\u7559\u8a00\u63d2\u5165payload\uff1a",(0,a.kt)("script",null,"console.log(1)"),"\n\u7559\u8a00\u6210\u529f\u540e\u6253\u5f00\u63a7\u5236\u53f0\u53ef\u4ee5\u770b\u5230\u6210\u529f\u6267\u884c\uff0c\u63a7\u5236\u53f0\u8f93\u51fa"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(41163).Z})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\u6848\u4f8b2"))),(0,a.kt)("p",null,"\u8bbf\u95ee\u7684\u6d4b\u8bd5\u7f51\u7ad9\u4e5f\u662f\u4e00\u4e2a\u7559\u8a00\u677f\n\u63d2\u5165payload\uff1aXSS\u201d>",(0,a.kt)("script",null,"console.log(1)"),"<span style=\u201d\n\u70b9\u51fb\u7559\u6210\u529f\u540e\u6253\u5f00\u63a7\u5236\u53f0\u53ef\u4ee5\u770b\u5230\u6210\u529f\u6267\u884c\uff0c\u63a7\u5236\u53f0\u8f93\u51fa"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(93067).Z})),(0,a.kt)("h2",{id:"dom\u578bxss"},"DOM\u578bXSS"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6f0f\u6d1e\u63cf\u8ff0\uff1a")),(0,a.kt)("p",null,"DOM\uff0c\u5168\u79f0\u662fDocument Object Model\uff0c\u662f\u4e00\u4e2a\u5e73\u53f0\u548c\u8bed\u8a00\u90fd\u4e2d\u7acb\u7684\u63a5\u53e3\uff0c\u53ef\u4ee5\u4f7f\u7a0b\u5e8f\u548c\u811a\u672c\u80fd\u591f\u52a8\u6001\u8bbf\u95ee\u548c\u66f4\u65b0\u6587\u6863\u7684\u5185\u5bb9\u3001\u7ed3\u6784\u548c\u6837\u5f0f\u3002DOM\u578bXSS\u5176\u5b9e\u662f\u4e00\u79cd\u7279\u6b8a\u7c7b\u578b\u7684\u53cd\u5c04\u578bXSS\uff0c\u5b83\u662f\u57fa\u4e8eDOM\u6587\u6863\u5bf9\u8c61\u6a21\u578b\u7684\u4e00\u79cd\u6f0f\u6d1e\uff0c\u800c\u4e14\u4e0d\u9700\u8981\u4e0e\u670d\u52a1\u5668\u8fdb\u884c\u4ea4\u4e92\u3002\u5ba2\u6237\u7aef\u7684\u811a\u672c\u7a0b\u5e8f\u53ef\u4ee5\u901a\u8fc7DOM\u6765\u52a8\u6001\u4fee\u6539\u9875\u9762\u5185\u5bb9\uff0c\u4ece\u5ba2\u6237\u7aef\u83b7\u53d6DOM\u4e2d\u7684\u6570\u636e\u5e76\u5728\u672c\u5730\u6267\u884c\u3002\u57fa\u4e8e\u8fd9\u4e2a\u7279\u6027\uff0c\u5c31\u53ef\u4ee5\u5229\u7528JS\u811a\u672c\u6765\u5b9e\u73b0XSS\u6f0f\u6d1e\u7684\u5229\u7528"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u6f0f\u6d1e\u4fee\u590d\u65b9\u6848"),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol"},"\u8f93\u5165\u8fc7\u6ee4\uff1a\u5bf9\u7528\u6237\u63d0\u4ea4\u7684\u6570\u636e\u8fdb\u884c\u6709\u6548\u9a8c\u8bc1\uff0c\u4ec5\u63a5\u53d7\u6307\u5b9a\u957f\u5ea6\u8303\u56f4\u5185\u7684\uff0c\u91c7\u7528\u9002\u5f53\u683c\u5f0f\u7684\u5185\u5bb9\u63d0\u4ea4\uff0c\u963b\u6b62\u6216\u8005\u5ffd\u7565\u9664\u6b64\u4ee5\u5916\u7684\u5176\u4ed6\u4efb\u4f55\u6570\u636e\u3002\u9664\u4e86\u5728\u5ba2\u6237\u7aef\u9a8c\u8bc1\u6570\u636e\u7684\u5408\u6cd5\u6027\uff0c\u8f93\u5165\u8fc7\u6ee4\u4e2d\u6700\u91cd\u8981\u7684\u8fd8\u662f\u8fc7\u6ee4\u548c\u51c0\u5316\u6709\u5bb3\u7684\u8f93\u5165;"),(0,a.kt)("li",{parentName:"ol"},"\u8f93\u51fa\u7f16\u7801\uff1a\u5bf9\u8f93\u51fa\u7684\u6570\u636e\u8fdb\u884c\u7f16\u7801\uff0c\u5982HTML\u7f16\u7801\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u767d\u540d\u5355\u548c\u9ed1\u540d\u5355\uff1a\u6839\u636e\u767d\u540d\u5355\u7684\u6807\u7b7e\u548c\u5c5e\u6027\u5bf9\u6570\u636e\u8fdb\u884c\u8fc7\u6ee4\uff0c\u4ee5\u6b64\u6765\u5bf9\u53ef\u6267\u884c\u7684\u811a\u672c\u8fdb\u884c\u6e05\u9664(\u5982script\u6807\u7b7e\uff0cimg\u6807\u7b7e\u7684onerror\u5c5e\u6027\u7b49)")))))}c.isMDXComponent=!0},28260:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/xss-1-cceae5d24ff6b2f733f035322e15c5ea.png"},76510:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/xss-2-d70330b0e54e083d2d8527540e61bad2.png"},29549:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/xss-3-d80a2c1a36ad456e1eefe1c3bdf3b254.png"},79468:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/xss-4-cef82376fba79c5818205d9bfe1d3843.png"},41163:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/xss-5-ed53c29833dc2dab04a8dc7bba400ca5.png"},93067:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"assets/images/xss-6-baaac1783161957bd57b0b70432312b9.png"}}]);