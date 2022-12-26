(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[4473],{3905:function(n,e,t){"use strict";t.d(e,{Zo:function(){return s},kt:function(){return d}});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var u=r.createContext({}),l=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},s=function(n){var e=l(n.components);return r.createElement(u.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,u=n.parentName,s=i(n,["components","mdxType","originalType","parentName"]),f=l(t),d=o,g=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return t?r.createElement(g,c(c({ref:e},s),{},{components:t})):r.createElement(g,c({ref:e},s))}));function d(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=n,i.mdxType="string"==typeof n?n:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},98446:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=t(74034),o=t(79973),a=(t(67294),t(3905)),c={sidebar_position:23},i="23. \u5e76\u53d1\u63a7\u5236\uff1aGo \u5173\u952e\u5b57",u={unversionedId:"yak-basic/concurrent",id:"yak-basic/concurrent",isDocsHomePage:!1,title:"23. \u5e76\u53d1\u63a7\u5236\uff1aGo \u5173\u952e\u5b57",description:"Goroutine \u662f Golang \u6700\u5f3a\u5927\u7684\u7279\u6027\u4e4b\u4e00\uff0cYak \u5b8c\u7f8e\u7ee7\u627f\u4e86\u8fd9\u4e00\u7279\u6027\u3002",source:"@site/docs/yak-basic/23-concurrent.mdx",sourceDirName:"yak-basic",slug:"/yak-basic/concurrent",permalink:"/docs/yak-basic/concurrent",editUrl:"https://github.com/yaklang/docs/yak-basic/23-concurrent.mdx",tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_position:23},sidebar:"tutorialSidebar",previous:{title:"22. \u51fd\u6570\uff1a\u51fd\u6570\u8c03\u7528\u4e0e\u8fd4\u56de\u503c",permalink:"/docs/yak-basic/function-calling"},next:{title:"24. \u6267\u884c\u987a\u5e8f\u63a7\u5236\uff1aDefer \u5ef6\u8fdf",permalink:"/docs/yak-basic/defer"}},l=[{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",children:[]},{value:"\u5e76\u53d1\u63a7\u5236",id:"\u5e76\u53d1\u63a7\u5236",children:[]}],s={toc:l};function p(n){var e=n.components,t=(0,o.Z)(n,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"23-\u5e76\u53d1\u63a7\u5236\uff1ago-\u5173\u952e\u5b57"},"23. \u5e76\u53d1\u63a7\u5236\uff1aGo \u5173\u952e\u5b57"),(0,a.kt)("p",null,"Goroutine \u662f Golang \u6700\u5f3a\u5927\u7684\u7279\u6027\u4e4b\u4e00\uff0cYak \u5b8c\u7f8e\u7ee7\u627f\u4e86\u8fd9\u4e00\u7279\u6027\u3002"),(0,a.kt)("p",null,"Yak \u811a\u672c\u4e0e Golang \u7684 Go \u7684\u4f5c\u7528\u90fd\u662f\u76f8\u540c\u7684\uff0c\u4f46\u662f\u9700\u8981\u6ce8\u610f\u4e00\u70b9\u7684\u662f\uff0cgo \u5173\u952e\u5b57\u53ef\u4ee5\u7528\u6765\u8c03\u7528 yak \u7684\u95ed\u5305\u51fd\u6570"),(0,a.kt)("h2",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,a.kt)("p",null,"\u5728 Golang \u4e2d\uff0c\u6211\u4eec\u542f\u52a8\u4e00\u4e2a Goroutine \u901a\u8fc7\u4ee5\u4e0b\u64cd\u4f5c\u542f\u52a8"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"go func(){\n    // ...do some codes\n}()\n")),(0,a.kt)("p",null,"\u5728 yak \u4e2d\uff0c\u6211\u4eec\u4e0d\u4ec5\u517c\u5bb9\u4e86\u4e0a\u8ff0\u5199\u6cd5\uff0c\u6211\u4eec\u6267\u884c\u5982\u4e0b\u547d\u4ee4\uff0c\u90fd\u662f\u7b49\u6548\u7684"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"//  goroutine \u542f\u52a8\u6765\u51fd\u6570\u5f02\u6b65\u8c03\u7528\ngo func(){\n    /* do sth */\n}() // \u517c\u5bb9 Go \u7684\u5199\u6cd5\n\ngo fn(){\n    /* do sth */\n}() // \u4e5f\u53ef\u4ee5\u4f7f\u7528fn\u5173\u952e\u5b57\u4ee3\u66fffunc\u5173\u952e\u5b57\n\ngo def(){\n    /* do sth */\n}()  // \u517c\u5bb9 Python \u5b9a\u4e49\u65b9\u6cd5\u7684\u5173\u952e\u5b57\n\n// \u5b9a\u4e49\u65e0\u53c2\u95ed\u5305\u51fd\u6570\u5e76\u7acb\u5373\u6267\u884c Goroutine\ngo fn{\n    /* do sth */\n}\n\ngo func{\n    /* do sth */\n}\n\ngo def{\n    /* do sth */\n}\n")),(0,a.kt)("h2",{id:"\u5e76\u53d1\u63a7\u5236"},"\u5e76\u53d1\u63a7\u5236"),(0,a.kt)("p",null,"yaklang\u53ef\u4ee5\u975e\u5e38\u81ea\u7136\u7684\u4f7f\u7528\u4f7f\u7528go\u7684waitGroup\uff0c\u6765\u5b8c\u6210\u534f\u7a0b\u7684\u5e76\u53d1\u63a7\u5236\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'wg = sync.NewWaitGroup()\nwg.Add(2)\n\ngo func {\n    defer wg.Done()\n    println("in goroutine1")\n}\n\ngo func {\n    defer wg.Done()\n    println("in goroutine2")\n}\n\nwg.Wait()\n')))}p.isMDXComponent=!0}}]);