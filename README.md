# aoaoms

这是aoaobaba的博客站点

* 使用vite构建静态站点（包括集成md pages router等）
* 发布在github page，使用自有域名aoaoms.com
* 部署github page 使用deploy from brance （关键：使用[gh-pages ](https://github.com/tschaub/gh-pages "gh-pages")库）
* 关键：添加index.html处理单页路由脚本和404.html

如果使用github page action 部署，可以按照上面第四点添加代码，以解决单页应用路由404问题。

`"deploy": "gh-pages -d dist build --repo https://github.com/aoaoms/blog.git"`
