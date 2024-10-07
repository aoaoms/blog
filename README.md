# aoaoms

20241007

* 国内github pages 无法访问，改用[vercel](https://vercel.com/) 部署站点
* 更新了图片音频制作工具
  * 仅支持配置第三方orc服务（目前仅实现了azure 的服务处理）
  * 自由框定文本或区域
  * 在线音频合成
  * 生成可编程使用的图片音频和框定坐标数据
  * 下载设计资源


---



这是aoaobaba的博客站点

* 使用vite构建静态站点（包括集成md pages router等）
* 发布在github page，使用自有域名aoaoms.com
* 部署github page 使用deploy from branch （关键：使用[gh-pages ](https://github.com/tschaub/gh-pages "gh-pages")库）
* 关键：添加index.html处理单页路由脚本和404.html

如果使用github page action 部署，可以按照上面第四点添加代码，以解决单页应用路由404问题。

`"deploy": "gh-pages -d dist build --repo https://github.com/aoaoms/blog.git"`
