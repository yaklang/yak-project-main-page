"use strict";(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[4752],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>m});var t=r(96540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(r),s=i,m=d["".concat(c,".").concat(s)]||d[s]||f[s]||o;return r?t.createElement(m,l(l({ref:n},u),{},{components:r})):t.createElement(m,l({ref:n},u))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=s;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[d]="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=r[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},24561:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=r(58168),i=(r(96540),r(15680));const o={sidebar_position:7},l="[tcp] TCP \u7f51\u7edc\u8fde\u63a5\u5e93",a={unversionedId:"buildinlibs/lib_tcp",id:"buildinlibs/lib_tcp",isDocsHomePage:!1,title:"[tcp] TCP \u7f51\u7edc\u8fde\u63a5\u5e93",description:"\u672c\u7f51\u7edc\u8fde\u63a5\u5e93\u7ecf\u8fc7\u9ad8\u5ea6\u7b80\u5316\uff0c\u5e76\u4e0d\u4f7f\u7528\u4f20\u7edf Socket \u63a5\u53e3\uff0c\u800c\u4f7f\u7528\u6838\u5fc3\u7684\u4e09\u4e2a\u51fd\u6570\u6765\u5b8c\u6210\u5e38\u89c1 TCP \u7684\u529f\u80fd",source:"@site/docs/buildinlibs/lib_tcp.md",sourceDirName:"buildinlibs",slug:"/buildinlibs/lib_tcp",permalink:"/docs/buildinlibs/lib_tcp",editUrl:"https://github.com/yaklang/docs/buildinlibs/lib_tcp.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"[os] \u64cd\u4f5c\u7cfb\u7edf\u5e93",permalink:"/docs/buildinlibs/lib_os"},next:{title:"[fuzz] \u6a21\u7cca\u6d4b\u8bd5\u5de5\u5177\u5e93",permalink:"/docs/buildinlibs/lib_fuzz"}},c=[{value:"\u4e00\u4e2a\u4f8b\u5b50\u770b\u900f TCP \u5e93\u7684\u4e09\u4e2a API",id:"\u4e00\u4e2a\u4f8b\u5b50\u770b\u900f-tcp-\u5e93\u7684\u4e09\u4e2a-api",children:[]},{value:"\u8be6\u7ec6 API \u4ecb\u7ecd",id:"\u8be6\u7ec6-api-\u4ecb\u7ecd",children:[{value:"TCP \u5ba2\u6237\u7aef\u53c2\u6570",id:"tcp-\u5ba2\u6237\u7aef\u53c2\u6570",children:[]},{value:"TCP \u670d\u52a1\u7aef\u53c2\u6570",id:"tcp-\u670d\u52a1\u7aef\u53c2\u6570",children:[]},{value:"\u7ed3\u6784\u5b9a\u4e49",id:"\u7ed3\u6784\u5b9a\u4e49",children:[]}]}],p={toc:c},u="wrapper";function d(e){let{components:n,...r}=e;return(0,i.yg)(u,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"tcp-tcp-\u7f51\u7edc\u8fde\u63a5\u5e93"},"[tcp]"," TCP \u7f51\u7edc\u8fde\u63a5\u5e93"),(0,i.yg)("p",null,"\u672c\u7f51\u7edc\u8fde\u63a5\u5e93\u7ecf\u8fc7\u9ad8\u5ea6\u7b80\u5316\uff0c\u5e76\u4e0d\u4f7f\u7528\u4f20\u7edf Socket \u63a5\u53e3\uff0c\u800c\u4f7f\u7528\u6838\u5fc3\u7684\u4e09\u4e2a\u51fd\u6570\u6765\u5b8c\u6210\u5e38\u89c1 TCP \u7684\u529f\u80fd"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"Connect")," \u4f5c\u4e3a TCP \u8fde\u63a5\u5ba2\u6237\u7aef\u53d1\u8d77\u8fde\u63a5"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"Serve")," \u5feb\u901f\u6784\u5efa\u4e00\u4e2a TCP \u670d\u52a1\u5668"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"Forward")," \u7aef\u53e3\u8f6c\u53d1\uff0c\u53ef\u4ee5\u628a\u4e00\u4e2a\u672c\u5730\u7aef\u53e3\u7684\u6d41\u91cf\u8f6c\u53d1\u5230\u8fdc\u7a0b\u7aef\u53e3\u4e0a")),(0,i.yg)("h2",{id:"\u4e00\u4e2a\u4f8b\u5b50\u770b\u900f-tcp-\u5e93\u7684\u4e09\u4e2a-api"},"\u4e00\u4e2a\u4f8b\u5b50\u770b\u900f TCP \u5e93\u7684\u4e09\u4e2a API"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'// \u8bbe\u7f6e\u65e5\u5fd7\u7684\u7ea7\u522b\uff0c\u65b9\u4fbf\u6211\u4eec\u770b\u5230 TCP \u5e93\u7684\u4e00\u4e9b\u4fe1\u606f\u8f93\u51fa\nloglevel("info")\n\n// \u542f\u52a8\u4e00\u4e2a TCP \u670d\u52a1\u5668\uff0c\u5728 Goroutine \u4e2d\u5f02\u6b65\u542f\u52a8\ngo fn{\n    tcp.Serve("127.0.0.1", 8085, tcp.serverCallback(func(conn) {\n        println("\u771f\u6b63\u7684 TCP \u670d\u52a1\u5668\u6536\u5230\u4e00\u4e2a\u8fde\u63a5\uff1a", conn.RemoteAddr())\n        bytes, err := conn.RecvLen(4)\n        if err != nil {\n            conn.Close()\n            return\n        }\n        println("\u6536\u5230\u8fde\u63a5\u7684\u524d 4 \u4e2a\u5b57\u7b26\u4e3a", string(bytes))\n        println("\u53d1\u9001\u4e00\u4e2a Hello World \u7ed9\u5ba2\u6237\u7aef")\n\n        conn.Send("\u4f60\u597d\uff0c\u4e16\u754c\uff01Hello World from 127.0.0.1:8085")\n        println("\u53d1\u9001\u6210\u529f\u4e86\uff01")\n        conn.Close()\n    }))\n}\n\n// \u542f\u52a8\u4e00\u4e2a TCP \u672c\u5730\u8f6c\u53d1\uff0c\u628a\u672c\u5730 9000 \u8f6c\u53d1\u5230 127.0.0.1:8085\ngo fn{\n    tcp.Forward(9000, "127.0.0.1", 8085)\n}\n\n// \u542f\u52a8\u4e00\u4e2a TCP \u8fde\u63a5\uff0c\u76f4\u63a5\u8bbf\u95ee\u672c\u5730 9000 \u7aef\u53e3\nconn, err := tcp.Connect("127.0.0.1", 9000)\ndie(err)\n\n// \u53d1\u9001\u4e00\u4e2a\u6d88\u606f\u7ed9 9000 \u7aef\u53e3\nconn.Send("abdasdf this message from client")\n\ndump(conn.RecvStringTimeout(1))\n// \u7b49\u5f853\u79d2\u89c2\u5bdf\u65e5\u5fd7\nsleep(3)\n')),(0,i.yg)("p",null,"\u4e0a\u9762\u7684\u811a\u672c\u5176\u5b9e\u975e\u5e38\u76f4\u89c2:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"\u6211\u4eec\u542f\u52a8\u4e86 TCP \u670d\u52a1\u5668"),(0,i.yg)("li",{parentName:"ol"},"\u628a TCP \u670d\u52a1\u5668\u7684\u7aef\u53e3\u505a\u4e86\u8f6c\u53d1\uff0c\u8f6c\u53d1\u5230 9000 \u7aef\u53e3\u4e0a\u4e86"),(0,i.yg)("li",{parentName:"ol"},"\u7136\u540e\u6211\u4eec\u8bbf\u95ee\u672c\u5730 9000 \u7aef\u53e3\uff0c\u53d1\u9001\u4e00\u6761\u6d88\u606f"),(0,i.yg)("li",{parentName:"ol"},"\u6211\u4eec\u4ece\u5ba2\u6237\u7aef\u6536\u5230\u4e86\uff0c\u670d\u52a1\u5668\u8fd4\u56de\u6765\u7684\u6d88\u606f")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},'[INFO] 2021-06-11 17:52:47 +0800 [default:tcp_serve.go:63] recv tcp connection from 127.0.0.1:58352 to 127.0.0.1:9000\n[INFO] 2021-06-11 17:52:47 +0800 [default:tcp_util.go:15] recv local connection from: 127.0.0.1:58352\n[INFO] 2021-06-11 17:52:47 +0800 [default:tcp_serve.go:63] recv tcp connection from 127.0.0.1:58353 to 127.0.0.1:8085\n[INFO] 2021-06-11 17:52:47 +0800 [default:tcp_util.go:23] create remote connection from: 127.0.0.1:8085\n\u771f\u6b63\u7684 TCP \u670d\u52a1\u5668\u6536\u5230\u4e00\u4e2a\u8fde\u63a5\uff1a 127.0.0.1:58353\n\u6536\u5230\u8fde\u63a5\u7684\u524d 4 \u4e2a\u5b57\u7b26\u4e3a abda\n\u53d1\u9001\u4e00\u4e2a Hello World \u7ed9\u5ba2\u6237\u7aef\n\u53d1\u9001\u6210\u529f\u4e86\uff01\n([]interface {}) (len=2 cap=2) {\n (string) (len=49) "\u4f60\u597d\uff0c\u4e16\u754c\uff01Hello World from 127.0.0.1:8085",\n (interface {}) <nil>\n}\n')),(0,i.yg)("h2",{id:"\u8be6\u7ec6-api-\u4ecb\u7ecd"},"\u8be6\u7ec6 API \u4ecb\u7ecd"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"fn tcp.Connect(host: string, port: int, params: ...clientParams): (*yaklib.tcpConnection, error)")," \u53d1\u8d77\u4e00\u4e2a TCP \u8fde\u63a5"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"fn tcp.Forward(localPort: int, remoteHost: string, remotePort: int): error")," \u8f6c\u53d1\u4e00\u4e2a TCP \u8fde\u63a5\uff08\u628a\u4e00\u4e2a\u8fdc\u7a0b\u8fde\u63a5\u6620\u5c04\u5230\u672c\u5730\uff09"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"fn tcp.Serve(var_1: interface {}, var_2: int, vars: ...yaklib.tcpServerConfigOpt): error")," \u542f\u52a8\u4e00\u4e2a TCP \u670d\u52a1\u5668")),(0,i.yg)("h3",{id:"tcp-\u5ba2\u6237\u7aef\u53c2\u6570"},"TCP \u5ba2\u6237\u7aef\u53c2\u6570"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"fn tcp.clientLocal(var_1: interface {}): yaklib.dialerOpt")," \u5ba2\u6237\u7aef\u53c2\u6570\uff0c\u8bbe\u7f6e\u672c\u5730\u5730\u5740"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"fn tcp.clientTimeout(var_1: float64): yaklib.dialerOpt"),"  \u5ba2\u6237\u7aef\u53c2\u6570\uff0c\u5f53\u6b21\u8fde\u63a5\u7684\u8d85\u65f6\u65f6\u95f4"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"fn tcp.clientTls(var_1: interface {}, var_2: interface {}, vars: ...interface {}): yaklib.tcpServerConfigOpt")," \u5f00\u542f TLS \u52a0\u5bc6\u7684 TCP \u8fde\u63a5")),(0,i.yg)("h3",{id:"tcp-\u670d\u52a1\u7aef\u53c2\u6570"},"TCP \u670d\u52a1\u7aef\u53c2\u6570"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"fn tcp.serverCallback(var_1: func(*yaklib.tcpConnection)): yaklib.tcpServerConfigOpt")," \u670d\u52a1\u7aef\u53c2\u6570\uff1a\u8bbe\u7f6e\u56de\u8c03\u51fd\u6570\uff0c\u5904\u7406\u670d\u52a1\u5668\u7aef\u6536\u5230\u7684 TCP \u8fde\u63a5"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"fn tcp.serverContext(var_1: context.Context): yaklib.tcpServerConfigOpt")," \u670d\u52a1\u5668\u7aef\u53c2\u6570\uff0c\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"fn tcp.serverTls(cert: interface {}, privateKey: interface {}, caCerts: ...interface {}): yaklib.tcpServerConfigOpt")," \u4e3a\u670d\u52a1\u5668\u8bbe\u7f6e TLS\uff0c\u8bbe\u7f6e\u4e00\u4e2a\u52a0\u5bc6\u7684 TLS")),(0,i.yg)("h3",{id:"\u7ed3\u6784\u5b9a\u4e49"},"\u7ed3\u6784\u5b9a\u4e49"),(0,i.yg)("h4",{id:"yaklibtcpconnection-\u51fd\u6570\u5b9a\u4e49"},(0,i.yg)("inlineCode",{parentName:"h4"},"*yaklib.tcpConnection")," \u51fd\u6570\u5b9a\u4e49"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-go"},"type palm/common/yak/yaklib.(tcpConnection) struct {\n  Fields(\u53ef\u7528\u5b57\u6bb5):\n      Conn: net.Conn\n  StructMethods(\u7ed3\u6784\u65b9\u6cd5/\u51fd\u6570):\n      // \u5173\u95ed\u7f51\u7edc\u8fde\u63a5\n      func Close() return(error)\n\n      // \u67e5\u770b\u672c\u5730\u5730\u5740\n      func LocalAddr() return(net.Addr)\n\n      // \u6807\u51c6 Read \u63a5\u53e3\n      func Read(v1: []uint8) return(int, error)\n\n      // \u8fdc\u7a0b\u5730\u5740\n      func RemoteAddr() return(net.Addr)\n\n      // \u8bbe\u7f6e\u8bfb\u5199 DDL\n      func SetDeadline(v1: time.Time) return(error)\n      func SetReadDeadline(v1: time.Time) return(error)\n      func SetWriteDeadline(v1: time.Time) return(error)\n\n      // \u6807\u51c6\u5199\u63a5\u53e3\n      func Write(v1: []uint8) return(int, error)\n  PtrStructMethods(\u6307\u9488\u7ed3\u6784\u65b9\u6cd5/\u51fd\u6570):\n      func Close() return(error)\n      func GetTimeout() return(time.Duration)\n      func LocalAddr() return(net.Addr)\n      func Read(v1: []uint8) return(int, error)\n\n      // \u63a5\u6536 bytes\uff0c\u4f1a\u963b\u585e\n      func Recv() return([]uint8, error)\n\n      // \u63a5\u6536\u56fa\u5b9a\u957f\u5ea6\u7684 bytes\n      func RecvLen(v1: int64) return([]uint8, error)\n\n      // \u63a5\u6536\u4e00\u4e2a\u5b57\u7b26\u4e32\n      func RecvString() return(string, error)\n\n      // \u63a5\u6536\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u5982\u679c\u8d85\u65f6\u5c31\u76f4\u63a5\u8fd4\u56de\n      func RecvStringTimeout(v1: float64) return(string, error)\n\n      // \u63a5\u6536\u4e00\u4e2a bytes\uff0c\u8d85\u65f6\u8fd4\u56de\n      func RecvTimeout(v1: float64) return([]uint8, error)\n\n      // \u8fdc\u7a0b\u5730\u5740\n      func RemoteAddr() return(net.Addr)\n\n      // \u53d1\u9001\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u4e0d\u540c\u7c7b\u578b\u4f1a\u6709\u4e0d\u540c\u64cd\u4f5c\uff0cjson\n      func Send(v1: interface {}) return(error)\n\n      // \u8bbe\u7f6e DDL\n      func SetDeadline(v1: time.Time) return(error)\n      func SetReadDeadline(v1: time.Time) return(error)\n      func SetWriteDeadline(v1: time.Time) return(error)\n\n      // \u6807\u51c6\u5199\n      func Write(v1: []uint8) return(int, error)\n      \n      // \u8bbe\u7f6e\u9ed8\u8ba4\u8d85\u65f6\n      func SetTimeout(v1: float64)\n\n}\n")))}d.isMDXComponent=!0}}]);