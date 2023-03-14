# iiop


|成员函数|函数描述/介绍|
|:------|:--------|
 | [iiop.BindPayload](#iiopbindpayload) |  |
 | [iiop.InvokePayload](#iiopinvokepayload) |  |
 | [iiop.RebindPayload](#iioprebindpayload) |  |
 | [iiop.SendPayload](#iiopsendpayload) |  |




 



## 函数定义

### iiop.BindPayload



#### 详细描述



#### 定义：

`func iiop.BindPayload(v1: string) return (r0: func PayloadGeneraterFun(v1: net.Conn, v2: bytes) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PayloadGeneraterFun(v1: net.Conn, v2: bytes) return(error) ` |   |


 
### iiop.InvokePayload



#### 详细描述



#### 定义：

`func iiop.InvokePayload(v1: string, v2: string) return (r0: func PayloadGeneraterFun(v1: net.Conn, v2: bytes) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PayloadGeneraterFun(v1: net.Conn, v2: bytes) return(error) ` |   |


 
### iiop.RebindPayload



#### 详细描述



#### 定义：

`func iiop.RebindPayload(v1: string) return (r0: func PayloadGeneraterFun(v1: net.Conn, v2: bytes) return(error) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func PayloadGeneraterFun(v1: net.Conn, v2: bytes) return(error) ` |   |


 
### iiop.SendPayload



#### 详细描述



#### 定义：

`func iiop.SendPayload(v1: string, v2: func PayloadGeneraterFun(v1: net.Conn, v2: bytes) return(error) ) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `func PayloadGeneraterFun(v1: net.Conn, v2: bytes) return(error) ` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 


