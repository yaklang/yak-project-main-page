(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[6586],{3905:(t,e,n)=>{"use strict";n.d(e,{Zo:()=>s,kt:()=>v});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),p=c(n),d=o,v=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(v,i(i({ref:e},s),{},{components:n})):r.createElement(v,i({ref:e},s))}));function v(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u[p]="string"==typeof t?t:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94128:(t,e,n)=>{"use strict";n.r(e),n.d(e,{frontMatter:()=>a,contentTitle:()=>i,metadata:()=>u,toc:()=>l,default:()=>s});var r=n(22122),o=(n(67294),n(3905));const a={sidebar_position:144},i="\u6267\u884c JavaScript \u4ee3\u7801 (otto styled)",u={unversionedId:"yakexamples/js-otto",id:"yakexamples/js-otto",isDocsHomePage:!1,title:"\u6267\u884c JavaScript \u4ee3\u7801 (otto styled)",description:"\u672c\u529f\u80fd\u5bf9\u5f15\u64ce\u7248\u672c >= yak-1.0.13-sp19 \u6709\u6548",source:"@site/docs/yakexamples/js-otto.mdx",sourceDirName:"yakexamples",slug:"/yakexamples/js-otto",permalink:"/docs/yakexamples/js-otto",editUrl:"https://github.com/yaklang/docs/yakexamples/js-otto.mdx",tags:[],version:"current",sidebarPosition:144,frontMatter:{sidebar_position:144},sidebar:"tutorialSidebar",previous:{title:"\u6f0f\u6d1e\u68c0\u6d4b\uff1aDNSLog",permalink:"/docs/yakexamples/risk"},next:{title:'\u7f16\u7a0b\u5b9e\u8df5\uff1a"\u591a\u7ebf\u7a0b"\u4e0e\u5e76\u53d1\u7f16\u7a0b',permalink:"/docs/yakexamples/concurrent"}},l=[{value:"\u7b80\u4fbf\u8c03\u7528\u6848\u4f8b\uff1a\u8c03\u7528 JS \u4ee3\u7801\u4e2d\u7684\u51fd\u6570",id:"\u7b80\u4fbf\u8c03\u7528\u6848\u4f8b\uff1a\u8c03\u7528-js-\u4ee3\u7801\u4e2d\u7684\u51fd\u6570",children:[]},{value:"\u6848\u4f8b2\uff1a\u8c03\u7528 JS \u4ee3\u7801\u4e2d\u7684\u51fd\u6570\uff0c\u5e76\u4f20\u5165\u53c2\u6570",id:"\u6848\u4f8b2\uff1a\u8c03\u7528-js-\u4ee3\u7801\u4e2d\u7684\u51fd\u6570\uff0c\u5e76\u4f20\u5165\u53c2\u6570",children:[]},{value:"\u66f4\u591a\u590d\u6742\u6848\u4f8b\uff1a",id:"\u66f4\u591a\u590d\u6742\u6848\u4f8b\uff1a",children:[]},{value:"\u7ed3\u6784\u5b9a\u4e49\u901f\u67e5",id:"\u7ed3\u6784\u5b9a\u4e49\u901f\u67e5",children:[{value:"JS OTTO Value \u5b9a\u4e49\uff1a",id:"js-otto-value-\u5b9a\u4e49\uff1a",children:[]},{value:"JS \u5f15\u64ce\u5b9a\u4e49\uff1a<code>otto.Otto</code>",id:"js-\u5f15\u64ce\u5b9a\u4e49\uff1aottootto",children:[]}]},{value:"\u6ce8\u610f\uff1a",id:"\u6ce8\u610f\uff1a",children:[]}],c={toc:l};function s(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6267\u884c-javascript-\u4ee3\u7801-otto-styled"},"\u6267\u884c JavaScript \u4ee3\u7801 (otto styled)"),(0,o.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"success")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u672c\u529f\u80fd\u5bf9\u5f15\u64ce\u7248\u672c >= yak-1.0.13-sp19 \u6709\u6548"))),(0,o.kt)("p",null,"\u5b9e\u9645\u5728\u8fdb\u884c\u5de5\u4f5c\u4e2d\uff0c\u5f88\u591a Web \u5728\u6d4f\u89c8\u5668\u7aef\u4f1a\u6267\u884c\u7b7e\u540d\u51fd\u6570\u6216\u8005\u56fd\u5bc6\u52a0\u89e3\u5bc6\u51fd\u6570\u3002"),(0,o.kt)("p",null,"\u6709\u65f6\u5019\uff0c\u6211\u4eec\u5e0c\u671b\u6211\u4eec\u53ef\u4ee5\u52a8\u6001\u6267\u884c\u4e00\u6bb5 JS \u6765\u5b9e\u73b0\u8fd9\u4e9b\u80fd\u529b\uff0c\u5e76\u4e14\u5e0c\u671b\u80fd\u4e0e\u73b0\u6709\u522b\u7684\u8bed\u8a00\u7684\u5185\u5bb9\u65e0\u7f1d\u8fdb\u884c\u6574\u5408\u3002"),(0,o.kt)("p",null,"Yaklang \u96c6\u6210\u4e86 otto \u4f5c\u4e3a JS \u5f15\u64ce\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/robertkrimen/otto"},"https://github.com/robertkrimen/otto"))),(0,o.kt)("h2",{id:"\u7b80\u4fbf\u8c03\u7528\u6848\u4f8b\uff1a\u8c03\u7528-js-\u4ee3\u7801\u4e2d\u7684\u51fd\u6570"},"\u7b80\u4fbf\u8c03\u7528\u6848\u4f8b\uff1a\u8c03\u7528 JS \u4ee3\u7801\u4e2d\u7684\u51fd\u6570"),(0,o.kt)("p",null,"\u6211\u4eec\u4ee5\u4e00\u4e2a\u7b80\u5355\u6848\u4f8b\u6765\u8bf4\u660e\u6700\u57fa\u7840\u7684\u4e5f\u662f\u6700\u5e38\u7528\u7684\u7528\u9014\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u52a0\u8f7d\u4e00\u6bb5\u4ee3\u7801"),(0,o.kt)("li",{parentName:"ol"},"\u8c03\u7528\u8fd9\u6bb5\u4ee3\u7801\u4e2d\u7684\u67d0\u4e9b\u51fd\u6570")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'value, err = js.CallFunctionFromCode(`// Sample xyzzy example\n    function test(){\n        if (3.14159 > 0) {\n            console.log("Call By Function!!!!!!!!!!!!.");\n            return "CallByFunc";\n        }\n\n        var xyzzy = NaN;\n        console.log("Nothing happens.");\n        return xyzzy;\n    }`, "test")\ndie(err)\ndump(value)\n\n\n/*\nOUTPUT:\n\nCall By Function!!!!!!!!!!!!.\n(otto.Value) CallByFunc\n*/\n')),(0,o.kt)("h2",{id:"\u6848\u4f8b2\uff1a\u8c03\u7528-js-\u4ee3\u7801\u4e2d\u7684\u51fd\u6570\uff0c\u5e76\u4f20\u5165\u53c2\u6570"},"\u6848\u4f8b2\uff1a\u8c03\u7528 JS \u4ee3\u7801\u4e2d\u7684\u51fd\u6570\uff0c\u5e76\u4f20\u5165\u53c2\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'value, err = js.CallFunctionFromCode(`// Sample xyzzy example\n    function test(a){\n        if (a > 0) {\n            console.log("Call By Function!!!!!!!!!!!!.");\n            return "CallByFunc";\n        }\n\n        var xyzzy = NaN;\n        console.log("Nothing happens.");\n        return xyzzy;\n    }`, "test", -1)\ndie(err)\ndump(value)\n\n/*\nOUTPUT:\n\nNothing happens.\n(otto.Value) NaN\n*/\n')),(0,o.kt)("h2",{id:"\u66f4\u591a\u590d\u6742\u6848\u4f8b\uff1a"},"\u66f4\u591a\u590d\u6742\u6848\u4f8b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"js.CallFunctionFromCode")," \u662f\u7ecf\u8fc7\u573a\u666f\u5316\u5904\u7406\u7684\u53ef\u80fd\u662f\u6700\u5e38\u89c1\u573a\u666f\u7684\u5b9e\u73b0\u3002"),(0,o.kt)("p",null,"\u4f46\u662f\u5982\u679c\u9700\u8981\u66f4\u590d\u6742\u5904\u7406\u65b9\u6848\uff0cYaklang \u662f\u5b8c\u5168\u652f\u6301\u548c otto \u98ce\u683c\u4e00\u81f4\u7684\u5f15\u64ce\u7ec6\u8282\u64cd\u4f5c\u7684\u3002"),(0,o.kt)("p",null,"\u8be6\u7ec6\u6848\u4f8b\u53ef\u4ee5\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/robertkrimen/otto"},"otto github README")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"vm = js.New()\nvalue, err = vm.Run(`(function(){\n    return 1+2\n})()`)\ndie(err)\n\ndump(value)\n\n/*\nOUTPUT:\n\n(otto.Value) 3\n*/\n\nvalue, err = value.Export()\ndie(err)\n\ndump(value)\n\n/*\nOUTPUT:\n\n(float64) 3\n*/\n")),(0,o.kt)("h2",{id:"\u7ed3\u6784\u5b9a\u4e49\u901f\u67e5"},"\u7ed3\u6784\u5b9a\u4e49\u901f\u67e5"),(0,o.kt)("p",null,"\u5f15\u64ce\u5b9a\u4e49\u6765\u6e90\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"desc(obj)")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u4e0d\u77e5\u9053\u4e00\u4e2a\u5bf9\u8c61\u5185\u90fd\u6709\u54ea\u4e9b\u6210\u5458\u65b9\u6cd5\uff0c\u53d8\u91cf\uff0c\u5b57\u6bb5\u3002"),(0,o.kt)("p",{parentName:"div"},"\u53ef\u4ee5\u5c1d\u8bd5\u8c03\u7528\u4e00\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"desc()")," \u51fd\u6570\uff0c\u4ed6\u4f1a\u63cf\u8ff0\u51fa\u8fd9\u4e2a\u5bf9\u8c61\u7684\u5927\u81f4\u7ed3\u6784\u548c\u516c\u5f00\u5185\u5bb9\u3002"))),(0,o.kt)("h3",{id:"js-otto-value-\u5b9a\u4e49\uff1a"},"JS OTTO Value \u5b9a\u4e49\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type github.com/robertkrimen/otto.(Value) struct {\n  Fields(\u53ef\u7528\u5b57\u6bb5):\n  StructMethods(\u7ed3\u6784\u65b9\u6cd5/\u51fd\u6570):\n      func Call(v1: otto.Value, v2 ...interface {}) return(otto.Value, error)\n      func Class() return(string)\n      func Export() return(interface {}, error)\n      func IsBoolean() return(bool)\n      func IsDefined() return(bool)\n      func IsFunction() return(bool)\n      func IsNaN() return(bool)\n      func IsNull() return(bool)\n      func IsNumber() return(bool)\n      func IsObject() return(bool)\n      func IsPrimitive() return(bool)\n      func IsString() return(bool)\n      func IsUndefined() return(bool)\n      func Object() return(*otto.Object)\n      func String() return(string)\n      func ToBoolean() return(bool, error)\n      func ToFloat() return(float64, error)\n      func ToInteger() return(int64, error)\n      func ToString() return(string, error)\n  PtrStructMethods(\u6307\u9488\u7ed3\u6784\u65b9\u6cd5/\u51fd\u6570):\n}\n")),(0,o.kt)("h3",{id:"js-\u5f15\u64ce\u5b9a\u4e49\uff1aottootto"},"JS \u5f15\u64ce\u5b9a\u4e49\uff1a",(0,o.kt)("inlineCode",{parentName:"h3"},"otto.Otto")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type github.com/robertkrimen/otto.(Otto) struct {\n  Fields(\u53ef\u7528\u5b57\u6bb5):\n      Interrupt: chan func()\n  StructMethods(\u7ed3\u6784\u65b9\u6cd5/\u51fd\u6570):\n      func Call(v1: string, v2: interface {}, v3 ...interface {}) return(otto.Value, error)\n      func Context() return(otto.Context)\n      func ContextLimit(v1: int) return(otto.Context)\n      func ContextSkip(v1: int, v2: bool) return(otto.Context)\n      func Eval(v1: interface {}) return(otto.Value, error)\n      func Get(v1: string) return(otto.Value, error)\n      func MakeCustomError(v1: string, v2: string) return(otto.Value)\n      func MakeRangeError(v1: string) return(otto.Value)\n      func MakeSyntaxError(v1: string) return(otto.Value)\n      func MakeTypeError(v1: string) return(otto.Value)\n      func Object(v1: string) return(*otto.Object, error)\n      func Run(v1: interface {}) return(otto.Value, error)\n      func Set(v1: string, v2: interface {}) return(error)\n      func SetDebuggerHandler(v1: func (v1: *otto.Otto) )\n      func SetRandomSource(v1: func () return(float64) )\n      func SetStackDepthLimit(v1: int)\n      func SetStackTraceLimit(v1: int)\n      func ToValue(v1: interface {}) return(otto.Value, error)\n  PtrStructMethods(\u6307\u9488\u7ed3\u6784\u65b9\u6cd5/\u51fd\u6570):\n      func Call(v1: string, v2: interface {}, v3 ...interface {}) return(otto.Value, error)\n      func Compile(v1: string, v2: interface {}) return(*otto.Script, error)\n      func CompileWithSourceMap(v1: string, v2: interface {}, v3: interface {}) return(*otto.Script, error)\n      func Context() return(otto.Context)\n      func ContextLimit(v1: int) return(otto.Context)\n      func ContextSkip(v1: int, v2: bool) return(otto.Context)\n      func Copy() return(*otto.Otto)\n      func Eval(v1: interface {}) return(otto.Value, error)\n      func Get(v1: string) return(otto.Value, error)\n      func MakeCustomError(v1: string, v2: string) return(otto.Value)\n      func MakeRangeError(v1: string) return(otto.Value)\n      func MakeSyntaxError(v1: string) return(otto.Value)\n      func MakeTypeError(v1: string) return(otto.Value)\n      func Object(v1: string) return(*otto.Object, error)\n      func Run(v1: interface {}) return(otto.Value, error)\n      func Set(v1: string, v2: interface {}) return(error)\n      func SetDebuggerHandler(v1: func (v1: *otto.Otto) )\n      func SetRandomSource(v1: func () return(float64) )\n      func SetStackDepthLimit(v1: int)\n      func SetStackTraceLimit(v1: int)\n      func ToValue(v1: interface {}) return(otto.Value, error)\n}\n")),(0,o.kt)("h2",{id:"\u6ce8\u610f\uff1a"},"\u6ce8\u610f\uff1a"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u72ec\u7acb JS \u5f15\u64ce\u5e76\u4e0d\u9002\u5408\u9002\u5408\u6240\u6709\u573a\u666f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4e00\u4e9b nodejs \u5e93\u548c\u6d4f\u89c8\u5668\u590d\u6742\u4e0a\u4e0b\u6587\u65e0\u6cd5\u901a\u8fc7\u5355\u72ec otto \u6765\u5b9e\u73b0\u3002"))))}s.isMDXComponent=!0}}]);