(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[6259],{3905:(n,e,t)=>{"use strict";t.d(e,{Zo:()=>p,kt:()=>f});var a=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var i=a.createContext({}),c=function(n){var e=a.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},p=function(n){var e=c(n.components);return a.createElement(i.Provider,{value:e},n.children)},d="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,i=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(f,l(l({ref:e},p),{},{components:t})):a.createElement(f,l({ref:e},p))}));function f(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=n,s[d]="string"==typeof n?n:r,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},63873:(n,e,t)=>{"use strict";t.d(e,{Z:()=>s});var a=t(67294),r=t(86010);const o="tableOfContentsInline_3fWc";function l(n){let{toc:e,isChild:t}=n;return e.length?a.createElement("ul",{className:t?"":"table-of-contents"},e.map((n=>a.createElement("li",{key:n.id},a.createElement("a",{href:`#${n.id}`,dangerouslySetInnerHTML:{__html:n.value}}),a.createElement(l,{isChild:!0,toc:n.children}))))):null}const s=function(n){let{toc:e}=n;return a.createElement("div",{className:(0,r.Z)(o)},a.createElement(l,{toc:e}))}},32047:(n,e,t)=>{"use strict";t.r(e),t.d(e,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>i,toc:()=>c,default:()=>d});var a=t(22122),r=(t(67294),t(3905)),o=t(63873);const l={sidebar_position:9},s="\u51fd\u6570\u5e93\uff1ajson",i={unversionedId:"yakexamples/json",id:"yakexamples/json",isDocsHomePage:!1,title:"\u51fd\u6570\u5e93\uff1ajson",description:"JSON\u662f\u4e00\u79cd\u8f7b\u91cf\u7ea7\u7684\u6570\u636e\u4ea4\u6362\u683c\u5f0f\u3002\u5b83\u4f7f\u7528\u6587\u672c\u683c\u5f0f\u6765\u4f20\u8f93\u7ed3\u6784\u5316\u6570\u636e\uff0c\u5305\u62ec\u6570\u7ec4\u3001\u5bf9\u8c61\u3001\u5b57\u7b26\u4e32\u3001\u6570\u5b57\u3001\u5e03\u5c14\u503c\u548cnull\u3002JSON\u683c\u5f0f\u88ab\u5e7f\u6cdb\u7528\u4e8eWeb\u5e94\u7528\u7a0b\u5e8f\u548cAPI\u4e2d\uff0c\u4f5c\u4e3a\u4e00\u79cd\u6570\u636e\u683c\u5f0f\uff0c\u4ee5\u5b9e\u73b0\u4e0d\u540c\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u7684\u6570\u636e\u4ea4\u6362\u3002JSON\u662f\u4e00\u79cd\u5e73\u53f0\u65e0\u5173\u7684\u683c\u5f0f\uff0c\u53ef\u4ee5\u4f7f\u7528\u8bb8\u591a\u7f16\u7a0b\u8bed\u8a00\u8fdb\u884c\u89e3\u6790\u548c\u751f\u6210\uff0c\u5305\u62ecJavaScript\u3001Python\u3001Java\u7b49\u3002JSON\u7684\u8bed\u6cd5\u7b80\u5355\u3001\u6613\u4e8e\u7406\u89e3\u548c\u9605\u8bfb\uff0c\u4e0eXML\u548cHTML\u76f8\u6bd4\uff0c\u5b83\u66f4\u8f7b\u91cf\u7ea7\u548c\u7075\u6d3b\uff0c\u56e0\u6b64\u5728\u6570\u636e\u4f20\u8f93\u548c\u5b58\u50a8\u65b9\u9762\u66f4\u52a0\u9ad8\u6548\u3002",source:"@site/docs/yakexamples/9-json.mdx",sourceDirName:"yakexamples",slug:"/yakexamples/json",permalink:"/en/docs/yakexamples/json",editUrl:"https://github.com/yaklang/docs/yakexamples/9-json.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"\u51fd\u6570\u5e93\uff1are - \u6b63\u5219\u8868\u8fbe\u5f0f",permalink:"/en/docs/yakexamples/regexp"},next:{title:"\u7f16\u7a0b\u6280\u5de7\uff1a\u51fd\u6570\u5f0f\u8865\u5145\u8bed\u6cd5",permalink:"/en/docs/yakexamples/func-p"}},c=[{value:"json \u7f16\u7801\u89e3\u7801",id:"json-\u7f16\u7801\u89e3\u7801",children:[{value:"<code>json.loads</code> \u628a JSON \u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a map",id:"jsonloads-\u628a-json-\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a-map",children:[]},{value:"<code>json.dumps</code> \u628a\u4efb\u610f\u6570\u636e\u8f6c\u4e3a JSON",id:"jsondumps-\u628a\u4efb\u610f\u6570\u636e\u8f6c\u4e3a-json",children:[]}]},{value:"Json Path \u6280\u672f",id:"json-path-\u6280\u672f",children:[{value:"\u63d0\u53d6\u6570\u636e",id:"\u63d0\u53d6\u6570\u636e",children:[]},{value:"\u66ff\u6362\u6570\u636e",id:"\u66ff\u6362\u6570\u636e",children:[]}]},{value:"<code>json.New</code> \u521b\u5efa\u53ef\u64cd\u4f5c JSON \u5bf9\u8c61",id:"jsonnew-\u521b\u5efa\u53ef\u64cd\u4f5c-json-\u5bf9\u8c61",children:[]}],p={toc:c};function d(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u51fd\u6570\u5e93\uff1ajson"},"\u51fd\u6570\u5e93\uff1ajson"),(0,r.kt)("p",null,"JSON\u662f\u4e00\u79cd\u8f7b\u91cf\u7ea7\u7684\u6570\u636e\u4ea4\u6362\u683c\u5f0f\u3002\u5b83\u4f7f\u7528\u6587\u672c\u683c\u5f0f\u6765\u4f20\u8f93\u7ed3\u6784\u5316\u6570\u636e\uff0c\u5305\u62ec\u6570\u7ec4\u3001\u5bf9\u8c61\u3001\u5b57\u7b26\u4e32\u3001\u6570\u5b57\u3001\u5e03\u5c14\u503c\u548cnull\u3002JSON\u683c\u5f0f\u88ab\u5e7f\u6cdb\u7528\u4e8eWeb\u5e94\u7528\u7a0b\u5e8f\u548cAPI\u4e2d\uff0c\u4f5c\u4e3a\u4e00\u79cd\u6570\u636e\u683c\u5f0f\uff0c\u4ee5\u5b9e\u73b0\u4e0d\u540c\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u7684\u6570\u636e\u4ea4\u6362\u3002JSON\u662f\u4e00\u79cd\u5e73\u53f0\u65e0\u5173\u7684\u683c\u5f0f\uff0c\u53ef\u4ee5\u4f7f\u7528\u8bb8\u591a\u7f16\u7a0b\u8bed\u8a00\u8fdb\u884c\u89e3\u6790\u548c\u751f\u6210\uff0c\u5305\u62ecJavaScript\u3001Python\u3001Java\u7b49\u3002JSON\u7684\u8bed\u6cd5\u7b80\u5355\u3001\u6613\u4e8e\u7406\u89e3\u548c\u9605\u8bfb\uff0c\u4e0eXML\u548cHTML\u76f8\u6bd4\uff0c\u5b83\u66f4\u8f7b\u91cf\u7ea7\u548c\u7075\u6d3b\uff0c\u56e0\u6b64\u5728\u6570\u636e\u4f20\u8f93\u548c\u5b58\u50a8\u65b9\u9762\u66f4\u52a0\u9ad8\u6548\u3002"),(0,r.kt)(o.Z,{toc:c,mdxType:"TOCInline"}),(0,r.kt)("h2",{id:"json-\u7f16\u7801\u89e3\u7801"},"json \u7f16\u7801\u89e3\u7801"),(0,r.kt)("p",null,"yak \u63d0\u4f9b\u4e86\u4e00\u4e2a\u7c7b\u4f3c Python \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"json.loads/dumps")," \u7684\u5904\u7406\u65b9\u5f0f"),(0,r.kt)("h3",{id:"jsonloads-\u628a-json-\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a-map"},(0,r.kt)("inlineCode",{parentName:"h3"},"json.loads")," \u628a JSON \u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a map"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'jsonRaw1 = `{"abc":123, "cde":"efg", "foo": "bar-123123", "azz": {"key1": "result2", "key2": 123, "e": ["abc", 111]}, "d": [1,2,3,"123"]}`\njsonRaw2 = `[1,23,4,"abc",true,false, {"abc": 123123, "dddd":"123"}]`\njsonRaw3 = `"123123123"`\njsonRaw4 = `123123`\njsonRaw5 = `false`\njsonRaw6 = `null`\ndump(json.loads(jsonRaw1))\ndump(json.loads(jsonRaw2))\ndump(json.loads(jsonRaw3))\ndump(json.loads(jsonRaw4))\ndump(json.loads(jsonRaw5))\ndump(json.loads(jsonRaw6))\n\n/*\nOUTPUT:\n\n(map[string]interface {}) (len=5) {\n (string) (len=3) "abc": (float64) 123,\n (string) (len=3) "cde": (string) (len=3) "efg",\n (string) (len=3) "foo": (string) (len=10) "bar-123123",\n (string) (len=3) "azz": (map[string]interface {}) (len=3) {\n  (string) (len=4) "key1": (string) (len=7) "result2",\n  (string) (len=4) "key2": (float64) 123,\n  (string) (len=1) "e": ([]interface {}) (len=2 cap=2) {\n   (string) (len=3) "abc",\n   (float64) 111\n  }\n },\n (string) (len=1) "d": ([]interface {}) (len=4 cap=4) {\n  (float64) 1,\n  (float64) 2,\n  (float64) 3,\n  (string) (len=3) "123"\n }\n}\n([]interface {}) (len=7 cap=8) {\n (float64) 1,\n (float64) 23,\n (float64) 4,\n (string) (len=3) "abc",\n (bool) true,\n (bool) false,\n (map[string]interface {}) (len=2) {\n  (string) (len=3) "abc": (float64) 123123,\n  (string) (len=4) "dddd": (string) (len=3) "123"\n }\n}\n(string) (len=9) "123123123"\n(float64) 123123\n(bool) false\n(interface {}) <nil>\n*/\n')),(0,r.kt)("h3",{id:"jsondumps-\u628a\u4efb\u610f\u6570\u636e\u8f6c\u4e3a-json"},(0,r.kt)("inlineCode",{parentName:"h3"},"json.dumps")," \u628a\u4efb\u610f\u6570\u636e\u8f6c\u4e3a JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'a = ["123", true, false, "123123", 123, {"abc": 123},nil]\nprintln(json.dumps(a))\n// OUTPUT: ["123",true,false,"123123",123,{"abc":123},null]\n\na = {"abcccc": 123, "12": ["aaa", "123", {"a": 12, "arr": [123, true]}]}\nprintln(json.dumps(a))\n// OUTPUT: {"12":["aaa","123",{"a":12,"arr":[123,true]}],"abcccc":123}\n\na = false\nprintln(json.dumps(a))\n// OUTPUT: false\n\na = "asdfasdfasdf\\x00\\x0a\u4f60\u597d"\nprintln(json.dumps(a))\n// OUTPUT: "asdfasdfasdf\\u0000\\n\u4f60\u597d"\n\na = nil\nprintln(json.dumps(a))\n// OUTPUT: null\n')),(0,r.kt)("h2",{id:"json-path-\u6280\u672f"},"Json Path \u6280\u672f"),(0,r.kt)("p",null,"JSON Path\u662f\u4e00\u79cd\u7528\u4e8e\u4eceJSON\u683c\u5f0f\u7684\u6570\u636e\u7ed3\u6784\u4e2d\u63d0\u53d6\u7279\u5b9a\u6570\u636e\u7684\u67e5\u8be2\u8bed\u8a00\uff0c\u7c7b\u4f3c\u4e8eXPath\u3002\u5b83\u63d0\u4f9b\u4e86\u4e00\u79cd\u901a\u7528\u7684\u65b9\u5f0f\u6765\u8bbf\u95ee\u548c\u64cd\u4f5cJSON\u6570\u636e\uff0c\u53ef\u4ee5\u7528\u4e8e\u7f16\u7a0b\u8bed\u8a00\u6216\u547d\u4ee4\u884c\u4e2d\uff0c\u4ee5\u5b9e\u73b0\u590d\u6742\u7684JSON\u6570\u636e\u5904\u7406\u548c\u5206\u6790\u3002"),(0,r.kt)("p",null,"JSON Path\u4f7f\u7528\u4e00\u79cd\u7c7b\u4f3c\u4e8eXPath\u7684\u8868\u8fbe\u5f0f\u8bed\u6cd5\uff0c\u4ee5\u5339\u914dJSON\u5bf9\u8c61\u7684\u7279\u5b9a\u5143\u7d20\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0b\u662f\u4e00\u4e9b\u7b80\u5355\u7684JSON Path\u8868\u8fbe\u5f0f\u793a\u4f8b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"$"),"\uff1a\u8868\u793aJSON\u5bf9\u8c61\u7684\u6839\u5143\u7d20"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"$.name"),"\uff1a\u8868\u793a\u6839\u5143\u7d20\u4e0b\u7684\u201cname\u201d\u5c5e\u6027\u503c"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"$.people[*].name"),"\uff1a\u8868\u793a\u6839\u5143\u7d20\u4e0b\u7684\u201cpeople\u201d\u6570\u7ec4\u4e2d\u6240\u6709\u5bf9\u8c61\u7684\u201cname\u201d\u5c5e\u6027\u503c"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"$.people[?(@.age > 18)].name"),"\uff1a\u8868\u793a\u6839\u5143\u7d20\u4e0b\u7684\u201cpeople\u201d\u6570\u7ec4\u4e2d\u5e74\u9f84\u5927\u4e8e18\u5c81\u7684\u6240\u6709\u5bf9\u8c61\u7684\u201cname\u201d\u5c5e\u6027\u503c")),(0,r.kt)("p",null,"\u901a\u8fc7JSON Path\u8868\u8fbe\u5f0f\uff0c\u53ef\u4ee5\u8f7b\u677e\u5730\u4eceJSON\u6570\u636e\u7ed3\u6784\u4e2d\u63d0\u53d6\u7279\u5b9a\u7684\u6570\u636e\uff0c\u8fd9\u5728\u6570\u636e\u5206\u6790\u548c\u6570\u636e\u5904\u7406\u65b9\u9762\u975e\u5e38\u6709\u7528\u3002"),(0,r.kt)("h3",{id:"\u63d0\u53d6\u6570\u636e"},"\u63d0\u53d6\u6570\u636e"),(0,r.kt)("h3",{id:"\u66ff\u6362\u6570\u636e"},"\u66ff\u6362\u6570\u636e"),(0,r.kt)("h2",{id:"jsonnew-\u521b\u5efa\u53ef\u64cd\u4f5c-json-\u5bf9\u8c61"},(0,r.kt)("inlineCode",{parentName:"h2"},"json.New")," \u521b\u5efa\u53ef\u64cd\u4f5c JSON \u5bf9\u8c61"))}d.isMDXComponent=!0},86010:(n,e,t)=>{"use strict";function a(n){var e,t,r="";if("string"==typeof n||"number"==typeof n)r+=n;else if("object"==typeof n)if(Array.isArray(n))for(e=0;e<n.length;e++)n[e]&&(t=a(n[e]))&&(r&&(r+=" "),r+=t);else for(e in n)n[e]&&(r&&(r+=" "),r+=e);return r}function r(){for(var n,e,t=0,r="";t<arguments.length;)(n=arguments[t++])&&(e=a(n))&&(r&&(r+=" "),r+=e);return r}t.d(e,{Z:()=>r})}}]);