"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[5730],{15680:(e,n,r)=>{r.d(n,{xA:()=>s,yg:()=>o});var g=r(96540);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(e);n&&(g=g.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,g)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function t(e,n){if(null==e)return{};var r,g,l=function(e,n){if(null==e)return{};var r,g,l={},p=Object.keys(e);for(g=0;g<p.length;g++)r=p[g],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(g=0;g<p.length;g++)r=p[g],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=g.createContext({}),c=function(e){var n=g.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=c(e.components);return g.createElement(i.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return g.createElement(g.Fragment,{},n)}},d=g.forwardRef((function(e,n){var r=e.components,l=e.mdxType,p=e.originalType,i=e.parentName,s=t(e,["components","mdxType","originalType","parentName"]),u=c(r),d=l,o=u["".concat(i,".").concat(d)]||u[d]||y[d]||p;return r?g.createElement(o,a(a({ref:n},s),{},{components:r})):g.createElement(o,a({ref:n},s))}));function o(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var p=r.length,a=new Array(p);a[0]=d;var t={};for(var i in n)hasOwnProperty.call(n,i)&&(t[i]=n[i]);t.originalType=e,t[u]="string"==typeof e?e:l,a[1]=t;for(var c=2;c<p;c++)a[c]=r[c];return g.createElement.apply(null,a)}return g.createElement.apply(null,r)}d.displayName="MDXCreateElement"},30325:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>a,default:()=>u,frontMatter:()=>p,metadata:()=>t,toc:()=>i});var g=r(58168),l=(r(96540),r(15680));const p={sidebar_position:31},a="Spring\u63d2\u4ef6\u4f7f\u7528",t={unversionedId:"wiki/DetectionPlug-in/spring",id:"wiki/DetectionPlug-in/spring",isDocsHomePage:!1,title:"Spring\u63d2\u4ef6\u4f7f\u7528",description:"1 CVE-2022-22965 \u8fdc\u7a0b\u4ee3\u7801\u6267\u884c\u6f0f\u6d1e",source:"@site/Yaklab/wiki/DetectionPlug-in/spring.md",sourceDirName:"wiki/DetectionPlug-in",slug:"/wiki/DetectionPlug-in/spring",permalink:"/Yaklab/wiki/DetectionPlug-in/spring",tags:[],version:"current",sidebarPosition:31,frontMatter:{sidebar_position:31},sidebar:"teamSidebar",previous:{title:"Joomla\u63d2\u4ef6\u4f7f\u7528",permalink:"/Yaklab/wiki/DetectionPlug-in/Joomla"},next:{title:"Yakit \u914d\u5408 Proxifier \u5c0f\u7a0b\u5e8f\u6293\u5305",permalink:"/Yaklab/WeChatAppEx"}},i=[{value:"1 CVE-2022-22965 \u8fdc\u7a0b\u4ee3\u7801\u6267\u884c\u6f0f\u6d1e",id:"1-cve-2022-22965-\u8fdc\u7a0b\u4ee3\u7801\u6267\u884c\u6f0f\u6d1e",children:[]},{value:"2 springboot env unauth \u6f0f\u6d1e",id:"2-springboot-env-unauth-\u6f0f\u6d1e",children:[]},{value:"3 Spring Actuator \u654f\u611f\u4fe1\u606f\u6cc4\u6f0f",id:"3-spring-actuator-\u654f\u611f\u4fe1\u606f\u6cc4\u6f0f",children:[]},{value:"4 CVE-2018-1273 \u6f0f\u6d1e\u68c0\u6d4b",id:"4-cve-2018-1273-\u6f0f\u6d1e\u68c0\u6d4b",children:[]},{value:"5 CVE-2022-22963 \u6f0f\u6d1e\u68c0\u6d4b",id:"5-cve-2022-22963-\u6f0f\u6d1e\u68c0\u6d4b",children:[]},{value:"6 Spring Cloud Function SPEL\u8868\u8fbe\u5f0f\u6ce8\u5165\u6f0f\u6d1e",id:"6-spring-cloud-function-spel\u8868\u8fbe\u5f0f\u6ce8\u5165\u6f0f\u6d1e",children:[]},{value:"7 CVE-2022-22947 \u6f0f\u6d1e\u68c0\u6d4b",id:"7-cve-2022-22947-\u6f0f\u6d1e\u68c0\u6d4b",children:[]},{value:"8 CVE-2020-5398 \u53cd\u5c04\u578b\u6587\u4ef6\u4e0b\u8f7d\u6f0f\u6d1e",id:"8-cve-2020-5398-\u53cd\u5c04\u578b\u6587\u4ef6\u4e0b\u8f7d\u6f0f\u6d1e",children:[]},{value:"9 Spring Whitelabel Error Page SpEL\u8868\u8fbe\u5f0f\u6ce8\u5165\u6f0f\u6d1e",id:"9-spring-whitelabel-error-page-spel\u8868\u8fbe\u5f0f\u6ce8\u5165\u6f0f\u6d1e",children:[]},{value:"10 CVE-2020-5410 \u76ee\u5f55\u904d\u5386\u6f0f\u6d1e\u68c0\u6d4b",id:"10-cve-2020-5410-\u76ee\u5f55\u904d\u5386\u6f0f\u6d1e\u68c0\u6d4b",children:[]},{value:"11 CVE-2019-3799 \u76ee\u5f55\u904d\u5386\u6f0f\u6d1e",id:"11-cve-2019-3799-\u76ee\u5f55\u904d\u5386\u6f0f\u6d1e",children:[]},{value:"12 Spring Security OAuth RCE SpEL\u6ce8\u5165\u6f0f\u6d1e",id:"12-spring-security-oauth-rce-spel\u6ce8\u5165\u6f0f\u6d1e",children:[]},{value:"13 Spring Cloud Gateway \u8fdc\u7a0b\u4ee3\u7801\u6267\u884c\u6f0f\u6d1e",id:"13-spring-cloud-gateway-\u8fdc\u7a0b\u4ee3\u7801\u6267\u884c\u6f0f\u6d1e",children:[]},{value:"14 CVE-2017-8046 \u6f0f\u6d1e\u68c0\u6d4b",id:"14-cve-2017-8046-\u6f0f\u6d1e\u68c0\u6d4b",children:[]},{value:"15 CVE-2022-22965 DNS\u53cd\u8fde\u68c0\u6d4b",id:"15-cve-2022-22965-dns\u53cd\u8fde\u68c0\u6d4b",children:[]},{value:"16 Spring Boot-\u4fe1\u606f\u6cc4\u9732\u6f0f\u6d1e",id:"16-spring-boot-\u4fe1\u606f\u6cc4\u9732\u6f0f\u6d1e",children:[]},{value:"17 Spring Cloud Config Server \u76ee\u5f55\u904d\u5386\u6f0f\u6d1e",id:"17-spring-cloud-config-server-\u76ee\u5f55\u904d\u5386\u6f0f\u6d1e",children:[]},{value:"18 CVE-2021-21234 \u76ee\u5f55\u904d\u5386",id:"18-cve-2021-21234-\u76ee\u5f55\u904d\u5386",children:[]},{value:"19 CVE-2020-5405 \u8def\u5f84\u7a7f\u8d8a\u6f0f\u6d1e",id:"19-cve-2020-5405-\u8def\u5f84\u7a7f\u8d8a\u6f0f\u6d1e",children:[]}],c={toc:i},s="wrapper";function u(e){let{components:n,...p}=e;return(0,l.yg)(s,(0,g.A)({},c,p,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"spring\u63d2\u4ef6\u4f7f\u7528"},"Spring\u63d2\u4ef6\u4f7f\u7528"),(0,l.yg)("h2",{id:"1-cve-2022-22965-\u8fdc\u7a0b\u4ee3\u7801\u6267\u884c\u6f0f\u6d1e"},"1 CVE-2022-22965 \u8fdc\u7a0b\u4ee3\u7801\u6267\u884c\u6f0f\u6d1e"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,l.yg)("p",null,"552eee98-1201-40bd-bc4a-019ce80c3655"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,l.yg)("p",null,"Yakit\u63d2\u4ef6\u8f93\u5165url + \u7aef\u53e3\u5f97\u51fa\u6d4b\u8bd5\u7ed3\u679c"),(0,l.yg)("p",null,(0,l.yg)("img",{src:r(89831).A})),(0,l.yg)("h2",{id:"2-springboot-env-unauth-\u6f0f\u6d1e"},"2 springboot env unauth \u6f0f\u6d1e"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,l.yg)("p",null,"edde968f-5246-44c3-b0fd-7af3eaacfa96"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,l.yg)("p",null,"Yakit\u63d2\u4ef6\u8f93\u5165url + \u7aef\u53e3\u5f97\u51fa\u6d4b\u8bd5\u7ed3\u679c"),(0,l.yg)("p",null,(0,l.yg)("img",{src:r(87180).A})),(0,l.yg)("p",null,"\u6d4b\u8bd5\u7f51\u7ad9\u771f\u6b63\u5b58\u5728\u6f0f\u6d1e\u7684\u8def\u5f84\u662f/env"),(0,l.yg)("p",null,(0,l.yg)("img",{src:r(23093).A})),(0,l.yg)("h2",{id:"3-spring-actuator-\u654f\u611f\u4fe1\u606f\u6cc4\u6f0f"},"3 Spring Actuator \u654f\u611f\u4fe1\u606f\u6cc4\u6f0f"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,l.yg)("p",null,"c6195a4c-6a1f-4240-b0b8-f148a7d84b4f"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,l.yg)("p",null,"Yakit\u6302\u7740\u63d2\u4ef6\u6210\u529f\u68c0\u6d4b\u51fa\u6f0f\u6d1e"),(0,l.yg)("p",null,(0,l.yg)("img",{src:r(99322).A})),(0,l.yg)("h2",{id:"4-cve-2018-1273-\u6f0f\u6d1e\u68c0\u6d4b"},"4 CVE-2018-1273 \u6f0f\u6d1e\u68c0\u6d4b"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,l.yg)("p",null,"d0b071ec-2518-48d7-befe-d1e2acd66ee3"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,l.yg)("p",null,"\u9776\u573a\u73af\u5883\uff1aVulhub\n\u8bbf\u95eeurl\uff1a"),(0,l.yg)("p",null,(0,l.yg)("img",{src:r(47075).A})),(0,l.yg)("p",null,"\u4f7f\u7528yakit\u63d2\u4ef6\u5bf9\u8be5\u7ad9\u70b9\u8fdb\u884c\u6d4b\u8bd5\uff1a\u8f93\u5165url+\u7aef\u53e3\u53f7"),(0,l.yg)("p",null,(0,l.yg)("img",{src:r(10216).A})),(0,l.yg)("h2",{id:"5-cve-2022-22963-\u6f0f\u6d1e\u68c0\u6d4b"},"5 CVE-2022-22963 \u6f0f\u6d1e\u68c0\u6d4b"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,l.yg)("p",null,"823238dd-db66-4024-8dd3-5404060f8d5c"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,l.yg)("p",null,"\u4f7f\u7528yakit\u63d2\u4ef6\u5bf9\u8be5\u7ad9\u70b9\u8fdb\u884c\u6d4b\u8bd5\uff1a\u8f93\u5165url+\u7aef\u53e3\u53f7"),(0,l.yg)("p",null,(0,l.yg)("img",{src:r(4081).A})),(0,l.yg)("h2",{id:"6-spring-cloud-function-spel\u8868\u8fbe\u5f0f\u6ce8\u5165\u6f0f\u6d1e"},"6 Spring Cloud Function SPEL\u8868\u8fbe\u5f0f\u6ce8\u5165\u6f0f\u6d1e"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,l.yg)("p",null,"0934ab9c-9d75-445a-a2eb-d4b39dfcb1aa"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,l.yg)("p",null,"\u4f7f\u7528yakit\u63d2\u4ef6\u5bf9\u8be5\u7ad9\u70b9\u8fdb\u884c\u6d4b\u8bd5\uff1a\u8f93\u5165url+\u7aef\u53e3\u53f7"),(0,l.yg)("p",null,(0,l.yg)("img",{src:r(43126).A})),(0,l.yg)("h2",{id:"7-cve-2022-22947-\u6f0f\u6d1e\u68c0\u6d4b"},"7 CVE-2022-22947 \u6f0f\u6d1e\u68c0\u6d4b"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,l.yg)("p",null,"8c784bb1-80c8-449f-8dfc-00022bbb65f7"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,l.yg)("p",null,"\u4f7f\u7528yakit\u63d2\u4ef6\u5bf9\u8be5\u7ad9\u70b9\u8fdb\u884c\u6d4b\u8bd5\uff1a\u8f93\u5165url+\u7aef\u53e3\u53f7"),(0,l.yg)("p",null,(0,l.yg)("img",{src:r(40063).A})),(0,l.yg)("h2",{id:"8-cve-2020-5398-\u53cd\u5c04\u578b\u6587\u4ef6\u4e0b\u8f7d\u6f0f\u6d1e"},"8 CVE-2020-5398 \u53cd\u5c04\u578b\u6587\u4ef6\u4e0b\u8f7d\u6f0f\u6d1e"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,l.yg)("p",null,"5cb01b5a-c29f-4e4a-8d4c-0152545a14ce"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,l.yg)("p",null,"Yakit\u63d2\u4ef6\u8f93\u5165url\u52a0\u7aef\u53e3\u540e\u5f00\u59cb\u6267\u884c\u6d4b\u8bd5\uff0c\u5f97\u5230\u6d4b\u8bd5\u7ed3\u679c"),(0,l.yg)("p",null,(0,l.yg)("img",{src:r(35943).A})),(0,l.yg)("h2",{id:"9-spring-whitelabel-error-page-spel\u8868\u8fbe\u5f0f\u6ce8\u5165\u6f0f\u6d1e"},"9 Spring Whitelabel Error Page SpEL\u8868\u8fbe\u5f0f\u6ce8\u5165\u6f0f\u6d1e"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,l.yg)("p",null,"b770e799-ce06-459c-8d27-ead1ece640ba"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,l.yg)("p",null,"Yakit\u63d2\u4ef6\u8f93\u5165url\u52a0\u7aef\u53e3\u540e\u5f00\u59cb\u6267\u884c\u6d4b\u8bd5\uff0c\u5f97\u5230\u6d4b\u8bd5\u7ed3\u679c"),(0,l.yg)("p",null,(0,l.yg)("img",{src:r(17630).A})),(0,l.yg)("h2",{id:"10-cve-2020-5410-\u76ee\u5f55\u904d\u5386\u6f0f\u6d1e\u68c0\u6d4b"},"10 CVE-2020-5410 \u76ee\u5f55\u904d\u5386\u6f0f\u6d1e\u68c0\u6d4b"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,l.yg)("p",null,"675af3f1-e1a4-48e1-bb93-5db0967cceed"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,l.yg)("p",null,"Yakit\u63d2\u4ef6\u8f93\u5165url\u52a0\u7aef\u53e3\u540e\u5f00\u59cb\u6267\u884c\u6d4b\u8bd5\uff0c\u5f97\u5230\u6d4b\u8bd5\u7ed3\u679c"),(0,l.yg)("p",null,(0,l.yg)("img",{src:r(84981).A})),(0,l.yg)("h2",{id:"11-cve-2019-3799-\u76ee\u5f55\u904d\u5386\u6f0f\u6d1e"},"11 CVE-2019-3799 \u76ee\u5f55\u904d\u5386\u6f0f\u6d1e"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,l.yg)("p",null,"c0ea2e04-1dde-41f7-ad76-3216a7289a61"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,l.yg)("p",null,"\u6682\u65e0\u6848\u4f8b"),(0,l.yg)("h2",{id:"12-spring-security-oauth-rce-spel\u6ce8\u5165\u6f0f\u6d1e"},"12 Spring Security OAuth RCE SpEL\u6ce8\u5165\u6f0f\u6d1e"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,l.yg)("p",null,"Yakit\u6b63\u5728\u52aa\u529b\u7f16\u5199~"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,l.yg)("p",null,"\u6682\u65e0\u6848\u4f8b"),(0,l.yg)("h2",{id:"13-spring-cloud-gateway-\u8fdc\u7a0b\u4ee3\u7801\u6267\u884c\u6f0f\u6d1e"},"13 Spring Cloud Gateway \u8fdc\u7a0b\u4ee3\u7801\u6267\u884c\u6f0f\u6d1e"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,l.yg)("p",null,"05c0973e-c2eb-4003-b420-019e66f93ff6"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,l.yg)("p",null,"Yakit\u63d2\u4ef6\u8f93\u5165url\u52a0\u7aef\u53e3\u540e\u5f00\u59cb\u6267\u884c\u6d4b\u8bd5\uff0c\u5f97\u5230\u6d4b\u8bd5\u7ed3\u679c"),(0,l.yg)("p",null,(0,l.yg)("img",{src:r(15884).A})),(0,l.yg)("h2",{id:"14-cve-2017-8046-\u6f0f\u6d1e\u68c0\u6d4b"},"14 CVE-2017-8046 \u6f0f\u6d1e\u68c0\u6d4b"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,l.yg)("p",null,"19584629-4991-496b-8f17-c0487b25144e"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,l.yg)("p",null,"Yakit\u63d2\u4ef6\u8f93\u5165url\u52a0\u7aef\u53e3\u540e\u5f00\u59cb\u6267\u884c\u6d4b\u8bd5\uff0c\u5f97\u5230\u6d4b\u8bd5\u7ed3\u679c"),(0,l.yg)("p",null,(0,l.yg)("img",{src:r(46051).A})),(0,l.yg)("h2",{id:"15-cve-2022-22965-dns\u53cd\u8fde\u68c0\u6d4b"},"15 CVE-2022-22965 DNS\u53cd\u8fde\u68c0\u6d4b"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,l.yg)("p",null,"2ac82fa2-bd21-4f40-933b-963821bdf52c"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,l.yg)("p",null,"Yakit\u63d2\u4ef6\u8f93\u5165url\u52a0\u7aef\u53e3\u540e\u5f00\u59cb\u6267\u884c\u6d4b\u8bd5\uff0c\u5f97\u5230\u6d4b\u8bd5\u7ed3\u679c"),(0,l.yg)("p",null,(0,l.yg)("img",{src:r(28474).A})),(0,l.yg)("h2",{id:"16-spring-boot-\u4fe1\u606f\u6cc4\u9732\u6f0f\u6d1e"},"16 Spring Boot-\u4fe1\u606f\u6cc4\u9732\u6f0f\u6d1e"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,l.yg)("p",null,"21ee4a8-8c2b-45a1-981e-ba9ee340bfc8"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,l.yg)("p",null,"Yakit\u63d2\u4ef6\u8f93\u5165url\u52a0\u7aef\u53e3\u540e\u5f00\u59cb\u6267\u884c\u6d4b\u8bd5\uff0c\u5f97\u5230\u6d4b\u8bd5\u7ed3\u679c"),(0,l.yg)("p",null,(0,l.yg)("img",{src:r(58641).A})),(0,l.yg)("h2",{id:"17-spring-cloud-config-server-\u76ee\u5f55\u904d\u5386\u6f0f\u6d1e"},"17 Spring Cloud Config Server \u76ee\u5f55\u904d\u5386\u6f0f\u6d1e"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,l.yg)("p",null,"Yakit\u6b63\u5728\u52aa\u529b\u7f16\u5199~"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,l.yg)("p",null,"\u6682\u65e0\u6848\u4f8b"),(0,l.yg)("h2",{id:"18-cve-2021-21234-\u76ee\u5f55\u904d\u5386"},"18 CVE-2021-21234 \u76ee\u5f55\u904d\u5386"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,l.yg)("p",null,"b70c9b72-31b0-494e-82fd-dd49572960bb"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,l.yg)("p",null,"\u624b\u5de5\u6d4b\u8bd5\uff1a\u6f0f\u6d1e\u5b58\u5728"),(0,l.yg)("p",null,(0,l.yg)("img",{src:r(60776).A})),(0,l.yg)("p",null,"\u63d2\u4ef6\u6d4b\u8bd5\uff1a\u8f93\u5165url+\u7aef\u53e3\uff0c\u5f00\u59cb\u6267\u884c\u6d4b\u8bd5\uff0c\u5f97\u5230\u6d4b\u8bd5\u7ed3\u679c"),(0,l.yg)("p",null,(0,l.yg)("img",{src:r(43039).A})),(0,l.yg)("h2",{id:"19-cve-2020-5405-\u8def\u5f84\u7a7f\u8d8a\u6f0f\u6d1e"},"19 CVE-2020-5405 \u8def\u5f84\u7a7f\u8d8a\u6f0f\u6d1e"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u63d2\u4ef6id\uff1a")),(0,l.yg)("p",null,"97decf92-0c50-48e9-bd40-270209a5a491"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"\u6d4b\u8bd5\u8fc7\u7a0b\uff1a")),(0,l.yg)("p",null,"\u6682\u65e0\u6848\u4f8b"))}u.isMDXComponent=!0},89831:(e,n,r)=>{r.d(n,{A:()=>g});const g=r.p+"assets/images/Spring-1-43d3fddd563b51bfa070182d0d707396.png"},35943:(e,n,r)=>{r.d(n,{A:()=>g});const g=r.p+"assets/images/Spring-10-72c824b710c8ca6f7712b6d4823ec33c.png"},17630:(e,n,r)=>{r.d(n,{A:()=>g});const g=r.p+"assets/images/Spring-11-5614cbeb2cff355fd65becf97837c47d.png"},84981:(e,n,r)=>{r.d(n,{A:()=>g});const g=r.p+"assets/images/Spring-12-942f08336cc03d04b8b42e4da386eca2.png"},15884:(e,n,r)=>{r.d(n,{A:()=>g});const g=r.p+"assets/images/Spring-13-a39a5650fff64e2b3b41d93de5d5bee2.png"},46051:(e,n,r)=>{r.d(n,{A:()=>g});const g=r.p+"assets/images/Spring-14-323686c97b47df96ec4e306d32ad9934.png"},28474:(e,n,r)=>{r.d(n,{A:()=>g});const g=r.p+"assets/images/Spring-15-4b2b257e5c559b9ca775e4dfbcdbea98.png"},58641:(e,n,r)=>{r.d(n,{A:()=>g});const g=r.p+"assets/images/Spring-16-0ba45ea64c0059aa958fe232702a860a.png"},60776:(e,n,r)=>{r.d(n,{A:()=>g});const g=r.p+"assets/images/Spring-17-968d520294db653e9751afa1efcfdf61.png"},43039:(e,n,r)=>{r.d(n,{A:()=>g});const g=r.p+"assets/images/Spring-18-19b52855d96abb644b63123d869f0c20.png"},87180:(e,n,r)=>{r.d(n,{A:()=>g});const g=r.p+"assets/images/Spring-2-7e3b4c970b6d389e42eee80aa4e7ccbc.png"},23093:(e,n,r)=>{r.d(n,{A:()=>g});const g=r.p+"assets/images/Spring-3-1009ccb459f5c91624e9066af0fbe778.png"},99322:(e,n,r)=>{r.d(n,{A:()=>g});const g=r.p+"assets/images/Spring-4-56220e2648ceaf7be60bd1b7d88101c6.png"},47075:(e,n,r)=>{r.d(n,{A:()=>g});const g=r.p+"assets/images/Spring-5-e71c3cfebc22bfb34d645390d8086871.png"},10216:(e,n,r)=>{r.d(n,{A:()=>g});const g=r.p+"assets/images/Spring-6-af13f54b8f1f17e39d88b8eb276576b6.png"},4081:(e,n,r)=>{r.d(n,{A:()=>g});const g=r.p+"assets/images/Spring-7-f739302fa2f3e20bbc303b2f347750a4.png"},43126:(e,n,r)=>{r.d(n,{A:()=>g});const g=r.p+"assets/images/Spring-8-87909e7e0c094bbe6bac4df9d63bd21a.png"},40063:(e,n,r)=>{r.d(n,{A:()=>g});const g=r.p+"assets/images/Spring-9-120a3c92d2eea97d0f29d5ac6b81fa0c.png"}}]);