(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[1562],{3905:(t,n,e)=>{"use strict";e.d(n,{Zo:()=>m,kt:()=>c});var r=e(67294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function l(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var o=r.createContext({}),p=function(t){var n=r.useContext(o),e=n;return t&&(e="function"==typeof t?t(n):s(s({},n),t)),e},m=function(t){var n=p(t.components);return r.createElement(o.Provider,{value:n},t.children)},d="mdxType",g={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(t,n){var e=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),d=p(e),k=a,c=d["".concat(o,".").concat(k)]||d[k]||g[k]||i;return e?r.createElement(c,s(s({ref:n},m),{},{components:e})):r.createElement(c,s({ref:n},m))}));function c(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var i=e.length,s=new Array(i);s[0]=k;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=t,l[d]="string"==typeof t?t:a,s[1]=l;for(var p=2;p<i;p++)s[p]=e[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,e)}k.displayName="MDXCreateElement"},73143:(t,n,e)=>{"use strict";e.r(n),e.d(n,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>l,toc:()=>o,default:()=>m});var r=e(22122),a=(e(67294),e(3905));const i={sidebar_position:1},s="[str] \u5b57\u7b26\u4e32\u5de5\u5177\u5e93",l={unversionedId:"buildinlibs/lib_str",id:"buildinlibs/lib_str",isDocsHomePage:!1,title:"[str] \u5b57\u7b26\u4e32\u5de5\u5177\u5e93",description:"Yak \u7684\u5b57\u7b26\u4e32\u6211\u4eec\u5728\u8bed\u8a00\u57fa\u7840\u4e2d\uff0c\u6709\u4e00\u4e9b\u7b80\u5355\u7684\u8bb2\u89e3\uff0c\u4f46\u662f\u6211\u4eec\u6ca1\u6709\u8bb2\u5173\u4e8e\u5b57\u7b26\u4e32\u7684\u5176\u4ed6\u5176\u4ed6\u64cd\u4f5c\uff0c\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4f1a\u7740\u91cd\u8bb2\u89e3 Yak \u81ea\u5e26\u7684\u5b57\u7b26\u4e32\u5904\u7406\u51fd\u6570\u4ee5\u53ca\u76f8\u5173\u7ec6\u8282\u95ee\u9898",source:"@site/docs/buildinlibs/lib_str.md",sourceDirName:"buildinlibs",slug:"/buildinlibs/lib_str",permalink:"/docs/buildinlibs/lib_str",editUrl:"https://github.com/yaklang/docs/buildinlibs/lib_str.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u5165\u95e8\uff1a\u5341\u5206\u949f\u6559\u7a0b",permalink:"/docs/yak-basic/old-memory"},next:{title:"[codec] \u7f16\u7801\u89e3\u7801\u5e93",permalink:"/docs/buildinlibs/lib_codec"}},o=[{value:"Yak \u4e2d\u5b57\u7b26\u4e32\u6709\u54ea\u4e9b\u5f62\u6001\uff1f",id:"yak-\u4e2d\u5b57\u7b26\u4e32\u6709\u54ea\u4e9b\u5f62\u6001\uff1f",children:[]},{value:"\u5b57\u7b26\u4e32\u7684\u57fa\u672c\u64cd\u4f5c",id:"\u5b57\u7b26\u4e32\u7684\u57fa\u672c\u64cd\u4f5c",children:[{value:"\u53d6\u5b50\u5b57\u7b26\u4e32",id:"\u53d6\u5b50\u5b57\u7b26\u4e32",children:[]},{value:"\u7ee7\u627f Golang \u7684\u5b57\u7b26\u4e32\u5904\u7406\u5305 <code>strings</code>",id:"\u7ee7\u627f-golang-\u7684\u5b57\u7b26\u4e32\u5904\u7406\u5305-strings",children:[]}]},{value:"yak \u72ec\u95e8\u7edd\u6280",id:"yak-\u72ec\u95e8\u7edd\u6280",children:[{value:"\u57fa\u7840\u5b57\u7b26\u4e32\u64cd\u4f5c\u8865\u5145",id:"\u57fa\u7840\u5b57\u7b26\u4e32\u64cd\u4f5c\u8865\u5145",children:[]},{value:"\u5b57\u7b26\u4e32 <code>Slice/List</code> \u4e0e <code>Map/Dict</code> \u64cd\u4f5c\u51fd\u6570",id:"\u5b57\u7b26\u4e32-slicelist-\u4e0e-mapdict-\u64cd\u4f5c\u51fd\u6570",children:[]},{value:"\u6e17\u900f\u6d4b\u8bd5\u53ef\u80fd\u9700\u8981\u4f7f\u7528\u7684\u51fd\u6570",id:"\u6e17\u900f\u6d4b\u8bd5\u53ef\u80fd\u9700\u8981\u4f7f\u7528\u7684\u51fd\u6570",children:[]},{value:"\u7279\u6b8a\u64cd\u4f5c",id:"\u7279\u6b8a\u64cd\u4f5c",children:[]}]},{value:"\u51fd\u6570\u8868\u4ee5\u53ca\u7528\u6cd5",id:"\u51fd\u6570\u8868\u4ee5\u53ca\u7528\u6cd5",children:[]}],p={toc:o};function m(t){let{components:n,...e}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"str-\u5b57\u7b26\u4e32\u5de5\u5177\u5e93"},"[str]"," \u5b57\u7b26\u4e32\u5de5\u5177\u5e93"),(0,a.kt)("p",null,"Yak \u7684\u5b57\u7b26\u4e32\u6211\u4eec\u5728\u8bed\u8a00\u57fa\u7840\u4e2d\uff0c\u6709\u4e00\u4e9b\u7b80\u5355\u7684\u8bb2\u89e3\uff0c\u4f46\u662f\u6211\u4eec\u6ca1\u6709\u8bb2\u5173\u4e8e\u5b57\u7b26\u4e32\u7684\u5176\u4ed6\u5176\u4ed6\u64cd\u4f5c\uff0c\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4f1a\u7740\u91cd\u8bb2\u89e3 Yak \u81ea\u5e26\u7684\u5b57\u7b26\u4e32\u5904\u7406\u51fd\u6570\u4ee5\u53ca\u76f8\u5173\u7ec6\u8282\u95ee\u9898"),(0,a.kt)("h2",{id:"yak-\u4e2d\u5b57\u7b26\u4e32\u6709\u54ea\u4e9b\u5f62\u6001\uff1f"},"Yak \u4e2d\u5b57\u7b26\u4e32\u6709\u54ea\u4e9b\u5f62\u6001\uff1f"),(0,a.kt)("p",null,"\u548c Golang \u7c7b\u4f3c\uff0c\u5728 Yak \u4e2d\uff0c\u6211\u4eec\u7684\u5b57\u7b26\u4e32\u652f\u6301\u5982\u4e0b\u5b9a\u4e49"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'strValue := "this is a str"\nstrValue2 := `this is a str block\nmulti-lines\nand more...\n`\n\nprintln("strValue: ", strValue)\nprintln("strValue2: ", strValue2)\n\n/*\nOUTPUT:\n\nstrValue:  this is a str\nstrValue2:  this is a str block\nmulti-lines\nand more...\n*/\n')),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u5176\u4ed6\u8bed\u8a00\u7684\u4e0d\u540c")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u6ce8\u610f"),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol"},"\u5355\u5f15\u53f7\u53ea\u80fd\u7528\u4e8e\u5305\u88f9 byte, \u4e0d\u80fd\u7528\u4e8e\u5305\u88f9\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6587\u672c\u5757\u7684\u5b9a\u4e49\u4e0e Python \u4e5f\u4e0d\u540c\uff0c\u5355\u4e2a\u53cd\u5f15\u53f7\u5373\u53ef")))),(0,a.kt)("h2",{id:"\u5b57\u7b26\u4e32\u7684\u57fa\u672c\u64cd\u4f5c"},"\u5b57\u7b26\u4e32\u7684\u57fa\u672c\u64cd\u4f5c"),(0,a.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u503c\u5f97\u6ce8\u610f\u7684\u662f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5728 yak \u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"str")," \u662f\u5b57\u7b26\u4e32\u5305\u7684\u5305\u540d\uff0c\u7136\u800c\u4e00\u822c\u5728 Golang \u4e2d\uff0c\u5b57\u7b26\u4e32\u64cd\u4f5c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"strings")," \u4f5c\u4e3a\u5305\u540d"))),(0,a.kt)("h3",{id:"\u53d6\u5b50\u5b57\u7b26\u4e32"},"\u53d6\u5b50\u5b57\u7b26\u4e32"),(0,a.kt)("p",null,"\u4e0e\u5927\u591a\u6570\u8bed\u8a00\u90fd\u4e00\u6837\uff0cyak \u652f\u6301\u4f7f\u7528\u7d22\u5f15\u6765\u53d6\u5b50\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'strValue := "abcdefghijk"\nsubStr1 := strValue[2:6]\nsubStr2 := strValue[:6]\nsubStr3 := strValue[3:]\n// subStr4 := strValue[-3:]   # \u8fd9\u4e2a\u6682\u65f6\u662f\u4e0d\u652f\u6301\u7684\uff0c\u5982\u679c\u9047\u5230\u8fd9\u79cd\u60c5\u51b5\uff0c\u8bf7\u4f7f\u7528 subStr\nsubStr4 := strValue[len(strValue)-3:]   # \u8fd9\u4e2a\u6682\u65f6\u662f\u4e0d\u652f\u6301\u7684\uff0c\u5982\u679c\u9047\u5230\u8fd9\u79cd\u60c5\u51b5\uff0c\u8bf7\u4f7f\u7528 subStr4 := strValue[len(strValue)-3:]\nprintln("subStr1: ", subStr1)\nprintln("subStr2: ", subStr2)\nprintln("subStr3: ", subStr3)\nprintln("subStr4: ", subStr4)\n\n/*\nOUTPUT:\n\nsubStr1:  cdef\nsubStr2:  abcdef\nsubStr3:  defghijk\nsubStr4:  ijk\n*/\n')),(0,a.kt)("h3",{id:"\u7ee7\u627f-golang-\u7684\u5b57\u7b26\u4e32\u5904\u7406\u5305-strings"},"\u7ee7\u627f Golang \u7684\u5b57\u7b26\u4e32\u5904\u7406\u5305 ",(0,a.kt)("inlineCode",{parentName:"h3"},"strings")),(0,a.kt)("p",null,"\u6211\u4eec\u770b\u5982\u4e0b\u5217\u8868\uff0c\u5373\u53ef\u77e5\u9053 Yak \u652f\u6301\u7684 Golang \u539f\u751f ",(0,a.kt)("inlineCode",{parentName:"p"},"strings")," \u51fd\u6570\uff0c\u5bf9\u6709 Golang \u57fa\u7840\u7684\u540c\u5b66\u6765\u8bf4\uff0c\u5b66\u4e60\u65e0\u538b\u529b\uff0c\u53ef\u4ee5\u65e0\u7f1d\u8f6c\u6362"),(0,a.kt)("p",null,"\u5177\u4f53\u7684\u6587\u6863\uff0c\u6211\u4eec\u53ef\u4ee5\u53c2\u8003 Golang \u5b98\u65b9\u6587\u6863\uff0c\u4ee5\u4e0b\u662f Yak \u652f\u6301\u7684\u57fa\u7840\u5b57\u7b26\u4e32\u51fd\u6570\uff0c\u5177\u4f53\u51fd\u6570\u7684\u7528\u6cd5\uff0c\u6211\u4eec\u53ef\u4ee5\u5728"),(0,a.kt)("p",null," ",(0,a.kt)("a",{parentName:"p",href:"https://golang.org/pkg/strings/"},"strings \u5b98\u65b9\u6587\u6863\uff1ahttps://golang.org/pkg/strings/")," "),(0,a.kt)("p",null," \u4e2d\u627e\u5230\u5982\u4e0b\u51fd\u6570\u7684\u5b57\u7b26\u4e32\u64cd\u4f5c\u5185\u5bb9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"IndexAny\nStartWith\nEndWith\nTitle\nJoin\nTrimLeft\nTrimPrefix\nTrimRight\nTrimSuffix\nTrim\nSplit\nSplitAfter\nSplitAfterN\nSplitN\nToLower\nToUpper\nHasPrefix\nHasSuffix\nRepeat\nToTitleSpecial\nToTitle\nContains\nReplaceAll\nReplace\nNewReader\nIndex\nCount\nCompare\nContainsAny\nEqualFold\nFields\nIndexByte\nLastIndex\nLastIndexAny\nLastIndexByte\nToLowerSpecial\nToUpperSpecial\nToValidUTF8\n")),(0,a.kt)("h2",{id:"yak-\u72ec\u95e8\u7edd\u6280"},"yak \u72ec\u95e8\u7edd\u6280"),(0,a.kt)("h3",{id:"\u57fa\u7840\u5b57\u7b26\u4e32\u64cd\u4f5c\u8865\u5145"},"\u57fa\u7840\u5b57\u7b26\u4e32\u64cd\u4f5c\u8865\u5145"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#f"},"\u76f8\u5f53\u4e8e ",(0,a.kt)("inlineCode",{parentName:"a"},"fmt.Sprintf")," \u7684\u5feb\u6377\u51fd\u6570 ",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.f(var_1: string, vars: ...interface {}): string"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#endswith"},"\u5224\u65ad\u5b57\u7b26\u4e32\u524d\u7f00 ",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.EndsWith(var_1: string, var_2: string): bool"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#StartsWith"},"\u5224\u65ad\u5b57\u7b26\u4e32\u4ee5\u6307\u5b9a\u5b57\u7b26\u5f00\u59cb ",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.StartsWith(var_1: string, var_2: string): bool"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#LowerAndTrimSpace"},"\u628a\u5b57\u7b26\u4e32\u5168\u90e8\u5c0f\u5199\uff0c\u5e76\u53bb\u9664\u5de6\u53f3\u7a7a\u767d ",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.LowerAndTrimSpace(var_1: string): string"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#SplitAndTrim"},"Split\u4e4b\u540e\u628a\u5143\u7d20\u4e24\u8fb9\u7684\u7a7a\u767d\u79fb\u9664 ",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.SplitAndTrim(var_1: string, var_2: string): []string"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#JsonToMap"},"\u628a Json \u5b57\u7b26\u4e32\u8f6c\u6362\u6210 ",(0,a.kt)("inlineCode",{parentName:"a"},"map[string]string")," ",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.JsonToMap(var_1: string): map[string]string"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#JsonToMapList"},"\u628a Json \u5b57\u7b26\u4e32\u8f6c\u6362\u6210 ",(0,a.kt)("inlineCode",{parentName:"a"},"[]map[string]string")," ",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.JsonToMapList(var_1: string): []map[string]string"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#JsonStreamToMapList"},"\u4f7f\u7528 io.Reader \u8bfb\u53d6 Json \u6570\u636e\u6d41 ",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.JsonStreamToMapList(var_1: io.Reader): []map[string]interface "),"{}")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#PathJoin"},"\u628a\u5b57\u7b26\u4e32\u6570\u7ec4\u4f5c\u4e3a Path \u8fdb\u884c\u62fc\u63a5",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.PathJoin(vars: ...string): string"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#RegexpMatch"},"\u6b63\u5219\u5339\u914d ",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.RegexpMatch(var_1: interface {}, var_2: string): bool"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#ToJsonIndentStr"},"\u628a\u4e00\u4e2a\u5bf9\u8c61\u8f6c\u53d8\u6210 Json \u5b57\u7b26\u4e32\uff0c\u505a\u597d\u9501\u8fdb\u5c55\u793a ",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.ToJsonIndentStr(var_1: interface {}): string")))),(0,a.kt)("h3",{id:"\u5b57\u7b26\u4e32-slicelist-\u4e0e-mapdict-\u64cd\u4f5c\u51fd\u6570"},"\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Slice/List")," \u4e0e ",(0,a.kt)("inlineCode",{parentName:"h3"},"Map/Dict")," \u64cd\u4f5c\u51fd\u6570"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#StringContainsAnyOfSubString"},"\u5224\u65ad\u5b57\u7b26\u4e32\u662f\u5426\u5305\u542b\u6307\u5b9a\u7684\u6570\u7ec4\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a\u5143\u7d20 ",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.StringContainsAnyOfSubString(var_1: string, var_2: []string): bool"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#StringSliceContains"},"\u5224\u65ad StringSlice \u4e2d\u662f\u4e0d\u662f\u5305\u542b\u6307\u5b9a\u5143\u7d20 ",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.StringSliceContains(var_1: []string, var_2: string): bool"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#StringSliceContainsAll"},"\u5224\u65ad StringSlice \u4e2d\u662f\u4e0d\u662f\u5305\u542b\u540e\u7eed\u6240\u6709\u5b57\u7b26\u4e32",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.StringSliceContainsAll(var_1: []string, vars: ...string): bool"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#RemoveRepeat"},"\u79fb\u9664 ",(0,a.kt)("inlineCode",{parentName:"a"},"List/Slice")," \u4e2d\u91cd\u590d\u7684\u5143\u7d20",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.RemoveRepeat(var_1: []string): []string"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#ParamsGetOr"},"\u4ece\u4e00\u4e2a\u5b57\u5178\u4e2d\u53d6 key \u5bf9\u5e94\u7684\u503c\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"a"},"idEmptyDefault")," \u7684\u9ed8\u8ba4\u503c",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.ParamsGetOr(var_1: map[string]string, key: string, ifEmptyDefault: string): string")))),(0,a.kt)("h3",{id:"\u6e17\u900f\u6d4b\u8bd5\u53ef\u80fd\u9700\u8981\u4f7f\u7528\u7684\u51fd\u6570"},"\u6e17\u900f\u6d4b\u8bd5\u53ef\u80fd\u9700\u8981\u4f7f\u7528\u7684\u51fd\u6570"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#isstrongpassword"},"\u5224\u65ad\u4e00\u4e2a\u5bc6\u7801\u662f\u4e0d\u662f\u5f3a\u5bc6\u7801 ",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.IsStrongPassword(var_1: string): bool"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#hostport"},"\u628a\u57df\u540d\u548c\u7aef\u53e3\u62fc\u63a5\u6210\u4e00\u4e2a\u5730\u5740 ",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.HostPort(var_1: string, var_2: interface {}): string"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#ipv4tocclassnetwork"},"\u8ba9 IPv4 \u5730\u5740\u9000\u5316\u6210\u4e00\u4e2a C \u6bb5\u5730\u5740 ",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.IPv4ToCClassNetwork(var_1: string): (string, error)"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#isipv4"},"\u5224\u65ad\u4e00\u4e2a\u5b57\u7b26\u4e32\u662f\u4e0d\u662f IPv4 ",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.IsIPv4(var_1: string): bool"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#isipv6"},"\u5224\u65ad\u4e00\u4e2a\u5b57\u7b26\u4e32\u662f\u4e0d\u662f IPv6 ",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.IsIPv6(var_1: string): bool"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#parsestringtohostport"},"\u628a\u5b57\u7b26\u4e32\uff08URL/Addr\uff09\u4e2d\u7684\u4e3b\u673a\u548c\u7aef\u53e3\u89e3\u6790\u51fa\u6765 ",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.ParseStringToHostPort(var_1: string): (host string, port int, _ error)"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#parsestringtohosts"},"\u628a\u4ee5",(0,a.kt)("inlineCode",{parentName:"a"},","),"\u5206\u5272\u7684\u5b57\u7b26\u4e32\u89e3\u6790\u6210\u4e3b\u673a\u4fe1\u606f\uff0c\u53ef\u89e3\u6790\u5185\u5bb9\u4e3a\u7f51\u6bb5\u3001IP\u3001\u57df\u540d\u7b49 ",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.ParseStringToHosts(var_1: string): []string"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#parsestringtolines"},"\u628a\u5b57\u7b26\u4e32\u6309\u884c\u6765\u5206\u5272 ",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.ParseStringToLines(var_1: string): []string"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#parsestringtoports"},"\u628a\u5b57\u7b26\u4e32\uff08\u7aef\u53e3\u548c\u7aef\u53e3\u7684\u96c6\u5408\u4f8b\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"a"},"22,3306,8080-8088"),"\uff09\u89e3\u6790\u6210\u5355\u72ec\u7aef\u53e3 ",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.ParseStringToPorts(var_1: string): []int"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#parsestringtourls"},"\u628a\u5b57\u7b26\u4e32\uff08\u7f51\u7edc\u5730\u5740\uff09\u8f6c\u53d8\u6210\u53ef\u80fd\u7684\u6807\u51c6\u683c\u5f0f\u7684 Url ",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.ParseStringToUrls(vars: ...string): []string"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#parsestringtourlswith3w"},"\u628a\u5b57\u7b26\u4e32\uff08\u7f51\u7edc\u5730\u5740\uff09\u8f6c\u53d8\u6210\u53ef\u80fd\u7684\u6807\u51c6\u683c\u5f0f\u7684 Url\uff08\u53ef\u80fd\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"a"},"www")," \u4f5c\u4e3a\u57df\u540d\u5f00\u5934\uff09",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.ParseStringToUrlsWith3W(vars: ...string): []string"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#randsecret"},"\u968f\u673a\u751f\u6210\u4e00\u4e2a\u6307\u5b9a\u957f\u5ea6\u7684\u968f\u673a\u5b57\u7b26\u4e32\uff0c\u53ef\u4f5c\u4e3a\u5bc6\u7801 ",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.RandSecret(var_1: int): string"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#randstr"},"\u968f\u673a\u751f\u6210\u4e00\u4e2a\u6307\u5b9a\u957f\u5ea6\u5b57\u7b26\u4e32 ",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.RandStr(var_1: int): string")))),(0,a.kt)("h3",{id:"\u7279\u6b8a\u64cd\u4f5c"},"\u7279\u6b8a\u64cd\u4f5c"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#NewFilter"},"\u521b\u5efa\u4e00\u4e2a\u5b57\u7b26\u4e32\u53bb\u91cd\u5de5\u5177 ",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.NewFilter(): *filter.StringFilter"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#Grok"},(0,a.kt)("strong",{parentName:"a"},"\u3010\u91cd\u8981\u3011"),"\uff1aGrok \u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"a"},"fn str.Grok(var_1: string, var_2: string): yaklib.GrokResult")))),(0,a.kt)("h2",{id:"\u51fd\u6570\u8868\u4ee5\u53ca\u7528\u6cd5"},"\u51fd\u6570\u8868\u4ee5\u53ca\u7528\u6cd5"),(0,a.kt)("h4",{id:"f"},"f"),(0,a.kt)("p",null,"\u7528\u6cd5\u540c Golang ",(0,a.kt)("inlineCode",{parentName:"p"},"fmt.Sprintf(fmt: string, vars: interface...) string"),"\uff1b \u7565"),(0,a.kt)("h4",{id:"endswith"},"EndsWith"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'println(str.EndsWith("abcdef", "abc"))  // false\nprintln(str.EndsWith("abcdef", "def"))  // true\n')),(0,a.kt)("h4",{id:"isstrongpassword"},"IsStrongPassword"),(0,a.kt)("p",null,"\u5224\u65ad\u4e00\u4e2a\u5b57\u7b26\u4e32\u4f5c\u4e3a\u5bc6\u7801\u7684\u8bdd\uff0c\u7b97\u4e0d\u7b97\u5f3a\u5bc6\u7801"),(0,a.kt)("p",null,"\u8981\u6c42\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5927\u4e8e 8 \u4f4d"),(0,a.kt)("li",{parentName:"ol"},"\u5305\u542b\u7279\u6b8a\u5b57\u7b26\u4e32"),(0,a.kt)("li",{parentName:"ol"},"\u5927\u5c0f\u5199\u540c\u65f6\u5305\u542b"),(0,a.kt)("li",{parentName:"ol"},"\u5305\u542b\u6570\u5b57")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'println(str.IsStrongPassword("abcdefghijk"))       // false\nprintln(str.IsStrongPassword("abc#52G"))           // false\nprintln(str.IsStrongPassword("abcdefgh.G1ijk"))    // true\nprintln(str.IsStrongPassword("abcdefghij.$t2Tk"))  // true\n')),(0,a.kt)("h4",{id:"hostport"},"HostPort"),(0,a.kt)("p",null,"\u628a\u57df\u540d\u6216\u8005IP+\u7aef\u53e3\u62fc\u6210\u4e00\u4e2a\u7f51\u7edc\u5730\u5740"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'println(str.HostPort("192.168.1.1", 80))\nprintln(str.HostPort("192.168.1.1", "80"))\nprintln(str.HostPort("example.com", 80))\nprintln(str.HostPort("[::1]", 80))\nprintln(str.HostPort("::1", 80))\nprintln(str.HostPort("127.0.0.1", 80))\n\n/*\nOUTPUT:\n\n192.168.1.1:80\n192.168.1.1:80\nexample.com:80\n[::1]:80\n[::1]:80\n127.0.0.1:80\n*/\n')),(0,a.kt)("h4",{id:"ipv4tocclassnetwork"},"IPv4ToCClassNetwork"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// \u8f85\u52a9\u6253\u5370\u7ed3\u679c\ndef printTwoResult(res) {\n    arg1, err = res;\n    if err != nil {\n        println("ERR:", err)\n    } else {\n        println(arg1)\n    }\n}\n\nprintTwoResult(str.IPv4ToCClassNetwork("127.0.0.1"))\nprintTwoResult(str.IPv4ToCClassNetwork("192.168.1.5"))\nprintTwoResult(str.IPv4ToCClassNetwork("8.8.8.8"))\nprintTwoResult(str.IPv4ToCClassNetwork("example.com"))\nprintTwoResult(str.IPv4ToCClassNetwork("[::1]"))\n\n/*\nOUTPUT:\n\n127.0.0.0/24\n192.168.1.0/24\n8.8.8.0/24\nERR: invalid ipv4: example.com\nERR: invalid ipv4: [::1]\n*/\n')),(0,a.kt)("h4",{id:"parsestringtohostport"},"ParseStringToHostPort"),(0,a.kt)("p",null,"\u628a\u5b57\u7b26\u4e32\uff08URL/Addr\uff09\u4e2d\u7684\u4e3b\u673a\u548c\u7aef\u53e3\u89e3\u6790\u51fa\u6765"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'def printHostPortErr(res) {\n    host, port, err = res;\n    if err != nil {\n        println("ERROR: ", err)\n    }else{\n        printf("Host: %v Port: %v\\n", host, port)\n    }\n}\n\n\nprintHostPortErr(str.ParseStringToHostPort("example.com:80"))\nprintHostPortErr(str.ParseStringToHostPort("127.0.0.1:80"))\nprintHostPortErr(str.ParseStringToHostPort("https://example.com"))\nprintHostPortErr(str.ParseStringToHostPort("http://example.com"))\nprintHostPortErr(str.ParseStringToHostPort("http://example.com:8082"))\nprintHostPortErr(str.ParseStringToHostPort("example.com"))\nprintHostPortErr(str.ParseStringToHostPort("example"))\nprintHostPortErr(str.ParseStringToHostPort("127.0.0.1"))\n\n/*\nOUTPUT:\n\nHost: example.com Port: 80\nHost: 127.0.0.1 Port: 80\nHost: example.com Port: 443\nHost: example.com Port: 80\nHost: example.com Port: 8082\nERROR:  unknown port for [example.com]\nERROR:  unknown port for [example]\nERROR:  unknown port for [127.0.0.1]\n*/\n')),(0,a.kt)("h4",{id:"isipv4"},"IsIPv4"),(0,a.kt)("p",null,"\u3010\u7565\u3011"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'println(str.IsIPv4("127.0.0.1")) // true\nprintln(str.IsIPv6("127.0.0.1")) // false\nprintln(str.IsIPv6("::1"))       // true\nprintln(str.IsIPv4("::1"))       // false\n')),(0,a.kt)("h4",{id:"isipv6"},"IsIPv6"),(0,a.kt)("p",null,"\u3010\u7565\u3011"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'\nprintln(str.IsIPv4("127.0.0.1")) // true\nprintln(str.IsIPv6("127.0.0.1")) // false\nprintln(str.IsIPv6("::1"))       // true\nprintln(str.IsIPv4("::1"))       // false\n')),(0,a.kt)("h4",{id:"parsestringtohosts"},"ParseStringToHosts"),(0,a.kt)("p",null,"\u628a\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},","),"\u5206\u5272\u7684\u5b57\u7b26\u4e32\u89e3\u6790\u6210\u4e3b\u673a\u4fe1\u606f\uff0c\u53ef\u89e3\u6790\u5185\u5bb9\u4e3a\u7f51\u6bb5\uff0cIP\uff0c\u57df\u540d\u7b49\u3002"),(0,a.kt)("p",null,"\u4e00\u822c\u7528\u4e8e\u89e3\u6790\u626b\u63cf\u76ee\u6807\u4e3b\u673a\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'println(str.ParseStringToHosts("baidu.com,127.0.0.1,192.168.1.2/28"))\n// OUTPUT\n// [baidu.com 127.0.0.1 192.168.1.0 192.168.1.1 192.168.1.2 192.168.1.3 192.168.1.4 192.168.1.5 192.168.1.6 192.168.1.7 192.168.1.8 192.168.1.9 192.168.1.10 192.168.1.11 192.168.1.12 192.168.1.13 192.168.1.14 192.168.1.15]\n\nprintln(str.ParseStringToHosts("10.3.0.1/24,8.8.8.8,example.com"))\n// OUTPUT\n// [10.3.0.0 ........ 10.3.0.246 10.3.0.247 10.3.0.248 10.3.0.249 10.3.0.250 10.3.0.251 10.3.0.252 10.3.0.253 10.3.0.254 10.3.0.255 8.8.8.8 example.com]\n\nprintln(str.ParseStringToHosts("example.com,example2.com"))\n// OUTPUT\n// [example.com example2.com]\n')),(0,a.kt)("h4",{id:"parsestringtoports"},"ParseStringToPorts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'println(str.ParseStringToPorts("22,3306,80-82,8080-8083"))\nprintln(str.ParseStringToPorts("8080-8083"))\nprintln(str.ParseStringToPorts("22,xx"))\nprintln(str.ParseStringToPorts("127.0.0.1/28"))\n\n/*\nOUTPUT:\n\n[22 80 81 82 3306 8080 8081 8082 8083]\n[8080 8081 8082 8083]\n[22]\n[]\n*\n')),(0,a.kt)("h4",{id:"parsestringtolines"},"ParseStringToLines"),(0,a.kt)("p",null,"\u89e3\u6790\u6210\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'dump(str.ParseStringToLines("123123123\\nasdfasdf\\nwfhiuqwe\\nasdfasdf\\r\\nasdfasdf"))\n/*\nOUTPUT:\n\n([]string) (len=5 cap=8) {\n (string) (len=9) "123123123",\n (string) (len=8) "asdfasdf",\n (string) (len=8) "wfhiuqwe",\n (string) (len=8) "asdfasdf",\n (string) (len=8) "asdfasdf"\n}\n*/\n')),(0,a.kt)("h4",{id:"parsestringtourls"},"ParseStringToUrls"),(0,a.kt)("p",null,"\u5b57\u7b26\u4e32\u751f\u6210\u53ef\u80fd\u7684 URL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'println(str.ParseStringToUrls("www.baidu.com"))\nprintln(str.ParseStringToUrls("example.com"))\nprintln(str.ParseStringToUrls("example.com:80"))\nprintln(str.ParseStringToUrls("sdfaasdgasd"))\nprintln(str.ParseStringToUrls("127.0.1.1"))\nprintln(str.ParseStringToUrls("192.168.1.3:443"))\nprintln(str.ParseStringToUrls("192.168.1.3:80"))\n\n/*\nOUTPUT:\n\n[https://www.baidu.com http://www.baidu.com]\n[https://example.com http://example.com]\n[http://example.com]\n[https://sdfaasdgasd http://sdfaasdgasd]\n[https://127.0.1.1 http://127.0.1.1]\n[https://192.168.1.3]\n[http://192.168.1.3]\n*/\n')),(0,a.kt)("h4",{id:"parsestringtourlswith3w"},"ParseStringToUrlsWith3W"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'println(str.ParseStringToUrlsWith3W("www.baidu.com"))\nprintln(str.ParseStringToUrlsWith3W("example.com"))\nprintln(str.ParseStringToUrlsWith3W("example.com:80"))\nprintln(str.ParseStringToUrlsWith3W("sdfaasdgasd"))\nprintln(str.ParseStringToUrlsWith3W("127.0.1.1"))\nprintln(str.ParseStringToUrlsWith3W("192.168.1.3:443"))\nprintln(str.ParseStringToUrlsWith3W("192.168.1.3:80"))\n\n/*\nOUTPUT:\n\n[https://www.baidu.com http://www.baidu.com]\n[https://example.com https://www.example.com http://example.com http://www.example.com]\n[http://example.com http://www.example.com]\n[https://sdfaasdgasd https://www.sdfaasdgasd http://sdfaasdgasd http://www.sdfaasdgasd]\n[https://127.0.1.1 http://127.0.1.1]\n[https://192.168.1.3]\n[http://192.168.1.3]\n*/\n')))}m.isMDXComponent=!0}}]);