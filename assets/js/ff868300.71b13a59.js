"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[3034],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>f});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var y=a.createContext({}),i=function(e){var t=a.useContext(y),r=t;return e&&(r="function"==typeof e?e(t):g(g({},t),e)),r},d=function(e){var t=i(e.components);return a.createElement(y.Provider,{value:t},e.children)},m="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,y=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=i(r),N=n,f=m["".concat(y,".").concat(N)]||m[N]||o[N]||l;return r?a.createElement(f,g(g({ref:t},d),{},{components:r})):a.createElement(f,g({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,g=new Array(l);g[0]=N;var p={};for(var y in t)hasOwnProperty.call(t,y)&&(p[y]=t[y]);p.originalType=e,p[m]="string"==typeof e?e:n,g[1]=p;for(var i=2;i<l;i++)g[i]=r[i];return a.createElement.apply(null,g)}return a.createElement.apply(null,r)}N.displayName="MDXCreateElement"},46882:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>g,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>y});var a=r(58168),n=(r(96540),r(15680));const l={},g="httpserver",p={unversionedId:"api/httpserver",id:"api/httpserver",isDocsHomePage:!1,title:"httpserver",description:"|\u6210\u5458\u51fd\u6570|\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd|",source:"@site/docs/api/httpserver.md",sourceDirName:"api",slug:"/api/httpserver",permalink:"/docs/api/httpserver",editUrl:"https://github.com/yaklang/docs/api/httpserver.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"httpool",permalink:"/docs/api/httpool"},next:{title:"iiop",permalink:"/docs/api/iiop"}},y=[{value:"\u51fd\u6570\u5b9a\u4e49",id:"\u51fd\u6570\u5b9a\u4e49",children:[{value:"LocalFileSystemServe",id:"localfilesystemserve",children:[]},{value:"Serve",id:"serve",children:[]},{value:"context",id:"context",children:[]},{value:"handler",id:"handler",children:[]},{value:"tlsCertAndKey",id:"tlscertandkey",children:[]}]}],i={toc:y},d="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(d,(0,a.A)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"httpserver"},"httpserver"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u6210\u5458\u51fd\u6570"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#localfilesystemserve"},"httpserver.LocalFileSystemServe")),(0,n.yg)("td",{parentName:"tr",align:"left"},"LocalFileSystemServe \u6839\u636e\u7ed9\u5b9a\u7684 host \u548c port \u542f\u52a8\u4e00\u4e2a http \u670d\u52a1\u7528\u4e8e\u8bbf\u95ee\u672c\u5730\u6587\u4ef6\u7cfb\u7edf  \u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u76d1\u542c\u4e3b\u673a\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u76d1\u542c\u7aef\u53e3\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570\u4e3a\u8bbf\u95ee\u8def\u5f84\u524d\u7f00\uff0c\u7b2c\u56db\u4e2a\u53c2\u6570\u4e3a\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u8def\u5f84\uff0c\u63a5\u4e0b\u6765\u53ef\u4ee5\u63a5\u6536\u96f6\u4e2a\u5230\u591a\u4e2a\u9009\u9879\u51fd\u6570\uff0c\u7528\u4e8e\u8bbe\u7f6e\u4e0a\u4e0b\u6587\uff0c\u56de\u8c03\u51fd\u6570\u7b49")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#serve"},"httpserver.Serve")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Serve \u6839\u636e\u7ed9\u5b9a\u7684 host \u548c port \u542f\u52a8\u4e00\u4e2a http \u670d\u52a1\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u76d1\u542c\u4e3b\u673a\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u76d1\u542c\u7aef\u53e3\uff0c\u63a5\u4e0b\u6765\u53ef\u4ee5\u63a5\u6536\u96f6\u4e2a\u5230\u591a\u4e2a\u9009\u9879\u51fd\u6570\uff0c\u7528\u4e8e\u8bbe\u7f6e\u4e0a\u4e0b\u6587\uff0c\u56de\u8c03\u51fd\u6570\u7b49")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#context"},"httpserver.context")),(0,n.yg)("td",{parentName:"tr",align:"left"},"context \u7528\u4e8e\u8bbe\u7f6e HTTP \u670d\u52a1\u5668\u7684\u4e0a\u4e0b\u6587")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#handler"},"httpserver.handler")),(0,n.yg)("td",{parentName:"tr",align:"left"},"handler \u7528\u4e8e\u8bbe\u7f6e HTTP \u670d\u52a1\u5668\u7684\u56de\u8c03\u51fd\u6570\uff0c\u6b64\u51fd\u6570\u4f1a\u5728\u6bcf\u6b21\u6536\u5230\u8bf7\u6c42\u65f6\u88ab\u8c03\u7528  \u6b64\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u54cd\u5e94\u56de\u590d\u8005\u7ed3\u6784\u4f53\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a \u8bf7\u6c42\u7ed3\u6784\u4f53\uff0c\u4f60\u53ef\u4ee5\u8c03\u7528\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e2d\u7684\u65b9\u6cd5\u6765\u8bbe\u7f6e\u54cd\u5e94\u5934\uff0c\u54cd\u5e94\u4f53\u7b49")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#tlscertandkey"},"httpserver.tlsCertAndKey")),(0,n.yg)("td",{parentName:"tr",align:"left"},"tlsCertAndKey \u7528\u4e8e\u8bbe\u7f6e HTTP\u670d\u52a1\u5668\u7684 TLS \u8bc1\u4e66\u548c\u5bc6\u94a5\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u8bc1\u4e66\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u5bc6\u94a5\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570\u4e3a\u53ef\u9009\u7684 CA \u8bc1\u4e66  \u4e00\u822c\u914d\u5408tls\u6807\u51c6\u5e93\u4f7f\u7528")))),(0,n.yg)("h2",{id:"\u51fd\u6570\u5b9a\u4e49"},"\u51fd\u6570\u5b9a\u4e49"),(0,n.yg)("h3",{id:"localfilesystemserve"},"LocalFileSystemServe"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("p",null,"LocalFileSystemServe \u6839\u636e\u7ed9\u5b9a\u7684 host \u548c port \u542f\u52a8\u4e00\u4e2a http \u670d\u52a1\u7528\u4e8e\u8bbf\u95ee\u672c\u5730\u6587\u4ef6\u7cfb\u7edf"),(0,n.yg)("p",null,"\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u76d1\u542c\u4e3b\u673a\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u76d1\u542c\u7aef\u53e3\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570\u4e3a\u8bbf\u95ee\u8def\u5f84\u524d\u7f00\uff0c\u7b2c\u56db\u4e2a\u53c2\u6570\u4e3a\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u8def\u5f84\uff0c\u63a5\u4e0b\u6765\u53ef\u4ee5\u63a5\u6536\u96f6\u4e2a\u5230\u591a\u4e2a\u9009\u9879\u51fd\u6570\uff0c\u7528\u4e8e\u8bbe\u7f6e\u4e0a\u4e0b\u6587\uff0c\u56de\u8c03\u51fd\u6570\u7b49"),(0,n.yg)("p",null,"Example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'err = httpserver.LocalFileSystemServe("127.0.0.1", 8888, "/static", "/var/www/static")\n')),(0,n.yg)("h4",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"LocalFileSystemServe(host string, port int, prefix string, localPath string, opts ...HttpServerConfigOpt) error")),(0,n.yg)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"host"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"port"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"int")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"prefix"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"localPath"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"opts"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"...HttpServerConfigOpt")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"error")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"serve"},"Serve"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-1"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("p",null,"Serve \u6839\u636e\u7ed9\u5b9a\u7684 host \u548c port \u542f\u52a8\u4e00\u4e2a http \u670d\u52a1\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u76d1\u542c\u4e3b\u673a\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u76d1\u542c\u7aef\u53e3\uff0c\u63a5\u4e0b\u6765\u53ef\u4ee5\u63a5\u6536\u96f6\u4e2a\u5230\u591a\u4e2a\u9009\u9879\u51fd\u6570\uff0c\u7528\u4e8e\u8bbe\u7f6e\u4e0a\u4e0b\u6587\uff0c\u56de\u8c03\u51fd\u6570\u7b49"),(0,n.yg)("p",null,"Example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'err = httpserver.Serve("127.0.0.1", 8888, httpserver.handler(func(rspWriter, req) { rspWriter.Write("Hello world") }))\n')),(0,n.yg)("h4",{id:"\u5b9a\u4e49-1"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"Serve(host string, port int, opts ...HttpServerConfigOpt) error")),(0,n.yg)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"host"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"string")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"port"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"int")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"opts"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"...HttpServerConfigOpt")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"error")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"context"},"context"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-2"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("p",null,"context \u7528\u4e8e\u8bbe\u7f6e HTTP \u670d\u52a1\u5668\u7684\u4e0a\u4e0b\u6587"),(0,n.yg)("p",null,"Example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'ctx = context.New()\nerr = httpserver.Serve("127.0.0.1", httpserver, http.context(ctx))\n')),(0,n.yg)("h4",{id:"\u5b9a\u4e49-2"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"context(ctx context.Context) HttpServerConfigOpt")),(0,n.yg)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"ctx"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"context.Context")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c-2"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"HttpServerConfigOpt")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"handler"},"handler"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-3"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("p",null,"handler \u7528\u4e8e\u8bbe\u7f6e HTTP \u670d\u52a1\u5668\u7684\u56de\u8c03\u51fd\u6570\uff0c\u6b64\u51fd\u6570\u4f1a\u5728\u6bcf\u6b21\u6536\u5230\u8bf7\u6c42\u65f6\u88ab\u8c03\u7528"),(0,n.yg)("p",null,"\u6b64\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u54cd\u5e94\u56de\u590d\u8005\u7ed3\u6784\u4f53\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a \u8bf7\u6c42\u7ed3\u6784\u4f53\uff0c\u4f60\u53ef\u4ee5\u8c03\u7528\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e2d\u7684\u65b9\u6cd5\u6765\u8bbe\u7f6e\u54cd\u5e94\u5934\uff0c\u54cd\u5e94\u4f53\u7b49"),(0,n.yg)("p",null,"Example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'err = httpserver.Serve("127.0.0.1", 8888, httpserver.handler(func(rspWriter, req) { rspWriter.Write("Hello world") }))\n')),(0,n.yg)("h4",{id:"\u5b9a\u4e49-3"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"handler(cb func(rsp http.ResponseWriter, req *http.Request)) HttpServerConfigOpt")),(0,n.yg)("h4",{id:"\u53c2\u6570-3"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"cb"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"func(rsp http.ResponseWriter, req *http.Request)")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c-3"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"HttpServerConfigOpt")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"tlscertandkey"},"tlsCertAndKey"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-4"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("p",null,"tlsCertAndKey \u7528\u4e8e\u8bbe\u7f6e HTTP\u670d\u52a1\u5668\u7684 TLS \u8bc1\u4e66\u548c\u5bc6\u94a5\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u8bc1\u4e66\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u5bc6\u94a5\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570\u4e3a\u53ef\u9009\u7684 CA \u8bc1\u4e66"),(0,n.yg)("p",null,"\u4e00\u822c\u914d\u5408tls\u6807\u51c6\u5e93\u4f7f\u7528"),(0,n.yg)("p",null,"Example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'ca, key, err = tls.GenerateRootCA("yaklang.io")\ncert, sKey, err = tls.SignServerCertAndKey(ca, key)\nerr = httpserver.Serve("127.0.0.1", 8888, httpserver.tlsCertAndKey(cert, sKey))\n')),(0,n.yg)("h4",{id:"\u5b9a\u4e49-4"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"tlsCertAndKey(crt any, key any, cas ...any) HttpServerConfigOpt")),(0,n.yg)("h4",{id:"\u53c2\u6570-4"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"crt"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"any")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"key"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"any")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"cas"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"...any")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c-4"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"HttpServerConfigOpt")),(0,n.yg)("td",{parentName:"tr",align:"left"})))))}m.isMDXComponent=!0}}]);