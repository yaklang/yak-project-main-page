---
sidebar_position: 7
---
# Yakit 配合 Proxifier 小程序抓包

## Proxifier 介绍

[Proxifier](https://www.proxifier.com/) 是一款功能强大的网络代理工具，它可以让你将网络应用程序通过代理服务器进行连接。它提供了一个简单而灵活的方式，让你能够将任何应用程序的网络流量路由到指定的代理服务器上，从而实现匿名浏览、绕过网络封锁、访问受限网站等功能。

Proxifier 的工作原理是通过修改操作系统的网络设置，将应用程序的网络连接引导到代理服务器上。它支持多种代理协议，包括HTTP、HTTPS、SOCKS v4和SOCKS v5，可以与各种代理服务器兼容。此外，Proxifier 还支持对代理服务器进行负载均衡，以提高网络连接的速度和稳定性。

Proxifier 具有以下一些主要特点和功能：

 - 应用程序透明代理：Proxifier 可以将选定的应用程序的网络连接路由到代理服务器上，应用程序无需任何修改即可通过代理服务器连接网络。

 - 灵活的代理规则：你可以根据自己的需求设置代理规则，例如，可以根据目标主机、端口号、应用程序名称等条件进行灵活的配置。

 - DNS 解析代理：Proxifier 还支持通过代理服务器解析 DNS 请求，这有助于保护隐私并绕过某些网络限制。

 - 代理链：Proxifier 支持将多个代理服务器链接起来，形成代理链，以增加网络连接的安全性和隐私性。

 - 日志记录和统计：Proxifier 可以记录网络连接的日志信息，并提供统计数据，帮助你了解应用程序的网络使用情况。

总之，Proxifier 是一款功能强大的网络代理工具，可以帮助用户实现匿名浏览、绕过封锁、访问受限网站等目的。它简单易用，同时具有灵活的配置选项，适合各种网络代理需求。

## Proxifier proxy server 配置

**1 启动 Yakit MITM:**

使用前请先安装证书，参考 [Yakit 证书安装](/products/mitm/hijack-configuration#ca证书的安装)。

![](/img/products/yakit/WeChatAppEx-1.png)

点击劫持启动。

**2 Proxifier 添加 proxy server:**

![](/img/products/yakit/WeChatAppEx-2.png)

添加完成后，点击 OK 保存。

**3 Windows 下 Proxifier 添加 Proxification Rules:**

Add 添加一条规则，填写如下:

![](/img/products/yakit/WeChatAppEx-3.png)

注意 Applications 填写 `wechatappex.exe`, Action 选择上一步添加的 proxy server, 点击 OK 保存。

![](/img/products/yakit/WeChatAppEx-4.png)

**4 Mac 下 Proxifier 添加 Proxification Rules:**

Add 添加一条规则,通过`+`按钮点击:

![](/img/products/yakit/WeChatAppEx-5.png)

通过 command+shift+G 打开 `/Applications/WeChat.app/Contents/MacOS` 路径,

![](/img/products/yakit/WeChatAppEx-6.png)

选择 `Mini Program.app` 

> 注意: 新版 Mac 微信小程序的可执行路径发生了变化，可以尝试此路径 `/Applications/WeChat.app/Contents/MacOS/WeChatAppEx.app/Contents/Frameworks/WeChatAppEx Framework.framework/Versions/C/Helpers/WeChatAppEx Helper.app/Contents/MacOS/WeChatAppEx Helper`

![](/img/products/yakit/WeChatAppEx-7.png)

Proxifier 会自动添加完毕。

![](/img/products/yakit/WeChatAppEx-8.png)

或者直接复制 `"Mini Program.app"; "Mini Program"; com.tencent.xinWeChat.MiniProgram` 到 Applications 中。

> 注意: 新版 Mac 微信小程序可以使用 "WeChatAppEx Helper.app"; "WeChatAppEx Helper"; com.tencent.xinWeChat.WeChatAppEx.helper 作为应用程序名称。

![](/img/products/yakit/WeChatAppEx-8.png)

Action 选择上一步中添加的 proxy server, 点击 OK 保存。

**5 开始抓包:**

使用 PC 端微信打开需要的小程序，然后在 Yakit 中查看抓包数据。

![](/img/products/yakit/WeChatAppEx-9.png)

