"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[8011],{15680:(t,e,a)=>{a.d(e,{xA:()=>d,yg:()=>o});var n=a(96540);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function y(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),p=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):g(g({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},m="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,d=y(t,["components","mdxType","originalType","parentName"]),m=p(a),f=r,o=m["".concat(i,".").concat(f)]||m[f]||N[f]||l;return a?n.createElement(o,g(g({ref:e},d),{},{components:a})):n.createElement(o,g({ref:e},d))}));function o(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,g=new Array(l);g[0]=f;var y={};for(var i in e)hasOwnProperty.call(e,i)&&(y[i]=e[i]);y.originalType=t,y[m]="string"==typeof t?t:r,g[1]=y;for(var p=2;p<l;p++)g[p]=a[p];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},75835:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>g,default:()=>m,frontMatter:()=>l,metadata:()=>y,toc:()=>i});var n=a(58168),r=(a(96540),a(15680));const l={},g="nasl",y={unversionedId:"api/nasl",id:"api/nasl",isDocsHomePage:!1,title:"nasl",description:"|\u6210\u5458\u51fd\u6570|\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd|",source:"@site/docs/api/nasl.md",sourceDirName:"api",slug:"/api/nasl",permalink:"/docs/api/nasl",editUrl:"https://github.com/yaklang/docs/api/nasl.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"mmdb",permalink:"/docs/api/mmdb"},next:{title:"newcrawlerx",permalink:"/docs/api/newcrawlerx"}},i=[{value:"\u51fd\u6570\u5b9a\u4e49",id:"\u51fd\u6570\u5b9a\u4e49",children:[{value:"nasl.QueryAllScripts",id:"naslqueryallscripts",children:[]},{value:"nasl.RemoveDatabase",id:"naslremovedatabase",children:[]},{value:"nasl.Scan",id:"naslscan",children:[]},{value:"nasl.ScanTarget",id:"naslscantarget",children:[]},{value:"nasl.UpdateDatabase",id:"naslupdatedatabase",children:[]},{value:"nasl.conditions",id:"naslconditions",children:[]},{value:"nasl.family",id:"naslfamily",children:[]},{value:"nasl.plugin",id:"naslplugin",children:[]},{value:"nasl.preference",id:"naslpreference",children:[]},{value:"nasl.proxy",id:"naslproxy",children:[]},{value:"nasl.riskHandle",id:"naslriskhandle",children:[]}]}],p={toc:i},d="wrapper";function m(t){let{components:e,...a}=t;return(0,r.yg)(d,(0,n.A)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"nasl"},"nasl"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u6210\u5458\u51fd\u6570"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#naslqueryallscripts"},"nasl.QueryAllScripts")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#naslremovedatabase"},"nasl.RemoveDatabase")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#naslscan"},"nasl.Scan")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#naslscantarget"},"nasl.ScanTarget")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#naslupdatedatabase"},"nasl.UpdateDatabase")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#naslconditions"},"nasl.conditions")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#naslfamily"},"nasl.family")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#naslplugin"},"nasl.plugin")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#naslpreference"},"nasl.preference")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#naslproxy"},"nasl.proxy")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#naslriskhandle"},"nasl.riskHandle")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h2",{id:"\u51fd\u6570\u5b9a\u4e49"},"\u51fd\u6570\u5b9a\u4e49"),(0,r.yg)("h3",{id:"naslqueryallscripts"},"nasl.QueryAllScripts"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("h4",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49\uff1a"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"func nasl.QueryAllScripts(v1 ...any) return (r0: []*antlr4nasl.NaslScriptInfo)")),(0,r.yg)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"v1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"...any")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r0"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"[]*antlr4nasl.NaslScriptInfo")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"naslremovedatabase"},"nasl.RemoveDatabase"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-1"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("h4",{id:"\u5b9a\u4e49-1"},"\u5b9a\u4e49\uff1a"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"func nasl.RemoveDatabase() return (r0: error)")),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r0"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"error")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"naslscan"},"nasl.Scan"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-2"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("h4",{id:"\u5b9a\u4e49-2"},"\u5b9a\u4e49\uff1a"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"func nasl.Scan(v1: string, v2: string, v3 ...antlr4nasl.NaslScriptConfigOptFunc) return (r0: map[string]any, r1: error)")),(0,r.yg)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"v1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"v2"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"v3"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"...antlr4nasl.NaslScriptConfigOptFunc")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-2"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r0"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"map[string]any")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"error")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"naslscantarget"},"nasl.ScanTarget"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-3"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("h4",{id:"\u5b9a\u4e49-3"},"\u5b9a\u4e49\uff1a"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"func nasl.ScanTarget(v1: string, v2 ...antlr4nasl.NaslScriptConfigOptFunc) return (r0: map[string]any, r1: error)")),(0,r.yg)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"v1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"v2"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"...antlr4nasl.NaslScriptConfigOptFunc")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-3"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r0"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"map[string]any")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"error")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"naslupdatedatabase"},"nasl.UpdateDatabase"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-4"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("h4",{id:"\u5b9a\u4e49-4"},"\u5b9a\u4e49\uff1a"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"func nasl.UpdateDatabase(v1: string)")),(0,r.yg)("h4",{id:"\u53c2\u6570-3"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"v1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"naslconditions"},"nasl.conditions"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-5"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("h4",{id:"\u5b9a\u4e49-5"},"\u5b9a\u4e49\uff1a"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"func nasl.conditions(v1 ...any) return (r0: func NaslScriptConfigOptFunc(v1: *antlr4nasl.NaslScriptConfig) )")),(0,r.yg)("h4",{id:"\u53c2\u6570-4"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"v1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"...any")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-4"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r0"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"func NaslScriptConfigOptFunc(v1: *antlr4nasl.NaslScriptConfig) ")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"naslfamily"},"nasl.family"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-6"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("h4",{id:"\u5b9a\u4e49-6"},"\u5b9a\u4e49\uff1a"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"func nasl.family(v1: string) return (r0: func NaslScriptConfigOptFunc(v1: *antlr4nasl.NaslScriptConfig) )")),(0,r.yg)("h4",{id:"\u53c2\u6570-5"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"v1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-5"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r0"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"func NaslScriptConfigOptFunc(v1: *antlr4nasl.NaslScriptConfig) ")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"naslplugin"},"nasl.plugin"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-7"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("h4",{id:"\u5b9a\u4e49-7"},"\u5b9a\u4e49\uff1a"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"func nasl.plugin(v1 ...string) return (r0: func NaslScriptConfigOptFunc(v1: *antlr4nasl.NaslScriptConfig) )")),(0,r.yg)("h4",{id:"\u53c2\u6570-6"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"v1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"...string")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-6"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r0"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"func NaslScriptConfigOptFunc(v1: *antlr4nasl.NaslScriptConfig) ")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"naslpreference"},"nasl.preference"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-8"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("h4",{id:"\u5b9a\u4e49-8"},"\u5b9a\u4e49\uff1a"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"func nasl.preference(v1: any) return (r0: func NaslScriptConfigOptFunc(v1: *antlr4nasl.NaslScriptConfig) )")),(0,r.yg)("h4",{id:"\u53c2\u6570-7"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"v1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"any")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-7"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r0"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"func NaslScriptConfigOptFunc(v1: *antlr4nasl.NaslScriptConfig) ")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"naslproxy"},"nasl.proxy"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-9"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("h4",{id:"\u5b9a\u4e49-9"},"\u5b9a\u4e49\uff1a"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"func nasl.proxy(v1 ...string) return (r0: func NaslScriptConfigOptFunc(v1: *antlr4nasl.NaslScriptConfig) )")),(0,r.yg)("h4",{id:"\u53c2\u6570-8"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"v1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"...string")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-8"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r0"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"func NaslScriptConfigOptFunc(v1: *antlr4nasl.NaslScriptConfig) ")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"naslriskhandle"},"nasl.riskHandle"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-10"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("h4",{id:"\u5b9a\u4e49-10"},"\u5b9a\u4e49\uff1a"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"func nasl.riskHandle(v1: func (v1: any) ) return (r0: func NaslScriptConfigOptFunc(v1: *antlr4nasl.NaslScriptConfig) )")),(0,r.yg)("h4",{id:"\u53c2\u6570-9"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"v1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"func (v1: any) ")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-9"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r0"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"func NaslScriptConfigOptFunc(v1: *antlr4nasl.NaslScriptConfig) ")),(0,r.yg)("td",{parentName:"tr",align:"left"})))))}m.isMDXComponent=!0}}]);