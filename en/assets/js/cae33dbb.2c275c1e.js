"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[3010],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>g});var t=r(96540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),p=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(u.Provider,{value:n},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,g=s["".concat(u,".").concat(m)]||s[m]||y[m]||i;return r?t.createElement(g,l(l({ref:n},c),{},{components:r})):t.createElement(g,l({ref:n},c))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},71868:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var t=r(58168),a=(r(96540),r(15680));const i={sidebar_position:9},l="09.\u5b57\u7b26\u4e32\u6ce8\u5165\u70b9\u6a21\u7cca\u67e5\u8be2(\u62ec\u53f7\u8fb9\u754c)",o={unversionedId:"vulinbox/SQLi/09unsafe-like2",id:"vulinbox/SQLi/09unsafe-like2",isDocsHomePage:!1,title:"09.\u5b57\u7b26\u4e32\u6ce8\u5165\u70b9\u6a21\u7cca\u67e5\u8be2(\u62ec\u53f7\u8fb9\u754c)",description:"\u5728\u6b64\u6848\u4f8b\u4e2d\uff0c\u4ecd\u4f7f\u7528\u4e86LIKE\u8bed\u53e5\u8fdb\u884c\u6a21\u7cca\u67e5\u8be2\uff0c\u4f46\u589e\u52a0\u4e86\u67e5\u8be2\u6761\u4ef6\u5e76\u4e14\u4f7f\u7528\u4e86\u62ec\u53f7\u5305\u88f9\uff0c\u8003\u9a8c\u653b\u51fb\u8005\u80fd\u5426\u6b63\u5e38\u95ed\u5408\u62ec\u53f7\uff0c\u8be5 SQL \u8bed\u53e5\u6ca1\u6709\u5bf9\u7528\u6237\u8f93\u5165\u8fdb\u884c\u4efb\u4f55\u8fc7\u6ee4\u6216\u8f6c\u4e49\uff0c\u8fd9\u5c31\u4e3a\u6ce8\u5165\u653b\u51fb\u63d0\u4f9b\u4e86\u673a\u4f1a\u3002",source:"@site/Yaklab/vulinbox/SQLi/09unsafe-like2.mdx",sourceDirName:"vulinbox/SQLi",slug:"/vulinbox/SQLi/09unsafe-like2",permalink:"/en/Yaklab/vulinbox/SQLi/09unsafe-like2",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"teamSidebar",previous:{title:"08.\u5b57\u7b26\u4e32\u6ce8\u5165\u70b9\u6a21\u7cca\u67e5\u8be2",permalink:"/en/Yaklab/vulinbox/SQLi/08unsafe-like"},next:{title:"10.\u53c2\u6570\u7f16\u7801\u5b57\u7b26\u4e32\u6ce8\u5165\u70b9\u6a21\u7cca\u67e5\u8be2(\u62ec\u53f7\u8fb9\u754c)",permalink:"/en/Yaklab/vulinbox/SQLi/10unsafe-likeb64"}},u=[{value:"\u793a\u4f8b\u4ee3\u7801\uff1a",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"\u653b\u51fb\u793a\u4f8b\uff1a",id:"\u653b\u51fb\u793a\u4f8b",children:[]},{value:"\u9632\u5fa1\u63aa\u65bd\uff1a",id:"\u9632\u5fa1\u63aa\u65bd",children:[]},{value:"\u9776\u573a\u6f14\u793a\uff1a \u89c6\u9891",id:"\u9776\u573a\u6f14\u793a-\u89c6\u9891",children:[]}],p={toc:u},c="wrapper";function s(e){let{components:n,...r}=e;return(0,a.yg)(c,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"09\u5b57\u7b26\u4e32\u6ce8\u5165\u70b9\u6a21\u7cca\u67e5\u8be2\u62ec\u53f7\u8fb9\u754c"},"09.\u5b57\u7b26\u4e32\u6ce8\u5165\u70b9\u6a21\u7cca\u67e5\u8be2(\u62ec\u53f7\u8fb9\u754c)"),(0,a.yg)("p",null,"\u5728\u6b64\u6848\u4f8b\u4e2d\uff0c\u4ecd\u4f7f\u7528\u4e86",(0,a.yg)("inlineCode",{parentName:"p"},"LIKE"),"\u8bed\u53e5\u8fdb\u884c\u6a21\u7cca\u67e5\u8be2\uff0c\u4f46\u589e\u52a0\u4e86\u67e5\u8be2\u6761\u4ef6\u5e76\u4e14\u4f7f\u7528\u4e86\u62ec\u53f7\u5305\u88f9\uff0c\u8003\u9a8c\u653b\u51fb\u8005\u80fd\u5426\u6b63\u5e38\u95ed\u5408\u62ec\u53f7\uff0c\u8be5 SQL \u8bed\u53e5\u6ca1\u6709\u5bf9\u7528\u6237\u8f93\u5165\u8fdb\u884c\u4efb\u4f55\u8fc7\u6ee4\u6216\u8f6c\u4e49\uff0c\u8fd9\u5c31\u4e3a\u6ce8\u5165\u653b\u51fb\u63d0\u4f9b\u4e86\u673a\u4f1a\u3002"),(0,a.yg)("h3",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Plain"}," http://127.0.0.1:8787/user/name/like/2?name=a&debug=1\n #\u67e5\u8be2\u540d\u79f0\u4e3aa\u5e76\u4e14\u5e74\u9f84\u5927\u4e8e20\u7684\u7528\u6237\n select * from vulin_users where (username LIKE '%a%') AND (age > 20);\n")),(0,a.yg)("h3",{id:"\u653b\u51fb\u793a\u4f8b"},"\u653b\u51fb\u793a\u4f8b\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-Plain"}," http://127.0.0.1:8787/user/name/like/2?name=' OR 1=1) --&debug=1\n #\u5982\u679c\u5e94\u7528\u7a0b\u5e8f\u672a\u8fdb\u884c\u9002\u5f53\u7684\u5904\u7406\uff0c\u6700\u7ec8\u7684\u67e5\u8be2\u8bed\u53e5\u4f1a\u53d8\u6210\uff1a\n select * from vulin_users where (username LIKE '%' OR 1=1) --%') AND (age > 20);\n #\u5b9e\u9645\u8bed\u53e5\u540c\u4e0b\n select * from vulin_users where (username LIKE '%' OR 1=1);\n")),(0,a.yg)("p",null,"\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u653b\u51fb\u8005\u5c06",(0,a.yg)("inlineCode",{parentName:"p"},"$a"),"\u8bbe\u7f6e\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"' OR 1=1)--"),"\uff0c\u8fd9\u5c06\u5bfc\u81f4 SQL \u67e5\u8be2\u4e2d\u7684",(0,a.yg)("inlineCode",{parentName:"p"},"WHERE"),"\u6761\u4ef6\u6c38\u8fdc\u4e3a\u771f\uff0c\u56e0\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"1=1"),"\u59cb\u7ec8\u4e3a\u771f\u3002\u5e76\u4e14",(0,a.yg)("inlineCode",{parentName:"p"},"--"),"\u8868\u793a SQL \u4e2d\u7684\u5355\u884c\u6ce8\u91ca\uff0c\u4f1a\u4f7f\u540e\u7eed\u7684\u67e5\u8be2\u8bed\u53e5\u88ab\u5ffd\u7565\u6389\u3002\u8fd9\u6837\uff0c\u653b\u51fb\u8005\u5c31\u53ef\u4ee5\u7ed5\u8fc7\u539f\u672c\u7684\u67e5\u8be2\u6761\u4ef6\uff0c\u83b7\u53d6",(0,a.yg)("inlineCode",{parentName:"p"},"vulin_users"),"\u8868\u4e2d\u6240\u6709\u7528\u6237\u8bb0\u5f55\u3002"),(0,a.yg)("h3",{id:"\u9632\u5fa1\u63aa\u65bd"},"\u9632\u5fa1\u63aa\u65bd\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4f7f\u7528\u53c2\u6570\u5316\u67e5\u8be2\u6216\u9884\u5904\u7406\u8bed\u53e5\uff1a \u4e0d\u8981\u5c06\u7528\u6237\u8f93\u5165\u76f4\u63a5\u62fc\u63a5\u5230 SQL \u67e5\u8be2\u4e2d\u3002\u4f7f\u7528\u53c2\u6570\u5316\u67e5\u8be2\u6216\u9884\u5904\u7406\u8bed\u53e5\uff0c\u5c06\u7528\u6237\u8f93\u5165\u4f5c\u4e3a\u53c2\u6570\u7ed1\u5b9a\u5230\u67e5\u8be2\u4e2d\uff0c\u6570\u636e\u5e93\u5f15\u64ce\u4f1a\u81ea\u52a8\u5904\u7406\u8f93\u5165\u7684\u8f6c\u4e49\uff0c\u907f\u514d\u6ce8\u5165\u653b\u51fb\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u4f7f\u7528 ORM\uff08\u5bf9\u8c61\u5173\u7cfb\u6620\u5c04\uff09\uff1a \u4f7f\u7528 ORM \u6846\u67b6\uff0c\u4f8b\u5982 Hibernate\u3001Sequelize \u7b49\uff0c\u53ef\u4ee5\u907f\u514d\u76f4\u63a5\u4f7f\u7528\u539f\u59cb SQL \u67e5\u8be2\uff0cORM \u6846\u67b6\u4f1a\u81ea\u52a8\u8fdb\u884c\u67e5\u8be2\u53c2\u6570\u7684\u5904\u7406\u3002"),(0,a.yg)("li",{parentName:"ul"},"\u8f93\u5165\u9a8c\u8bc1\u548c\u8fc7\u6ee4\uff1a \u5bf9\u4e8e\u6240\u6709\u4ece\u7528\u6237\u83b7\u53d6\u7684\u8f93\u5165\uff0c\u8fdb\u884c\u5408\u6cd5\u6027\u9a8c\u8bc1\u548c\u9002\u5f53\u7684\u8fc7\u6ee4\uff0c\u786e\u4fdd\u8f93\u5165\u7b26\u5408\u9884\u671f\u7684\u683c\u5f0f\u548c\u8303\u56f4\u3002\u62d2\u7edd\u975e\u6cd5\u7684\u8f93\u5165\uff0c\u9632\u6b62\u6076\u610f\u8f93\u5165\u8fdb\u5165\u6570\u636e\u5e93\u67e5\u8be2\u3002")),(0,a.yg)("h3",{id:"\u9776\u573a\u6f14\u793a-\u89c6\u9891"},"\u9776\u573a\u6f14\u793a\uff1a \u89c6\u9891"),(0,a.yg)("video",{src:"/img/yaklab/sqli/09unsafe-like2.mp4",loop:!0,playsInline:!0,controls:!0,autoPlay:!0,style:{width:890}}))}s.isMDXComponent=!0}}]);