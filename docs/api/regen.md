# regen

|成员函数|函数描述/介绍|
|:------|:--------|
| [regen.Generate](#generate) |Generate 根据正则表达式生成所有匹配的字符串，返回生成的字符串切片和错误  对于一些可能匹配多次的元字符:  *     : 则只会生成匹配 0 次或 1 次的字符串  +     : 则只会生成匹配 1 次或 2 次的字符串  {n,m} : 则会生成匹配 n 次到 m 次的字符串  {n...|
| [regen.GenerateOne](#generateone) |GenerateOne 根据正则表达式生成一个匹配的字符串，返回生成的字符串和错误  |
| [regen.GenerateVisibleOne](#generatevisibleone) |GenerateVisibleOne 根据正则表达式生成一个匹配的字符串(都是可见字符)，返回生成的字符串和错误  |
| [regen.MustGenerate](#mustgenerate) |MustGenerate 根据正则表达式生成所有匹配的字符串，如果生成失败则会崩溃，返回生成的字符串切片  对于一些可能匹配多次的元字符:  *     : 则只会生成匹配 0 次或 1 次的字符串  +     : 则只会生成匹配 1 次或 2 次的字符串  {n,m} : 则会生成匹配 n 次到...|
| [regen.MustGenerateOne](#mustgenerateone) |MustGenerateOne 根据正则表达式生成一个匹配的字符串，如果生成失败则会崩溃，返回生成的字符串  |
| [regen.MustGenerateVisibleOne](#mustgeneratevisibleone) |MustGenerateVisibleOne 根据正则表达式生成一个匹配的字符串(都是可见字符)，如果生成失败则会崩溃，返回生成的字符串  |


## 函数定义
### Generate

#### 详细描述
Generate 根据正则表达式生成所有匹配的字符串，返回生成的字符串切片和错误

对于一些可能匹配多次的元字符:

*     : 则只会生成匹配 0 次或 1 次的字符串

+     : 则只会生成匹配 1 次或 2 次的字符串

{n,m} : 则会生成匹配 n 次到 m 次的字符串

{n,}  : 则只会生成匹配 n 次或 n+1 次的字符串

Example:
```
regen.Generate("[a-z]+") // a-z 单个字母，aa-zz 两个字母
```


#### 定义

`Generate(pattern string) ([]string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pattern | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |
| r2 | `error` |   |


### GenerateOne

#### 详细描述
GenerateOne 根据正则表达式生成一个匹配的字符串，返回生成的字符串和错误

Example:
```
regen.GenerateOne("[a-z]") // a-z 中随机一个字母
regen.GenerateOne("^(13[0-9]|14[57]|15[0-9]|18[0-9])\d{8}$") // 生成一个手机号
```


#### 定义

`GenerateOne(pattern string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pattern | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### GenerateVisibleOne

#### 详细描述
GenerateVisibleOne 根据正则表达式生成一个匹配的字符串(都是可见字符)，返回生成的字符串和错误

Example:
```
regen.GenerateVisibleOne("[a-z]") // a-z 中随机一个字母
regen.GenerateVisibleOne("^(13[0-9]|14[57]|15[0-9]|18[0-9])\d{8}$") // 生成一个手机号
```


#### 定义

`GenerateVisibleOne(pattern string) (string, error)`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pattern | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |
| r2 | `error` |   |


### MustGenerate

#### 详细描述
MustGenerate 根据正则表达式生成所有匹配的字符串，如果生成失败则会崩溃，返回生成的字符串切片

对于一些可能匹配多次的元字符:

*     : 则只会生成匹配 0 次或 1 次的字符串

+     : 则只会生成匹配 1 次或 2 次的字符串

{n,m} : 则会生成匹配 n 次到 m 次的字符串

{n,}  : 则只会生成匹配 n 次或 n+1 次的字符串

Example:
```
regen.MustGenerate("[a-z]+") // a-z 单个字母，aa-zz 两个字母
```


#### 定义

`MustGenerate(pattern string) []string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pattern | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `[]string` |   |


### MustGenerateOne

#### 详细描述
MustGenerateOne 根据正则表达式生成一个匹配的字符串，如果生成失败则会崩溃，返回生成的字符串

Example:
```
regen.MustGenerateOne("[a-z]") // a-z 中随机一个字母
regen.MustGenerateOne("^(13[0-9]|14[57]|15[0-9]|18[0-9])\d{8}$") // 生成一个手机号
```


#### 定义

`MustGenerateOne(pattern string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pattern | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


### MustGenerateVisibleOne

#### 详细描述
MustGenerateVisibleOne 根据正则表达式生成一个匹配的字符串(都是可见字符)，如果生成失败则会崩溃，返回生成的字符串

Example:
```
regen.MustGenerateVisibleOne("[a-z]") // a-z 中随机一个字母
regen.MustGenerateVisibleOne("^(13[0-9]|14[57]|15[0-9]|18[0-9])\d{8}$") // 生成一个手机号
```


#### 定义

`MustGenerateVisibleOne(pattern string) string`

#### 参数
|参数名|参数类型|参数解释|
|:-----------|:---------- |:-----------|
| pattern | `string` |   |

#### 返回值
|返回值(顺序)|返回值类型|返回值解释|
|:-----------|:---------- |:-----------|
| r1 | `string` |   |


