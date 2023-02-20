(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[6052],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>d,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return t?r.createElement(f,l(l({ref:n},d),{},{components:t})):r.createElement(f,l({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},39572:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>o,toc:()=>p,default:()=>d});var r=t(22122),a=(t(67294),t(3905));const i={sidebar_position:14},l="\u7f16\u7a0b\u6280\u5de7\uff1a\u51fd\u6570\u5f0f\u8865\u5145\u8bed\u6cd5",o={unversionedId:"yakexamples/func-p",id:"yakexamples/func-p",isDocsHomePage:!1,title:"\u7f16\u7a0b\u6280\u5de7\uff1a\u51fd\u6570\u5f0f\u8865\u5145\u8bed\u6cd5",description:"= 1.0.13-sp13",source:"@site/docs/yakexamples/func-p.mdx",sourceDirName:"yakexamples",slug:"/yakexamples/func-p",permalink:"/docs/yakexamples/func-p",editUrl:"https://github.com/yaklang/docs/yakexamples/func-p.mdx",tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"http-basic-from-url",permalink:"/docs/yakexamples/http-basic-from-url"},next:{title:"\u5904\u7406\u626b\u63cf\u76ee\u6807\u4e0e\u7f51\u6bb5\uff08\u6279\u91cf/\u5206\u7ec4\uff09",permalink:"/docs/yakexamples/handle-scan-target"}},p=[{value:"<code>x.Map</code> \u57fa\u7840\u51fd\u6570\u5f0f\u7f16\u7a0b\uff1a\u6620\u5c04",id:"xmap-\u57fa\u7840\u51fd\u6570\u5f0f\u7f16\u7a0b\uff1a\u6620\u5c04",children:[]},{value:"\u4f7f\u7528 <code>x.Map</code> \u4ee3\u66ff\u666e\u901a\u7684 for \u5faa\u73af\u6279\u5904\u7406",id:"\u4f7f\u7528-xmap-\u4ee3\u66ff\u666e\u901a\u7684-for-\u5faa\u73af\u6279\u5904\u7406",children:[]},{value:"\u4f7f\u7528 <code>x.Filter</code> \u4ee3\u66ff for \u5faa\u73af\u7b5b\u9009",id:"\u4f7f\u7528-xfilter-\u4ee3\u66ff-for-\u5faa\u73af\u7b5b\u9009",children:[]},{value:"\u4f7f\u7528 <code>x.Find</code> \u4ee3\u66ff for \u5faa\u73af\u5bfb\u627e\u5173\u952e\u5143\u7d20",id:"\u4f7f\u7528-xfind-\u4ee3\u66ff-for-\u5faa\u73af\u5bfb\u627e\u5173\u952e\u5143\u7d20",children:[]},{value:"\u7ecf\u5178\u6848\u4f8b\uff1a<code>x.Reducer</code> \u6c42\u5217\u8868\u548c",id:"\u7ecf\u5178\u6848\u4f8b\uff1axreducer-\u6c42\u5217\u8868\u548c",children:[]}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7f16\u7a0b\u6280\u5de7\uff1a\u51fd\u6570\u5f0f\u8865\u5145\u8bed\u6cd5"},"\u7f16\u7a0b\u6280\u5de7\uff1a\u51fd\u6570\u5f0f\u8865\u5145\u8bed\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},">= 1.0.13-sp13")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u51fd\u6570\u5f0f\u7f16\u7a0b\u662f\u79cd\u7f16\u7a0b\u65b9\u5f0f\uff0c\u5b83\u5c06\u7535\u8111\u8fd0\u7b97\u89c6\u4e3a\u51fd\u6570\u7684\u8ba1\u7b97\u3002 \u51fd\u6570\u7f16\u7a0b\u8bed\u8a00\u6700\u91cd\u8981\u7684\u57fa\u7840\u662f\u03bb\u6f14\u7b97\uff08lambda calculus\uff09\uff0c\u800c\u4e14\u03bb\u6f14\u7b97\u7684\u51fd\u6570\u53ef\u4ee5\u63a5\u53d7\u51fd\u6570\u5f53\u4f5c\u8f93\u5165\uff08\u53c2\u6570\uff09\u548c\u8f93\u51fa\uff08\u8fd4\u56de\u503c\uff09\u3002 \u548c\u6307\u4ee4\u5f0f\u7f16\u7a0b\u76f8\u6bd4\uff0c\u51fd\u6570\u5f0f\u7f16\u7a0b\u5f3a\u8c03\u51fd\u6570\u7684\u8ba1\u7b97\u6bd4\u6307\u4ee4\u7684\u6267\u884c\u91cd\u8981\u3002 \u548c\u8fc7\u7a0b\u5316\u7f16\u7a0b\u76f8\u6bd4\uff0c\u51fd\u6570\u5f0f\u7f16\u7a0b\u91cc\u51fd\u6570\u7684\u8ba1\u7b97\u53ef\u968f\u65f6\u8c03\u7528\u3002")),(0,a.kt)("p",null,"yak \u652f\u6301\u4e00\u5b9a\u7a0b\u5ea6\u7684\u51fd\u6570\u5f0f\u7f16\u7a0b\u8bed\u6cd5\u3002\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"Map/Filter/Reducer")," \u7b49\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\u8fd9\u4e9b\u64cd\u4f5c\u7684\u652f\u6301\u5e76\u4e0d\u662f\u96c6\u6210\u5728\u5168\u5c40\u51fd\u6570\u4e2d\uff0c\u800c\u662f\u7531\u4e00\u4e2a\u7279\u6b8a\u7684\u5305\u6765\u5f15\u5165\u7684\u3002"),(0,a.kt)("h2",{id:"xmap-\u57fa\u7840\u51fd\u6570\u5f0f\u7f16\u7a0b\uff1a\u6620\u5c04"},(0,a.kt)("inlineCode",{parentName:"h2"},"x.Map")," \u57fa\u7840\u51fd\u6570\u5f0f\u7f16\u7a0b\uff1a\u6620\u5c04"),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u9700\u8981\u5bf9\u4e00\u4e2a\u96c6\u5408\u8fdb\u884c\u53d8\u6362\uff0c\u5728 Python \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"for")," \u7684 inline \u8bed\u53e5\uff0c\u4f46\u662f\u5728 yak \u4e2d\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"x"),' \u6a21\u5757\u5e94\u7528\u51fd\u6570\u5f0f\u4e2d\u5e38\u7528\u7684 "Map" \u529f\u80fd\u3002'),(0,a.kt)("p",null,"\u4f8b\u5982\u6211\u4eec\u8981\u5bf9\u4e00\u4e2a\u6574\u6570\u5217\u8868\u5168\u4f53 +1 \u53ef\u6267\u884c\u5982\u4e0b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"dump(x.Map([1,2,3,4,5], func(i){return i+1}))\n")),(0,a.kt)("p",null,"\u6267\u884c\u7ed3\u679c\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"([]interface {}) (len=5 cap=8) {\n (int) 2,\n (int) 3,\n (int) 4,\n (int) 5,\n (int) 6\n}\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528-xmap-\u4ee3\u66ff\u666e\u901a\u7684-for-\u5faa\u73af\u6279\u5904\u7406"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h2"},"x.Map")," \u4ee3\u66ff\u666e\u901a\u7684 for \u5faa\u73af\u6279\u5904\u7406"),(0,a.kt)("p",null,"\u6211\u4eec\u9605\u8bfb\u4e00\u6bb5\u4ee3\u7801\uff0c\u4ed6\u7684\u610f\u601d\u662f\uff0c\u628a\u4e00\u4e2a\u6570\u7ec4\u96c6\u5408\u4e2d\u7684\u5185\u5bb9\u7ecf\u8fc7 MD5 \u8ba1\u7b97\uff0c\u83b7\u5f97\u4e00\u4e2a\u65b0\u7684\u6570\u7ec4"),(0,a.kt)("p",null,"\u4f20\u7edf\u7684\u5199\u6cd5\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'origin = [\n    "127.0.0.1:123",\n    "127.0.0.1:1231",\n    "127.0.0.1:1233",\n    "127.0.0.1:1234",\n    "127.0.0.1:1235",\n]\n\nafter = []\nfor _, i = range origin {\n    after = append(after, codec.Md5(i))\n}\ndump(after)\n')),(0,a.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u51fd\u6570\u5f0f\uff0c\u5c31\u4f1a\u975e\u5e38\u7b80\u5355"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'origin = [\n    "127.0.0.1:123",\n    "127.0.0.1:1231",\n    "127.0.0.1:1233",\n    "127.0.0.1:1234",\n    "127.0.0.1:1235",\n]\n\nafter2 = x.Map(origin, func(i){return codec.Md5(i)})  // \u51fd\u6570\u5f0f\u8c03\u7528\ndump(after2)\n')),(0,a.kt)("p",null,"\u5f53\u7136\uff0c\u8fd9\u4e24\u6bb5\u4ee3\u7801\u7684\u6267\u884c\u7ed3\u679c\u5b8c\u5168\u4e00\u81f4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'([]interface {}) (len=5 cap=8) {\n (string) (len=32) "9c6cd8a653b32a49024e548ee9d333c2",\n (string) (len=32) "57e14469d056f261d1e29e25187ad3c1",\n (string) (len=32) "8f72b71f93052f9b8659d3c4b5aecec3",\n (string) (len=32) "93454abf54cf365c703f8e3c695562bf",\n (string) (len=32) "9373bd92a6686d67baed2873188e7e68"\n}\n')),(0,a.kt)("h2",{id:"\u4f7f\u7528-xfilter-\u4ee3\u66ff-for-\u5faa\u73af\u7b5b\u9009"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h2"},"x.Filter")," \u4ee3\u66ff for \u5faa\u73af\u7b5b\u9009"),(0,a.kt)("p",null,"\u8fd8\u662f\u4e0a\u9762\u7684\u4ee3\u7801\uff0c\u6211\u4eec\u7a0d\u5fae\u5bf9\u5176\u8fdb\u884c\u4e00\u70b9\u53d8\u79cd\uff0c\u6211\u4eec\u8fc7\u6ee4\u51fa\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},":1233")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},":1234")," \u7ed3\u5c3e\u7684\u5b57\u7b26\u4e32"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'origin = [\n    "127.0.0.1:123",\n    "127.0.0.1:1231",\n    "127.0.0.1:1233",\n    "127.0.0.1:1234",\n    "127.0.0.1:1235",\n]\n\nafter = []\nfor _, line = range origin {\n    if str.MatchAnyOfGlob(line, "*:1233", "*:1234") {\n        after = append(after, line)\n    }\n}\ndump(after)\n')),(0,a.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"x.Filter")," \u53ef\u4ee5\u8d77\u5230\u5f88\u597d\u7684\u4f5c\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'after = x.Filter(origin, func(i){return str.MatchAnyOfGlob(i, "*:1233", "*:1234")})\ndump(after)\n')),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5f53\u7136 x.Map \u4e0e x.Filter \u662f\u5b8c\u5168\u53ef\u4ee5\u6df7\u7528\u7684\uff01"),(0,a.kt)("p",{parentName:"div"},"\u6211\u4eec\u53ef\u4ee5\u5148\u8fc7\u6ee4\uff0c\u518d\u8054\u5408\u8fdb\u884c\u989d\u5916\u5904\u7406\u4f8b\u5982"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},"x.Map(x.Filter([1,2,3,4,5], func(i){return i > 3}), func(i){return i + 10})\n")),(0,a.kt)("p",{parentName:"div"},"\u8ba1\u7b97\u7ed3\u679c\u5e94\u8be5\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"[14, 15]")))),(0,a.kt)("h2",{id:"\u4f7f\u7528-xfind-\u4ee3\u66ff-for-\u5faa\u73af\u5bfb\u627e\u5173\u952e\u5143\u7d20"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h2"},"x.Find")," \u4ee3\u66ff for \u5faa\u73af\u5bfb\u627e\u5173\u952e\u5143\u7d20"),(0,a.kt)("p",null,'\u6211\u4eec\u4fee\u6539\u4e0a\u9762\u7684\u4ee3\u7801\uff0c\u8ba9\u5b83\u53d8\u6210 "\u9047\u5230\u7b26\u5408\u8981\u6c42\u7684\u503c\u5c31\u8fd4\u56de" \u4ee5\u627e\u5230\u6211\u4eec\u60f3\u8981\u7684\u503c'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'origin = [\n    "127.0.0.1:123",\n    "127.0.0.1:1231",\n    "127.0.0.1:1233",\n    "127.0.0.1:1234",\n    "127.0.0.1:1235",\n]\n\nfindResult = func() {\n    for _, line = range origin {\n        if str.MatchAnyOfGlob(line, "*:1233", "*:1234") {\n            return line\n        }\n    }\n    return ""\n}\ndump(findResult())\n')),(0,a.kt)("p",null,"\u540c\u6837\u7684\uff0c\u6211\u4eec\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"x.Find")," \u4e2d\u53ef\u4ee5\u5f88\u8f7b\u6613\u5b9e\u73b0\u8fd9\u4e2a\u64cd\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'dump(x.Find(origin, func(i){return str.MatchAnyOfGlob(i, "*:1233", "*:1234")}))\n')),(0,a.kt)("p",null,"\u4e0a\u9762\u4e24\u6bb5\u4ee3\u7801\u7684\u6267\u884c\u7ed3\u679c\u90fd\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'(string) (len=14) "127.0.0.1:1233"\n')),(0,a.kt)("h2",{id:"\u7ecf\u5178\u6848\u4f8b\uff1axreducer-\u6c42\u5217\u8868\u548c"},"\u7ecf\u5178\u6848\u4f8b\uff1a",(0,a.kt)("inlineCode",{parentName:"h2"},"x.Reducer")," \u6c42\u5217\u8868\u548c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"result = x.Reduce([1,2,3,4,5,6,7,8], func(a,b){return a+b}, 0)\nprintln(result)  // 36\n")))}d.isMDXComponent=!0}}]);