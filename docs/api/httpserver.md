# httpserver


|成员函数|函数描述/介绍|
|:------|:--------|
 | [httpserver.Serve](#httpserverserve) |  |
 | [httpserver.context](#httpservercontext) |  |
 | [httpserver.handler](#httpserverhandler) |  |
 | [httpserver.tlsCertAndKey](#httpservertlscertandkey) |  |




 



## 函数定义

### httpserver.Serve



#### 详细描述



#### 定义：

`func httpserver.Serve(v1: string, v2: int, v3 ...yaklib._httpServerConfigOpt) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `int` |   |
| v3 | `...yaklib._httpServerConfigOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### httpserver.context



#### 详细描述



#### 定义：

`func httpserver.context(v1: context.Context) return (r0: func _httpServerConfigOpt(v1: *yaklib._httpServerConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `context.Context` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func _httpServerConfigOpt(v1: *yaklib._httpServerConfig) ` |   |


 
### httpserver.handler



#### 详细描述



#### 定义：

`func httpserver.handler(v1: func (v1: http.ResponseWriter, v2: *http.Request) ) return (r0: func _httpServerConfigOpt(v1: *yaklib._httpServerConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `func (v1: http.ResponseWriter, v2: *http.Request) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func _httpServerConfigOpt(v1: *yaklib._httpServerConfig) ` |   |


 
### httpserver.tlsCertAndKey



#### 详细描述



#### 定义：

`func httpserver.tlsCertAndKey(v1: any, v2: any, v3 ...any) return (r0: func _httpServerConfigOpt(v1: *yaklib._httpServerConfig) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `any` |   |
| v2 | `any` |   |
| v3 | `...any` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func _httpServerConfigOpt(v1: *yaklib._httpServerConfig) ` |   |


 

