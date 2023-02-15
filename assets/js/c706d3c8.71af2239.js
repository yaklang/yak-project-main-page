(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[7233],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),d=l,m=c["".concat(s,".").concat(d)]||c[d]||b[d]||o;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93630:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>o,contentTitle:()=>a,metadata:()=>i,toc:()=>s,default:()=>u});var r=t(22122),l=(t(67294),t(3905));const o={sidebar_position:17},a="[json] JSON\u5e8f\u5217\u5316\u4e0e\u53cd\u5e8f\u5217\u5316",i={unversionedId:"buildinlibs/lib_json",id:"buildinlibs/lib_json",isDocsHomePage:!1,title:"[json] JSON\u5e8f\u5217\u5316\u4e0e\u53cd\u5e8f\u5217\u5316",description:"\u672c\u7cfb\u7edf\u7684 JSON API \u975e\u5e38\u7b80\u5355\uff0c\u53ea\u6709\u4e24\u4e2a\uff0c\u4e00\u4e2a\u662f\u5e8f\u5217\u5316\u4e00\u4e2a\u662f\u53cd\u5e8f\u5217\u5316",source:"@site/docs/buildinlibs/lib_json.md",sourceDirName:"buildinlibs",slug:"/buildinlibs/lib_json",permalink:"/docs/buildinlibs/lib_json",editUrl:"https://github.com/yaklang/docs/buildinlibs/lib_json.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"[spacengine] \u7f51\u7edc\u7a7a\u95f4\u5f15\u64ce",permalink:"/docs/buildinlibs/lib_spacengine"},next:{title:"[dyn] \u52a8\u6001\u63d2\u4ef6",permalink:"/docs/buildinlibs/lib_dyn"}},s=[{value:"API(Golang \u98ce\u683c)",id:"apigolang-\u98ce\u683c",children:[]},{value:"API(Python \u98ce\u683c)",id:"apipython-\u98ce\u683c",children:[]}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"json-json\u5e8f\u5217\u5316\u4e0e\u53cd\u5e8f\u5217\u5316"},"[json]"," JSON\u5e8f\u5217\u5316\u4e0e\u53cd\u5e8f\u5217\u5316"),(0,l.kt)("p",null,"\u672c\u7cfb\u7edf\u7684 JSON API \u975e\u5e38\u7b80\u5355\uff0c\u53ea\u6709\u4e24\u4e2a\uff0c\u4e00\u4e2a\u662f\u5e8f\u5217\u5316\u4e00\u4e2a\u662f\u53cd\u5e8f\u5217\u5316"),(0,l.kt)("h2",{id:"apigolang-\u98ce\u683c"},"API(Golang \u98ce\u683c)"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"fn json.Marshal(var_1: interface {}): ([]byte, error)")," Json \u5e8f\u5217\u5316\uff0c\u628a\u4efb\u610f\u4e00\u4e2a\u5bf9\u8c61\u89e3\u6790\u6210 []byte\uff0c\u5185\u5bb9\u662f JSON \u5b57\u7b26\u4e32"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"fn json.New(var_1: string|[]byte|any): (*yaklib.yakJson, error)")," \u628a\u5b57\u7b26\u4e32\u6216\u8005\u4e00\u4e2a\u5bf9\u8c61\uff0c\u53d8\u6210 json \u5e8f\u5217\u5316\u4e4b\u540e\u7684\u5185\u5bb9\uff0c\u53ea\u6709\u51e0\u79cd\u60c5\u51b5\uff0c\u5206\u522b\u4e3a\uff1a",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"number")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"object")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"array")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"null"))))),(0,l.kt)("p",null,"\u6211\u4eec\u53d1\u73b0\uff0c\u8fd9\u4e2a\u5305\u5173\u952e\u8fd4\u56de\u4e86\u4e00\u4e2a\u6570\u636e\u7c7b\u578b\uff0c\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"*yaklib.yakJson")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u7c7b\u578b\u7684\u5b9a\u4e49\u662f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},"type palm/common/yak/yaklib.(yakJson) struct {\nPtrStructMethods(\u6307\u9488\u7ed3\u6784\u65b9\u6cd5/\u51fd\u6570):\n    // \u5224\u65ad\u89e3\u6790\u51fa\u7684\u5bf9\u8c61\u662f\u5426\u662f\u6570\u7ec4 [] \n    func IsArray() return(bool)\n    func IsSlice() return(bool)\n\n    // \u5224\u65ad\u89e3\u6790\u51fa\u7684\u5bf9\u8c61\u662f\u5426\u662f Object / map\n    func IsObject() return(bool)\n    func IsMap() return(bool)\n\n    // \u5224\u65ad\u662f\u5426\u662f\u7a7a\n    func IsNil() return(bool)\u2202\n    func IsNull() return(bool)\n\n    // \u5224\u65ad\u89e3\u6790\u51fa\u7684\u662f\u5426\u662f\u6570\u5b57\n    func IsNumber() return(bool)\n\n    // \u5224\u65ad\u662f\u5426\u662f\u5b57\u7b26\u4e32\n    func IsString() return(bool)\n\n    // \u83b7\u5f97\u89e3\u6790\u51fa\u6765\u7684\u5177\u4f53\u7684\u503c\n    func Value() return(interface {})\n}\n")),(0,l.kt)("h2",{id:"apipython-\u98ce\u683c"},"API(Python \u98ce\u683c)"),(0,l.kt)("p",null,"\u5e38\u89c1\u7684 Python \u98ce\u683c\u7684 JSON \u5904\u7406\u6709\u4e24\u4e2a\u63a5\u53e3\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"dumps/loads")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"fn json.loads(content: string|[]byte) any"),": \u628a\u4e00\u4e2a\u5b57\u7b26\u4e32\u89e3\u6790\u6210\u4e00\u4e2a Yak/Golang \u5bf9\u8c61"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"fn json.dumps(target: any) string"),": \u628a\u4e00\u4e2a Yak/Golang \u6570\u636e\u7c7b\u578b\u89e3\u6790\u6210\u4e00\u4e2a\u5b57\u7b26\u4e32")),(0,l.kt)("p",null,"\u6240\u4ee5\u6700\u57fa\u7840\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u65b9\u5f0f\u6765\u6d4b\u8bd5\u8fd9\u4e24\u4e2a\u529f\u80fd\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'println(json.loads(`{"test": 123}`))\nprintln(json.dumps({"test": 123}))\n')),(0,l.kt)("p",null,"\u8fd4\u56de\u7684\u7ed3\u679c\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'map[test:123]\n{"test":123}\n')))}u.isMDXComponent=!0}}]);