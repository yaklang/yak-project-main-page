"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[8362],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>d});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},p=Object.keys(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),l=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(u.Provider,{value:n},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,p=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=l(r),y=a,d=s["".concat(u,".").concat(y)]||s[y]||g[y]||p;return r?t.createElement(d,i(i({ref:n},c),{},{components:r})):t.createElement(d,i({ref:n},c))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=r.length,i=new Array(p);i[0]=y;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<p;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},28078:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>i,default:()=>s,frontMatter:()=>p,metadata:()=>o,toc:()=>u});var t=r(58168),a=(r(96540),r(15680));const p={sidebar_position:14},i="\u4e94\u3001Web Fuzzer\u5e8f\u5217\u57fa\u7840",o={unversionedId:"Web Fuzzer/fuzz-sequence",id:"Web Fuzzer/fuzz-sequence",isDocsHomePage:!1,title:"\u4e94\u3001Web Fuzzer\u5e8f\u5217\u57fa\u7840",description:"\u5728\u7ecf\u8fc7\u4e0a\u8ff0\u6559\u7a0b\u7684\u94fa\u57ab\u540e\uff0c\u6211\u4eec\u7ec8\u4e8e\u5f00\u59cb\u4ecb\u7ecdWeb Fuzzer\u5e8f\u5217\u529f\u80fd\u4e86\u3002 Web Fuzzer \u5e8f\u5217\u5c31\u662f\u5c06\u591a\u4e2a Web Fuzzer \u8282\u70b9\u4e32\u8054\u8d77\u6765\uff0c\u5b9e\u73b0\u66f4\u590d\u6742\u7684\u903b\u8f91\u4e0e\u529f\u80fd\u3002\u4f8b\u5982\u6211\u4eec\u9700\u8981\u5148\u8fdb\u884c\u767b\u5f55\uff0c\u7136\u540e\u518d\u8fdb\u884c\u5176\u4ed6\u64cd\u4f5c\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528 Web Fuzzer \u5e8f\u5217\u529f\u80fd\u3002",source:"@site/products/Web Fuzzer/fuzz-sequence.md",sourceDirName:"Web Fuzzer",slug:"/Web Fuzzer/fuzz-sequence",permalink:"/products/Web Fuzzer/fuzz-sequence",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"teamSidebar",previous:{title:"\u56db\u3001\u5e8f\u5217\u524d\u7f6e\u77e5\u8bc6\u4e4b\u9ad8\u7ea7\u914d\u7f6e",permalink:"/products/Web Fuzzer/advanced-configuration2"},next:{title:"\u516d\u3001\u5e8f\u5217\u573a\u666f\u6848\u4f8b\uff1a\u6bcf\u65e5\u7b7e\u5230",permalink:"/products/Web Fuzzer/fuzz-sequence-example1"}},u=[],l={toc:u},c="wrapper";function s(e){let{components:n,...p}=e;return(0,a.yg)(c,(0,t.A)({},l,p,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"\u4e94web-fuzzer\u5e8f\u5217\u57fa\u7840"},"\u4e94\u3001Web Fuzzer\u5e8f\u5217\u57fa\u7840"),(0,a.yg)("p",null,"\u5728\u7ecf\u8fc7\u4e0a\u8ff0\u6559\u7a0b\u7684\u94fa\u57ab\u540e\uff0c\u6211\u4eec\u7ec8\u4e8e\u5f00\u59cb\u4ecb\u7ecdWeb Fuzzer\u5e8f\u5217\u529f\u80fd\u4e86\u3002 Web Fuzzer \u5e8f\u5217\u5c31\u662f\u5c06\u591a\u4e2a Web Fuzzer \u8282\u70b9\u4e32\u8054\u8d77\u6765\uff0c\u5b9e\u73b0\u66f4\u590d\u6742\u7684\u903b\u8f91\u4e0e\u529f\u80fd\u3002\u4f8b\u5982\u6211\u4eec\u9700\u8981\u5148\u8fdb\u884c\u767b\u5f55\uff0c\u7136\u540e\u518d\u8fdb\u884c\u5176\u4ed6\u64cd\u4f5c\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528 Web Fuzzer \u5e8f\u5217\u529f\u80fd\u3002"),(0,a.yg)("p",null,"Web Fuzzer\u5e8f\u5217\u5982\u56fe\u6240\u793a\uff0c\u5728\u6700\u5de6\u4fa7\u6709\u4e00\u4e2a",(0,a.yg)("strong",{parentName:"p"},"Fuzzer \u5e8f\u5217"),"\u6309\u94ae\uff1a\n",(0,a.yg)("img",{src:r(74535).A})),(0,a.yg)("p",null,"\u5f53\u6211\u4eec\u70b9\u51fb ",(0,a.yg)("inlineCode",{parentName:"p"},"Fuzzer \u5e8f\u5217")," \u6309\u94ae\u65f6\uff0c\u4f1a\u5c06 ",(0,a.yg)("inlineCode",{parentName:"p"},"WF-[1]"),"\u8fd9\u4e2a\u5b50\u6807\u7b7e\u9875\u7ec4\u6210\u4e00\u4e2a\u5e8f\u5217\uff0c\u53d8\u6210\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.yg)("p",null,(0,a.yg)("img",{src:r(71884).A})),(0,a.yg)("p",null,"\u968f\u540e\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"Step [0]")," \u8fd9\u4e2a\u8282\u70b9\u4e2d\uff0c\u6dfb\u52a0 ",(0,a.yg)("inlineCode",{parentName:"p"},"Web Fuzzer")," \u7684\u6807\u7b7e\u9875",(0,a.yg)("inlineCode",{parentName:"p"},"WF-[1]"),"\uff0c\u8fd9\u76f8\u5f53\u4e8e\u5e8f\u5217\u4e2d\u8bbe\u7f6e\u7b2c\u4e00\u4e2a\u8282\u70b9\u7684\u8bf7\u6c42\u5305\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"WF-[1]"),"\u3002"),(0,a.yg)("p",null,(0,a.yg)("img",{src:r(7797).A})),(0,a.yg)("p",null,"\u6211\u4eec\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0\u5176\u4ed6\u8282\u70b9\u5230\u5e8f\u5217\u4e2d\uff0c\u53ea\u9700\u8981\u5c06\u5176\u4ed6\u6807\u7b7e\u9875\u62d6\u5165\u5e8f\u5217\u4e2d\u5373\u53ef\uff1a"),(0,a.yg)("p",null,(0,a.yg)("img",{src:r(84026).A})),(0,a.yg)("p",null,"\u63a5\u7740\u6211\u4eec\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"WF-[1]")," \u4e2d\u8bbe\u7f6e\u4e00\u4e2a\u63d0\u53d6\u5668\u89c4\u5219\uff0c\u89c4\u5219\u5185\u5bb9\u662f\u63d0\u53d6\u952e\u503c\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"Node1"),"\u7684\u503c\uff0c\u58f0\u660e\u4e3a ",(0,a.yg)("inlineCode",{parentName:"p"},"get"),"\u53d8\u91cf\u3002\u518d\u8bbe\u7f6e\u4e00\u4e2a\u53d8\u91cf ",(0,a.yg)("inlineCode",{parentName:"p"},"node1"),"\uff0c\u5185\u5bb9\u662f",(0,a.yg)("inlineCode",{parentName:"p"},"\u6211\u662f\u8282\u70b91\u4f20\u6765\u7684\u503c"),"\uff1a"),(0,a.yg)("p",null,(0,a.yg)("img",{src:r(31779).A})),(0,a.yg)("p",null,"\u7136\u540e\u6211\u4eec\u5728 ",(0,a.yg)("inlineCode",{parentName:"p"},"WF-[2]"),"\u4e2d\u8bbe\u7f6e",(0,a.yg)("inlineCode",{parentName:"p"},"WF-[1]"),"\u4e2d\u58f0\u660e\u7684\u53d8\u91cf\uff0c\u5047\u5982\u6b64\u65f6\u6211\u4eec\u76f4\u63a5\u53d1\u9001\u8bf7\u6c42\uff0c\u7ed3\u679c\u4f1a\u4e3a\u7a7a\uff0c\u8fd9\u662f\u56e0\u4e3a\u5355\u72ec\u53d1\u9001\u8fd9\u4e00\u4e2a\u8bf7\u6c42\uff0c\u662f\u6ca1\u6709",(0,a.yg)("inlineCode",{parentName:"p"},"WF-[1]"),"\u4e2d\u58f0\u660e\u7684\u53d8\u91cf\u7684\uff1a"),(0,a.yg)("p",null,(0,a.yg)("img",{src:r(94920).A})),(0,a.yg)("p",null,"\u6700\u540e\u6211\u4eec\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"Fuzzer")," \u5e8f\u5217\u529f\u80fd\u5c1d\u8bd5\u4e00\u4e0b\uff0c\u5728",(0,a.yg)("inlineCode",{parentName:"p"}," WF-[1]"),"\u5230",(0,a.yg)("inlineCode",{parentName:"p"},"WF-[2]"),"\u7684\u4e2d\u95f4\uff0c\u5f00\u542f",(0,a.yg)("strong",{parentName:"p"},"\u7ee7\u627f\u53d8\u91cf"),"\u9009\u9879(\u9ed8\u8ba4\u5f00\u542f)\uff0c\u70b9\u51fb",(0,a.yg)("inlineCode",{parentName:"p"},"\u5f00\u59cb\u6267\u884c"),"\u6309\u94ae\uff0c\u7b49\u5f85\u8bf7\u6c42\u7ed3\u675f\u540e\uff0c\u6211\u4eec\u67e5\u770b",(0,a.yg)("inlineCode",{parentName:"p"},"WF-[2]"),"\u7684\u54cd\u5e94\uff0c\u53d1\u73b0\u5b83\u5df2\u7ecf\u6210\u529f\u4f7f\u7528\u4e86\u5728",(0,a.yg)("inlineCode",{parentName:"p"},"WF-[1]"),"\u4e2d\u8bbe\u7f6e\u7684\u53d8\u91cf\uff1a"),(0,a.yg)("p",null,(0,a.yg)("img",{src:r(5137).A})))}s.isMDXComponent=!0},74535:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/1-dbd61d1b178688e08b80b834e8f955ed.png"},71884:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/2-320c729a5fe60987bc5f914730104fc2.png"},7797:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/3-65175a96229ffd86250a99369c6bfb28.png"},84026:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/4-3b043471863185f5b42f30841c5bb59d.png"},31779:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/5-64d828b9c656bca6a319982967431a53.png"},94920:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/6-01b37d2a2b608a2a1f32b72b51696938.png"},5137:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/7-1eef14485b8df2b418f9a510c2114608.png"}}]);