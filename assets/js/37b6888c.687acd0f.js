"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[8490],{15680:(n,e,r)=>{r.d(e,{xA:()=>y,yg:()=>d});var a=r(96540);function t(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function l(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,a)}return r}function i(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){t(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function s(n,e){if(null==n)return{};var r,a,t=function(n,e){if(null==n)return{};var r,a,t={},l=Object.keys(n);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(t[r]=n[r]);return t}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}var o=a.createContext({}),c=function(n){var e=a.useContext(o),r=e;return n&&(r="function"==typeof n?n(e):i(i({},e),n)),r},y=function(n){var e=c(n.components);return a.createElement(o.Provider,{value:e},n.children)},p="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(n,e){var r=n.components,t=n.mdxType,l=n.originalType,o=n.parentName,y=s(n,["components","mdxType","originalType","parentName"]),p=c(r),g=t,d=p["".concat(o,".").concat(g)]||p[g]||u[g]||l;return r?a.createElement(d,i(i({ref:e},y),{},{components:r})):a.createElement(d,i({ref:e},y))}));function d(n,e){var r=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var l=r.length,i=new Array(l);i[0]=g;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=n,s[p]="string"==typeof n?n:t,i[1]=s;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5633:(n,e,r)=>{r.r(e),r.d(e,{contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=r(58168),t=(r(96540),r(15680));const l={sidebar_position:12},i="[synscan] SYN\u626b\u7aef\u53e3",s={unversionedId:"buildinlibs/lib_synscan",id:"buildinlibs/lib_synscan",isDocsHomePage:!1,title:"[synscan] SYN\u626b\u7aef\u53e3",description:"\u8bed\u8a00\u81ea\u5e26\u626b\u63cf\u529f\u80fd\u662f\u672c\u8bed\u8a00\u7684\u4e00\u4e2a\u5927\u4eae\u70b9\u3002\u4f60\u5728\u4f7f\u7528 yak \u7684\u65f6\u5019\uff0c\u5c06\u4e0d\u4f1a\u518d\u8d39\u5fc3\u601d\u8003\u8651\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u7aef\u53e3\u626b\u63cf\u529f\u80fd\uff0c\u6216\u8005\u5982\u4f55\u628a nmap \u96c6\u6210\u8fdb\u4f60\u60f3\u7f16\u5199\u7684\u8bed\u8a00\u4e2d\u3002",source:"@site/docs/buildinlibs/lib_synscan.md",sourceDirName:"buildinlibs",slug:"/buildinlibs/lib_synscan",permalink:"/docs/buildinlibs/lib_synscan",editUrl:"https://github.com/yaklang/docs/buildinlibs/lib_synscan.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"[cli] \u4ece\u547d\u4ee4\u884c\u8bfb\u53c2\u6570",permalink:"/docs/buildinlibs/lib_cli"},next:{title:"[servicescan] \u670d\u52a1\u6307\u7eb9\u626b\u63cf",permalink:"/docs/buildinlibs/lib_servicescan"}},o=[{value:"\u4e3a\u4ec0\u4e48 SYN \u626b\u7aef\u53e3\u6bd4 TCP \u8fde\u63a5\u626b\u63cf\u66f4\u5feb\u901f\uff1f",id:"\u4e3a\u4ec0\u4e48-syn-\u626b\u7aef\u53e3\u6bd4-tcp-\u8fde\u63a5\u626b\u63cf\u66f4\u5feb\u901f",children:[{value:"\u4f18\u52bf",id:"\u4f18\u52bf",children:[]},{value:"\u5f0a\u7aef",id:"\u5f0a\u7aef",children:[]}]},{value:"\u6700\u7b80\u5355\u6700\u9ad8\u6548\u7684\u626b\u63cf\u63a5\u53e3",id:"\u6700\u7b80\u5355\u6700\u9ad8\u6548\u7684\u626b\u63cf\u63a5\u53e3",children:[{value:"\u6838\u5fc3\u626b\u63cf\u51fd\u6570",id:"\u6838\u5fc3\u626b\u63cf\u51fd\u6570",children:[]},{value:"\u626b\u63cf\u989d\u5916\u53c2\u6570",id:"\u626b\u63cf\u989d\u5916\u53c2\u6570",children:[]},{value:"<code>tools.SynScanResult</code> \u626b\u63cf\u7ed3\u679c\u7ed3\u6784",id:"toolssynscanresult-\u626b\u63cf\u7ed3\u679c\u7ed3\u6784",children:[]},{value:"\u6267\u884c\u6848\u4f8b\uff1a\u6700\u7ecf\u5178/\u6700\u7b80\u5355\u7684\u4f7f\u7528\u65b9\u6cd5",id:"\u6267\u884c\u6848\u4f8b\u6700\u7ecf\u5178\u6700\u7b80\u5355\u7684\u4f7f\u7528\u65b9\u6cd5",children:[]},{value:"\u6267\u884c\u6848\u4f8b\uff1a\u81ea\u5b9a\u4e49\u7b49\u5f85\u65f6\u95f4",id:"\u6267\u884c\u6848\u4f8b\u81ea\u5b9a\u4e49\u7b49\u5f85\u65f6\u95f4",children:[]},{value:"\u6267\u884c\u6848\u4f8b\uff1a\u8f93\u51fa\u5230\u6587\u4ef6",id:"\u6267\u884c\u6848\u4f8b\u8f93\u51fa\u5230\u6587\u4ef6",children:[]}]}],c={toc:o},y="wrapper";function p(n){let{components:e,...r}=n;return(0,t.yg)(y,(0,a.A)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"synscan-syn\u626b\u7aef\u53e3"},"[synscan]"," SYN\u626b\u7aef\u53e3"),(0,t.yg)("p",null,"\u8bed\u8a00\u81ea\u5e26\u626b\u63cf\u529f\u80fd\u662f\u672c\u8bed\u8a00\u7684\u4e00\u4e2a\u5927\u4eae\u70b9\u3002\u4f60\u5728\u4f7f\u7528 yak \u7684\u65f6\u5019\uff0c\u5c06\u4e0d\u4f1a\u518d\u8d39\u5fc3\u601d\u8003\u8651\u5982\u4f55\u5b9e\u73b0\u4e00\u4e2a\u7aef\u53e3\u626b\u63cf\u529f\u80fd\uff0c\u6216\u8005\u5982\u4f55\u628a nmap \u96c6\u6210\u8fdb\u4f60\u60f3\u7f16\u5199\u7684\u8bed\u8a00\u4e2d\u3002"),(0,t.yg)("p",null,"\u4ec0\u4e48\u662f SYN \u7aef\u53e3\u626b\u63cf\uff1f"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u81ea\u5df1\u7ef4\u62a4\u4e00\u5957\u7f51\u7edc\u6808\uff0c\u62c6\u89e3 TCP \u4e09\u6b21\u63e1\u624b"),(0,t.yg)("li",{parentName:"ol"},"\u53ea\u8fdb\u884c\u7b2c\u4e00\u6b21\u63e1\u624b\uff0c\u5982\u679c\u6536\u5230\u4e86\u626b\u63cf\u76ee\u6807\u7684 ",(0,t.yg)("inlineCode",{parentName:"li"},"SYN-ACK")," \u5219\u5224\u5b9a\u4e3a\u7aef\u53e3\u5f00\u653e"),(0,t.yg)("li",{parentName:"ol"},"\u53d1\u9001 ",(0,t.yg)("inlineCode",{parentName:"li"},"RST")," \u5f3a\u884c\u4e2d\u65ad\u63e1\u624b")),(0,t.yg)("p",null,"\u672c\u7cfb\u7edf\u5de5\u5177\u5b9e\u73b0\u539f\u7406\u57fa\u672c\u540c ",(0,t.yg)("inlineCode",{parentName:"p"},"masscan"),"\uff1a\u77ed\u65f6\u95f4\u5185\u628a ",(0,t.yg)("inlineCode",{parentName:"p"},"SYN")," \u6570\u636e\u5305\u90fd\u53d1\u9001\u51fa\u53bb\uff0c\u68c0\u67e5\u82e5\u5e72\u79d2\u5185\u7684\u8fd4\u56de\u8bb0\u5f55\u3002"),(0,t.yg)("p",null,"\u6240\u4ee5\uff0c\u6211\u4eec\u5728\u672c\u6269\u5c55\u5305\u4e2d\u5f00\u653e\u51fa\u4e86 ",(0,t.yg)("inlineCode",{parentName:"p"},"synscan.wait(second)")," \u8fd9\u4e2a\u53c2\u6570\u914d\u7f6e\uff0c\u53ef\u4ee5\u52a8\u6001\u914d\u7f6e\u60f3\u8981\u7b49\u5f85\u7684\u79d2\u6570\u3002"),(0,t.yg)("h2",{id:"\u4e3a\u4ec0\u4e48-syn-\u626b\u7aef\u53e3\u6bd4-tcp-\u8fde\u63a5\u626b\u63cf\u66f4\u5feb\u901f"},"\u4e3a\u4ec0\u4e48 SYN \u626b\u7aef\u53e3\u6bd4 TCP \u8fde\u63a5\u626b\u63cf\u66f4\u5feb\u901f\uff1f"),(0,t.yg)("p",null,"\u76f4\u63a5\u8c03\u7528\u7cfb\u7edf\u63a5\u53e3\u8fdb\u884c TCP \u8fde\u63a5\uff0c\u7cfb\u7edf\u9700\u8981\u5e2e\u5fd9\u7ef4\u62a4\u4e00\u4e2a TCP \u8fde\u63a5\u72b6\u6001\u3002\u4f17\u6240\u5468\u77e5"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u7cfb\u7edf\u53ef\u6253\u5f00\u7684 TCP \u8fde\u63a5\u662f\u6709\u9650\u5236\u7684\uff0c\u53ef\u914d\u7f6e\u5f00\u653e\u8fd9\u4e2a\u9650\u5236\u3002"),(0,t.yg)("li",{parentName:"ol"},"\u7cfb\u7edf\u53ef\u540c\u65f6\u6253\u5f00\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u4e5f\u662f\u6709\u9650\u5236\u7684\uff0c",(0,t.yg)("inlineCode",{parentName:"li"},"ulimit")," \u53ef\u914d\u3002")),(0,t.yg)("h3",{id:"\u4f18\u52bf"},"\u4f18\u52bf"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u4e0d\u9700\u8981\u8fdb\u884c\u5b8c\u6574 TCP \u8fde\u63a5\uff0c\u7cfb\u7edf\u5bf9 TCP \u8fde\u63a5\u65e0\u611f\u77e5"),(0,t.yg)("li",{parentName:"ol"},"\u8d44\u6e90\u6d88\u8017\u6781\u4f4e\uff0c\u53d1\u5305\u901f\u7387\u53d6\u51b3\u4e8e\u7cfb\u7edf\u6027\u80fd\u4ee5\u53ca\u7f51\u7edc IO")),(0,t.yg)("h3",{id:"\u5f0a\u7aef"},"\u5f0a\u7aef"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u9891\u7387\u8fc7\u9ad8\u7684\u6570\u636e\u5305\u5bb9\u6613\u88ab\u4e2d\u95f4\u8def\u7531\u4e22\u5305\uff0c\u635f\u5931\u51c6\u786e\u7387"),(0,t.yg)("li",{parentName:"ol"},"\u7f51\u7edc\u72b6\u51b5\u8d8a\u5dee\uff0c\u4e22\u5305\u6982\u7387\u8d8a\u5927\uff0c\u626b\u63cf\u6548\u679c\u8d8a\u5dee")),(0,t.yg)("h2",{id:"\u6700\u7b80\u5355\u6700\u9ad8\u6548\u7684\u626b\u63cf\u63a5\u53e3"},"\u6700\u7b80\u5355\u6700\u9ad8\u6548\u7684\u626b\u63cf\u63a5\u53e3"),(0,t.yg)("h3",{id:"\u6838\u5fc3\u626b\u63cf\u51fd\u6570"},"\u6838\u5fc3\u626b\u63cf\u51fd\u6570"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn synscan.Scan(hosts: string, ports: string, vars: ...tools.scanOpt): (chan *tools.SynScanResult, error)")," \u6838\u5fc3\u626b\u63cf\u51fd\u6570\uff0c\u53c2\u6570 ",(0,t.yg)("inlineCode",{parentName:"li"},"hosts")," \u53ef\u4ee5\u652f\u6301 IP/IP+\u63a9\u76d6\u7801\uff0c\u57df\u540d\u7b49\uff1b",(0,t.yg)("inlineCode",{parentName:"li"},"ports")," \u652f\u6301\u7aef\u53e3\u7ec4\uff0c\u4f8b\u5982 ",(0,t.yg)("inlineCode",{parentName:"li"},"22.443.80,8080-8084"),"\uff0c\u6216\u8005 ",(0,t.yg)("inlineCode",{parentName:"li"},"1-65535"))),(0,t.yg)("h3",{id:"\u626b\u63cf\u989d\u5916\u53c2\u6570"},"\u626b\u63cf\u989d\u5916\u53c2\u6570"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn synscan.outputFile(var_1: string): tools.scanOpt"),"  \u8bbe\u7f6e\u8f93\u51fa\u7684\u6587\u4ef6\uff0c\u8f93\u51fa\u6587\u4ef6\u4e3a ",(0,t.yg)("inlineCode",{parentName:"li"},"var_1")," \u7684\u503c"),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn synscan.outputPrefix(var_1: string): tools.scanOpt")," \u8bbe\u7f6e\u8f93\u51fa\u6587\u4ef6\u5185\u5bb9\u6bcf\u4e00\u884c\u7684\u524d\u7f00\uff0c\u4f8b\u5982 ",(0,t.yg)("inlineCode",{parentName:"li"},"http://"),"\uff0c\u6216\u8005 ",(0,t.yg)("inlineCode",{parentName:"li"},"redis://")," \u7b49\uff0c\u65b9\u4fbf\u540e\u7eed\u5904\u7406\u6587\u4ef6"),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn synscan.wait(var_1: float64): tools.scanOpt")," \u5168\u90e8\u6570\u636e\u5305\u53d1\u9001\u5b8c\u4e4b\u540e\uff0c\u7b49\u5f85\u591a\u5c11\u65f6\u95f4\uff1f\u5355\u4f4d\u79d2")),(0,t.yg)("h3",{id:"toolssynscanresult-\u626b\u63cf\u7ed3\u679c\u7ed3\u6784"},(0,t.yg)("inlineCode",{parentName:"h3"},"tools.SynScanResult")," \u626b\u63cf\u7ed3\u679c\u7ed3\u6784"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},"type palm/common/yak/yaklib/tools.(SynScanResult) struct {\n  Fields(\u53ef\u7528\u5b57\u6bb5):\n      // \u626b\u63cf\u5230\u7684 IP\n      Host: string\n\n      // \u8fd9\u4e2a IP \u5f00\u653e\u7684\u7aef\u53e3\n      Port: int\n\n  PtrStructMethods(\u6307\u9488\u7ed3\u6784\u65b9\u6cd5/\u51fd\u6570):\n      // \u5c55\u793a SynScanResult  demo: `OPEN: 127.0.0.1:6341       from synscan`\n      func Show()\n}\n")),(0,t.yg)("h3",{id:"\u6267\u884c\u6848\u4f8b\u6700\u7ecf\u5178\u6700\u7b80\u5355\u7684\u4f7f\u7528\u65b9\u6cd5"},"\u6267\u884c\u6848\u4f8b\uff1a\u6700\u7ecf\u5178/\u6700\u7b80\u5355\u7684\u4f7f\u7528\u65b9\u6cd5"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'res, err := synscan.Scan("127.0.0.1", "1-65535")\ndie(err)\n\nfor result := range res {\n    result.Show()\n}\n')),(0,t.yg)("p",null,"\u5f53\u6211\u4eec\u6267\u884c\u5b8c\u4e0a\u9762\u811a\u672c\u4e4b\u540e\uff0c\u6211\u4eec\u53d1\u73b0\u626b\u63cf\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},"OPEN: 127.0.0.1:60012      from synscan\nOPEN: 127.0.0.1:6341       from synscan\nOPEN: 127.0.0.1:7891       from synscan\nOPEN: 127.0.0.1:9090       from synscan\nOPEN: 127.0.0.1:10000      from synscan\nOPEN: 127.0.0.1:49159      from synscan\nOPEN: 127.0.0.1:63342      from synscan\nOPEN: 127.0.0.1:7890       from synscan\nOPEN: 127.0.0.1:3306       from synscan\nOPEN: 127.0.0.1:10800      from synscan\nOPEN: 127.0.0.1:33060      from synscan\nOPEN: 127.0.0.1:6942       from synscan\nOPEN: 127.0.0.1:8080       from synscan\nOPEN: 127.0.0.1:49922      from synscan\nOPEN: 127.0.0.1:16090      from synscan\nOPEN: 127.0.0.1:16308      from synscan\nOPEN: 127.0.0.1:6342       from synscan\nOPEN: 127.0.0.1:50031      from synscan\nOPEN: 127.0.0.1:16067      from synscan\n")),(0,t.yg)("h3",{id:"\u6267\u884c\u6848\u4f8b\u81ea\u5b9a\u4e49\u7b49\u5f85\u65f6\u95f4"},"\u6267\u884c\u6848\u4f8b\uff1a\u81ea\u5b9a\u4e49\u7b49\u5f85\u65f6\u95f4"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'// \u626b\u63cf\u672c\u5730 1-65535 \u53f7\u7aef\u53e3\uff0c\u5168\u90e8\u6570\u636e\u5305\u53d1\u9001\u5b8c\u6bd5\u7684\u65f6\u5019\uff0c\u7b49\u5f85 3.5 \u79d2\nres, err := synscan.Scan("127.0.0.1", "1-65535", synscan.wait(3.5))\ndie(err)\n\nfor result := range res {\n    result.Show()\n}\n')),(0,t.yg)("h3",{id:"\u6267\u884c\u6848\u4f8b\u8f93\u51fa\u5230\u6587\u4ef6"},"\u6267\u884c\u6848\u4f8b\uff1a\u8f93\u51fa\u5230\u6587\u4ef6"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'res, err := synscan.Scan("127.0.0.1", "1-65535",\n    synscan.wait(3.5),\n    synscan.outputFile("test.txt"),\n)\ndie(err)\n\nfor result := range res {\n    result.Show()\n}\n')),(0,t.yg)("p",null,"\u5f53\u6211\u4eec\u6267\u884c\u5b8c\u4e0a\u9762\u7684\u4ee3\u7801\u4e4b\u540e\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"cat test.txt"),"\uff0c\u6211\u4eec\u53d1\u73b0\u4e86\u6587\u4ef6\u5185\u5bb9\u7ed3\u679c\u5982\u4e0b"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},"127.0.0.1:60012\n127.0.0.1:6341\n127.0.0.1:7891\n127.0.0.1:9090\n127.0.0.1:10000\n127.0.0.1:49159\n127.0.0.1:63342\n127.0.0.1:7890\n127.0.0.1:3306\n127.0.0.1:10800\n127.0.0.1:33060\n127.0.0.1:6942\n127.0.0.1:8080\n127.0.0.1:49922\n127.0.0.1:16090\n127.0.0.1:16308\n127.0.0.1:6342\n127.0.0.1:50031\n127.0.0.1:16067\n")))}p.isMDXComponent=!0}}]);