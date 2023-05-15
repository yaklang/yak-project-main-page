(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[7378],{3905:(e,n,r)=>{"use strict";r.d(n,{Zo:()=>s,kt:()=>g});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return r?t.createElement(g,o(o({ref:n},s),{},{components:r})):t.createElement(g,o({ref:n},s))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},16667:(e,n,r)=>{"use strict";r.r(n),r.d(n,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>c,toc:()=>l,default:()=>s});var t=r(22122),a=(r(67294),r(3905));const i={sidebar_position:25},o="25. \u9519\u8bef\u4e0e\u5d29\u6e83\u5904\u7406",c={unversionedId:"yak-basic/errors",id:"yak-basic/errors",isDocsHomePage:!1,title:"25. \u9519\u8bef\u4e0e\u5d29\u6e83\u5904\u7406",description:"\u9519\u8bef\u5904\u7406",source:"@site/docs/yak-basic/25-errors.mdx",sourceDirName:"yak-basic",slug:"/yak-basic/errors",permalink:"/docs/yak-basic/errors",editUrl:"https://github.com/yaklang/docs/yak-basic/25-errors.mdx",tags:[],version:"current",sidebarPosition:25,frontMatter:{sidebar_position:25},sidebar:"tutorialSidebar",previous:{title:"24. \u6267\u884c\u987a\u5e8f\u63a7\u5236\uff1aDefer \u5ef6\u8fdf",permalink:"/docs/yak-basic/defer"},next:{title:"26. \u4f5c\u7528\u57df\u63cf\u8ff0\u4e0e\u58f0\u660e",permalink:"/docs/yak-basic/scope"}},l=[{value:"\u9519\u8bef\u5904\u7406",id:"\u9519\u8bef\u5904\u7406",children:[]},{value:"\u6355\u83b7\u9519\u8bef\uff1aTry \u4e0e Catch",id:"\u6355\u83b7\u9519\u8bef\uff1atry-\u4e0e-catch",children:[]},{value:"Golang \u6a21\u5f0f\uff1aPanic \u4e0e Recover",id:"golang-\u6a21\u5f0f\uff1apanic-\u4e0e-recover",children:[]}],p={toc:l};function s(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"25-\u9519\u8bef\u4e0e\u5d29\u6e83\u5904\u7406"},"25. \u9519\u8bef\u4e0e\u5d29\u6e83\u5904\u7406"),(0,a.kt)("h2",{id:"\u9519\u8bef\u5904\u7406"},"\u9519\u8bef\u5904\u7406"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5728 Yak \u4e2d\uff0c\u5f88\u591a\u51fd\u6570\u6765\u6e90\u4e8e Golang \u4e2d\u7684\u51fd\u6570\uff1b\u4f17\u6240\u5468\u77e5\uff0cGolang \u5f88\u591a\u51fd\u6570\u7684\u6700\u540e\u4e00\u4e2a\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"error"),"\u3002"),(0,a.kt)("p",{parentName:"div"},"\u56e0\u6b64\u5728 YakVM \u7684 Golang \u540e\u7aef\u4e2d\uff0c\u6211\u4eec\u7ecf\u5e38\u7684\u5904\u7406\u9519\u8bef\u7684\u65b9\u6848\u662f"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'c, err = servicescan.Scan("127.0.0.1", "80,8080-8088")\n\n// \u5982\u679c\u6709\u9519\u8bef\uff0c\u5c31\u9a6c\u4e0a\u9000\u51fa\u5f53\u524d\u7a0b\u5e8f\ndie(err)\n')),(0,a.kt)("p",{parentName:"div"},"\u5f53\u7136\uff0c\u9664\u4e86\u4e0a\u8ff0\u5185\u5bb9\uff0c\u6211\u4eec\u8fd8\u7ecf\u5e38\u8fd9\u6837\u5904\u7406 err\uff0c"),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-go"},'c, err = servicescan.Scan("127.0.0.1", "80,443")\n\n// \u8fd9\u4e2a\u5206\u652f\u7b49\u4ef7\u4e8e die(err)\nif err != nil {\n    panic(err)\n}\n')))),(0,a.kt)("h2",{id:"\u6355\u83b7\u9519\u8bef\uff1atry-\u4e0e-catch"},"\u6355\u83b7\u9519\u8bef\uff1aTry \u4e0e Catch"),(0,a.kt)("p",null,"yaklang \u539f\u751f\u652f\u6301 try \u548c catch \u7684\u6a21\u5f0f(>=1.1.7)\u3002\u5728\u8fd9\u4e2a\u6a21\u5f0f\u4e0b\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528 try \u5305\u88f9\u81ea\u5df1\u7684\u4ee3\u7801\uff0c\u4f7f\u7528 catch \u53bb\u6355\u83b7\u9519\u8bef\uff1b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'try{\n    println("We are in Trying")\n    die("panic in try!")\n}catch err {\n    println("Fetch Error" + f": ${err}")\n}\n\n/*\nWe are in Trying\nFetch Error: panic in try!\n*/\n')),(0,a.kt)("p",null,"\u5f53\u7136 try-catch-finally \u4e5f\u88ab\u5b8c\u6574\u7684\u652f\u6301\u4e86\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"catch err")," \u7684 err \u53ef\u4ee5\u968f\u65f6\u7701\u7565\uff1b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'try{\n    println("We are in Trying")\n    die("panic in try!")\n} catch {\n    println("Fetch Error" + ": Unknown Error")\n} finally {\n    println("Working in Finally")\n}\n\n/*\nWe are in Trying\nFetch Error: Unknown Error\nWorking in Finally\n*/\n')),(0,a.kt)("h2",{id:"golang-\u6a21\u5f0f\uff1apanic-\u4e0e-recover"},"Golang \u6a21\u5f0f\uff1aPanic \u4e0e Recover"),(0,a.kt)("p",null,"yaklang\u540c\u6837\u4fdd\u7559\u4e86golang\u7684panic/recover\u673a\u5236\uff0c\u5176\u5b9e\u9645\u4e0a\u662f\u4e00\u4e2a\u7279\u6b8a\u8bed\u53e5\uff0c\u7528\u6cd5\u4e0egolang\u4fdd\u6301\u4e00\u81f4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func main() {\n    defer fn(){\n        println("Start RECOVER")\n        assert recover()+1 == 2\n        println("END RECOVER")\n    }()\n    println("START PANIC")\n    panic(1)\n    println("END PANIC")\n}\n\nmain()\n/* OUTPUT:\nSTART PANIC\nSTART RECOVER\nEND RECOVER\n*/\n')),(0,a.kt)("p",null,"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u5728yaklang\u4e2dpanic\u548crecover\u53ef\u4ee5\u5728\u6700\u5916\u5c42\u4e2d\u4f7f\u7528\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'defer fn{\n    err := recover()\n    assert err == "panic test"\n}\n\npanic("panic test")\n')))}s.isMDXComponent=!0}}]);