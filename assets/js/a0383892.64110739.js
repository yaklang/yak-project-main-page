(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[9706],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,u=d["".concat(s,".").concat(h)]||d[h]||m[h]||o;return n?a.createElement(u,p(p({ref:t},c),{},{components:n})):a.createElement(u,p({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},44577:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>i,toc:()=>s,default:()=>c});var a=n(22122),r=(n(67294),n(3905));const o={sidebar_position:2},p="\u53d1\u9001 HTTP \u539f\u59cb\u6570\u636e\u5305",i={unversionedId:"yakexamples/http-raw",id:"yakexamples/http-raw",isDocsHomePage:!1,title:"\u53d1\u9001 HTTP \u539f\u59cb\u6570\u636e\u5305",description:'\u5728 Yak \u4e2d\u9664\u4e86\u53ef\u4ee5\u4f7f\u7528 Golang \u539f\u751f\u5c01\u88c5\u7684 http \u6a21\u5757\u4e4b\u5916\uff0c\u63d0\u4f9b\u4e86\u4e00\u79cd\u4e13\u95e8\u4e3a\u5b89\u5168\u4f18\u5316\u7684 "\u76f4\u63a5\u53d1\u9001\u539f\u59cb\u6570\u636e\u5305" \u7684\u529e\u6cd5\u3002',source:"@site/docs/yakexamples/http-raw.mdx",sourceDirName:"yakexamples",slug:"/yakexamples/http-raw",permalink:"/docs/yakexamples/http-raw",editUrl:"https://github.com/yaklang/docs/yakexamples/http-raw.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u7ae0\u8282\u4ecb\u7ecd",permalink:"/docs/yakexamples/intro"},next:{title:"\u4ece URL \u53d1\u8d77 HTTP \u8bf7\u6c42",permalink:"/docs/yakexamples/http-basic"}},s=[{value:"<code>poc</code> \u6a21\u5757\u5176\u4ed6\u5e38\u89c1\u64cd\u4f5c",id:"poc-\u6a21\u5757\u5176\u4ed6\u5e38\u89c1\u64cd\u4f5c",children:[{value:"\u4e3a <code>poc.HTTP</code> \u589e\u52a0\u9ad8\u7ea7\u53c2\u6570",id:"\u4e3a-pochttp-\u589e\u52a0\u9ad8\u7ea7\u53c2\u6570",children:[]},{value:"<code>poc.Split</code>: \u5206\u5272\u6570\u636e\u5305 Header \u548c Body",id:"pocsplit-\u5206\u5272\u6570\u636e\u5305-header-\u548c-body",children:[]},{value:"<code>poc.HTTP</code> \u52a8\u6001\u4fee\u6539\u6570\u636e\u5305",id:"pochttp-\u52a8\u6001\u4fee\u6539\u6570\u636e\u5305",children:[]},{value:"<code>poc.ParseBytesToHTTPResponse</code> \u5c06\u5b57\u8282\u7801\u8f6c\u6362\u6210\u539f\u751fhttp.Response\u5bf9\u8c61",id:"pocparsebytestohttpresponse-\u5c06\u5b57\u8282\u7801\u8f6c\u6362\u6210\u539f\u751fhttpresponse\u5bf9\u8c61",children:[]},{value:"<code>poc.ParseBytesToHTTPRequest</code> \u5c06\u5b57\u8282\u7801\u8f6c\u6362\u6210\u539f\u751fhttp.Request\u5bf9\u8c61",id:"pocparsebytestohttprequest-\u5c06\u5b57\u8282\u7801\u8f6c\u6362\u6210\u539f\u751fhttprequest\u5bf9\u8c61",children:[]}]}],l={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u53d1\u9001-http-\u539f\u59cb\u6570\u636e\u5305"},"\u53d1\u9001 HTTP \u539f\u59cb\u6570\u636e\u5305"),(0,r.kt)("p",null,"\u5728 Yak \u4e2d\u9664\u4e86\u53ef\u4ee5\u4f7f\u7528 Golang \u539f\u751f\u5c01\u88c5\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"http"),' \u6a21\u5757\u4e4b\u5916\uff0c\u63d0\u4f9b\u4e86\u4e00\u79cd\u4e13\u95e8\u4e3a\u5b89\u5168\u4f18\u5316\u7684 "\u76f4\u63a5\u53d1\u9001\u539f\u59cb\u6570\u636e\u5305" \u7684\u529e\u6cd5\u3002'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"rsp, req, err := poc.HTTP(`\nGET / HTTP/1.1\nHost: www.example.com\nUser-Agent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)\n\n`)\ndie(err)\n\nprintln(string(rsp))\n")),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u81ea\u52a8\u4fee\u590d\u6570\u636e\u5305\u4f46\u662f\u4e0d\u4f1a\u81ea\u52a8\u95ee\u9898")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4e00\u822c\u6765\u8bf4\uff0c\u60a8\u5e76\u4e0d\u9700\u8981\u91cd\u65b0\u8ba1\u7b97 ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Length"),"\uff0cyak \u4f1a\u66ff\u4f60\u5b8c\u6210\u8fd9\u4e00\u6b65\u3002"),(0,r.kt)("p",{parentName:"div"},"\u5728\u91cd\u65b0\u8ba1\u7b97 Content-Length \u7684\u65f6\u5019\uff0c\u5e76\u4e0d\u4f1a\u4f24\u5bb3\u5176\u4ed6\u7684\u90e8\u5206\u7f16\u7801\u3002"),(0,r.kt)("p",{parentName:"div"},"\u4e5f\u5c31\u662f\u8bf4\uff0c\u7528\u6237\u9700\u8981\u5bf9\u81ea\u5df1\u7684\u7f16\u7801\u884c\u4e3a\u8d1f\u8d23\u3002\u53d1\u51fa\u53bb\u7684\u6570\u636e\u5305\u4e00\u822c\u5c31\u662f\u539f\u59cb\u6570\u636e\u5305\uff08\u9664\u4e86 Content-Length \u90e8\u5206\uff09\u3002"))),(0,r.kt)("p",null,"\u4e0a\u8ff0\u811a\u672c\u8f93\u51fa\u5185\u5bb9\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'HTTP/1.1 200 OK\nAge: 341744\nCache-Control: max-age=604800\nContent-Type: text/html; charset=UTF-8\nDate: Sat, 05 Mar 2022 14:01:06 GMT\nEtag: "3147526947+ident"\nExpires: Sat, 12 Mar 2022 14:01:06 GMT\nLast-Modified: Thu, 17 Oct 2019 07:18:26 GMT\nServer: ECS (dcb/7F83)\nVary: Accept-Encoding\nX-Cache: HIT\nConnection: close\nContent-Length: 1256\n\n<!doctype html>\n<html>\n<head>\n    <title>Example Domain</title>\n\n    <meta charset="utf-8" />\n    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <style type="text/css">\n    body {\n   ...\n    ...}\n    </style>\n</head>\n\n<body>\n<div>\n    <h1>Example Domain</h1>\n    <p>This domain is for use in illustrative examples in documents. You may use this\n    domain in literature without prior coordination or asking for permission.</p>\n    <p><a href="https://www.iana.org/domains/example">More information...</a></p>\n</div>\n</body>\n</html>\n\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u89e3\u91ca")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"poc.HTTP")," \u662f\u6700\u57fa\u7840\u7684\u51fd\u6570\u529f\u80fd\uff0c\u6838\u5fc3\u5b9a\u4e49\u4e3a\uff1a"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"func poc.HTTP(req, ...params) returns (rsp []byte, req []byte, err error)")),(0,r.kt)("p",{parentName:"div"},"\u4e00\u822c\u5904\u7406 err \u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"die(err)")," \u5373\u53ef\u5b9e\u73b0\u3002"))),(0,r.kt)("h2",{id:"poc-\u6a21\u5757\u5176\u4ed6\u5e38\u89c1\u64cd\u4f5c"},(0,r.kt)("inlineCode",{parentName:"h2"},"poc")," \u6a21\u5757\u5176\u4ed6\u5e38\u89c1\u64cd\u4f5c"),(0,r.kt)("h3",{id:"\u4e3a-pochttp-\u589e\u52a0\u9ad8\u7ea7\u53c2\u6570"},"\u4e3a ",(0,r.kt)("inlineCode",{parentName:"h3"},"poc.HTTP")," \u589e\u52a0\u9ad8\u7ea7\u53c2\u6570"),(0,r.kt)("p",null,'Yak \u5927\u591a\u6570\u529f\u80fd\u5305\u4e2d "\u5c0f\u5199\u5b57\u6bcd" \u7684\u5bfc\u51fa\u4e00\u822c\u610f\u5473\u7740\u4ed6\u662f\u4e00\u4e2a "\u53c2\u6570"\u3002'),(0,r.kt)("p",null,'\u6211\u4eec\u9700\u8981\u5236\u5b9a\u4e00\u4e9b\u9ad8\u7ea7\u53c2\u6570\uff0c\u6765\u63a7\u5236 poc \u4e2d "\u7ec6\u5fae" \u7684\u64cd\u4f5c\u6b65\u9aa4\u3002\u4f8b\u5982\uff0c\u6211\u4eec\u9700\u8981\u589e\u52a0 "\u4ee3\u7406" \u529f\u80fd\uff0c\u540c\u65f6\u5f3a\u5236\u5f00\u542f HTTPS \u53ef\u4ee5\u6267\u884c\u5982\u4e0b\u4ee3\u7801'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'rsp, req, err := poc.HTTP(`\nGET / HTTP/1.1\nHost: www.google.com\nUser-Agent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)\n\n`, poc.proxy("http://127.0.0.1:7890"), poc.https(true))\ndie(err)\n')),(0,r.kt)("h3",{id:"pocsplit-\u5206\u5272\u6570\u636e\u5305-header-\u548c-body"},(0,r.kt)("inlineCode",{parentName:"h3"},"poc.Split"),": \u5206\u5272\u6570\u636e\u5305 Header \u548c Body"),(0,r.kt)("p",null,"\u4e00\u822c\u6765\u8bf4\uff0c\u6211\u4eec\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"poc.HTTP")," \u4e2d\u83b7\u5f97\u7684\u6570\u636e\u5305\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"[]byte")," \u7c7b\u578b\u7684\uff0c\u5b9e\u9645\u4e0a\u5728\u8fdb\u884c\u6570\u636e\u5904\u7406\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u6709\u65f6\u5e76\u4e0d\u5e0c\u671b\u6574\u4f53\u8fdb\u884c\u5904\u7406\uff0c\u9700\u8981\u5355\u72ec\u8fdb\u884c\u5904\u7406 header \u4e0e body\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'rsp, req, err := poc.HTTP(`\nGET / HTTP/1.1\nHost: www.example.com\nUser-Agent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)\n\n`)\ndie(err)\n\n// \u5206\u5272\u54cd\u5e94\u6570\u636e\u5305\u7684 Header \u548c Body \u90e8\u5206\nheader, body = poc.Split(rsp)\nprintln(header)                             // \u6253\u5370\u6570\u636e\u5305 Header\nprintf("Body MD5: %v\\n", codec.Md5(body))   // \u8ba1\u7b97\u6570\u636e\u5305\u54cd\u5e94\u7684 md5\n')),(0,r.kt)("h3",{id:"pochttp-\u52a8\u6001\u4fee\u6539\u6570\u636e\u5305"},(0,r.kt)("inlineCode",{parentName:"h3"},"poc.HTTP")," \u52a8\u6001\u4fee\u6539\u6570\u636e\u5305"),(0,r.kt)("p",null,'\u4e00\u822c\u6765\u8bf4\uff0c\u6211\u4eec\u7684\u6570\u636e\u5305\u901a\u5e38\u4e0d\u4f1a\u662f\u56fa\u5b9a\u7684\uff0c\u4e3a\u4e86\u66f4\u81ea\u7531\u7684\u53d1\u9001\u4e00\u4e9b "\u5185\u5bb9"\u3002\u6211\u4eec\u9700\u8981 "\u6807\u6ce8" \u90a3\u4e9b\u5730\u65b9\u9700\u8981\u88ab\u52a8\u6001\u66ff\u6362\uff0c\u7136\u540e\u4f7f\u7528 ',(0,r.kt)("inlineCode",{parentName:"p"},"poc.params")," \u9ad8\u7ea7\u53c2\u6570\u6765\u52a8\u6001\u66ff\u6362\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// \u6784\u5efa\u4e00\u4e2a\u60f3\u8981\u52a8\u6001\u6e32\u67d3\u7684\u53c2\u6570\u503c\ntargetHost = "www.baidu.com"\nport = 80\ntarget = str.HostPort(targetHost, port)\n\n// \u6784\u5efa\u8bf7\u6c42\u6a21\u7248\uff0c\u901a\u8fc7 {{params(*)}} \u52a8\u6001\u6e32\u67d3\u53c2\u6570\nrsp, req, err := poc.HTTP(`\nGET /admin/ HTTP/1.1\nHost: {{params(target)}}\nUser-Agent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)\n\n`, poc.params({\n    "target": target, // \u8bbe\u7f6e\u53c2\u6570\n}))\ndie(err)\n\nprintf("http.Response\' s MD5: %v", codec.Md5(rsp))\n')),(0,r.kt)("h3",{id:"pocparsebytestohttpresponse-\u5c06\u5b57\u8282\u7801\u8f6c\u6362\u6210\u539f\u751fhttpresponse\u5bf9\u8c61"},(0,r.kt)("inlineCode",{parentName:"h3"},"poc.ParseBytesToHTTPResponse")," \u5c06\u5b57\u8282\u7801\u8f6c\u6362\u6210\u539f\u751fhttp.Response\u5bf9\u8c61"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'rsp, req, err := poc.HTTP(`\nGET / HTTP/1.1\nHost: www.example.com\nUser-Agent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)\n\n`,poc.proxy("http://127.0.0.1:8083"))\ndie(err)\n\n\nhttpRsp,err = poc.ParseBytesToHTTPResponse(rsp) //\u5c06\u5b57\u8282\u7801\u8f6c\u6362\u6210http.Response\u5bf9\u8c61\n\nhttp.show(httpRsp)\n')),(0,r.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'HTTP/1.1 200 OK\nConnection: close\nContent-Length: 1256\nAccept-Ranges: bytes\nAge: 562610\nCache-Control: max-age=604800\nContent-Encoding: identity\nContent-Type: text/html; charset=UTF-8\nDate: Mon, 07 Mar 2022 03:20:04 GMT\nEtag: "3147526947"\nExpires: Mon, 14 Mar 2022 03:20:04 GMT\nLast-Modified: Thu, 17 Oct 2019 07:18:26 GMT\nServer: ECS (sab/56F1)\nVary: Accept-Encoding\nX-Cache: HIT\n\n<!doctype html>\n<html>\n<head>\n    <title>Example Domain</title>\n\n    <meta charset="utf-8" />\n    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <style type="text/css">\n    body {\n        background-color: #f0f0f2;\n        margin: 0;\n        padding: 0;\n        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;\n\n    }\n    div {\n        width: 600px;\n        margin: 5em auto;\n        padding: 2em;\n        background-color: #fdfdff;\n        border-radius: 0.5em;\n        box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);\n    }\n    a:link, a:visited {\n        color: #38488f;\n        text-decoration: none;\n    }\n    @media (max-width: 700px) {\n        div {\n            margin: 0 auto;\n            width: auto;\n        }\n    }\n    </style>\n</head>\n\n<body>\n<div>\n    <h1>Example Domain</h1>\n    <p>This domain is for use in illustrative examples in documents. You may use this\n    domain in literature without prior coordination or asking for permission.</p>\n    <p><a href="https://www.iana.org/domains/example">More information...</a></p>\n</div>\n</body>\n</html>\n')),(0,r.kt)("h3",{id:"pocparsebytestohttprequest-\u5c06\u5b57\u8282\u7801\u8f6c\u6362\u6210\u539f\u751fhttprequest\u5bf9\u8c61"},(0,r.kt)("inlineCode",{parentName:"h3"},"poc.ParseBytesToHTTPRequest")," \u5c06\u5b57\u8282\u7801\u8f6c\u6362\u6210\u539f\u751fhttp.Request\u5bf9\u8c61"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'rsp, req, err := poc.HTTP(`\nGET / HTTP/1.1\nHost: www.example.com\nUser-Agent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)\n\n`,poc.proxy("http://127.0.0.1:8083"))\ndie(err)\n\nhttpReq,err = poc.ParseBytesToHTTPRequest(req) //\u5c06\u5b57\u8282\u7801\u8f6c\u6362\u6210http.Request\u5bf9\u8c61\n\nhttp.show(httpReq)\n')),(0,r.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"GET / HTTP/1.1\nHost: www.example.com\nContent-Length: 0\nUser-Agent: Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0)\n")))}c.isMDXComponent=!0}}]);