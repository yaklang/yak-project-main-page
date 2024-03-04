"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[3484],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>g});var t=r(96540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),y=i,g=c["".concat(u,".").concat(y)]||c[y]||f[y]||a;return r?t.createElement(g,o(o({ref:n},p),{},{components:r})):t.createElement(g,o({ref:n},p))}));function g(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=y;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},17253:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var t=r(58168),i=(r(96540),r(15680));const a={sidebar_position:2},o="02.GET \u4e2d URL \u53c2\u6570",l={unversionedId:"vulinbox/SSRF/02unsafe-in-get",id:"vulinbox/SSRF/02unsafe-in-get",isDocsHomePage:!1,title:"02.GET \u4e2d URL \u53c2\u6570",description:"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u7b80\u5316\u7684\u793a\u4f8b\u4ee3\u7801\uff0c\u7528\u4e8e\u8bf4\u660e GET \u8bf7\u6c42\u4e2d\u7684 URL \u53c2\u6570 SSRF \u6f0f\u6d1e\u3002\u8be5\u793a\u4f8b\u4ee3\u7801\u5141\u8bb8\u7528\u6237\u63d0\u4f9b\u4e00\u4e2a URL \u4f5c\u4e3a\u67e5\u8be2\u53c2\u6570\uff0c\u7136\u540e\u53d1\u8d77 GET \u8bf7\u6c42\u5e76\u8fd4\u56de\u54cd\u5e94\u3002",source:"@site/Yaklab/vulinbox/SSRF/02unsafe-in-get.mdx",sourceDirName:"vulinbox/SSRF",slug:"/vulinbox/SSRF/02unsafe-in-get",permalink:"/en/Yaklab/vulinbox/SSRF/02unsafe-in-get",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"teamSidebar",previous:{title:"01.SSRF JSON Body SSRF",permalink:"/en/Yaklab/vulinbox/SSRF/01unsafe-json-in-get"},next:{title:"03.SSRF POST \u4e2d URL \u53c2\u6570",permalink:"/en/Yaklab/vulinbox/SSRF/03unsafe-in-post"}},u=[{value:"\u793a\u4f8b\u4ee3\u7801\uff1a",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"\u653b\u51fb\u793a\u4f8b\uff1a",id:"\u653b\u51fb\u793a\u4f8b",children:[]},{value:"\u9632\u5fa1\u63aa\u65bd\uff1a",id:"\u9632\u5fa1\u63aa\u65bd",children:[]},{value:"\u9776\u573a\u6f14\u793a\uff1a \u89c6\u9891",id:"\u9776\u573a\u6f14\u793a-\u89c6\u9891",children:[]}],s={toc:u},p="wrapper";function c(e){let{components:n,...a}=e;return(0,i.yg)(p,(0,t.A)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"02get-\u4e2d-url-\u53c2\u6570"},"02.GET \u4e2d URL \u53c2\u6570"),(0,i.yg)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u7b80\u5316\u7684\u793a\u4f8b\u4ee3\u7801\uff0c\u7528\u4e8e\u8bf4\u660e GET \u8bf7\u6c42\u4e2d\u7684 URL \u53c2\u6570 SSRF \u6f0f\u6d1e\u3002\u8be5\u793a\u4f8b\u4ee3\u7801\u5141\u8bb8\u7528\u6237\u63d0\u4f9b\u4e00\u4e2a URL \u4f5c\u4e3a\u67e5\u8be2\u53c2\u6570\uff0c\u7136\u540e\u53d1\u8d77 GET \u8bf7\u6c42\u5e76\u8fd4\u56de\u54cd\u5e94\u3002"),(0,i.yg)("h3",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Go"},'{\n    DefaultQuery: "url=http://www.baidu.com/",\n    Path:         "/in-get",\n    Title:        "SSRF GET \u4e2d URL \u53c2\u6570",\n    Handler: func(writer http.ResponseWriter, request *http.Request) {\n        ref := request.URL.Query().Get("url")\n        var u = fmt.Sprint(ref)\n        c := utils.NewDefaultHTTPClient()\n        c.Timeout = 5 * time.Second\n        rsp, err := c.Get(u)\n        if err != nil {\n            writer.Write([]byte(err.Error()))\n            return\n        }\n        rawResponse, err := utils.HttpDumpWithBody(rsp, true)\n        if err != nil {\n            writer.Write([]byte(err.Error()))\n            return\n        }\n        writer.Write(rawResponse)\n    },\n    RiskDetected: true,\n}\n')),(0,i.yg)("h3",{id:"\u653b\u51fb\u793a\u4f8b"},"\u653b\u51fb\u793a\u4f8b\uff1a"),(0,i.yg)("p",null,"\u5982\u679c\u76ee\u6807\u670d\u52a1\u5668\u5b58\u5728 SSRF \u6f0f\u6d1e\uff0c\u5b83\u5c06\u4f1a\u53d1\u8d77\u5bf9",(0,i.yg)("inlineCode",{parentName:"p"},"http://127.0.0.1:8787/ssrf/flag"),"\u7684 GET \u8bf7\u6c42\u3002\u653b\u51fb\u8005\u53ef\u4ee5\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u83b7\u53d6\u654f\u611f\u4fe1\u606f\u3001\u7ed5\u8fc7\u9632\u706b\u5899\uff0c\u751a\u81f3\u653b\u51fb\u5185\u90e8\u8d44\u6e90\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Plain"},"http://127.0.0.1:8787/ssrf/in-get?url=http://127.0.0.1:8787/ssrf/flag\n")),(0,i.yg)("p",null,(0,i.yg)("img",{src:r(15797).A})),(0,i.yg)("h3",{id:"\u9632\u5fa1\u63aa\u65bd"},"\u9632\u5fa1\u63aa\u65bd\uff1a"),(0,i.yg)("p",null,"\u8981\u9632\u8303\u8fd9\u79cd\u7c7b\u578b\u7684\u6f0f\u6d1e\uff0c\u5f00\u53d1\u8005\u9700\u8981\u5bf9\u8f93\u5165\u7684 URL \u53c2\u6570\u8fdb\u884c\u4e25\u683c\u7684\u9a8c\u8bc1\u548c\u8fc7\u6ee4\uff0c\u9650\u5236\u8bbf\u95ee\u5185\u90e8\u7f51\u7edc\u8d44\u6e90\u3002"),(0,i.yg)("p",null,"\u540c\u65f6\uff0c\u5bf9\u4e8e\u53d1\u8d77\u7684\u7f51\u7edc\u8bf7\u6c42\uff0c\u9700\u8981\u9650\u5236\u8bf7\u6c42\u7684\u76ee\u6807\u8303\u56f4\uff0c\u4ee5\u53ca\u5bf9\u8bf7\u6c42\u7684\u76ee\u6807\u8fdb\u884c\u767d\u540d\u5355\u63a7\u5236\uff0c\u907f\u514d\u8bbf\u95ee\u6076\u610f\u7ad9\u70b9\u3002"),(0,i.yg)("h3",{id:"\u9776\u573a\u6f14\u793a-\u89c6\u9891"},"\u9776\u573a\u6f14\u793a\uff1a \u89c6\u9891"),(0,i.yg)("video",{src:"/img/yaklab/ssrf/02unsafe-in-get.mp4",loop:!0,playsInline:!0,controls:!0,autoPlay:!0,style:{width:890}}))}c.isMDXComponent=!0},15797:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/02unsafe-in-get-bebdc448504b40a754d91e6a45c0cd6d.png"}}]);