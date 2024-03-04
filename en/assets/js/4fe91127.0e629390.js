"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[3208],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>f});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function y(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var g=r.createContext({}),p=function(e){var t=r.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(g.Provider,{value:t},e.children)},o="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,g=e.parentName,m=y(e,["components","mdxType","originalType","parentName"]),o=p(a),s=n,f=o["".concat(g,".").concat(s)]||o[s]||d[s]||l;return a?r.createElement(f,i(i({ref:t},m),{},{components:a})):r.createElement(f,i({ref:t},m))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=s;var y={};for(var g in t)hasOwnProperty.call(t,g)&&(y[g]=t[g]);y.originalType=e,y[o]="string"==typeof e?e:n,i[1]=y;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},91278:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>y,toc:()=>g});var r=a(58168),n=(a(96540),a(15680));const l={},i="yaml",y={unversionedId:"api/yaml",id:"api/yaml",isDocsHomePage:!1,title:"yaml",description:"|\u6210\u5458\u51fd\u6570|\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd|",source:"@site/docs/api/yaml.md",sourceDirName:"api",slug:"/api/yaml",permalink:"/en/docs/api/yaml",editUrl:"https://github.com/yaklang/docs/api/yaml.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"yakit",permalink:"/en/docs/api/yakit"},next:{title:"yso",permalink:"/en/docs/api/yso"}},g=[{value:"\u51fd\u6570\u5b9a\u4e49",id:"\u51fd\u6570\u5b9a\u4e49",children:[{value:"Marshal",id:"marshal",children:[]},{value:"Unmarshal",id:"unmarshal",children:[]},{value:"UnmarshalStrict",id:"unmarshalstrict",children:[]}]}],p={toc:g},m="wrapper";function o(e){let{components:t,...a}=e;return(0,n.yg)(m,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"yaml"},"yaml"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u6210\u5458\u51fd\u6570"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u51fd\u6570\u63cf\u8ff0/\u4ecb\u7ecd"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#marshal"},"yaml.Marshal")),(0,n.yg)("td",{parentName:"tr",align:"left"},"Marshal serializes the value provided into a YAML document. The structure of the generated document will reflect the structure of the value itself. Ma...")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#unmarshal"},"yaml.Unmarshal")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"#unmarshalstrict"},"yaml.UnmarshalStrict")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h2",{id:"\u51fd\u6570\u5b9a\u4e49"},"\u51fd\u6570\u5b9a\u4e49"),(0,n.yg)("h3",{id:"marshal"},"Marshal"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("p",null,"Marshal serializes the value provided into a YAML document. The structure\nof the generated document will reflect the structure of the value itself.\nMaps and pointers (to struct, string, int, etc) are accepted as the in value."),(0,n.yg)("p",null,'Struct fields are only marshalled if they are exported (have an upper case\nfirst letter), and are marshalled using the field name lowercased as the\ndefault key. Custom keys may be defined via the "yaml" name in the field\ntag: the content preceding the first comma is used as the key, and the\nfollowing comma-separated options are used to tweak the marshalling process.\nConflicting names result in a runtime error.'),(0,n.yg)("p",null,"The field tag format accepted is:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'`(...) yaml:"[&lt;key&gt;][,&lt;flag1&gt;[,&lt;flag2&gt;]]" (...)`\n')),(0,n.yg)("p",null,"The following flags are currently supported:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"omitempty    Only include the field if it's not set to the zero\n             value for the type or to empty slices or maps.\n             Zero valued structs will be omitted if all their public\n             fields are zero, unless they implement an IsZero\n             method (see the IsZeroer interface type), in which\n             case the field will be excluded if IsZero returns true.\n\nflow         Marshal using a flow style (useful for structs,\n             sequences and maps).\n\ninline       Inline the field, which must be a struct or a map,\n             causing all of its fields or keys to be processed as if\n             they were part of the outer struct. For maps, keys must\n             not conflict with the yaml keys of other struct fields.\n")),(0,n.yg)("p",null,'In addition, if the key is "-", the field is ignored.'),(0,n.yg)("p",null,"For example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'type T struct {\n    F int `yaml:"a,omitempty"`\n    B int\n}\nyaml.Marshal(&T{B: 2}) // Returns "b: 2\\n"\nyaml.Marshal(&T{F: 1}} // Returns "a: 1\\nb: 0\\n"\n')),(0,n.yg)("h4",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"Marshal(in any) (out []byte, err error)")),(0,n.yg)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"in"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"any")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"out"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"[]byte")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"err"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"error")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"unmarshal"},"Unmarshal"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-1"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("h4",{id:"\u5b9a\u4e49-1"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"Unmarshal(b []byte) (any, error)")),(0,n.yg)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"b"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"[]byte")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"any")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r2"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"error")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h3",{id:"unmarshalstrict"},"UnmarshalStrict"),(0,n.yg)("h4",{id:"\u8be6\u7ec6\u63cf\u8ff0-2"},"\u8be6\u7ec6\u63cf\u8ff0"),(0,n.yg)("h4",{id:"\u5b9a\u4e49-2"},"\u5b9a\u4e49"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"UnmarshalStrict(b []byte) (any, error)")),(0,n.yg)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"b"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"[]byte")),(0,n.yg)("td",{parentName:"tr",align:"left"})))),(0,n.yg)("h4",{id:"\u8fd4\u56de\u503c-2"},"\u8fd4\u56de\u503c"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c(\u987a\u5e8f)"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u7c7b\u578b"),(0,n.yg)("th",{parentName:"tr",align:"left"},"\u8fd4\u56de\u503c\u89e3\u91ca"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r1"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"any")),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},"r2"),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"error")),(0,n.yg)("td",{parentName:"tr",align:"left"})))))}o.isMDXComponent=!0}}]);