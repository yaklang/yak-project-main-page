(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[5445],{3905:(e,a,t)=>{"use strict";t.d(a,{Zo:()=>p,kt:()=>m});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=n.createContext({}),s=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=l,m=u["".concat(c,".").concat(d)]||u[d]||k[d]||r;return t?n.createElement(m,o(o({ref:a},p),{},{components:t})):n.createElement(m,o({ref:a},p))}));function m(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=d;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},88920:(e,a,t)=>{"use strict";t.r(a),t.d(a,{frontMatter:()=>r,contentTitle:()=>o,metadata:()=>i,toc:()=>c,default:()=>p});var n=t(22122),l=(t(67294),t(3905));const r={sidebar_position:8},o="\u4f7f\u7528 Yakit \u6253\u7834 Java \u5e8f\u5217\u5316\u534f\u8bae\u8bed\u8a00\u9694\u79bb",i={unversionedId:"article/basic/breaking-java-with-yakit",id:"article/basic/breaking-java-with-yakit",isDocsHomePage:!1,title:"\u4f7f\u7528 Yakit \u6253\u7834 Java \u5e8f\u5217\u5316\u534f\u8bae\u8bed\u8a00\u9694\u79bb",description:"\u4e00\u53e5\u8bdd\u80cc\u666f\u77e5\u8bc6",source:"@site/products/article/basic/breaking-java-with-yakit.md",sourceDirName:"article/basic",slug:"/article/basic/breaking-java-with-yakit",permalink:"/en/products/article/basic/breaking-java-with-yakit",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"teamSidebar",previous:{title:"\u4e13\u9879\u6f0f\u6d1e\u6570\u636e\u5e93\u66f4\u65b0",permalink:"/en/products/article/basic/update-nuclei-poc"},next:{title:'\u6280\u672f\u603b\u89c8\uff1a"\u5730\u8868\u6700\u5f3a" \u7684\u63d2\u4ef6\u7cfb\u7edf',permalink:"/en/products/article/professional/yak-script-system"}},c=[{value:"\u4e00\u53e5\u8bdd\u80cc\u666f\u77e5\u8bc6",id:"\u4e00\u53e5\u8bdd\u80cc\u666f\u77e5\u8bc6",children:[]},{value:"\u5a01\u80c1",id:"\u5a01\u80c1",children:[]},{value:"\u5982\u4f55\u4e0d\u88ab\u201c\u53cd\u5236\u201d\uff1f",id:"\u5982\u4f55\u4e0d\u88ab\u53cd\u5236\uff1f",children:[{value:"\u73b0\u72b6\uff1a",id:"\u73b0\u72b6\uff1a",children:[]}]},{value:"\u900f\u8fc7\u73b0\u8c61\u770b\u672c\u8d28",id:"\u900f\u8fc7\u73b0\u8c61\u770b\u672c\u8d28",children:[]},{value:"Talk is Cheap",id:"talk-is-cheap",children:[{value:"\u4ece\u4e00\u7247\u843d\u53f6\u5f00\u59cb\uff1aTC_STRING",id:"\u4ece\u4e00\u7247\u843d\u53f6\u5f00\u59cb\uff1atc_string",children:[]},{value:"SerialDumper \u7684 yaklang.io \u7248\u672c",id:"serialdumper-\u7684-yaklangio-\u7248\u672c",children:[]},{value:"\u590d\u6742\u6848\u4f8b\uff08\u4e00\uff09\uff1a\u201c\u53ef\u8bfb\u5316\u201dCC1 \u5229\u7528\u94fe",id:"\u590d\u6742\u6848\u4f8b\uff08\u4e00\uff09\uff1a\u53ef\u8bfb\u5316cc1-\u5229\u7528\u94fe",children:[]},{value:"\u590d\u6742\u6848\u4f8b\uff08\u4e8c\uff09\uff1aCC1 \u5229\u7528\u94fe\u4e0e JSON \u4e92\u53ef\u9006",id:"\u590d\u6742\u6848\u4f8b\uff08\u4e8c\uff09\uff1acc1-\u5229\u7528\u94fe\u4e0e-json-\u4e92\u53ef\u9006",children:[]}]},{value:"\u7ed3\u8bed\u4e0e\u610f\u5916",id:"\u7ed3\u8bed\u4e0e\u610f\u5916",children:[{value:"Version Note:",id:"version-note",children:[]},{value:"Reference",id:"reference",children:[]}]}],s={toc:c};function p(e){let{components:a,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4f7f\u7528-yakit-\u6253\u7834-java-\u5e8f\u5217\u5316\u534f\u8bae\u8bed\u8a00\u9694\u79bb"},"\u4f7f\u7528 Yakit \u6253\u7834 Java \u5e8f\u5217\u5316\u534f\u8bae\u8bed\u8a00\u9694\u79bb"),(0,l.kt)("h2",{id:"\u4e00\u53e5\u8bdd\u80cc\u666f\u77e5\u8bc6"},"\u4e00\u53e5\u8bdd\u80cc\u666f\u77e5\u8bc6"),(0,l.kt)("p",null,"\u4f17\u6240\u5468\u77e5\uff0c\u5728\u4f7f\u7528 Java \u7f16\u5199\u6f0f\u6d1e\u5229\u7528\u6216\u68c0\u6d4b\u65f6\uff0cysoserial \u6216\u7c7b\u4f3c\u5de5\u5177\u4f1a\u6784\u9020\u4e00\u4e2a\u7279\u5b9a\u7684\u6267\u884c\u547d\u4ee4\u7684\u5bf9\u8c61\uff0c\u7136\u540e\u8fdb\u884c\u5e8f\u5217\u5316\uff0c\u4f5c\u4e3a\u7528\u6237\u53ea\u628a\u5e8f\u5217\u5316\uff08Marshal\uff09\u540e\u7684\u4e8c\u8fdb\u5236\u5bf9\u8c61\u4f5c\u4e3a Payload\uff0c\u6253\u5230\u7279\u5b9a\u4f4d\u7f6e\u6216\u6ce8\u518c\u4e3a\u8fdc\u7a0b\u5bf9\u8c61\uff0c\u901a\u8fc7 RMI \u6216\u8005\u8fdc\u7a0b\u670d\u52a1 readObject \u540e\u76f4\u63a5 RCE\u3002\n\u867d\u7136\u8fd9\u662f\u4e00\u4e2a\u4eba\u4eba\u90fd\u77e5\u9053\u7684\u8fc7\u7a0b\u3002"),(0,l.kt)("h2",{id:"\u5a01\u80c1"},"\u5a01\u80c1"),(0,l.kt)("p",null,"\u5f53\u7136\uff0c\u201c\u8d5b\u535a\u56de\u5fc6\u5f55-\u53cd\u5236\u7cfb\u5217\u201d \u9488\u5bf9\u8fd9\u4e2a\u95ee\u9898\u505a\u4e86\u8be6\u7ec6\u7684\u6587\u7ae0\uff0cJava \u5b9e\u73b0\u7684\u6f0f\u6d1e\u5229\u7528\u5b9e\u9645\u4e0a\u662f\u4e00\u628a \u201c\u53cc\u5203\u5251\u201d\uff0c\u5728\u4f7f\u7528\u5404\u79cd\u94fe\u6765\u6784\u9020\u7279\u5b9a\u53cd\u5e8f\u5217\u5316\u6d41\u7684\u540c\u65f6\uff0c\u81ea\u5df1\u4e5f\u662f\u4e00\u4e2a\u201c\u9776\u5b50\u201d\u3002\n\u5176\u5b9e\u65e9\u5728\u53cd\u5236\u7cfb\u5217\u51fa\u73b0\u4e4b\u524d\uff0c\u7b14\u8005\u5728\u957f\u4ead\u5de5\u4f5c\u65f6\uff0c\u5b50\u822a\u5e08\u5085\u5c31\u63d0\u8fc7 Java RMI \u7684\u53cd\u5236\uff0c\u53ef\u4ee5\u505a\u5230\u653e\u4e00\u4e2a 1099 RMI \u871c\u7f50\u5728\u516c\u7f51\uff0c\u8c01\u6765\u6253\u5c31\u6253\u56de\u53bb\u53cd\u5411 RCE\u3002\u8fd9\u4e2a\u539f\u7406\u4e5f\u975e\u5e38\u5bb9\u6613\u7406\u89e3\u3002"),(0,l.kt)("h2",{id:"\u5982\u4f55\u4e0d\u88ab\u53cd\u5236\uff1f"},"\u5982\u4f55\u4e0d\u88ab\u201c\u53cd\u5236\u201d\uff1f"),(0,l.kt)("p",null,"\u5927\u5bb6\u505a\u6f0f\u6d1e\u626b\u63cf\u8fd9\u7c7b\u5b89\u5168\u5f00\u53d1\u7684\u65f6\u5019\uff0c\u975e\u5e38\u5934\u75db\u7684\u4e8b\u60c5\u5728\u4e8e\uff0c\u504f\u7231 Python \u6216 Golang\uff0c\u4e0d\u8003\u8651\u7528 Java \u5b9e\u73b0\u3002"),(0,l.kt)("p",null,"\u5c31\u76f4\u63a5\u5bfc\u81f4\u5f88\u591a Java \u6f0f\u6d1e\u7684\u68c0\u6d4b\u53d8\u5f97\u975e\u5e38\u626d\u66f2\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u7528\u4e86 Java \u53c8\u9700\u8981\u601d\u8003\u5982\u4f55\u4e0d\u88ab\u53cd\u5236\uff0c\u7528\u6237\u9700\u8981\u4e25\u683c\u63a7\u5236\u4e0d\u8981\u52a0\u8f7d\u4efb\u4f55\u6765\u6e90\u4e8e\u653b\u51fb\u8005\u7684\u7c7b\u6216\u8005\u6d41\u3002"),(0,l.kt)("h3",{id:"\u73b0\u72b6\uff1a"},"\u73b0\u72b6\uff1a"),(0,l.kt)("p",null,"\u5e02\u9762\u4e0a\u5173\u4e8e\u6709 Java \u76f8\u5173\u7684\u6f0f\u6d1e\u626b\u63cf\u73b0\u5728\u4e3b\u6d41\u5206\u4e24\u7c7b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("span",{style:{background:"#fff67acc"}},"\u4f9d\u8d56 Java \u73af\u5883"),"\uff0c\u5e76\u4e14 ysoserial.jar \u4f5c\u4e3a\u626b\u63cf\u5668\u4f9d\u8d56\u6253\u5305\uff0c\u4ee5 Popen / system / subprocess / Exec \u8c03\u7528 java -jar ysoserial.jar \u6765\u751f\u6210\u7279\u5b9a Payload \u6765\u8fdb\u884c\u6f0f\u6d1e\u68c0\u6d4b\u6216\u653b\u51fb\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("span",{style:{background:"#fff67acc"}},"\u53e6\u4e00\u7c7b\u9009\u62e9\u786c\u7f16\u7801\u5229\u7528\u94fe\u7684 Payload\uff0c\u7136\u540e\u6839\u636e\u6267\u884c\u547d\u4ee4\u7684 Payload \u957f\u5ea6\u6784\u9020\u5408\u9002\u7684 \u201c\u5757\u201d"),"\uff0c\u66ff\u6362\u539f Payload \u4f4d\u7f6e\uff0c\u4ece\u800c\u6784\u9020\u51fa\u4e00\u4e2a\u53ef\u7528\u7684 Payload\u3002\u5927\u5bb6\u5e38\u89c1\u7684 xray \u5c31\u662f\u901a\u8fc7 \u201c\u786c\u7f16\u7801\u201d \u6765\u5b9e\u73b0\u5229\u7528\u94fe\u7684\u3002")),(0,l.kt)("p",null,"\u4f17\u6240\u5468\u77e5\uff0c\u9488\u5bf9\u4e00\u4e9b Groovy \u94fe\u548c\u5e38\u89c1\u7684 CC1 \u94fe\u90fd\u662f\u53ef\u4ee5\u76f4\u63a5\u627e\u5230\u5bf9\u5e94\u7684\u547d\u4ee4\u7684\u4f4d\u7f6e\uff0c\u76f4\u63a5\u66ff\u6362\u5373\u53ef\u3002\u5b9e\u9645\u5728\u7b2c\u4e8c\u79cd\u5b9e\u73b0\u4e2d\uff0c\u6709\u7740\u975e\u5e38\u5927\u7684\u9650\u5236\uff1aTemplatesImpl "),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"http://com.sun.org"},"com.sun.org"),".apache.xalan.internal.xsltc.trax.TemplatesImpl \u6a21\u7248\u662f\u5f88\u591a\u94fe\u6267\u884c\u547d\u4ee4\u7684\u5173\u952e\u3002")),(0,l.kt)("p",null,"\u5c1d\u8bd5\u8fc7\u8fdb\u884c\u4e00\u4e9b\u5206\u6790\u7684\u8bfb\u8005\u5176\u5b9e\u975e\u5e38\u6e05\u695a\uff0c\u6211\u4eec\u5728\u6709 TemplatesImpl \u7684\u94fe\uff08\u4f8b\u5982 CC2","[CommonCollections2]"," / CC3 / CC4\uff09\u4e2d\uff0c\u65e0\u6cd5\u76f4\u63a5 \u201c\u641c\u5230\u201d \u6267\u884c\u7684\u547d\u4ee4\u7684\u5173\u952e\u5b57\u3002\u5176\u5b9e\u672c\u8d28\u4e0a\u662f\u56e0\u4e3a\uff0c\u6709\u4e00\u4e9b\u547d\u4ee4\u548c\u4ee3\u7801\u88ab\u7f16\u8bd1\u6210\u4e86 \u201cJava \u5b57\u8282\u7801\u201d\uff0c\u7136\u540e\u53c8\u88ab\u5e8f\u5217\u5316\u6210\u4e86 \u201cTC_BLOCKDATA\u201d\uff0c\u8868\u8c61\u5c31\u662f\uff0c\u6bcf\u4e2a\u5b57\u8282\u90fd\u52a0\u4e86 Padding\uff0c\u6211\u4eec\u53d1\u73b0\u65e0\u6cd5 \u201c\u641c\u201d \u5230\u5bf9\u5e94 string \u4e86\u3002\u5f53\u7136\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u4eba\u4e3a\u53bb\u505a \u201cPadding\u201d\uff0c\u7136\u540e\u628a Payload \u81ea\u5df1\u53bb Padding \u540e\u585e\u5165\u94fe\u4e2d\u7279\u5b9a\u4f4d\u7f6e\uff0c\u4e5f\u53ef\u4ee5\u6784\u9020\u51fa\u4e00\u4e2a \u201c\u53ef\u7528\u201d \u7684 Payload\u3002"),(0,l.kt)("p",null,"\u4f5c\u4e3a\u5bf9\u6bd4\uff0c\u7b2c\u4e00\u79cd\u5b9e\u73b0\u5199\u7684\u4ee3\u7801\u66f4\u5c11\uff0c\u8c03\u7528\u522b\u4eba\u7684\u4e1c\u897f\u800c\u5df2\uff0c\u65e0\u975e\u591a\u542f\u52a8\u51e0\u4e2a\u8fdb\u7a0b\uff1b\u201c\u88ab\u53cd\u5236\u98ce\u9669\u201d \u5f53\u7136\u4e0d\u8a00\u800c\u55bb\uff0c\u5982\u679c\u542f\u7528 RMI \u53bb\u653b\u51fb\uff0c\u90a3\u4e48\u88ab\u53cd\u5236\u53ef\u4ee5\u8bf4\u662f\u201c\u548e\u7531\u81ea\u53d6\u201d\u4e86\u3002"),(0,l.kt)("h2",{id:"\u900f\u8fc7\u73b0\u8c61\u770b\u672c\u8d28"},"\u900f\u8fc7\u73b0\u8c61\u770b\u672c\u8d28"),(0,l.kt)("p",null,"\u672c\u8d28\u4e0a Java \u5e8f\u5217\u5316\u534f\u8bae \u548c Json \u4ece\u89e3\u51b3\u95ee\u9898\u7684\u89d2\u5ea6\u6765\u8bf4\uff0c\u6ca1\u6709\u4efb\u4f55\u533a\u522b\uff1a\u90fd\u662f",(0,l.kt)("span",{style:{background:"#fff67acc"}},"\u4e3a\u4e86\u8ba9\u6570\u636e\u53ef\u4ee5\u8131\u79bb \u201c\u7a0b\u5e8f\u201d \u5355\u72ec\u5b58\u5728\uff0c\u8fdb\u884c\u4f20\u8f93\u6216\u6301\u4e45\u5316"),"\u3002\u53ea\u662f\u8f7d\u4f53\u4e0d\u4e00\u6837\u800c\u5df2\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5f88\u5bb9\u6613\u7406\u89e3 Json\uff0c\u5176\u5b9e Java \u5e8f\u5217\u5316\u534f\u8bae\u4e00\u6837\uff0cprotobuf \u4e5f\u4e00\u6837\uff0cBson\uff0cGson\uff0cxml \u90fd\u6709\u8fd9\u4e2a\u76ee\u7684\uff0c\u5e76\u4e14\u53ef\u4ee5\u8bf4\u662f\u4e3b\u8981\u76ee\u7684\u3002"),(0,l.kt)("p",null,"\u88ab\u53cd\u5236\u5e76\u4e0d\u662f\u8bf4\u53ea\u6709 Java \u53cd\u5e8f\u5217\u5316\u8fc7\u7a0b\u4f1a\u51fa\u73b0\u95ee\u9898\uff0cPHP \u4e5f\u4e00\u6837\uff0cfastjson \u751a\u81f3\u662f\u5728\u53cd\u5e8f\u5217\u5316 Json \u7684\u8fc7\u7a0b\u4e2d\uff0c\u52a0\u8f7d\u4e86\u4e0d\u8be5\u52a0\u8f7d\u7684\u4e1c\u897f\u3002"),(0,l.kt)("p",null,"\u7136\u800c\u8981\u517c\u5bb9\u53cd\u5e8f\u5217\u5316\u534f\u8bae\u5176\u5b9e\u5e76\u4e0d\u96be\uff0c\u751a\u81f3\u6211\u4eec\u53ef\u4ee5\u8111\u6d1e\u4e00\u4e0b\uff0c\u6211\u4eec\u80fd\u628a Java \u5e8f\u5217\u5316\u6d41\u4e2d\u7684\u5bf9\u8c61\u90fd\u89e3\u6790\u51fa\u6765\uff0c\u7136\u540e\u7ecf\u8fc7\u4e00\u4e9b\u683c\u5f0f\u68c0\u67e5\u5b58\u50a8\u6210\u66f4\u5229\u4e8e\u5927\u5bb6\u89c2\u5bdf\u7684 Json\uff0c\u5e76\u4e14\uff0c\u5927\u5bb6\u53ef\u4ee5\u4fee\u6539\u4e86 Json \u4e4b\u540e\uff0c\u518d\u6309\u7167 Java \u5e8f\u5217\u5316\u7684\u534f\u8bae\u7ec4\u5408\u56de\u53bb\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/7/docs/platform/serialization/spec/protocol.html"},"https://docs.oracle.com/javase/7/docs/platform/serialization/spec/protocol.html"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/17/docs/specs/serialization/protocol.html"},"https://docs.oracle.com/en/java/javase/17/docs/specs/serialization/protocol.html"))),(0,l.kt)("h2",{id:"talk-is-cheap"},"Talk is Cheap"),(0,l.kt)("p",null,"\u5176\u5b9e\u7b14\u8005\u5e76\u4e0d\u613f\u610f\u82b1\u5927\u91cf\u7684\u7b14\u58a8\u6765\u4ecb\u7ecd Java \u5e8f\u5217\u5316\u534f\u8bae\uff0c\u8fd9\u4e9b\u5185\u5bb9\u5176\u5b9e\u5982\u679c\u5927\u5bb6\u7a0d\u6709\u7814\u7a76\u7684\u8bdd\uff0c\u5c5e\u4e8e\u57fa\u7840\u77e5\u8bc6\u3002\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u6765\u89c2\u5bdf\u4e00\u4e2a\u57fa\u7840\u4f8b\u5b50\uff1a"),(0,l.kt)("h3",{id:"\u4ece\u4e00\u7247\u843d\u53f6\u5f00\u59cb\uff1atc_string"},"\u4ece\u4e00\u7247\u843d\u53f6\u5f00\u59cb\uff1aTC_STRING"),(0,l.kt)("p",null,"\u6211\u4eec\u4ece\u6700\u7b80\u5355\u7684\u6848\u4f8b\u5f00\u59cb\uff1a\u6211\u4eec\u4ece\u5b57\u7b26\u4e32\u5bf9\u8c61\u7684\u5e8f\u5217\u5316\u5f00\u59cb"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(80173).Z})),(0,l.kt)("p",null,"\u901a\u8fc7\u6267\u884c\u4e0a\u9762\u7684\u4ee3\u7801\uff0c\u6211\u4eec\u53d1\u73b0\u6267\u884c\u7684\u7ed3\u679c\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-makefile"},"rO0ABXQAFnlha2xhbmcuaW8taXMtYXdlc29tZSE=\n")),(0,l.kt)("p",null,"\u5f53\u6211\u4eec\u628a\u4e0a\u8ff0\u7684\u5185\u5bb9\u53d8\u4e3a\u5341\u516d\u8fdb\u5236\u7684\u65f6\u5019\uff0c\u6211\u4eec\u719f\u6089\u7684 ACED \u51fa\u73b0\u4e86\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nginx"},"aced000574001679616b6c616e672e696f2d69732d617765736f6d6521\n")),(0,l.kt)("p",null,"\u5728\u6211\u4eec\u5c0f\u5de5\u5177\u4e2d\uff0c\u6211\u4eec\u9009\u62e9 \u201cCodec => Java => \u53cd\u5e8f\u5217\u5316 Java \u5bf9\u8c61\u6d41\uff08Hex\uff09\u201d "),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(70798).Z})),(0,l.kt)("p",null,"\u53ef\u4ee5\u53d1\u73b0\u6211\u4eec\u628a\u5de6\u8fb9\u7684\u5e8f\u5217\u5316\u7684\u6d41\u8f6c\u6362\u6210\u4e86\u4e00\u6bb5 JSON"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "type": 116,\n    "type_verbose": "TC_STRING",\n    "is_long": false,\n    "size": 22,\n    "raw": "eWFrbGFuZy5pby1pcy1hd2Vzb21lIQ==",\n    "value": "yaklang.io-is-awesome!",\n    "handle": 0\n  }\n]\n')),(0,l.kt)("p",null,"\u540c\u6837\u7684\uff0c\u6211\u4eec\u628a\u5e8f\u5217\u5316\u540e\u7684\u5185\u5bb9\u653e\u5728\u5de6\u680f\uff0c\u9009\u62e9 \u201cJava => Java \u5bf9\u8c61\u6d41\u5e8f\u5217\u5316(JSON=>HEX)\u201d \u5373\u53ef\u8fd8\u539f\u6211\u4eec\u7684 TC_STRING \u53d8\u6210 ACED \u5f00\u5934\u7684 Java \u5bf9\u8c61\u6d41\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(14539).Z})),(0,l.kt)("p",null,"\u5f53\u7136\uff0c\u867d\u7136\u8fd9\u4e2a\u5de5\u5177\u770b\u8d77\u6765\u975e\u5e38\u7b80\u5355\uff0c\u4f46\u662f\u7edd\u5bf9\u4e5f\u4e0d\u4ec5\u4ec5\u662f\u751f\u6210 / \u8fd8\u539f\u4e00\u4e0b HEX\u3002"),(0,l.kt)("h3",{id:"serialdumper-\u7684-yaklangio-\u7248\u672c"},"SerialDumper \u7684 yaklang.io \u7248\u672c"),(0,l.kt)("p",null,"\u6211\u4eec Java \u5e8f\u5217\u5316\u534f\u8bae\u7684\u5b9e\u73b0\u8fc7\u7a0b\u4e2d\uff0c\u589e\u52a0\u4e86\u548c SerialDumper \u4e00\u6837\u7684\u529f\u80fd\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(73118).Z})),(0,l.kt)("p",null,"\u719f\u6089 Java \u53cd\u5e8f\u5217\u5316\u7684\u540c\u5b66\u4e5f\u53ef\u80fd\u90fd\u5bf9 SerialDumper \u975e\u5e38\u719f\u6089\uff0c\u901a\u5e38\uff0c\u6211\u4eec\u80fd\u76f4\u63a5\u67e5\u770b\u4e00\u4e2a ACED \u4e8c\u8fdb\u5236\u6d41\u7684\u5de5\u5177\u5e76\u4e0d\u591a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"SerialDumper \u662f Java \u53cd\u5e8f\u5217\u5316\u6f0f\u6d1e\u5927\u70ed\u7684\u65f6\u5019 toptensoftware \u5f00\u6e90\u7684\u4e00\u6b3e\u5e8f\u5217\u5316\u5206\u6790\u5de5\u5177\u3002")),(0,l.kt)("h3",{id:"\u590d\u6742\u6848\u4f8b\uff08\u4e00\uff09\uff1a\u53ef\u8bfb\u5316cc1-\u5229\u7528\u94fe"},"\u590d\u6742\u6848\u4f8b\uff08\u4e00\uff09\uff1a\u201c\u53ef\u8bfb\u5316\u201dCC1 \u5229\u7528\u94fe"),(0,l.kt)("p",null,"\u5f53\u7136\uff0c\u5982\u679c\u4ec5\u4ec5\u53ea\u80fd\u5e8f\u5217\u5316\u4e00\u4e2a TC_STRING \u5176\u5b9e\u662f\u5f88\u9e21\u808b\u7684\u3002\u6211\u4eec\u5c1d\u8bd5\u4e00\u4e9b\u66f4\u590d\u6742\u7684\u5e8f\u5217\u5316\u6d41\u3002"),(0,l.kt)("p",null,"\u7b14\u8005\u4f7f\u7528 "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Bash"},'java -jar ysoserial.jar CommenCollections1 "YAKITEXT" > cc1.ser && yak hex -f cc1.ser\n')),(0,l.kt)("p",null,"\u5f53\u7136 yak hex \u547d\u4ee4\u662f yak \u5f15\u64ce\u81ea\u5e26\u7684\u5c0f\u5de5\u5177\uff0c\u53ef\u4ee5\u628a\u4e00\u4e2a\u6587\u4ef6\u4ee5\u5341\u516d\u8fdb\u5236\u7684\u5f62\u5f0f\u6253\u5370\u51fa\u6765\u3002\u4e0d\u5b89\u88c5 yak \u4e5f\u6709\u5f88\u591a\u79cd\u529e\u6cd5\u53ef\u4ee5\u505a\u5230\u3002"),(0,l.kt)("video",{src:"https://yaklang.oss-cn-beijing.aliyuncs.com/video/yakit-hex.mp4",loop:!0,playsInline:!0,controls:!0,autoPlay:!0,style:{width:890}}),(0,l.kt)("h3",{id:"\u590d\u6742\u6848\u4f8b\uff08\u4e8c\uff09\uff1acc1-\u5229\u7528\u94fe\u4e0e-json-\u4e92\u53ef\u9006"},"\u590d\u6742\u6848\u4f8b\uff08\u4e8c\uff09\uff1aCC1 \u5229\u7528\u94fe\u4e0e JSON \u4e92\u53ef\u9006"),(0,l.kt)("p",null,"\u5f53\u7136\uff0c\u6211\u4eec\u53d1\u73b0\uff0c\u4eff SerialDumper \u7684\u5b9e\u73b0\u5728\u5927\u591a\u6570\u65f6\u5019\uff0c\u867d\u7136\u53ef\u8bfb\u6027\u589e\u5f3a\u4e86\uff0c\u4f46\u662f\u5e76\u4e0d\u53ef\u9006\uff0c\u6211\u4eec\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\uff0c\u5b9e\u73b0\u4e86 ACED \u53cd\u5e8f\u5217\u5316\u6d41\u4e0e JSON \u7684\u4e92\u8f6c\u3002"),(0,l.kt)("p",null,"\u867d\u7136\u5728 \u201c\u4ece\u4e00\u7247\u843d\u53f6\u5f00\u59cb\u201d \u4e2d\uff0c\u6211\u4eec\u5df2\u7ecf\u53d1\u73b0\u4e86\u8fd9\u4e2a\u7279\u6027\uff0c\u4f46\u662f\u8fd8\u4e0d\u591f\u590d\u6742\uff0c\u5b9e\u6218 ysoserial \u7684\u6848\u4f8b\u7684\u5c55\u793a\u66f4\u6709\u90a3\u5473\u513f\u3002"),(0,l.kt)("video",{src:"https://yaklang.oss-cn-beijing.aliyuncs.com/video/yakit-ysoserial.mp4",loop:!0,playsInline:!0,controls:!0,autoPlay:!0,style:{width:890}}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u989d\u5916\u8bf4\u660e\uff1a\u867d\u7136\u5927\u591a\u6570\u5927\u5bb6\u770b\u5230\u7684\u53cd\u5e8f\u5217\u5316\u540e\u7684\u5bf9\u8c61\u90fd\u662f TC_XXX \u5f00\u5934\u7684\u5bf9\u8c61\uff0c\u4f46\u662f\u5076\u5c14\u4f1a\u51fa\u73b0 X_CLASSDATA \u8fd9\u7c7b\n\u2018X\u2019 \u5f00\u5934\u7684\u5bf9\u8c61\u540d\u79f0\uff0c\u8fd9\u4e9b\u5e76\u4e0d\u662f Java \u4e2d\u7684\uff0c\u800c\u662f yaklang.io \u4e3a\u4e86\u65b9\u4fbf\u8ba9\u5176\u5bf9\u8c61\u66f4\u5bb9\u6613\u53ef\u9006\u4e92\u8f6c\u8ba4\u4e3a\u8fdb\u884c\u4e86\u7ed3\u6784\u5206\n\u5272\u3002")),(0,l.kt)("h2",{id:"\u7ed3\u8bed\u4e0e\u610f\u5916"},"\u7ed3\u8bed\u4e0e\u610f\u5916"),(0,l.kt)("p",null,"\u201c\u6700\u540e\u51e0\u5757\u62fc\u56fe\u201d \u5176\u5b9e\u8bf4\u7684\u662f\u4f5c\u4e3a\u4e00\u4e2a\u5e38\u5e74\u548c\u6f0f\u6d1e\u626b\u63cf\u7b97\u6cd5\u4e0e\u626b\u63cf\u88c5\u7f6e\u6597\u4e89\u7684\u4ee3\u7801\u5d3d\uff0c\u5c1d\u8bd5\u82b1\u4e00\u70b9\u65f6\u95f4\u6765\u505a\u201c\u6700\u540e\u4e00\u82f1\u91cc\u201d\u7684\u4e8b\u60c5\u3002\u5176\u5b9e\u8fd9\u4e2a\u601d\u8def\u548c\u64cd\u4f5c\u5e76\u4e0d\u662f\u72ec\u4e00\u65e0\u4e8c\u7684\uff0c\u4e16\u754c\u4e0a\u5e76\u6ca1\u6709\u90a3\u4e48\u591a \u201c\u72ec\u4e00\u65e0\u4e8c\u201d \u7684\u4e1c\u897f\u53ef\u4ee5\u7ed9\u5927\u5bb6\u6765\u641e\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728\u5b8c\u6210\u8fd9\u4e2a\u6a21\u5757\u7684\u65f6\u5019\uff0c\u6211\u548c @phith0n P \u725b\u63d0\u8d77\u8fd9\u4e2a\u4e8b\u513f\uff0c\u4ed6\uff1a\u201c\u5367\u69fd\uff1f\u6211\u4e5f\u5199\u4e86\u4e00\u4e2a\u8fd9\u73a9\u610f\u201d\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u55ef...  "),(0,l.kt)("p",{parentName:"blockquote"},"\u679c\u7136\u5728\u6ca1\u6709\u4efb\u4f55\u9884\u5146\u7684\u60c5\u51b5\u4e0b\u548c\u5927\u5bb6\u649e\u8f66\u4e86\u3002")),(0,l.kt)("p",null,"\u5f53\u7136\uff0c\u5bf9 P \u5e08\u5085\u6765\u8bf4\uff0c\u8fd9\u4e2a\u9879\u76ee\u8fd8\u4e0d\u591f\u6df1\u5165\uff0c\u6bd4\u5982\uff0cJava \u5b57\u8282\u7801\u672c\u8d28\u4e0a\u4e5f\u53ef\u4ee5\u53d8\u6210\u8fd9\u6837\u7684\u5f62\u5f0f\uff0c\u8fd9\u4e00\u5757\u56e0\u4e3a\u5404\u79cd\u539f\u56e0\uff0c\u8fd8\u6ca1\u6765\u5f97\u53ca\u5b9e\u73b0\u5b8c\u6bd5\uff0c\u4e5f\u7b97\u662f\u9057\u61be\uff1b\u5728\u540e\u7eed\u7684\u9879\u76ee\u4e2d\uff0c\u6211\u4eec\u56e2\u961f\u4e5f\u4f1a\u8fdb\u884c Java \u5b57\u8282\u7801\u7684\u751f\u6210\u7684\u5de5\u4f5c\u3002"),(0,l.kt)("p",null,"\u4f46\u662f\u5bf9\u4e8e yaklang.io \u6765\u8bf4\uff0c\u8fd9\u4e2a\u9879\u76ee\u5e76\u4e0d\u662f\u7ed3\u675f\uff0c\u6211\u4eec\u57fa\u4e8e\u8fd9\u4e2a\u9879\u76ee\u53ef\u4ee5\u505a\u975e\u5e38\u4f18\u79c0\u7684\u6269\u5c55"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u66f4\u5b89\u5168\uff0c\u5e73\u53f0\u65e0\u5173\u7684 ysoserial payload generator \u7684\u5b9e\u73b0"),(0,l.kt)("li",{parentName:"ol"},"\u66f4\u5b89\u5168\u7684 RMI Exploit")),(0,l.kt)("p",null,"\u56de\u5230\u9879\u76ee\u521a\u5f00\u59cb\u548c\u5927\u5bb6\u8bb2\u7684\uff0c\u6211\u4eec\u8981\u505a \u201c\u5b89\u5168\u80fd\u529b\u57fa\u5ea7\u201d\uff0c\u62fc\u56fe\u5f53\u7136\u8981\u62fc\u5b8c\u3002"),(0,l.kt)("p",null,"\u5f53\u7136\uff0cJava \u5e8f\u5217\u5316\u6d41\u5206\u6790\u4e5f\u53ea\u662f\u4e00\u90e8\u5206\uff0cyak \u8bed\u8a00\u4e5f\u5c06\u4f1a\u5f00\u653e java \u5404\u79cd\u5e8f\u5217\u5316\u6d41\u5904\u7406\u548c\u5206\u6790\u7684\u63a5\u53e3\uff0c\u65b9\u4fbf\u5927\u5bb6\u968f\u65f6\u4f7f\u7528\u4e0e\u96c6\u6210\u3002"),(0,l.kt)("h3",{id:"version-note"},"Version Note:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Yakit \u7248\u672c >= Yakit 1.0.11-sp6 "),(0,l.kt)("li",{parentName:"ol"},"yak \u6838\u5fc3\u5f15\u64ce >= 1.0.11-sp9")),(0,l.kt)("p",null,"\u5927\u5bb6\u5728\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 Yakit \u548c yak \u6838\u5fc3\u5f15\u64ce\u7684\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528\u672c\u6587\u5f55\u5c4f\u548c\u622a\u5c4f\u4e2d\u7684 Java \u5e8f\u5217\u5316\u6d41\u5206\u6790\u5de5\u5177\uff08Codec => Java\uff09\u3002"),(0,l.kt)("h3",{id:"reference"},"Reference"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"SerialDumper (hxxps://github","[dot]","com/toptensoftware/serialdump)\nJava\u5e8f\u5217\u5316\u534f\u8bae ",(0,l.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/7/docs/platform/serialization/spec/protocol.html"},"https://docs.oracle.com/javase/7/docs/platform/serialization/spec/protocol.html"))))}p.isMDXComponent=!0},80173:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n=t.p+"assets/images/breaking-TC_STRING-7ef8aad36cefee2e4a168e1e36f83078.png"},70798:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n=t.p+"assets/images/breaking-java-hex-2c58f6efbd9e315d5cbbbe8c06fbae42.png"},14539:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n=t.p+"assets/images/breaking-java-reduction-53b26358cd3eb0a8fb83908935dc7c71.png"},73118:(e,a,t)=>{"use strict";t.d(a,{Z:()=>n});const n=t.p+"assets/images/breaking-java-serial-dumper-07146321738b07acf6e51eb46894d97f.png"}}]);