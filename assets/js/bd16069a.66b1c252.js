(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[4269],{3905:(t,e,a)=>{"use strict";a.d(e,{Zo:()=>m,kt:()=>y});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),k=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=k(t.components);return n.createElement(d.Provider,{value:e},t.children)},o="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),o=k(a),c=r,y=o["".concat(d,".").concat(c)]||o[c]||N[c]||l;return a?n.createElement(y,i(i({ref:e},m),{},{components:a})):n.createElement(y,i({ref:e},m))}));function y(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[o]="string"==typeof t?t:r,i[1]=p;for(var k=2;k<l;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},88992:(t,e,a)=>{"use strict";a.r(e),a.d(e,{frontMatter:()=>l,contentTitle:()=>i,metadata:()=>p,toc:()=>d,default:()=>m});var n=a(22122),r=(a(67294),a(3905));const l={},i="sync",p={unversionedId:"api/sync",id:"api/sync",isDocsHomePage:!1,title:"sync",description:"|\u6210\u5458\u51fd\u6570|\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd|",source:"@site/docs/api/sync.md",sourceDirName:"api",slug:"/api/sync",permalink:"/docs/api/sync",editUrl:"https://github.com/yaklang/docs/api/sync.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"suricata",permalink:"/docs/api/suricata"},next:{title:"synscan",permalink:"/docs/api/synscan"}},d=[{value:"\u51fd\u6570\u5b9a\u4e49",id:"\u51fd\u6570\u5b9a\u4e49",children:[{value:"sync.NewCond",id:"syncnewcond",children:[]},{value:"sync.NewLock",id:"syncnewlock",children:[]},{value:"sync.NewMap",id:"syncnewmap",children:[]},{value:"sync.NewMutex",id:"syncnewmutex",children:[]},{value:"sync.NewOnce",id:"syncnewonce",children:[]},{value:"sync.NewPool",id:"syncnewpool",children:[]},{value:"sync.NewRWMutex",id:"syncnewrwmutex",children:[]},{value:"sync.NewSizedWaitGroup",id:"syncnewsizedwaitgroup",children:[]},{value:"sync.NewWaitGroup",id:"syncnewwaitgroup",children:[]}]}],k={toc:d};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sync"},"sync"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u6210\u5458\u51fd\u6570"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#syncnewcond"},"sync.NewCond")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#syncnewlock"},"sync.NewLock")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#syncnewmap"},"sync.NewMap")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#syncnewmutex"},"sync.NewMutex")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#syncnewonce"},"sync.NewOnce")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#syncnewpool"},"sync.NewPool")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#syncnewrwmutex"},"sync.NewRWMutex")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#syncnewsizedwaitgroup"},"sync.NewSizedWaitGroup")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#syncnewwaitgroup"},"sync.NewWaitGroup")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h2",{id:"\u51fd\u6570\u5b9a\u4e49"},"\u51fd\u6570\u5b9a\u4e49"),(0,r.kt)("h3",{id:"syncnewcond"},"sync.NewCond"),(0,r.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.kt)("h4",{id:"\u5b9a\u4e49\uff1a"},"\u5b9a\u4e49\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NewCond() *sync.Cond")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"*sync.Cond")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"syncnewlock"},"sync.NewLock"),(0,r.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-1"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.kt)("h4",{id:"\u5b9a\u4e49\uff1a-1"},"\u5b9a\u4e49\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NewLock() *sync.Mutex")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"*sync.Mutex")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"syncnewmap"},"sync.NewMap"),(0,r.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-2"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.kt)("h4",{id:"\u5b9a\u4e49\uff1a-2"},"\u5b9a\u4e49\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NewMap() *sync.Map")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c-2"},"\u8fd4\u56de\u503c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"*sync.Map")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"syncnewmutex"},"sync.NewMutex"),(0,r.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-3"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.kt)("h4",{id:"\u5b9a\u4e49\uff1a-3"},"\u5b9a\u4e49\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NewMutex() *sync.Mutex")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c-3"},"\u8fd4\u56de\u503c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"*sync.Mutex")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"syncnewonce"},"sync.NewOnce"),(0,r.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-4"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.kt)("h4",{id:"\u5b9a\u4e49\uff1a-4"},"\u5b9a\u4e49\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NewOnce() *sync.Once")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c-4"},"\u8fd4\u56de\u503c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"*sync.Once")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"syncnewpool"},"sync.NewPool"),(0,r.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-5"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.kt)("h4",{id:"\u5b9a\u4e49\uff1a-5"},"\u5b9a\u4e49\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NewPool() *sync.Pool")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c-5"},"\u8fd4\u56de\u503c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"*sync.Pool")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"syncnewrwmutex"},"sync.NewRWMutex"),(0,r.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-6"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.kt)("h4",{id:"\u5b9a\u4e49\uff1a-6"},"\u5b9a\u4e49\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NewRWMutex() *sync.RWMutex")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c-6"},"\u8fd4\u56de\u503c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"*sync.RWMutex")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"syncnewsizedwaitgroup"},"sync.NewSizedWaitGroup"),(0,r.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-7"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.kt)("h4",{id:"\u5b9a\u4e49\uff1a-7"},"\u5b9a\u4e49\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NewSizedWaitGroup(int) *utils.SizedWaitGroup")),(0,r.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"v1"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c-7"},"\u8fd4\u56de\u503c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"*utils.SizedWaitGroup")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"syncnewwaitgroup"},"sync.NewWaitGroup"),(0,r.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-8"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.kt)("h4",{id:"\u5b9a\u4e49\uff1a-8"},"\u5b9a\u4e49\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NewWaitGroup() *sync.WaitGroup")),(0,r.kt)("h4",{id:"\u8fd4\u56de\u503c-8"},"\u8fd4\u56de\u503c"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"*sync.WaitGroup")),(0,r.kt)("td",{parentName:"tr",align:"left"})))))}m.isMDXComponent=!0}}]);