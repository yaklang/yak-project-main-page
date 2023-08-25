# simulator


|成员函数|函数描述/介绍|
|:------|:--------|
 | [simulator.Captcha](#simulatorcaptcha) |  |
 | [simulator.Page](#simulatorpage) |  |
 | [simulator.captchaMode](#simulatorcaptchamode) |  |
 | [simulator.captchaUrl](#simulatorcaptchaurl) |  |
 | [simulator.defaultBrute](#simulatordefaultbrute) |  |
 | [simulator.passwordList](#simulatorpasswordlist) |  |
 | [simulator.proxy](#simulatorproxy) |  |
 | [simulator.proxyDetails](#simulatorproxydetails) |  |
 | [simulator.usernameList](#simulatorusernamelist) |  |
 | [simulator.wsAddress](#simulatorwsaddress) |  |




## 变量定义

|变量调用名|变量类型|变量解释/帮助信息|
|:-----------|:---------- |:-----------|
|`simulator.simple`|`map[string]interface {}`| //|





## 函数定义

### simulator.Captcha



#### 详细描述



#### 定义：

`Captcha() *extend.CaptchaIdentifier`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*extend.CaptchaIdentifier` |   |


 
### simulator.Page



#### 详细描述



#### 定义：

`Page() *core.StartMode`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*core.StartMode` |   |


 
### simulator.captchaMode



#### 详细描述



#### 定义：

`captchaMode(string) examples.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *examples.Config) ` |   |


 
### simulator.captchaUrl



#### 详细描述



#### 定义：

`captchaUrl(string) examples.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *examples.Config) ` |   |


 
### simulator.defaultBrute



#### 详细描述



#### 定义：

`defaultBrute(string, ...examples.ConfigOpt) (*examples.BruteForceResult, error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `...examples.ConfigOpt` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*examples.BruteForceResult` |   |
| r1 | `error` |   |


 
### simulator.passwordList



#### 详细描述



#### 定义：

`passwordList([]string) examples.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `[]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *examples.Config) ` |   |


 
### simulator.proxy



#### 详细描述



#### 定义：

`func simulator.proxy(v1: string) return (r0: func ConfigOpt(v1: *examples.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *examples.Config) ` |   |


 
### simulator.proxyDetails



#### 详细描述



#### 定义：

`func simulator.proxyDetails(v1: string, v2: string, v3: string) return (r0: func ConfigOpt(v1: *examples.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |
| v2 | `string` |   |
| v3 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *examples.Config) ` |   |


 
### simulator.usernameList



#### 详细描述



#### 定义：

`usernameList([]string) examples.ConfigOpt`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `[]string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *examples.Config) ` |   |


 
### simulator.wsAddress



#### 详细描述



#### 定义：

`func simulator.wsAddress(v1: string) return (r0: func ConfigOpt(v1: *examples.Config) )`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `func ConfigOpt(v1: *examples.Config) ` |   |


 

