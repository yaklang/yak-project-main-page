"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[2190],{15680:(e,n,a)=>{a.d(n,{xA:()=>s,yg:()=>u});var l=a(96540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,l,t=function(e,n){if(null==e)return{};var a,l,t={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var c=l.createContext({}),g=function(e){var n=l.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},s=function(e){var n=g(e.components);return l.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=g(a),m=t,u=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return a?l.createElement(u,r(r({ref:n},s),{},{components:a})):l.createElement(u,r({ref:n},s))}));function u(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,r=new Array(i);r[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:t,r[1]=o;for(var g=2;g<i;g++)r[g]=a[g];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},71572:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var l=a(58168),t=(a(96540),a(15680));const i={sidebar_position:11},r="[cli] \u4ece\u547d\u4ee4\u884c\u8bfb\u53c2\u6570",o={unversionedId:"buildinlibs/lib_cli",id:"buildinlibs/lib_cli",isDocsHomePage:!1,title:"[cli] \u4ece\u547d\u4ee4\u884c\u8bfb\u53c2\u6570",description:"cli \u8fd9\u4e2a\u5305\u662f yak \u5904\u7406\u547d\u4ee4\u884c\u53c2\u6570\u7684\u5de5\u5177\u5305\uff0c\u7528\u6cd5\u975e\u5e38\u7b80\u5355\uff0c\u6211\u4eec\u6839\u636e\u5b9e\u4f8b\u7b80\u5355\u770b\u4e00\u4e0b\u8fd9\u4e2a\u5305\u5982\u4f55\u4f7f\u7528",source:"@site/docs/buildinlibs/lib_cli.md",sourceDirName:"buildinlibs",slug:"/buildinlibs/lib_cli",permalink:"/docs/buildinlibs/lib_cli",editUrl:"https://github.com/yaklang/docs/buildinlibs/lib_cli.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"[time] \u65f6\u95f4\u4e0e\u65e5\u671f",permalink:"/docs/buildinlibs/lib_time"},next:{title:"[synscan] SYN\u626b\u7aef\u53e3",permalink:"/docs/buildinlibs/lib_synscan"}},c=[{value:"\u83b7\u53d6\u6240\u6709\u53c2\u6570",id:"\u83b7\u53d6\u6240\u6709\u53c2\u6570",children:[]},{value:"cli \u5904\u7406\u4e0d\u540c\u7c7b\u578b\u7684\u53c2\u6570\u503c",id:"cli-\u5904\u7406\u4e0d\u540c\u7c7b\u578b\u7684\u53c2\u6570\u503c",children:[{value:"<code>cli.String</code>\uff1a \u5904\u7406\u5b57\u7b26\u4e32\u7c7b\u578b\u53c2\u6570",id:"clistring-\u5904\u7406\u5b57\u7b26\u4e32\u7c7b\u578b\u53c2\u6570",children:[]},{value:"<code>cli.Bool</code>\uff1a\u5904\u7406 Bool \u7c7b\u578b\u53c2\u6570",id:"clibool\u5904\u7406-bool-\u7c7b\u578b\u53c2\u6570",children:[]},{value:"<code>cli.Int</code>\uff1a\u5904\u7406\u6574\u6570\u53c2\u6570",id:"cliint\u5904\u7406\u6574\u6570\u53c2\u6570",children:[]},{value:"<code>cli.Float</code>\uff1a\u5904\u7406\u6d6e\u70b9\u53c2\u6570",id:"clifloat\u5904\u7406\u6d6e\u70b9\u53c2\u6570",children:[]},{value:"\u8bbe\u7f6e\u77ed\u53c2\u6570\u522b\u540d",id:"\u8bbe\u7f6e\u77ed\u53c2\u6570\u522b\u540d",children:[]}]},{value:"cli \u5904\u7406\u6269\u5c55\u6570\u636e\u7c7b\u578b",id:"cli-\u5904\u7406\u6269\u5c55\u6570\u636e\u7c7b\u578b",children:[{value:"<code>cli.Hosts</code>\uff1a\u5904\u7406\u53c2\u6570\u662f\u7f51\u6bb5\u7684\u60c5\u51b5",id:"clihosts\u5904\u7406\u53c2\u6570\u662f\u7f51\u6bb5\u7684\u60c5\u51b5",children:[]},{value:"<code>cli.Ports</code>\uff1a\u5904\u7406\u626b\u63cf\u7aef\u53e3\u7ec4\u53c2\u6570",id:"cliports\u5904\u7406\u626b\u63cf\u7aef\u53e3\u7ec4\u53c2\u6570",children:[]},{value:"<code>cli.Urls</code>\uff1a\u5904\u7406\u76ee\u6807\u662f url \u7684\u60c5\u51b5",id:"cliurls\u5904\u7406\u76ee\u6807\u662f-url-\u7684\u60c5\u51b5",children:[]},{value:"\u6848\u4f8b\uff1a\u89e3\u6790 urls\uff0c\u76f4\u63a5\u89e3\u6790 URL",id:"\u6848\u4f8b\u89e3\u6790-urls\u76f4\u63a5\u89e3\u6790-url",children:[]}]},{value:"\u9ed8\u8ba4\u503c/\u5e2e\u52a9/\u6587\u6863/\u53c2\u6570\u68c0\u67e5",id:"\u9ed8\u8ba4\u503c\u5e2e\u52a9\u6587\u6863\u53c2\u6570\u68c0\u67e5",children:[{value:"\u5b9e\u6218\u6848\u4f8b\uff0c\u751f\u6210\u5e2e\u52a9\u4fe1\u606f",id:"\u5b9e\u6218\u6848\u4f8b\u751f\u6210\u5e2e\u52a9\u4fe1\u606f",children:[]}]}],g={toc:c},s="wrapper";function p(e){let{components:n,...a}=e;return(0,t.yg)(s,(0,l.A)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"cli-\u4ece\u547d\u4ee4\u884c\u8bfb\u53c2\u6570"},"[cli]"," \u4ece\u547d\u4ee4\u884c\u8bfb\u53c2\u6570"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"cli")," \u8fd9\u4e2a\u5305\u662f yak \u5904\u7406\u547d\u4ee4\u884c\u53c2\u6570\u7684\u5de5\u5177\u5305\uff0c\u7528\u6cd5\u975e\u5e38\u7b80\u5355\uff0c\u6211\u4eec\u6839\u636e\u5b9e\u4f8b\u7b80\u5355\u770b\u4e00\u4e0b\u8fd9\u4e2a\u5305\u5982\u4f55\u4f7f\u7528"),(0,t.yg)("h2",{id:"\u83b7\u53d6\u6240\u6709\u53c2\u6570"},"\u83b7\u53d6\u6240\u6709\u53c2\u6570"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'yak 26_cliutil.yak --url https://baidu.com --allow-do-sth --number1 123 --floatvar 1.23 --target "192.168.1.1/24,10.1.3.2/28" --target-port "22,3306,80,8080-8082" --urls "leavesongs.com,10.1.3.2" --urls2 "https://www.baidu.com"\n')),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go",metastring:'title="26_cliutil.yak"',title:'"26_cliutil.yak"'},"args = cli.Args()  // \u83b7\u53d6\u6240\u6709\u547d\u4ee4\u884c\u53c2\u6570\u5185\u5bb9\ndump(args)         // \u5c55\u793a\u53c2\u6570\u7ed3\u679c\n")),(0,t.yg)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u6267\u884c\u4e4b\u540e\uff0c\u4f1a\u5c55\u793a\u6240\u6709\u8f93\u5165\u7684\u53c2\u6570\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'([]string) (len=17 cap=32) {\n (string) (len=3) "yak",\n (string) (len=14) "26_cliutil.yak",\n (string) (len=5) "--url",\n (string) (len=17) "https://baidu.com",\n (string) (len=14) "--allow-do-sth",\n (string) (len=9) "--number1",\n (string) (len=3) "123",\n (string) (len=10) "--floatvar",\n (string) (len=4) "1.23",\n (string) (len=8) "--target",\n (string) (len=26) "192.168.1.1/24,10.1.3.2/28",\n (string) (len=13) "--target-port",\n (string) (len=20) "22,3306,80,8080-8082",\n (string) (len=6) "--urls",\n (string) (len=23) "leavesongs.com,10.1.3.2",\n (string) (len=7) "--urls2",\n (string) (len=21) "https://www.baidu.com"\n}\n')),(0,t.yg)("h2",{id:"cli-\u5904\u7406\u4e0d\u540c\u7c7b\u578b\u7684\u53c2\u6570\u503c"},"cli \u5904\u7406\u4e0d\u540c\u7c7b\u578b\u7684\u53c2\u6570\u503c"),(0,t.yg)("h3",{id:"clistring-\u5904\u7406\u5b57\u7b26\u4e32\u7c7b\u578b\u53c2\u6570"},(0,t.yg)("inlineCode",{parentName:"h3"},"cli.String"),"\uff1a \u5904\u7406\u5b57\u7b26\u4e32\u7c7b\u578b\u53c2\u6570"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'// >  yakc clitest.yak --url https://baidu.com\nstrParam = cli.String("url")  \ndump(strParam)\n')),(0,t.yg)("p",null,"\u901a\u8fc7\u6267\u884c ",(0,t.yg)("inlineCode",{parentName:"p"},"dump(strParam)")," \u53ef\u4ee5\u770b\u5230\u53c2\u6570\u7c7b\u578b\u4e0e\u503c"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'(string) (len=17) "https://baidu.com"\n')),(0,t.yg)("h3",{id:"clibool\u5904\u7406-bool-\u7c7b\u578b\u53c2\u6570"},(0,t.yg)("inlineCode",{parentName:"h3"},"cli.Bool"),"\uff1a\u5904\u7406 Bool \u7c7b\u578b\u53c2\u6570"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'boolParam = cli.Bool("allow-do-sth")\ndump(boolParam)\n')),(0,t.yg)("div",{className:"admonition admonition-caution alert alert--warning"},(0,t.yg)("div",{parentName:"div",className:"admonition-heading"},(0,t.yg)("h5",{parentName:"div"},(0,t.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,t.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,t.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f ")),(0,t.yg)("div",{parentName:"div",className:"admonition-content"},(0,t.yg)("p",{parentName:"div"},(0,t.yg)("inlineCode",{parentName:"p"},"cli.Bool(paramName)")," \u4e0d\u4f1a\u83b7\u53d6\u53c2\u6570\u7684\u503c\uff0c\u53ea\u4f1a\u68c0\u6d4b\u547d\u4ee4\u884c\u4e2d\u6709\u6ca1\u6709\u5f53\u524d\u53c2\u6570\uff0c\u5982\u679c\u6709\u7684\u8bdd\uff0c\u8fd4\u56de\u503c\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"true")," \u5426\u5219\u4e3a ",(0,t.yg)("inlineCode",{parentName:"p"},"false"),";"))),(0,t.yg)("h3",{id:"cliint\u5904\u7406\u6574\u6570\u53c2\u6570"},(0,t.yg)("inlineCode",{parentName:"h3"},"cli.Int"),"\uff1a\u5904\u7406\u6574\u6570\u53c2\u6570"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'intParam = cli.Int("number1")\ndump(intParam)\n')),(0,t.yg)("h3",{id:"clifloat\u5904\u7406\u6d6e\u70b9\u53c2\u6570"},(0,t.yg)("inlineCode",{parentName:"h3"},"cli.Float"),"\uff1a\u5904\u7406\u6d6e\u70b9\u53c2\u6570"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'floatParam = cli.Float("floatvar")\ndump(floatParam)\n')),(0,t.yg)("h3",{id:"\u8bbe\u7f6e\u77ed\u53c2\u6570\u522b\u540d"},"\u8bbe\u7f6e\u77ed\u53c2\u6570\u522b\u540d"),(0,t.yg)("p",null,"\u5982\u4ee5\u4e0b\u4ee3\u7801, \u901a\u8fc7\u5728\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e2d\u4f20\u5165",(0,t.yg)("inlineCode",{parentName:"p"},"\u77ed\u53c2\u6570\u540d \u957f\u53c2\u6570\u540d"),"\u6765\u8bbe\u7f6e\u77ed\u53c2\u6570\u522b\u540d:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'// -t example.com \u6216 --target example.com\ntarget = cli.String("t target")  \nprint(target)\n')),(0,t.yg)("h2",{id:"cli-\u5904\u7406\u6269\u5c55\u6570\u636e\u7c7b\u578b"},"cli \u5904\u7406\u6269\u5c55\u6570\u636e\u7c7b\u578b"),(0,t.yg)("h3",{id:"clihosts\u5904\u7406\u53c2\u6570\u662f\u7f51\u6bb5\u7684\u60c5\u51b5"},(0,t.yg)("inlineCode",{parentName:"h3"},"cli.Hosts"),"\uff1a\u5904\u7406\u53c2\u6570\u662f\u7f51\u6bb5\u7684\u60c5\u51b5"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'// --target "192.168.1.1/24,10.1.3.2/28"\nnetParam = cli.Hosts("target")\ndump(netParam)\n')),(0,t.yg)("p",null,"\u4e0a\u8ff0\u811a\u672c\u6267\u884c\u7ed3\u679c\u4e3a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'/*\n\u5c55\u793a\u7ed3\u679c\n([]string) (len=272 cap=512) {\n (string) (len=11) "192.168.1.0",\n (string) (len=11) "192.168.1.1",\n ......\n ......\n (string) (len=13) "192.168.1.253",\n (string) (len=13) "192.168.1.254",\n (string) (len=13) "192.168.1.255",\n (string) (len=8) "10.1.3.0",\n ......\n (string) (len=9) "10.1.3.14",\n (string) (len=9) "10.1.3.15"\n}\n*/\n')),(0,t.yg)("h3",{id:"cliports\u5904\u7406\u626b\u63cf\u7aef\u53e3\u7ec4\u53c2\u6570"},(0,t.yg)("inlineCode",{parentName:"h3"},"cli.Ports"),"\uff1a\u5904\u7406\u626b\u63cf\u7aef\u53e3\u7ec4\u53c2\u6570"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'// --target-port "22,3306,80,8080-8082"\nportParam = cli.Ports("target-port")\ndump(portParam)\n')),(0,t.yg)("p",null,"\u4e0a\u8ff0\u811a\u672c\u6267\u884c\u7ed3\u679c\u4e3a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},"([]int) (len=6 cap=8) {\n (int) 22,\n (int) 80,\n (int) 3306,\n (int) 8080,\n (int) 8081,\n (int) 8082\n}\n")),(0,t.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,t.yg)("div",{parentName:"div",className:"admonition-heading"},(0,t.yg)("h5",{parentName:"div"},(0,t.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,t.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,t.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,t.yg)("div",{parentName:"div",className:"admonition-content"},(0,t.yg)("p",{parentName:"div"},"\u672c\u8d28\u4e0a\u6267\u884c\u4e86 ",(0,t.yg)("inlineCode",{parentName:"p"},"str.ParseStringToPorts")))),(0,t.yg)("h3",{id:"cliurls\u5904\u7406\u76ee\u6807\u662f-url-\u7684\u60c5\u51b5"},(0,t.yg)("inlineCode",{parentName:"h3"},"cli.Urls"),"\uff1a\u5904\u7406\u76ee\u6807\u662f url \u7684\u60c5\u51b5"),(0,t.yg)("h4",{id:"\u6848\u4f8b\u89e3\u6790-urls\u81ea\u7531\u89e3\u6790"},"\u6848\u4f8b\uff1a\u89e3\u6790 urls\uff0c\u81ea\u7531\u89e3\u6790"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'// --urls "leavesongs.com,10.1.3.2,https://www.baidu.com"\nurlParam = cli.Urls("urls")\ndump(urlParam)\n')),(0,t.yg)("p",null,"\u89e3\u6790\u7ed3\u679c\u4e3a urls"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'([]string) (len=6 cap=8) {\n (string) (len=22) "https://leavesongs.com",\n (string) (len=26) "https://www.leavesongs.com",\n (string) (len=21) "http://leavesongs.com",\n (string) (len=25) "http://www.leavesongs.com",\n (string) (len=16) "https://10.1.3.2",\n (string) (len=15) "http://10.1.3.2"\n}\n')),(0,t.yg)("h3",{id:"\u6848\u4f8b\u89e3\u6790-urls\u76f4\u63a5\u89e3\u6790-url"},"\u6848\u4f8b\uff1a\u89e3\u6790 urls\uff0c\u76f4\u63a5\u89e3\u6790 URL"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},'// --urls2 "https://www.baidu.com"\nprintln("-----------------------------------------")\nurlParam = cli.Urls("urls2")\ndump(urlParam)\n/*\n([]string) (len=1 cap=1) {\n (string) (len=21) "https://www.baidu.com"\n}\n*/\n')),(0,t.yg)("h2",{id:"\u9ed8\u8ba4\u503c\u5e2e\u52a9\u6587\u6863\u53c2\u6570\u68c0\u67e5"},"\u9ed8\u8ba4\u503c/\u5e2e\u52a9/\u6587\u6863/\u53c2\u6570\u68c0\u67e5"),(0,t.yg)("p",null,"\u53ef\u7528\u7684\u51fd\u6570\u6709:"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"cli.SetDoc(doc: string)")," \u8bbe\u7f6e\u6587\u6863\u4fe1\u606f\uff0c\u6ce8\u610fS\u662f\u5927\u5199"),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"cli.help(w...: io.Writer)")," \u663e\u793a\u5e2e\u52a9\u4fe1\u606f, w\u662f\u53ef\u9009\u53c2\u6570\uff0c\u4e3a",(0,t.yg)("inlineCode",{parentName:"li"},"io.Writer"),",\u9ed8\u8ba4\u662f",(0,t.yg)("inlineCode",{parentName:"li"},"os.Stdout"))),(0,t.yg)("p",null,"\u76ee\u524d\u53ef\u8bbe\u7f6e\u7684\u547d\u4ee4\u884c\u53c2\u6570\u5c5e\u6027\u4e3a\uff1a"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"cli.setDefault(defaultValue: any)")," \u8bbe\u7f6e\u9ed8\u8ba4\u503c"),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"cli.setRequired(required: bool)")," \u8bbe\u7f6e\u662f\u5426\u4e3a\u5fc5\u9700\u53c2\u6570\uff0c\u5982\u679c\u5fc5\u987b\u53c2\u6570\u7f3a\u5931\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"li"},"cli.check()")," \u6765\u68c0\u67e5\u5408\u7406\u6027\uff0c\u5e2e\u52a9\u622a\u65ad\u6267\u884c\u8fc7\u7a0b"),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"cli.setHelp(helpInfo: string)")," \u8bbe\u7f6e\u5e2e\u52a9\u4fe1\u606f")),(0,t.yg)("div",{className:"admonition admonition-caution alert alert--warning"},(0,t.yg)("div",{parentName:"div",className:"admonition-heading"},(0,t.yg)("h5",{parentName:"div"},(0,t.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,t.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,t.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f ")),(0,t.yg)("div",{parentName:"div",className:"admonition-content"},(0,t.yg)("p",{parentName:"div"},"\u5982\u679c\u9700\u8981\u68c0\u67e5\u53c2\u6570\u662f\u5426\u5408\u7406\uff0c\u6211\u4eec\u9700\u8981\u901a\u8fc7 ",(0,t.yg)("inlineCode",{parentName:"p"},"cli.check()")," \u51fd\u6570\u6765\u64cd\u4f5c\uff0c\u5982\u679c\u8fd9\u4e2a\u53c2\u6570\u68c0\u67e5\u4e0d\u5408\u7406\uff0c\u5219\u4f1a\u7acb\u5373\u9000\u51fa\u7a0b\u5e8f\u3002\n\u5982\u679c\u4e0d\u8c03\u7528",(0,t.yg)("inlineCode",{parentName:"p"},"cli.check()"),"\u51fd\u6570\uff0c\u90a3\u4e48\u5373\u4f7f\u53c2\u6570\u4e0d\u5408\u7406\u4e5f\u4e0d\u4f1a\u6709\u663e\u793a\u6216\u7ed3\u675f\u8fdb\u7a0b\u3002"),(0,t.yg)("p",{parentName:"div"},"\u53e6\u5916\uff0c\u5982\u679c\u4e0d\u8c03\u7528",(0,t.yg)("inlineCode",{parentName:"p"},"cli.check()"),"\u51fd\u6570\uff0c\u90a3\u4e48\u4e5f\u4e0d\u4f1a\u89e3\u6790",(0,t.yg)("inlineCode",{parentName:"p"},"-h, --help")," \u6765\u8f93\u51fa\u5e2e\u52a9\u4fe1\u606f\u3002"))),(0,t.yg)("h3",{id:"\u5b9e\u6218\u6848\u4f8b\u751f\u6210\u5e2e\u52a9\u4fe1\u606f"},"\u5b9e\u6218\u6848\u4f8b\uff0c\u751f\u6210\u5e2e\u52a9\u4fe1\u606f"),(0,t.yg)("p",null,"Yak cli \u6a21\u5757\u4e2d\uff0c\u6211\u4eec\u7ecf\u5e38\u9700\u8981\u4e3a\u6211\u4eec\u7684\u811a\u672c\u8bbe\u7f6e\u53c2\u6570\uff0c\u540c\u4e3a\u6211\u4eec\u811a\u672c\u8bbe\u7f6e\u5e2e\u52a9\u4fe1\u606f\uff0c\u65b9\u4fbf\u522b\u4eba\u6765\u4f7f\u7528\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'cli.SetDoc(`\u8fd9\u662f\u4e00\u4e2a\u7a0b\u5e8f\u6587\u6863\u4fe1\u606f`)\ntestValue = cli.String("t target", cli.setRequired(true), cli.setHelp("\u8fd9\u662f\u4e00\u4e2a\u626b\u63cf\u76ee\u6807\uff0c\u662f\u5fc5\u8981\u53c2\u6570"))\nboolParams = cli.Bool("b bool-params", cli.setHelp("\u8fd9\u662f\u4e00\u4e2abool\u503c"))\nstrValue = cli.String("testOrdinaryParam")\ncli.check()\n\nprintln("param parsed")\n')),(0,t.yg)("p",null,"\u6211\u4eec\u7f16\u5199\u4e86\u4e0a\u8ff0\u4ee3\u7801\uff0c\u5c06\u4f1a\u4ece\u547d\u4ee4\u884c\u53d6\u51fa\u4e00\u4e9b\u53c2\u6570\u6765\u6267\u884c\uff0c\u5982\u679c\u6211\u4eec\u4e0d\u8f93\u5165\u53c2\u6570\uff0c\u76f4\u63a5\u6267\u884c\uff0c\u5c06\u4f1a\u51fa\u73b0\u5982\u4e0b\u6548\u679c:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},"Error:\n  Parameter [target] error: miss parameter\n\nUsage: \n  test [OPTIONS]\n\n\u8fd9\u662f\u4e00\u4e2a\u7a0b\u5e8f\u6587\u6863\u4fe1\u606f\n\nFlags:\n  -h, --help                  Show help information\n  -t, --target string         \u8fd9\u662f\u4e00\u4e2a\u626b\u63cf\u76ee\u6807\uff0c\u662f\u5fc5\u8981\u53c2\u6570\n  -b, --bool-params           \u8fd9\u662f\u4e00\u4e2abool\u503c\n  --testOrdinaryParam string\n")))}p.isMDXComponent=!0}}]);