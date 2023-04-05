"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[4306],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(h,i(i({ref:n},s),{},{components:t})):r.createElement(h,i({ref:n},s))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},94979:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={sidebar_position:119},i="HTML \u5904\u7406\uff1aXPATH \u6848\u4f8b",l={unversionedId:"yakexamples/xpath",id:"yakexamples/xpath",isDocsHomePage:!1,title:"HTML \u5904\u7406\uff1aXPATH \u6848\u4f8b",description:"\u5f53\u7136\u5728\u5904\u7406 HTML \u7684\u65f6\u5019\uff0c\u6b63\u5219\u5f88\u591a\u65f6\u5019\u662f\u591f\u7528\u7684\uff0c\u4f46\u662f\u603b\u6709\u5e76\u4e0d\u90a3\u4e48\u597d\u5199\u7684\u63d0\u53d6\u6570\u636e\u7684\u6b63\u5219\u3002",source:"@site/docs/yakexamples/xpath.mdx",sourceDirName:"yakexamples",slug:"/yakexamples/xpath",permalink:"/en/docs/yakexamples/xpath",editUrl:"https://github.com/yaklang/docs/yakexamples/xpath.mdx",tags:[],version:"current",sidebarPosition:119,frontMatter:{sidebar_position:119},sidebar:"tutorialSidebar",previous:{title:"\u7c7b\u6bd4 Python \u4e2d\u7684 dir \u51fd\u6570",permalink:"/en/docs/yakexamples/vs-dir-in-py"},next:{title:"\u6f0f\u6d1e\u68c0\u6d4b\uff1aDNSLog",permalink:"/en/docs/yakexamples/risk"}},p=[{value:"\u5f53\u7136 <code>htmlquery</code> \u88ab\u5b8c\u5168\u517c\u5bb9",id:"\u5f53\u7136-htmlquery-\u88ab\u5b8c\u5168\u517c\u5bb9",children:[]}],c={toc:p},s="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"html-\u5904\u7406xpath-\u6848\u4f8b"},"HTML \u5904\u7406\uff1aXPATH \u6848\u4f8b"),(0,o.kt)("p",null,"\u5f53\u7136\u5728\u5904\u7406 HTML \u7684\u65f6\u5019\uff0c\u6b63\u5219\u5f88\u591a\u65f6\u5019\u662f\u591f\u7528\u7684\uff0c\u4f46\u662f\u603b\u6709\u5e76\u4e0d\u90a3\u4e48\u597d\u5199\u7684\u63d0\u53d6\u6570\u636e\u7684\u6b63\u5219\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u5904\u7406\u8fd9\u79cd\u60c5\u51b5\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 yak \u4e2d\u4f7f\u7528 xpath \u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'doc, err := xpath.LoadHTMLDocument(`\n<!DOCTYPE html><html lang="en-US">\n<head>\n<title>Hello,World!</title>\n</head>\n<body>\n<div class="container">\n<header>\n    \x3c!-- Logo --\x3e\n   <h1>City Gallery</h1>\n</header>\n<nav>\n  <ul>\n    <li><a href="/London">London</a></li>\n    <li><a href="/Paris">Paris</a></li>\n    <li><a href="/Tokyo">Tokyo</a></li>\n  </ul>\n</nav>\n<article>\n  <h1>London</h1>\n  <img src="pic_mountain.jpg" alt="Mountain View" style="width:304px;height:228px;">\n  <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>\n  <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>\n</article>\n<footer>Copyright &copy; W3Schools.com</footer>\n</div>\n</body>\n</html>\n`)\ndie(err)\n\n// \u5bfb\u627e p \u6807\u7b7e\u7684\u5185\u5bb9\nnodes := xpath.Find(doc, "//p")\nfor _, node := range nodes {\n    // \u6253\u5370\u6587\u672c\n    println(xpath.InnerText(node))\n}\n\n\n// \u5bfb\u627e li \u6807\u7b7e(\u7b2c\u4e00\u4e2a)\nnodes := xpath.Query(doc, "//li")\nfor _, node := range nodes {\n    // \u6253\u5370\u6587\u672c\n    println(xpath.OutputHTML(node))            // <a href="/London">London</a>\n    println(xpath.OutputHTMLSelf(node))        // <li><a href="/London">London</a></li>\n}\n')),(0,o.kt)("h2",{id:"\u5f53\u7136-htmlquery-\u88ab\u5b8c\u5168\u517c\u5bb9"},"\u5f53\u7136 ",(0,o.kt)("inlineCode",{parentName:"h2"},"htmlquery")," \u88ab\u5b8c\u5168\u517c\u5bb9"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/antchfx/htmlquery"},"XPATH \u539f\u59cb\u5e93 - htmlquery \u66f4\u8be6\u7ec6\u6848\u4f8b")))}d.isMDXComponent=!0}}]);