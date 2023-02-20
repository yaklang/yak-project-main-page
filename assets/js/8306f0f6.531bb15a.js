(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[9568],{3905:(n,e,a)=>{"use strict";a.d(e,{Zo:()=>p,kt:()=>f});var t=a(67294);function r(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function o(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function s(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function l(n,e){if(null==n)return{};var a,t,r=function(n,e){if(null==n)return{};var a,t,r={},o=Object.keys(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||(r[a]=n[a]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(r[a]=n[a])}return r}var i=t.createContext({}),c=function(n){var e=t.useContext(i),a=e;return n&&(a="function"==typeof n?n(e):s(s({},e),n)),a},p=function(n){var e=c(n.components);return t.createElement(i.Provider,{value:e},n.children)},d="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},m=t.forwardRef((function(n,e){var a=n.components,r=n.mdxType,o=n.originalType,i=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),d=c(a),m=r,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return a?t.createElement(f,s(s({ref:e},p),{},{components:a})):t.createElement(f,s({ref:e},p))}));function f(n,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=n,l[d]="string"==typeof n?n:r,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},80675:(n,e,a)=>{"use strict";a.r(e),a.d(e,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>l,toc:()=>i,default:()=>p});var t=a(22122),r=(a(67294),a(3905));const o={sidebar_position:104},s="JSON \u5904\u7406\uff1aloads / dumps",l={unversionedId:"yakexamples/json",id:"yakexamples/json",isDocsHomePage:!1,title:"JSON \u5904\u7406\uff1aloads / dumps",description:"yak \u63d0\u4f9b\u4e86\u4e00\u4e2a\u7c7b\u4f3c Python \u7684 json.loads/dumps \u7684\u5904\u7406\u65b9\u5f0f",source:"@site/docs/yakexamples/json.mdx",sourceDirName:"yakexamples",slug:"/yakexamples/json",permalink:"/docs/yakexamples/json",editUrl:"https://github.com/yaklang/docs/yakexamples/json.mdx",tags:[],version:"current",sidebarPosition:104,frontMatter:{sidebar_position:104},sidebar:"tutorialSidebar",previous:{title:"\u6b63\u5219\u8868\u8fbe\u5f0f\uff1a\u63d0\u53d6\u4e0e\u66ff\u6362\u6570\u636e",permalink:"/docs/yakexamples/regexp_extract"},next:{title:"\u6279\u91cf\u53d1\u5305: \u6a21\u7cca\u6d4b\u8bd5\u6279\u91cf\u53d1\u5305",permalink:"/docs/yakexamples/batch-http"}},i=[{value:"<code>json.loads</code> \u628a JSON \u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a yak map",id:"jsonloads-\u628a-json-\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a-yak-map",children:[]},{value:"<code>json.dumps</code> \u628a Yak \u5bf9\u8c61\u8f6c\u4e3a JSON \u5b57\u7b26\u4e32",id:"jsondumps-\u628a-yak-\u5bf9\u8c61\u8f6c\u4e3a-json-\u5b57\u7b26\u4e32",children:[]}],c={toc:i};function p(n){let{components:e,...a}=n;return(0,r.kt)("wrapper",(0,t.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"json-\u5904\u7406\uff1aloads--dumps"},"JSON \u5904\u7406\uff1aloads / dumps"),(0,r.kt)("p",null,"yak \u63d0\u4f9b\u4e86\u4e00\u4e2a\u7c7b\u4f3c Python \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"json.loads/dumps")," \u7684\u5904\u7406\u65b9\u5f0f"),(0,r.kt)("h2",{id:"jsonloads-\u628a-json-\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a-yak-map"},(0,r.kt)("inlineCode",{parentName:"h2"},"json.loads")," \u628a JSON \u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a yak map"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'jsonRaw1 = `{"abc":123, "cde":"efg", "foo": "bar-123123", "azz": {"key1": "result2", "key2": 123, "e": ["abc", 111]}, "d": [1,2,3,"123"]}`\njsonRaw2 = `[1,23,4,"abc",true,false, {"abc": 123123, "dddd":"123"}]`\njsonRaw3 = `"123123123"`\njsonRaw4 = `123123`\njsonRaw5 = `false`\njsonRaw6 = `null`\ndump(json.loads(jsonRaw1))\ndump(json.loads(jsonRaw2))\ndump(json.loads(jsonRaw3))\ndump(json.loads(jsonRaw4))\ndump(json.loads(jsonRaw5))\ndump(json.loads(jsonRaw6))\n\n/*\nOUTPUT:\n\n(map[string]interface {}) (len=5) {\n (string) (len=3) "abc": (float64) 123,\n (string) (len=3) "cde": (string) (len=3) "efg",\n (string) (len=3) "foo": (string) (len=10) "bar-123123",\n (string) (len=3) "azz": (map[string]interface {}) (len=3) {\n  (string) (len=4) "key1": (string) (len=7) "result2",\n  (string) (len=4) "key2": (float64) 123,\n  (string) (len=1) "e": ([]interface {}) (len=2 cap=2) {\n   (string) (len=3) "abc",\n   (float64) 111\n  }\n },\n (string) (len=1) "d": ([]interface {}) (len=4 cap=4) {\n  (float64) 1,\n  (float64) 2,\n  (float64) 3,\n  (string) (len=3) "123"\n }\n}\n([]interface {}) (len=7 cap=8) {\n (float64) 1,\n (float64) 23,\n (float64) 4,\n (string) (len=3) "abc",\n (bool) true,\n (bool) false,\n (map[string]interface {}) (len=2) {\n  (string) (len=3) "abc": (float64) 123123,\n  (string) (len=4) "dddd": (string) (len=3) "123"\n }\n}\n(string) (len=9) "123123123"\n(float64) 123123\n(bool) false\n(interface {}) <nil>\n*/\n')),(0,r.kt)("h2",{id:"jsondumps-\u628a-yak-\u5bf9\u8c61\u8f6c\u4e3a-json-\u5b57\u7b26\u4e32"},(0,r.kt)("inlineCode",{parentName:"h2"},"json.dumps")," \u628a Yak \u5bf9\u8c61\u8f6c\u4e3a JSON \u5b57\u7b26\u4e32"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'a = ["123", true, false, "123123", 123, {"abc": 123},nil]\nprintln(json.dumps(a))\n// OUTPUT: ["123",true,false,"123123",123,{"abc":123},null]\n\na = {"abcccc": 123, "12": ["aaa", "123", {"a": 12, "arr": [123, true]}]}\nprintln(json.dumps(a))\n// OUTPUT: {"12":["aaa","123",{"a":12,"arr":[123,true]}],"abcccc":123}\n\na = false\nprintln(json.dumps(a))\n// OUTPUT: false\n\na = "asdfasdfasdf\\x00\\x0a\u4f60\u597d"\nprintln(json.dumps(a))\n// OUTPUT: "asdfasdfasdf\\u0000\\n\u4f60\u597d"\n\na = nil\nprintln(json.dumps(a))\n// OUTPUT: null\n')))}p.isMDXComponent=!0}}]);