"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[7079],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>m});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),y=s(a),f=r,m=y["".concat(p,".").concat(f)]||y[f]||g[f]||i;return a?t.createElement(m,l(l({ref:n},c),{},{components:a})):t.createElement(m,l({ref:n},c))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=f;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[y]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"},33039:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var t=a(58168),r=(a(96540),a(15680));const i={sidebar_position:15},l="15. \u5b57\u5178(map)\u7c7b\u578b\uff1a\u4f7f\u7528\u4e0e\u5185\u7f6e\u51fd\u6570",o={unversionedId:"yak-basic/map-ops",id:"yak-basic/map-ops",isDocsHomePage:!1,title:"15. \u5b57\u5178(map)\u7c7b\u578b\uff1a\u4f7f\u7528\u4e0e\u5185\u7f6e\u51fd\u6570",description:"\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u5982\u4e0b\uff0c\u8fd9\u4e9b\u64cd\u4f5c\u548c\u6211\u4eec\u4f7f\u7528 Golang \u975e\u5e38\u7c7b\u4f3c\uff1a",source:"@site/docs/yak-basic/15-map-ops.mdx",sourceDirName:"yak-basic",slug:"/yak-basic/map-ops",permalink:"/docs/yak-basic/map-ops",editUrl:"https://github.com/yaklang/docs/yak-basic/15-map-ops.mdx",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"14. \u5b57\u5178(map)\u7c7b\u578b\uff1a\u58f0\u660e\u4e0e\u521b\u5efa",permalink:"/docs/yak-basic/map-def"},next:{title:"16. \u901a\u9053\u7c7b\u578b\uff1achan \u7c7b\u578b",permalink:"/docs/yak-basic/channel"}},p=[{value:"\u9644\u5f55\uff1a\u5b57\u5178\u5185\u7f6e\u65b9\u6cd5",id:"\u9644\u5f55\u5b57\u5178\u5185\u7f6e\u65b9\u6cd5",children:[]}],s={toc:p},c="wrapper";function y(e){let{components:n,...a}=e;return(0,r.yg)(c,(0,t.A)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"15-\u5b57\u5178map\u7c7b\u578b\u4f7f\u7528\u4e0e\u5185\u7f6e\u51fd\u6570"},"15. \u5b57\u5178(map)\u7c7b\u578b\uff1a\u4f7f\u7528\u4e0e\u5185\u7f6e\u51fd\u6570"),(0,r.yg)("p",null,"\u4e00\u4e2a\u7b80\u5355\u7684\u4f8b\u5b50\u5982\u4e0b\uff0c\u8fd9\u4e9b\u64cd\u4f5c\u548c\u6211\u4eec\u4f7f\u7528 Golang \u975e\u5e38\u7c7b\u4f3c\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},'// \u521b\u5efamap\na = {"a": 234, "b": "sasdfasdf", "ccc": "13"}\n\n// \u83b7\u53d6\u957f\u5ea6\nprintln("len(a): ", len(a)) // len(a):  3\n\n// \u83b7\u53d6\u952e\u503c\u65b9\u6cd51\nprintln(`a["b"]: `, a["b"]) // OUTPUT: a["b"]:  sasdfasdf\n\n// \u83b7\u53d6\u952e\u503c\u65b9\u6cd52\nprintln(`a["b"]: `, a.b) // OUTPUT: a["b"]:  sasdfasdf\n\n// \u83b7\u53d6\u952e\u503c\u65b9\u6cd53 $ \u95f4\u63a5\u8bbf\u95ee\nv = "b"\nprintln(`a.$v: `, a.$v) // OUTPUT: a.$v:  sasdfasdf\n\n// \u83b7\u53d6\u952e\u503c\u65b9\u6cd53(\u4e0d\u5b58\u5728\u65f6\u83b7\u53d6\u9ed8\u8ba4\u503c)\nf = "f" in a ? a["f"] : "fffff" // f = "fffff"\n\n// \u83b7\u53d6\u952e\u503c\u65b9\u6cd54(\u4e0d\u5b58\u5728\u65f6\u83b7\u53d6\u9ed8\u8ba4\u503c)\n// get\u51fd\u6570 \u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3amap\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u952e\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570\u4e3a\u53d6\u4e0d\u5230\u952e\u503c\u65f6\u7684\u9ed8\u8ba4\u503c\ng = get(a, "g", "ggggg") // g = "ggggg"\n\n// \u62c6\u5305\uff0c\u89e3\u5305\na["e"], a["f"], a["g"] = 4, 5, 6\na.e, a.f, a.g = 4, 5, 6\n\n// \u5220\u9664\u952e\u503c\n// delete\u51fd\u6570 \u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3amap\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u8981\u5220\u9664\u7684\u952e\ndelete(a, "b")\nprintln(`a: `, a) // map[a:234 ccc:13 e:4 f:5 g:6]\n\n// \u5224\u65ad\u5143\u7d20\u662f\u5426\u5b58\u5728\u65b9\u6cd51\nif a["b"] != nil { // \u6ce8\u610f\uff0c\u8fd9\u91cc\u4e0d\u80fd\u4f7f\u7528a.b\uff0c\u56e0\u4e3a\u5982\u679c\u4e0d\u5b58\u5728\u8be5\u952e\u5219\u4f1a\u76f4\u63a5panic\n       println("key b in a")\n}\n\n// \u5224\u65ad\u5143\u7d20\u662f\u5426\u5b58\u5728\u65b9\u6cd52\nif "b" in a {\n    println("key b in a")\n}\n\n// \u5185\u7f6e\u65b9\u6cd5\na = {"a":1,"b":2}\n\n// Keys\uff1a\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u6240\u6709\u952e\u7684\u5217\u8868\uff0c\u6ce8\u610f\u5176\u6bcf\u6b21\u8c03\u7528\u8fd4\u56de\u7684\u987a\u5e8f\u53ef\u80fd\u662f\u4e0d\u76f8\u540c\u7684\nv = a.Keys()\nv.Sort()\nassert v == ["a", "b"], v\n\n// Values\uff1a\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u6240\u6709\u952e\u503c\u7684\u5217\u8868\uff0c\u6ce8\u610f\u5176\u6bcf\u6b21\u8c03\u7528\u8fd4\u56de\u7684\u987a\u5e8f\u53ef\u80fd\u662f\u4e0d\u76f8\u540c\u7684\nv = a.Values()\nv.Sort()\nassert v == [1, 2], v\n\n// Entries / Items\uff1a\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u6240\u6709\u952e\u503c\u5bf9\u7684\u4e8c\u7ef4\u6570\u7ec4\uff0c\u5176\u4e2d\u6bcf\u4e2a\u5143\u7d20\u662f\u4e00\u4e2a\u957f\u5ea6\u4e3a2\u7684\u6570\u7ec4\n// \u5176\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e3a\u952e\uff0c\u7b2c\u4e8c\u4e2a\u5143\u7d20\u4e3a\u952e\u503c\nfor k, v in a.Items() {\n    assert k in ["a","b"]\n    assert v in [1,2]\n}\n\n// Foreach\uff1a\u4f7f\u7528\u4e00\u4e2a\u51fd\u6570\u6765\u904d\u5386map\u4e2d\u6240\u6709\u7684\u952e\u503c\na.ForEach(func(k,v){\n    assert k in ["a","b"]\n    assert v in [1,2]\n})\n\n// Set\uff1a\u8bbe\u7f6e\u952e\u503c, \u5982\u679ckey\u4e0d\u5b58\u5728\u5219\u6dfb\u52a0\na.Set("c",3)\nassert a["c"] == 3\n\n// Remove / Delete\uff1a\u5220\u9664\u5bf9\u5e94\u952e\u503c\na.Remove("a")\n\n// Has\uff1a\u5224\u65ad\u5bf9\u5e94\u952e\u662f\u5426\u5b58\u5728\u4e8e\u5b57\u5178\u4e2d\nassert a.Has("a") == false\nassert a.Has("c") == true\n')),(0,r.yg)("h2",{id:"\u9644\u5f55\u5b57\u5178\u5185\u7f6e\u65b9\u6cd5"},"\u9644\u5f55\uff1a\u5b57\u5178\u5185\u7f6e\u65b9\u6cd5"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u65b9\u6cd5\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Keys()"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u6240\u6709\u952e\u7684\u5217\u8868\uff0c\u6ce8\u610f\u5176\u6bcf\u6b21\u8c03\u7528\u8fd4\u56de\u7684\u987a\u5e8f\u53ef\u80fd\u662f\u4e0d\u76f8\u540c\u7684")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Values()"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u6240\u6709\u952e\u503c\u7684\u5217\u8868\uff0c\u6ce8\u610f\u5176\u6bcf\u6b21\u8c03\u7528\u8fd4\u56de\u7684\u987a\u5e8f\u53ef\u80fd\u662f\u4e0d\u76f8\u540c\u7684")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Entries() / Items()"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u6240\u6709\u952e\u503c\u5bf9\u7684\u4e8c\u7ef4\u6570\u7ec4\uff0c\u5176\u4e2d\u6bcf\u4e2a\u5143\u7d20\u662f\u4e00\u4e2a\u957f\u5ea6\u4e3a2\u7684\u6570\u7ec4,\u5176\u7b2c\u4e00\u4e2a\u5143\u7d20\u4e3a\u952e\uff0c\u7b2c\u4e8c\u4e2a\u5143\u7d20\u4e3a\u952e\u503c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"ForEach(func(key, value))"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u4f1a\u6839\u636e\u63d0\u4f9b\u7684\u51fd\u6570\u5bf9\u5b57\u5178\u4e2d\u7684\u6bcf\u4e00\u4e2a\u952e\u503c\u505a\u6620\u5c04\uff0c\u6ce8\u610f\u5176\u6bcf\u6b21\u6620\u5c04\u7684\u987a\u5e8f\u53ef\u80fd\u662f\u4e0d\u76f8\u540c\u7684")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Set(key, value)"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u8bbe\u7f6e\u952e\u503c\uff0c\u5982\u679ckey\u4e0d\u5b58\u5728\u5219\u6dfb\u52a0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Remove(key)"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u5220\u9664\u5bf9\u5e94\u952e\u503c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"Has(key)"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u5224\u65ad\u5bf9\u5e94\u952e\u662f\u5426\u5b58\u5728\u4e8e\u5b57\u5178\u4e2d")))))}y.isMDXComponent=!0}}]);