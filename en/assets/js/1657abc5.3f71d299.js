"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[379],{15680:(e,r,n)=>{n.d(r,{xA:()=>s,yg:()=>b});var t=n(96540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),u=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},s=function(e){var r=u(e.components);return t.createElement(c.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),y=o,b=p["".concat(c,".").concat(y)]||p[y]||m[y]||i;return n?t.createElement(b,a(a({ref:r},s),{},{components:n})):t.createElement(b,a({ref:r},s))}));function b(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},61787:(e,r,n)=>{n.r(r),n.d(r,{contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(58168),o=(n(96540),n(15680));const i={sidebar_position:1},a="01.Shiro CBC \u9ed8\u8ba4 KEY(<1.4.2)",l={unversionedId:"vulinbox/Shiro/01unsafe-shrio-cbc",id:"vulinbox/Shiro/01unsafe-shrio-cbc",isDocsHomePage:!1,title:"01.Shiro CBC \u9ed8\u8ba4 KEY(<1.4.2)",description:'shiro \u662f\u4e00\u4e2a\u7528\u4e8e\u5904\u7406\u8eab\u4efd\u9a8c\u8bc1\u3001\u6388\u6743\u3001\u4f1a\u8bdd\u7ba1\u7406\u7b49\u5b89\u5168\u529f\u80fd\u7684 Java \u6846\u67b6\u3002\u5728 Shiro \u7684\u914d\u7f6e\u4e2d\uff0c\u6709\u4e00\u4e2a\u5173\u952e\u7684\u5bc6\u94a5\uff08Secret Key\uff09\u7528\u4e8e\u52a0\u5bc6\u548c\u89e3\u5bc6\u6570\u636e\uff0c\u901a\u5e38\u79f0\u4e3a"RememberMe Cookie Key"\u3002\u8be5\u5bc6\u94a5\u7528\u4e8e\u4fdd\u62a4 RememberMe \u529f\u80fd\u4e2d\u7684 Cookie \u6570\u636e\u3002',source:"@site/Yaklab/vulinbox/Shiro/01unsafe-shrio-cbc.mdx",sourceDirName:"vulinbox/Shiro",slug:"/vulinbox/Shiro/01unsafe-shrio-cbc",permalink:"/en/Yaklab/vulinbox/Shiro/01unsafe-shrio-cbc",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"teamSidebar",previous:{title:"02.Bash \u89e3\u6790\u7684\u547d\u4ee4\u6ce8\u5165",permalink:"/en/Yaklab/vulinbox/EXEC/02unsafe-bash"},next:{title:"02.Shiro GCM \u9ed8\u8ba4 KEY(>=1.4.2)",permalink:"/en/Yaklab/vulinbox/Shiro/02unsafe-shiro-gcm"}},c=[{value:"\u793a\u4f8b\u4ee3\u7801\uff1a",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"\u653b\u51fb\u793a\u4f8b\uff1a",id:"\u653b\u51fb\u793a\u4f8b",children:[]},{value:"\u9632\u5fa1\u63aa\u65bd\uff1a",id:"\u9632\u5fa1\u63aa\u65bd",children:[]},{value:"\u9776\u573a\u6f14\u793a\uff1a \u89c6\u9891",id:"\u9776\u573a\u6f14\u793a-\u89c6\u9891",children:[]}],u={toc:c},s="wrapper";function p(e){let{components:r,...n}=e;return(0,o.yg)(s,(0,t.A)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"01shiro-cbc-\u9ed8\u8ba4-key142"},"01.Shiro CBC \u9ed8\u8ba4 KEY(<1.4.2)"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},'shiro \u662f\u4e00\u4e2a\u7528\u4e8e\u5904\u7406\u8eab\u4efd\u9a8c\u8bc1\u3001\u6388\u6743\u3001\u4f1a\u8bdd\u7ba1\u7406\u7b49\u5b89\u5168\u529f\u80fd\u7684 Java \u6846\u67b6\u3002\u5728 Shiro \u7684\u914d\u7f6e\u4e2d\uff0c\u6709\u4e00\u4e2a\u5173\u952e\u7684\u5bc6\u94a5\uff08Secret Key\uff09\u7528\u4e8e\u52a0\u5bc6\u548c\u89e3\u5bc6\u6570\u636e\uff0c\u901a\u5e38\u79f0\u4e3a"RememberMe Cookie Key"\u3002\u8be5\u5bc6\u94a5\u7528\u4e8e\u4fdd\u62a4 RememberMe \u529f\u80fd\u4e2d\u7684 Cookie \u6570\u636e\u3002'),(0,o.yg)("p",{parentName:"blockquote"},"Shiro \u9ed8\u8ba4\u914d\u7f6e\u4e2d\u7684\u8fd9\u4e2a\u5bc6\u94a5\u901a\u5e38\u662f\u786c\u7f16\u7801\u7684\uff0c\u8fd9\u5c31\u5bfc\u81f4\u4e86\u4e00\u4e2a\u6f5c\u5728\u7684\u5b89\u5168\u98ce\u9669\uff0c\u5373\u653b\u51fb\u8005\u53ef\u4ee5\u5229\u7528\u8fd9\u4e2a\u786c\u7f16\u7801\u7684\u5bc6\u94a5\u6765\u4f2a\u9020\u6216\u89e3\u5bc6 RememberMe Cookie\uff0c\u4ece\u800c\u83b7\u5f97\u5bf9\u5e94\u7528\u7a0b\u5e8f\u7684\u672a\u7ecf\u6388\u6743\u8bbf\u95ee\u6743\u9650\u3002\u8fd9\u4e2a\u95ee\u9898\u88ab\u79f0\u4e3a Shiro \u9ed8\u8ba4 key \u6f0f\u6d1e\u3002")),(0,o.yg)("p",null,"\u5728 Shiro 1.2.4 \u7248\u672c\u53ca\u4e4b\u524d\u7684\u7248\u672c\u4e2d\uff0c\u5b58\u5728\u4e00\u4e2a\u4e25\u91cd\u7684\u6f0f\u6d1e\uff0c\u8be5\u6f0f\u6d1e\u5141\u8bb8\u653b\u51fb\u8005\u901a\u8fc7\u4f2a\u9020 Cookie \u6765\u7ed5\u8fc7\u8eab\u4efd\u9a8c\u8bc1\uff0c\u8fdb\u800c\u8bbf\u95ee\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u53d7\u4fdd\u62a4\u8d44\u6e90\u3002\n\u8be5\u6f0f\u6d1e\u6d89\u53ca\u5230 Shiro \u5728\u5904\u7406 RememberMe \u529f\u80fd\u65f6\u4f7f\u7528\u7684\u9ed8\u8ba4\u5bc6\u94a5\uff0c\u5b83\u5728\u7279\u5b9a\u60c5\u51b5\u4e0b\u4f7f\u7528\u4e86\u4e00\u79cd\u4e0d\u5b89\u5168\u7684\u52a0\u5bc6\u6a21\u5f0f\uff08CBC \u6a21\u5f0f\uff09\u3002"),(0,o.yg)("h3",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-Go"},'{\n    DefaultQuery: "",\n    Path:         "/shiro/cbc",\n    Title:        "Shiro CBC \u9ed8\u8ba4KEY(<1.4.2)",\n    Handler: func(writer http.ResponseWriter, request *http.Request) {\n        failNow := func(writer http.ResponseWriter, request *http.Request, err error) {\n            // \u8bbe\u7f6e\u4e00\u4e2a\u5e26\u6709\u7279\u6b8a\u503c\u7684cookie\n            cookie := http.Cookie{\n                Name:     "rememberMe",\n                Value:    "deleteMe",\n                Expires:  time.Now().Add(7 * 24 * time.Hour),\n                HttpOnly: false,\n            }\n            http.SetCookie(writer, &cookie)\n            writer.WriteHeader(200)\n            if err != nil {\n                writer.Write([]byte(err.Error()))\n            }\n            return\n        }\n        successNow := func(writer http.ResponseWriter, request *http.Request) {\n            writer.WriteHeader(200)\n            return\n        }\n        rememberMe, err := request.Cookie("rememberMe")\n        if err != nil { // \u5982\u679c\u8bf7\u6c42\u4e2d\u6ca1\u6709rememberMe Cookie\uff0c\u5219\u8bbe\u7f6e\u4e00\u4e2a\u7279\u6b8a\u7684Cookie\n            failNow(writer, request, err)\n            return\n        }\n        cookieVal, _ := codec.DecodeBase64(rememberMe.Value)\n        var iv []byte\n        if len(cookieVal) > len(randKey) {\n            iv = cookieVal[:16]\n            cookieVal = cookieVal[16:]\n        } else { // \u7b2c\u4e00\u6b21\u8bf7\u6c42\u63a2\u6d4b\n            failNow(writer, request, err)\n            return\n        }\n        payload, err := codec.AESCBCDecrypt(randKey, cookieVal, iv)\n        if err != nil || payload == nil { // \u5982\u679c\u89e3\u5bc6\u5931\u8d25\uff0c\u8fd4\u56dedeleteMe\n            failNow(writer, request, err)\n            return\n        }\n        payload = codec.PKCS7UnPadding(payload)\n\n        checkGadget(payload, failNow, successNow, writer, request)\n        return\n    },\n    RiskDetected: true,\n}\n')),(0,o.yg)("h3",{id:"\u653b\u51fb\u793a\u4f8b"},"\u653b\u51fb\u793a\u4f8b\uff1a"),(0,o.yg)("p",null,"\u653b\u51fb\u8005\u53ef\u4ee5\u6a21\u62df\u7279\u5b9a Cookie\uff0c\u5e76\u5c06\u5176\u53d1\u9001\u5230\u6f0f\u6d1e\u53d7\u5f71\u54cd\u7684\u5e94\u7528\u7a0b\u5e8f\u3002\u901a\u8fc7\u5728 Cookie \u4e2d\u4f2a\u9020\u7279\u6b8a\u7684\u503c\uff0c\u653b\u51fb\u8005\u53ef\u4ee5\u5f15\u53d1\u89e3\u5bc6\u5931\u8d25\uff0c\u7ed5\u8fc7\u8eab\u4efd\u9a8c\u8bc1\u3002"),(0,o.yg)("p",null,"\u8fd9\u91cc\u4f7f\u7528 Yakit \u63d2\u4ef6\u300aShiro \u6307\u7eb9\u8bc6\u522b + \u5f31\u5bc6\u7801\u68c0\u6d4b\u300b"),(0,o.yg)("h3",{id:"\u9632\u5fa1\u63aa\u65bd"},"\u9632\u5fa1\u63aa\u65bd\uff1a"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u66f4\u65b0 Shiro \u7248\u672c\uff1a \u66f4\u65b0\u81f3\u66f4\u9ad8\u7248\u672c\uff0c\u4ee5\u4fee\u590d\u8be5\u6f0f\u6d1e\u3002"),(0,o.yg)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u5bc6\u94a5\uff1a \u4e0d\u8981\u4f7f\u7528\u9ed8\u8ba4\u5bc6\u94a5\uff0c\u81ea\u5b9a\u4e49 RememberMe Cookie \u5bc6\u94a5\uff0c\u5e76\u786e\u4fdd\u5b83\u662f\u968f\u673a\u751f\u6210\u7684\uff0c\u4ee5\u589e\u52a0\u653b\u51fb\u8005\u731c\u6d4b\u5bc6\u94a5\u7684\u96be\u5ea6\u3002"),(0,o.yg)("li",{parentName:"ul"},"\u76d1\u63a7\u548c\u65e5\u5fd7\u8bb0\u5f55\uff1a \u5b9e\u65bd\u76d1\u63a7\u548c\u65e5\u5fd7\u8bb0\u5f55\uff0c\u4ee5\u68c0\u6d4b\u548c\u54cd\u5e94\u5f02\u5e38\u6d3b\u52a8\uff0c\u4f8b\u5982\u591a\u6b21\u65e0\u6548\u7684 RememberMe Cookie \u5c1d\u8bd5\u3002"),(0,o.yg)("li",{parentName:"ul"},"\u9650\u5236 RememberMe \u529f\u80fd\uff1a \u5982\u679c\u4e0d\u662f\u5fc5\u9700\uff0c\u53ef\u4ee5\u8003\u8651\u7981\u7528 RememberMe \u529f\u80fd\uff0c\u4ee5\u51cf\u5c11\u76f8\u5173\u98ce\u9669\u3002")),(0,o.yg)("h3",{id:"\u9776\u573a\u6f14\u793a-\u89c6\u9891"},"\u9776\u573a\u6f14\u793a\uff1a \u89c6\u9891"),(0,o.yg)("video",{src:"/img/yaklab/shiro/01unsafe-shrio-cbc.mp4",loop:!0,playsInline:!0,controls:!0,autoPlay:!0,style:{width:890}}))}p.isMDXComponent=!0}}]);