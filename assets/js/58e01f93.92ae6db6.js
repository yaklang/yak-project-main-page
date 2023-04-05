"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[4473],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(t),f=o,g=s["".concat(l,".").concat(f)]||s[f]||d[f]||a;return t?r.createElement(g,c(c({ref:n},p),{},{components:t})):r.createElement(g,c({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[s]="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},98446:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>c,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const a={sidebar_position:23},c="23. \u5e76\u53d1\u63a7\u5236\uff1aGo \u5173\u952e\u5b57",i={unversionedId:"yak-basic/concurrent",id:"yak-basic/concurrent",isDocsHomePage:!1,title:"23. \u5e76\u53d1\u63a7\u5236\uff1aGo \u5173\u952e\u5b57",description:"Goroutine \u662f Golang \u6700\u5f3a\u5927\u7684\u7279\u6027\u4e4b\u4e00\uff0cYak \u5b8c\u7f8e\u7ee7\u627f\u4e86\u8fd9\u4e00\u7279\u6027\u3002",source:"@site/docs/yak-basic/23-concurrent.mdx",sourceDirName:"yak-basic",slug:"/yak-basic/concurrent",permalink:"/docs/yak-basic/concurrent",editUrl:"https://github.com/yaklang/docs/yak-basic/23-concurrent.mdx",tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_position:23},sidebar:"tutorialSidebar",previous:{title:"22. \u51fd\u6570\uff1a\u51fd\u6570\u8c03\u7528\u4e0e\u8fd4\u56de\u503c",permalink:"/docs/yak-basic/function-calling"},next:{title:"24. \u6267\u884c\u987a\u5e8f\u63a7\u5236\uff1aDefer \u5ef6\u8fdf",permalink:"/docs/yak-basic/defer"}},l=[{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",children:[]},{value:"\u5e76\u53d1\u63a7\u5236",id:"\u5e76\u53d1\u63a7\u5236",children:[]}],u={toc:l},p="wrapper";function s(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"23-\u5e76\u53d1\u63a7\u5236go-\u5173\u952e\u5b57"},"23. \u5e76\u53d1\u63a7\u5236\uff1aGo \u5173\u952e\u5b57"),(0,o.kt)("p",null,"Goroutine \u662f Golang \u6700\u5f3a\u5927\u7684\u7279\u6027\u4e4b\u4e00\uff0cYak \u5b8c\u7f8e\u7ee7\u627f\u4e86\u8fd9\u4e00\u7279\u6027\u3002"),(0,o.kt)("p",null,"Yak \u811a\u672c\u4e0e Golang \u7684 Go \u7684\u4f5c\u7528\u90fd\u662f\u76f8\u540c\u7684\uff0c\u4f46\u662f\u9700\u8981\u6ce8\u610f\u4e00\u70b9\u7684\u662f\uff0cgo \u5173\u952e\u5b57\u53ef\u4ee5\u7528\u6765\u8c03\u7528 yak \u7684\u95ed\u5305\u51fd\u6570"),(0,o.kt)("h2",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,o.kt)("p",null,"\u5728 Golang \u4e2d\uff0c\u6211\u4eec\u542f\u52a8\u4e00\u4e2a Goroutine \u901a\u8fc7\u4ee5\u4e0b\u64cd\u4f5c\u542f\u52a8"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"go func(){\n    // ...do some codes\n}()\n")),(0,o.kt)("p",null,"\u5728 yak \u4e2d\uff0c\u6211\u4eec\u4e0d\u4ec5\u517c\u5bb9\u4e86\u4e0a\u8ff0\u5199\u6cd5\uff0c\u6211\u4eec\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff0c\u90fd\u662f\u7b49\u6548\u7684"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"//  goroutine \u542f\u52a8\u6765\u51fd\u6570\u5f02\u6b65\u8c03\u7528\ngo func(){\n    /* do sth */\n}() // \u517c\u5bb9 Go \u7684\u5199\u6cd5\n\ngo fn(){\n    /* do sth */\n}() // \u4e5f\u53ef\u4ee5\u4f7f\u7528fn\u5173\u952e\u5b57\u4ee3\u66fffunc\u5173\u952e\u5b57\n\ngo def(){\n    /* do sth */\n}()  // \u517c\u5bb9 Python \u5b9a\u4e49\u65b9\u6cd5\u7684\u5173\u952e\u5b57\n\n// \u5b9a\u4e49\u65e0\u53c2\u95ed\u5305\u51fd\u6570\u5e76\u7acb\u5373\u6267\u884c Goroutine\ngo fn{\n    /* do sth */\n}\n\ngo func{\n    /* do sth */\n}\n\ngo def{\n    /* do sth */\n}\n")),(0,o.kt)("h2",{id:"\u5e76\u53d1\u63a7\u5236"},"\u5e76\u53d1\u63a7\u5236"),(0,o.kt)("p",null,"yaklang\u53ef\u4ee5\u975e\u5e38\u81ea\u7136\u7684\u4f7f\u7528\u4f7f\u7528go\u7684waitGroup\uff0c\u6765\u5b8c\u6210\u534f\u7a0b\u7684\u5e76\u53d1\u63a7\u5236\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'wg = sync.NewWaitGroup()\nwg.Add(2)\n\ngo func {\n    defer wg.Done()\n    println("in goroutine1")\n}\n\ngo func {\n    defer wg.Done()\n    println("in goroutine2")\n}\n\nwg.Wait()\n')))}s.isMDXComponent=!0}}]);