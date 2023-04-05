"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[6546],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,v=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(v,i(i({ref:t},p),{},{components:n})):r.createElement(v,i({ref:t},p))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48518:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:114},i="\u7c7b\u6bd4 Python \u4e2d\u7684 dir \u51fd\u6570",c={unversionedId:"yakexamples/vs-dir-in-py",id:"yakexamples/vs-dir-in-py",isDocsHomePage:!1,title:"\u7c7b\u6bd4 Python \u4e2d\u7684 dir \u51fd\u6570",description:"\u5728\u7f16\u7a0b\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u7ecf\u5e38\u9047\u5230\u4e0d\u77e5\u9053\u4e00\u4e2a\u5bf9\u8c61\u4e2d\u6709\u54ea\u4e9b\u6210\u5458\u53ef\u4f7f\u7528\u3002",source:"@site/docs/yakexamples/vs-dir-in-py.mdx",sourceDirName:"yakexamples",slug:"/yakexamples/vs-dir-in-py",permalink:"/en/docs/yakexamples/vs-dir-in-py",editUrl:"https://github.com/yaklang/docs/yakexamples/vs-dir-in-py.mdx",tags:[],version:"current",sidebarPosition:114,frontMatter:{sidebar_position:114},sidebar:"tutorialSidebar",previous:{title:"\u6587\u672c\u76f8\u4f3c\u5ea6\u7b97\u6cd5\uff1aSQLMAP\u3001 SimHash \u4e0e SSDeep",permalink:"/en/docs/yakexamples/similarity-calc"},next:{title:"HTML \u5904\u7406\uff1aXPATH \u6848\u4f8b",permalink:"/en/docs/yakexamples/xpath"}},l=[],s={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7c7b\u6bd4-python-\u4e2d\u7684-dir-\u51fd\u6570"},"\u7c7b\u6bd4 Python \u4e2d\u7684 dir \u51fd\u6570"),(0,a.kt)("p",null,"\u5728\u7f16\u7a0b\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u7ecf\u5e38\u9047\u5230\u4e0d\u77e5\u9053\u4e00\u4e2a\u5bf9\u8c61\u4e2d\u6709\u54ea\u4e9b\u6210\u5458\u53ef\u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u5728 Python \u4e2d\uff0c\u5927\u5bb6\u7ecf\u5e38\u98df\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"dir")," \u6765\u67e5\u770b\u53ef\u64cd\u4f5c\u7684\u5b57\u6bb5\u3002"),(0,a.kt)("p",null,"\u5728 Yak \u4e2d\uff0c\u4e5f\u6709\u7c7b\u4f3c\u7684\u5185\u7f6e\u51fd\u6570\u3002"),(0,a.kt)("p",null,'\u6211\u4eec\u5b66\u4e60 / \u6d4b\u8bd5\u4e00\u4e2a "\u672a\u77e5\u7684" \u5bf9\u8c61'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"manager = hook.NewManager()\ndesc(manager)\n")),(0,a.kt)("p",null,"\u8fd4\u56de\u7684\u7ed3\u679c\u4e3a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type palm/common/yak.(YakToCallerManager) struct {\n  Fields(\u53ef\u7528\u5b57\u6bb5):\n  StructMethods(\u7ed3\u6784\u65b9\u6cd5/\u51fd\u6570):\n  PtrStructMethods(\u6307\u9488\u7ed3\u6784\u65b9\u6cd5/\u51fd\u6570):\n      func Add(v1: context.Context, v2: string, v3: []*ypb.ExecParamItem, v4: string, v5: func (v1: *yaklang.YakEngine) return(error) , v6 ...string) return(error)\n      func AddForYakit(v1: context.Context, v2: string, v3: []*ypb.ExecParamItem, v4: string, v5: interface { Send(*ypb.ExecResult) error }, v6 ...string) return(error)\n      func CallByName(v1: string, v2 ...interface {})\n      func CallPluginKeyByName(v1: string, v2: string, v3 ...interface {})\n      func GetCurrentHooks() return([]*yak.CallerHooks)\n      func GetCurrentHooksGRPCModel() return([]*ypb.YakScriptHooks)\n      func LoadPlugin(v1: string, v2 ...string) return(error)\n      func LoadPluginContext(v1: context.Context, v2: string, v3 ...string) return(error)\n      func Remove(v1: *ypb.RemoveHookParams)\n      func Set(v1: context.Context, v2: string, v3: func (v1: *yaklang.YakEngine) return(error) , v4 ...string) return(error)\n      func SetForYakit(v1: context.Context, v2: string, v3: interface { Send(*ypb.ExecResult) error }, v4 ...string) return(error)\n}\n")),(0,a.kt)("p",null,"\u5927\u5bb6\u53ef\u4ee5\u770b\u5230\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"desc")," \u51fd\u6570\uff0c\u53ef\u4ee5\u5c06\u4e00\u4e2a\u5bf9\u8c61\u7684\u6240\u6709\u53ef\u8c03\u7528\u7684\u516c\u5f00\u63a5\u53e3\u5c55\u793a\u51fa\u6765\u3002"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"hook \u662f\u4e00\u4e2a\u9ad8\u9636\u6a21\u5757")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("inlineCode",{parentName:"p"},"hook")," \u662f\u4e00\u4e2a\u9ad8\u9636\u6a21\u5757\uff0c\u4e3b\u8981\u7528\u4e8e\u52a0\u8f7d Yakit \u63d2\u4ef6\u4e0e\u8de8\u811a\u672c\u8c03\u7528 Yakit \u63d2\u4ef6\uff0c\u662f Yakit \u63d2\u4ef6\u7cfb\u7edf\u7684\u6838\u5fc3\u652f\u6301\u6a21\u5757\u3002"))))}u.isMDXComponent=!0}}]);