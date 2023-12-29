# mitm

|成员函数|函数描述/介绍|
|:------|:--------|
| [mitm.Bridge](#bridge) |Bridge 启动一个 MITM (中间人)代理服务器，它的第一个参数是端口，第二个参数是下游代理服务器地址，接下来可以接收零个到多个选项函数，用于影响中间人代理服务器的行为  Bridge 与 Start 类似，但略有不同，Bridge可以指定下游代理服务器地址，同时默认会在接收到请求和响应时打印...|
| [mitm.Start](#start) |Start 启动一个 MITM (中间人)代理服务器，它的第一个参数是端口，接下来可以接收零个到多个选项函数，用于影响中间人代理服务器的行为  如果没有指定 CA 证书和私钥，那么将使用内置的证书和私钥  |
| [mitm.callback](#callback) |callback 是一个选项函数，用于指定中间人代理服务器的回调函数，当接收到请求和响应后，会调用该回调函数  |
| [mitm.context](#context) |context 是一个选项函数，用于指定中间人代理服务器的上下文  |
| [mitm.hijackHTTPRequest](#hijackhttprequest) |hijackHTTPRequest 是一个选项函数，用于指定中间人代理服务器的请求劫持函数，当接收到请求后，会调用该回调函数  通过调用该回调函数的第四个参数，可以修改请求内容，通过调用该回调函数的第五个参数，可以丢弃请求  |
| [mitm.hijackHTTPResponse](#hijackhttpresponse) |hijackHTTPResponse 是一个选项函数，用于指定中间人代理服务器的响应劫持函数，当接收到响应后，会调用该回调函数  通过调用该回调函数的第四个参数，可以修改响应内容，通过调用该回调函数的第五个参数，可以丢弃响应  |
| [mitm.hijackHTTPResponseEx](#hijackhttpresponseex) |hijackHTTPResponseEx 是一个选项函数，用于指定中间人代理服务器的响应劫持函数，当接收到响应后，会调用该回调函数  通过调用该回调函数的第五个参数，可以修改响应内容，通过调用该回调函数的第六个参数，可以丢弃响应  它与 hijackHTTPResponse 的区别在于，它可以获取到...|
| [mitm.host](#host) |host 是一个选项函数，用于指定中间人代理服务器的监听地址，默认为空，即监听所有网卡  |
| [mitm.isTransparent](#istransparent) |isTransparent 是一个选项函数，用于指定中间人代理服务器是否开启透明劫持模式，默认为false  在开启透明模式下，所有流量都会被默认转发，所有的回调函数都会被忽略  |
| [mitm.maxContentLength](#maxcontentlength) |maxContentLength 是一个选项函数，用于指定中间人代理服务器的最大的请求和响应内容长度，默认为10MB  |
| [mitm.rootCA](#rootca) |rootCA 是一个选项函数，用于指定中间人代理服务器的根证书和私钥  |
| [mitm.useDefaultCA](#usedefaultca) |useDefaultCA 是一个选项函数，用于指定中间人代理服务器是否使用内置的证书和私钥，默认为true  默认的证书与私钥路径：~/yakit-projects/yak-mitm-ca.crt 和 ~/yakit-projects/yak-mitm-ca.key  |
| [mitm.wscallback](#wscallback) |wscallback 是一个选项函数，用于指定中间人代理服务器的 websocket 劫持函数，当接收到 websocket 请求或响应后，会调用该回调函数  该回调函数的第一个参数是请求或响应的内容  第二个参数是一个布尔值，用于指示该内容是请求还是响应，true 表示请求，false 表示响应 ...|
| [mitm.wsforcetext](#wsforcetext) |wsforcetext 是一个选项函数，用于强制指定中间人代理服务器的 websocket 劫持的数据帧转换为文本帧，默认为false  ! 已弃用  |


## 函数定义
### Bridge

#### 详细描述
Bridge 启动一个 MITM (中间人)代理服务器，它的第一个参数是端口，第二个参数是下游代理服务器地址，接下来可以接收零个到多个选项函数，用于影响中间人代理服务器的行为

Bridge 与 Start 类似，但略有不同，Bridge可以指定下游代理服务器地址，同时默认会在接收到请求和响应时打印到标准输出

如果没有指定 CA 证书和私钥，那么将使用内置的证书和私钥

Example:
```
mitm.Bridge(8080, "", mitm.host("127.0.0.1"), mitm.callback(func(isHttps, urlStr, req, rsp) { http.dump(req); http.dump(rsp)  })) // 启动一个中间人代理服务器，并将请求和响应打印到标准输出
```


#### 定义

`Bridge(port any, downstreamProxy string, opts ...mitmConfigOpt) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| port | `any` |   |
| downstreamProxy | `string` |   |
| opts | `...mitmConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### Start

#### 详细描述
Start 启动一个 MITM (中间人)代理服务器，它的第一个参数是端口，接下来可以接收零个到多个选项函数，用于影响中间人代理服务器的行为

如果没有指定 CA 证书和私钥，那么将使用内置的证书和私钥

Example:
```
mitm.Start(8080, mitm.host("127.0.0.1"), mitm.callback(func(isHttps, urlStr, req, rsp) { http.dump(req); http.dump(rsp)  })) // 启动一个中间人代理服务器，并将请求和响应打印到标准输出
```


#### 定义

`Start(port int, opts ...mitmConfigOpt) error`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| port | `int` |   |
| opts | `...mitmConfigOpt` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `error` |   |


### callback

#### 详细描述
callback 是一个选项函数，用于指定中间人代理服务器的回调函数，当接收到请求和响应后，会调用该回调函数

Example:
```
mitm.Start(8080, mitm.callback(func(isHttps, urlStr, req, rsp) { http.dump(req); http.dump(rsp)  }))
```


#### 定义

`callback(f func(bool, string, *http.Request, *http.Response)) mitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func(bool, string, *http.Request, *http.Response)` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `mitmConfigOpt` |   |


### context

#### 详细描述
context 是一个选项函数，用于指定中间人代理服务器的上下文

Example:
```
mitm.Start(8080, mitm.context(context.Background()))
```


#### 定义

`context(ctx context.Context) mitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| ctx | `context.Context` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `mitmConfigOpt` |   |


### hijackHTTPRequest

#### 详细描述
hijackHTTPRequest 是一个选项函数，用于指定中间人代理服务器的请求劫持函数，当接收到请求后，会调用该回调函数

通过调用该回调函数的第四个参数，可以修改请求内容，通过调用该回调函数的第五个参数，可以丢弃请求

Example:
```
mitm.Start(8080, mitm.hijackHTTPRequest(func(isHttps, urlStr, req, modified, dropped) {
// 添加一个额外的请求头
req = poc.ReplaceHTTPPacketHeader(req, "AAA", "BBB")
modified(req)
}
))
```


#### 定义

`hijackHTTPRequest(h func(isHttps bool, u string, req []byte, modified func([]byte), dropped func())) mitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(isHttps bool, u string, req []byte, modified func([]byte), dropped func())` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `mitmConfigOpt` |   |


### hijackHTTPResponse

#### 详细描述
hijackHTTPResponse 是一个选项函数，用于指定中间人代理服务器的响应劫持函数，当接收到响应后，会调用该回调函数

通过调用该回调函数的第四个参数，可以修改响应内容，通过调用该回调函数的第五个参数，可以丢弃响应

Example:
```
mitm.Start(8080, mitm.hijackHTTPResponse(func(isHttps, urlStr, rsp, modified, dropped) {
// 修改响应体为hijacked
rsp = poc.ReplaceBody(rsp, b"hijacked", false)
modified(rsp)
}
))
```


#### 定义

`hijackHTTPResponse(h func(isHttps bool, u string, rsp []byte, modified func([]byte), dropped func())) mitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(isHttps bool, u string, rsp []byte, modified func([]byte), dropped func())` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `mitmConfigOpt` |   |


### hijackHTTPResponseEx

#### 详细描述
hijackHTTPResponseEx 是一个选项函数，用于指定中间人代理服务器的响应劫持函数，当接收到响应后，会调用该回调函数

通过调用该回调函数的第五个参数，可以修改响应内容，通过调用该回调函数的第六个参数，可以丢弃响应

它与 hijackHTTPResponse 的区别在于，它可以获取到原始请求报文

Example:
```
mitm.Start(8080, mitm.hijackHTTPResponseEx(func(isHttps, urlStr, req, rsp, modified, dropped) {
// 修改响应体为hijacked
rsp = poc.ReplaceBody(rsp, b"hijacked", false)
modified(rsp)
}
))
```


#### 定义

`hijackHTTPResponseEx(h func(bool, string, []byte, []byte, func([]byte), func())) mitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| h | `func(bool, string, []byte, []byte, func([]byte), func())` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `mitmConfigOpt` |   |


### host

#### 详细描述
host 是一个选项函数，用于指定中间人代理服务器的监听地址，默认为空，即监听所有网卡

Example:
```
mitm.Start(8080, mitm.host("127.0.0.1"))
```


#### 定义

`host(host string) mitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| host | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `mitmConfigOpt` |   |


### isTransparent

#### 详细描述
isTransparent 是一个选项函数，用于指定中间人代理服务器是否开启透明劫持模式，默认为false

在开启透明模式下，所有流量都会被默认转发，所有的回调函数都会被忽略

Example:
```
mitm.Start(8080, mitm.isTransparent(true))
```


#### 定义

`isTransparent(b bool) mitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `mitmConfigOpt` |   |


### maxContentLength

#### 详细描述
maxContentLength 是一个选项函数，用于指定中间人代理服务器的最大的请求和响应内容长度，默认为10MB

Example:
```
mitm.Start(8080, mitm.maxContentLength(100 * 1000 * 1000))
```


#### 定义

`maxContentLength(i int) mitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| i | `int` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `mitmConfigOpt` |   |


### rootCA

#### 详细描述
rootCA 是一个选项函数，用于指定中间人代理服务器的根证书和私钥

Example:
```
mitm.Start(8080, mitm.rootCA(cert, key))
```


#### 定义

`rootCA(cert []byte, key []byte) mitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| cert | `[]byte` |   |
| key | `[]byte` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `mitmConfigOpt` |   |


### useDefaultCA

#### 详细描述
useDefaultCA 是一个选项函数，用于指定中间人代理服务器是否使用内置的证书和私钥，默认为true

默认的证书与私钥路径：~/yakit-projects/yak-mitm-ca.crt 和 ~/yakit-projects/yak-mitm-ca.key

Example:
```
mitm.Start(8080, mitm.useDefaultCA(true))
```


#### 定义

`useDefaultCA(t bool) mitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| t | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `mitmConfigOpt` |   |


### wscallback

#### 详细描述
wscallback 是一个选项函数，用于指定中间人代理服务器的 websocket 劫持函数，当接收到 websocket 请求或响应后，会调用该回调函数

该回调函数的第一个参数是请求或响应的内容

第二个参数是一个布尔值，用于指示该内容是请求还是响应，true 表示请求，false 表示响应

通过该回调函数的返回值，可以修改请求或响应的内容

Example:
```
mitm.Start(8080, mitm.wscallback(func(data, isRequest) { println(data); return data }))
```


#### 定义

`wscallback(f func([]byte, bool) any) mitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| f | `func([]byte, bool) any` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `mitmConfigOpt` |   |


### wsforcetext

#### 详细描述
wsforcetext 是一个选项函数，用于强制指定中间人代理服务器的 websocket 劫持的数据帧转换为文本帧，默认为false

! 已弃用

Example:
```
mitm.Start(8080, mitm.wsforcetext(true))
```


#### 定义

`wsforcetext(b bool) mitmConfigOpt`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| b | `bool` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `mitmConfigOpt` |   |


