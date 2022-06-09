(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[566],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return d},kt:function(){return g}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),m=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=m(t.components);return r.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),f=m(a),g=n,c=f["".concat(o,".").concat(g)]||f[g]||k[g]||i;return a?r.createElement(c,l(l({ref:e},d),{},{components:a})):r.createElement(c,l({ref:e},d))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=f;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,l[1]=p;for(var m=2;m<i;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},57975:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return m},default:function(){return k}});var r=a(74034),n=a(79973),i=(a(67294),a(3905)),l={},p="gzip",o={unversionedId:"api/gzip",id:"api/gzip",isDocsHomePage:!1,title:"gzip",description:"|\u6210\u5458\u51fd\u6570|\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd|",source:"@site/docs/api/gzip.md",sourceDirName:"api",slug:"/api/gzip",permalink:"/en/docs/api/gzip",editUrl:"https://github.com/yaklang/docs/api/gzip.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"fuzz",permalink:"/en/docs/api/fuzz"},next:{title:"hook",permalink:"/en/docs/api/hook"}},m=[{value:"\u51fd\u6570\u5b9a\u4e49",id:"\u51fd\u6570\u5b9a\u4e49",children:[{value:"gzip.Compress",id:"gzipcompress",children:[]},{value:"gzip.Decompress",id:"gzipdecompress",children:[]},{value:"gzip.IsGzip",id:"gzipisgzip",children:[]}]}],d={toc:m};function k(t){var e=t.components,a=(0,n.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gzip"},"gzip"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u6210\u5458\u51fd\u6570"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#gzipcompress"},"gzip.Compress")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u628a\u4e00\u4e2a\u6570\u636e\u8fdb\u884c gzip \u538b\u7f29")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#gzipdecompress"},"gzip.Decompress")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u89e3\u538b\u7f29")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#gzipisgzip"},"gzip.IsGzip")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h2",{id:"\u51fd\u6570\u5b9a\u4e49"},"\u51fd\u6570\u5b9a\u4e49"),(0,i.kt)("h3",{id:"gzipcompress"},"gzip.Compress"),(0,i.kt)("p",null,"\u628a\u4e00\u4e2a\u6570\u636e\u8fdb\u884c gzip \u538b\u7f29"),(0,i.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,i.kt)("h4",{id:"\u5b9a\u4e49\uff1a"},"\u5b9a\u4e49\uff1a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"func gzip.Compress(v1: any) return (r0: bytes, r1: error)")),(0,i.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"v1"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bytes")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"r1"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"error")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"gzipdecompress"},"gzip.Decompress"),(0,i.kt)("p",null,"\u89e3\u538b\u7f29"),(0,i.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-1"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,i.kt)("h4",{id:"\u5b9a\u4e49\uff1a-1"},"\u5b9a\u4e49\uff1a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"func gzip.Decompress(v1: bytes) return (r0: bytes, r1: error)")),(0,i.kt)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"v1"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bytes")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bytes")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"r1"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"error")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"gzipisgzip"},"gzip.IsGzip"),(0,i.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-2"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,i.kt)("h4",{id:"\u5b9a\u4e49\uff1a-2"},"\u5b9a\u4e49\uff1a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"func gzip.IsGzip(v1: bytes) return (r0: bool)")),(0,i.kt)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"v1"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bytes")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h4",{id:"\u8fd4\u56de\u503c-2"},"\u8fd4\u56de\u503c"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bool")),(0,i.kt)("td",{parentName:"tr",align:"left"})))))}k.isMDXComponent=!0}}]);