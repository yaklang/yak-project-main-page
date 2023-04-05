"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[6259],{3905:(n,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var t=a(67294);function i(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function l(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function r(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){i(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function o(n,e){if(null==n)return{};var a,t,i=function(n,e){if(null==n)return{};var a,t,i={},l=Object.keys(n);for(t=0;t<l.length;t++)a=l[t],e.indexOf(a)>=0||(i[a]=n[a]);return i}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(t=0;t<l.length;t++)a=l[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(i[a]=n[a])}return i}var s=t.createContext({}),p=function(n){var e=t.useContext(s),a=e;return n&&(a="function"==typeof n?n(e):r(r({},e),n)),a},m=function(n){var e=p(n.components);return t.createElement(s.Provider,{value:e},n.children)},c="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},k=t.forwardRef((function(n,e){var a=n.components,i=n.mdxType,l=n.originalType,s=n.parentName,m=o(n,["components","mdxType","originalType","parentName"]),c=p(a),k=i,u=c["".concat(s,".").concat(k)]||c[k]||d[k]||l;return a?t.createElement(u,r(r({ref:e},m),{},{components:a})):t.createElement(u,r({ref:e},m))}));function u(n,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var l=a.length,r=new Array(l);r[0]=k;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=n,o[c]="string"==typeof n?n:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}k.displayName="MDXCreateElement"},63873:(n,e,a)=>{a.d(e,{Z:()=>o});var t=a(67294),i=a(86010);const l="tableOfContentsInline_0DDH";function r(n){let{toc:e,isChild:a}=n;return e.length?t.createElement("ul",{className:a?"":"table-of-contents"},e.map((n=>t.createElement("li",{key:n.id},t.createElement("a",{href:`#${n.id}`,dangerouslySetInnerHTML:{__html:n.value}}),t.createElement(r,{isChild:!0,toc:n.children}))))):null}const o=function(n){let{toc:e}=n;return t.createElement("div",{className:(0,i.Z)(l)},t.createElement(r,{toc:e}))}},32047:(n,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var t=a(87462),i=(a(67294),a(3905)),l=a(63873);const r={sidebar_position:9},o="\u51fd\u6570\u5e93\uff1ajson - \u4f18\u96c5\u5730\u5904\u7406JSON",s={unversionedId:"yakexamples/json",id:"yakexamples/json",isDocsHomePage:!1,title:"\u51fd\u6570\u5e93\uff1ajson - \u4f18\u96c5\u5730\u5904\u7406JSON",description:"JSON\u662f\u4e00\u79cd\u8f7b\u91cf\u7ea7\u7684\u6570\u636e\u4ea4\u6362\u683c\u5f0f\u3002\u5b83\u4f7f\u7528\u6587\u672c\u683c\u5f0f\u6765\u4f20\u8f93\u7ed3\u6784\u5316\u6570\u636e\uff0c\u5305\u62ec\u6570\u7ec4\u3001\u5bf9\u8c61\u3001\u5b57\u7b26\u4e32\u3001\u6570\u5b57\u3001\u5e03\u5c14\u503c\u548cnull\u3002JSON\u683c\u5f0f\u88ab\u5e7f\u6cdb\u7528\u4e8eWeb\u5e94\u7528\u7a0b\u5e8f\u548cAPI\u4e2d\uff0c\u4f5c\u4e3a\u4e00\u79cd\u6570\u636e\u683c\u5f0f\uff0c\u4ee5\u5b9e\u73b0\u4e0d\u540c\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u7684\u6570\u636e\u4ea4\u6362\u3002JSON\u662f\u4e00\u79cd\u5e73\u53f0\u65e0\u5173\u7684\u683c\u5f0f\uff0c\u53ef\u4ee5\u4f7f\u7528\u8bb8\u591a\u7f16\u7a0b\u8bed\u8a00\u8fdb\u884c\u89e3\u6790\u548c\u751f\u6210\uff0c\u5305\u62ecJavaScript\u3001Python\u3001Java\u7b49\u3002JSON\u7684\u8bed\u6cd5\u7b80\u5355\u3001\u6613\u4e8e\u7406\u89e3\u548c\u9605\u8bfb\uff0c\u4e0eXML\u548cHTML\u76f8\u6bd4\uff0c\u5b83\u66f4\u8f7b\u91cf\u7ea7\u548c\u7075\u6d3b\uff0c\u56e0\u6b64\u5728\u6570\u636e\u4f20\u8f93\u548c\u5b58\u50a8\u65b9\u9762\u66f4\u52a0\u9ad8\u6548\u3002",source:"@site/docs/yakexamples/9-json.mdx",sourceDirName:"yakexamples",slug:"/yakexamples/json",permalink:"/docs/yakexamples/json",editUrl:"https://github.com/yaklang/docs/yakexamples/9-json.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"\u51fd\u6570\u5e93\uff1are - \u6b63\u5219\u8868\u8fbe\u5f0f",permalink:"/docs/yakexamples/regexp"},next:{title:"\u51fd\u6570\u5e93\uff1aservicescan - \u6307\u7eb9\u8bc6\u522b",permalink:"/docs/yakexamples/servicescan"}},p=[{value:"json \u7f16\u7801\u89e3\u7801",id:"json-\u7f16\u7801\u89e3\u7801",children:[{value:"<code>json.loads</code> \u628a JSON \u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a map",id:"jsonloads-\u628a-json-\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a-map",children:[]},{value:"<code>json.dumps</code> \u628a\u4efb\u610f\u6570\u636e\u8f6c\u4e3a JSON",id:"jsondumps-\u628a\u4efb\u610f\u6570\u636e\u8f6c\u4e3a-json",children:[]}]},{value:"Json Path \u6280\u672f",id:"json-path-\u6280\u672f",children:[{value:"\u63d0\u53d6\u6570\u636e",id:"\u63d0\u53d6\u6570\u636e",children:[]},{value:"\u66ff\u6362\u6570\u636e",id:"\u66ff\u6362\u6570\u636e",children:[]}]},{value:"<code>json.New</code> \u521b\u5efa\u53ef\u64cd\u4f5c JSON \u5bf9\u8c61",id:"jsonnew-\u521b\u5efa\u53ef\u64cd\u4f5c-json-\u5bf9\u8c61",children:[]}],m={toc:p},c="wrapper";function d(n){let{components:e,...a}=n;return(0,i.kt)(c,(0,t.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u51fd\u6570\u5e93json---\u4f18\u96c5\u5730\u5904\u7406json"},"\u51fd\u6570\u5e93\uff1ajson - \u4f18\u96c5\u5730\u5904\u7406JSON"),(0,i.kt)("p",null,"JSON\u662f\u4e00\u79cd\u8f7b\u91cf\u7ea7\u7684\u6570\u636e\u4ea4\u6362\u683c\u5f0f\u3002\u5b83\u4f7f\u7528\u6587\u672c\u683c\u5f0f\u6765\u4f20\u8f93\u7ed3\u6784\u5316\u6570\u636e\uff0c\u5305\u62ec\u6570\u7ec4\u3001\u5bf9\u8c61\u3001\u5b57\u7b26\u4e32\u3001\u6570\u5b57\u3001\u5e03\u5c14\u503c\u548cnull\u3002JSON\u683c\u5f0f\u88ab\u5e7f\u6cdb\u7528\u4e8eWeb\u5e94\u7528\u7a0b\u5e8f\u548cAPI\u4e2d\uff0c\u4f5c\u4e3a\u4e00\u79cd\u6570\u636e\u683c\u5f0f\uff0c\u4ee5\u5b9e\u73b0\u4e0d\u540c\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u7684\u6570\u636e\u4ea4\u6362\u3002JSON\u662f\u4e00\u79cd\u5e73\u53f0\u65e0\u5173\u7684\u683c\u5f0f\uff0c\u53ef\u4ee5\u4f7f\u7528\u8bb8\u591a\u7f16\u7a0b\u8bed\u8a00\u8fdb\u884c\u89e3\u6790\u548c\u751f\u6210\uff0c\u5305\u62ecJavaScript\u3001Python\u3001Java\u7b49\u3002JSON\u7684\u8bed\u6cd5\u7b80\u5355\u3001\u6613\u4e8e\u7406\u89e3\u548c\u9605\u8bfb\uff0c\u4e0eXML\u548cHTML\u76f8\u6bd4\uff0c\u5b83\u66f4\u8f7b\u91cf\u7ea7\u548c\u7075\u6d3b\uff0c\u56e0\u6b64\u5728\u6570\u636e\u4f20\u8f93\u548c\u5b58\u50a8\u65b9\u9762\u66f4\u52a0\u9ad8\u6548\u3002"),(0,i.kt)("p",null,"\u5728 Yaklang \u4e2d\u6211\u4eec\u4e0d\u4ec5\u652f\u6301\u57fa\u7840\u7684 JSON \u5904\u7406\u63a5\u53e3\uff0c\u540c\u65f6\u8fd8\u652f\u6301\u66f4\u52a0\u4f18\u96c5\u7684 JsonPath \u673a\u5236\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"JSON PATH \u662f\u4ec0\u4e48\uff1f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"JSON Path\u662f\u4e00\u79cd\u7528\u4e8e\u4eceJSON\u683c\u5f0f\u7684\u6570\u636e\u7ed3\u6784\u4e2d\u63d0\u53d6\u7279\u5b9a\u6570\u636e\u7684\u67e5\u8be2\u8bed\u8a00\uff0c\u7c7b\u4f3c\u4e8eXPath\u3002\u5b83\u63d0\u4f9b\u4e86\u4e00\u79cd\u901a\u7528\u7684\u65b9\u5f0f\u6765\u8bbf\u95ee\u548c\u64cd\u4f5cJSON\u6570\u636e\uff0c\u53ef\u4ee5\u7528\u4e8e\u7f16\u7a0b\u8bed\u8a00\u6216\u547d\u4ee4\u884c\u4e2d\uff0c\u4ee5\u5b9e\u73b0\u590d\u6742\u7684JSON\u6570\u636e\u5904\u7406\u548c\u5206\u6790\u3002"))),(0,i.kt)(l.Z,{toc:p,mdxType:"TOCInline"}),(0,i.kt)("h2",{id:"json-\u7f16\u7801\u89e3\u7801"},"json \u7f16\u7801\u89e3\u7801"),(0,i.kt)("p",null,"yak \u63d0\u4f9b\u4e86\u4e00\u4e2a\u7c7b\u4f3c Python \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"json.loads/dumps")," \u7684\u5904\u7406\u65b9\u5f0f"),(0,i.kt)("h3",{id:"jsonloads-\u628a-json-\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a-map"},(0,i.kt)("inlineCode",{parentName:"h3"},"json.loads")," \u628a JSON \u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a map"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'jsonRaw1 = `{"abc":123, "cde":"efg", "foo": "bar-123123", "azz": {"key1": "result2", "key2": 123, "e": ["abc", 111]}, "d": [1,2,3,"123"]}`\njsonRaw2 = `[1,23,4,"abc",true,false, {"abc": 123123, "dddd":"123"}]`\njsonRaw3 = `"123123123"`\njsonRaw4 = `123123`\njsonRaw5 = `false`\njsonRaw6 = `null`\ndump(json.loads(jsonRaw1))\ndump(json.loads(jsonRaw2))\ndump(json.loads(jsonRaw3))\ndump(json.loads(jsonRaw4))\ndump(json.loads(jsonRaw5))\ndump(json.loads(jsonRaw6))\n\n/*\nOUTPUT:\n\n(map[string]interface {}) (len=5) {\n (string) (len=3) "abc": (float64) 123,\n (string) (len=3) "cde": (string) (len=3) "efg",\n (string) (len=3) "foo": (string) (len=10) "bar-123123",\n (string) (len=3) "azz": (map[string]interface {}) (len=3) {\n  (string) (len=4) "key1": (string) (len=7) "result2",\n  (string) (len=4) "key2": (float64) 123,\n  (string) (len=1) "e": ([]interface {}) (len=2 cap=2) {\n   (string) (len=3) "abc",\n   (float64) 111\n  }\n },\n (string) (len=1) "d": ([]interface {}) (len=4 cap=4) {\n  (float64) 1,\n  (float64) 2,\n  (float64) 3,\n  (string) (len=3) "123"\n }\n}\n([]interface {}) (len=7 cap=8) {\n (float64) 1,\n (float64) 23,\n (float64) 4,\n (string) (len=3) "abc",\n (bool) true,\n (bool) false,\n (map[string]interface {}) (len=2) {\n  (string) (len=3) "abc": (float64) 123123,\n  (string) (len=4) "dddd": (string) (len=3) "123"\n }\n}\n(string) (len=9) "123123123"\n(float64) 123123\n(bool) false\n(interface {}) <nil>\n*/\n')),(0,i.kt)("h3",{id:"jsondumps-\u628a\u4efb\u610f\u6570\u636e\u8f6c\u4e3a-json"},(0,i.kt)("inlineCode",{parentName:"h3"},"json.dumps")," \u628a\u4efb\u610f\u6570\u636e\u8f6c\u4e3a JSON"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'a = ["123", true, false, "123123", 123, {"abc": 123},nil]\nprintln(json.dumps(a))\n// OUTPUT: ["123",true,false,"123123",123,{"abc":123},null]\n\na = {"abcccc": 123, "12": ["aaa", "123", {"a": 12, "arr": [123, true]}]}\nprintln(json.dumps(a))\n// OUTPUT: {"12":["aaa","123",{"a":12,"arr":[123,true]}],"abcccc":123}\n\na = false\nprintln(json.dumps(a))\n// OUTPUT: false\n\na = "asdfasdfasdf\\x00\\x0a\u4f60\u597d"\nprintln(json.dumps(a))\n// OUTPUT: "asdfasdfasdf\\u0000\\n\u4f60\u597d"\n\na = nil\nprintln(json.dumps(a))\n// OUTPUT: null\n')),(0,i.kt)("h2",{id:"json-path-\u6280\u672f"},"Json Path \u6280\u672f"),(0,i.kt)("p",null,"JSON Path\u662f\u4e00\u79cd\u7528\u4e8e\u4eceJSON\u683c\u5f0f\u7684\u6570\u636e\u7ed3\u6784\u4e2d\u63d0\u53d6\u7279\u5b9a\u6570\u636e\u7684\u67e5\u8be2\u8bed\u8a00\uff0c\u7c7b\u4f3c\u4e8eXPath\u3002\u5b83\u63d0\u4f9b\u4e86\u4e00\u79cd\u901a\u7528\u7684\u65b9\u5f0f\u6765\u8bbf\u95ee\u548c\u64cd\u4f5cJSON\u6570\u636e\uff0c\u53ef\u4ee5\u7528\u4e8e\u7f16\u7a0b\u8bed\u8a00\u6216\u547d\u4ee4\u884c\u4e2d\uff0c\u4ee5\u5b9e\u73b0\u590d\u6742\u7684JSON\u6570\u636e\u5904\u7406\u548c\u5206\u6790\u3002"),(0,i.kt)("p",null,"JSON Path\u4f7f\u7528\u4e00\u79cd\u7c7b\u4f3c\u4e8eXPath\u7684\u8868\u8fbe\u5f0f\u8bed\u6cd5\uff0c\u4ee5\u5339\u914dJSON\u5bf9\u8c61\u7684\u7279\u5b9a\u5143\u7d20\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0b\u662f\u4e00\u4e9b\u7b80\u5355\u7684JSON Path\u8868\u8fbe\u5f0f\u793a\u4f8b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"$"),"\uff1a\u8868\u793aJSON\u5bf9\u8c61\u7684\u6839\u5143\u7d20"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"$.name"),"\uff1a\u8868\u793a\u6839\u5143\u7d20\u4e0b\u7684\u201cname\u201d\u5c5e\u6027\u503c"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"$..name"),"\uff1a\u8868\u793a\u6240\u6709\u5bf9\u8c61\u4e2d\u7684\u201cname\u201d\u5c5e\u6027\u503c"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"$.people[*].name"),"\uff1a\u8868\u793a\u6839\u5143\u7d20\u4e0b\u7684\u201cpeople\u201d\u6570\u7ec4\u4e2d\u6240\u6709\u5bf9\u8c61\u7684\u201cname\u201d\u5c5e\u6027\u503c"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"$.people[?(@.age > 18)].name"),"\uff1a\u8868\u793a\u6839\u5143\u7d20\u4e0b\u7684\u201cpeople\u201d\u6570\u7ec4\u4e2d\u5e74\u9f84\u5927\u4e8e18\u5c81\u7684\u6240\u6709\u5bf9\u8c61\u7684\u201cname\u201d\u5c5e\u6027\u503c")),(0,i.kt)("p",null,"\u901a\u8fc7JSON Path\u8868\u8fbe\u5f0f\uff0c\u53ef\u4ee5\u8f7b\u677e\u5730\u4eceJSON\u6570\u636e\u7ed3\u6784\u4e2d\u63d0\u53d6\u7279\u5b9a\u7684\u6570\u636e\uff0c\u8fd9\u5728\u6570\u636e\u5206\u6790\u548c\u6570\u636e\u5904\u7406\u65b9\u9762\u975e\u5e38\u6709\u7528\u3002"),(0,i.kt)("h3",{id:"\u63d0\u53d6\u6570\u636e"},"\u63d0\u53d6\u6570\u636e"),(0,i.kt)("p",null,"\u63d0\u53d6\u6570\u636e\u662f Json Path \u7684\u5178\u578b\u7528\u9014\u4e4b\u4e00\uff0c\u6211\u4eec\u5728\u8fdb\u884c\u540e\u7eed\u7684\u6280\u672f\u63cf\u8ff0\u4e4b\u524d\uff0c\u5e94\u8be5\u5927\u81f4\u5bf9 Json Path \u6709\u4e00\u4e9b\u6df1\u5165\u7684\u4e86\u89e3\uff0c\u4e0b\u9762\u662f\u4e00\u4efd\u5e38\u89c1\u7684 JSONPath\u652f\u6301\u7684\u529f\u80fd\u5217\u8868\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5c5e\u6027\uff08property\uff09\u64cd\u4f5c\u7b26: ",(0,i.kt)("inlineCode",{parentName:"li"},"$")," \u7528\u4e8e\u8868\u793a\u6839\u8282\u70b9\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"@")," \u7528\u4e8e\u8868\u793a\u5f53\u524d\u8282\u70b9\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5c5e\u6027\u8bbf\u95ee\u64cd\u4f5c\u7b26: ",(0,i.kt)("inlineCode",{parentName:"li"},".")," \u7528\u4e8e\u8bbf\u95ee\u5c5e\u6027\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"[ ]")," \u7528\u4e8e\u8bbf\u95ee\u6570\u7ec4\u6216\u8005\u5c5e\u6027\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u7b5b\u9009\u5668\uff08Filter\uff09\u64cd\u4f5c\u7b26: ",(0,i.kt)("inlineCode",{parentName:"li"},"?()")," \u7528\u4e8e\u5728\u8868\u8fbe\u5f0f\u4e2d\u8fdb\u884c\u7b5b\u9009\u3002"),(0,i.kt)("li",{parentName:"ol"},"Wildcard\u64cd\u4f5c\u7b26: ",(0,i.kt)("inlineCode",{parentName:"li"},"*")," \u7528\u4e8e\u5339\u914d\u4efb\u610f\u5b57\u7b26\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"[*]")," \u7528\u4e8e\u5339\u914d\u4efb\u610f\u6570\u7ec4\u5143\u7d20\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u652f\u6301\u901a\u8fc7\u4e0b\u6807\u8bbf\u95ee\u6570\u7ec4\u5143\u7d20\uff0c\u4ee5\u53ca\u652f\u6301\u5207\u7247\u64cd\u4f5c\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u652f\u6301\u4f7f\u7528\u903b\u8f91\u8fd0\u7b97\u7b26 ",(0,i.kt)("inlineCode",{parentName:"li"},"&&")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"||")," \u8fdb\u884c\u6761\u4ef6\u7b5b\u9009\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u652f\u6301\u6bd4\u8f83\u8fd0\u7b97\u7b26 ",(0,i.kt)("inlineCode",{parentName:"li"},"==, !=, <, <=, >, >=")," \u4ee5\u53ca\u6b63\u5219\u8868\u8fbe\u5f0f\u8fd0\u7b97\u7b26 ",(0,i.kt)("inlineCode",{parentName:"li"},"=~")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"!~"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u652f\u6301\u805a\u5408\u64cd\u4f5c\u7b26 ",(0,i.kt)("inlineCode",{parentName:"li"},"min"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"max"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"sum"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"avg"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"size")," \u4ee5\u53ca ",(0,i.kt)("inlineCode",{parentName:"li"},"reverse")," \u7b49\u3002")),(0,i.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4e0d\u540c\u7684 JSONPath\u5b9e\u73b0\u53ef\u80fd\u4f1a\u7565\u6709\u5dee\u5f02\uff0c\u4e0d\u5b8c\u5168\u4e00\u81f4\u3002\u56e0\u6b64\uff0c\u5728\u4f7f\u7528JSONPath\u65f6\uff0c\u9700\u8981\u67e5\u770b\u5177\u4f53\u5b9e\u73b0\u7684\u6587\u6863\uff0c\u4ee5\u786e\u4fdd\u6240\u4f7f\u7528\u7684\u529f\u80fd\u80fd\u591f\u6b63\u786e\u5730\u5b9e\u73b0\u3002"),(0,i.kt)("h4",{id:"1-\u63d0\u53d6-json-\u5bf9\u8c61\u4e2d\u67d0\u4e00\u4e2a\u5b57\u6bb5\u7684\u503c"},"1. \u63d0\u53d6 JSON \u5bf9\u8c61\u4e2d\u67d0\u4e00\u4e2a\u5b57\u6bb5\u7684\u503c"),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u6211\u4eec\u8981\u63d0\u53d6\u4e00\u4e2a JSON \u6570\u636e\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," \u5b57\u6bb5\uff0c\u5982\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u5f85\u5904\u7406\u7684 JSON"',title:'"\u5f85\u5904\u7406\u7684','JSON"':!0},'{\n    "name": "YaklangUser",\n    "criticalList": [\n        {"key": "a1", "name": "b1"},\n        {"key": "a1-3", "name": "b4"},\n        {"key": "a2", "value": "c3"},\n        {"key": "a2-3", "value": "c6", "age": 12},\n        {"key": "a5", "anothorList": [\n            {"key": "in", "age": 30},\n            {"key": "in3", "age": 88}\n        ], "age": 14},\n        {"key": "a6", "age": 19}\n    ]\n}\n')),(0,i.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"json.Find()")," \u51fd\u6570\u6765\u8fdb\u884c\u5904\u7406\uff0c\u4ee3\u7801\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Yaklang \u4e2d\u7684 JSONPath \u63a5\u53e3\uff1ajson.Find"',title:'"Yaklang',"\u4e2d\u7684":!0,JSONPath:!0,'\u63a5\u53e3\uff1ajson.Find"':!0},'jsonRaw = `{\n    "name": "YaklangUser",\n    "criticalList": [\n        {"key": "a1", "name": "b1"},\n        {"key": "a1-3", "name": "b4"},\n        {"key": "a2", "value": "c3"},\n        {"key": "a2-3", "value": "c6", "age": 12},\n        {"key": "a5", "anothorList": [\n            {"key": "in", "age": 30},\n            {"key": "in3", "age": 88}\n        ], "age": 14},\n        {"key": "a6", "age": 19}\n    ]\n}`\n\n\nrootName = json.Find(jsonRaw, "$.name")\nprintf("Fetch `name` in root node: %v\\n", rootName)\n\n/*\nOUTPUT:\n    Fetch `name` in root node: YaklangUser\n*/\n')),(0,i.kt)("h4",{id:"2-\u63d0\u53d6-json-\u4e2d\u6240\u6709\u5bf9\u8c61\u4e2d-name-\u5b57\u6bb5"},"2. \u63d0\u53d6 JSON \u4e2d\u6240\u6709\u5bf9\u8c61\u4e2d ",(0,i.kt)("inlineCode",{parentName:"h4"},"name")," \u5b57\u6bb5"),(0,i.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u6211\u4eec\u4ec5\u9700\u8981\u628a ",(0,i.kt)("inlineCode",{parentName:"p"},"json.Find")," \u4e2d\u7684\u89c4\u5219\u4fee\u6539\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"$..name"),"\uff0c\u5373\u53ef\u5b8c\u6210"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="\u63d0\u53d6\u6240\u6709 name \u5b57\u6bb5"',title:'"\u63d0\u53d6\u6240\u6709',name:!0,'\u5b57\u6bb5"':!0},'\nresults = json.Find(jsonRaw, "$..name")\ndump(results)\n/*\nOutput:\n\n([]interface {}) (len=3 cap=4) {\n (string) (len=11) "YaklangUser",\n (string) (len=2) "b1",\n (string) (len=2) "b4"\n}\n*/\n')),(0,i.kt)("h4",{id:"3-\u64cd\u4f5c-json-\u4e2d\u7684\u6570\u7ec4"},"3. \u64cd\u4f5c JSON \u4e2d\u7684\u6570\u7ec4"),(0,i.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u4e0a\u8ff0\u7684\u64cd\u4f5c\uff0c\u53ef\u4ee5\u5b9e\u73b0\u64cd\u4f5c\u4e00\u4e2a\u6216\u8005\u9012\u5f52\u67e5\u627e\u6240\u6709 JSON \u4e2d\u7684\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u6280\u80fd\u975e\u5e38\u5b9e\u7528\uff0c\u80fd\u5e2e\u52a9\u6211\u4eec\u5feb\u901f\u63d0\u53d6\u6570\u636e\u3002\u540c\u65f6\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528 Json Path \u64cd\u4f5c JSON \u4e2d\u7684\u6570\u7ec4\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u4ecd\u7136\u9488\u5bf9\u6848\u4f8b\u4e2d\u7684 JSON\uff0c\u5982\u679c\u8981\u63d0\u53d6\u6570\u7ec4\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," \u6216\u8005\u76f4\u63a5\u64cd\u4f5c\u8282\u70b9\uff0c\u5e94\u8be5\u600e\u4e48\u64cd\u4f5c\u5462\uff1f\u76f4\u89c2\u6765\u8bf4\uff0c\u6211\u4eec\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"[ ]")," \u6765\u64cd\u4f5c\u6570\u7ec4\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="\u63d0\u53d6 criticalList \u4e2d\u7b2c\u4e8c\u4e2a\u5143\u7d20"',title:'"\u63d0\u53d6',criticalList:!0,'\u4e2d\u7b2c\u4e8c\u4e2a\u5143\u7d20"':!0},'jsonRaw = `{\n    "name": "YaklangUser",\n    "criticalList": [\n        {"key": "a1", "name": "b1"},\n        {"key": "a1-3", "name": "b4"},\n        {"key": "a2", "value": "c3"},\n        {"key": "a2-3", "value": "c6", "age": 12},\n        {"key": "a5", "anothorList": [\n            {"key": "in", "age": 30},\n            {"key": "in3", "age": 88}\n        ], "age": 14},\n        {"key": "a6", "age": 19}\n    ]\n}`\n\nresults = json.Find(jsonRaw, "$.criticalList[1]")\ndump(results)\n/*\nOutput:\n\n(map[string]interface {}) (len=2) {\n (string) (len=3) "key": (string) (len=4) "a1-3",\n (string) (len=4) "name": (string) (len=2) "b4"\n}\n*/\n')),(0,i.kt)("p",null,"\u5b83\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"json.Find()")," \u51fd\u6570\uff0c\u8be5\u51fd\u6570\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"$")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},".criticalList[1]")," \u4f5c\u4e3a\u53c2\u6570\u6765\u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON Path")," \u67e5\u8be2\u8bed\u6cd5\u4e2d\u8981\u67e5\u627e\u7684\u4f4d\u7f6e\u3002"),(0,i.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"$")," \u8868\u793a\u4ece\u6839\u5f00\u59cb\u67e5\u627e\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},".criticalList[1]")," \u8868\u793a\u627e\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"criticalList")," \u4e2d\u7684\u7b2c\u4e8c\u4e2a\u5143\u7d20\uff08\u6570\u7ec4\u4e0b\u6807\u4ece0\u5f00\u59cb\uff09\u3002\u6700\u540e\uff0c\u5b83\u5c06\u7ed3\u679c\u6253\u5370\u51fa\u6765\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},'results["key"]')," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},'results["name"]')," \u6765\u5206\u522b\u83b7\u53d6\u5b57\u5178\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),' \u503c\uff0c\u5176\u503c\u5206\u522b\u4e3a "a1-3" \u548c "b4"\u3002'),(0,i.kt)("p",null,"\u6211\u4eec\u628a\u4e0a\u8ff0\u4ee3\u7801\u7a0d\u4f5c\u4fee\u6539\uff0c\u8fd9\u6b21\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"$.criticalList[*].name")," \u4f5c\u4e3a\u53c2\u6570\u6765\u67e5\u8be2 JSON Path\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="\u63d0\u53d6 criticalList \u4e2d\u7684 name"',title:'"\u63d0\u53d6',criticalList:!0,"\u4e2d\u7684":!0,'name"':!0},'results = json.Find(jsonRaw, "$.criticalList[*].name")\ndump(results)\n/*\nOutput:\n\n([]interface {}) (len=2 cap=2) {\n (string) (len=2) "b1",\n (string) (len=2) "b4"\n}\n*/\n')),(0,i.kt)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0cJSON Path \u8868\u8fbe\u5f0f ",(0,i.kt)("inlineCode",{parentName:"p"},"$.criticalList[*].name")," \u8868\u793a\u67e5\u8be2 JSON \u6570\u636e\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"criticalList")," \u5217\u8868\u4e2d\u6bcf\u4e2a\u5143\u7d20\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," \u5c5e\u6027\u3002 ",(0,i.kt)("inlineCode",{parentName:"p"},"[*]")," \u8868\u793a\u5339\u914d ",(0,i.kt)("inlineCode",{parentName:"p"},"criticalList")," \u5217\u8868\u4e2d\u7684\u6240\u6709\u5143\u7d20\uff0c\u800c ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," \u8868\u793a\u67e5\u8be2\u6bcf\u4e2a\u5143\u7d20\u4e2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," \u5c5e\u6027\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"json.Find()")," \u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u67e5\u8be2\u7ed3\u679c\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"[]interface{}")," \u7c7b\u578b\u7684\u5207\u7247\uff0c\u5176\u4e2d\u6bcf\u4e2a\u5143\u7d20\u90fd\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u7c7b\u578b\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u5b83\u8fd4\u56de\u4e86\u5305\u542b\u4e24\u4e2a\u5143\u7d20\u7684\u5207\u7247\uff0c\u5373 ",(0,i.kt)("inlineCode",{parentName:"p"},'["b1", "b4"]'),"\uff0c\u8fd9\u662f JSON \u6570\u636e\u4e2d ",(0,i.kt)("inlineCode",{parentName:"p"},"criticalList")," \u5217\u8868\u4e2d\u7684\u4e24\u4e2a\u5143\u7d20\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," \u5c5e\u6027\u7684\u503c\u3002\u6700\u540e\uff0c\u8fd9\u4e2a\u4ee3\u7801\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"dump()")," \u51fd\u6570\u5c06\u7ed3\u679c\u6253\u5370\u5230\u63a7\u5236\u53f0\u4e0a\u3002"),(0,i.kt)("h4",{id:"4-\u4f7f\u7528\u5e26\u6761\u4ef6\u7684\u7b5b\u9009\u5668"},"4. \u4f7f\u7528\u5e26\u6761\u4ef6\u7684\u7b5b\u9009\u5668"),(0,i.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u5c06\u4f1a\u5b66\u4e60\u5230\u66f4\u9ad8\u7ea7\u7684 Json Path \u7528\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"[ ]")," \u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"?()")," \u914d\u5408\u5b9e\u73b0\u5bf9\u8c61\u7684\u5feb\u901f\u7b5b\u9009\u3002"),(0,i.kt)("h3",{id:"\u66ff\u6362\u6570\u636e"},"\u66ff\u6362\u6570\u636e"),(0,i.kt)("h2",{id:"jsonnew-\u521b\u5efa\u53ef\u64cd\u4f5c-json-\u5bf9\u8c61"},(0,i.kt)("inlineCode",{parentName:"h2"},"json.New")," \u521b\u5efa\u53ef\u64cd\u4f5c JSON \u5bf9\u8c61"))}d.isMDXComponent=!0},86010:(n,e,a)=>{function t(n){var e,a,i="";if("string"==typeof n||"number"==typeof n)i+=n;else if("object"==typeof n)if(Array.isArray(n))for(e=0;e<n.length;e++)n[e]&&(a=t(n[e]))&&(i&&(i+=" "),i+=a);else for(e in n)n[e]&&(i&&(i+=" "),i+=e);return i}a.d(e,{Z:()=>i});const i=function(){for(var n,e,a=0,i="";a<arguments.length;)(n=arguments[a++])&&(e=t(n))&&(i&&(i+=" "),i+=e);return i}}}]);