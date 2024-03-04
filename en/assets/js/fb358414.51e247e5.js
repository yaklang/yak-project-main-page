"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[7400],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>u});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=l(t),g=r,u=c["".concat(s,".").concat(g)]||c[g]||d[g]||i;return t?a.createElement(u,o(o({ref:n},m),{},{components:t})):a.createElement(u,o({ref:n},m))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[c]="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9742:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=t(58168),r=(t(96540),t(15680));const i={sidebar_position:11},o="\u521d\u63a2\u88ab\u52a8\u626b\u63cf",p={unversionedId:"newforyak/passive_scan",id:"newforyak/passive_scan",isDocsHomePage:!1,title:"\u521d\u63a2\u88ab\u52a8\u626b\u63cf",description:"\u88ab\u52a8\u626b\u63cf\u662f\u4ec0\u4e48\uff1f",source:"@site/docs/newforyak/passive_scan.md",sourceDirName:"newforyak",slug:"/newforyak/passive_scan",permalink:"/en/docs/newforyak/passive_scan",editUrl:"https://github.com/yaklang/docs/newforyak/passive_scan.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u7f16\u5199\u4f18\u79c0\u7684 PoC/Exp \ud83d\udc7b",permalink:"/en/docs/newforyak/how_to_make_poc"},next:{title:"[str] \u5b57\u7b26\u4e32\u5de5\u5177\u5e93",permalink:"/en/docs/buildinlibs/lib_str"}},s=[{value:"\u88ab\u52a8\u626b\u63cf\u662f\u4ec0\u4e48\uff1f",id:"\u88ab\u52a8\u626b\u63cf\u662f\u4ec0\u4e48",children:[]},{value:"\u4e1a\u5185\u6700\u65b9\u4fbf\u7684\u4e2d\u95f4\u4eba\u52ab\u6301",id:"\u4e1a\u5185\u6700\u65b9\u4fbf\u7684\u4e2d\u95f4\u4eba\u52ab\u6301",children:[]},{value:"\u7cbe\u5bc6\u5916\u79d1\u624b\u672f\uff1a<code>mitm</code> \u914d\u5408 <code>fuzz</code>",id:"\u7cbe\u5bc6\u5916\u79d1\u624b\u672fmitm-\u914d\u5408-fuzz",children:[]}],l={toc:s},m="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(m,(0,a.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u521d\u63a2\u88ab\u52a8\u626b\u63cf"},"\u521d\u63a2\u88ab\u52a8\u626b\u63cf"),(0,r.yg)("h2",{id:"\u88ab\u52a8\u626b\u63cf\u662f\u4ec0\u4e48"},"\u88ab\u52a8\u626b\u63cf\u662f\u4ec0\u4e48\uff1f"),(0,r.yg)("p",null,"\u5728\u6700\u666e\u901a\u7684\u626b\u63cf\u4e2d\uff0c\u6211\u4eec\u628a\u4e00\u4e2a\u76ee\u6807\u53d1\u9001\u7ed9\u626b\u63cf\u5668\uff0c\u626b\u63cf\u5668\u81ea\u4e3b\u51b3\u5b9a\u626b\u63cf\u7684 URL\uff0c\u6216\u8005\u5bf9\u626b\u63cf\u7684\u76ee\u6807\u8fdb\u884c\u722c\u866b\uff0c\u81ea\u5df1\u5bfb\u627e\u626b\u63cf\u76ee\u6807\uff0c\u6211\u4eec\u7ecf\u5e38\u628a\u8fd9\u4e2a\u8fc7\u7a0b\u6210\u4e3a\u4e3b\u52a8\u626b\u63cf\u3002"),(0,r.yg)("p",null,"\u533a\u522b\u4e8e\u6b64\uff0c\u5728\u88ab\u52a8\u626b\u63cf\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7\u67d0\u79cd\u65b9\u5f0f\u628a\u626b\u63cf\u76ee\u6807\u7684\u6d41\u91cf\uff08\u4e00\u822c\u662f HTTP \u6570\u636e\u5305\uff09\u76f4\u63a5\u53d1\u9001\u7ed9\u626b\u63cf\u5668\uff0c\u626b\u63cf\u5668\u6839\u636e\u626b\u63cf\u76ee\u6807\u6d41\u91cf\u76f4\u63a5\u786e\u5b9a\u9700\u8981\u626b\u63cf\u7684\u53c2\u6570\u4ee5\u53ca\u626b\u63cf\u76ee\u6807\u3002"),(0,r.yg)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"\u5e76\u4e0d\u662f\u8bf4\u88ab\u52a8\u626b\u63cf\u4e00\u5b9a\u6bd4\u4e3b\u52a8\u626b\u63cf\u597d\uff0c\u4ed6\u4eec\u5728\u5de5\u7a0b\u5b9e\u8df5\u4e2d\u5404\u6709\u4f18\u52a3\uff0c\u9002\u5e94\u7684\u573a\u666f\u4e0d\u4e00\u6837\u3002"),(0,r.yg)("p",{parentName:"div"},"\u4f8b\u5982\uff0c\u9488\u5bf9\u5927\u89c4\u6a21\u7684\u626b\u63cf\u76ee\u6807\uff08\u9700\u8981\u76d1\u7ba1\u5343\u4e07\u7ea7\u7684\u7f51\u7ad9/\u8d44\u4ea7/\u6f0f\u6d1e\uff09\u4e3b\u52a8\u626b\u63cf\u53ef\u4ee5\u8fdb\u884c\u9ad8\u5ea6\u81ea\u52a8\u5316\u3002"),(0,r.yg)("p",{parentName:"div"},"\u4f46\u662f\u9488\u5bf9\u5355\u4e2a\u76ee\u6807\u8fdb\u884c\u6df1\u5ea6\u626b\u63cf\uff0c\u6d89\u53ca\u5230\u5404\u79cd\u767b\u5f55\u72b6\u6001\uff0c\u4ee5\u53ca\u767b\u5f55\u540e\u7684\u626b\u63cf\uff0c\u9ad8\u5ea6\u81ea\u52a8\u5316\u5f80\u5f80\u4f1a\u5931\u53bb\u6d41\u91cf\u626b\u63cf\u7684\u7cbe\u51c6\u4f18\u52bf\u3002"),(0,r.yg)("p",{parentName:"div"},"\u6240\u4ee5\u9009\u62e9\u600e\u4e48\u6837\u7684\u626b\u63cf\u5e76\u4e0d\u5b8c\u5168\u53d6\u51b3\u4e8e\u626b\u63cf\u7684\u6548\u679c\uff0c\u4e5f\u9700\u8981\u8003\u8651\u5177\u4f53\u573a\u666f\u9009\u62e9\u6027\u4ef7\u6bd4\u6700\u9ad8\u7684\u65b9\u5f0f\u3002"))),(0,r.yg)("h2",{id:"\u4e1a\u5185\u6700\u65b9\u4fbf\u7684\u4e2d\u95f4\u4eba\u52ab\u6301"},"\u4e1a\u5185\u6700\u65b9\u4fbf\u7684\u4e2d\u95f4\u4eba\u52ab\u6301"),(0,r.yg)("p",null,'\u88ab\u52a8\u626b\u63cf\u80fd\u529b\u5e95\u5ea7\u4e5f\u662f Yak \u76ee\u524d "\u72ec\u4e00\u4efd" \u63d0\u4f9b\u7684\u3002\u7b80\u5355\u6765\u8bf4\uff0cYak \u63d0\u4f9b\u4e86\u4e00\u4e2a\u65b9\u4fbf\u7684\u4e2d\u95f4\u4eba\u7684\u63a5\u53e3\uff0c\u4ec5\u9700 ',(0,r.yg)("inlineCode",{parentName:"p"},"mitm.Start")," \u5373\u53ef\u542f\u52a8\u4e00\u4e2a\u4e2d\u95f4\u4eba\u4ee3\u7406\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'err = mitm.Start(8082, mitm.callback(func(isHttps, url, req, rsp) {\n    if req.Method == "CONNECT" {\n        return\n    }\n    \n\n    printf("[%5s] url: %v \\n", req.Method, url)\n    println()\n}), mitm.useDefaultCA(true))\ndie(err)\n')),(0,r.yg)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u8bc1\u4e66\u95ee\u9898")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"\u5f53\u4f60\u9ed8\u8ba4\u4e0d\u914d\u7f6e\u8bc1\u4e66\u7684\u65f6\u5019\uff0cYak \u5c06\u5728\u4f60\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u521b\u5efa\u4e00\u5957\u8bc1\u4e66\uff0c\u540d\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"yak-mitm-ca.crt")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"yak-mitm-ca.key"),"\uff0c\u5c06\u4f1a\u4f7f\u7528\u8fd9\u5957\u8bc1\u4e66\u8fdb\u884c\u4e2d\u95f4\u4eba\u52ab\u6301"),(0,r.yg)("p",{parentName:"div"},"\u5f53\u4f60 ",(0,r.yg)("inlineCode",{parentName:"p"},"mitm.useDefaultCA(false)")," \u9009\u9879\u88ab\u4f7f\u7528\u7684\u65f6\u5019\uff0c\u5c06\u4e0d\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u7684\u8bc1\u4e66\u540d\uff0c\u8fd9\u4e2a\u65f6\u5019\uff0c\u9700\u8981\u7528\u6237\u5f3a\u5236\u4f7f\u7528\u81ea\u5df1\u7684\u8bc1\u4e66\u3002"),(0,r.yg)("p",{parentName:"div"},"\u8be6\u60c5\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"/docs/buildinlibs/lib_mitm"},(0,r.yg)("inlineCode",{parentName:"a"},"mitm")," \u4f7f\u7528\u6587\u6863")))),(0,r.yg)("h2",{id:"\u7cbe\u5bc6\u5916\u79d1\u624b\u672fmitm-\u914d\u5408-fuzz"},"\u7cbe\u5bc6\u5916\u79d1\u624b\u672f\uff1a",(0,r.yg)("inlineCode",{parentName:"h2"},"mitm")," \u914d\u5408 ",(0,r.yg)("inlineCode",{parentName:"h2"},"fuzz")),(0,r.yg)("p",null,"\u5728\u524d\u9762\u7684\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"fuzz")," \u6a21\u5757\uff0c\u90a3\u540c\u65f6\u6211\u4eec\u672c\u8282\u4e5f\u5b66\u4e60\u4e86\u5982\u4f55\u8fdb\u884c\u4e2d\u95f4\u4eba\u52ab\u6301\u3002"),(0,r.yg)("p",null,"\u987a\u7406\u6210\u7ae0\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u7f16\u5199\u81ea\u5df1\u7684\u88ab\u52a8\u626b\u63cf\u5668\u4e86\uff0c\u6211\u4eec\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"fuzz")," \u6a21\u5757\uff0c\u53ef\u4ee5\u5f88\u5bb9\u6613\u505a\u5230\u9488\u5bf9 ",(0,r.yg)("inlineCode",{parentName:"p"},"http.Request")," \u7684\u53d8\u5f62\uff0c\u4e0d\u7ba1\u662f\u5206\u6790\u5185\u90e8\u53c2\u6570\u8fd8\u662f\u5bf9\u7279\u5b9a\u53c2\u6570\u8fdb\u884c\u626b\u63cf\uff0c\u8fd9\u4e9b\u64cd\u4f5c\u624b\u5230\u64d2\u6765\uff01"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-go"},'wg = sync.NewWaitGroup()\ndefer wg.Wait()\n\n// \u8bbe\u7f6e Fuzz \u51fd\u6570\nsubmitTask = func(fReq){\n    wg.Add(1)\n    go func{\n        defer wg.Done()\n        for _, p := range fReq.GetCommonParams() {\n            reqs, err := p.Fuzz("PAYLOAD_TOKEN").Exec()\n            if err != nil {\n                log.error("FUZZ ERROR: %s", err)\n                return\n            }\n\n            for result := range reqs {\n                println("-----------------------FUZZED REQUEST-------------------------")\n                println(result.Url)\n                println("    Rsp Length: ", len(result.ResponseRaw))\n            }\n        }\n    }\n}\n\n// \u542f\u52a8\u4e00\u4e2a\u4e2d\u95f4\u4eba\u52ab\u6301\u670d\u52a1\u5668\ngo def{\n    err = mitm.Start(8082, mitm.callback(func(isHttps, url, req, rsp) {\n        if req.Method == "CONNECT" {\n            return\n        }\n\n        fReq, err := fuzz.HTTPRequest(req, fuzz.https(isHttps/*type: bool*/))\n        if err != nil {\n            log.error("build fuzz http request failed: %s", err)\n            return\n        }\n\n        submitTask(fReq)\n        \n    }), mitm.useDefaultCA(true))\n    die(err)\n}\n\ntime.sleep(1)\n\n// \u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42\uff0c\u4ee5\u4e2d\u95f4\u4eba\u5f00\u653e\u4ee3\u7406\u4e3a\u4ee3\u7406\nrsp, err := http.Get("https://www.baidu.com/?a=test", http.proxy("http://127.0.0.1:8082"))\nif err != nil {\n    die(err)\n}\n')),(0,r.yg)("p",null,"\u901a\u8fc7\u4e0a\u9762\u7684\u4ee3\u7801\uff0c\u6211\u4eec\u53ef\u4ee5\u8bf4\u5df2\u7ecf\u5b8c\u6210\u4e86\u4e00\u4e2a\u6700\u7b80\u6613\u7684\u88ab\u52a8\u626b\u63cf\u5668\u5165\u53e3"),(0,r.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"\u5f53\u7136\uff0c\u672c\u8282\u63d0\u4f9b\u7684\u6848\u4f8b\u4ec5\u4f9b\u7528\u6237\u5b66\u4e60\uff0c\u4e00\u822c\u6765\u8bf4\uff0c\u7f16\u5199\u88ab\u52a8\u626b\u63cf\u5668\u7684\u5173\u952e\u5728\u4e8e\u5bf9\u4e8e ",(0,r.yg)("inlineCode",{parentName:"p"},"fuzz")," \u7f16\u5199\u4f18\u79c0\u7684\u626b\u63cf\u6a21\u5757\uff0c\u5f53\u7136\u6211\u4eec\u4e5f\u53ef\u4ee5\u4e0d\u4f7f\u7528\u81ea\u5df1\u7f16\u5199\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"fuzz")," \u6f0f\u6d1e\u6316\u6398\u6a21\u5757\u3002 "))),(0,r.yg)("div",{className:"admonition admonition-info alert alert--info"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"mitm \u5165\u53e3\u6709\u65e0\u6570\u79cd\u73a9\u6cd5")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"\u5f53\u7136\u5982\u679c\u60f3\u8981\u8bb0\u5f55\u6d41\u91cf\uff0c\u6216\u8005\u8bf4\u4ec5\u4ec5\u4f5c\u4e3a\u8c03\u8bd5\u4f7f\u7528\uff0c\u6216\u8005\u628a\u6d41\u91cf\u62bd\u51fa\u6765\u4f5c\u4e3a nuclei \u7684\u626b\u63cf\uff0cYak \u90fd\u662f\u5f88\u5bb9\u6613\u53ef\u4ee5\u505a\u5230\u7684\uff01"))))}c.isMDXComponent=!0}}]);