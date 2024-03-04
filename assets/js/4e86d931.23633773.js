"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[8805],{15680:(e,r,n)=>{n.d(r,{xA:()=>s,yg:()=>f});var t=n(96540);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=t.createContext({}),c=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},s=function(e){var r=c(e.components);return t.createElement(u.Provider,{value:r},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,f=p["".concat(u,".").concat(d)]||p[d]||y[d]||a;return n?t.createElement(f,l(l({ref:r},s),{},{components:n})):t.createElement(f,l({ref:r},s))}));function f(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76425:(e,r,n)=>{n.r(r),n.d(r,{contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var t=n(58168),i=(n(96540),n(15680));const a={sidebar_position:1},l="01.\u4e0d\u5b58\u5728 SQL \u6ce8\u5165\u7684\u60c5\u51b5\uff08\u6570\u5b57\u4e25\u683c\u6821\u9a8c\uff09",o={unversionedId:"vulinbox/SQLi/01by-id-safe",id:"vulinbox/SQLi/01by-id-safe",isDocsHomePage:!1,title:"01.\u4e0d\u5b58\u5728 SQL \u6ce8\u5165\u7684\u60c5\u51b5\uff08\u6570\u5b57\u4e25\u683c\u6821\u9a8c\uff09",description:"\u8fd9\u4e2a\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u901a\u8fc7\u5bf9\u7528\u6237\u8f93\u5165\u7684\u53c2\u6570\u8fdb\u884c\u6570\u5b57\u4e25\u683c\u6821\u9a8c\uff0c\u4ece\u800c\u9632\u6b62 SQL \u6ce8\u5165\u653b\u51fb\u3002\u6570\u5b57\u4e25\u683c\u6821\u9a8c\u786e\u4fdd\u53ea\u6709\u6709\u6548\u7684\u6570\u5b57\u88ab\u7528\u4f5c SQL \u67e5\u8be2\u7684\u53c2\u6570\uff0c\u800c\u4e0d\u5141\u8bb8\u63d2\u5165\u6076\u610f\u7684 SQL \u4ee3\u7801\u3002",source:"@site/Yaklab/vulinbox/SQLi/01by-id-safe.md",sourceDirName:"vulinbox/SQLi",slug:"/vulinbox/SQLi/01by-id-safe",permalink:"/Yaklab/vulinbox/SQLi/01by-id-safe",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"teamSidebar",previous:{title:"Vulinbox \u9776\u573a\u4ecb\u7ecd\u548c\u5b89\u88c5",permalink:"/Yaklab/vulinbox/vulinbox"},next:{title:"02.ID \u4e3a\u6570\u5b57\u578b\u7684\u7b80\u5355\u8fb9\u754c SQL \u6ce8\u5165",permalink:"/Yaklab/vulinbox/SQLi/02unsafe-id"}},u=[{value:"\u793a\u4f8b\u4ee3\u7801\uff1a",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"\u4ee3\u7801\u5206\u6790\uff1a",id:"\u4ee3\u7801\u5206\u6790",children:[]},{value:"\u6ce8\u610f\uff1a",id:"\u6ce8\u610f",children:[]}],c={toc:u},s="wrapper";function p(e){let{components:r,...n}=e;return(0,i.yg)(s,(0,t.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"01\u4e0d\u5b58\u5728-sql-\u6ce8\u5165\u7684\u60c5\u51b5\u6570\u5b57\u4e25\u683c\u6821\u9a8c"},"01.\u4e0d\u5b58\u5728 SQL \u6ce8\u5165\u7684\u60c5\u51b5\uff08\u6570\u5b57\u4e25\u683c\u6821\u9a8c\uff09"),(0,i.yg)("p",null,"\u8fd9\u4e2a\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u901a\u8fc7\u5bf9\u7528\u6237\u8f93\u5165\u7684\u53c2\u6570\u8fdb\u884c\u6570\u5b57\u4e25\u683c\u6821\u9a8c\uff0c\u4ece\u800c\u9632\u6b62 SQL \u6ce8\u5165\u653b\u51fb\u3002\u6570\u5b57\u4e25\u683c\u6821\u9a8c\u786e\u4fdd\u53ea\u6709\u6709\u6548\u7684\u6570\u5b57\u88ab\u7528\u4f5c SQL \u67e5\u8be2\u7684\u53c2\u6570\uff0c\u800c\u4e0d\u5141\u8bb8\u63d2\u5165\u6076\u610f\u7684 SQL \u4ee3\u7801\u3002"),(0,i.yg)("h3",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'{\n    DefaultQuery: "id=1",\n    Path:         "/user/by-id-safe",\n    Title:        "\u4e0d\u5b58\u5728SQL\u6ce8\u5165\u7684\u60c5\u51b5\uff08\u6570\u5b57\u4e25\u683c\u6821\u9a8c\uff09",\n    Handler: func(writer http.ResponseWriter, request *http.Request) {\n        var a = request.URL.Query().Get("id")\n        i, err := strconv.ParseInt(a, 10, 64)\n        if err != nil {\n            writer.Write([]byte(err.Error()))\n            writer.WriteHeader(500)\n            return\n        }\n        u, err := s.database.GetUserById(int(i))\n        if err != nil {\n            writer.Write([]byte(err.Error()))\n            writer.WriteHeader(500)\n            return\n        }\n        sqliWriter(writer, request, []*VulinUser{u})\n        return\n    },\n    RiskDetected:   false,\n    ExpectedResult: map[string]int{"\u53c2\u6570:id\u672a\u68c0\u6d4b\u5230\u95ed\u5408\u8fb9\u754c": 1},\n}\n')),(0,i.yg)("h3",{id:"\u4ee3\u7801\u5206\u6790"},"\u4ee3\u7801\u5206\u6790\uff1a"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u8fd9\u4e2a\u793a\u4f8b\u63a5\u6536\u4e00\u4e2a\u540d\u4e3a ",(0,i.yg)("inlineCode",{parentName:"li"},"id")," \u7684\u67e5\u8be2\u53c2\u6570\uff0c\u8be5\u53c2\u6570\u9884\u671f\u662f\u4e00\u4e2a\u6574\u6570\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u901a\u8fc7\u4f7f\u7528 ",(0,i.yg)("inlineCode",{parentName:"li"},"strconv.ParseInt")," \u51fd\u6570\uff0c\u5c06\u7528\u6237\u63d0\u4f9b\u7684 ",(0,i.yg)("inlineCode",{parentName:"li"},"id")," \u53c2\u6570\u89e3\u6790\u4e3a\u4e00\u4e2a 64 \u4f4d\u6574\u6570\u3002\u5982\u679c\u89e3\u6790\u5931\u8d25\uff0c\u5c06\u8fd4\u56de\u4e00\u4e2a\u9519\u8bef\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u4f7f\u7528\u89e3\u6790\u540e\u7684\u6574\u6570\u503c\u6765\u6267\u884c\u6570\u636e\u5e93\u67e5\u8be2\uff0c\u8fd9\u4e2a\u503c\u4e0d\u5305\u542b\u6076\u610f\u7684 SQL \u6ce8\u5165\u4ee3\u7801\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u6700\u540e\uff0c\u5c06\u67e5\u8be2\u7ed3\u679c\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002")),(0,i.yg)("h3",{id:"\u6ce8\u610f"},"\u6ce8\u610f\uff1a"),(0,i.yg)("p",null,"\u6570\u5b57\u4e25\u683c\u6821\u9a8c\u662f\u4e00\u79cd\u6709\u6548\u7684\u9632\u5fa1\u63aa\u65bd\uff0c\u4f46\u5728\u5b9e\u9645\u5e94\u7528\u4e2d\uff0c\u8fd8\u9700\u8981\u8003\u8651\u5176\u4ed6\u5b89\u5168\u6027\u65b9\u9762\u7684\u56e0\u7d20\uff0c\u4f8b\u5982\u6743\u9650\u63a7\u5236\u548c\u8f93\u5165\u9a8c\u8bc1\uff0c\u4ee5\u7ef4\u62a4\u5e94\u7528\u7a0b\u5e8f\u7684\u5b89\u5168\u6027\u3002"))}p.isMDXComponent=!0}}]);