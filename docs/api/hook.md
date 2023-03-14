# hook


|成员函数|函数描述/介绍|
|:------|:--------|
 | [hook.CallYakitPluginFunc](#hookcallyakitpluginfunc) | 导出插件特定函数 |
 | [hook.LoadYakitPlugin](#hookloadyakitplugin) | 为 Manager 加载特定类型的 Yakit 插件 |
 | [hook.LoadYakitPluginByName](#hookloadyakitpluginbyname) | 通过插件名加载特定插件 |
 | [hook.LoadYakitPluginContext](#hookloadyakitplugincontext) |  |
 | [hook.NewManager](#hooknewmanager) |  |
 | [hook.NewMixPluginCaller](#hooknewmixplugincaller) | 新增用于配合插件资深联动的主程序 |
 | [hook.RemoveYakitPluginByName](#hookremoveyakitpluginbyname) | 移除已经加载的插件（通过插件名） |




 



## 函数定义

### hook.CallYakitPluginFunc

导出插件特定函数

#### 详细描述



#### 定义：

`func hook.CallYakitPluginFunc(pluginName: string, funcName: string) return (caller: any, err: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pluginName | `string` |   |
| funcName | `string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| caller | `any` |   |
| err | `error` |   |


 
### hook.LoadYakitPlugin

为 Manager 加载特定类型的 Yakit 插件

#### 详细描述



#### 定义：

`func hook.LoadYakitPlugin(manager: *yak.YakToCallerManager, pluginType: string, funcNames ...string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| manager | `*yak.YakToCallerManager` |   |
| pluginType | `string` |   |
| funcNames | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### hook.LoadYakitPluginByName

通过插件名加载特定插件

#### 详细描述



#### 定义：

`func hook.LoadYakitPluginByName(manager: *yak.YakToCallerManager, pluginName: string, exportFuncs ...string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| manager | `*yak.YakToCallerManager` |   |
| pluginName | `string` |   |
| exportFuncs | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### hook.LoadYakitPluginContext



#### 详细描述



#### 定义：

`func hook.LoadYakitPluginContext(v1: *yak.YakToCallerManager, v2: context.Context, v3: string, v4 ...string) return (r0: error)`


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| v1 | `*yak.YakToCallerManager` |   |
| v2 | `context.Context` |   |
| v3 | `string` |   |
| v4 | `...string` |   |





#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `error` |   |


 
### hook.NewManager



#### 详细描述



#### 定义：

`func hook.NewManager() return (r0: *yak.YakToCallerManager)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yak.YakToCallerManager` |   |


 
### hook.NewMixPluginCaller

新增用于配合插件资深联动的主程序

#### 详细描述



#### 定义：

`func hook.NewMixPluginCaller() return (r0: *yak.MixPluginCaller, r1: error)`

 


#### 返回值

|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r0 | `*yak.MixPluginCaller` |   |
| r1 | `error` |   |


 
### hook.RemoveYakitPluginByName

移除已经加载的插件（通过插件名）

#### 详细描述



#### 定义：

``func hook.RemoveYakitPluginByName(manager: *yak.YakToCallerManager, pluginNames ...string)``


#### 参数

|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| manager | `*yak.YakToCallerManager` |   |
| pluginNames | `...string` |   |




 

 


