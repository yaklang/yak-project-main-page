(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[1453],{3905:(t,e,n)=>{"use strict";n.d(e,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},k="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=m(n),f=r,c=k["".concat(p,".").concat(f)]||k[f]||s[f]||l;return n?a.createElement(c,i(i({ref:e},d),{},{components:n})):a.createElement(c,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[k]="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},15379:(t,e,n)=>{"use strict";n.r(e),n.d(e,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>o,toc:()=>p,default:()=>d});var a=n(22122),r=(n(67294),n(3905));const l={sidebar_position:2},i="2. Yaklang \u4e2d\u7684\u8bed\u53e5",o={unversionedId:"yak-basic/statements",id:"yak-basic/statements",isDocsHomePage:!1,title:"2. Yaklang \u4e2d\u7684\u8bed\u53e5",description:"\u8981\u4e86\u89e3\u4e00\u4e2a Yaklang \u7684\u57fa\u7840\u7a0b\u5e8f\uff0c\u6211\u4eec\u53ef\u4ee5\u4ece\u57fa\u7840\u7ed3\u6784\u5f00\u59cb\u4e86\u89e3\uff1a",source:"@site/docs/yak-basic/2-statements.mdx",sourceDirName:"yak-basic",slug:"/yak-basic/statements",permalink:"/en/docs/yak-basic/statements",editUrl:"https://github.com/yaklang/docs/yak-basic/2-statements.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. Yaklang \u8bed\u8a00\u7b80\u4ecb",permalink:"/en/docs/yak-basic/intro"},next:{title:"3. Yaklang \u4e2d\u7684\u7c7b\u578b\u548c\u53d8\u91cf",permalink:"/en/docs/yak-basic/type-and-vars"}},p=[{value:"\u8bed\u8a00\u6784\u5efa eBNF \u8303\u5f0f\uff08\u8282\u9009\uff09",id:"\u8bed\u8a00\u6784\u5efa-ebnf-\u8303\u5f0f\uff08\u8282\u9009\uff09",children:[]}],m={toc:p};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2-yaklang-\u4e2d\u7684\u8bed\u53e5"},"2. Yaklang \u4e2d\u7684\u8bed\u53e5"),(0,r.kt)("p",null,"\u8981\u4e86\u89e3\u4e00\u4e2a Yaklang \u7684\u57fa\u7840\u7a0b\u5e8f\uff0c\u6211\u4eec\u53ef\u4ee5\u4ece\u57fa\u7840\u7ed3\u6784\u5f00\u59cb\u4e86\u89e3\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6807\u51c6\u7684 Yaklang \u811a\u672c\u6216\u7a0b\u5e8f\uff0c\u4ed6\u7684\u6587\u4ef6\u5e94\u8be5\u662f\u4ee5 .yak \u7ed3\u5c3e\u7684\uff08\u6211\u4eec\u4e4b\u540e\u7b80\u79f0 Yaklang \u4e3a Yak\uff09\uff1b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Yak \u4ee3\u7801\u5206\u4e3a\u81f3\u5c11\u4e00\u4e2a\u8bed\u53e5\uff0c\u6700\u57fa\u7840\u7684\u8bed\u53e5\u4e4b\u95f4\u53ef\u4ee5\u901a\u8fc7 ; \u5206\u5272\uff0c\u4f46\u662f\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u6362\u884c\uff08\\n\uff09\u6765\u5206\u5272\u8bed\u53e5\uff1b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Yak \u7684\u8bed\u53e5\u5206\u4e3a 13 \u79cd\u5927\u7c7b\u578b\uff0c\u5206\u522b\u4e3a\uff1a"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8bed\u53e5\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u76ee\u7684"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u6848\u4f8b\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6ce8\u91ca\u8bed\u53e5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u63d0\u4f9b\u6309\u884c\u7684\u6ce8\u91ca\u6216\u6574\u5757\u513f\u6ce8\u91ca"),(0,r.kt)("td",{parentName:"tr",align:"left"},"# \u53f7\u6ce8\u91ca ",(0,r.kt)("inlineCode",{parentName:"td"},"# Comment")," ",(0,r.kt)("br",null)," \u666e\u901a\u6ce8\u91ca ",(0,r.kt)("inlineCode",{parentName:"td"},"// Comment")," ",(0,r.kt)("br",null)," \u591a\u884c\u6ce8\u91ca ",(0,r.kt)("inlineCode",{parentName:"td"},"/* Hello YakComment */"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u53d8\u91cf\u58f0\u660e\u8bed\u53e5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u81ea\u52a8\u6216\u5f3a\u5236\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u53d8\u91cf\uff0c\u8fd9\u4e2a\u53d8\u91cf\u4f1a\u5bf9\u5e94 YakVM \u7f16\u8bd1\u4e2d\u7684\u4e00\u4e2a\u65b0\u7b26\u53f7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Golang \u98ce\u683c ",(0,r.kt)("inlineCode",{parentName:"td"},"var abc = 123")," ",(0,r.kt)("br",null)," \u5f3a\u5236\u521b\u5efa\u53d8\u91cf abc := 123 ",(0,r.kt)("br",null)," \u81ea\u52a8\u521b\u5efa abc = 123")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8868\u8fbe\u5f0f\u8bed\u53e5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6267\u884c\u4e00\u4e2a\u8868\u8fbe\u5f0f\uff0c\u4f8b\u5982\u51fd\u6570\u8c03\u7528\uff0c\u6570\u503c\u8fd0\u7b97\uff0c\u5b57\u7b26\u4e32\u8fd0\u7b97\u7b49"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1+1")," ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},'"abc".HasPrefix("ab")'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8d4b\u503c\u8868\u8fbe\u5f0f\u8fd0\u7b97"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8d4b\u503c+\u8868\u8fbe\u5f0f\u7684\u7b80\u6613\u5199\u6cd5"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"a += 1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4ee3\u7801\u5757"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4e3b\u52a8\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5b9a\u4e49\u57df\uff0c\u6267\u884c\u82e5\u5e72\u884c\u8bed\u53e5"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"a=1; {a++; a += 12}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"IF \u63a7\u5236\u6d41"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"td"},"if / elif / else if / else")," \u98ce\u683c\u7684 IF \u8bed\u53e5\u7f16\u5199"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'if a>1 {println("Hello V1ll4n")}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Switch \u63a7\u5236\u6d41"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301 Case \u591a\u503c\u77ed\u8def\u7279\u6027\u7684 Switch \u8bed\u53e5\uff0c\u4e0e ",(0,r.kt)("inlineCode",{parentName:"td"},"break / fallthrough")," \u914d\u5957"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'switch a {case 1,2,3: println("Hello")}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"FOR IN \u5faa\u73af\u8bed\u53e5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Python \u98ce\u683c\u7684 For IN \u8bed\u53e5\u6280\u672f\u5b9e\u73b0"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"for a in [1,2,3] {println(a)}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"FOR RANGE \u5faa\u73af\u8bed\u53e5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Golang \u98ce\u683c\u7684 For Range \u8bed\u53e5\u6280\u672f\u5b9e\u73b0"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"for _, a = range [1,2,3] {println(a)}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"FOR \u5faa\u73af\u63a7\u5236"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7ecf\u5178\u7684 C \u98ce\u683c\u4e09\u8bed\u53e5 FOR \u5faa\u73af"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"for i = 1; i < 10; i ++ {println(i)}")," ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},'for {println("\u65e0\u9650\u5faa\u73af")}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Defer \u5ef6\u8fdf\u6267\u884c\u8bed\u53e5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Golang \u98ce\u683c\u7684\u5728\u51fd\u6570\u6216\u6267\u884c\u4f53\u7ed3\u5c3e\u6267\u884c\u7684\u8bed\u53e5\u5757\u513f\u6216\u8005\u51fd\u6570\u8c03\u7528"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'defer func{ if recover() != nil { println("Catched") }}'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Go \u5e76\u53d1\u8bed\u53e5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Golang \u98ce\u683c\u7684\u5e76\u53d1\u8bed\u53e5"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"go server.Start()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ASSERT \u65ad\u8a00\u8bed\u53e5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u4ee5\u5feb\u901f\u68c0\u67e5\u7a0b\u5e8f\u4e2d\u662f\u5426\u6709\u5931\u8d25\u7684\u95ee\u9898\uff0c\u5b9a\u4e49\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"assert <expr>, expr1")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'assert 1+1 == 2, "\u8ba1\u7b97\u5931\u8d25"'))))),(0,r.kt)("h2",{id:"\u8bed\u8a00\u6784\u5efa-ebnf-\u8303\u5f0f\uff08\u8282\u9009\uff09"},"\u8bed\u8a00\u6784\u5efa eBNF \u8303\u5f0f\uff08\u8282\u9009\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ebnf"},"program: ws* statementList;\n\nstatementList: (statement(';'? | EOS? | ws*) )+;\n\n// \u8bed\u53e5\u7684\u6784\u6210\u4e5f\u5e76\u4e0d\u590d\u6742\nstatement\n    // \u57fa\u672c\u8bed\u53e5\n    : lineCommentStmt\n\n    // \u58f0\u660e\u53d8\u91cf\u7684\u4f18\u5148\u7ea7\u6bd4\u8868\u8fbe\u5f0f\u9ad8\uff0c\u8fd9\u4e2a\u89c4\u5219\u5339\u914d\u5e94\u8be5\u662f var a,d,b,c \u53ea\u80fd\u652f\u6301 Var\uff0c\u7279\u6b8a\u8bed\u6cd5\n    | declearVariableExpressionStmt\n\n    // var(...) \u6216\u8005 var \u5355\u72ec\u4f7f\u7528\uff0c\u4f5c\u4e3a\u7c7b\u578b\uff0cexpression \u662f\u53f3\u503c\n    | expressionStmt\n    | assignExpressionStmt\n    | block eos\n\n    | empty\n\n    // \u6d41\u7a0b\u63a7\u5236\n    | ifStmt /* if expr {} elif {} */\n    | switchStmt\n    | forRangeStmt\n    | forStmt\n    | breakStmt eos\n    | returnStmt eos\n    | continueStmt eos\n    | fallthroughStmt eos\n    | includeStmt\n    | deferStmt\n    | goStmt\n    | assertStmt\n    ;\n")))}d.isMDXComponent=!0}}]);