(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[3514],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=d(n),s=a,m=h["".concat(p,".").concat(s)]||h[s]||u[s]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[h]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},18772:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>l,toc:()=>p,default:()=>c});var r=n(22122),a=(n(67294),n(3905));const i={},o="[xpath] XPATH",l={unversionedId:"buildinlibs/lib_xpath",id:"buildinlibs/lib_xpath",isDocsHomePage:!1,title:"[xpath] XPATH",description:"xpath \u662f\u8865\u5168 yak \u5bf9 html \u5904\u7406\u80fd\u529b\u7684\u4e00\u4e2a\u73af\u8282\uff0c\u8fd9\u4e2a\u5185\u7f6e\u6a21\u5757\u672c\u8d28\u4e0a\u662f\u5bf9 htmlquery \u7684\u7cbe\u7b80\u4e0e\u518d\u5c01\u88c5\u3002",source:"@site/docs/buildinlibs/lib_xpath.md",sourceDirName:"buildinlibs",slug:"/buildinlibs/lib_xpath",permalink:"/en/docs/buildinlibs/lib_xpath",editUrl:"https://github.com/yaklang/docs/buildinlibs/lib_xpath.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"lib_nuclei",permalink:"/en/docs/buildinlibs/lib_nuclei"},next:{title:"\u8bed\u6cd5\u6269\u5c55\uff1a\u5168\u5c40\u51fd\u6570\u8868",permalink:"/en/docs/api/global_buildin_ops"}},p=[{value:"API",id:"api",children:[]},{value:"\u6848\u4f8b: \u4f7f\u7528 <code>xpath.Find</code> \u6765\u67e5\u8be2 HTML \u8282\u70b9",id:"find",children:[]}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"xpath-xpath"},"[xpath]"," XPATH"),(0,a.kt)("p",null,"xpath \u662f\u8865\u5168 yak \u5bf9 html \u5904\u7406\u80fd\u529b\u7684\u4e00\u4e2a\u73af\u8282\uff0c\u8fd9\u4e2a\u5185\u7f6e\u6a21\u5757\u672c\u8d28\u4e0a\u662f\u5bf9 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/antchfx/htmlquery"},"htmlquery \u7684\u7cbe\u7b80\u4e0e\u518d\u5c01\u88c5"),"\u3002"),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"fn xpath.CreateXPathNavigator(var_1: *html.Node): *htmlquery.NodeNavigator\nfn xpath.ExistedAttr(var_1: *html.Node, var_2: string): bool\nfn xpath.Find(var_1: *html.Node, var_2: string): []*html.Node\nfn xpath.FindOne(var_1: *html.Node, var_2: string): *html.Node\nfn xpath.InnerText(var_1: *html.Node): string\nfn xpath.LoadHTMLDocument(var_1: interface {}): (*html.Node, error)\nfn xpath.OutputHTML(var_1: *html.Node): string\nfn xpath.OutputHTMLSelf(var_1: *html.Node): string\nfn xpath.Query(var_1: *html.Node, var_2: string): (*html.Node, error)\nfn xpath.QueryAll(var_1: *html.Node, var_2: string): ([]*html.Node, error)\nfn xpath.SelectAttr(var_1: *html.Node, var_2: string): string\n")),(0,a.kt)("h2",{id:"find"},"\u6848\u4f8b: \u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"h2"},"xpath.Find")," \u6765\u67e5\u8be2 HTML \u8282\u70b9"),(0,a.kt)("p",null,"\u5728\u4f7f\u7528\u67e5\u8be2 API \u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"xpath.LoadHTMLDocument")," \u6765\u751f\u6210\u4e00\u4e2a HTML \u53ef\u64cd\u4f5c\u6587\u6863\uff0c\u7136\u540e\u628a\u6587\u6863\u7684\u5b9e\u4f8b\u4f20\u9012\u7ed9\u5176\u4ed6\u7684\u67e5\u8be2\u53c2\u6570\u83b7\u53d6\u5185\u5bb9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'doc, err := xpath.LoadHTMLDocument(`\n<!DOCTYPE html><html lang="en-US">\n<head>\n<title>Hello,World!</title>\n</head>\n<body>\n<div class="container">\n<header>\n    \x3c!-- Logo --\x3e\n   <h1>City Gallery</h1>\n</header>  \n<nav>\n  <ul>\n    <li><a href="/London">London</a></li>\n    <li><a href="/Paris">Paris</a></li>\n    <li><a href="/Tokyo">Tokyo</a></li>\n  </ul>\n</nav>\n<article>\n  <h1>London</h1>\n  <img src="pic_mountain.jpg" alt="Mountain View" style="width:304px;height:228px;">\n  <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>\n  <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>\n</article>\n<footer>Copyright &copy; W3Schools.com</footer>\n</div>\n</body>\n</html>\n`)\ndie(err)\n\nnodes := xpath.Find(doc, "//p")\nfor _, node := range nodes {\n    println(xpath.InnerText(node))\n}\n')))}c.isMDXComponent=!0}}]);