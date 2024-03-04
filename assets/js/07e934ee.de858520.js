"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[6821],{15680:(e,n,a)=>{a.d(n,{xA:()=>s,yg:()=>g});var t=a(96540);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=t.createContext({}),p=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},s=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return a?t.createElement(g,r(r({ref:n},s),{},{components:a})):t.createElement(g,r({ref:n},s))}));function g(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},26982:(e,n,a)=>{a.d(n,{A:()=>i});var t=a(96540);const i=function(e){let{children:n,hidden:a,className:i}=e;return t.createElement("div",{role:"tabpanel",hidden:a,className:i},n)}},51931:(e,n,a)=>{a.d(n,{A:()=>p});var t=a(96540),i=a(48555);const l=function(){const e=(0,t.useContext)(i.A);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var r=a(20053);const o="tabItem_vU9c",c="tabItemActive_cw6a";const p=function(e){const{lazy:n,block:a,defaultValue:i,values:p,groupId:s,className:u}=e,d=t.Children.toArray(e.children),m=p??d.map((e=>({value:e.props.value,label:e.props.label}))),g=i??d.find((e=>e.props.default))?.props.value,{tabGroupChoices:y,setTabGroupChoices:h}=l(),[v,N]=(0,t.useState)(g),b=[];if(null!=s){const e=y[s];null!=e&&e!==v&&m.some((n=>n.value===e))&&N(e)}const f=e=>{const n=e.currentTarget,a=b.indexOf(n),t=m[a].value;N(t),null!=s&&(h(s,t),setTimeout((()=>{(function(e){const{top:n,left:a,bottom:t,right:i}=e.getBoundingClientRect(),{innerHeight:l,innerWidth:r}=window;return n>=0&&i<=r&&t<=l&&a>=0})(n)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(c),setTimeout((()=>n.classList.remove(c)),2e3))}),150))},k=e=>{let n=null;switch(e.key){case"ArrowRight":{const a=b.indexOf(e.target)+1;n=b[a]||b[0];break}case"ArrowLeft":{const a=b.indexOf(e.target)-1;n=b[a]||b[b.length-1];break}}n?.focus()};return t.createElement("div",{className:"tabs-container"},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},u)},m.map((e=>{let{value:n,label:a}=e;return t.createElement("li",{role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,className:(0,r.A)("tabs__item",o,{"tabs__item--active":v===n}),key:n,ref:e=>b.push(e),onKeyDown:k,onFocus:f,onClick:f},a??n)}))),n?(0,t.cloneElement)(d.filter((e=>e.props.value===v))[0],{className:"margin-vert--md"}):t.createElement("div",{className:"margin-vert--md"},d.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==v})))))}},48555:(e,n,a)=>{a.d(n,{A:()=>t});const t=(0,a(96540).createContext)(void 0)},36732:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var t=a(58168),i=(a(96540),a(15680)),l=a(51931),r=a(26982);const o={sidebar_position:21},c=void 0,p={unversionedId:"buildinlibs/lib_nuclei",id:"buildinlibs/lib_nuclei",isDocsHomePage:!1,title:"lib_nuclei",description:"\u672c\u8eab Yak \u5e76\u4e0d\u5177\u5907\u6f0f\u6d1e\u626b\u63cf\u80fd\u529b\uff0c\u4f46\u662f\u4f5c\u4e3a\u4e00\u95e8\u5e0c\u671b\u4e00\u7ad9\u5f0f\u89e3\u51b3\u5b89\u5168\u7814\u53d1\u9700\u6c42\u7684\u8bed\u8a00\uff0c\u5982\u679c\u80fd\u5728\u8bed\u8a00/\u8bed\u8a00\u5e93\u5c42\u9762\u96c6\u6210\u67d0\u4e00\u4e9b\u5177\u6709\u6210\u719f\u751f\u6001\u7684\u6f0f\u6d1e\u626b\u63cf\u80fd\u529b\u5176\u5b9e\u662f\u975e\u5e38\u4ee4\u4eba\u6fc0\u52a8\u7684\u3002",source:"@site/docs/buildinlibs/lib_nuclei.mdx",sourceDirName:"buildinlibs",slug:"/buildinlibs/lib_nuclei",permalink:"/docs/buildinlibs/lib_nuclei",editUrl:"https://github.com/yaklang/docs/buildinlibs/lib_nuclei.mdx",tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"tutorialSidebar",previous:{title:"[exec] \u547d\u4ee4\u6267\u884c\u5c01\u88c5",permalink:"/docs/buildinlibs/lib_exec"},next:{title:"[xpath] XPATH",permalink:"/docs/buildinlibs/lib_xpath"}},s=[{value:"Yaml PoC \u89e3\u51b3\u65b9\u6848",id:"yaml-poc-\u89e3\u51b3\u65b9\u6848",children:[{value:"Yaml PoC \u7684\u597d\u5904",id:"yaml-poc-\u7684\u597d\u5904",children:[]},{value:"\u4f46\u662f Yaml PoC \u4e5f\u5e76\u975e\u94f6\u5f39",id:"\u4f46\u662f-yaml-poc-\u4e5f\u5e76\u975e\u94f6\u5f39",children:[]}]},{value:"\u4e3a\u4ec0\u4e48\u96c6\u6210 Nuclei\uff1f\u800c\u4e0d\u662f xray\uff1f",id:"\u4e3a\u4ec0\u4e48\u96c6\u6210-nuclei\u800c\u4e0d\u662f-xray",children:[{value:"\u4f9d\u8d56\u4e0e\u539f\u751f\u96c6\u6210",id:"\u4f9d\u8d56\u4e0e\u539f\u751f\u96c6\u6210",children:[]},{value:"\u5f00\u6e90\u4e0e MIT \u534f\u8bae",id:"\u5f00\u6e90\u4e0e-mit-\u534f\u8bae",children:[]}]},{value:"\u5728 Yak \u4e2d\u4f7f\u7528 Nuclei",id:"\u5728-yak-\u4e2d\u4f7f\u7528-nuclei",children:[{value:"Quick Start",id:"quick-start",children:[]},{value:"\u5982\u4f55\u4f7f\u7528 nuclei \u53c2\u6570\uff1f",id:"\u5982\u4f55\u4f7f\u7528-nuclei-\u53c2\u6570",children:[]}]},{value:"\u5b9e\u6218\u6848\u4f8b",id:"\u5b9e\u6218\u6848\u4f8b",children:[{value:"\u4f7f\u7528 Vulhub \u642d\u5efa Thinkphp \u9776\u573a",id:"\u4f7f\u7528-vulhub-\u642d\u5efa-thinkphp-\u9776\u573a",children:[]},{value:"\u5b89\u88c5 nuclei \u7684 poc",id:"\u5b89\u88c5-nuclei-\u7684-poc",children:[]},{value:"\u4f7f\u7528 yak nuclei \u68c0\u6d4b thinkphp \u6f0f\u6d1e",id:"\u4f7f\u7528-yak-nuclei-\u68c0\u6d4b-thinkphp-\u6f0f\u6d1e",children:[]}]}],u={toc:s},d="wrapper";function m(e){let{components:n,...o}=e;return(0,i.yg)(d,(0,t.A)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"nuclei-\u8d4b\u4e88-yak-\u6f0f\u626b\u80fd\u529b"},"[nuclei]"," \u8d4b\u4e88 Yak \u6f0f\u626b\u80fd\u529b"),(0,i.yg)("p",null,"\u672c\u8eab Yak \u5e76\u4e0d\u5177\u5907\u6f0f\u6d1e\u626b\u63cf\u80fd\u529b\uff0c\u4f46\u662f\u4f5c\u4e3a\u4e00\u95e8\u5e0c\u671b\u4e00\u7ad9\u5f0f\u89e3\u51b3\u5b89\u5168\u7814\u53d1\u9700\u6c42\u7684\u8bed\u8a00\uff0c\u5982\u679c\u80fd\u5728\u8bed\u8a00/\u8bed\u8a00\u5e93\u5c42\u9762\u96c6\u6210\u67d0\u4e00\u4e9b\u5177\u6709\u6210\u719f\u751f\u6001\u7684\u6f0f\u6d1e\u626b\u63cf\u80fd\u529b\u5176\u5b9e\u662f\u975e\u5e38\u4ee4\u4eba\u6fc0\u52a8\u7684\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'res, err := nuclei.Scan(cli.String("target"))\ndie(err)\n\nfor result := range res {\n    dump(result)\n}\n')),(0,i.yg)("h2",{id:"yaml-poc-\u89e3\u51b3\u65b9\u6848"},"Yaml PoC \u89e3\u51b3\u65b9\u6848"),(0,i.yg)("p",null,"\u5927\u7ea6\u5728 2019 \u5e74\u524d\u540e\uff0cxray \u4e0e nuclei \u4e3a\u4ee3\u8868\u7684 Yaml PoC \u6a21\u5f0f\u7684\u6f0f\u6d1e\u626b\u63cf\u793e\u533a\u5f00\u59cb\u6784\u5efa\u3002"),(0,i.yg)("p",null,'\u76f8\u6bd4\u8d77 Python PoC/Exp \u5c42\u6b21\u4e0d\u9f50\u7684\u8d28\u91cf\u4e0e\u6742\u4e71\u65e0\u7ae0\u7684\u63a5\u53e3\uff0c"\u4f7f\u7528\u56fa\u5b9a\u683c\u5f0f\u7684 Yaml \u6765\u7f16\u5199 PoC \uff0c\u5e76\u628a PoC \u901a\u8fc7\u7279\u5b9a\u5f15\u64ce\u6765\u8c03\u5ea6\u6267\u884c" \u8fd9\u79cd\u65b9\u5f0f\u6765\u6784\u5efa\u6f0f\u6d1e\u9a8c\u8bc1\u7684\u4f53\u7cfb\uff0c\u53d8\u5f97\u975e\u5e38\u6d41\u884c\u3002'),(0,i.yg)("h3",{id:"yaml-poc-\u7684\u597d\u5904"},"Yaml PoC \u7684\u597d\u5904"),(0,i.yg)("p",null,"\u5bf9\u4e8e\u63d0\u5347 PoC \u6c34\u5e73\u548c\u6574\u4f53\u8d28\u91cf\u628a\u63a7\u975e\u5e38\u597d\uff1a"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"\u63d0\u5347\u7f16\u5199\u4eba\u5458\u7f16\u5199 PoC \u7684\u4e0b\u9650\uff0c\u5bf9\u6ca1\u6709\u7814\u53d1\u8bed\u8a00\u57fa\u7840\u7684\u5b89\u5168\u4eba\u5458\u53cb\u597d"),(0,i.yg)("li",{parentName:"ol"},"\u6709\u52a9\u4e8e PoC \u884c\u4e3a\u63a7\u5236\u548c\u6574\u4f53\u8d28\u91cf\u628a\u63a7"),(0,i.yg)("li",{parentName:"ol"},"PoC \u8d8a\u591a\uff0c\u793e\u533a\u4f9d\u8d56\u8d8a\u5f3a\uff0c\u8d8a\u80fd\u5438\u5f15\u4eba")),(0,i.yg)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"\u5f53\u7136\uff0cPoC \u7684\u8d28\u91cf\u5e76\u4e0d\u5b8c\u5168\u53ef\u4ee5\u7531 Yaml PoC \u548c\u4f18\u79c0\u7684\u5f15\u64ce\u6765\u63d0\u4f9b\uff0c\u7f16\u5199 PoC \u7684\u4eba\u7f16\u5199\u7684\u89c4\u5219\u9700\u8981\u8db3\u591f\u8c28\u614e\uff0c\u5c3d\u91cf\u51cf\u5c11\u8bef\u62a5\u548c\u6f0f\u62a5\u3002"),(0,i.yg)("p",{parentName:"div"},"\u6f0f\u62a5\u548c\u8bef\u62a5\u7387\u662f\u4e00\u4e2a PoC \u4f18\u79c0\u4e0e\u5426\u7684\u5173\u952e\u6307\u6807\uff0c\u5c0f\u8303\u56f4\u7684\u6837\u672c\u6570\u636e\u5e76\u4e0d\u771f\u6b63\u771f\u5b9e\u3002"))),(0,i.yg)("p",null,"\u5bf9\u5546\u4e1a/\u4e59\u65b9\u516c\u53f8\uff1a"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"\u793e\u533a\u8d21\u732e\u7684 PoC \u53ef\u4ee5\u5b8c\u7f8e\u53cd\u54fa\u516c\u53f8\u751f\u6001"),(0,i.yg)("li",{parentName:"ol"},"\u6253\u9020\u516c\u53f8\u6280\u672f\u5f71\u54cd\u529b\uff0c\u63d0\u5347\u516c\u53f8\u5728\u5b89\u5168\u793e\u533a\u7684\u5730\u4f4d")),(0,i.yg)("h3",{id:"\u4f46\u662f-yaml-poc-\u4e5f\u5e76\u975e\u94f6\u5f39"},"\u4f46\u662f Yaml PoC \u4e5f\u5e76\u975e\u94f6\u5f39"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"\u7814\u53d1\u6210\u672c\u76f8\u5bf9\u4e0d\u9ad8\uff0c\u610f\u5473\u7740\u66f4\u5bb9\u6613\u51fa\u73b0\u7ade\u54c1"),(0,i.yg)("li",{parentName:"ol"},"\u7ade\u54c1\u7684\u51fa\u73b0\uff0c\u4f1a\u5bfc\u81f4\u7ade\u5bf9\u516c\u53f8\u642c\u8fd0 PoC\uff0c\u505a\u65e0\u7528\u529f\uff0c\u6d6a\u8d39\u6240\u6709\u4eba\u7cbe\u529b"),(0,i.yg)("li",{parentName:"ol"},"\u8868\u73b0\u529b\u53d7\u9650\u5236\uff0c\u5982\u679c\u60f3\u8981\u901a\u8fc7 Yaml \u6765\u8fdb\u884c Fuzz\uff0c\u52bf\u5fc5\u4f1a\u589e\u52a0\u7f16\u5199\u5f15\u64ce\u7684\u96be\u5ea6\uff0c\u540c\u65f6 Yaml PoC \u7684\u5b66\u4e60\u6210\u672c\u4e5f\u4f1a\u53d8\u9ad8")),(0,i.yg)("div",{className:"admonition admonition-info alert alert--info"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u4e00\u4e2a\u503c\u5f97\u601d\u8003\u7684\u95ee\u9898")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"\u6709\u610f\u601d\u7684\u662f\uff0c\u5982\u679c Yaml Schema \u7684\u590d\u6742\u5ea6\u975e\u5e38\u9ad8\uff0c\u751a\u81f3\u53ef\u4ee5\u548c\u4e00\u95e8\u8bed\u8a00\u4e00\u6837\u9ad8\u4e86\uff0c\u90a3\u4e48\u4e3a\u4ec0\u4e48\u4e0d\u76f4\u63a5\u7528\u8868\u73b0\u529b\u66f4\u5f3a\u7684\u66f4\u5408\u7406\u7684\u7f16\u7a0b\u8bed\u8a00\u5462\uff1f"))),(0,i.yg)("h2",{id:"\u4e3a\u4ec0\u4e48\u96c6\u6210-nuclei\u800c\u4e0d\u662f-xray"},"\u4e3a\u4ec0\u4e48\u96c6\u6210 Nuclei\uff1f\u800c\u4e0d\u662f xray\uff1f"),(0,i.yg)("p",null,'\u8ba4\u8bc6\u4f5c\u8005\u7684\u4eba\u53ef\u80fd\u90fd\u77e5\u9053\uff0c\u4f5c\u8005\u66fe\u4f9b\u804c\u4e8e"\u957f\u4ead\u79d1\u6280"\uff0c\u540c\u65f6\u4e5f\u662f ',(0,i.yg)("inlineCode",{parentName:"p"},"xray")," \u8fd9\u4e2a\u5de5\u5177\u7684\u7814\u53d1\u4eba\u5458\u4e4b\u4e00\u3002\u4e3a\u4ec0\u4e48\u4e0d\u76f4\u63a5\u96c6\u6210 ",(0,i.yg)("inlineCode",{parentName:"p"},"xray"),"\uff0c\u4f7f\u7528 nuclei \u53bb\u6784\u5efa Yak \u7684\u6f0f\u626b\u80fd\u529b\uff1f"),(0,i.yg)("h3",{id:"\u4f9d\u8d56\u4e0e\u539f\u751f\u96c6\u6210"},"\u4f9d\u8d56\u4e0e\u539f\u751f\u96c6\u6210"),(0,i.yg)("p",null,"\u7531\u4e8e xray \u5e76\u4e0d\u662f\u5f00\u6e90\u4ea7\u54c1\uff0c\u4f5c\u4e3a\u4f7f\u7528\u65b9\uff0c\u53ea\u80fd\u88ab\u5141\u8bb8\u4f7f\u7528 xray \u7684\u4e8c\u8fdb\u5236\u53d1\u884c\u7248\u672c\uff0c\u800c\u4e14 Yak \u5e0c\u671b\u4e00\u7ad9\u5f0f\u89e3\u51b3\u5b89\u5168\u7814\u53d1\u80fd\u529b\u9700\u6c42\uff0c\u4f9d\u8d56\u4e00\u4e2a\u5916\u90e8\u7684\u4e8c\u8fdb\u5236\u5de5\u5177\u53d1\u884c\u7248\u610f\u5473\u7740\u9700\u8981\u7528\u6237\u81ea\u884c\u5b89\u88c5\u6216\u8005\u6253\u5305\u5230 Yak \u7684\u5b89\u88c5\u8fc7\u7a0b\u3002\n\u540c\u65f6\u4e5f\u4f1a\u7ed9 Yak \u5f15\u5165\u4f9d\u8d56\u95ee\u9898\uff0c\u5f53\u7528\u6237\u76f4\u63a5\u4f7f\u7528 Yak \u7684\u5e93\u7684\u65f6\u5019\uff0c\u53d1\u73b0\u4e0d\u53ef\u7528\uff0c\u9700\u8981\u4e0b\u8f7d/\u66f4\u65b0/\u5b89\u88c5\u5230\u73af\u5883\u53d8\u91cf\uff0c\u8fd9\u8fdd\u80cc\u4e86 Yak \u7684\u521d\u8877\u3002"),(0,i.yg)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"\u4ece\u8fd9\u91cc\u6211\u4eec\u5c31\u53ef\u4ee5\u660e\u663e\u770b\u5f97\u51fa\u6765\uff0cYak \u66f4\u50cf\u662f\u4e00\u4e2a\u571f\u58e4\uff0c\u6216\u8005\u57fa\u77f3\uff0c\u4efb\u4f55\u4f18\u79c0\u7684\u5f00\u6e90\u7684\u5b89\u5168\u4ea7\u54c1\u90fd\u53ef\u4ee5\u53c2\u4e0e Yak \u7684\u5efa\u8bbe\uff0c\u6210\u4e3a Yak \u7684\u4e00\u4efd\u5b50"),(0,i.yg)("p",{parentName:"div"},"\u5982\u679c\u4f60\u5e0c\u671b\u4f60\u7684 MIT \u534f\u8bae\u7684 Golang \u5b89\u5168\u5de5\u5177\u5185\u7f6e\u8fdb\u5165 Yak \u4e2d\uff0c\u8bf7\u8054\u7cfb\u6211\u4eec~"))),(0,i.yg)("p",null,"\u5bf9\u6bd4 nuclei\uff0c\u867d\u7136 nuclei \u7684\u53d1\u884c\u4e5f\u662f\u4ee5\u4e8c\u8fdb\u5236\u5de5\u5177\u53d1\u884c\uff0c\u4f46\u662f\u4ed6\u662f\u5f00\u6e90\uff0c\u4e14\u9075\u5b88 MIT \u534f\u8bae\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u5bf9\u5176\u6e90\u7801\u505a",(0,i.yg)("a",{parentName:"p",href:"https://github.com/yaklang/nuclei"},"\u4e00\u5b9a\u4fee\u6539"),"\uff0c\u4ece\u800c\u96c6\u6210\u8fdb\u6211\u4eec\u7684 Yak \u8bed\u8a00\u4e2d\u3002"),(0,i.yg)("h3",{id:"\u5f00\u6e90\u4e0e-mit-\u534f\u8bae"},"\u5f00\u6e90\u4e0e MIT \u534f\u8bae"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"\u5f00\u6e90\u534f\u8bae\u4e00\u56fe\u7b80\u4ecb",src:a(70492).A})),(0,i.yg)("h2",{id:"\u5728-yak-\u4e2d\u4f7f\u7528-nuclei"},"\u5728 Yak \u4e2d\u4f7f\u7528 Nuclei"),(0,i.yg)("p",null,"\u6211\u4eec\u7684\u96c6\u6210\u65b9\u5f0f\u5e76\u975e\u4f7f\u7528 Yak \u53bb\u8c03\u7528\u4e8c\u8fdb\u5236\u53d1\u884c\u7248\u7684 Nuclei\uff0c\u800c\u662f\u4f7f\u7528\u5728 Yak \u7f16\u8bd1\u7684\u8fc7\u7a0b\u4e2d\u628a Nuclei \u7f16\u8bd1\u6210 Yak \u7684\u4e00\u4e2a\u5185\u7f6e\u6a21\u5757\u3002"),(0,i.yg)("p",null,"\u4f17\u6240\u5468\u77e5\uff0c\u6211\u4eec\u7684 Yak \u5728\u4f7f\u7528\u5185\u7f6e\u5e93\u7684\u65f6\u5019\uff0c\u76f4\u63a5\u8c03\u7528\u5e93\u5373\u53ef\uff0c\u6240\u4ee5..."),(0,i.yg)("h3",{id:"quick-start"},"Quick Start"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'nuclei.Scan("example.com")\n')),(0,i.yg)("p",null,"\u5728 Yak \u811a\u672c\u4e2d\uff0c\u4efb\u4f55\u65f6\u5019\uff0c\u4f60\u60f3\u8fdb\u884c\u6f0f\u6d1e\u626b\u63cf\uff0c\u4ec5\u9700\u6267\u884c ",(0,i.yg)("inlineCode",{parentName:"p"},"nuclei.Scan")," \u51fd\u6570\u5373\u53ef"),(0,i.yg)("h3",{id:"\u5982\u4f55\u4f7f\u7528-nuclei-\u53c2\u6570"},"\u5982\u4f55\u4f7f\u7528 nuclei \u53c2\u6570\uff1f"),(0,i.yg)("p",null,"\u548c ",(0,i.yg)("inlineCode",{parentName:"p"},"synscan")," \u4e0e ",(0,i.yg)("inlineCode",{parentName:"p"},"servicescan")," \u4f7f\u7528\u53c2\u6570\u7684\u98ce\u683c\u4e00\u81f4\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'nuclei.Scan(targets, nuclei.verbose(true), nuclei.tags("thinkphp"))\n')),(0,i.yg)("p",null,"\u901a\u8fc7 ",(0,i.yg)("inlineCode",{parentName:"p"},"nuclei.verbose")," \u8bbe\u7f6e\u8f93\u51fa\u66f4\u591a\u7684\u8c03\u8bd5\u4fe1\u606f\uff0c\u540c\u65f6\u626b\u63cf\u6240\u6709 nuclei \u5e26 ",(0,i.yg)("inlineCode",{parentName:"p"},"thinkphp")," Tag \u7684 templates\u3002"),(0,i.yg)("h2",{id:"\u5b9e\u6218\u6848\u4f8b"},"\u5b9e\u6218\u6848\u4f8b"),(0,i.yg)("p",null,"\u6211\u4eec\u5728\u672c\u5730\u642d\u5efa\u4e00\u4e2a ",(0,i.yg)("inlineCode",{parentName:"p"},"thinkphp")," \u6f0f\u6d1e\u73af\u5883"),(0,i.yg)("h3",{id:"\u4f7f\u7528-vulhub-\u642d\u5efa-thinkphp-\u9776\u573a"},"\u4f7f\u7528 Vulhub \u642d\u5efa Thinkphp \u9776\u573a"),(0,i.yg)("p",null,"\u4e3a\u4e86\u9a8c\u8bc1 nuclei \u7684\u6f0f\u626b\u80fd\u529b\uff0c\u6211\u4eec\u9700\u8981\u5b9e\u9645\u626b\u63cf\u4e00\u4e9b\u5177\u4f53\u7684\u6f0f\u6d1e\u3002"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/vulhub/vulhub --depth 1\ncd vulhub/thinkphp/5.0.23-rce\ndocker-compose up -d\n")),(0,i.yg)("h3",{id:"\u5b89\u88c5-nuclei-\u7684-poc"},"\u5b89\u88c5 nuclei \u7684 poc"),(0,i.yg)("p",null,"\u5728 Yak \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 nuclei \u7684\u5f15\u64ce\uff0c\u4f46\u662f\u5f80\u5f80 PoC \u7684\u66f4\u65b0\u9891\u7387\u6bd4\u8f83\u9ad8\uff0c\u5982\u679c\u6211\u4eec\u9700\u8981\u4f7f\u7528\u6700\u65b0\u7684 PoC\uff0c\u5219\u9700\u8981\u66f4\u65b0\u4e00\u4e0b PoC \u5e93\u3002"),(0,i.yg)("p",null,"\u66f4\u65b0 PoC \u5e93\u6709\u4e24\u4e2a\u65b9\u5f0f"),(0,i.yg)(l.A,{defaultValue:"auto-update",values:[{label:"\u81ea\u52a8\u66f4\u65b0 nuclei PoC",value:"auto-update"},{label:"\u624b\u52a8\u66f4\u65b0 nuclei PoC",value:"manual-update"}],mdxType:"Tabs"},(0,i.yg)(r.A,{value:"auto-update",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"yak update-nuclei-poc\n"))),(0,i.yg)(r.A,{value:"manual-update",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"cd ~ && git clone https://github.com/projectdicovery/nuclei-templates --depth 1\n")))),(0,i.yg)("p",null,"\u5f53\u6211\u4eec\u6267\u884c\u5b8c ",(0,i.yg)("inlineCode",{parentName:"p"},"yak update-nuclei-poc")," \u4e4b\u540e\uff0c\u6211\u4eec\u5c06\u4f1a\u770b\u5230\u5982\u4e0b\u5185\u5bb9"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"\n                       __     _\n     ____  __  _______/ /__  (_)\n    / __ \\/ / / / ___/ / _ \\/ /\n   / / / / /_/ / /__/ /  __/ /\n  /_/ /_/\\__,_/\\___/_/\\___/_/   v2.3.8\n\n                projectdiscovery.io\n\n\nNewly added templates:\n\nCONTRIBUTING.md\nPULL_REQUEST_TEMPLATE.md\ncnvd/CNVD-2019-01348.yaml\ncnvd/CNVD-2020-23735.yaml\ncnvd/CNVD-2020-56167.yaml\ncnvd/CNVD-2020-62422.yaml\ncnvd/CNVD-2020-68596.yaml\ncnvd/CNVD-2021-10543.yaml\ncnvd/CNVD-2021-15822.yaml\ncnvd/CNVD-2021-17369.yaml\ncnvd/CNVD-2021-30167.yaml\ncves/2009/CVE-2009-0545.yaml\ncves/2009/CVE-2009-1151.yaml\ncves/2009/CVE-2009-4223.yaml\ncves/2011/CVE-2011-0049.yaml\n...\n...\nfile/android/debug-enabled.yaml\nfile/android/dynamic-broadcast-receiver.yaml\nfile/android/file-scheme.yaml\n...\n...\nfile/android/webview-universal-access.yaml\nfile/keys/amazon-mws-auth-token.yaml\nfile/keys/aws-access-id.yaml\nfile/keys/aws-cognito.yaml\nfile/keys/cloudinary.yaml\nfile/keys/credentials.yaml\n\nworkflows/lucee-workflow.yaml\nworkflows/magento-workflow.yaml\nworkflows/ruijie-workflow.yaml\n\nNuclei Templates v8.4.0 Changelog\n+-------+-------+---------+\n| TOTAL | ADDED | REMOVED |\n+-------+-------+---------+\n|  1472 |   634 |      43 |\n+-------+-------+---------+\n[INF] Successfully updated nuclei-templates (v8.4.0). Enjoy!\n")),(0,i.yg)("p",null,"\u770b\u5230\u8fd9\u4e9b\u5185\u5bb9\u7684\u65f6\u5019\uff0c\u6211\u4eec\u7684 nuclei \u7684 poc \u5df2\u7ecf\u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c\u4e86\u3002"),(0,i.yg)("h3",{id:"\u4f7f\u7528-yak-nuclei-\u68c0\u6d4b-thinkphp-\u6f0f\u6d1e"},"\u4f7f\u7528 yak nuclei \u68c0\u6d4b thinkphp \u6f0f\u6d1e"),(0,i.yg)("p",null,"\u5f53\u6211\u4eec\u6267\u884c"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go",metastring:'title="thinkphp.yak"',title:'"thinkphp.yak"'},'res, err := nuclei.Scan("127.0.0.1:8083", nuclei.tags("thinkphp"))\ndie(err)\n\nfor result = range res {\n    dump(result)\n}\n')),(0,i.yg)("p",null,"\u8fd9\u4e2a\u811a\u672c\u7684\u662f\u54c8\uff0c\u6211\u4eec\u5f97\u5230\u4e86\u5982\u4e0b\u7ed3\u679c"),(0,i.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"127.0.0.1:8083 \u662f\u672c\u673a\u9776\u573a\u5730\u5740"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},'\n                       __     _\n     ____  __  _______/ /__  (_)\n    / __ \\/ / / / ___/ / _ \\/ /\n   / / / / /_/ / /__/ /  __/ /\n  /_/ /_/\\__,_/\\___/_/\\___/_/   v2.3.8\n\n                projectdiscovery.io\n\n[ERR] Could not find template \'exposed-tokens\': no templates found in path\n[ERR] Could not find template \'helpers\': no templates found in path\n[INF] Loading templates...\n[INF] [thinkphp-2-rce] ThinkPHP 2 / 3 \'s\' Parameter RCE (@dr_set) [critical]\n[INF] [thinkphp-5023-rce] ThinkPHP 5.0.23 RCE (@dr_set) [critical]\n[INF] [thinkphp-5022-rce] ThinkPHP 5.0.22 RCE (@dr_set) [critical]\n[INF] [thinkphp-509-information-disclosure] ThinkPHP 5.0.9 Information Disclosure (@dr_set) [critical]\n[INF] Loading workflows...\n[INF] Using 4 rules (4 templates, 0 workflows)\n{"templateID":"thinkphp-5023-rce","info":{"tags":"thinkphp,rce","name":"ThinkPHP 5.0.23 RCE","author":"dr_set","severity":"critical","description":"Thinkphp5 5.0(\\u003c5.0.24) Remote Code Execution.","reference":"https://github.com/vulhub/vulhub/tree/0a0bc719f9a9ad5b27854e92bc4dfa17deea25b4/thinkphp/5.0.23-rce"},"type":"http","host":"http://127.0.0.1:8083","matched":"http://127.0.0.1:8083/index.php?s=captcha","ip":"127.0.0.1","timestamp":"2021-07-16T00:05:13.895207+08:00"}\n(*tools.PocVul)(0xc001ca8000)({\n Source: (string) (len=6) "nuclei",\n PocName: (string) (len=17) "thinkphp-5023-rce",\n Target: (string) (len=21) "http://127.0.0.1:8083",\n IP: (string) (len=9) "127.0.0.1",\n Port: (int) 8083,\n Timestamp: (int64) 1626365113,\n Severity: (string) (len=8) "critical",\n RawJson: (string) (len=477) "{\\"host\\":\\"http://127.0.0.1:8083\\",\\"info\\":{\\"author\\":\\"dr_set\\",\\"description\\":\\"Thinkphp5 5.0(\\\\u003c5.0.24) Remote Code Execution.\\",\\"name\\":\\"ThinkPHP 5.0.23 RCE\\",\\"reference\\":\\"https://github.com/vulhub/vulhub/tree/0a0bc719f9a9ad5b27854e92bc4dfa17deea25b4/thinkphp/5.0.23-rce\\",\\"severity\\":\\"critical\\",\\"tags\\":\\"thinkphp,rce\\"},\\"ip\\":\\"127.0.0.1\\",\\"matched\\":\\"http://127.0.0.1:8083/index.php?s=captcha\\",\\"templateID\\":\\"thinkphp-5023-rce\\",\\"timestamp\\":\\"2021-07-16T00:05:13.895207+08:00\\",\\"type\\":\\"http\\"}"\n})\n')),(0,i.yg)("p",null,"\u6211\u4eec\u89c2\u5bdf\u7ed3\u679c\uff0c\u53d1\u73b0 nuclei \u7684\u65e5\u5fd7\u88ab\u6253\u5370\u5230\u4e86 stdout \u4e2d\uff0c\u626b\u63cf\u7684\u7ed3\u679c\u662f\u4e00\u4e2a ",(0,i.yg)("inlineCode",{parentName:"p"},"*tools.PocVul")," \u5bf9\u8c61\uff0c\u8fd4\u56de\u5728\u4e86\u7ed3\u679c\u4e2d\u3002"),(0,i.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},(0,i.yg)("inlineCode",{parentName:"p"},"*tools.VulPoc")," \u7684\u7ed3\u6784\u63cf\u8ff0"),(0,i.yg)("pre",{parentName:"div"},(0,i.yg)("code",{parentName:"pre",className:"language-go"},"type palm/common/yak/yaklib/tools.(PocVul) struct {\n  Fields(\u53ef\u7528\u5b57\u6bb5):\n      Source: string\n      PocName: string\n      Target: string\n      IP: string\n      Port: int\n      Timestamp: int64\n      Severity: string\n      RawJson: string\n  StructMethods(\u7ed3\u6784\u65b9\u6cd5/\u51fd\u6570):\n  PtrStructMethods(\u6307\u9488\u7ed3\u6784\u65b9\u6cd5/\u51fd\u6570):\n}\n")))))}m.isMDXComponent=!0},20053:(e,n,a)=>{function t(e){var n,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(a=t(e[n]))&&(i&&(i+=" "),i+=a);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}a.d(n,{A:()=>i});const i=function(){for(var e,n,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(n=t(e))&&(i&&(i+=" "),i+=n);return i}},70492:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/source-license-98617ecaeb4d4ab55cf58b1e88409c9d.png"}}]);