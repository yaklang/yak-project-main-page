(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[5806],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},o="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),o=p(a),k=l,m=o["".concat(c,".").concat(k)]||o[k]||u[k]||r;return a?n.createElement(m,s(s({ref:t},d),{},{components:a})):n.createElement(m,s({ref:t},d))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[o]="string"==typeof e?e:l,s[1]=i;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},43831:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>r,contentTitle:()=>s,metadata:()=>i,toc:()=>c,default:()=>d});var n=a(22122),l=(a(67294),a(3905));const r={sidebar_position:4},s="Java ldap\u534f\u8bae\u5206\u6790",i={unversionedId:"article/yakit-technical-study/Java-ldap",id:"article/yakit-technical-study/Java-ldap",isDocsHomePage:!1,title:"Java ldap\u534f\u8bae\u5206\u6790",description:"\u4ec0\u4e48\u662fldap",source:"@site/products/article/yakit-technical-study/Java-ldap.md",sourceDirName:"article/yakit-technical-study",slug:"/article/yakit-technical-study/Java-ldap",permalink:"/products/article/yakit-technical-study/Java-ldap",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"teamSidebar",previous:{title:"Weblogic t3\u534f\u8bae\u5206\u6790",permalink:"/products/article/yakit-technical-study/weblogic-t3"},next:{title:"FastJson \u542f\u53d1\u5f0f\u68c0\u6d4b",permalink:"/products/article/yakit-technical-study/fast-Json"}},c=[{value:"\u4ec0\u4e48\u662fldap",id:"\u4ec0\u4e48\u662fldap",children:[]},{value:"Java\u8fde\u63a5ldap\u6d41\u7a0b",id:"java\u8fde\u63a5ldap\u6d41\u7a0b",children:[]},{value:"\u641c\u7d22\u6570\u636e",id:"\u641c\u7d22\u6570\u636e",children:[]},{value:"\u89e3\u6790Ldap Response",id:"\u89e3\u6790ldap-response",children:[]},{value:"Java ldap\u5229\u7528\u65b9\u5f0f",id:"java-ldap\u5229\u7528\u65b9\u5f0f",children:[]}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"java-ldap\u534f\u8bae\u5206\u6790"},"Java ldap\u534f\u8bae\u5206\u6790"),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662fldap"},"\u4ec0\u4e48\u662fldap"),(0,l.kt)("p",null,"LDAP\u662fLightweight Directory Access Protocol\u7684\u7f29\u5199\uff0c\u987e\u540d\u601d\u4e49\uff0c\u5b83\u662f\u6307\u8f7b\u91cf\u7ea7\u76ee\u5f55\u8bbf\u95ee\u534f\u8bae\u3002\u8fd9\u4e2a\u534f\u8bae\u662f\u7528\u4e8e\u8bbf\u95ee\u76ee\u5f55\u670d\u52a1\u7684\u3002\u76ee\u5f55\u670d\u52a1\u548c\u6570\u636e\u5e93\u5f88\u7c7b\u4f3c\uff0c\u4f46\u53c8\u6709\u7740\u5f88\u5927\u7684\u4e0d\u540c\u4e4b\u5904\u3002\u6570\u636e\u5e93\u8bbe\u8ba1\u4e3a\u65b9\u4fbf\u8bfb\u5199\uff0c\u4f46\u76ee\u5f55\u670d\u52a1\u4e13\u95e8\u8fdb\u884c\u4e86\u8bfb\u4f18\u5316\u7684\u8bbe\u8ba1\uff0c\u56e0\u6b64\u4e0d\u592a\u9002\u5408\u4e8e\u7ecf\u5e38\u6709\u5199\u64cd\u4f5c\u7684\u6570\u636e\u5b58\u50a8\u3002"),(0,l.kt)("p",null,"\u76ee\u5f55\u670d\u52a1\u4f1a\u901a\u8fc7\u6811\u72b6\u7ed3\u6784\u5b58\u50a8\u6570\u636e\uff0c\u5982\u4e0b\u56fe\uff0c\u8fd9\u6837\u5b58\u50a8\u7684\u4f18\u70b9\u5c31\u662f\u67e5\u8be2\u6548\u7387\u9ad8"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(79066).Z})),(0,l.kt)("p",null,"\u4e0a\u56fe\u8fd9\u79cd\u6811\u72b6\u7ed3\u6784\uff0c\u79f0\u4e3a\u76ee\u5f55\u7ed3\u6784\u6811\uff08Directory Information Tree\uff09(DIT)\uff0c\u6811\u4e0a\u7684\u6bcf\u4e00\u4e2a\u8282\u70b9\uff08\u4e0d\u8bba\u662f\u53f6\u5b50\u8282\u70b9\u8fd8\u662f\u4e2d\u95f4\u7684\u8282\u70b9\uff09\uff0c\u90fd\u53ef\u4ee5\u79f0\u4e3a\u6761\u76ee(Entry)\u3002\u6bcf\u4e2a\u6761\u76ee\u90fd\u6709\u5f88\u591a\u5c5e\u6027(Attribute)\uff0c\u5982\u4e0b\u56fe"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,l.kt)("th",{parentName:"tr",align:null},"\u522b\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Domain Component"),(0,l.kt)("td",{parentName:"tr",align:null},"DC"),(0,l.kt)("td",{parentName:"tr",align:null},"\u57df\u7ec4\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Organizational Unit"),(0,l.kt)("td",{parentName:"tr",align:null},"OU"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7ec4\u7ec7\u5355\u4f4d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"COMMON NAME"),(0,l.kt)("td",{parentName:"tr",align:null},"CN"),(0,l.kt)("td",{parentName:"tr",align:null},"\u59d3\u540d")))),(0,l.kt)("p",null,"\u6bcf\u4e00\u4e2a\u6761\u76ee\u90fd\u6709\u4e00\u4e2a\u552f\u4e00\u7684\u6807\u8bc6\u540d\uff08distinguished Name \uff0cDN\uff09\u3002\u5982\u4e0a\u56fe\u7684cn=Tux\uff0c\u5b83\u7684DN\u5c31\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"cn=Tux,ou=devel,dc=example,dc=com"),"\uff0cDN\u7531\u591a\u4e2aRND(Relative Distinguished Name)\u901a\u8fc7\u9017\u53f7\u5206\u5272\uff0c\u5982",(0,l.kt)("inlineCode",{parentName:"p"},"cn=Tux"),"\u662fRND\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"ou=devel")," \u4e5f\u662f\u4e00\u4e2aRND\u3002"),(0,l.kt)("p",null,"\u5bf9\u8c61\u7c7b\uff08ObjectClass\uff09\u662f\u5c5e\u6027\u7684\u96c6\u5408\uff0c\u5982\u56fe"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(65849).Z})),(0,l.kt)("p",null,"\u5e38\u89c1\u7684dns\u670d\u52a1\uff0cwindows\u6ce8\u518c\u8868\u7b49\u90fd\u662f\u76ee\u5f55\u670d\u52a1"),(0,l.kt)("h2",{id:"java\u8fde\u63a5ldap\u6d41\u7a0b"},"Java\u8fde\u63a5ldap\u6d41\u7a0b"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(17060).Z})),(0,l.kt)("p",null,"\u901a\u8fc7\u547d\u540d\u670d\u52a1\uff0c\u67e5\u8be2ldap\uff0c\u83b7\u53d6\u5230LdapUrlContext\uff0c\u7136\u540e\u7ee7\u7eedlookup"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(54316).Z})),(0,l.kt)("p",null,"supper:GenericUrlContext"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(33688).Z})),(0,l.kt)("p",null,"\u5982\u56fe\uff0c\u9996\u5148\u6267\u884cgetRootURLContext"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(77504).Z})),(0,l.kt)("p",null,"\u7136\u540e\u5982\u56fe"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(44584).Z})),(0,l.kt)("p",null,"\u5728\u521b\u5efaLdapCtx\u65f6\u4f1a\u8ba4\u8bc1ldap\u670d\u52a1\uff0c\u5982\u679c\u5931\u8d25\uff0c\u5219\u76f4\u63a5\u629b\u5f02\u5e38\n\u901a\u8fc7ldapUrl\u89e3\u6790\u51faDN\uff0c\u7136\u540e\u5c06DN\u548cLdapCtx\u5c01\u88c5\u6210ResolveResult\u8fd4\u56de"),(0,l.kt)("p",null,"getResolvedObj\u83b7\u53d6\u5230\u7684\u662f\u4e0a\u4e00\u6b65\u7684LdapCtx\uff0cgetRemainingName\u83b7\u53d6\u5230DN"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(50503).Z})),(0,l.kt)("p",null,"p_lookup"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(24384).Z})),(0,l.kt)("p",null,"c_lookup\uff08LdapCtx\uff09\u83b7\u53d6\u5230\u5bf9\u8c61"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(36482).Z})),(0,l.kt)("p",null,"doSearchOnce\u5f00\u59cb\u641c\u7d22"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(76929).Z}),"\n",(0,l.kt)("img",{src:a(11884).Z}),"\n",(0,l.kt)("img",{src:a(95351).Z}),"\n",(0,l.kt)("img",{src:a(54034).Z})),(0,l.kt)("p",null,"\u641c\u7d22\u65f6\u7684filter\u662f(objectClass=*)"),(0,l.kt)("h2",{id:"\u641c\u7d22\u6570\u636e"},"\u641c\u7d22\u6570\u636e"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(59351).Z})),(0,l.kt)("p",null,"\u8eab\u4efd\u8ba4\u8bc1"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(95201).Z})),(0,l.kt)("p",null,"\u534f\u8bae\u4f7f\u7528LdapV3"),(0,l.kt)("p",null,"build the bind request\uff08\u8ba4\u8bc1\u8fc7\u7a0b\u5c31\u53eb\u505abind\uff0cbind request\u5c31\u662f\u8ba4\u8bc1\u8bf7\u6c42\uff09"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(94648).Z})),(0,l.kt)("p",null,"\u5982\u4e0a\u56feber\u662f\u5728\u6784\u9020reauthenticate\u7684\u6570\u636e\u5305\u3002\u53ef\u4ee5\u770b\u89c1\u6709ASN_xxx\uff0c\u56e0\u4e3aLDAP\u534f\u8bae\u4f7f\u7528ASN.1\u89c4\u8303\u8fdb\u884c\u63cf\u8ff0\uff0c\u4f7f\u7528ASN.1 BER\u7f16\u7801\u89c4\u8303\u8fdb\u884c\u4f20\u8f93"),(0,l.kt)("p",null,'\u8eab\u4efd\u8ba4\u8bc1\u65f6\u9ed8\u8ba4\u4f7f\u7528ldapv3\u534f\u8bae\uff0c\u5982\u679c\u670d\u52a1\u7aef\u8fd4\u56de\u72b6\u6001\u7801\u4e0d\u662f\u534f\u8bae\u9519\u8bef\uff0c\u5219\u7ee7\u7eed\u4f7f\u7528ldapv3\u3002\u8ba4\u8bc1\u673a\u5236\u9ed8\u8ba4\u4f7f\u7528\u7684\u662f"none"(\u9664\u6b64\u8fd8\u6709anontmous\u3001simple\u3001sasl)'),(0,l.kt)("h2",{id:"\u89e3\u6790ldap-response"},"\u89e3\u6790Ldap Response"),(0,l.kt)("p",null,"\u7ee7\u7eed\u770bc_lookup"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(68086).Z})),(0,l.kt)("p",null,"\u8fd9\u91cc\u6709\u4e24\u4e2a\u5173\u952e\u70b9\uff0c\u4e00\u662f\u62ff\u51facontrols\u6570\u636e\uff0c\u5b58\u5230respCtls(response control)\uff0c\u4e8c\u662f\uff0c\u5982\u679c\u6709javaClassName\u5c5e\u6027\uff0c\u5219\u8c03\u7528decodeObject\u65b9\u6cd5\uff0c\u89e3\u6790\u51fa\u5bf9\u8c61"),(0,l.kt)("p",null,"\u5982\u56fe"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(23831).Z})),(0,l.kt)("p",null,"\u652f\u6301\u4e09\u79cd\u60c5\u51b5"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"javaSerializedData"),(0,l.kt)("li",{parentName:"ol"},"javaRemoteLocation"),(0,l.kt)("li",{parentName:"ol"},"javaNamingReference")),(0,l.kt)("p",null,"\u7b2c\u4e09\u79cd\u60c5\u51b5\uff0c\u8c03\u7528decodeReference\u65b9\u6cd5\uff0c\u751f\u6210Reference\u5bf9\u8c61"),(0,l.kt)("p",null,"\u63a5\u7740\u5728c_lookup\u65b9\u6cd5\u4e2d\u8c03\u7528DirectoryManager.getObjectInstance\uff0c\u89e3\u6790Reference\u5bf9\u8c61\uff0c\uff0c\u89e3\u6790\u65f6\u4f1a\u5148\u4ece\u672c\u5730\u52a0\u8f7d\uff0c\u5982\u679c\u4e3anull\uff0c\u518d\u901a\u8fc7codebase\u7684\u5730\u5740\u53bb\u52a0\u8f7d\uff08\u9700\u8981com.sun.jndi.ldap.object.trustURLCodebase\u7684\u503c\u4e3atrue\uff09\uff0c\u5bfc\u81f4\u4efb\u610f\u7c7b\u52a0\u8f7d"),(0,l.kt)("p",null,"\u518d\u770b\u7b2c\u4e00\u79cd\u60c5\u51b5\uff0c\u901a\u8fc7helper.getURLClassLoader\u83b7\u53d6ClassLoader\u4e5f\u9700\u8981com.sun.jndi.ldap.object.trustURLCodebase\u7684\u503c\u4e3atrue\uff0c\u5982\u56fe"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(9270).Z})),(0,l.kt)("p",null,"\u5f53\u6ca1\u6709\u8bbe\u7f6eurl\u6216trustURLCodebase\u4e3afalse\u65f6\u4f1a\u8fd4\u56de\u7236\u7c7b\u52a0\u8f7d\u5668(AppClassLoader)\uff0c\u7136\u540e\u518d\u7528\u8fd9\u4e2a\u52a0\u8f7d\u5668\uff0c\u53cd\u5e8f\u5217\u5316javaSerializedData\u4e2d\u7684\u6570\u636e\uff0c\u8fd9\u91cc\u53ef\u4ee5\u4f5c\u4e3a\u53cd\u5e8f\u5217\u5316\u5229\u7528\uff0c\u6765\u7ed5\u8fc7trstURLCodebase\u7684\u9650\u5236"),(0,l.kt)("p",null,"\u518d\u770b\u7b2c\u4e8c\u79cd\u60c5\u51b5javaRemoteLocation\u53ef\u4ee5\u91cd\u65b0\u6307\u5b9a\u4e00\u4e2aurl\uff0c\u53ef\u4ee5\u662fldap\u3001rmi\u3001iiop\u7b49\u534f\u8bae\uff0c\u52a0\u8f7d\u8d44\u6e90\uff0c\u652f\u6301\u7684\u5168\u90e8\u534f\u8bae\u5982\u56fe\uff08\u4f3c\u4e4eiiop\u534f\u8bae\u53ef\u4ee5\u53cd\u5e8f\u5217\u5316\uff09"),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{src:"/img/products/yakit/java-javaRemoteLocation.png"})),(0,l.kt)("h2",{id:"java-ldap\u5229\u7528\u65b9\u5f0f"},"Java ldap\u5229\u7528\u65b9\u5f0f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Reference\u5bf9\u8c61\uff0c\u9700\u8981trustURLCodebase"),(0,l.kt)("li",{parentName:"ol"},"\u8bbe\u7f6ejavaSerializedData\u5c5e\u6027\uff0c\u53ef\u4ee5\u53cd\u5e8f\u5217\u5316"),(0,l.kt)("li",{parentName:"ol"},"\u4f3c\u4e4eiiop\u534f\u8bae\u4e5f\u53ef\u4ee5\u53cd\u5e8f\u5217\u5316\uff08\u4e0d\u786e\u5b9a\uff09")))}d.isMDXComponent=!0},9270:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/java-ClassLoader-dfde83dd681cc9fd2bda5ed17caa7628.png"},94648:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/java-bind-request-5887acda7f53ee17cd8ba7da744ed449.png"},68086:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/java-c_lookup-1-6dcb0265f804857f27a8d6369e33670b.png"},36482:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/java-c_lookup-8f8f887e0f73cfe7fc71438f175e3f9e.png"},65849:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/java-class-aggregate-078bcf757d617a4a68dd5defeabeb50c.png"},23831:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/java-decodeObject-257c9d193cfa1c1bb01546566b0acbe6.png"},11884:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/java-doSearchOnce-1-4415d3057667069cf96341e0bfe943ca.png"},95351:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/java-doSearchOnce-2-80c98e04d9db59a4b7a482e9d7b15785.png"},54034:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/java-doSearchOnce-3-8ab805c52c99d53bf49dbcd765c4924a.png"},76929:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/java-doSearchOnce-12604ec21e8475eb82eb58e3e0a2ae55.png"},50503:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/java-getRemainingName-69ad8a727461aa340d852fd8ab368d47.png"},95201:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/java-identity-authentication-8ced708d61ea820bd9d5ce5bdc215f1b.png"},79066:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/java-ldap-f275aa24aa3b628a4128942e7bf262f4.png"},77504:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/java-link-idap-getRootURLContext-1e2e6c4b1c84cf56ef16583d3a25486c.png"},54316:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/java-link-idap-lookup-398fd90f1f187bc8c599f69a5585c373.png"},44584:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/java-link-idap-result-77d79d3a6558ff1a5fcfb65c2e46be87.png"},33688:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/java-link-idap-supper-316cc4c41c0b4dc8ae5de7000a2ffb6e.png"},17060:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/java-link-idap-ef0c28286c0e52df5eed3a6cfe0f1f32.png"},24384:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/java-p_lookup-dadc11b496a1a536bd042a2f3d1836b6.png"},59351:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/java-search-data-23c29a3a58bada40332083f168371355.png"}}]);