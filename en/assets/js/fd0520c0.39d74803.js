(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[1729],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return y}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),y=a,f=d["".concat(l,".").concat(y)]||d[y]||u[y]||i;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},39198:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=t(74034),a=t(79973),i=(t(67294),t(3905)),o={sidebar_position:12},c="12. \u5217\u8868\u7c7b\u578b\uff1a\u521b\u5efa\u4e0e\u58f0\u660e",l={unversionedId:"yak-basic/advanced-type-slice",id:"yak-basic/advanced-type-slice",isDocsHomePage:!1,title:"12. \u5217\u8868\u7c7b\u578b\uff1a\u521b\u5efa\u4e0e\u58f0\u660e",description:"\u5728yaklang\u4e2d\uff0c\u4f7f\u7528 [var1, var2, var3...] \u6765\u521b\u5efa\u4e00\u4e2aslice\uff0c\u540c\u65f6\u6211\u4eec\u4e5f\u517c\u5bb9golang\u7684\u8bed\u6cd5\uff0c\u4f7f\u7528make\u8bed\u53e5\u6765\u521b\u5efaslice",source:"@site/docs/yak-basic/12-advanced-type-slice.md",sourceDirName:"yak-basic",slug:"/yak-basic/advanced-type-slice",permalink:"/en/docs/yak-basic/advanced-type-slice",editUrl:"https://github.com/yaklang/docs/yak-basic/12-advanced-type-slice.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"11. \u5e03\u5c14\u503c\uff0cnil \u4e0e undefined",permalink:"/en/docs/yak-basic/bool-nil-and-undefined"},next:{title:"13. \u5217\u8868\u7c7b\u578b\uff1a\u7528\u6cd5\u4e0e\u5185\u7f6e\u51fd\u6570",permalink:"/en/docs/yak-basic/advanced-type-slice-ops"}},p=[{value:"\u5b57\u9762\u91cf\u58f0\u660e\uff1a\u63a8\u65ad\u7c7b\u578b",id:"\u5b57\u9762\u91cf\u58f0\u660e\uff1a\u63a8\u65ad\u7c7b\u578b",children:[{value:"\u81ea\u52a8\u63a8\u65ad\u7684\u89c4\u5219\u5982\u4e0b\uff1a",id:"\u81ea\u52a8\u63a8\u65ad\u7684\u89c4\u5219\u5982\u4e0b\uff1a",children:[]}]},{value:"\u6309\u7c7b\u578b\u6784\u5efa\uff08make\uff09",id:"\u6309\u7c7b\u578b\u6784\u5efa\uff08make\uff09",children:[]}],s={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"12-\u5217\u8868\u7c7b\u578b\uff1a\u521b\u5efa\u4e0e\u58f0\u660e"},"12. \u5217\u8868\u7c7b\u578b\uff1a\u521b\u5efa\u4e0e\u58f0\u660e"),(0,i.kt)("p",null,"\u5728yaklang\u4e2d\uff0c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"[var1, var2, var3...]")," \u6765\u521b\u5efa\u4e00\u4e2aslice\uff0c\u540c\u65f6\u6211\u4eec\u4e5f\u517c\u5bb9golang\u7684\u8bed\u6cd5\uff0c\u4f7f\u7528make\u8bed\u53e5\u6765\u521b\u5efaslice"),(0,i.kt)("h2",{id:"\u5b57\u9762\u91cf\u58f0\u660e\uff1a\u63a8\u65ad\u7c7b\u578b"},"\u5b57\u9762\u91cf\u58f0\u660e\uff1a\u63a8\u65ad\u7c7b\u578b"),(0,i.kt)("p",null,"\u5728yaklang\u4e2d\uff0c\u5982\u679c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"[var1, var2, var3...]")," \u8fd9\u79cd\u5f62\u5f0f\u6765\u521b\u5efaslice\uff0cyak vm\u4f1a\u6839\u636eslice\u4e2d\u7684\u5143\u7d20\u7c7b\u578b\u6765\u81ea\u52a8\u63a8\u65ad\u6700\u5951\u5408\u7684slice\u7c7b\u578b\uff0c\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'a = [1, 2, 3]\nprintln(typeof(a)) // []int\nb = ["qwe", "asd"]\nprintln(typeof(b)) // []string\nc = [1, 2, "3"]\nprintln(typeof(c)) // []any{}\n')),(0,i.kt)("h3",{id:"\u81ea\u52a8\u63a8\u65ad\u7684\u89c4\u5219\u5982\u4e0b\uff1a"},"\u81ea\u52a8\u63a8\u65ad\u7684\u89c4\u5219\u5982\u4e0b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u6700\u5bbd\u6cdb\u7684\u7c7b\u578b\u4e3a any \u4e5f\u53ef\u4ee5\u8ba4\u4e3a\u7c7b\u4f3c TypeScript \u4e2d\u7684 any\uff0cGolang \u4e2d\u5bf9\u5e94 interface{}"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u540c\u65f6\u5b58\u5728\u5b57\u7b26\u4e32\uff0c\u6570\u5b57\uff0c\u5e03\u5c14\u503c\u7ed3\u6784\u4f53\u4efb\u610f\u4e24\u4e2a\u7ec4\u5408\uff0c\u5219\u8ba4\u4e3a\u7c7b\u578b\u4e3a any"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u53ea\u5b58\u5728\u6570\u5b57\uff0c\u5219\u90fd\u662f\u6574\u6570\u7684\u8bdd\uff0c\u8ba4\u4e3a\u662f int"),(0,i.kt)("li",{parentName:"ol"},"\u5982\u679c\u90fd\u662f\u6570\u5b57\uff0c\u6574\u6570\u548c\u6d6e\u70b9\u90fd\u5b58\u5728\uff0c\u5219\u8ba4\u4e3a\u662f float")),(0,i.kt)("h2",{id:"\u6309\u7c7b\u578b\u6784\u5efa\uff08make\uff09"},"\u6309\u7c7b\u578b\u6784\u5efa\uff08make\uff09"),(0,i.kt)("p",null,"yaklang\u4e5f\u517c\u5bb9golang\u8bed\u6cd5\uff0c\u4f7f\u7528make\u8bed\u53e5\u663e\u793a\u521b\u5efa\u4e00\u4e2a\u5bf9\u5e94\u7c7b\u578b\u7684slice\uff0c\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// \u521b\u5efa\u4e00\u4e2a\u4e0d\u5e26\u957f\u5ea6\u7684 []int\na = make([]int)\nprintln(typeof(a)) // []int\n\n// \u521b\u5efa\u4e00\u4e2a\u5e26\u957f\u5ea6\u7684 []int\nb = make([]int, 2)\nprintln(len(b)) // 2\n")))}u.isMDXComponent=!0}}]);