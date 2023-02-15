(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[7514],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>c,kt:()=>k});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),g=o,k=d["".concat(i,".").concat(g)]||d[g]||u[g]||a;return t?r.createElement(k,s(s({ref:n},c),{},{components:t})):r.createElement(k,s({ref:n},c))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=g;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},56760:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>s,metadata:()=>l,toc:()=>i,default:()=>c});var r=t(22122),o=(t(67294),t(3905));const a={sidebar_position:30},s="\u6f0f\u6d1e\u68c0\u6d4b\uff1aDNSLog",l={unversionedId:"yakexamples/risk",id:"yakexamples/risk",isDocsHomePage:!1,title:"\u6f0f\u6d1e\u68c0\u6d4b\uff1aDNSLog",description:"\u65b0\u5efa\u4e00\u4e2a dnslog",source:"@site/docs/yakexamples/risk.md",sourceDirName:"yakexamples",slug:"/yakexamples/risk",permalink:"/docs/yakexamples/risk",editUrl:"https://github.com/yaklang/docs/yakexamples/risk.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"\u6267\u884c JavaScript \u4ee3\u7801 (otto styled)",permalink:"/docs/yakexamples/js-otto"},next:{title:"\u8bed\u6cd5\u6269\u5c55\uff1a\u5168\u5c40\u51fd\u6570\u8868",permalink:"/docs/api/global_buildin_ops"}},i=[{value:"\u65b0\u5efa\u4e00\u4e2a dnslog",id:"\u65b0\u5efa\u4e00\u4e2a-dnslog",children:[]},{value:"\u67e5\u8be2 dnslog \u63a5\u6536",id:"\u67e5\u8be2-dnslog-\u63a5\u6536",children:[]},{value:"\u5982\u4f55\u7f16\u5199\u53cd\u8fde\u670d\u52a1\u5668\u811a\u672c",id:"\u5982\u4f55\u7f16\u5199\u53cd\u8fde\u670d\u52a1\u5668\u811a\u672c",children:[]}],p={toc:i};function c(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6f0f\u6d1e\u68c0\u6d4b\uff1adnslog"},"\u6f0f\u6d1e\u68c0\u6d4b\uff1aDNSLog"),(0,o.kt)("h2",{id:"\u65b0\u5efa\u4e00\u4e2a-dnslog"},"\u65b0\u5efa\u4e00\u4e2a dnslog"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'#\u901a\u8fc7 risk \u4e2d\u7684 NewDNSLogDomain \u6765\u83b7\u53d6\u4e00\u4e2a\u4e8c\u7ea7\u57df\u540d\u548ctoken \nserver,token,err = risk.NewDNSLogDomain()\n\n#token \u5c31\u662f\u4e8c\u7ea7\u57df\u540d\u7684\u5b57\u7b26\u4e32\nprintln("dns server addr: ",server)\nprintln("dns server check token:", token)\n')),(0,o.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u6267\u884c\u7ed3\u679c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"dns server addr:  kdxpxbvuzf.dnstunnel.run\ndns server check token: kdxpxbvuzf\n")),(0,o.kt)("h2",{id:"\u67e5\u8be2-dnslog-\u63a5\u6536"},"\u67e5\u8be2 dnslog \u63a5\u6536"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'#\u8fd9\u91cc\u6211\u4f7f\u7528\u4e0a\u9762\u7684 dnstoken  kdxpxbvuzf\n#\u901a\u8fc7\u51fd\u6570 CheckDNSLogByToken \u4ee5\u53ca token \u6765\u67e5\u8be2 dnslog \u7684\u7ed3\u679c\n\ndump(risk.CheckDNSLogByToken("kdxpxbvuzf"))\n')),(0,o.kt)("p",null,"\u7ed3\u679c\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"([]interface {}) (len=2 cap=2) {\n ([]*tpb.DNSLogEvent) <nil>,\n (interface {}) <nil>\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'#\u6211\u8fd9\u8fb9\u901a\u8fc7 ping \u6765\u89e6\u53d1 dns \u8bf7\u6c42  ping -c 1 kdxpxbvuzf.dnstunnel.run\n#\u7136\u540e\u5728\u8fdb\u884c\u67e5\u8be2\u83b7\u5f97\u7ed3\u679c\u5982\u4e0b\n([]interface {}) (len=2 cap=2) {\n ([]*tpb.DNSLogEvent) (len=2 cap=2) {\n  (*tpb.DNSLogEvent)(0xc00020c140)(Type:"A" Token:"kdxpxbvuzf" Domain:"kdxpxbvuzf.dnstunnel.run" RemoteAddr:"172.253.6.2:36684" RemoteIP:"172.253.6.2" RemotePort:36684 Raw:";; opcode: QUERY, status: NOERROR, id: 4197\\n;; flags: cd; QUERY: 1, ANSWER: 0, AUTHORITY: 0, ADDITIONAL: 1\\n\\n;; QUESTION SECTION:\\n;kdxpxbvuzf.dnstunnel.run.\\tIN\\t A\\n\\n;; ADDITIONAL SECTION:\\n\\n;; OPT PSEUDOSECTION:\\n; EDNS: version 0; flags: do; udp: 1400\\n; SUBNET: 111.198.29.0/24/0\\n" Timestamp:1646278342),\n  (*tpb.DNSLogEvent)(0xc00020c1e0)(Type:"A" Token:"kdxpxbvuzf" Domain:"kdxpxbvuzf.dnstunnel.run" RemoteAddr:"173.194.171.4:54616" RemoteIP:"173.194.171.4" RemotePort:54616 Raw:";; opcode: QUERY, status: NOERROR, id: 4934\\n;; flags: cd; QUERY: 1, ANSWER: 0, AUTHORITY: 0, ADDITIONAL: 1\\n\\n;; QUESTION SECTION:\\n;kdxpxbvuzf.dnstunnel.run.\\tIN\\t A\\n\\n;; ADDITIONAL SECTION:\\n\\n;; OPT PSEUDOSECTION:\\n; EDNS: version 0; flags: do; udp: 1400\\n; SUBNET: 111.198.29.0/24/0\\n" Timestamp:1646278343)\n },\n (interface {}) <nil>\n}\n\n#\u6210\u529f\u83b7\u53d6\u5230\u53cd\u8fde\u4fe1\u606f\n')),(0,o.kt)("h2",{id:"\u5982\u4f55\u7f16\u5199\u53cd\u8fde\u670d\u52a1\u5668\u811a\u672c"},"\u5982\u4f55\u7f16\u5199\u53cd\u8fde\u670d\u52a1\u5668\u811a\u672c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"1\u3001vps \u4f7f\u7528 yak bridge --secret [your-pass] \u6765\u8fdb\u884c\u542f\u52a8 bridge\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img.png",src:t(32204).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'#\u901a\u8fc7\u73af\u5883\u53d8\u91cf\u6765\u8fdb\u884c\u914d\u7f6e yak \u811a\u672c\u94fe\u63a5 bridge\nYAK_BRIDGE_ADDR                = "YAK_BRIDGE_ADDR"\nYAK_BRIDGE_SECRET              = "YAK_BRIDGE_SECRET"\n\n#yak bridge --secret od686 \nos.Setenv(YAK_BRIDGE_SECRET/*type: string*/,"od686" /*type: string*/)\nos.Setenv(YAK_BRIDGE_ADDR, "123.57.24.217:64333"/*type: string*/)\n\n#\u901a\u8fc7 risk \u83b7\u53d6\u5230 token \u548cip\u7aef\u53e3\nlog.setLevel("info")\ntoken, hostPort, err := risk.NewRandomPortTrigger(risk.type("reverse-http"), risk.typeVerbose("RMI\u53cd\u8fde"), risk.title("test"))\nif err != nil {\n    log.info(err.Error())\n}\n    if token == "" {\n    log.info("\u672a\u914d\u7f6e Yak Bridge \u4f5c\u4e3a\u516c\u7f51\u6620\u5c04\uff0c\u65e0\u6cd5\u83b7\u53d6\u968f\u673a\u7aef\u53e3")\n}\n\nlog.info("host: %s", hostPort/*type ...any*/)\nlog.info("token: %s",token/*type ...any*/)\n')),(0,o.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"[INFO] 2022-03-03 16:32:19 +0800 [yaki-code-3541846741] host: 123.57.24.217:56579\n[INFO] 2022-03-03 16:32:19 +0800 [yaki-code-3541846741] token: qOeZvvgr\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'//\u901a\u8fc7risk.CheckRandomTriggerByToken \u51fd\u6570\u8fdb\u884c\u67e5\u8be2\u662f\u5426\u6709\u53cd\u8fde\ndump(risk.CheckRandomTriggerByToken("YcEhgllg"))\n')),(0,o.kt)("p",null,"\u8fd0\u884c\u7ed3\u679c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"([]interface {}) (len=2 cap=2) {\n (*tpb.RandomPortTriggerEvent)(<nil>),\n (*status.Error)(0xc0005ba0e8)(rpc error: code = Unknown desc = empty token port mapped)\n}\n")),(0,o.kt)("p",null,"\u624b\u52a8\u8bbf\u95ee ",(0,o.kt)("a",{parentName:"p",href:"http://123.57.24.217:56579/"},"http://123.57.24.217:56579/"),"\n",(0,o.kt)("img",{alt:"img.png",src:t(98723).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'//\u518d\u6b21\u6267\u884c dump(risk.CheckRandomTriggerByToken("YcEhgllg"))\n\u7ed3\u679c\u5982\u4e0b\n([]interface {}) (len=2 cap=2) {\n (*tpb.RandomPortTriggerEvent)(0xc0001b0380)(RemoteAddr:"111.198.29.182:57262" RemoteIP:"111.198.29.182" RemotePort:57262 LocalPort:56579 LocalPortCachedHistoryConnectionCount:5 TriggerTimestamp:1646297435 Timestamp:1646297464),\n (interface {}) <nil>\n}\n')))}c.isMDXComponent=!0},98723:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});const r=t.p+"assets/images/risk_access_http-d518d8b8cbbaf21a428016d111823fbe.png"},32204:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});const r=t.p+"assets/images/risk_start_bridge-7c3799fe9d4f21c8c20bfba821c5b67a.png"}}]);