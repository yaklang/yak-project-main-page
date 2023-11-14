# poc

|成员函数|函数描述/介绍|
|:------|:--------|
| [poc.AppendHTTPPacketCookie](#appendhttppacketcookie) |AppendHTTPPacketCookie 是一个辅助函数，用于改变请求报文，添加Cookie请求头中的值 |
| [poc.AppendHTTPPacketFormEncoded](#appendhttppacketformencoded) |AppendHTTPPacketFormEncoded 是一个辅助函数，用于改变请求报文，添加请求体中的表单 |
| [poc.AppendHTTPPacketHeader](#appendhttppacketheader) |AppendHTTPPacketHeader 是一个辅助函数，用于改变请求报文，添加请求头 |
| [poc.AppendHTTPPacketPath](#appendhttppacketpath) |AppendHTTPPacketPath 是一个辅助函数，用于改变请求报文，在现有请求路径后添加请求路径 |
| [poc.AppendHTTPPacketPostParam](#appendhttppacketpostparam) |AppendHTTPPacketPostParam 是一个辅助函数，用于改变请求报文，添加POST请求参数 |
| [poc.AppendHTTPPacketQueryParam](#appendhttppacketqueryparam) |AppendHTTPPacketQueryParam 是一个辅助函数，用于改变请求报文，添加GET请求参数 |
| [poc.AppendHTTPPacketUploadFile](#appendhttppacketuploadfile) |AppendHTTPPacketUploadFile 是一个辅助函数，用于改变请求报文，添加请求体中的上传的文件，其中第一个参数为原始请求报文，第二个参数为表单名，第三个参数为文件名，第四个参数为文件内容，第五个参数是可选参数，为文件类型(Content-Type) |
| [poc.BasicRequest](#basicrequest) |BasicRequest 返回一个基本的 HTTP 请求，用于测试，它实际上返回一个b"GET / HTTP/1.1\r\nHost: example.com\r\n\r\n" |
| [poc.BuildRequest](#buildrequest) |BuildRequest 是一个用于辅助构建请求报文的工具函数，它第一个参数可以接收[]byte, string, http.Request结构体，接下来可以接收零个到多个请求选项，修改请求报文的选项将被作用，最后返回构建好的请求报文 |
| [poc.CurlToHTTPRequest](#curltohttprequest) |CurlToHTTPRequest 尝试将curl命令转换为HTTP请求报文，其返回值为bytes，即转换后的HTTP请求报文 |
| [poc.Delete](#delete) |Delete 向指定URL发送DELETE请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是URL字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等 关于结构体中的可用字段和方法可以使用desc函数进行查看 |
| [poc.DeleteHTTPPacketCookie](#deletehttppacketcookie) |DeleteHTTPPacketCookie 是一个辅助函数，用于改变请求报文，删除Cookie中的值 |
| [poc.DeleteHTTPPacketForm](#deletehttppacketform) |DeleteHTTPPacketForm 是一个辅助函数，用于改变请求报文，删除POST请求表单 |
| [poc.DeleteHTTPPacketHeader](#deletehttppacketheader) |DeleteHTTPPacketHeader 是一个辅助函数，用于改变请求报文，删除请求头 |
| [poc.DeleteHTTPPacketPostParam](#deletehttppacketpostparam) |DeleteHTTPPacketPostParam 是一个辅助函数，用于改变请求报文，删除POST请求参数 |
| [poc.DeleteHTTPPacketQueryParam](#deletehttppacketqueryparam) |DeleteHTTPPacketQueryParam 是一个辅助函数，用于改变请求报文，删除GET请求参数 |
| [poc.Do](#do) |关于结构体中的可用字段和方法可以使用desc函数进行查看 |
| [poc.FixHTTPPacketCRLF](#fixhttppacketcrlf) |FixHTTPPacketCRLF 修复一个HTTP报文的CRLF问题（正常的报文每行末尾为\r\n，但是某些报文可能是有\n），如果noFixLength为true，则不会修复Content-Length，否则会尝试修复Content-Length |
| [poc.FixHTTPRequest](#fixhttprequest) |FixHTTPRequest 尝试对传入的HTTP请求报文进行修复，并返回修复后的请求 |
| [poc.FixHTTPResponse](#fixhttpresponse) |FixHTTPResponse 尝试对传入的HTTP响应报文进行修复，并返回修复后的响应 |
| [poc.Get](#get) |Get 向指定URL发送GET请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是URL字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等 关于结构体中的可用字段和方法可以使用desc函数进行查看 |
| [poc.GetAllHTTPPacketPostParams](#getallhttppacketpostparams) |GetAllHTTPPacketPostParams 是一个辅助函数，用于获取请求报文中的所有POST请求参数，其返回值为map[string]string，其中键为参数名，值为参数值 |
| [poc.GetAllHTTPPacketQueryParams](#getallhttppacketqueryparams) |GetAllHTTPPacketQueryParams 是一个辅助函数，用于获取请求报文中的所有GET请求参数，其返回值为map[string]string，其中键为参数名，值为参数值 |
| [poc.GetHTTPPacketBody](#gethttppacketbody) |GetHTTPPacketBody 是一个辅助函数，用于获取请求报文中的请求体，其返回值为bytes |
| [poc.GetHTTPPacketContentType](#gethttppacketcontenttype) |GetHTTPPacketContentType 是一个辅助函数，用于获取请求报文中的Content-Type请求头，其返回值为string |
| [poc.GetHTTPPacketCookie](#gethttppacketcookie) |GetHTTPPacketCookie 是一个辅助函数，用于获取请求报文中Cookie值，其返回值为string |
| [poc.GetHTTPPacketCookieFirst](#gethttppacketcookiefirst) |GetHTTPPacketCookieFirst 是一个辅助函数，用于获取请求报文中Cookie值，其返回值为string |
| [poc.GetHTTPPacketCookieValues](#gethttppacketcookievalues) |GetHTTPPacketCookieValues 是一个辅助函数，用于获取请求报文中Cookie值，其返回值为[]string，这是因为Cookie可能存在多个相同键名的值 |
| [poc.GetHTTPPacketCookies](#gethttppacketcookies) |GetHTTPPacketCookies 是一个辅助函数，用于获取请求报文中所有Cookie值，其返回值为map[string]string |
| [poc.GetHTTPPacketCookiesFull](#gethttppacketcookiesfull) |GetHTTPPacketCookiesFull 是一个辅助函数，用于获取请求报文中所有Cookie值，其返回值为map[string][]string，这是因为Cookie可能存在多个相同键名的值 |
| [poc.GetHTTPPacketFirstLine](#gethttppacketfirstline) |GetHTTPPacketFirstLine 是一个辅助函数，用于获取 HTTP 报文中第一行的值，其返回值为string，string，string 在请求报文中，其三个返回值分别为：请求方法，请求URI，协议版本 在响应报文中，其三个返回值分别为：协议版本，状态码，状态码描述 |
| [poc.GetHTTPPacketHeader](#gethttppacketheader) |GetHTTPPacketHeaders 是一个辅助函数，用于获取请求报文中指定的请求头，其返回值为string |
| [poc.GetHTTPPacketHeaders](#gethttppacketheaders) |GetHTTPPacketHeaders 是一个辅助函数，用于获取请求报文中所有请求头，其返回值为map[string]string |
| [poc.GetHTTPPacketHeadersFull](#gethttppacketheadersfull) |GetHTTPPacketHeadersFull 是一个辅助函数，用于获取请求报文中所有请求头，其返回值为map[string][]string，这是因为请求头可能存在多个相同键名的值 |
| [poc.GetHTTPPacketPostParam](#gethttppacketpostparam) |GetHTTPPacketPostParam 是一个辅助函数，用于获取请求报文中指定的POST请求参数，其返回值为string |
| [poc.GetHTTPPacketQueryParam](#gethttppacketqueryparam) |GetHTTPPacketQueryParam 是一个辅助函数，用于获取请求报文中指定的GET请求参数，其返回值为string |
| [poc.GetStatusCodeFromResponse](#getstatuscodefromresponse) |GetStatusCodeFromResponse 是一个辅助函数，用于获取响应报文中的状态码，其返回值为int |
| [poc.HTTP](#http) |HTTP 发送请求并且返回原始响应报文，原始请求报文以及错误，它的第一个参数可以接收[]byte, string, http.Request结构体，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等 |
| [poc.HTTPEx](#httpex) |HTTPEx 与HTTP类似，它发送请求并且返回响应结构体，请求结构体以及错误，它的第一个参数可以接收[]byte, string, http.Request结构体，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等 关于结构体中的可用字段和方法可以使用...|
| [poc.HTTPPacketForceChunked](#httppacketforcechunked) |HTTPPacketForceChunked 将一个HTTP报文的body强制转换为chunked编码 |
| [poc.HTTPRequestToCurl](#httprequesttocurl) |HTTPRequestToCurl 尝试将HTTP请求报文转换为curl命令。第一个参数为是否使用HTTPS，第二个参数为HTTP请求报文，其返回值为string，即转换后的curl命令 |
| [poc.Head](#head) |Head 向指定URL发送HEAD请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是URL字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等 关于结构体中的可用字段和方法可以使用desc函数进行查看 |
| [poc.IsResponse](#isresponse) |IsResp 判断传入的数据是否为 HTTP 响应报文 |
| [poc.Options](#options) |Options 向指定URL发送OPTIONS请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是URL字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等 关于结构体中的可用字段和方法可以使用desc函数进行查看 |
| [poc.ParseBytesToHTTPRequest](#parsebytestohttprequest) |ParseBytesToHTTPRequest 将字节数组解析为 HTTP 请求 |
| [poc.ParseBytesToHTTPResponse](#parsebytestohttpresponse) |ParseBytesToHTTPResponse 将字节数组解析为 HTTP 响应 |
| [poc.ParseUrlToHTTPRequestRaw](#parseurltohttprequestraw) |ParseUrlToHTTPRequestRaw 将URL解析为原始 HTTP 请求报文，返回是否为 HTTPS，原始请求报文与错误 |
| [poc.Post](#post) |Post 向指定URL发送POST请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是URL字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等 关于结构体中的可用字段和方法可以使用desc函数进行查看 |
| [poc.ReplaceAllHTTPPacketPostParams](#replaceallhttppacketpostparams) |ReplaceAllHTTPPacketPostParams 是一个辅助函数，用于改变请求报文，修改所有POST请求参数，如果不存在则会增加，其接收一个map[string]string类型的参数，其中key为POST请求参数名，value为POST请求参数值 |
| [poc.ReplaceAllHTTPPacketQueryParams](#replaceallhttppacketqueryparams) |ReplaceAllHTTPPacketQueryParams 是一个辅助函数，用于改变请求报文，修改所有GET请求参数，如果不存在则会增加，其接收一个map[string]string类型的参数，其中key为请求参数名，value为请求参数值 |
| [poc.ReplaceBody](#replacebody) |ReplaceBody 将原始 HTTP 请求报文中的 body 替换为指定的 body，并指定是否为 chunked，返回新的 HTTP 请求报文 |
| [poc.ReplaceHTTPPacketBasicAuth](#replacehttppacketbasicauth) |ReplaceHTTPPacketBasicAuth 是一个辅助函数，用于改变请求报文，修改Authorization请求头为基础认证的密文，如果不存在则会增加，实际上是ReplaceHTTPPacketHeader("Authorization", codec.EncodeBase64(usern...|
| [poc.ReplaceHTTPPacketBody](#replacehttppacketbody) |ReplaceHTTPPacketBody 是一个辅助函数，用于改变请求报文，修改请求体内容，第一个参数为修改后的请求体内容，第二个参数为是否分块传输 |
| [poc.ReplaceHTTPPacketCookie](#replacehttppacketcookie) |ReplaceHTTPPacketCookie 是一个辅助函数，用于改变请求报文，修改Cookie请求头中的值，如果不存在则会增加 |
| [poc.ReplaceHTTPPacketFirstLine](#replacehttppacketfirstline) |ReplaceHTTPPacketFirstLine 是一个辅助，用于改变请求报文，修改第一行（即请求方法，请求路径，协议版本） |
| [poc.ReplaceHTTPPacketHeader](#replacehttppacketheader) |ReplaceHTTPPacketHeader 是一个辅助函数，用于改变请求报文，修改修改请求头，如果不存在则会增加 |
| [poc.ReplaceHTTPPacketHost](#replacehttppackethost) |ReplaceHTTPPacketHost 是一个辅助函数，用于改变请求报文，修改Host请求头，如果不存在则会增加，实际上是ReplaceHTTPPacketHeader("Host", host)的简写 |
| [poc.ReplaceHTTPPacketMethod](#replacehttppacketmethod) |ReplaceHTTPPacketMethod 是一个辅助函数，用于改变请求报文，修改请求方法 |
| [poc.ReplaceHTTPPacketPath](#replacehttppacketpath) |ReplaceHTTPPacketPath 是一个辅助函数，用于改变请求报文，修改请求路径 |
| [poc.ReplaceHTTPPacketPostParam](#replacehttppacketpostparam) |ReplaceHTTPPacketPostParam 是一个辅助函数，用于改变请求报文，修改POST请求参数，如果不存在则会增加 |
| [poc.ReplaceHTTPPacketQueryParam](#replacehttppacketqueryparam) |ReplaceHTTPPacketQueryParam 是一个辅助函数，用于改变请求报文，修改GET请求参数，如果不存在则会增加 |
| [poc.Split](#split) |Split 切割HTTP报文，返回响应头和响应体，其第一个参数是原始HTTP报文，接下来可以接收零个到多个回调函数，其在每次解析到请求头时回调 |
| [poc.Websocket](#websocket) |Websocket 实际上等价于`poc.HTTP(..., poc.websocket(true))`，用于快速发送请求并建立websocket连接并且返回原始响应报文，原始请求报文以及错误 |
| [poc.appendCookie](#appendcookie) |appendCookie 是一个请求选项参数，用于改变请求报文，添加Cookie请求头中的值 |
| [poc.appendFormEncoded](#appendformencoded) |appendFormEncoded 是一个请求选项参数，用于改变请求报文，添加请求体中的表单 |
| [poc.appendHeader](#appendheader) |appendHeader 是一个请求选项参数，用于改变请求报文，添加请求头 |
| [poc.appendPath](#appendpath) |appendPath 是一个请求选项参数，用于改变请求报文，在现有请求路径后添加请求路径 |
| [poc.appendPostParam](#appendpostparam) |appendPostParam 是一个请求选项参数，用于改变请求报文，添加POST请求参数 |
| [poc.appendQueryParam](#appendqueryparam) |appendQueryParam 是一个请求选项参数，用于改变请求报文，添加GET请求参数 |
| [poc.appendUploadFile](#appenduploadfile) |appendUploadFile 是一个请求选项参数，用于改变请求报文，添加请求体中的上传的文件，其中第一个参数为表单名，第二个参数为文件名，第三个参数为文件内容，第四个参数是可选参数，为文件类型(Content-Type) |
| [poc.deleteCookie](#deletecookie) |deleteCookie 是一个请求选项参数，用于改变请求报文，删除Cookie中的值 |
| [poc.deleteForm](#deleteform) |deleteForm 是一个请求选项参数，用于改变请求报文，删除POST请求表单 |
| [poc.deleteHeader](#deleteheader) |deleteHeader 是一个请求选项参数，用于改变请求报文，删除请求头 |
| [poc.deletePostParam](#deletepostparam) |deletePostParam 是一个请求选项参数，用于改变请求报文，删除POST请求参数 |
| [poc.deleteQueryParam](#deletequeryparam) |deleteQueryParam 是一个请求选项参数，用于改变请求报文，删除GET请求参数 |
| [poc.host](#host) |host 是一个请求选项参数，用于指定实际请求的 host，如果没有设置该请求选项，则会依据原始请求报文中的Host字段来确定实际请求的host |
| [poc.http2](#http2) |http2 是一个请求选项参数，用于指定是否使用http2协议，默认为false即使用http1协议 |
| [poc.https](#https) |https 是一个请求选项参数，用于指定是否使用https协议，默认为false即使用http协议 |
| [poc.jsRedirect](#jsredirect) |jsRedirect 是一个请求选项参数，用于指定是否跟踪JS重定向，默认为false即不会自动跟踪JS重定向 |
| [poc.noFixContentLength](#nofixcontentlength) |noFixContentLength 是一个请求选项参数，用于指定是否修复响应报文中的Content-Length字段，默认为false即会自动修复Content-Length字段 |
| [poc.noRedirect](#noredirect) |noRedirect 是一个请求选项参数，用于指定是否跟踪重定向，默认为false即会自动跟踪重定向 |
| [poc.params](#params) |params 是一个请求选项参数，用于在请求时使用传入的值，需要注意的是，它可以很方便地使用str.f()代替 |
| [poc.port](#port) |port 是一个请求选项参数，用于指定实际请求的 port，如果没有设置该请求选项，则会依据原始请求报文中的Host字段来确定实际请求的port |
| [poc.proxy](#proxy) |proxy 是一个请求选项参数，用于指定请求使用的代理，可以指定多个代理，默认会使用系统代理 |
| [poc.redirectHandler](#redirecthandler) |redirectHandler 是一个请求选项参数，用于作为重定向处理函数，如果设置了该选项，则会在重定向时调用该函数，如果该函数返回true，则会继续重定向，否则不会重定向。其第一个参数为是否使用https协议，第二个参数为原始请求报文，第三个参数为原始响应报文 |
| [poc.redirectTimes](#redirecttimes) |redirectTimes 是一个请求选项参数，用于指定最大重定向次数，默认为5次 |
| [poc.replaceAllPostParams](#replaceallpostparams) |replaceAllPostParams 是一个请求选项参数，用于改变请求报文，修改所有POST请求参数，如果不存在则会增加，其接收一个map[string]string类型的参数，其中key为POST请求参数名，value为POST请求参数值 |
| [poc.replaceAllQueryParams](#replaceallqueryparams) |replaceAllQueryParams 是一个请求选项参数，用于改变请求报文，修改所有GET请求参数，如果不存在则会增加，其接收一个map[string]string类型的参数，其中key为请求参数名，value为请求参数值 |
| [poc.replaceBasicAuth](#replacebasicauth) |replaceBasicAuth 是一个请求选项参数，用于改变请求报文，修改Authorization请求头为基础认证的密文，如果不存在则会增加，实际上是replaceHeader("Authorization", codec.EncodeBase64(username + ":" + passwo...|
| [poc.replaceBody](#replacebody) |replaceBody 是一个请求选项参数，用于改变请求报文，修改请求体内容，第一个参数为修改后的请求体内容，第二个参数为是否分块传输 |
| [poc.replaceCookie](#replacecookie) |replaceCookie 是一个请求选项参数，用于改变请求报文，修改Cookie请求头中的值，如果不存在则会增加 |
| [poc.replaceFirstLine](#replacefirstline) |replaceFirstLine 是一个请求选项参数，用于改变请求报文，修改第一行（即请求方法，请求路径，协议版本） |
| [poc.replaceHeader](#replaceheader) |replaceHeader 是一个请求选项参数，用于改变请求报文，修改修改请求头，如果不存在则会增加 |
| [poc.replaceHost](#replacehost) |replaceHost 是一个请求选项参数，用于改变请求报文，修改Host请求头，如果不存在则会增加，实际上是replaceHeader("Host", host)的简写 |
| [poc.replaceMethod](#replacemethod) |replaceMethod 是一个请求选项参数，用于改变请求报文，修改请求方法 |
| [poc.replacePath](#replacepath) |replacePath 是一个请求选项参数，用于改变请求报文，修改请求路径 |
| [poc.replacePostParam](#replacepostparam) |replacePostParam 是一个请求选项参数，用于改变请求报文，修改POST请求参数，如果不存在则会增加 |
| [poc.replaceQueryParam](#replacequeryparam) |replaceQueryParam 是一个请求选项参数，用于改变请求报文，修改GET请求参数，如果不存在则会增加 |
| [poc.retryInStatusCode](#retryinstatuscode) |retryInStatusCode 是一个请求选项参数，用于指定在某些响应状态码的情况下重试，需要搭配retryTimes使用 |
| [poc.retryMaxWaitTime](#retrymaxwaittime) |retryMaxWaitTime 是一个请求选项参数，用于指定重试时最大等待时间，需要搭配retryTimes使用，默认为2秒 |
| [poc.retryNotInStatusCode](#retrynotinstatuscode) |retryNotInStatusCode 是一个请求选项参数，用于指定非某些响应状态码的情况下重试，需要搭配retryTimes使用 |
| [poc.retryTimes](#retrytimes) |retryTimes 是一个请求选项参数，用于指定请求失败时的重试次数，需要搭配retryInStatusCode或retryNotInStatusCode使用，来设置在什么响应码的情况下重试 |
| [poc.retryWaitTime](#retrywaittime) |retryWaitTime 是一个请求选项参数，用于指定重试时最小等待时间，需要搭配retryTimes使用，默认为0.1秒 |
| [poc.save](#save) |save 是一个请求选项参数，用于指定是否将此次请求的记录保存在数据库中，默认为true即会保存到数据库 |
| [poc.session](#session) |session 是一个请求选项参数，用于指定请求的session，参数可以是任意类型的值，用此值做标识符从而找到唯一的session。使用session进行请求时会自动管理cookie，这在登录后操作的场景非常有用 |
| [poc.source](#source) |source 是一个请求选项参数，用于在请求记录保存到数据库时标识此次请求的来源 |
| [poc.timeout](#timeout) |timeout 是一个请求选项参数，用于指定读取超时时间，默认为15秒 |
| [poc.websocket](#websocket) |websocket 是一个请求选项参数，用于允许将链接升级为websocket，此时发送的请求应该为websocket握手请求 |
| [poc.websocketFromServer](#websocketfromserver) |websocketFromServer 是一个请求选项参数，它接收一个回调函数，这个函数有两个参数，其中第一个参数为服务端发送的数据，第二个参数为取消函数，调用将会强制断开 websocket |
| [poc.websocketOnClient](#websocketonclient) |websocketOnClient 是一个请求选项参数，它接收一个回调函数，这个函数有一个参数，是WebsocketClient结构体，通过该结构体可以向服务端发送数据 |


## 函数定义
### AppendHTTPPacketCookie

#### 详细描述
AppendHTTPPacketCookie 是一个辅助函数，用于改变请求报文，添加Cookie请求头中的值

Example:
```
poc.AppendHTTPPacketCookie(poc.BasicRequest(), "aaa", "bbb") // 添加cookie键值对aaa:bbb
```


#### 定义

`AppendHTTPPacketCookie(packet []byte, key string, value any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### AppendHTTPPacketFormEncoded

#### 详细描述
AppendHTTPPacketFormEncoded 是一个辅助函数，用于改变请求报文，添加请求体中的表单

Example:
```
poc.AppendHTTPPacketFormEncoded(`POST /post HTTP/1.1
Host: pie.dev
Content-Type: multipart/form-data; boundary=------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Length: 203

--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Disposition: form-data; name="aaa"

bbb
--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm--`, "ccc", "ddd") // 添加POST请求表单，其中ccc为键，ddd为值
```


#### 定义

`AppendHTTPPacketFormEncoded(packet []byte, key string, value string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### AppendHTTPPacketHeader

#### 详细描述
AppendHTTPPacketHeader 是一个辅助函数，用于改变请求报文，添加请求头

Example:
```
poc.AppendHTTPPacketHeader(poc.BasicRequest(), "AAA", "BBB") // 添加AAA请求头的值为BBB
```


#### 定义

`AppendHTTPPacketHeader(packet []byte, headerKey string, headerValue any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| headerKey | `string` |   |
| headerValue | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### AppendHTTPPacketPath

#### 详细描述
AppendHTTPPacketPath 是一个辅助函数，用于改变请求报文，在现有请求路径后添加请求路径

Example:
```
poc.AppendHTTPPacketPath(`GET /docs HTTP/1.1
Host: yaklang.com
`, "/api/poc")) // 向 example.com 发起请求，实际上请求路径改为/docs/api/poc
```


#### 定义

`AppendHTTPPacketPath(packet []byte, p string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| p | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### AppendHTTPPacketPostParam

#### 详细描述
AppendHTTPPacketPostParam 是一个辅助函数，用于改变请求报文，添加POST请求参数

Example:
```
poc.AppendHTTPPacketPostParam(poc.BasicRequest(), "a", "b") // 向 pie.dev 发起请求，添加POST请求参数a，值为b
```


#### 定义

`AppendHTTPPacketPostParam(packet []byte, key string, value string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### AppendHTTPPacketQueryParam

#### 详细描述
AppendHTTPPacketQueryParam 是一个辅助函数，用于改变请求报文，添加GET请求参数

Example:
```
poc.AppendHTTPPacketQueryParam(poc.BasicRequest(), "a", "b") // 添加GET请求参数a，值为b
```


#### 定义

`AppendHTTPPacketQueryParam(packet []byte, key string, value string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### AppendHTTPPacketUploadFile

#### 详细描述
AppendHTTPPacketUploadFile 是一个辅助函数，用于改变请求报文，添加请求体中的上传的文件，其中第一个参数为原始请求报文，第二个参数为表单名，第三个参数为文件名，第四个参数为文件内容，第五个参数是可选参数，为文件类型(Content-Type)

Example:
```
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("POST", "https://pie.dev/post")
poc.AppendHTTPPacketUploadFile(raw, "file", "phpinfo.php", "<?php phpinfo(); ?>", "image/jpeg")) // 添加POST请求表单，其文件名为phpinfo.php，内容为<?php phpinfo(); ?>，文件类型为image/jpeg
```


#### 定义

`AppendHTTPPacketUploadFile(packet []byte, fieldName string, fileName string, fileContent any, contentType ...string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| fieldName | `string` |   |
| fileName | `string` |   |
| fileContent | `any` |   |
| contentType | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### BasicRequest

#### 详细描述
BasicRequest 返回一个基本的 HTTP 请求，用于测试，它实际上返回一个b"GET / HTTP/1.1\r\nHost: example.com\r\n\r\n"

Example:
```
poc.BasicRequest() // b"GET / HTTP/1.1\r\nHost: example.com\r\n\r\n"
```


#### 定义

`BasicRequest() []byte`

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### BuildRequest

#### 详细描述
BuildRequest 是一个用于辅助构建请求报文的工具函数，它第一个参数可以接收[]byte, string, http.Request结构体，接下来可以接收零个到多个请求选项，修改请求报文的选项将被作用，最后返回构建好的请求报文

Example:
```
raw = poc.BuildRequest(poc.BasicRequest(), poc.https(true), poc.replaceHost("yaklang.com"), poc.replacePath("/docs/api/poc")) // 构建一个基础GET请求，修改其Host为yaklang.com，访问的URI路径为/docs/api/poc
// raw = b"GET /docs/api/poc HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n"
```


#### 定义

`BuildRequest(i any, opts ...PocConfig) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| opts | `...PocConfig` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### CurlToHTTPRequest

#### 详细描述
CurlToHTTPRequest 尝试将curl命令转换为HTTP请求报文，其返回值为bytes，即转换后的HTTP请求报文

Example:
```
poc.CurlToHTTPRequest("curl -X POST -d 'a=b&c=d' http://example.com")
```


#### 定义

`CurlToHTTPRequest(command string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| command | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### Delete

#### 详细描述
Delete 向指定URL发送DELETE请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是URL字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等

关于结构体中的可用字段和方法可以使用desc函数进行查看

Example:
```
poc.Delete("https://yaklang.com", poc.https(true)) // 向yaklang.com发送一个基于HTTPS协议的DELETE请求
desc(rsp) // 查看响应结构体中的可用字段
```


#### 定义

`Delete(urlStr string, opts ...PocConfig) (*lowhttp.LowhttpResponse, *http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlStr | `string` |   |
| opts | `...PocConfig` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*lowhttp.LowhttpResponse` |   |
| r2 | `*http.Request` |   |
| r3 | `error` |   |


### DeleteHTTPPacketCookie

#### 详细描述
DeleteHTTPPacketCookie 是一个辅助函数，用于改变请求报文，删除Cookie中的值

Example:
```
poc.DeleteHTTPPacketCookie(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: aaa=bbb; ccc=ddd
Host: pie.dev

`, "aaa") // 删除Cookie中的aaa
```


#### 定义

`DeleteHTTPPacketCookie(packet []byte, key string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### DeleteHTTPPacketForm

#### 详细描述
DeleteHTTPPacketForm 是一个辅助函数，用于改变请求报文，删除POST请求表单

Example:
```
poc.DeleteHTTPPacketForm(`POST /post HTTP/1.1
Host: pie.dev
Content-Type: multipart/form-data; boundary=------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Length: 308

--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Disposition: form-data; name="aaa"

bbb
--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Disposition: form-data; name="ccc"

ddd
--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm--`, "aaa") // 删除POST请求表单aaa
```


#### 定义

`DeleteHTTPPacketForm(packet []byte, key string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### DeleteHTTPPacketHeader

#### 详细描述
DeleteHTTPPacketHeader 是一个辅助函数，用于改变请求报文，删除请求头

Example:
```
poc.DeleteHTTPPacketHeader(`GET /get HTTP/1.1
Content-Type: application/json
AAA: BBB
Host: pie.dev

`, "AAA") // 删除AAA请求头
```


#### 定义

`DeleteHTTPPacketHeader(packet []byte, headerKey string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| headerKey | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### DeleteHTTPPacketPostParam

#### 详细描述
DeleteHTTPPacketPostParam 是一个辅助函数，用于改变请求报文，删除POST请求参数

Example:
```
poc.DeleteHTTPPacketPostParam(`POST /post HTTP/1.1
Content-Type: application/json
Content-Length: 7
Host: pie.dev

a=b&c=d`, "a") // 删除POST请求参数a
```


#### 定义

`DeleteHTTPPacketPostParam(packet []byte, key string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### DeleteHTTPPacketQueryParam

#### 详细描述
DeleteHTTPPacketQueryParam 是一个辅助函数，用于改变请求报文，删除GET请求参数

Example:
```
poc.DeleteHTTPPacketQueryParam(`GET /get?a=b&c=d HTTP/1.1
Content-Type: application/json
Host: pie.dev

`, "a") // 删除GET请求参数a
```


#### 定义

`DeleteHTTPPacketQueryParam(packet []byte, key string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### Do

#### 详细描述
关于结构体中的可用字段和方法可以使用desc函数进行查看

Example:
```
poc.Do("GET","https://yaklang.com", poc.https(true)) // 向yaklang.com发送一个基于HTTPS协议的GET请求
desc(rsp) // 查看响应结构体中的可用字段
```


#### 定义

`Do(method string, urlStr string, opts ...PocConfig) (*lowhttp.LowhttpResponse, *http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` |   |
| urlStr | `string` |   |
| opts | `...PocConfig` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*lowhttp.LowhttpResponse` |   |
| r2 | `*http.Request` |   |
| r3 | `error` |   |


### FixHTTPPacketCRLF

#### 详细描述
FixHTTPPacketCRLF 修复一个HTTP报文的CRLF问题（正常的报文每行末尾为\r\n，但是某些报文可能是有\n），如果noFixLength为true，则不会修复Content-Length，否则会尝试修复Content-Length

Example:
```
poc.FixHTTPPacketCRLF(`POST / HTTP/1.1
Host: example.com
Content-Length: 11

hello world`, false)
```


#### 定义

`FixHTTPPacketCRLF(raw []byte, noFixLength bool) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |
| noFixLength | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### FixHTTPRequest

#### 详细描述
FixHTTPRequest 尝试对传入的HTTP请求报文进行修复，并返回修复后的请求

Example:
```
poc.FixHTTPRequest(b"GET / HTTP/1.1\r\nHost: example.com\r\n\r\n")
```


#### 定义

`FixHTTPRequest(raw []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### FixHTTPResponse

#### 详细描述
FixHTTPResponse 尝试对传入的HTTP响应报文进行修复，并返回修复后的响应

Example:
```
poc.FixHTTPResponse(b"HTTP/1.1 200 OK\nContent-Length: 5\n\nhello")
```


#### 定义

`FixHTTPResponse(r []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| r | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### Get

#### 详细描述
Get 向指定URL发送GET请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是URL字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等

关于结构体中的可用字段和方法可以使用desc函数进行查看

Example:
```
poc.Get("https://yaklang.com", poc.https(true)) // 向yaklang.com发送一个基于HTTPS协议的GET请求
desc(rsp) // 查看响应结构体中的可用字段
```


#### 定义

`Get(urlStr string, opts ...PocConfig) (*lowhttp.LowhttpResponse, *http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlStr | `string` |   |
| opts | `...PocConfig` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*lowhttp.LowhttpResponse` |   |
| r2 | `*http.Request` |   |
| r3 | `error` |   |


### GetAllHTTPPacketPostParams

#### 详细描述
GetAllHTTPPacketPostParams 是一个辅助函数，用于获取请求报文中的所有POST请求参数，其返回值为map[string]string，其中键为参数名，值为参数值

Example:
```
poc.GetAllHTTPPacketPostParams(`POST /post HTTP/1.1
Content-Type: application/json
COntent-Length: 7
Host: pie.dev

a=b&c=d`) // 获取所有POST请求参数
```


#### 定义

`GetAllHTTPPacketPostParams(packet []byte) map[string]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]string` |   |


### GetAllHTTPPacketQueryParams

#### 详细描述
GetAllHTTPPacketQueryParams 是一个辅助函数，用于获取请求报文中的所有GET请求参数，其返回值为map[string]string，其中键为参数名，值为参数值

Example:
```
poc.GetAllHTTPPacketQueryParams(`GET /get?a=b&c=d HTTP/1.1
Content-Type: application/json
Host: pie.dev

`) // 获取所有GET请求参数
```


#### 定义

`GetAllHTTPPacketQueryParams(packet []byte) map[string]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]string` |   |


### GetHTTPPacketBody

#### 详细描述
GetHTTPPacketBody 是一个辅助函数，用于获取请求报文中的请求体，其返回值为bytes

Example:
```
poc.GetHTTPPacketBody(`POST /post HTTP/1.1
Content-Type: application/json
COntent-Length: 7
Host: pie.dev

a=b&c=d`) // 获取请求头，这里为b"a=b&c=d"
```


#### 定义

`GetHTTPPacketBody(packet []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### GetHTTPPacketContentType

#### 详细描述
GetHTTPPacketContentType 是一个辅助函数，用于获取请求报文中的Content-Type请求头，其返回值为string

Example:
```
poc.GetHTTPPacketContentType(`POST /post HTTP/1.1
Content-Type: application/json
COntent-Length: 7
Host: pie.dev

a=b&c=d`) // 获取Content-Type请求头
```


#### 定义

`GetHTTPPacketContentType(packet []byte) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### GetHTTPPacketCookie

#### 详细描述
GetHTTPPacketCookie 是一个辅助函数，用于获取请求报文中Cookie值，其返回值为string

Example:
```
poc.GetHTTPPacketCookie(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; c=d
Host: pie.dev

`, "a") // 获取键名为a的Cookie值，这里会返回"b"
```


#### 定义

`GetHTTPPacketCookie(packet []byte, key string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### GetHTTPPacketCookieFirst

#### 详细描述
GetHTTPPacketCookieFirst 是一个辅助函数，用于获取请求报文中Cookie值，其返回值为string

Example:
```
poc.GetHTTPPacketCookieFirst(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; c=d
Host: pie.dev

`, "a") // 获取键名为a的Cookie值，这里会返回"b"
```


#### 定义

`GetHTTPPacketCookieFirst(packet []byte, key string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### GetHTTPPacketCookieValues

#### 详细描述
GetHTTPPacketCookieValues 是一个辅助函数，用于获取请求报文中Cookie值，其返回值为[]string，这是因为Cookie可能存在多个相同键名的值

Example:
```
poc.GetHTTPPacketCookieValues(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; a=c
Host: pie.dev

`, "a") // 获取键名为a的Cookie值，这里会返回["b", "c"]
```


#### 定义

`GetHTTPPacketCookieValues(packet []byte, key string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### GetHTTPPacketCookies

#### 详细描述
GetHTTPPacketCookies 是一个辅助函数，用于获取请求报文中所有Cookie值，其返回值为map[string]string

Example:
```
poc.GetHTTPPacketCookies(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; c=d
Host: pie.dev

`) // 获取所有Cookie值，这里会返回{"a":"b", "c":"d"}
```


#### 定义

`GetHTTPPacketCookies(packet []byte) map[string]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]string` |   |


### GetHTTPPacketCookiesFull

#### 详细描述
GetHTTPPacketCookiesFull 是一个辅助函数，用于获取请求报文中所有Cookie值，其返回值为map[string][]string，这是因为Cookie可能存在多个相同键名的值

Example:
```
poc.GetHTTPPacketCookiesFull(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; a=c; c=d
Host: pie.dev

`) // 获取所有Cookie值，这里会返回{"a":["b", "c"], "c":["d"]}
```


#### 定义

`GetHTTPPacketCookiesFull(packet []byte) map[string][]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string][]string` |   |


### GetHTTPPacketFirstLine

#### 详细描述
GetHTTPPacketFirstLine 是一个辅助函数，用于获取 HTTP 报文中第一行的值，其返回值为string，string，string

在请求报文中，其三个返回值分别为：请求方法，请求URI，协议版本

在响应报文中，其三个返回值分别为：协议版本，状态码，状态码描述

Example:
```
poc.GetHTTPPacketFirstLine(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; a=c; c=d
Host: pie.dev

`) // 获取请求方法，请求URI，协议版本，这里会返回"GET", "/get", "HTTP/1.1"
```


#### 定义

`GetHTTPPacketFirstLine(packet []byte) (string, string, string)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `string` |   |
| r3 | `string` |   |


### GetHTTPPacketHeader

#### 详细描述
GetHTTPPacketHeaders 是一个辅助函数，用于获取请求报文中指定的请求头，其返回值为string

Example:
```
poc.GetHTTPPacketCookiesFull(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; a=c; c=d
Host: pie.dev

`) // 获取Content-Type请求头，这里会返回"application/json"
```


#### 定义

`GetHTTPPacketHeader(packet []byte, key string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### GetHTTPPacketHeaders

#### 详细描述
GetHTTPPacketHeaders 是一个辅助函数，用于获取请求报文中所有请求头，其返回值为map[string]string

Example:
```
poc.GetHTTPPacketCookiesFull(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; a=c; c=d
Host: pie.dev

`) // 获取所有请求头，这里会返回{"Content-Type": "application/json", "Cookie": "a=b; a=c; c=d", "Host": "pie.dev"}
```


#### 定义

`GetHTTPPacketHeaders(packet []byte) map[string]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string]string` |   |


### GetHTTPPacketHeadersFull

#### 详细描述
GetHTTPPacketHeadersFull 是一个辅助函数，用于获取请求报文中所有请求头，其返回值为map[string][]string，这是因为请求头可能存在多个相同键名的值

Example:
```
poc.GetHTTPPacketHeadersFull(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: a=b; a=c; c=d
Cookie: e=f
Host: pie.dev

`) // 获取所有请求头，这里会返回{"Content-Type": ["application/json"], "Cookie": []"a=b; a=c; c=d", "e=f"], "Host": ["pie.dev"]}
```


#### 定义

`GetHTTPPacketHeadersFull(packet []byte) map[string][]string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `map[string][]string` |   |


### GetHTTPPacketPostParam

#### 详细描述
GetHTTPPacketPostParam 是一个辅助函数，用于获取请求报文中指定的POST请求参数，其返回值为string

Example:
```
poc.GetHTTPPacketPostParam(`POST /post HTTP/1.1
Content-Type: application/json
COntent-Length: 7
Host: pie.dev

a=b&c=d`, "a") // 获取POST请求参数a的值
```


#### 定义

`GetHTTPPacketPostParam(packet []byte, key string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### GetHTTPPacketQueryParam

#### 详细描述
GetHTTPPacketQueryParam 是一个辅助函数，用于获取请求报文中指定的GET请求参数，其返回值为string

Example:
```
poc.GetHTTPPacketQueryParam(`GET /get?a=b&c=d HTTP/1.1
Content-Type: application/json
Host: pie.dev

`, "a") // 获取GET请求参数a的值
```


#### 定义

`GetHTTPPacketQueryParam(packet []byte, key string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### GetStatusCodeFromResponse

#### 详细描述
GetStatusCodeFromResponse 是一个辅助函数，用于获取响应报文中的状态码，其返回值为int

Example:
```
poc.GetStatusCodeFromResponse(`HTTP/1.1 200 OK
Content-Length: 5

hello`) // 获取响应报文中的状态码，这里会返回200
```


#### 定义

`GetStatusCodeFromResponse(packet []byte) int`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `int` |   |


### HTTP

#### 详细描述
HTTP 发送请求并且返回原始响应报文，原始请求报文以及错误，它的第一个参数可以接收[]byte, string, http.Request结构体，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等

Example:
```
poc.HTTP("GET / HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n", poc.https(true), poc.replaceHeader("AAA", "BBB")) // yaklang.com发送一个基于HTTPS协议的GET请求，并且添加一个请求头AAA，它的值为BBB
```


#### 定义

`HTTP(i any, opts ...PocConfig) ([]byte, []byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| opts | `...PocConfig` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `[]byte` |   |
| r3 | `error` |   |


### HTTPEx

#### 详细描述
HTTPEx 与HTTP类似，它发送请求并且返回响应结构体，请求结构体以及错误，它的第一个参数可以接收[]byte, string, http.Request结构体，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等

关于结构体中的可用字段和方法可以使用desc函数进行查看

Example:
```
rsp, req, err = poc.HTTPEx(`GET / HTTP/1.1\r\nHost: www.yaklang.com\r\n\r\n`, poc.https(true), poc.replaceHeader("AAA", "BBB")) // 向yaklang.com发送一个基于HTTPS协议的GET请求，并且添加一个请求头AAA，它的值为BBB
desc(rsp) // 查看响应结构体中的可用字段
```


#### 定义

`HTTPEx(i any, opts ...PocConfig) (*lowhttp.LowhttpResponse, *http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |
| opts | `...PocConfig` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*lowhttp.LowhttpResponse` |   |
| r2 | `*http.Request` |   |
| r3 | `error` |   |


### HTTPPacketForceChunked

#### 详细描述
HTTPPacketForceChunked 将一个HTTP报文的body强制转换为chunked编码

Example:
```
poc.HTTPPacketForceChunked(`POST / HTTP/1.1
Host: example.com
Content-Length: 11

hello world`)
```


#### 定义

`HTTPPacketForceChunked(raw []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### HTTPRequestToCurl

#### 详细描述
HTTPRequestToCurl 尝试将HTTP请求报文转换为curl命令。第一个参数为是否使用HTTPS，第二个参数为HTTP请求报文，其返回值为string，即转换后的curl命令

Example:
```
poc.HTTPRequestToCurl(true, "GET / HTTP/1.1\r\nHost: example.com\r\n\r\n")
```


#### 定义

`HTTPRequestToCurl(https bool, i any) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| https | `bool` |   |
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### Head

#### 详细描述
Head 向指定URL发送HEAD请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是URL字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等

关于结构体中的可用字段和方法可以使用desc函数进行查看

Example:
```
poc.Head("https://yaklang.com", poc.https(true)) // 向yaklang.com发送一个基于HTTPS协议的HEAD请求
desc(rsp) // 查看响应结构体中的可用字段
```


#### 定义

`Head(urlStr string, opts ...PocConfig) (*lowhttp.LowhttpResponse, *http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlStr | `string` |   |
| opts | `...PocConfig` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*lowhttp.LowhttpResponse` |   |
| r2 | `*http.Request` |   |
| r3 | `error` |   |


### IsResponse

#### 详细描述
IsResp 判断传入的数据是否为 HTTP 响应报文

Example:
```
poc.IsResp(b"HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nok") // true
```


#### 定义

`IsResponse(i any) bool`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |


### Options

#### 详细描述
Options 向指定URL发送OPTIONS请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是URL字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等

关于结构体中的可用字段和方法可以使用desc函数进行查看

Example:
```
poc.Options("https://yaklang.com", poc.https(true)) // 向yaklang.com发送一个基于HTTPS协议的Options请求
desc(rsp) // 查看响应结构体中的可用字段
```


#### 定义

`Options(urlStr string, opts ...PocConfig) (*lowhttp.LowhttpResponse, *http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlStr | `string` |   |
| opts | `...PocConfig` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*lowhttp.LowhttpResponse` |   |
| r2 | `*http.Request` |   |
| r3 | `error` |   |


### ParseBytesToHTTPRequest

#### 详细描述
ParseBytesToHTTPRequest 将字节数组解析为 HTTP 请求

Example:
```
req, err := str.ParseBytesToHTTPRequest(b"GET / HTTP/1.1\r\nHost: example.com\r\n\r\n")
```


#### 定义

`ParseBytesToHTTPRequest(raw []byte) (*http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http.Request` |   |
| r2 | `error` |   |


### ParseBytesToHTTPResponse

#### 详细描述
ParseBytesToHTTPResponse 将字节数组解析为 HTTP 响应

Example:
```
res, err := str.ParseBytesToHTTPResponse(b"HTTP/1.1 200 OK\r\nContent-Length: 2\r\n\r\nok")
```


#### 定义

`ParseBytesToHTTPResponse(res []byte) (*http.Response, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| res | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*http.Response` |   |
| r2 | `error` |   |


### ParseUrlToHTTPRequestRaw

#### 详细描述
ParseUrlToHTTPRequestRaw 将URL解析为原始 HTTP 请求报文，返回是否为 HTTPS，原始请求报文与错误

Example:
```
ishttps, raw, err = poc.ParseUrlToHTTPRequestRaw("GET", "https://yaklang.com")
```


#### 定义

`ParseUrlToHTTPRequestRaw(method string, i any) (bool, []byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` |   |
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `bool` |   |
| r2 | `[]byte` |   |
| r3 | `error` |   |


### Post

#### 详细描述
Post 向指定URL发送POST请求并且返回响应结构体，请求结构体以及错误，它的第一个参数是URL字符串，接下来可以接收零个到多个请求选项，用于对此次请求进行配置，例如对设置超时时间，或者修改请求报文等

关于结构体中的可用字段和方法可以使用desc函数进行查看

Example:
```
poc.Post("https://yaklang.com", poc.https(true)) // 向yaklang.com发送一个基于HTTPS协议的POST请求
desc(rsp) // 查看响应结构体中的可用字段
```


#### 定义

`Post(urlStr string, opts ...PocConfig) (*lowhttp.LowhttpResponse, *http.Request, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| urlStr | `string` |   |
| opts | `...PocConfig` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `*lowhttp.LowhttpResponse` |   |
| r2 | `*http.Request` |   |
| r3 | `error` |   |


### ReplaceAllHTTPPacketPostParams

#### 详细描述
ReplaceAllHTTPPacketPostParams 是一个辅助函数，用于改变请求报文，修改所有POST请求参数，如果不存在则会增加，其接收一个map[string]string类型的参数，其中key为POST请求参数名，value为POST请求参数值

Example:
```
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("POST", "https://pie.dev/post")
poc.ReplaceAllHTTPPacketPostParams(raw, {"a":"b", "c":"d"}) // 添加POST请求参数a，值为b，POST请求参数c，值为d
```


#### 定义

`ReplaceAllHTTPPacketPostParams(packet []byte, values map[string]string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| values | `map[string]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### ReplaceAllHTTPPacketQueryParams

#### 详细描述
ReplaceAllHTTPPacketQueryParams 是一个辅助函数，用于改变请求报文，修改所有GET请求参数，如果不存在则会增加，其接收一个map[string]string类型的参数，其中key为请求参数名，value为请求参数值

Example:
```
poc.ReplaceAllHTTPPacketQueryParams(poc.BasicRequest(), {"a":"b", "c":"d"}) // 添加GET请求参数a，值为b，添加GET请求参数c，值为d
```


#### 定义

`ReplaceAllHTTPPacketQueryParams(packet []byte, values map[string]string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| values | `map[string]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### ReplaceBody

#### 详细描述
ReplaceBody 将原始 HTTP 请求报文中的 body 替换为指定的 body，并指定是否为 chunked，返回新的 HTTP 请求报文

Example:
```
poc.ReplaceBody(`POST / HTTP/1.1
Host: example.com
Content-Length: 11

hello world`, "hello yak", false)
```


#### 定义

`ReplaceBody(raw []byte, body []byte, chunk bool) (newHTTPRequest []byte)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |
| body | `[]byte` |   |
| chunk | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| newHTTPRequest | `[]byte` |   |


### ReplaceHTTPPacketBasicAuth

#### 详细描述
ReplaceHTTPPacketBasicAuth 是一个辅助函数，用于改变请求报文，修改Authorization请求头为基础认证的密文，如果不存在则会增加，实际上是ReplaceHTTPPacketHeader("Authorization", codec.EncodeBase64(username + ":" + password))的简写

Example:
```
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("GET", "https://pie.dev/basic-auth/admin/password")
poc.ReplaceHTTPPacketBasicAuth(raw, "admin", "password") // 修改Authorization请求头
```


#### 定义

`ReplaceHTTPPacketBasicAuth(packet []byte, username string, password string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| username | `string` |   |
| password | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### ReplaceHTTPPacketBody

#### 详细描述
ReplaceHTTPPacketBody 是一个辅助函数，用于改变请求报文，修改请求体内容，第一个参数为修改后的请求体内容，第二个参数为是否分块传输

Example:
```
poc.ReplaceHTTPPacketBody(poc.BasicRequest(), "a=b") // 修改请求体内容为a=b
```


#### 定义

`ReplaceHTTPPacketBody(packet []byte, body []byte) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| body | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### ReplaceHTTPPacketCookie

#### 详细描述
ReplaceHTTPPacketCookie 是一个辅助函数，用于改变请求报文，修改Cookie请求头中的值，如果不存在则会增加

Example:
```
poc.ReplaceHTTPPacketCookie(poc.BasicRequest(), p"aaa", "bbb") // 修改cookie值，由于这里没有aaa的cookie值，所以会增加
```


#### 定义

`ReplaceHTTPPacketCookie(packet []byte, key string, value any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |
| value | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### ReplaceHTTPPacketFirstLine

#### 详细描述
ReplaceHTTPPacketFirstLine 是一个辅助，用于改变请求报文，修改第一行（即请求方法，请求路径，协议版本）

Example:
```
poc.ReplaceHTTPPacketFirstLine(`GET / HTTP/1.1
Host: Example.com
`, "GET /test HTTP/1.1")) // 向 example.com 发起请求，修改请求报文的第一行，请求/test路径
```


#### 定义

`ReplaceHTTPPacketFirstLine(packet []byte, firstLine string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| firstLine | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### ReplaceHTTPPacketHeader

#### 详细描述
ReplaceHTTPPacketHeader 是一个辅助函数，用于改变请求报文，修改修改请求头，如果不存在则会增加

Example:
```
poc.ReplaceHTTPPacketHeader(poc.BasicRequest(),"AAA", "BBB") // 修改AAA请求头的值为BBB，这里没有AAA请求头，所以会增加该请求头
```


#### 定义

`ReplaceHTTPPacketHeader(packet []byte, headerKey string, headerValue any) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| headerKey | `string` |   |
| headerValue | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### ReplaceHTTPPacketHost

#### 详细描述
ReplaceHTTPPacketHost 是一个辅助函数，用于改变请求报文，修改Host请求头，如果不存在则会增加，实际上是ReplaceHTTPPacketHeader("Host", host)的简写

Example:
```
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("GET", "https://yaklang.com")
poc.ReplaceHTTPPacketHost(raw, "www.yaklang.com") // 修改Host请求头的值为 www.yaklang.com
```


#### 定义

`ReplaceHTTPPacketHost(packet []byte, host string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| host | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### ReplaceHTTPPacketMethod

#### 详细描述
ReplaceHTTPPacketMethod 是一个辅助函数，用于改变请求报文，修改请求方法

Example:
```
poc.ReplaceHTTPPacketMethod(poc.BasicRequest(), "OPTIONS") // 修改请求方法为OPTIONS
```


#### 定义

`ReplaceHTTPPacketMethod(packet []byte, newMethod string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| newMethod | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### ReplaceHTTPPacketPath

#### 详细描述
ReplaceHTTPPacketPath 是一个辅助函数，用于改变请求报文，修改请求路径

Example:
```
poc.ReplaceHTTPPacketPath(poc.BasicRequest(), "/get") // 修改请求路径为/get
```


#### 定义

`ReplaceHTTPPacketPath(packet []byte, p string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| p | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### ReplaceHTTPPacketPostParam

#### 详细描述
ReplaceHTTPPacketPostParam 是一个辅助函数，用于改变请求报文，修改POST请求参数，如果不存在则会增加

Example:
```
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("POST", "https://pie.dev/post")
poc.ReplaceHTTPPacketPostParam(raw, "a", "b") // 添加POST请求参数a，值为b
```


#### 定义

`ReplaceHTTPPacketPostParam(packet []byte, key string, value string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### ReplaceHTTPPacketQueryParam

#### 详细描述
ReplaceHTTPPacketQueryParam 是一个辅助函数，用于改变请求报文，修改GET请求参数，如果不存在则会增加

Example:
```
_, raw, _ = poc.ParseUrlToHTTPRequestRaw("GET", "https://pie.dev/get")
poc.ReplaceHTTPPacketQueryParam(raw, "a", "b") // 添加GET请求参数a，值为b
```


#### 定义

`ReplaceHTTPPacketQueryParam(packet []byte, key string, value string) []byte`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| packet | `[]byte` |   |
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |


### Split

#### 详细描述
Split 切割HTTP报文，返回响应头和响应体，其第一个参数是原始HTTP报文，接下来可以接收零个到多个回调函数，其在每次解析到请求头时回调

Example:
```
poc.Split(`POST / HTTP/1.1
Content-Type: application/json
Host: www.example.com

{"key": "value"}`, func(header) {
dump(header)
})
```


#### 定义

`Split(raw []byte, hook ...func(line string)) (headers string, body []byte)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `[]byte` |   |
| hook | `...func(line string)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| headers | `string` |   |
| body | `[]byte` |   |


### Websocket

#### 详细描述
Websocket 实际上等价于`poc.HTTP(..., poc.websocket(true))`，用于快速发送请求并建立websocket连接并且返回原始响应报文，原始请求报文以及错误

Example:
```
rsp, req, err = poc.Websocket(`GET / HTTP/1.1
Connection: Upgrade
Upgrade: websocket
Sec-Websocket-Version: 13
Sec-Websocket-Extensions: permessage-deflate; client_max_window_bits
Host: echo.websocket.events
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7
Sec-Websocket-Key: L31R1As+71fwuXqhwhABuA==`,

	poc.proxy("http://127.0.0.1:7890"), poc.websocketFromServer(func(rsp, cancel) {
		    dump(rsp)
		}), poc.websocketOnClient(func(c) {
		    c.WriteText("123")
		})

)
time.Sleep(100)
```


#### 定义

`Websocket(raw any, opts ...PocConfig) ([]byte, []byte, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| raw | `any` |   |
| opts | `...PocConfig` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]byte` |   |
| r2 | `[]byte` |   |
| r3 | `error` |   |


### appendCookie

#### 详细描述
appendCookie 是一个请求选项参数，用于改变请求报文，添加Cookie请求头中的值

Example:
```
poc.Get("https://pie.dev/get", poc.appendCookie("aaa", "bbb")) // 向 pie.dev 发起请求，添加cookie键值对aaa:bbb
```


#### 定义

`appendCookie(key string, value string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### appendFormEncoded

#### 详细描述
appendFormEncoded 是一个请求选项参数，用于改变请求报文，添加请求体中的表单

Example:
```
poc.Post("https://pie.dev/post", poc.appendFormEncoded("aaa", "bbb")) // 向 pie.dev 发起请求，添加POST请求表单，其中aaa为键，bbb为值
```


#### 定义

`appendFormEncoded(key string, value string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### appendHeader

#### 详细描述
appendHeader 是一个请求选项参数，用于改变请求报文，添加请求头

Example:
```
poc.Post("https://pie.dev/post", poc.appendHeader("AAA", "BBB")) // 向 pie.dev 发起请求，添加AAA请求头的值为BBB
```


#### 定义

`appendHeader(key string, value string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### appendPath

#### 详细描述
appendPath 是一个请求选项参数，用于改变请求报文，在现有请求路径后添加请求路径

Example:
```
poc.Get("https://yaklang.com/docs", poc.appendPath("/api/poc")) // 向 yaklang.com 发起请求，实际上请求路径为/docs/api/poc
```


#### 定义

`appendPath(path string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### appendPostParam

#### 详细描述
appendPostParam 是一个请求选项参数，用于改变请求报文，添加POST请求参数

Example:
```
poc.Post("https://pie.dev/post", poc.appendPostParam("a", "b")) // 向 pie.dev 发起请求，添加POST请求参数a，值为b
```


#### 定义

`appendPostParam(key string, value string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### appendQueryParam

#### 详细描述
appendQueryParam 是一个请求选项参数，用于改变请求报文，添加GET请求参数

Example:
```
poc.Get("https://pie.dev/get", poc.appendQueryParam("a", "b")) // 向 pie.dev 发起请求，添加GET请求参数a，值为b
```


#### 定义

`appendQueryParam(key string, value string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### appendUploadFile

#### 详细描述
appendUploadFile 是一个请求选项参数，用于改变请求报文，添加请求体中的上传的文件，其中第一个参数为表单名，第二个参数为文件名，第三个参数为文件内容，第四个参数是可选参数，为文件类型(Content-Type)

Example:
```
poc.Post("https://pie.dev/post", poc.appendUploadFile("file", "phpinfo.php", "<?php phpinfo(); ?>", "image/jpeg"))// 向 pie.dev 发起请求，添加POST请求表单，其文件名为phpinfo.php，内容为<?php phpinfo(); ?>，文件类型为image/jpeg
```


#### 定义

`appendUploadFile(fieldName string, fileName string, fileContent any, contentType ...string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| fieldName | `string` |   |
| fileName | `string` |   |
| fileContent | `any` |   |
| contentType | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### deleteCookie

#### 详细描述
deleteCookie 是一个请求选项参数，用于改变请求报文，删除Cookie中的值

Example:
```
poc.HTTP(`GET /get HTTP/1.1
Content-Type: application/json
Cookie: aaa=bbb; ccc=ddd
Host: pie.dev

`, poc.deleteCookie("aaa"))// 向 pie.dev 发起请求，删除Cookie中的aaa
```


#### 定义

`deleteCookie(key string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### deleteForm

#### 详细描述
deleteForm 是一个请求选项参数，用于改变请求报文，删除POST请求表单

Example:
```
poc.HTTP(`POST /post HTTP/1.1
Host: pie.dev
Content-Type: multipart/form-data; boundary=------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Length: 308

--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Disposition: form-data; name="aaa"

bbb
--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm
Content-Disposition: form-data; name="ccc"

ddd
--------------------------OFHnlKtUimimGcXvRSxgCZlIMAyDkuqsxeppbIFm--`, poc.deleteForm("aaa")) // 向 pie.dev 发起请求，删除POST请求表单aaa
```


#### 定义

`deleteForm(key string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### deleteHeader

#### 详细描述
deleteHeader 是一个请求选项参数，用于改变请求报文，删除请求头

Example:
```
poc.HTTP(`GET /get HTTP/1.1
Content-Type: application/json
AAA: BBB
Host: pie.dev

`, poc.deleteHeader("AAA"))// 向 pie.dev 发起请求，删除AAA请求头
```


#### 定义

`deleteHeader(key string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### deletePostParam

#### 详细描述
deletePostParam 是一个请求选项参数，用于改变请求报文，删除POST请求参数

Example:
```
poc.HTTP(`POST /post HTTP/1.1
Content-Type: application/json
Content-Length: 7
Host: pie.dev

a=b&c=d`, poc.deletePostParam("a")) // 向 pie.dev 发起请求，删除POST请求参数a
```


#### 定义

`deletePostParam(key string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### deleteQueryParam

#### 详细描述
deleteQueryParam 是一个请求选项参数，用于改变请求报文，删除GET请求参数

Example:
```
poc.HTTP(`GET /get?a=b&c=d HTTP/1.1
Content-Type: application/json
Host: pie.dev

`, poc.deleteQueryParam("a")) // 向 pie.dev 发起请求，删除GET请求参数a
```


#### 定义

`deleteQueryParam(key string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### host

#### 详细描述
host 是一个请求选项参数，用于指定实际请求的 host，如果没有设置该请求选项，则会依据原始请求报文中的Host字段来确定实际请求的host

Example:
```
poc.HTTP(poc.BasicRequest(), poc.host("yaklang.com")) // 实际上请求 yaklang.com
```


#### 定义

`host(h string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### http2

#### 详细描述
http2 是一个请求选项参数，用于指定是否使用http2协议，默认为false即使用http1协议

Example:
```
poc.Get("https://www.example.com", poc.http2(true), poc.https(true)) // 向 www.example.com 发起请求，使用 http2 协议
```


#### 定义

`http2(isHttp2 bool) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| isHttp2 | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### https

#### 详细描述
https 是一个请求选项参数，用于指定是否使用https协议，默认为false即使用http协议

Example:
```
poc.HTTP(poc.BasicRequest(), poc.https(true)) // 向 example.com 发起请求，使用 https 协议
```


#### 定义

`https(isHttps bool) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| isHttps | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### jsRedirect

#### 详细描述
jsRedirect 是一个请求选项参数，用于指定是否跟踪JS重定向，默认为false即不会自动跟踪JS重定向

Example:
```
poc.HTTP(poc.BasicRequest(), poc.redirectTimes(5), poc.jsRedirect(true)) // 向 www.baidu.com 发起请求，如果响应重定向到其他链接也会自动跟踪JS重定向，最多进行5次重定向
```


#### 定义

`jsRedirect(b bool) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### noFixContentLength

#### 详细描述
noFixContentLength 是一个请求选项参数，用于指定是否修复响应报文中的Content-Length字段，默认为false即会自动修复Content-Length字段

Example:
```
poc.HTTP(poc.BasicRequest(), poc.noFixContentLength()) // 向 example.com 发起请求，如果响应报文中的Content-Length字段不正确或不存在	也不会自动修复
```


#### 定义

`noFixContentLength(b bool) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### noRedirect

#### 详细描述
noRedirect 是一个请求选项参数，用于指定是否跟踪重定向，默认为false即会自动跟踪重定向

Example:
```
poc.HTTP(poc.BasicRequest(), poc.noRedirect()) // 向 example.com 发起请求，如果响应重定向到其他链接也不会自动跟踪重定向
```


#### 定义

`noRedirect(b bool) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### params

#### 详细描述
params 是一个请求选项参数，用于在请求时使用传入的值，需要注意的是，它可以很方便地使用str.f()代替

Example:
rsp, req, err = poc.HTTP(x`POST /post HTTP/1.1
Content-Type: application/json
Host: pie.dev

{"key": "{{params(a)}}"}`, poc.params({"a":"bbb"})) // 实际上发送的POST参数为{"key": "bbb"}


#### 定义

`params(i any) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### port

#### 详细描述
port 是一个请求选项参数，用于指定实际请求的 port，如果没有设置该请求选项，则会依据原始请求报文中的Host字段来确定实际请求的port

Example:
```
poc.HTTP(poc.BasicRequest(), poc.host("yaklang.com"), poc.port(443), poc.https(true)) // 实际上请求 yaklang.com 的443端口
```


#### 定义

`port(port int) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| port | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### proxy

#### 详细描述
proxy 是一个请求选项参数，用于指定请求使用的代理，可以指定多个代理，默认会使用系统代理

Example:
```
poc.HTTP(poc.BasicRequest(), poc.proxy("http://127.0.0.1:7890")) // 向 example.com 发起请求，使用 http://127.0.0.1:7890 代理
```


#### 定义

`proxy(proxies ...string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| proxies | `...string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### redirectHandler

#### 详细描述
redirectHandler 是一个请求选项参数，用于作为重定向处理函数，如果设置了该选项，则会在重定向时调用该函数，如果该函数返回true，则会继续重定向，否则不会重定向。其第一个参数为是否使用https协议，第二个参数为原始请求报文，第三个参数为原始响应报文

Example:
```
count = 3
poc.Get("https://pie.dev/redirect/5", poc.redirectHandler(func(https, req, rsp) {
count--
return count >= 0
})) // 向 pie.edv 发起请求，使用自定义 redirectHandler 函数，使用count控制，进行最多3次重定向
```


#### 定义

`redirectHandler(i func(isHttps bool, req, rsp []byte) bool) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `func(isHttps bool, req, rsp []byte) bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### redirectTimes

#### 详细描述
redirectTimes 是一个请求选项参数，用于指定最大重定向次数，默认为5次

Example:
```
poc.HTTP(poc.BasicRequest(), poc.redirectTimes(5)) // 向 example.com 发起请求，如果响应重定向到其他链接，则会自动跟踪重定向最多5次
```


#### 定义

`redirectTimes(t int) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### replaceAllPostParams

#### 详细描述
replaceAllPostParams 是一个请求选项参数，用于改变请求报文，修改所有POST请求参数，如果不存在则会增加，其接收一个map[string]string类型的参数，其中key为POST请求参数名，value为POST请求参数值

Example:
```
poc.Post("https://pie.dev/post", poc.replaceAllPostParams({"a":"b", "c":"d"})) // 向 pie.dev 发起请求，添加POST请求参数a，值为b，POST请求参数c，值为d
```


#### 定义

`replaceAllPostParams(values map[string]string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| values | `map[string]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### replaceAllQueryParams

#### 详细描述
replaceAllQueryParams 是一个请求选项参数，用于改变请求报文，修改所有GET请求参数，如果不存在则会增加，其接收一个map[string]string类型的参数，其中key为请求参数名，value为请求参数值

Example:
```
poc.Get("https://pie.dev/get", poc.replaceAllQueryParams({"a":"b", "c":"d"})) // 向 pie.dev 发起请求，添加GET请求参数a，值为b，添加GET请求参数c，值为d
```


#### 定义

`replaceAllQueryParams(values map[string]string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| values | `map[string]string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### replaceBasicAuth

#### 详细描述
replaceBasicAuth 是一个请求选项参数，用于改变请求报文，修改Authorization请求头为基础认证的密文，如果不存在则会增加，实际上是replaceHeader("Authorization", codec.EncodeBase64(username + ":" + password))的简写

Example:
```
poc.Get("https://pie.dev/basic-auth/admin/password", poc.replaceBasicAuth("admin", "password")) // 向 pie.dev 发起请求进行基础认证，会得到200响应状态码
```


#### 定义

`replaceBasicAuth(username string, password string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| username | `string` |   |
| password | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### replaceBody

#### 详细描述
replaceBody 是一个请求选项参数，用于改变请求报文，修改请求体内容，第一个参数为修改后的请求体内容，第二个参数为是否分块传输

Example:
```
poc.Post("https://pie.dev/post", poc.replaceBody("a=b", false)) // 向 pie.dev 发起请求，修改请求体内容为a=b
```


#### 定义

`replaceBody(body []byte, chunk bool) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| body | `[]byte` |   |
| chunk | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### replaceCookie

#### 详细描述
replaceCookie 是一个请求选项参数，用于改变请求报文，修改Cookie请求头中的值，如果不存在则会增加

Example:
```
poc.Get("https://pie.dev/get", poc.replaceCookie("aaa", "bbb")) // 向 pie.dev 发起请求，这里没有aaa的cookie值，所以会增加
```


#### 定义

`replaceCookie(key string, value string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### replaceFirstLine

#### 详细描述
replaceFirstLine 是一个请求选项参数，用于改变请求报文，修改第一行（即请求方法，请求路径，协议版本）

Example:
```
poc.Get("https://exmaple.com", poc.replaceFirstLine("GET /test HTTP/1.1")) // 向 example.com 发起请求，修改请求报文的第一行，请求/test路径
```


#### 定义

`replaceFirstLine(firstLine string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| firstLine | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### replaceHeader

#### 详细描述
replaceHeader 是一个请求选项参数，用于改变请求报文，修改修改请求头，如果不存在则会增加

Example:
```
poc.Get("https://pie.dev/get", poc.replaceHeader("AAA", "BBB")) // 向 pie.dev 发起请求，修改AAA请求头的值为BBB，这里没有AAA请求头，所以会增加该请求头
```


#### 定义

`replaceHeader(key string, value string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### replaceHost

#### 详细描述
replaceHost 是一个请求选项参数，用于改变请求报文，修改Host请求头，如果不存在则会增加，实际上是replaceHeader("Host", host)的简写

Example:
```
poc.Get("https://yaklang.com/", poc.replaceHost("www.yaklang.com")) // 向 yaklang.com 发起请求，修改Host请求头的值为 www.yaklang.com
```


#### 定义

`replaceHost(host string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### replaceMethod

#### 详细描述
replaceMethod 是一个请求选项参数，用于改变请求报文，修改请求方法

Example:
```
poc.Options("https://exmaple.com", poc.replaceMethod("GET")) // 向 example.com 发起请求，修改请求方法为GET
```


#### 定义

`replaceMethod(method string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| method | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### replacePath

#### 详细描述
replacePath 是一个请求选项参数，用于改变请求报文，修改请求路径

Example:
```
poc.Get("https://pie.dev/post", poc.replacePath("/get")) // 向 pie.dev 发起请求，实际上请求路径为/get
```


#### 定义

`replacePath(path string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| path | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### replacePostParam

#### 详细描述
replacePostParam 是一个请求选项参数，用于改变请求报文，修改POST请求参数，如果不存在则会增加

Example:
```
poc.Post("https://pie.dev/post", poc.replacePostParam("a", "b")) // 向 pie.dev 发起请求，添加POST请求参数a，值为b
```


#### 定义

`replacePostParam(key string, value string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### replaceQueryParam

#### 详细描述
replaceQueryParam 是一个请求选项参数，用于改变请求报文，修改GET请求参数，如果不存在则会增加

Example:
```
poc.Get("https://pie.dev/get", poc.replaceQueryParam("a", "b")) // 向 pie.dev 发起请求，添加GET请求参数a，值为b
```


#### 定义

`replaceQueryParam(key string, value string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| key | `string` |   |
| value | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### retryInStatusCode

#### 详细描述
retryInStatusCode 是一个请求选项参数，用于指定在某些响应状态码的情况下重试，需要搭配retryTimes使用

Example:
```
poc.HTTP(poc.BasicRequest(), poc.retryTimes(5), poc.retryInStatusCode(500, 502)) // 向 example.com 发起请求，如果响应状态码500或502则进行重试，最多进行5次重试
```


#### 定义

`retryInStatusCode(codes ...int) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| codes | `...int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### retryMaxWaitTime

#### 详细描述
retryMaxWaitTime 是一个请求选项参数，用于指定重试时最大等待时间，需要搭配retryTimes使用，默认为2秒

Example:
```
poc.HTTP(poc.BasicRequest(), poc.retryTimes(5), poc.retryNotInStatusCode(200), poc.retryWaitTime(2)) // 向 example.com 发起请求，如果响应状态码不等于200则进行重试，最多进行5次重试，重试时最多等待2秒
```


#### 定义

`retryMaxWaitTime(f float64) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### retryNotInStatusCode

#### 详细描述
retryNotInStatusCode 是一个请求选项参数，用于指定非某些响应状态码的情况下重试，需要搭配retryTimes使用

Example:
```
poc.HTTP(poc.BasicRequest(), poc.retryTimes(5), poc.retryNotInStatusCode(200)) // 向 example.com 发起请求，如果响应状态码不等于200则进行重试，最多进行5次重试
```


#### 定义

`retryNotInStatusCode(codes ...int) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| codes | `...int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### retryTimes

#### 详细描述
retryTimes 是一个请求选项参数，用于指定请求失败时的重试次数，需要搭配retryInStatusCode或retryNotInStatusCode使用，来设置在什么响应码的情况下重试

Example:
```
poc.HTTP(poc.BasicRequest(), poc.retryTimes(5), poc.retryInStatusCode(500, 502)) // 向 example.com 发起请求，如果响应状态码500或502则进行重试，最多进行5次重试
```


#### 定义

`retryTimes(t int) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### retryWaitTime

#### 详细描述
retryWaitTime 是一个请求选项参数，用于指定重试时最小等待时间，需要搭配retryTimes使用，默认为0.1秒

Example:
```
poc.HTTP(poc.BasicRequest(), poc.retryTimes(5), poc.retryNotInStatusCode(200), poc.retryWaitTime(0.1)) // 向 example.com 发起请求，如果响应状态码不等于200则进行重试，最多进行5次重试，重试时最小等待0.1秒
```


#### 定义

`retryWaitTime(f float64) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### save

#### 详细描述
save 是一个请求选项参数，用于指定是否将此次请求的记录保存在数据库中，默认为true即会保存到数据库

Example:
```
poc.Get("https://exmaple.com", poc.save(true)) // 向 example.com 发起请求，会将此次请求保存到数据库中
```


#### 定义

`save(i bool) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### session

#### 详细描述
session 是一个请求选项参数，用于指定请求的session，参数可以是任意类型的值，用此值做标识符从而找到唯一的session。使用session进行请求时会自动管理cookie，这在登录后操作的场景非常有用

Example:
```
poc.Get("https://pie.dev/cookies/set/AAA/BBB", poc.session("test")) // 向 pie.dev 发起第一次请求，这会设置一个名为AAA，值为BBB的cookie
rsp, req, err = poc.Get("https://pie.dev/cookies", poc.session("test")) // 向 pie.dev 发起第二次请求，这个请求会输出所有的cookies，可以看到第一次请求设置的cookie已经存在了
```


#### 定义

`session(i any) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### source

#### 详细描述
source 是一个请求选项参数，用于在请求记录保存到数据库时标识此次请求的来源

Example:
```
poc.Get("https://exmaple.com", poc.save(true), poc.source("test")) // 向 example.com 发起请求，会将此次请求保存到数据库中，指示此次请求的来源为test
```


#### 定义

`source(i string) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### timeout

#### 详细描述
timeout 是一个请求选项参数，用于指定读取超时时间，默认为15秒

Example:
```
poc.Get("https://www.example.com", poc.timeout(15)) // 向 www.baidu.com 发起请求，读取超时时间为15秒
```


#### 定义

`timeout(f float64) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `float64` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### websocket

#### 详细描述
websocket 是一个请求选项参数，用于允许将链接升级为websocket，此时发送的请求应该为websocket握手请求

Example:
```
rsp, req, err = poc.HTTP(`GET / HTTP/1.1
Connection: Upgrade
Upgrade: websocket
Sec-Websocket-Version: 13
Sec-Websocket-Extensions: permessage-deflate; client_max_window_bits
Host: echo.websocket.events
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7
Sec-Websocket-Key: L31R1As+71fwuXqhwhABuA==`,

	poc.proxy("http://127.0.0.1:7890"), poc.websocketFromServer(func(rsp, cancel) {
		    dump(rsp)
		}), poc.websocketOnClient(func(c) {
		    c.WriteText("123")
		}), poc.websocket(true),

)
time.Sleep(100)
```


#### 定义

`websocket(w bool) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| w | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### websocketFromServer

#### 详细描述
websocketFromServer 是一个请求选项参数，它接收一个回调函数，这个函数有两个参数，其中第一个参数为服务端发送的数据，第二个参数为取消函数，调用将会强制断开 websocket

Example:
```
rsp, req, err = poc.HTTP(`GET / HTTP/1.1
Connection: Upgrade
Upgrade: websocket
Sec-Websocket-Version: 13
Sec-Websocket-Extensions: permessage-deflate; client_max_window_bits
Host: echo.websocket.events
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7
Sec-Websocket-Key: L31R1As+71fwuXqhwhABuA==`,

	poc.proxy("http://127.0.0.1:7890"), poc.websocketFromServer(func(rsp, cancel) {
		    dump(rsp)
		}), poc.websocketOnClient(func(c) {
		    c.WriteText("123")
		}), poc.websocket(true),

)
time.Sleep(100)
```


#### 定义

`websocketFromServer(w func(i []byte, cancel func())) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| w | `func(i []byte, cancel func())` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


### websocketOnClient

#### 详细描述
websocketOnClient 是一个请求选项参数，它接收一个回调函数，这个函数有一个参数，是WebsocketClient结构体，通过该结构体可以向服务端发送数据

Example:
```
rsp, req, err = poc.HTTP(`GET / HTTP/1.1
Connection: Upgrade
Upgrade: websocket
Sec-Websocket-Version: 13
Sec-Websocket-Extensions: permessage-deflate; client_max_window_bits
Host: echo.websocket.events
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7
Sec-Websocket-Key: L31R1As+71fwuXqhwhABuA==`,

	poc.proxy("http://127.0.0.1:7890"), poc.websocketFromServer(func(rsp, cancel) {
		    dump(rsp)
		}), poc.websocketOnClient(func(c) {
		    c.WriteText("123")
		}), poc.websocket(true),

)
time.Sleep(100)
```


#### 定义

`websocketOnClient(w func(c *lowhttp.WebsocketClient)) PocConfig`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| w | `func(c *lowhttp.WebsocketClient)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `PocConfig` |   |


