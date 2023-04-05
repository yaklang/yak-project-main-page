"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[4810],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),f=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=f(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=f(r),s=a,m=p["".concat(c,".").concat(s)]||p[s]||d[s]||l;return r?t.createElement(m,o(o({ref:n},u),{},{components:r})):t.createElement(m,o({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var f=2;f<l;f++)o[f]=r[f];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},30697:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=r(87462),a=(r(67294),r(3905));const l={sidebar_position:24},o="24. \u6267\u884c\u987a\u5e8f\u63a7\u5236\uff1aDefer \u5ef6\u8fdf",i={unversionedId:"yak-basic/defer",id:"yak-basic/defer",isDocsHomePage:!1,title:"24. \u6267\u884c\u987a\u5e8f\u63a7\u5236\uff1aDefer \u5ef6\u8fdf",description:"yaklang\u652f\u6301defer\u5173\u952e\u5b57\uff0c\u548c\u5e38\u89c1\u7684defer\u5173\u952e\u5b57\u76f8\u540c\uff0c\u80fd\u591f\u5b9e\u73b0\u5728\u9000\u51fa\u4ee3\u7801\u5757\u7684\u65f6\u5019\u6267\u884c\u6307\u5b9a\u4ee3\u7801\u7684\u80fd\u529b\u3002",source:"@site/docs/yak-basic/24-defer.mdx",sourceDirName:"yak-basic",slug:"/yak-basic/defer",permalink:"/docs/yak-basic/defer",editUrl:"https://github.com/yaklang/docs/yak-basic/24-defer.mdx",tags:[],version:"current",sidebarPosition:24,frontMatter:{sidebar_position:24},sidebar:"tutorialSidebar",previous:{title:"23. \u5e76\u53d1\u63a7\u5236\uff1aGo \u5173\u952e\u5b57",permalink:"/docs/yak-basic/concurrent"},next:{title:"25. \u9519\u8bef\u4e0e\u5d29\u6e83\u5904\u7406",permalink:"/docs/yak-basic/errors"}},c=[{value:"\u53d8\u91cf\u53c2\u6570",id:"\u53d8\u91cf\u53c2\u6570",children:[]},{value:"defer\u4e0e\u8fd4\u56de\u503c",id:"defer\u4e0e\u8fd4\u56de\u503c",children:[]},{value:"defer\u7684\u6267\u884c\u987a\u5e8f",id:"defer\u7684\u6267\u884c\u987a\u5e8f",children:[]}],f={toc:c},u="wrapper";function p(e){let{components:n,...r}=e;return(0,a.kt)(u,(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"24-\u6267\u884c\u987a\u5e8f\u63a7\u5236defer-\u5ef6\u8fdf"},"24. \u6267\u884c\u987a\u5e8f\u63a7\u5236\uff1aDefer \u5ef6\u8fdf"),(0,a.kt)("p",null,"yaklang\u652f\u6301defer\u5173\u952e\u5b57\uff0c\u548c\u5e38\u89c1\u7684defer\u5173\u952e\u5b57\u76f8\u540c\uff0c\u80fd\u591f\u5b9e\u73b0\u5728\u9000\u51fa\u4ee3\u7801\u5757\u7684\u65f6\u5019\u6267\u884c\u6307\u5b9a\u4ee3\u7801\u7684\u80fd\u529b\u3002"),(0,a.kt)("p",null,"yaklang\u652f\u6301\u533f\u540d\u51fd\u6570\uff0c\u6240\u4ee5\u4e00\u4e2a\u5f88\u5e38\u89c1\u7684\u5199\u6cd5\u662f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"defer fn(){\n\n}()\n\ndefer fn{\n\n}\n")),(0,a.kt)("p",null,"\u5982\u679c\u8bfb\u8005\u6709go\u8bed\u8a00\u7684\u4f7f\u7528\u7ecf\u5386\uff0c\u90a3\u4e48\u5c31\u5f88\u5bb9\u6613\u4e0a\u624b\uff0c\u4e0d\u8fc7yaklang\u7684defer\u548cgo\u7684defer\u8fd8\u662f\u6709\u4e00\u5b9a\u7684\u533a\u522b\u3002"),(0,a.kt)("h2",{id:"\u53d8\u91cf\u53c2\u6570"},"\u53d8\u91cf\u53c2\u6570"),(0,a.kt)("p",null,"\u5728go\u91ccdefer\u91cc\u8981\u4f7f\u7528\u6307\u5b9a\u53d8\u91cf\uff0c\u53ef\u4ee5\u4f7f\u7528\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f20\u5165\u53c2\u6570\uff0c\u8fd9\u79cd\u65b9\u5f0fdefer\u5185\u90e8\u7684\u53d8\u91cf\u4e0d\u4f1a\u968f\u5916\u90e8\u7684\u53d8\u91cf\u53d8\u5316\u800c\u53d8\u5316")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"//go \u51fd\u6570\u4f20\u53c2\u6a21\u5f0f\nfunc dfp1() {\n   var a = 1\n   defer func(t int) {\n        fmt.Println(t)\n   }(a)\n   a = 2\n   return\n}\n\nfunc main() {\n    dfp1()\n}\n\n/*OUTPUT\n1\n*/\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u76f4\u63a5\u4f7f\u7528\u4ee3\u7801\u5757\u5185\u90e8\u7684\u53c2\u6570\uff0c\u8fd9\u79cd\u65b9\u5f0fdefer\u5185\u90e8\u7684\u53d8\u91cf\u4f1a\u968f\u5916\u90e8\u7684\u53d8\u91cf\u53d8\u5316\u800c\u53d8\u5316")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"//go \u76f4\u63a5\u4f7f\u7528\u4f5c\u7528\u57df\u5185\u7684\u53d8\u91cf\nfunc dfp2() {\n   var a = 1\n    defer func(){\n        fmt.Println(a)\n    }()\n   a = 2\n   return\n}\n\nfunc main() {\n    dfp2()\n}\n\n/*OUTPUT\n2\n*/\n")),(0,a.kt)("p",null,"\u800c\u5bf9\u4e8eyaklang\u6765\u8bf4\uff0c\u65e0\u8bba\u4f7f\u7528\u54ea\u4e00\u79cd\u65b9\u6cd5\uff0cdefer\u5185\u53d8\u91cf\u90fd\u4f1a\u968f\u7740\u5916\u90e8\u53d8\u91cf\u7684\u53d8\u5316\u800c\u53d8\u5316"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'f = 1\ndefer func{\n    println("\u51c6\u5907\u5f00\u59cb\u6267\u884c defer func")\n    println(1) // \u7b49\u5230\u6267\u884c\u8fd9\u91cc\u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u62a5\u9519\n}\nprintln("\u8bbe\u7f6e f \u53d8\u91cf\u4e3a\u7a7a")\nf = nil // \u5728\u8fd9\u91cc\u8bbe\u7f6e f \u4e3a\u7a7a\n\n\n/*OUTPUT\n\u8bbe\u7f6e f \u53d8\u91cf\u4e3a\u7a7a\n\u51c6\u5907\u5f00\u59cb\u6267\u884c defer func\n<nil>\n*/\n')),(0,a.kt)("h2",{id:"defer\u4e0e\u8fd4\u56de\u503c"},"defer\u4e0e\u8fd4\u56de\u503c"),(0,a.kt)("p",null,"\u5728go\u8bed\u8a00\u4e2d\uff0c\u5f53\u8fd4\u56de\u503c\u5728\u51fd\u6570\u5b9a\u4e49\u91cc\u5c31\u58f0\u660e\u4e86\u7684\u60c5\u51b5\u4e0b\uff0cdefer\u662f\u53ef\u4ee5\u4fee\u6539\u8fd4\u56de\u503c\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func test() (i int) {\n   i = 1\n   defer func() {\n      i++\n   }()\n   return i\n}\n\nfunc main() {\n   fmt.Println("return:", test())\n}\n/*OUTPUT\nreturn: 2\n*/\n')),(0,a.kt)("p",null,"\u800c\u5728yaklang\u4e2d\uff0c\u65e0\u8bba\u91c7\u7528\u4f55\u79cd\u65b9\u5f0f\uff0cdefer\u90fd\u4e0d\u4f1a\u5f71\u54cd\u5230\u8fd4\u56de\u503c\u3002"),(0,a.kt)("h2",{id:"defer\u7684\u6267\u884c\u987a\u5e8f"},"defer\u7684\u6267\u884c\u987a\u5e8f"),(0,a.kt)("p",null,'yaklang\u7684defer\u7684\u6267\u884c\u987a\u5e8f\u548cgo\u7684\u4e00\u81f4\uff0c\u91c7\u7528\u7684\u662f"\u5148\u8fdb\u540e\u51fa"\u7684\u6808\u7ed3\u6784'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"defer fn {\n    dump(2)\n}\n\ndefer fn(){\n    dump(1)\n}()\n\n/* OUTPUT:\n(int) 1\n(int) 2\n*/\n")))}p.isMDXComponent=!0}}]);