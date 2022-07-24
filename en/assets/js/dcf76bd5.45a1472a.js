(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[2621],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return m},kt:function(){return N}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),k=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=k(t.components);return r.createElement(p.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),f=k(a),N=n,s=f["".concat(p,".").concat(N)]||f[N]||o[N]||i;return a?r.createElement(s,l(l({ref:e},m),{},{components:a})):r.createElement(s,l({ref:e},m))}));function N(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=f;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:n,l[1]=d;for(var k=2;k<i;k++)l[k]=a[k];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},84248:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return k},default:function(){return o}});var r=a(74034),n=a(79973),i=(a(67294),a(3905)),l={},d="redis",p={unversionedId:"api/redis",id:"api/redis",isDocsHomePage:!1,title:"redis",description:"|\u6210\u5458\u51fd\u6570|\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd|",source:"@site/docs/api/redis.md",sourceDirName:"api",slug:"/api/redis",permalink:"/en/docs/api/redis",editUrl:"https://github.com/yaklang/docs/api/redis.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"re",permalink:"/en/docs/api/re"},next:{title:"report",permalink:"/en/docs/api/report"}},k=[{value:"\u51fd\u6570\u5b9a\u4e49",id:"\u51fd\u6570\u5b9a\u4e49",children:[{value:"redis.New",id:"redisnew",children:[]},{value:"redis.addr",id:"redisaddr",children:[]},{value:"redis.host",id:"redishost",children:[]},{value:"redis.password",id:"redispassword",children:[]},{value:"redis.port",id:"redisport",children:[]},{value:"redis.retry",id:"redisretry",children:[]},{value:"redis.timeoutSeconds",id:"redistimeoutseconds",children:[]},{value:"redis.username",id:"redisusername",children:[]}]}],m={toc:k};function o(t){var e=t.components,a=(0,n.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"redis"},"redis"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u6210\u5458\u51fd\u6570"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#redisnew"},"redis.New")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u542f\u52a8\u4e00\u4e2a Redis \u5ba2\u6237\u7aef")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#redisaddr"},"redis.addr")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e Redis \u5730\u5740")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#redishost"},"redis.host")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#redispassword"},"redis.password")),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e Redis \u5bc6\u7801")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#redisport"},"redis.port")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#redisretry"},"redis.retry")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#redistimeoutseconds"},"redis.timeoutSeconds")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"#redisusername"},"redis.username")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h2",{id:"\u51fd\u6570\u5b9a\u4e49"},"\u51fd\u6570\u5b9a\u4e49"),(0,i.kt)("h3",{id:"redisnew"},"redis.New"),(0,i.kt)("p",null,"\u542f\u52a8\u4e00\u4e2a Redis \u5ba2\u6237\u7aef"),(0,i.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,i.kt)("h4",{id:"\u5b9a\u4e49\uff1a"},"\u5b9a\u4e49\uff1a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"func redis.New(v1 ...yaklib.redisConfigOpt) return (r0: *yaklib.redisClient)")),(0,i.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"v1"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"...yaklib.redisConfigOpt")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"*yaklib.redisClient")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"redisaddr"},"redis.addr"),(0,i.kt)("p",null,"\u8bbe\u7f6e Redis \u5730\u5740"),(0,i.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-1"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,i.kt)("h4",{id:"\u5b9a\u4e49\uff1a-1"},"\u5b9a\u4e49\uff1a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"func redis.addr(v1: string) return (r0: func redisConfigOpt(v1: *yaklib.redisConfig) )")),(0,i.kt)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"v1"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"func redisConfigOpt(v1: *yaklib.redisConfig) ")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"redishost"},"redis.host"),(0,i.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-2"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,i.kt)("h4",{id:"\u5b9a\u4e49\uff1a-2"},"\u5b9a\u4e49\uff1a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"func redis.host(v1: string) return (r0: func redisConfigOpt(v1: *yaklib.redisConfig) )")),(0,i.kt)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"v1"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h4",{id:"\u8fd4\u56de\u503c-2"},"\u8fd4\u56de\u503c"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"func redisConfigOpt(v1: *yaklib.redisConfig) ")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"redispassword"},"redis.password"),(0,i.kt)("p",null,"\u8bbe\u7f6e Redis \u5bc6\u7801"),(0,i.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-3"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,i.kt)("h4",{id:"\u5b9a\u4e49\uff1a-3"},"\u5b9a\u4e49\uff1a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"func redis.password(v1: string) return (r0: func redisConfigOpt(v1: *yaklib.redisConfig) )")),(0,i.kt)("h4",{id:"\u53c2\u6570-3"},"\u53c2\u6570"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"v1"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h4",{id:"\u8fd4\u56de\u503c-3"},"\u8fd4\u56de\u503c"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"func redisConfigOpt(v1: *yaklib.redisConfig) ")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"redisport"},"redis.port"),(0,i.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-4"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,i.kt)("h4",{id:"\u5b9a\u4e49\uff1a-4"},"\u5b9a\u4e49\uff1a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"func redis.port(v1: int) return (r0: func redisConfigOpt(v1: *yaklib.redisConfig) )")),(0,i.kt)("h4",{id:"\u53c2\u6570-4"},"\u53c2\u6570"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"v1"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h4",{id:"\u8fd4\u56de\u503c-4"},"\u8fd4\u56de\u503c"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"func redisConfigOpt(v1: *yaklib.redisConfig) ")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"redisretry"},"redis.retry"),(0,i.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-5"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,i.kt)("h4",{id:"\u5b9a\u4e49\uff1a-5"},"\u5b9a\u4e49\uff1a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"func redis.retry(v1: int) return (r0: func redisConfigOpt(v1: *yaklib.redisConfig) )")),(0,i.kt)("h4",{id:"\u53c2\u6570-5"},"\u53c2\u6570"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"v1"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h4",{id:"\u8fd4\u56de\u503c-5"},"\u8fd4\u56de\u503c"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"func redisConfigOpt(v1: *yaklib.redisConfig) ")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"redistimeoutseconds"},"redis.timeoutSeconds"),(0,i.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-6"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,i.kt)("h4",{id:"\u5b9a\u4e49\uff1a-6"},"\u5b9a\u4e49\uff1a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"func redis.timeoutSeconds(v1: int) return (r0: func redisConfigOpt(v1: *yaklib.redisConfig) )")),(0,i.kt)("h4",{id:"\u53c2\u6570-6"},"\u53c2\u6570"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"v1"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h4",{id:"\u8fd4\u56de\u503c-6"},"\u8fd4\u56de\u503c"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"func redisConfigOpt(v1: *yaklib.redisConfig) ")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"redisusername"},"redis.username"),(0,i.kt)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-7"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,i.kt)("h4",{id:"\u5b9a\u4e49\uff1a-7"},"\u5b9a\u4e49\uff1a"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"func redis.username(v1: string) return (r0: func redisConfigOpt(v1: *yaklib.redisConfig) )")),(0,i.kt)("h4",{id:"\u53c2\u6570-7"},"\u53c2\u6570"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"v1"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h4",{id:"\u8fd4\u56de\u503c-7"},"\u8fd4\u56de\u503c"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"r0"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"func redisConfigOpt(v1: *yaklib.redisConfig) ")),(0,i.kt)("td",{parentName:"tr",align:"left"})))))}o.isMDXComponent=!0}}]);