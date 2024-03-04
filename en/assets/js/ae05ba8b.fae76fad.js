"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[753],{15680:(e,t,a)=>{a.d(t,{xA:()=>o,yg:()=>f});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),y=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},o=function(e){var t=y(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=y(a),N=r,f=d["".concat(p,".").concat(N)]||d[N]||m[N]||l;return a?n.createElement(f,g(g({ref:t},o),{},{components:a})):n.createElement(f,g({ref:t},o))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,g=new Array(l);g[0]=N;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,g[1]=i;for(var y=2;y<l;y++)g[y]=a[y];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},14883:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>g,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(58168),r=(a(96540),a(15680));const l={},g="openai",i={unversionedId:"api/openai",id:"api/openai",isDocsHomePage:!1,title:"openai",description:"|\u6210\u5458\u51fd\u6570|\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd|",source:"@site/docs/api/openai.md",sourceDirName:"api",slug:"/api/openai",permalink:"/en/docs/api/openai",editUrl:"https://github.com/yaklang/docs/api/openai.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"nuclei",permalink:"/en/docs/api/nuclei"},next:{title:"openapi",permalink:"/en/docs/api/openapi"}},p=[{value:"\u51fd\u6570\u5b9a\u4e49",id:"\u51fd\u6570\u5b9a\u4e49",children:[{value:"Chat",id:"chat",children:[]},{value:"FunctionCall",id:"functioncall",children:[]},{value:"TranslateToChinese",id:"translatetochinese",children:[]},{value:"apiKey",id:"apikey",children:[]},{value:"domain",id:"domain",children:[]},{value:"functionParamType",id:"functionparamtype",children:[]},{value:"functionProperty",id:"functionproperty",children:[]},{value:"functionRequired",id:"functionrequired",children:[]},{value:"localAPIKey",id:"localapikey",children:[]},{value:"model",id:"model",children:[]},{value:"proxy",id:"proxy",children:[]},{value:"yakDomain",id:"yakdomain",children:[]}]}],y={toc:p},o="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(o,(0,n.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"openai"},"openai"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u6210\u5458\u51fd\u6570"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#chat"},"openai.Chat")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Chat \u4f7f\u7528 OpenAI \u7684\u5927\u8bed\u8a00\u6a21\u578b\u8fdb\u884c\u5bf9\u8bdd\uff0c\u8fd4\u56de\u5bf9\u8bdd\u7ed3\u679c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#functioncall"},"openai.FunctionCall")),(0,r.yg)("td",{parentName:"tr",align:"left"},"FunctionCall \u4f7f\u7528 OpenAI \u7684\u5927\u8bed\u8a00\u6a21\u578b\u7684\u51fd\u6570\u8c03\u7528\u529f\u80fd\uff0c\u63cf\u8ff0\u4e00\u4e2a\u51fd\u6570\u5e76\u8ba9\u6a21\u578b\u667a\u80fd\u5730\u9009\u62e9\u8f93\u51fa\u4e00\u4e2a\u5305\u542b\u8c03\u7528\u51fd\u6570\u7684\u53c2\u6570\u7684 JSON \u5bf9\u8c61  \u8be6\u60c5\u8bf7\u53c2\u8003 ",(0,r.yg)("a",{parentName:"td",href:"https://platform.openai.com/docs/guides/function-calling"},"https://platform.openai.com/docs/guides/function-calling"),"  @param {st...")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#translatetochinese"},"openai.TranslateToChinese")),(0,r.yg)("td",{parentName:"tr",align:"left"},"TranslateToChinese \u4f7f\u7528 OpenAI \u7684\u5927\u8bed\u8a00\u6a21\u578b\u5c06\u4f20\u5165\u7684\u5b57\u7b26\u4e32\u7ffb\u8bd1\u4e3a\u4e2d\u6587\uff0c\u8fd8\u53ef\u4ee5\u63a5\u6536\u96f6\u4e2a\u5230\u591a\u4e2a\u914d\u7f6e\u9009\u9879\uff0c\u7528\u4e8e\u914d\u7f6e\u4ee3\u7406\u3001API Key\u3001\u6a21\u578b\u7b49\uff0c\u8fd4\u56de\u7ffb\u8bd1\u540e\u7684\u4e2d\u6587\u5b57\u7b26\u4e32")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#apikey"},"openai.apiKey")),(0,r.yg)("td",{parentName:"tr",align:"left"},"apiKey \u8bbe\u7f6e OpenAI\u7684API Key")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#domain"},"openai.domain")),(0,r.yg)("td",{parentName:"tr",align:"left"},"domain \u8bbe\u7f6e OpenAI\u7684\u7b2c\u4e09\u65b9\u52a0\u901f\u57df\u540d\uff0c\u7528\u4e8e\u52a0\u901f\u8bbf\u95ee")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#functionparamtype"},"openai.functionParamType")),(0,r.yg)("td",{parentName:"tr",align:"left"},'functionParamType \u8bbe\u7f6e\u51fd\u6570\u8c03\u7528\u65f6\u7684\u53c2\u6570\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a "object"')),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#functionproperty"},"openai.functionProperty")),(0,r.yg)("td",{parentName:"tr",align:"left"},"functionProperty \u8bbe\u7f6e\u51fd\u6570\u8c03\u7528\u65f6\u7684\u5355\u4e2a\u53c2\u6570\u5c5e\u6027")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#functionrequired"},"openai.functionRequired")),(0,r.yg)("td",{parentName:"tr",align:"left"},"functionRequired \u8bbe\u7f6e\u51fd\u6570\u8c03\u7528\u65f6\u7684\u5fc5\u987b\u53c2\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#localapikey"},"openai.localAPIKey")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#model"},"openai.model")),(0,r.yg)("td",{parentName:"tr",align:"left"},"model \u8bbe\u7f6e OpenAI\u7684\u5927\u8bed\u8a00\u6a21\u578b")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#proxy"},"openai.proxy")),(0,r.yg)("td",{parentName:"tr",align:"left"},"proxy \u8bbe\u7f6e\u8c03\u7528 OpenAI \u65f6\u4f7f\u7528\u7684\u4ee3\u7406")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("a",{parentName:"td",href:"#yakdomain"},"openai.yakDomain")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h2",{id:"\u51fd\u6570\u5b9a\u4e49"},"\u51fd\u6570\u5b9a\u4e49"),(0,r.yg)("h3",{id:"chat"},"Chat"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("p",null,"Chat \u4f7f\u7528 OpenAI \u7684\u5927\u8bed\u8a00\u6a21\u578b\u8fdb\u884c\u5bf9\u8bdd\uff0c\u8fd4\u56de\u5bf9\u8bdd\u7ed3\u679c"),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'result = openai.Chat("Hello, world!", openai.apiKey("sk-xxx"), openai.proxy("http://127.0.0.1:7890"))\n')),(0,r.yg)("h4",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Chat(data string, opts ...ConfigOption) string")),(0,r.yg)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"data"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"opts"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"...ConfigOption")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"functioncall"},"FunctionCall"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-1"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("p",null,"FunctionCall \u4f7f\u7528 OpenAI \u7684\u5927\u8bed\u8a00\u6a21\u578b\u7684\u51fd\u6570\u8c03\u7528\u529f\u80fd\uff0c\u63cf\u8ff0\u4e00\u4e2a\u51fd\u6570\u5e76\u8ba9\u6a21\u578b\u667a\u80fd\u5730\u9009\u62e9\u8f93\u51fa\u4e00\u4e2a\u5305\u542b\u8c03\u7528\u51fd\u6570\u7684\u53c2\u6570\u7684 JSON \u5bf9\u8c61"),(0,r.yg)("p",null,"\u8be6\u60c5\u8bf7\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"https://platform.openai.com/docs/guides/function-calling"},"https://platform.openai.com/docs/guides/function-calling")),(0,r.yg)("p",null,"@param {string} data \u7528\u6237\u7684\u63d0\u95ee\u6216\u63cf\u8ff0"),(0,r.yg)("p",null,"@param {string} funcName \u51fd\u6570\u540d"),(0,r.yg)("p",null,"@param {string} funcDesc \u51fd\u6570\u63cf\u8ff0"),(0,r.yg)("p",null,"@param {ConfigOption} ...opts \u914d\u7f6e\u9009\u9879\uff0c\u7528\u4e8e\u914d\u7f6e\u4ee3\u7406\u3001API Key\u3001\u6a21\u578b\u7b49"),(0,r.yg)("p",null,"@return {map","[string]","any} \u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u8c03\u7528\u51fd\u6570\u7684\u53c2\u6570\u7684\u6620\u5c04"),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'resultMap = openai.FunctionCall(\n"What is the weather like in Boston?",\n"get_current_weather",\n"Get the current weather in a given location",\nopenai.apiKey("sk-xxxx"),\nopenai.proxy("http://127.0.0.1:7890"),\nopenai.functionProperty("location", "string", "The city and state, e.g. San Francisco, CA"),\nopenai.functionRequired("location"))\n')),(0,r.yg)("h4",{id:"\u5b9a\u4e49-1"},"\u5b9a\u4e49"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"FunctionCall(data string, funcName string, funcDesc string, opts ...ConfigOption) map[string]any")),(0,r.yg)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"data"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"funcName"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"funcDesc"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"opts"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"...ConfigOption")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"map[string]any")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"translatetochinese"},"TranslateToChinese"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-2"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("p",null,"TranslateToChinese \u4f7f\u7528 OpenAI \u7684\u5927\u8bed\u8a00\u6a21\u578b\u5c06\u4f20\u5165\u7684\u5b57\u7b26\u4e32\u7ffb\u8bd1\u4e3a\u4e2d\u6587\uff0c\u8fd8\u53ef\u4ee5\u63a5\u6536\u96f6\u4e2a\u5230\u591a\u4e2a\u914d\u7f6e\u9009\u9879\uff0c\u7528\u4e8e\u914d\u7f6e\u4ee3\u7406\u3001API Key\u3001\u6a21\u578b\u7b49\uff0c\u8fd4\u56de\u7ffb\u8bd1\u540e\u7684\u4e2d\u6587\u5b57\u7b26\u4e32"),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'result = openai.TranslateToChinese("Hello, world!", openai.apiKey("sk-xxx"), openai.proxy("http://127.0.0.1:7890"))\n')),(0,r.yg)("h4",{id:"\u5b9a\u4e49-2"},"\u5b9a\u4e49"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"TranslateToChinese(data string, opts ...ConfigOption) string")),(0,r.yg)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"data"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"opts"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"...ConfigOption")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-2"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"apikey"},"apiKey"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-3"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("p",null,"apiKey \u8bbe\u7f6e OpenAI\u7684API Key"),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'result = openai.TranslateToChinese("Hello, world!", openai.apiKey("sk-xxx"))\n')),(0,r.yg)("h4",{id:"\u5b9a\u4e49-3"},"\u5b9a\u4e49"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"apiKey(i string) ConfigOption")),(0,r.yg)("h4",{id:"\u53c2\u6570-3"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"i"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-3"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"ConfigOption")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"domain"},"domain"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-4"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("p",null,"domain \u8bbe\u7f6e OpenAI\u7684\u7b2c\u4e09\u65b9\u52a0\u901f\u57df\u540d\uff0c\u7528\u4e8e\u52a0\u901f\u8bbf\u95ee"),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'result = openai.TranslateToChinese("Hello, world!", openai.apiKey("sk-xxx"), openai.domain("api.ai.yaklang.com"))\n')),(0,r.yg)("h4",{id:"\u5b9a\u4e49-4"},"\u5b9a\u4e49"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"domain(i string) ConfigOption")),(0,r.yg)("h4",{id:"\u53c2\u6570-4"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"i"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-4"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"ConfigOption")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"functionparamtype"},"functionParamType"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-5"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("p",null,'functionParamType \u8bbe\u7f6e\u51fd\u6570\u8c03\u7528\u65f6\u7684\u53c2\u6570\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4e3a "object"'),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'resultMap = openai.FunctionCall(\n"What is the weather like in Boston?",\n"get_current_weather",\n"Get the current weather in a given location",\nopenai.apiKey("sk-xxxx"),\nopenai.proxy("http://127.0.0.1:7890"),\nopenai.functionProperty("location", "string", "The city and state, e.g. San Francisco, CA"),\nopenai.functionRequired("location"))\n')),(0,r.yg)("h4",{id:"\u5b9a\u4e49-5"},"\u5b9a\u4e49"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"functionParamType(i string) ConfigOption")),(0,r.yg)("h4",{id:"\u53c2\u6570-5"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"i"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-5"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"ConfigOption")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"functionproperty"},"functionProperty"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-6"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("p",null,"functionProperty \u8bbe\u7f6e\u51fd\u6570\u8c03\u7528\u65f6\u7684\u5355\u4e2a\u53c2\u6570\u5c5e\u6027"),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'resultMap = openai.FunctionCall(\n"What is the weather like in Boston?",\n"get_current_weather",\n"Get the current weather in a given location",\nopenai.apiKey("sk-xxxx"),\nopenai.proxy("http://127.0.0.1:7890"),\nopenai.functionProperty("location", "string", "The city and state, e.g. San Francisco, CA"),\nopenai.functionRequired("location"))\n')),(0,r.yg)("h4",{id:"\u5b9a\u4e49-6"},"\u5b9a\u4e49"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"functionProperty(name string, typ string, description string, enum ...[]string) ConfigOption")),(0,r.yg)("h4",{id:"\u53c2\u6570-6"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"name"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"typ"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"description"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"enum"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"...[]string")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-6"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"ConfigOption")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"functionrequired"},"functionRequired"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-7"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("p",null,"functionRequired \u8bbe\u7f6e\u51fd\u6570\u8c03\u7528\u65f6\u7684\u5fc5\u987b\u53c2\u6570"),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'resultMap = openai.FunctionCall(\n"What is the weather like in Boston?",\n"get_current_weather",\n"Get the current weather in a given location",\nopenai.apiKey("sk-xxxx"),\nopenai.proxy("http://127.0.0.1:7890"),\nopenai.functionProperty("location", "string", "The city and state, e.g. San Francisco, CA"),\nopenai.functionRequired("location"))\n')),(0,r.yg)("h4",{id:"\u5b9a\u4e49-7"},"\u5b9a\u4e49"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"functionRequired(names ...string) ConfigOption")),(0,r.yg)("h4",{id:"\u53c2\u6570-7"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"names"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"...string")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-7"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"ConfigOption")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"localapikey"},"localAPIKey"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-8"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("h4",{id:"\u5b9a\u4e49-8"},"\u5b9a\u4e49"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"localAPIKey(client *Client)")),(0,r.yg)("h4",{id:"\u53c2\u6570-8"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"client"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"*Client")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-8"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},"``"),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"model"},"model"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-9"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("p",null,"model \u8bbe\u7f6e OpenAI\u7684\u5927\u8bed\u8a00\u6a21\u578b"),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'result = openai.TranslateToChinese("Hello, world!", openai.apiKey("sk-xxx"), openai.model("gpt-4-0613"))\n')),(0,r.yg)("h4",{id:"\u5b9a\u4e49-9"},"\u5b9a\u4e49"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"model(i string) ConfigOption")),(0,r.yg)("h4",{id:"\u53c2\u6570-9"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"i"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-9"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"ConfigOption")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"proxy"},"proxy"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-10"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("p",null,"proxy \u8bbe\u7f6e\u8c03\u7528 OpenAI \u65f6\u4f7f\u7528\u7684\u4ee3\u7406"),(0,r.yg)("p",null,"Example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'result = openai.TranslateToChinese("Hello, world!", openai.apiKey("sk-xxx"), openai.proxy("http://127.0.0.1:7890"))\n')),(0,r.yg)("h4",{id:"\u5b9a\u4e49-10"},"\u5b9a\u4e49"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"proxy(i string) ConfigOption")),(0,r.yg)("h4",{id:"\u53c2\u6570-10"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"i"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"string")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-10"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"ConfigOption")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h3",{id:"yakdomain"},"yakDomain"),(0,r.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-11"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,r.yg)("h4",{id:"\u5b9a\u4e49-11"},"\u5b9a\u4e49"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"yakDomain(client *Client)")),(0,r.yg)("h4",{id:"\u53c2\u6570-11"},"\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"client"),(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"*Client")),(0,r.yg)("td",{parentName:"tr",align:"left"})))),(0,r.yg)("h4",{id:"\u8fd4\u56de\u503c-11"},"\u8fd4\u56de\u503c"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,r.yg)("td",{parentName:"tr",align:"left"},"``"),(0,r.yg)("td",{parentName:"tr",align:"left"})))))}d.isMDXComponent=!0}}]);