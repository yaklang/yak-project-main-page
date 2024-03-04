"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[4403],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>f});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function y(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),d=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},o=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=y(e,["components","mdxType","originalType","parentName"]),m=d(a),o=n,f=m["".concat(i,".").concat(o)]||m[o]||N[o]||l;return a?r.createElement(f,g(g({ref:t},p),{},{components:a})):r.createElement(f,g({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,g=new Array(l);g[0]=o;var y={};for(var i in t)hasOwnProperty.call(t,i)&&(y[i]=t[i]);y.originalType=e,y[m]="string"==typeof e?e:n,g[1]=y;for(var d=2;d<l;d++)g[d]=a[d];return r.createElement.apply(null,g)}return r.createElement.apply(null,a)}o.displayName="MDXCreateElement"},45693:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>g,default:()=>m,frontMatter:()=>l,metadata:()=>y,toc:()=>i});var r=a(58168),n=(a(96540),a(15680));const l={},g="io",y={unversionedId:"api/io",id:"api/io",isDocsHomePage:!1,title:"io",description:"|\u6210\u5458\u51fd\u6570|\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd|",source:"@site/docs/api/io.md",sourceDirName:"api",slug:"/api/io",permalink:"/docs/api/io",editUrl:"https://github.com/yaklang/docs/api/io.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"iiop",permalink:"/docs/api/iiop"},next:{title:"ja3",permalink:"/docs/api/ja3"}},i=[{value:"\u51fd\u6570\u5b9a\u4e49",id:"\u51fd\u6570\u5b9a\u4e49",children:[{value:"Copy",id:"copy",children:[]},{value:"CopyN",id:"copyn",children:[]},{value:"LimitReader",id:"limitreader",children:[]},{value:"MultiReader",id:"multireader",children:[]},{value:"NopCloser",id:"nopcloser",children:[]},{value:"Pipe",id:"pipe",children:[]},{value:"ReadAll",id:"readall",children:[]},{value:"ReadEvery1s",id:"readevery1s",children:[]},{value:"ReadFile",id:"readfile",children:[]},{value:"ReadStable",id:"readstable",children:[]},{value:"TeeReader",id:"teereader",children:[]},{value:"WriteString",id:"writestring",children:[]}]}],d={toc:i},p="wrapper";function m(e){let{components:t,...a}=e;return(0,n.yg)(p,(0,r.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"io"},"io"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u6210\u5458\u51fd\u6570"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#copy"},"io.Copy")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Copy \u5c06 reader \u4e2d\u7684\u6570\u636e\u62f7\u8d1d\u5230 writer \u4e2d\uff0c\u76f4\u5230\u8bfb\u53d6\u5230 EOF \u6216\u8005\u53d1\u751f\u9519\u8bef\uff0c\u8fd4\u56de\u62f7\u8d1d\u7684\u5b57\u8282\u6570\u548c\u9519\u8bef")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#copyn"},"io.CopyN")),(0,n.yg)("td",{parentName:"tr",align:"left"},"CopyN \u5c06 reader \u4e2d\u7684\u6570\u636e\u62f7\u8d1d\u5230 writer \u4e2d\uff0c\u76f4\u5230\u8bfb\u53d6\u5230 EOF \u6216\u8005\u62f7\u8d1d\u4e86 n \u4e2a\u5b57\u8282\uff0c\u8fd4\u56de\u62f7\u8d1d\u7684\u5b57\u8282\u6570\u548c\u9519\u8bef")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#limitreader"},"io.LimitReader")),(0,n.yg)("td",{parentName:"tr",align:"left"},"LimitReader \u8fd4\u56de\u4e00\u4e2a Reader\uff0c\u8be5 Reader \u4ece r \u4e2d\u8bfb\u53d6\u5b57\u8282\uff0c\u4f46\u5728\u8bfb\u53d6 n \u4e2a\u5b57\u8282\u540e\u5c31\u4f1a\u8fd4\u56de EOF")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#multireader"},"io.MultiReader")),(0,n.yg)("td",{parentName:"tr",align:"left"},"MultiReader \u8fd4\u56de\u4e00\u4e2a Reader\uff0c\u8be5 Reader \u4ece\u591a\u4e2a Reader \u4e2d\u8bfb\u53d6\u6570\u636e")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#nopcloser"},"io.NopCloser")),(0,n.yg)("td",{parentName:"tr",align:"left"},"NopCloser \u8fd4\u56de\u4e00\u4e2a ReadCloser\uff0c\u8be5 ReadCloser \u4ece r \u4e2d\u8bfb\u53d6\u6570\u636e\uff0c\u5e76\u5b9e\u73b0\u4e86\u4e00\u4e2a\u7a7a\u7684 Close \u65b9\u6cd5")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#pipe"},"io.Pipe")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Pipe \u521b\u5efa\u4e00\u4e2a\u7ba1\u9053\uff0c\u8fd4\u56de\u4e00\u4e2a\u8bfb\u53d6\u7aef\u548c\u4e00\u4e2a\u5199\u5165\u7aef\u4ee5\u53ca\u9519\u8bef")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#readall"},"io.ReadAll")),(0,n.yg)("td",{parentName:"tr",align:"left"},"ReadAll \u8bfb\u53d6 Reader \u4e2d\u7684\u6240\u6709\u5b57\u8282\uff0c\u8fd4\u56de\u8bfb\u53d6\u5230\u7684\u6570\u636e\u548c\u9519\u8bef")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#readevery1s"},"io.ReadEvery1s")),(0,n.yg)("td",{parentName:"tr",align:"left"},"ReadEvery1s \u6bcf\u79d2\u8bfb\u53d6 Reader \u4e00\u6b21\uff0c\u76f4\u5230\u8bfb\u53d6\u5230 EOF \u6216\u8005\u56de\u8c03\u51fd\u6570\u8fd4\u56de false")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#readfile"},"io.ReadFile")),(0,n.yg)("td",{parentName:"tr",align:"left"},"ReadFile \u8bfb\u53d6\u6307\u5b9a\u6587\u4ef6\u4e2d\u7684\u6240\u6709\u5185\u5bb9\uff0c\u8fd4\u56de\u8bfb\u53d6\u5230\u7684\u6570\u636e\u548c\u9519\u8bef")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#readstable"},"io.ReadStable")),(0,n.yg)("td",{parentName:"tr",align:"left"},"ReadStable \u4ece reader \u4e2d\u7a33\u5b9a\u5730\u8bfb\u53d6\u6570\u636e\uff0c\u76f4\u5230\u8bfb\u53d6\u5230 EOF \u6216\u8005\u8d85\u65f6\uff0c\u8fd4\u56de\u8bfb\u53d6\u5230\u7684\u6570\u636e")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#teereader"},"io.TeeReader")),(0,n.yg)("td",{parentName:"tr",align:"left"},"TeeReader \u8fd4\u56de\u4e00\u4e2a Reader\uff0c\u8be5 Reader \u4ece r \u4e2d\u8bfb\u53d6\u5b57\u8282\uff0c\u5e76\u5c06\u8bfb\u53d6\u5230\u7684\u5b57\u8282\u5199\u5165 w \u4e2d  \u8be5 Reader \u901a\u5e38\u7528\u4e8e\u4fdd\u5b58\u5df2\u7ecf\u8bfb\u53d6\u7684\u6570\u636e\u526f\u672c")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#writestring"},"io.WriteString")),(0,n.yg)("td",{parentName:"tr",align:"left"},"WriteString \u5c06\u5b57\u7b26\u4e32 s \u5199\u5165 writer \u4e2d\uff0c\u8fd4\u56de\u5199\u5165\u7684\u5b57\u8282\u6570\u548c\u9519\u8bef")))),(0,n.yg)("h2",{id:"\u51fd\u6570\u5b9a\u4e49"},"\u51fd\u6570\u5b9a\u4e49"),(0,n.yg)("h3",{id:"copy"},"Copy"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("p",null,"Copy \u5c06 reader \u4e2d\u7684\u6570\u636e\u62f7\u8d1d\u5230 writer \u4e2d\uff0c\u76f4\u5230\u8bfb\u53d6\u5230 EOF \u6216\u8005\u53d1\u751f\u9519\u8bef\uff0c\u8fd4\u56de\u62f7\u8d1d\u7684\u5b57\u8282\u6570\u548c\u9519\u8bef"),(0,n.yg)("p",null,"Example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"n, err = io.Copy(writer, reader)\n")),(0,n.yg)("h4",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"Copy(writer io.Writer, reader io.Reader) (written int64, err error)")),(0,n.yg)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"writer"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"io.Writer")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"reader"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"io.Reader")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"written"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"int64")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"err"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"error")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"copyn"},"CopyN"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-1"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("p",null,"CopyN \u5c06 reader \u4e2d\u7684\u6570\u636e\u62f7\u8d1d\u5230 writer \u4e2d\uff0c\u76f4\u5230\u8bfb\u53d6\u5230 EOF \u6216\u8005\u62f7\u8d1d\u4e86 n \u4e2a\u5b57\u8282\uff0c\u8fd4\u56de\u62f7\u8d1d\u7684\u5b57\u8282\u6570\u548c\u9519\u8bef"),(0,n.yg)("p",null,"Example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"n, err = io.CopyN(writer, reader, 1024)\n")),(0,n.yg)("h4",{id:"\u5b9a\u4e49-1"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"CopyN(writer io.Writer, reader io.Reader, n int64) (written int64, err error)")),(0,n.yg)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"writer"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"io.Writer")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"reader"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"io.Reader")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"n"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"int64")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"written"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"int64")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"err"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"error")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"limitreader"},"LimitReader"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-2"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("p",null,"LimitReader \u8fd4\u56de\u4e00\u4e2a Reader\uff0c\u8be5 Reader \u4ece r \u4e2d\u8bfb\u53d6\u5b57\u8282\uff0c\u4f46\u5728\u8bfb\u53d6 n \u4e2a\u5b57\u8282\u540e\u5c31\u4f1a\u8fd4\u56de EOF"),(0,n.yg)("p",null,"Example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"lr = io.LimitReader(reader, 1024)\n")),(0,n.yg)("h4",{id:"\u5b9a\u4e49-2"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"LimitReader(r io.Reader, n int64) io.Reader")),(0,n.yg)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"io.Reader")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"n"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"int64")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c-2"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"io.Reader")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"multireader"},"MultiReader"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-3"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("p",null,"MultiReader \u8fd4\u56de\u4e00\u4e2a Reader\uff0c\u8be5 Reader \u4ece\u591a\u4e2a Reader \u4e2d\u8bfb\u53d6\u6570\u636e"),(0,n.yg)("p",null,"Example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"mr = io.MultiReader(reader1, reader2) // \u8bfb\u53d6 mr \u5373\u6309\u7167\u987a\u5e8f\u8bfb\u53d6 reader1 \u548c reader2 \u4e2d\u7684\u6570\u636e\nio.ReadAll(mr)\n")),(0,n.yg)("h4",{id:"\u5b9a\u4e49-3"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"MultiReader(readers ...io.Reader) io.Reader")),(0,n.yg)("h4",{id:"\u53c2\u6570-3"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"readers"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"...io.Reader")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c-3"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"io.Reader")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"nopcloser"},"NopCloser"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-4"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("p",null,"NopCloser \u8fd4\u56de\u4e00\u4e2a ReadCloser\uff0c\u8be5 ReadCloser \u4ece r \u4e2d\u8bfb\u53d6\u6570\u636e\uff0c\u5e76\u5b9e\u73b0\u4e86\u4e00\u4e2a\u7a7a\u7684 Close \u65b9\u6cd5"),(0,n.yg)("p",null,"Example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"r = io.NopCloser(reader)\nr.Close() // \u4ec0\u4e48\u90fd\u4e0d\u505a\n")),(0,n.yg)("h4",{id:"\u5b9a\u4e49-4"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"NopCloser(r io.Reader) io.ReadCloser")),(0,n.yg)("h4",{id:"\u53c2\u6570-4"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"io.Reader")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c-4"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"io.ReadCloser")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"pipe"},"Pipe"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-5"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("p",null,"Pipe \u521b\u5efa\u4e00\u4e2a\u7ba1\u9053\uff0c\u8fd4\u56de\u4e00\u4e2a\u8bfb\u53d6\u7aef\u548c\u4e00\u4e2a\u5199\u5165\u7aef\u4ee5\u53ca\u9519\u8bef"),(0,n.yg)("p",null,"Example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'r, w, err = os.Pipe()\ndie(err)\n\n    go func {\n        w.WriteString("hello yak")\n        w.Close()\n    }\n\nbytes, err = io.ReadAll(r)\ndie(err)\ndump(bytes)\n')),(0,n.yg)("h4",{id:"\u5b9a\u4e49-5"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"Pipe() (r *os.File, w *os.File, err error)")),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c-5"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"*os.File")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"w"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"*os.File")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"err"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"error")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"readall"},"ReadAll"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-6"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("p",null,"ReadAll \u8bfb\u53d6 Reader \u4e2d\u7684\u6240\u6709\u5b57\u8282\uff0c\u8fd4\u56de\u8bfb\u53d6\u5230\u7684\u6570\u636e\u548c\u9519\u8bef"),(0,n.yg)("p",null,"Example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"data, err = ioutil.ReadAll(reader)\n")),(0,n.yg)("h4",{id:"\u5b9a\u4e49-6"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"ReadAll(r io.Reader) ([]byte, error)")),(0,n.yg)("h4",{id:"\u53c2\u6570-5"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"io.Reader")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c-6"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"[]byte")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r2"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"error")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"readevery1s"},"ReadEvery1s"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-7"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("p",null,"ReadEvery1s \u6bcf\u79d2\u8bfb\u53d6 Reader \u4e00\u6b21\uff0c\u76f4\u5230\u8bfb\u53d6\u5230 EOF \u6216\u8005\u56de\u8c03\u51fd\u6570\u8fd4\u56de false"),(0,n.yg)("p",null,"Example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'r, w, err = io.Pipe() // \u521b\u5efa\u4e00\u4e2a\u7ba1\u9053\uff0c\u8fd4\u56de\u4e00\u4e2a\u8bfb\u53d6\u7aef\u548c\u4e00\u4e2a\u5199\u5165\u7aef\u4ee5\u53ca\u9519\u8bef\ndie(err)\ngo func{\nfor {\nw.WriteString("hello yak\\n")\ntime.Sleep(1)\n}\n}\nio.ReadEvery1s(context.New(), r, func(data) {\nprintln(string(data))\nreturn true\n})\n')),(0,n.yg)("h4",{id:"\u5b9a\u4e49-7"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"ReadEvery1s(c context.Context, reader io.Reader, f func([]byte) bool)")),(0,n.yg)("h4",{id:"\u53c2\u6570-6"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"c"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"context.Context")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"reader"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"io.Reader")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"f"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"func([]byte) bool")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"readfile"},"ReadFile"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-8"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("p",null,"ReadFile \u8bfb\u53d6\u6307\u5b9a\u6587\u4ef6\u4e2d\u7684\u6240\u6709\u5185\u5bb9\uff0c\u8fd4\u56de\u8bfb\u53d6\u5230\u7684\u6570\u636e\u548c\u9519\u8bef"),(0,n.yg)("p",null,"Example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'// \u5047\u8bbe\u5b58\u5728\u6587\u4ef6 /tmp/test.txt\uff0c\u5185\u5bb9\u4e3a "hello yak"\ndata, err = ioutil.ReadFile("/tmp/test.txt") // data = b"hello yak", err = nil\n')),(0,n.yg)("h4",{id:"\u5b9a\u4e49-8"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"ReadFile(path string) ([]byte, error)")),(0,n.yg)("h4",{id:"\u53c2\u6570-7"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"path"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c-7"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"[]byte")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r2"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"error")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"readstable"},"ReadStable"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-9"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("p",null,"ReadStable \u4ece reader \u4e2d\u7a33\u5b9a\u5730\u8bfb\u53d6\u6570\u636e\uff0c\u76f4\u5230\u8bfb\u53d6\u5230 EOF \u6216\u8005\u8d85\u65f6\uff0c\u8fd4\u56de\u8bfb\u53d6\u5230\u7684\u6570\u636e"),(0,n.yg)("p",null,"Example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"data = io.ReadStable(reader, 60)\n")),(0,n.yg)("h4",{id:"\u5b9a\u4e49-9"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"ReadStable(reader io.Reader, float float64) []byte")),(0,n.yg)("h4",{id:"\u53c2\u6570-8"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"reader"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"io.Reader")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"float"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"float64")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c-8"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"[]byte")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"teereader"},"TeeReader"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-10"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("p",null,"TeeReader \u8fd4\u56de\u4e00\u4e2a Reader\uff0c\u8be5 Reader \u4ece r \u4e2d\u8bfb\u53d6\u5b57\u8282\uff0c\u5e76\u5c06\u8bfb\u53d6\u5230\u7684\u5b57\u8282\u5199\u5165 w \u4e2d"),(0,n.yg)("p",null,"\u8be5 Reader \u901a\u5e38\u7528\u4e8e\u4fdd\u5b58\u5df2\u7ecf\u8bfb\u53d6\u7684\u6570\u636e\u526f\u672c"),(0,n.yg)("p",null,"Example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"tr = io.TeeReader(reader, buf)\nio.ReadAll(tr)\n// \u73b0\u5728 buf \u4e2d\u4e5f\u4fdd\u5b58\u4e86 reader \u4e2d\u7684\u8bfb\u5230\u7684\u6240\u6709\u6570\u636e\n")),(0,n.yg)("h4",{id:"\u5b9a\u4e49-10"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"TeeReader(r io.Reader, w io.Writer) io.Reader")),(0,n.yg)("h4",{id:"\u53c2\u6570-9"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"io.Reader")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"w"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"io.Writer")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c-9"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"io.Reader")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"writestring"},"WriteString"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-11"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("p",null,"WriteString \u5c06\u5b57\u7b26\u4e32 s \u5199\u5165 writer \u4e2d\uff0c\u8fd4\u56de\u5199\u5165\u7684\u5b57\u8282\u6570\u548c\u9519\u8bef"),(0,n.yg)("p",null,"Example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'n, err = io.WriteString(writer, "hello yak")\n')),(0,n.yg)("h4",{id:"\u5b9a\u4e49-11"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"WriteString(writer io.Writer, s string) (n int, err error)")),(0,n.yg)("h4",{id:"\u53c2\u6570-10"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"writer"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"io.Writer")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"s"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c-10"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"n"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"int")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"err"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"error")),(0,n.yg)("td",{parentName:"tr",align:"left"})))))}m.isMDXComponent=!0}}]);