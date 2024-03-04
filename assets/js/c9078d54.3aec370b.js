"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[4555],{15680:(e,n,r)=>{r.d(n,{xA:()=>g,yg:()=>s});var a=r(96540);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var o=a.createContext({}),d=function(e){var n=a.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},g=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,g=c(e,["components","mdxType","originalType","parentName"]),y=d(r),m=t,s=y["".concat(o,".").concat(m)]||y[m]||p[m]||i;return r?a.createElement(s,l(l({ref:n},g),{},{components:r})):a.createElement(s,l({ref:n},g))}));function s(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,l=new Array(i);l[0]=m;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c[y]="string"==typeof e?e:t,l[1]=c;for(var d=2;d<i;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3624:(e,n,r)=>{r.d(n,{A:()=>c});var a=r(96540),t=r(20053);const i="tableOfContentsInline_0DDH";function l(e){let{toc:n,isChild:r}=e;return n.length?a.createElement("ul",{className:r?"":"table-of-contents"},n.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(l,{isChild:!0,toc:e.children}))))):null}const c=function(e){let{toc:n}=e;return a.createElement("div",{className:(0,t.A)(i)},a.createElement(l,{toc:n}))}},21645:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=r(58168),t=(r(96540),r(15680)),i=r(3624);const l={sidebar_position:3},c="\u51fd\u6570\u5e93\uff1acodec - \u52a0\u5bc6\u4e0e\u7f16\u7801",o={unversionedId:"yakexamples/codec",id:"yakexamples/codec",isDocsHomePage:!1,title:"\u51fd\u6570\u5e93\uff1acodec - \u52a0\u5bc6\u4e0e\u7f16\u7801",description:"\u5728\u8ba1\u7b97\u673a\u4e2d\uff0c\u7f16\u7801\u548c\u89e3\u7801\u662f\u5c06\u6570\u636e\u4ece\u4e00\u79cd\u5f62\u5f0f\u8f6c\u6362\u4e3a\u53e6\u4e00\u79cd\u5f62\u5f0f\u7684\u8fc7\u7a0b\uff0c\u901a\u5e38\u7528\u4e8e\u5c06\u6570\u636e\u5728\u4e0d\u540c\u7684\u7cfb\u7edf\u4e4b\u95f4\u4f20\u8f93\u6216\u5b58\u50a8\u3002\u7f16\u7801\u548c\u89e3\u7801\u7684\u610f\u4e49\u5728\u4e8e\uff0c\u5b83\u4eec\u4f7f\u4e0d\u540c\u7684\u7cfb\u7edf\u4e4b\u95f4\u53ef\u4ee5\u4f20\u8f93\u548c\u5904\u7406\u6570\u636e\uff0c\u800c\u4e0d\u4f1a\u56e0\u4e3a\u7f16\u7801\u683c\u5f0f\u4e0d\u540c\u800c\u51fa\u73b0\u95ee\u9898\u3002\u4f8b\u5982\uff0c\u5728 Web \u5f00\u53d1\u4e2d\uff0c\u6d4f\u89c8\u5668\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u4f7f\u7528 HTTP \u534f\u8bae\u8fdb\u884c\u901a\u4fe1\uff0c\u901a\u5e38\u4f7f\u7528 UTF-8 \u7f16\u7801\u683c\u5f0f\u4f20\u8f93\u6570\u636e\uff0c\u4ee5\u4fbf\u4e8e\u5728\u4e0d\u540c\u7684\u6d4f\u89c8\u5668\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u4f20\u8f93\u6570\u636e\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u7f16\u7801\u548c\u89e3\u7801\u662f\u975e\u5e38\u91cd\u8981\u7684\uff0c\u56e0\u4e3a\u5b83\u4eec\u786e\u4fdd\u4e86\u6570\u636e\u80fd\u591f\u88ab\u6b63\u786e\u5730\u4f20\u8f93\u548c\u5904\u7406\u3002",source:"@site/docs/yakexamples/3-codec.mdx",sourceDirName:"yakexamples",slug:"/yakexamples/codec",permalink:"/docs/yakexamples/codec",editUrl:"https://github.com/yaklang/docs/yakexamples/3-codec.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u51fd\u6570\u5e93\uff1astr - \u5b57\u7b26\u4e32\u5de5\u5177\u96c6",permalink:"/docs/yakexamples/strutils"},next:{title:"\u51fd\u6570\u5e93\uff1ahttp - \u57fa\u672c HTTP \u901a\u4fe1",permalink:"/docs/yakexamples/http-basic"}},d=[{value:"\u7f16\u7801\u89e3\u7801",id:"\u7f16\u7801\u89e3\u7801",children:[{value:"Base64 \u7f16\u7801\u89e3\u7801",id:"base64-\u7f16\u7801\u89e3\u7801",children:[]},{value:"HTML \u5b9e\u4f53\u7f16\u7801 <code>#&amp;xxx;</code>",id:"html-\u5b9e\u4f53\u7f16\u7801-xxx",children:[]},{value:"Url \u7f16\u7801",id:"url-\u7f16\u7801",children:[]},{value:"\u53cc URL \u7f16\u7801\uff0c\u5e38\u7528\u4e8e XSS",id:"\u53cc-url-\u7f16\u7801\u5e38\u7528\u4e8e-xss",children:[]},{value:"\u5341\u516d\u8fdb\u5236\u7f16\u7801",id:"\u5341\u516d\u8fdb\u5236\u7f16\u7801",children:[]},{value:"\u4e0d\u53ef\u89c1\u5b57\u7b26\u6253\u5370\u7f16\u7801\uff08ASCII\uff09",id:"\u4e0d\u53ef\u89c1\u5b57\u7b26\u6253\u5370\u7f16\u7801ascii",children:[]}]},{value:"\u52a0\u5bc6\u4e0e\u89e3\u5bc6",id:"\u52a0\u5bc6\u4e0e\u89e3\u5bc6",children:[{value:"AES \u52a0\u5bc6\u7f16\u7801",id:"aes-\u52a0\u5bc6\u7f16\u7801",children:[]},{value:"DES \u52a0\u5bc6\u7f16\u7801",id:"des-\u52a0\u5bc6\u7f16\u7801",children:[]}]},{value:"\u4e0d\u53ef\u9006 Hash \u8ba1\u7b97",id:"\u4e0d\u53ef\u9006-hash-\u8ba1\u7b97",children:[{value:"Hash \u8ba1\u7b97\u4e0e\u7f16\u7801",id:"hash-\u8ba1\u7b97\u4e0e\u7f16\u7801",children:[]}]}],g={toc:d},y="wrapper";function p(e){let{components:n,...r}=e;return(0,t.yg)(y,(0,a.A)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h1",{id:"\u51fd\u6570\u5e93codec---\u52a0\u5bc6\u4e0e\u7f16\u7801"},"\u51fd\u6570\u5e93\uff1acodec - \u52a0\u5bc6\u4e0e\u7f16\u7801"),(0,t.yg)("p",null,"\u5728\u8ba1\u7b97\u673a\u4e2d\uff0c\u7f16\u7801\u548c\u89e3\u7801\u662f\u5c06\u6570\u636e\u4ece\u4e00\u79cd\u5f62\u5f0f\u8f6c\u6362\u4e3a\u53e6\u4e00\u79cd\u5f62\u5f0f\u7684\u8fc7\u7a0b\uff0c\u901a\u5e38\u7528\u4e8e\u5c06\u6570\u636e\u5728\u4e0d\u540c\u7684\u7cfb\u7edf\u4e4b\u95f4\u4f20\u8f93\u6216\u5b58\u50a8\u3002\u7f16\u7801\u548c\u89e3\u7801\u7684\u610f\u4e49\u5728\u4e8e\uff0c\u5b83\u4eec\u4f7f\u4e0d\u540c\u7684\u7cfb\u7edf\u4e4b\u95f4\u53ef\u4ee5\u4f20\u8f93\u548c\u5904\u7406\u6570\u636e\uff0c\u800c\u4e0d\u4f1a\u56e0\u4e3a\u7f16\u7801\u683c\u5f0f\u4e0d\u540c\u800c\u51fa\u73b0\u95ee\u9898\u3002\u4f8b\u5982\uff0c\u5728 Web \u5f00\u53d1\u4e2d\uff0c\u6d4f\u89c8\u5668\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u4f7f\u7528 HTTP \u534f\u8bae\u8fdb\u884c\u901a\u4fe1\uff0c\u901a\u5e38\u4f7f\u7528 UTF-8 \u7f16\u7801\u683c\u5f0f\u4f20\u8f93\u6570\u636e\uff0c\u4ee5\u4fbf\u4e8e\u5728\u4e0d\u540c\u7684\u6d4f\u89c8\u5668\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u4f20\u8f93\u6570\u636e\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u7f16\u7801\u548c\u89e3\u7801\u662f\u975e\u5e38\u91cd\u8981\u7684\uff0c\u56e0\u4e3a\u5b83\u4eec\u786e\u4fdd\u4e86\u6570\u636e\u80fd\u591f\u88ab\u6b63\u786e\u5730\u4f20\u8f93\u548c\u5904\u7406\u3002"),(0,t.yg)("p",null,"\u4e0e\u7f16\u7801\u89e3\u7801\u7684\u4e3b\u8981\u76ee\u7684\u4e0d\u540c\uff0c\u52a0\u5bc6\u4e0e\u89e3\u5bc6\u662f\u4fdd\u62a4\u654f\u611f\u6570\u636e\u548c\u4fe1\u606f\u5b89\u5168\u7684\u91cd\u8981\u624b\u6bb5\uff0c\u5176\u610f\u4e49\u5305\u62ec\u4ee5\u4e0b\u51e0\u4e2a\u65b9\u9762\uff1a"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u4fdd\u62a4\u9690\u79c1\u548c\u673a\u5bc6\u6027\uff1a\u901a\u8fc7\u5bf9\u654f\u611f\u6570\u636e\u8fdb\u884c\u52a0\u5bc6\uff0c\u53ea\u6709\u6388\u6743\u4eba\u5458\u624d\u80fd\u8bbf\u95ee\u8fd9\u4e9b\u6570\u636e\uff0c\u786e\u4fdd\u9690\u79c1\u548c\u673a\u5bc6\u6027\u7684\u4fdd\u62a4\u3002\u8fd9\u5728\u91d1\u878d\u3001\u533b\u7597\u7b49\u9886\u57df\u7684\u4fe1\u606f\u7ba1\u7406\u4e2d\u975e\u5e38\u91cd\u8981\u3002"),(0,t.yg)("li",{parentName:"ol"},"\u9632\u6b62\u6570\u636e\u88ab\u7be1\u6539\uff1a\u901a\u8fc7\u6570\u5b57\u7b7e\u540d\u548c\u52a0\u5bc6\u6280\u672f\uff0c\u53ef\u4ee5\u786e\u4fdd\u6570\u636e\u5728\u4f20\u8f93\u548c\u5b58\u50a8\u8fc7\u7a0b\u4e2d\u4e0d\u88ab\u7be1\u6539\uff0c\u4ece\u800c\u4fdd\u62a4\u6570\u636e\u7684\u5b8c\u6574\u6027\u3002\u8fd9\u5728\u7535\u5b50\u5546\u52a1\u3001\u7f51\u7edc\u94f6\u884c\u7b49\u9886\u57df\u7684\u6570\u636e\u4f20\u8f93\u548c\u5904\u7406\u4e2d\u975e\u5e38\u91cd\u8981\u3002"),(0,t.yg)("li",{parentName:"ol"},"\u9632\u6b62\u6570\u636e\u88ab\u7a83\u542c\uff1a\u901a\u8fc7\u52a0\u5bc6\u6280\u672f\uff0c\u53ef\u4ee5\u5728\u6570\u636e\u4f20\u8f93\u8fc7\u7a0b\u4e2d\u9632\u6b62\u6570\u636e\u88ab\u672a\u7ecf\u6388\u6743\u7684\u4eba\u7a83\u542c\uff0c\u4fdd\u62a4\u6570\u636e\u7684\u673a\u5bc6\u6027\u548c\u5b89\u5168\u6027\u3002\u8fd9\u5728\u7f51\u7edc\u5b89\u5168\u9886\u57df\u548c\u519b\u4e8b\u901a\u8baf\u4e2d\u975e\u5e38\u91cd\u8981\u3002"),(0,t.yg)("li",{parentName:"ol"},"\u8ba4\u8bc1\u548c\u6388\u6743\uff1a\u901a\u8fc7\u6570\u5b57\u8bc1\u4e66\u548c\u6570\u5b57\u7b7e\u540d\u6280\u672f\uff0c\u53ef\u4ee5\u9a8c\u8bc1\u6570\u636e\u7684\u6765\u6e90\u548c\u771f\u5b9e\u6027\uff0c\u786e\u4fdd\u6570\u636e\u7684\u8ba4\u8bc1\u548c\u6388\u6743\uff0c\u9632\u6b62\u975e\u6cd5\u8bbf\u95ee\u548c\u6076\u610f\u653b\u51fb\u3002")),(0,t.yg)("p",null,"\u5728 codec \u6a21\u5757\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u83b7\u5f97\u7f16\u89e3\u7801\u548c\u52a0\u89e3\u5bc6\u7684\u5e38\u89c1\u65b9\u6848\u7684\u5404\u7c7b\u652f\u6301\u3002"),(0,t.yg)(i.A,{toc:d,mdxType:"TOCInline"}),(0,t.yg)("h2",{id:"\u7f16\u7801\u89e3\u7801"},"\u7f16\u7801\u89e3\u7801"),(0,t.yg)("h3",{id:"base64-\u7f16\u7801\u89e3\u7801"},"Base64 \u7f16\u7801\u89e3\u7801"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.DecodeBase64(var_1: string): ([]byte, error)"),"    ",(0,t.yg)("strong",{parentName:"li"},"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u89e3\u7801base64\u7684\u7ed3\u679c\u4e3a []byte \u5373\u4e3a bytes")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.EncodeBase64(var_1: interface {}): string"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'ret := codec.EncodeBase64("abcdefghijklmn\\x99\\xFf")\nprintln("\u7f16\u7801\u4e3a\uff1a", ret)\nres, err := codec.DecodeBase64(ret)\ndie(err)\nprintln("\u89e3\u7801\u540e\u4e3a: ")\ndump([]byte(res))\n\n/*\nOUTPUT:\n\n\u7f16\u7801\u4e3a\uff1a YWJjZGVmZ2hpamtsbW6Z/w==\n\u89e3\u7801\u540e\u4e3a:\n([]uint8) (len=16 cap=18) {\n 00000000  61 62 63 64 65 66 67 68  69 6a 6b 6c 6d 6e 99 ff  |abcdefghijklmn..|\n}\n*/\n')),(0,t.yg)("h3",{id:"html-\u5b9e\u4f53\u7f16\u7801-xxx"},"HTML \u5b9e\u4f53\u7f16\u7801 ",(0,t.yg)("inlineCode",{parentName:"h3"},"#&xxx;")),(0,t.yg)("p",null,"HTML \u5b9e\u4f53\u7f16\u7801\u4e00\u822c\u7528\u4e8e\u7ed5\u8fc7 XSS"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.DecodeHtml(var_1: string): string"),"  \u7f16\u7801\u6210 ",(0,t.yg)("inlineCode",{parentName:"li"},"&#123;")," \u7684\u5f62\u5f0f"),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.DecodeHtmlHex(var_1: string): string"),"  \u7f16\u7801\u6210 ",(0,t.yg)("inlineCode",{parentName:"li"},"&#xFF;")," \u7684\u5f62\u5f0f"),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.EscapeHtml(var_1: string): string"),"  \u53ea\u7f16\u7801\u7279\u6b8a\u5b57\u7b26\uff0c",(0,t.yg)("inlineCode",{parentName:"li"},"<&>")," \u7b49\u7b49"),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.EncodeHtml(var_1: string): string"),"  \u89e3\u7801")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'ret := codec.EncodeHtml("abcdefghijklmn\\xA0")\nprintln("Html\u7f16\u7801\u4e3a\uff1a", ret)\nres := codec.DecodeHtml(ret)\nprintln("\u89e3\u7801\u540e\u4e3a: ")\ndump([]byte(res))\n\nret := codec.EncodeHtmlHex("abcdefghijklmn\\xA0")\nprintln("Html Hex\u7f16\u7801\u4e3a\uff1a", ret)\nres := codec.DecodeHtml(ret)\nprintln("\u89e3\u7801\u540e\u4e3a: ")\ndump([]byte(res))\n\nret := codec.EscapeHtml("abcdefghij<>:;{]{]|\\\\$^&^&#@klmn\\xA0")\nprintln("Escape\u7f16\u7801\u4e3a\uff1a", ret)\nres := codec.DecodeHtml(ret)\nprintln("\u89e3\u7801\u540e\u4e3a: ")\ndump([]byte(res))\n\n/*\nOUTPUT:\n\nHtml\u7f16\u7801\u4e3a\uff1a &#97;&#98;&#99;&#100;&#101;&#102;&#103;&#104;&#105;&#106;&#107;&#108;&#109;&#110;&#160;\n\u89e3\u7801\u540e\u4e3a:\n([]uint8) (len=16 cap=16) {\n 00000000  61 62 63 64 65 66 67 68  69 6a 6b 6c 6d 6e c2 a0  |abcdefghijklmn..|\n}\nHtml Hex\u7f16\u7801\u4e3a\uff1a &#x61;&#x62;&#x63;&#x64;&#x65;&#x66;&#x67;&#x68;&#x69;&#x6a;&#x6b;&#x6c;&#x6d;&#x6e;&#xa0;\n\u89e3\u7801\u540e\u4e3a:\n([]uint8) (len=16 cap=16) {\n 00000000  61 62 63 64 65 66 67 68  69 6a 6b 6c 6d 6e c2 a0  |abcdefghijklmn..|\n}\nEscape\u7f16\u7801\u4e3a\uff1a abcdefghij&lt;&gt;:;{]{]|\\$^&amp;^&amp;#@klmn\ufffd\n\u89e3\u7801\u540e\u4e3a:\n([]uint8) (len=32 cap=32) {\n 00000000  61 62 63 64 65 66 67 68  69 6a 3c 3e 3a 3b 7b 5d  |abcdefghij<>:;{]|\n 00000010  7b 5d 7c 5c 24 5e 26 5e  26 23 40 6b 6c 6d 6e a0  |{]|\\$^&^&#@klmn.|\n}\n*/\n')),(0,t.yg)("h3",{id:"url-\u7f16\u7801"},"Url \u7f16\u7801"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.EncodeUrl(var_1: string): string")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.DecodeUrl(var_1: string) (string, error)"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'ret := codec.EncodeUrl("abcdefghij<>:;{]{]|\\\\$^&^&#@klmn\\xA0")\nprintln("Url\u7f16\u7801\u4e3a\uff1a", ret)\nres, err := codec.DecodeUrl(ret)\ndie(err)\nprintln("\u89e3\u7801\u540e\u4e3a: ")\ndump([]byte(res))\n\n/*\nOUTPUT:\n\nUrl\u7f16\u7801\u4e3a\uff1a %61%62%63%64%65%66%67%68%69%6a%3c%3e%3a%3b%7b%5d%7b%5d%7c%5c%24%5e%26%5e%26%23%40%6b%6c%6d%6e%a0\n\u89e3\u7801\u540e\u4e3a:\n([]uint8) (len=32 cap=32) {\n 00000000  61 62 63 64 65 66 67 68  69 6a 3c 3e 3a 3b 7b 5d  |abcdefghij<>:;{]|\n 00000010  7b 5d 7c 5c 24 5e 26 5e  26 23 40 6b 6c 6d 6e a0  |{]|\\$^&^&#@klmn.|\n}\n*/\n')),(0,t.yg)("h4",{id:"\u53ea\u7f16\u7801\u9700\u8981\u7f16\u7801\u7684\u5b57\u7b26\u5b57\u7b26\u4e32"},"\u53ea\u7f16\u7801\u9700\u8981\u7f16\u7801\u7684\u5b57\u7b26/\u5b57\u7b26\u4e32\uff1f"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.EscapePathUrl(var_1: string): string")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.EscapeQueryUrl(var_1: string): string")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.UnescapePathUrl(var_1: string): (string, error)")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.UnescapeQueryUrl(var_1: string): (string, error)"))),(0,t.yg)("h3",{id:"\u53cc-url-\u7f16\u7801\u5e38\u7528\u4e8e-xss"},"\u53cc URL \u7f16\u7801\uff0c\u5e38\u7528\u4e8e XSS"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.DoubleDecodeUrl(var_1: string): (string, error)")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.DoubleEncodeUrl(var_1: string): string"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'\nret := codec.DoubleEncodeUrl("abcdefghij<>:;{]{]|\\\\$^&^&#@klmn\\xA0")\nprintln("Url\u7f16\u7801\u4e3a\uff1a", ret)\nres, err := codec.DoubleDecodeUrl(ret)\ndie(err)\nprintln("\u89e3\u7801\u540e\u4e3a: ")\ndump([]byte(res))\n\n/*\nOUTPUT:\n\nDouble Url\u7f16\u7801\u4e3a\uff1a %2561%2562%2563%2564%2565%2566%2567%2568%2569%256a%253c%253e%253a%253b%257b%255d%257b%255d%257c%255c%2524%255e%2526%255e%2526%2523%2540%256b%256c%256d%256e%25a0\n\u89e3\u7801\u540e\u4e3a:\n([]uint8) (len=32 cap=32) {\n 00000000  61 62 63 64 65 66 67 68  69 6a 3c 3e 3a 3b 7b 5d  |abcdefghij<>:;{]|\n 00000010  7b 5d 7c 5c 24 5e 26 5e  26 23 40 6b 6c 6d 6e a0  |{]|\\$^&^&#@klmn.|\n}\n*/\n')),(0,t.yg)("h3",{id:"\u5341\u516d\u8fdb\u5236\u7f16\u7801"},"\u5341\u516d\u8fdb\u5236\u7f16\u7801"),(0,t.yg)("p",null,"\u5341\u516d\u8fdb\u5236\u7f16\u7801\uff0c\u8f6c\u6210\u5341\u516d\u8fdb\u5236\u5b57\u7b26\u4e32"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.DecodeHex(var_1: string): ([]uint8, error)")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.EncodeToHex(var_1: interface {}): string"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'ret := codec.EncodeToHex("abcdefghij<>:;{]{]|\\\\$^&^&#@klmn\\xA0")\nprintln("Url\u7f16\u7801\u4e3a\uff1a", ret)\nres, err := codec.DecodeHex(ret)\ndie(err)\nprintln("\u89e3\u7801\u540e\u4e3a: ")\ndump([]byte(res))\n\n/*\nOUTPUT:\n\nHex \u7f16\u7801\u4e3a\uff1a 6162636465666768696a3c3e3a3b7b5d7b5d7c5c245e265e2623406b6c6d6ea0\n\u89e3\u7801\u540e\u4e3a:\n([]uint8) (len=32 cap=64) {\n 00000000  61 62 63 64 65 66 67 68  69 6a 3c 3e 3a 3b 7b 5d  |abcdefghij<>:;{]|\n 00000010  7b 5d 7c 5c 24 5e 26 5e  26 23 40 6b 6c 6d 6e a0  |{]|\\$^&^&#@klmn.|\n}\n*/\n')),(0,t.yg)("div",{className:"admonition admonition-info alert alert--info"},(0,t.yg)("div",{parentName:"div",className:"admonition-heading"},(0,t.yg)("h5",{parentName:"div"},(0,t.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,t.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,t.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,t.yg)("div",{parentName:"div",className:"admonition-content"},(0,t.yg)("p",{parentName:"div"},"\u8981\u6ce8\u610f\uff0c\u5982\u679c\u8fd9\u4e2a\u5341\u516d\u8fdb\u5236\u5b57\u7b26\u4e32\u9700\u8981\u5728 mysql \u4e2d\u5c55\u793a\uff0c\u8bb0\u5f97\u52a0 ",(0,t.yg)("inlineCode",{parentName:"p"},"0x")," \u524d\u7f00\u5594"))),(0,t.yg)("h3",{id:"\u4e0d\u53ef\u89c1\u5b57\u7b26\u6253\u5370\u7f16\u7801ascii"},"\u4e0d\u53ef\u89c1\u5b57\u7b26\u6253\u5370\u7f16\u7801\uff08ASCII\uff09"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u7f16\u7801 ASCII\uff0c\u4e0d\u53ef\u89c1\u5b57\u7b26\u7f16\u7801\u6210 ",(0,t.yg)("inlineCode",{parentName:"li"},"\\xNN"),", \u5e26\u53cc\u5f15\u53f7 ",(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.EncodeASCII(var_1: string): string")),(0,t.yg)("li",{parentName:"ol"},"\u89e3\u7801\u64cd\u4f5c\uff0c",(0,t.yg)("inlineCode",{parentName:"li"},"\\xNN")," \u53d8\u6210\u5177\u4f53\u5b57\u7b26 ",(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.DecodeASCII(var_1: string): (string, error)")),(0,t.yg)("li",{parentName:"ol"},"\u57fa\u672c\u540c ",(0,t.yg)("inlineCode",{parentName:"li"},"codec.EncodeASCII")," \u7684\u51fd\u6570 ",(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.EncodeToPrintable(var_1: string): string")," \uff0c\u4f46\u662f\u53ea\u6253\u5370\u53ef\u89c1\u5185\u5bb9")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-go"},'ret := codec.EncodeASCII("abcdefghijklmn\\x99\\xFf")\nprintln("\u7f16\u7801\u4e3a\uff1a", ret)\nres, err := codec.DecodeASCII(ret)\ndie(err)\nprintln("\u89e3\u7801\u540e\u4e3a: ")\ndump([]byte(res))\n\n/*\nOUTPUT:\n\n\u7f16\u7801\u4e3a\uff1a "abcdefghijklmn\\x99\\xff"\n\u89e3\u7801\u540e\u4e3a:\n([]uint8) (len=16 cap=16) {\n 00000000  61 62 63 64 65 66 67 68  69 6a 6b 6c 6d 6e 99 ff  |abcdefghijklmn..|\n}\n*/\n')),(0,t.yg)("div",{className:"admonition admonition-danger alert alert--danger"},(0,t.yg)("div",{parentName:"div",className:"admonition-heading"},(0,t.yg)("h5",{parentName:"div"},(0,t.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,t.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,t.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,t.yg)("div",{parentName:"div",className:"admonition-content"},(0,t.yg)("p",{parentName:"div"},"\u6ce8\u610f\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"EncodeASCII / DecodeASCII")," \u901a\u5e38\u7528\u4e8e\u5904\u7406\u4e0d\u53ef\u89c1\u5b57\u7b26\uff0c\u7ecf\u8fc7\u7f16\u7801\u7684\u5b57\u7b26\u4e32\u4fdd\u8bc1\u90fd\u662f\u53ef\u89c1\u5b57\u7b26\uff0c\u5e76\u4e14\u5e26\u4e0a\u4e86\u4e24\u8fb9\u7684\u5f15\u53f7\uff01"),(0,t.yg)("p",{parentName:"div"},"\u76f8\u540c\u7684\uff0c\u89e3\u7801\u7684\u65f6\u5019\uff0c\u4e5f\u9700\u8981\u5e26\u4e0a\u5f15\u53f7"))),(0,t.yg)("h2",{id:"\u52a0\u5bc6\u4e0e\u89e3\u5bc6"},"\u52a0\u5bc6\u4e0e\u89e3\u5bc6"),(0,t.yg)("h3",{id:"aes-\u52a0\u5bc6\u7f16\u7801"},"AES \u52a0\u5bc6\u7f16\u7801"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.AESCBCEncrypt(key []byte, i interface{}, iv []byte): ([]byte, error)")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.AESCBCDecrypt(key []byte, i interface{}, iv []byte): ([]byte, error)")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.AESCBCEncrypt(key []byte, i interface{}, iv []byte): ([]byte, error)")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.AESCBCDecrypt(key []byte, i interface{}, iv []byte): ([]byte, error)")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.AESECBEncrypt(key []byte, i interface{}, iv []byte): ([]byte, error)")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.AESECBDecrypt(key []byte, i interface{}, iv []byte): ([]byte, error)"))),(0,t.yg)("h3",{id:"des-\u52a0\u5bc6\u7f16\u7801"},"DES \u52a0\u5bc6\u7f16\u7801"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.DESCBCEnc(key []byte, data []byte, iv []byte): ([]byte, error)")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.DESCBCDec(key []byte, data []byte, iv []byte): ([]byte, error)")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.DESCBCEnc(key []byte, data []byte, iv []byte): ([]byte, error)")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.DESCBCDec(key []byte, data []byte, iv []byte): ([]byte, error)"))),(0,t.yg)("h2",{id:"\u4e0d\u53ef\u9006-hash-\u8ba1\u7b97"},"\u4e0d\u53ef\u9006 Hash \u8ba1\u7b97"),(0,t.yg)("h3",{id:"hash-\u8ba1\u7b97\u4e0e\u7f16\u7801"},"Hash \u8ba1\u7b97\u4e0e\u7f16\u7801"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.Md5(var_1: interface {}): string")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.Sha1(var_1: interface {}): string")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.Sha224(var_1: interface {}): string")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.Sha256(var_1: interface {}): string")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.Sha384(var_1: interface {}): string")),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("inlineCode",{parentName:"li"},"fn codec.Sha512(var_1: interface {}): string"))))}p.isMDXComponent=!0},20053:(e,n,r)=>{function a(e){var n,r,t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(r=a(e[n]))&&(t&&(t+=" "),t+=r);else for(n in e)e[n]&&(t&&(t+=" "),t+=n);return t}r.d(n,{A:()=>t});const t=function(){for(var e,n,r=0,t="";r<arguments.length;)(e=arguments[r++])&&(n=a(e))&&(t&&(t+=" "),t+=n);return t}}}]);