import{_ as p}from"./Mdtitle-ZRNTwjH_.js";import{b as o}from"./route-block-B_A1xBdJ.js";import{o as l,c as r,a as i,b as a,d as n,e as s}from"./index-DnDR9y1o.js";const u="/assets/mainlayout-BZgwoKfR.png",k="/assets/router-process-logic-DElqTVy5.png",d={class:"markdown-body"},m=a('<h3 id="%E4%B8%BA%E4%BD%95%E5%BC%80%E5%A7%8B" tabindex="-1"><a class="header-anchor" href="#%E4%B8%BA%E4%BD%95%E5%BC%80%E5%A7%8B">#</a> 为何开始</h3><p>  先前的网站使用的是基于vuepress的一个扩展的博客和文档框架, <a href="https://github.com/vuepress-reco/vuepress-theme-reco-1.x">vuepress-theme-reco</a>。</p><p>  最初，我使用了1.x版本；框架集成了很多功能并开箱即用；使用下来，还行吧，中规中矩的文档博客风格。当时觉得，配置有点儿麻烦，文档并不完善细致，有些问题不好得到解决；回忆一下，那也已经是3年前了（2019年），可能作者太忙，维护项目精力有限。当时，耗费了一番精力部署了网站后，一直少有再去折腾。直到2023年底。</p><p>  2023 Ai chat 风靡. 自己花了2个月的时间学习C#语言，写了一个Ai 聊天的混合应用，想着把他的相关介绍放在网站上面，就开始折腾这个站点。折腾前的想法就是想要有一个自由度高，自己能把握开发，风格简单，支持markdown文档的这么一个vue应用。经过，一番搜索后，看到了<a href="https://antfu.me/">antfu</a> 的个人站点。非常喜欢！就是这样的！antfu 不用过多介绍吧，前端VUE生态非常活跃的人才~ 🤭 于是，开始了构建之旅~</p><h3 id="%E6%8A%80%E6%9C%AF%E6%A0%88" tabindex="-1"><a class="header-anchor" href="#%E6%8A%80%E6%9C%AF%E6%A0%88">#</a> 技术栈</h3><table><thead><tr><th style="text-align:left;">框架</th><th style="text-align:left;">功能</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="https://getbootstrap.com/">bootstrap5</a></td><td style="text-align:left;">css ui 框架</td></tr><tr><td style="text-align:left;"><a href="https://cn.vitejs.dev/">vite</a></td><td style="text-align:left;">构建应用</td></tr><tr><td style="text-align:left;"><a href="https://cn.vuejs.org/">vue</a></td><td style="text-align:left;">渐进式js框架</td></tr><tr><td style="text-align:left;"><a href="https://github.com/unplugin/unplugin-vue-markdown">unplugin-vue-markdown</a></td><td style="text-align:left;">vue支持md/md中支持vue component ; 支持md插件</td></tr><tr><td style="text-align:left;"><a href="https://github.com/JohnCampionJr/vite-plugin-vue-layouts">vite-plugin-vue-layouts</a></td><td style="text-align:left;">vue-router 的布局插件，可以分类风格化管理布局</td></tr><tr><td style="text-align:left;"><a href="https://github.com/hannoeru/vite-plugin-pages">vite-plugin-pages</a></td><td style="text-align:left;">基于文件的路由插件 支持md ，动态路由等</td></tr><tr><td style="text-align:left;"><a href="https://github.com/unplugin/unplugin-auto-import">unplugin-auto-import</a></td><td style="text-align:left;">自动导入vue或其他库</td></tr><tr><td style="text-align:left;"><a href="https://github.com/unplugin/unplugin-vue-components">unplugin-vue-components</a></td><td style="text-align:left;">自动导入vue组件 按需引入</td></tr></tbody></table><h3 id="%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95" tabindex="-1"><a class="header-anchor" href="#%E9%A1%B9%E7%9B%AE%E7%9B%AE%E5%BD%95">#</a> 项目目录</h3>',7),y=n("pre",null,[n("code",null,`├─public
│  ├─css
│  └─image
└─src
    ├─assets
    │  ├─css
    │  └─image
    ├─back
    ├─components
    ├─layouts
    ├─pages
       ├─ai
       ├─net
       ├─posts
       └─webfront
`),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1730626443388-19102"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`├─public
│  ├─css
│  └─image
└─src
    ├─assets
    │  ├─css
    │  └─image
    ├─back
    ├─components
    ├─layouts
    ├─pages
       ├─ai
       ├─net
       ├─posts
       └─webfront
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1730626443388-19102","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])],-1),h=a('<p>components： 项目需要的自定义vue组件， 由 unplugin-vue-components/vite 自动导入<br> layouts： 路由布局，依据 vite-plugin-vue-layouts 配置<br> pages： 文章页面文件夹，分类保存了各个markdown文件。md文章路由使用 vite-plugin-pages 配置</p><h3 id="%E5%BC%80%E5%A7%8B%E9%A1%B9%E7%9B%AE" tabindex="-1"><a class="header-anchor" href="#%E5%BC%80%E5%A7%8B%E9%A1%B9%E7%9B%AE">#</a> 开始项目</h3><ol><li>新建Vite 项目，过程略，-- 没有使用typescript</li><li>安装依赖，vue,router,以及需要的vite插件</li><li>配置插件，vite.config.js 基础配置，略 --各插件都使用了默认配置</li></ol><h4 id="main-layout" tabindex="-1"><a class="header-anchor" href="#main-layout">#</a> Main layout</h4><p>  这里图示了文章的主要布局，其他页面例如首页/项目/留言 等等，可以单独在定制.</p><p>Md-toc : md文档目录<br> Content : md文档内容<br> Header: 页头<br> Footer: 页尾</p><img src="'+u+'" width="50%" class="img-thumbnail"><h4 id="router-process-flow" tabindex="-1"><a class="header-anchor" href="#router-process-flow">#</a> Router process flow</h4><img src="'+k+'" width="70%" class="img-thumbnail"><h4 id="vue.config.js" tabindex="-1"><a class="header-anchor" href="#vue.config.js">#</a> vue.config.js</h4>',10),g=n("pre",{class:"language-js"},[n("code",{class:"language-js"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" fileURLToPath"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token constant"},"URL"),s(),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'node:url'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" path"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(" resolve "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'node:path'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token keyword"},"as"),s(" fs "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'node:fs'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" matter "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'gray-matter'"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineConfig "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vite'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" vue "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@vitejs/plugin-vue'"),s(`

`),n("span",{class:"token comment"},"// use auto import com..."),s(`
`),n("span",{class:"token keyword"},"import"),s(" AutoImport "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'unplugin-auto-import/vite'"),s(`
`),n("span",{class:"token comment"},"// use auto import user components th..."),s(`
`),n("span",{class:"token keyword"},"import"),s(" Components "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'unplugin-vue-components/vite'"),s(`

`),n("span",{class:"token comment"},"// file route config need's"),s(`
`),n("span",{class:"token keyword"},"import"),s(" VitePages "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"vite-plugin-pages"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// https://github.com/JohnCampionJr/vite-plugin-vue-layouts"),s(`
`),n("span",{class:"token keyword"},"import"),s(" Layouts "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vite-plugin-vue-layouts'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// https://github.com/unplugin/unplugin-vue-markdown"),s(`
`),n("span",{class:"token keyword"},"import"),s(" Markdown "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'unplugin-vue-markdown/vite'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" MarkdownItAnchor "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'markdown-it-anchor'"),s(`
`),n("span",{class:"token keyword"},"import"),s(" MarkdownItPrism "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'markdown-it-prism'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" full "),n("span",{class:"token keyword"},"as"),s(" emoji "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'markdown-it-emoji'"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" demo "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@mdit/plugin-demo"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" attrs "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@mdit/plugin-attrs"'),s(`

`),n("span",{class:"token comment"},"// "),s(`
`),n("span",{class:"token keyword"},"import"),s(" MarkdownItCopy "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'markdown-it-copy'"),s(`

`),n("span",{class:"token comment"},"// https://vitejs.dev/config/"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineConfig"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// ssgOptions: {"),s(`
  `),n("span",{class:"token comment"},"//   format: 'cjs',"),s(`
  `),n("span",{class:"token comment"},"// },"),s(`
  `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
    `),n("span",{class:"token function"},"vue"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"include"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.vue$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.md$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"Markdown"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// headEnabled: true,"),s(`
      `),n("span",{class:"token comment"},"// default options passed to markdown-it"),s(`
      `),n("span",{class:"token comment"},"// see: https://markdown-it.github.io/markdown-it/"),s(`
      `),n("span",{class:"token literal-property property"},"markdownItOptions"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"breaks"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"typographer"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"// A function providing the Markdown It instance gets the ability to apply custom settings/plugins"),s(`
      `),n("span",{class:"token function"},"markdownItSetup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"md"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// for example"),s(`
        md`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("MarkdownItAnchor"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token comment"},"// permalink: MarkdownItAnchor.permalink[]"),s(`
          `),n("span",{class:"token literal-property property"},"permalink"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"permalinkSymbol"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"permalinkBefore"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
          md`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("attrs"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
          md`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("MarkdownItPrism"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"highlightInlineCode"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"plugins"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'copy-to-clipboard'"),n("span",{class:"token punctuation"},"]"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
          md`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("MarkdownItCopy"),n("span",{class:"token punctuation"},","),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
          md`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("emoji"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"shortcuts"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token string-property property"},'"sm"'),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"':-)'"),n("span",{class:"token punctuation"},"]"),s(`
            `),n("span",{class:"token punctuation"},"}"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
          md`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("demo"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token comment"},"// md.use(MarkdownItTocDoneRight)"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"AutoImport"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"imports"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'vue-router'"),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"Components"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// relative paths to the directory to search for components."),s(`
      `),n("span",{class:"token literal-property property"},"dirs"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'src/components'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`

      `),n("span",{class:"token comment"},"// valid file extensions for components."),s(`
      `),n("span",{class:"token literal-property property"},"extensions"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'md'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"// filters for transforming targets"),s(`
      `),n("span",{class:"token literal-property property"},"include"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.vue$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.vue\\?vue"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"\\.md$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"VitePages"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"extensions"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"vue"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"md"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"pagesDir"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"src/pages"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"exclude"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'**/components/*.vue'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token comment"},"// add each md's frontmatter to correspondly route's meta"),s(`
      `),n("span",{class:"token function"},"extendRoute"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"route"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"const"),s(" path "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("__dirname"),n("span",{class:"token punctuation"},","),s(" route"),n("span",{class:"token punctuation"},"."),s("component"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"const"),s(" md "),n("span",{class:"token operator"},"="),s(" fs"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"readFileSync"),n("span",{class:"token punctuation"},"("),s("path"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"utf-8"'),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" data "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"matter"),n("span",{class:"token punctuation"},"("),s("md"),n("span",{class:"token punctuation"},")"),s(`
        route`),n("span",{class:"token punctuation"},"."),s("meta "),n("span",{class:"token operator"},"="),s(" Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"assign"),n("span",{class:"token punctuation"},"("),s("route"),n("span",{class:"token punctuation"},"."),s("meta "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"frontmatter"),n("span",{class:"token operator"},":"),s(" data "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

        `),n("span",{class:"token keyword"},"return"),s(` route
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token function"},"onRoutesGenerated"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"routes"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`   
        `),n("span",{class:"token keyword"},"let"),s(" rBlog "),n("span",{class:"token operator"},"="),s(" routes"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"find"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"r"),s(),n("span",{class:"token operator"},"=>"),s(" r"),n("span",{class:"token punctuation"},"."),s("name "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'blog'"),s(),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token comment"},"// unincludes 'blog' route and 'all' route and 'index' route"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" tabs "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token comment"},"// limit which folder can be process"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" tabsFolder "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'posts'"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"'ai'"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"'webfront'"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"'net'"),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"const"),s(" route "),n("span",{class:"token keyword"},"of"),s(" routes"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"r"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token operator"},"!"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'index'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'all'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'blog'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),s("r"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token comment"},"// build blog's tabs data"),s(`
          `),n("span",{class:"token keyword"},"let"),s(" tab "),n("span",{class:"token operator"},"="),s(" route"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" route"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'-'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
          `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("tabs"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasOwnProperty"),n("span",{class:"token punctuation"},"("),s("tab"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
              tabs`),n("span",{class:"token punctuation"},"["),s("tab"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
          `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("tabsFolder"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),s("tab"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
            tabs`),n("span",{class:"token punctuation"},"["),s("tab"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
              `),n("span",{class:"token operator"},"..."),s(`route
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        rBlog`),n("span",{class:"token punctuation"},"."),s("meta "),n("span",{class:"token operator"},"="),s(" Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"assign"),n("span",{class:"token punctuation"},"("),s("rBlog"),n("span",{class:"token punctuation"},"."),s("meta "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"tabs"),n("span",{class:"token operator"},":"),s(" tabs "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token function"},"Layouts"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"resolve"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"alias"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token string-property property"},"'@'"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"fileURLToPath"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"URL"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'./src'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"import"),n("span",{class:"token punctuation"},"."),s("meta"),n("span",{class:"token punctuation"},"."),s("url"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"build"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// get smaller bundle file"),s(`
    `),n("span",{class:"token literal-property property"},"minify"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'terser'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token comment"},"// use esbuild to drop console command before build proj"),s(`
  `),n("span",{class:"token comment"},"// https://esbuild.github.io/api/#drop"),s(`
  `),n("span",{class:"token literal-property property"},"esbuild"),n("span",{class:"token operator"},":"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"drop"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'console'"),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1730626443388-55543"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`import { fileURLToPath, URL } from 'node:url'
import path, { resolve } from 'node:path'
import * as fs from 'node:fs'
import matter from 'gray-matter'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// use auto import com...
import AutoImport from 'unplugin-auto-import/vite'
// use auto import user components th...
import Components from 'unplugin-vue-components/vite'

// file route config need's
import VitePages from "vite-plugin-pages";

// https://github.com/JohnCampionJr/vite-plugin-vue-layouts
import Layouts from 'vite-plugin-vue-layouts';

// https://github.com/unplugin/unplugin-vue-markdown
import Markdown from 'unplugin-vue-markdown/vite'
import MarkdownItAnchor from 'markdown-it-anchor'
import MarkdownItPrism from 'markdown-it-prism'
import { full as emoji } from 'markdown-it-emoji'
import { demo } from "@mdit/plugin-demo";
import { attrs } from "@mdit/plugin-attrs"

// 
import MarkdownItCopy from 'markdown-it-copy'

// https://vitejs.dev/config/
export default defineConfig({
  // ssgOptions: {
  //   format: 'cjs',
  // },
  plugins: [
    vue({
      include: [/\\.vue$/, /\\.md$/]
    }),
    Markdown({
      // headEnabled: true,
      // default options passed to markdown-it
      // see: https://markdown-it.github.io/markdown-it/
      markdownItOptions: {
        breaks: true,
        typographer: true,
      },
      // A function providing the Markdown It instance gets the ability to apply custom settings/plugins
      markdownItSetup(md) {
        // for example
        md.use(MarkdownItAnchor, {
          // permalink: MarkdownItAnchor.permalink[]
          permalink: true,
          permalinkSymbol: '#',
          permalinkBefore: true
        }),
          md.use(attrs),
          md.use(MarkdownItPrism, {
            highlightInlineCode: true,
            plugins: ['copy-to-clipboard']
          }),
          md.use(MarkdownItCopy,),
          md.use(emoji, {
            shortcuts: {
              "sm": [':-)']
            }
          }),
          md.use(demo)
        // md.use(MarkdownItTocDoneRight)
      },
    }),
    AutoImport({
      imports: ['vue', 'vue-router']
    }),
    Components({
      // relative paths to the directory to search for components.
      dirs: ['src/components'],

      // valid file extensions for components.
      extensions: ['vue', 'md'],
      // filters for transforming targets
      include: [/\\.vue$/, /\\.vue\\?vue/, /\\.md$/],
    }),
    VitePages({
      extensions: ["vue", "md"],
      pagesDir: "src/pages",
      exclude: ['**/components/*.vue'],
      // add each md's frontmatter to correspondly route's meta
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1))
        const md = fs.readFileSync(path, "utf-8")
        const { data } = matter(md)
        route.meta = Object.assign(route.meta || {}, { frontmatter: data })

        return route
      },
      onRoutesGenerated(routes) {   
        let rBlog = routes.find(r => r.name === 'blog' )
        // unincludes 'blog' route and 'all' route and 'index' route
        let tabs = {}
        // limit which folder can be process
        let tabsFolder = ['posts','ai','webfront','net']
        for (const route of routes.filter(r => !['index', 'all', 'blog'].includes(r.name)))) {
          // build blog's tabs data
          let tab = route.name.slice(0, route.name.indexOf('-'))
          if (!tabs.hasOwnProperty(tab))
              tabs[tab] = []
          if (tabsFolder.includes(tab))
            tabs[tab].push({
              ...route
            })
        }
        rBlog.meta = Object.assign(rBlog.meta || {}, { tabs: tabs })
      },
    }),
    Layouts()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    // get smaller bundle file
    minify: 'terser',
  },
  // use esbuild to drop console command before build proj
  // https://esbuild.github.io/api/#drop
  esbuild:{
    drop: ['console']
  }
})
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1730626443388-55543","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])],-1),f=n("h4",{id:"main.js",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#main.js"},"#"),s(" main.js")],-1),b=n("pre",{class:"language-javascript"},[n("code",{class:"language-javascript"},[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'@/assets/css/main.css'"),s(`

`),n("span",{class:"token comment"},"// import { createApp } from 'vue'"),s(`
`),n("span",{class:"token comment"},"// import { createPinia } from 'pinia'"),s(`

`),n("span",{class:"token keyword"},"import"),s(" App "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'./App.vue'"),s(`
`),n("span",{class:"token comment"},"// import router from './router'"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createRouter"),n("span",{class:"token punctuation"},","),s(" createWebHistory "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue-router'"),s(`
`),n("span",{class:"token comment"},"// vite-plugin-pages 生成的路由信息"),s(`
`),n("span",{class:"token keyword"},"import"),s(" routes "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"pages-generated"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" setupLayouts "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'virtual:generated-layouts'"),s(`

`),n("span",{class:"token comment"},"// bootstrap color mod"),s(`
`),n("span",{class:"token keyword"},"const"),s(" theme "),n("span",{class:"token operator"},"="),s(" localStorage"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getItem"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'theme'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("theme"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    document`),n("span",{class:"token punctuation"},"."),s("documentElement"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setAttribute"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'data-bs-theme'"),n("span",{class:"token punctuation"},","),s(" theme"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
    localStorage`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setItem"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'theme'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'light'"),n("span",{class:"token punctuation"},")"),s(`
    document`),n("span",{class:"token punctuation"},"."),s("documentElement"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setAttribute"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'data-bs-theme'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'light'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(" layoutRoutes "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"setupLayouts"),n("span",{class:"token punctuation"},"("),s("routes"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" app "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createApp"),n("span",{class:"token punctuation"},"("),s("App"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// fromat date from md's frontmatter i.e. 22024-02-22 note: not with quote mark"),s(`
app`),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),s("globalProperties"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"$fromatDateFromMdMatter"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"date"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" time "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),s("date"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" time"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toUTCString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// app.use(createPinia())"),s(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"createRouter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"history"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token function"},"createWebHistory"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"routes"),n("span",{class:"token operator"},":"),s(" layoutRoutes"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("routes"),n("span",{class:"token punctuation"},")"),s(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"mount"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'#app'"),n("span",{class:"token punctuation"},")"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1730626443404-85631"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`import '@/assets/css/main.css'

// import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
// import router from './router'

import { createRouter, createWebHistory } from 'vue-router'
// vite-plugin-pages 生成的路由信息
import routes from "pages-generated";

import { setupLayouts } from 'virtual:generated-layouts'

// bootstrap color mod
const theme = localStorage.getItem('theme')
if (theme){
    document.documentElement.setAttribute('data-bs-theme', theme)
} else {
    localStorage.setItem('theme', 'light')
    document.documentElement.setAttribute('data-bs-theme', 'light')
}

const layoutRoutes = setupLayouts(routes)
const app = createApp(App)

// fromat date from md's frontmatter i.e. 22024-02-22 note: not with quote mark
app.config.globalProperties.$fromatDateFromMdMatter = (date) =>{
    let time = new Date(new Date(date).getTime())
    return time.toUTCString()
}

// app.use(createPinia())
app.use(createRouter({
    history: createWebHistory(),
    routes: layoutRoutes,
}))
console.log(routes)
app.mount('#app')
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1730626443404-85631","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])],-1),v=n("h4",{id:"cdn%E8%B5%84%E6%BA%90%E5%BC%95%E5%85%A5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cdn%E8%B5%84%E6%BA%90%E5%BC%95%E5%85%A5"},"#"),s(" cdn资源引入")],-1),w=n("p",null,[s("站点使用了"),n("a",{href:"https://www.bootcdn.cn/"},"boot cdn"),s(" 用来引入bootstrap5，animate.css 和其他三方js功能库, 在index.html 头部引入：")],-1),x=n("pre",{class:"language-html"},[n("code",{class:"language-html"},[s("  "),n("span",{class:"token comment"},"<!-- use bootstrap -->"),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("link")]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.3.1/css/bootstrap.min.css"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("stylesheet"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.3.1/js/bootstrap.bundle.js"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"}),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token comment"},'<!-- <link href="https://cdn.bootcdn.net/ajax/libs/bootstrap-icons/1.11.0/font/bootstrap-icons.min.css" rel="stylesheet"> -->'),s(`

  `),n("span",{class:"token comment"},"<!-- use animate.css  -->"),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("link")]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.min.css"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("stylesheet"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token comment"},"<!-- use date js -->"),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://cdn.bootcdn.net/ajax/libs/datejs/1.0/date.min.js"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"}),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

  `),n("span",{class:"token comment"},"<!-- github markdown css -->"),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("link")]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://cdn.bootcdn.net/ajax/libs/github-markdown-css/5.2.0/github-markdown.min.css"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("stylesheet"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token comment"},"<!-- use prism theme vs css 代码高亮 -->"),s(`
  `),n("span",{class:"token comment"},'<!-- <link href="https://cdn.bootcdn.net/ajax/libs/prism-themes/1.9.0/prism-vs.min.css" rel="stylesheet"> -->'),s(`
  `),n("span",{class:"token comment"},"<!-- 黑色主题 代码高亮 -->"),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("link")]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("https://cdn.bootcdn.net/ajax/libs/prism-themes/1.9.0/prism-vsc-dark-plus.min.css"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("stylesheet"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`

`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1730626443405-80083"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`  <!-- use bootstrap -->
  <link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.3.1/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.3.1/js/bootstrap.bundle.js"><\/script>
  <!-- <link href="https://cdn.bootcdn.net/ajax/libs/bootstrap-icons/1.11.0/font/bootstrap-icons.min.css" rel="stylesheet"> -->

  <!-- use animate.css  -->
  <link href="https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet">
  <!-- use date js -->
  <script src="https://cdn.bootcdn.net/ajax/libs/datejs/1.0/date.min.js"><\/script>

  <!-- github markdown css -->
  <link href="https://cdn.bootcdn.net/ajax/libs/github-markdown-css/5.2.0/github-markdown.min.css" rel="stylesheet">
  <!-- use prism theme vs css 代码高亮 -->
  <!-- <link href="https://cdn.bootcdn.net/ajax/libs/prism-themes/1.9.0/prism-vs.min.css" rel="stylesheet"> -->
  <!-- 黑色主题 代码高亮 -->
  <link href="https://cdn.bootcdn.net/ajax/libs/prism-themes/1.9.0/prism-vsc-dark-plus.min.css" rel="stylesheet">

`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1730626443405-80083","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])],-1),C=n("h3",{id:"%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6"},"#"),s(" 基础组件")],-1),E=n("p",null,"准备一些网站基础布局组件，例如header, footer, backtotop等",-1),A=n("h4",{id:"header%E7%BB%84%E4%BB%B6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#header%E7%BB%84%E4%BB%B6"},"#"),s(" Header组件")],-1),B=n("pre",{class:"language-js"},[n("code",{class:"language-js"},[n("span",{class:"token operator"},"<"),s("template"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"--"),s(" nav bar "),n("span",{class:"token operator"},"&"),s(" menu "),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token operator"},"<"),s("nav "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"navbar navbar-expand-md bg-body-tertiary bg-opacity-10"'),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),s("div "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"container-sm"'),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("a "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"navbar-brand"'),s(" href"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"/"'),n("span",{class:"token operator"},">"),s("aoaoms"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("a"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("div "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"collapse navbar-collapse me-3"'),s(" id"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"navbarNav"'),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),s("div "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"d-flex justify-content-end w-100"'),n("span",{class:"token operator"},">"),s(`
          `),n("span",{class:"token operator"},"<"),s("ul "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"navbar-nav"'),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),s("li "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"nav-item"'),n("span",{class:"token operator"},">"),s(`
              `),n("span",{class:"token operator"},"<"),s("a "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"nav-link"'),s(" aria"),n("span",{class:"token operator"},"-"),s("current"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"page"'),s(" href"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"/blog"'),n("span",{class:"token operator"},">"),s("博客"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("a"),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("li"),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),s("li "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"nav-item"'),n("span",{class:"token operator"},">"),s(`
              `),n("span",{class:"token operator"},"<"),s("a "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"nav-link"'),s(" aria"),n("span",{class:"token operator"},"-"),s("current"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"page"'),s(" href"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"#"'),n("span",{class:"token operator"},">"),s("项目"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("a"),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("li"),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),s("li "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"nav-item"'),n("span",{class:"token operator"},">"),s(`
              `),n("span",{class:"token operator"},"<"),s("a "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"nav-link"'),s(" aria"),n("span",{class:"token operator"},"-"),s("current"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"page"'),s(" href"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"#"'),n("span",{class:"token operator"},">"),s("留言"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("a"),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("li"),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),s("li "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"nav-item"'),n("span",{class:"token operator"},">"),s(`
              `),n("span",{class:"token operator"},"<"),s("a "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"nav-link"'),s(" aria"),n("span",{class:"token operator"},"-"),s("current"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"page"'),s(" href"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"#"'),n("span",{class:"token operator"},">"),s("关于"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("a"),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("li"),n("span",{class:"token operator"},">"),s(`
          `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("ul"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),s("div "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"d-flex justify-content-end hstack gap-3"'),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"--"),s(" blog "),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),s("a "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"icon-link d-md-none"'),s(" href"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"#"'),n("span",{class:"token operator"},">"),s(`
          `),n("span",{class:"token operator"},"<"),s("svg xmlns"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"http://www.w3.org/2000/svg"'),s(" width"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"16"'),s(" height"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"16"'),s(" fill"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"currentColor"'),s(`
            `),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"bi bi-file-earmark-text"'),s(" viewBox"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"0 0 16 16"'),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),s(`path
              d`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"'),s(),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),s(`path
              d`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"'),s(),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
          `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("svg"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("a"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"--"),s(" project "),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),s("a "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"icon-link d-md-none"'),s(" href"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"#"'),n("span",{class:"token operator"},">"),s(`
          `),n("span",{class:"token operator"},"<"),s("svg xmlns"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"http://www.w3.org/2000/svg"'),s(" width"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"16"'),s(" height"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"16"'),s(" fill"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"currentColor"'),s(),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"bi bi-lightbulb"'),s(`
            viewBox`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"0 0 16 16"'),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),s(`path
              d`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"'),s(),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
          `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("svg"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("a"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"--"),s(" message "),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),s("a "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"icon-link d-md-none"'),s(" href"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"#"'),n("span",{class:"token operator"},">"),s(`
          `),n("span",{class:"token operator"},"<"),s("svg xmlns"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"http://www.w3.org/2000/svg"'),s(" width"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"16"'),s(" height"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"16"'),s(" fill"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"currentColor"'),s(),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"bi bi-chat"'),s(`
            viewBox`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"0 0 16 16"'),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),s(`path
              d`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"'),s(),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
          `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("svg"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("a"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"--"),s(" toggle dark or light "),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),s("a "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"icon-link"'),s(" href"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"#"'),n("span",{class:"token operator"},">"),s(`
          `),n("span",{class:"token operator"},"<"),s("svg xmlns"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"http://www.w3.org/2000/svg"'),s(" width"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"16"'),s(" height"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"16"'),s(" fill"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"currentColor"'),s(`
            `),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"bi bi-brightness-high"'),s(" viewBox"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"0 0 16 16"'),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),s(`path
              d`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"'),s(),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
          `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("svg"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("a"),n("span",{class:"token operator"},">"),s(`
      `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),s(`
  `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("nav"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("template"),n("span",{class:"token operator"},">"),s(`

`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1730626443411-38565"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<template>
  <!-- nav bar & menu -->
  <nav class="navbar navbar-expand-md bg-body-tertiary bg-opacity-10">
    <div class="container-sm">
      <a class="navbar-brand" href="/">aoaoms</a>
      <div class="collapse navbar-collapse me-3" id="navbarNav">
        <div class="d-flex justify-content-end w-100">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/blog">博客</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">项目</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">留言</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">关于</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="d-flex justify-content-end hstack gap-3">
        <!-- blog -->
        <a class="icon-link d-md-none" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-file-earmark-text" viewBox="0 0 16 16">
            <path
              d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
            <path
              d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
          </svg>
        </a>
        <!-- project -->
        <a class="icon-link d-md-none" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb"
            viewBox="0 0 16 16">
            <path
              d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1" />
          </svg>
        </a>
        <!-- message -->
        <a class="icon-link d-md-none" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat"
            viewBox="0 0 16 16">
            <path
              d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
          </svg>
        </a>
        <!-- toggle dark or light -->
        <a class="icon-link" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-brightness-high" viewBox="0 0 16 16">
            <path
              d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
          </svg>
        </a>
      </div>
    </div>
  </nav>
</template>

`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1730626443411-38565","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])],-1),_=n("h4",{id:"footer%E7%BB%84%E4%BB%B6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#footer%E7%BB%84%E4%BB%B6"},"#"),s(" Footer组件")],-1),j=n("pre",{class:"language-js"},[n("code",{class:"language-js"},[n("span",{class:"token operator"},"<"),s("template"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),s("div "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"w-100 text-center py-3 mt-5"'),s(" style"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"font-size: 13PX;"'),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),s("p "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"d-inline-block"'),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),s("a role"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"button"'),s(),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'""'),s(" href"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"https://creativecommons.org/licenses/by-sa/4.0/"'),s(" target"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"_blank"'),n("span",{class:"token operator"},">"),n("span",{class:"token constant"},"CC"),s(),n("span",{class:"token constant"},"BY"),n("span",{class:"token operator"},"-"),n("span",{class:"token constant"},"NC"),n("span",{class:"token operator"},"-"),n("span",{class:"token constant"},"SA"),s(),n("span",{class:"token number"},"4.0"),s(),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("a"),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token number"},"2024"),n("span",{class:"token operator"},"-"),n("span",{class:"token constant"},"PRESENT"),s(" © "),n("span",{class:"token constant"},"AOAOMS"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"COM"),s(`
        `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("p"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("template"),n("span",{class:"token operator"},">"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1730626443412-71286"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<template>
    <div class="w-100 text-center py-3 mt-5" style="font-size: 13PX;">
        <p class="d-inline-block">
            <a role="button" class="" href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank">CC BY-NC-SA 4.0 </a>
            2024-PRESENT © AOAOMS.COM
        </p>
    </div>
</template>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1730626443412-71286","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])],-1),I=n("h4",{id:"backtotop-%E7%BB%84%E4%BB%B6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#backtotop-%E7%BB%84%E4%BB%B6"},"#"),s(" BackToTop 组件")],-1),N=n("pre",{class:"language-js"},[n("code",{class:"language-js"},[n("span",{class:"token operator"},"<"),s("script setup"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token keyword"},"const"),s(" isVisible "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    window`),n("span",{class:"token punctuation"},"."),s("document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"scroll"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),s(`
        isVisible`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(" window"),n("span",{class:"token punctuation"},"."),s("scrollY "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"120"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"backToTop"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    document`),n("span",{class:"token punctuation"},"."),s("body"),n("span",{class:"token punctuation"},"."),s("scrollTop "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
    document`),n("span",{class:"token punctuation"},"."),s("documentElement"),n("span",{class:"token punctuation"},"."),s("scrollTop "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("script"),n("span",{class:"token operator"},">"),s(`

`),n("span",{class:"token operator"},"<"),s("template"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"--"),s(" Back to top button "),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),s("button v"),n("span",{class:"token operator"},"-"),n("span",{class:"token keyword"},"if"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"isVisible"'),s(" type"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"button"'),s(),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"btn btn-lg bbtt"'),s(" id"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"btn-back-to-top"'),s(" @click"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"backToTop"'),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),s("svg xmlns"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"http://www.w3.org/2000/svg"'),s(" width"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"16"'),s(" height"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"16"'),s(" fill"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"currentColor"'),s(),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"bi bi-arrow-up fs-2"'),s(`
            viewBox`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"0 0 16 16"'),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),s("path fill"),n("span",{class:"token operator"},"-"),s("rule"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"evenodd"'),s(`
                d`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"'),s(),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("svg"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("button"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("template"),n("span",{class:"token operator"},">"),s(`

`),n("span",{class:"token operator"},"<"),s("style scoped"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token comment"},"/* 滚动到顶部 */"),s(`
`),n("span",{class:"token punctuation"},"."),s("bbtt "),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"position"),n("span",{class:"token operator"},":"),s(" fixed"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token literal-property property"},"bottom"),n("span",{class:"token operator"},":"),s(" 40px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token literal-property property"},"right"),n("span",{class:"token operator"},":"),s(" 30px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("style"),n("span",{class:"token operator"},">"),s(`

`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1730626443413-71451"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<script setup>
const isVisible = ref(false)

onMounted(() => {
    window.document.addEventListener("scroll", (e) =>{
        isVisible.value = window.scrollY >= 120
    })
})

const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
<\/script>

<template>
    <!-- Back to top button -->
    <button v-if="isVisible" type="button" class="btn btn-lg bbtt" id="btn-back-to-top" @click="backToTop">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up fs-2"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
        </svg>
    </button>
</template>

<style scoped>
/* 滚动到顶部 */
.bbtt {
    position: fixed;
    bottom: 40px;
    right: 30px;
}
</style>

`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1730626443413-71451","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])],-1),T=n("h4",{id:"%E8%87%AA%E5%88%B6md-toc",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#%E8%87%AA%E5%88%B6md-toc"},"#"),s(" 自制Md Toc")],-1),P=n("p",null,"浅薄了哈，今天有点儿时间整整这个自动toc, 直接在toc组件里面注册onMounted 获取md 文档的h标签和a标签的数据，整理成目录列表。简单实用，可能没那么优雅~",-1),M=n("p",null,"获取文档h标签和link信息",-1),$=n("pre",{class:"language-js"},[n("code",{class:"language-js"},[n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"const"),s(" h "),n("span",{class:"token keyword"},"of"),s(" window"),n("span",{class:"token punctuation"},"."),s("document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"app"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelectorAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'h3, h4'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    toc`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"parentId"),n("span",{class:"token operator"},":"),s(" h"),n("span",{class:"token punctuation"},"."),s("tagName "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'H3'"),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"textContent"),n("span",{class:"token operator"},":"),s(" h"),n("span",{class:"token punctuation"},"."),s("textContent"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replaceAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'# '"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1730626443413-95722"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`for (const h of window.document.getElementById("app").querySelectorAll('h3, h4')) {
    toc.push({
        parentId: h.tagName === 'H3'? 0 : 1,
        textContent: h.textContent.replaceAll('# ','')
    })
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1730626443413-95722","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])],-1),F=n("p",null,"生成目录",-1),D=n("pre",{class:"language-html"},[n("code",{class:"language-html"},[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ul")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("markdown-body nav d-flex flex-column animate__animated"),n("span",{class:"token punctuation"},'"')]),s("  "),n("span",{class:"token attr-name"},":class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("animateClass"),n("span",{class:"token punctuation"},'"')]),s(`
                `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 13px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("li")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("nav-item"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("item in toc"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`                
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("item.parentId == 0"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("cursor-hover py-1 ps-0"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},"'"),s("#' + item.textContent.replaceAll(' ','-')"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("{{ item.textContent }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("a")]),s(),n("span",{class:"token attr-name"},"v-else"),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("cursor-hover py-1 ps-0 ms-4 "),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},"'"),s("#' + item.textContent.replaceAll(' ','-')"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
            {{ item.textContent }}              
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("a")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("li")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("ul")]),n("span",{class:"token punctuation"},">")]),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1730626443414-31796"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<ul class="markdown-body nav d-flex flex-column animate__animated"  :class="animateClass"
                style="font-size: 13px;">
    <li class="nav-item" v-for="item in toc" :key="item">                
        <a v-if="item.parentId == 0" class="cursor-hover py-1 ps-0" :href="'#' + item.textContent.replaceAll(' ','-')">{{ item.textContent }}</a>
        <a v-else class="cursor-hover py-1 ps-0 ms-4 " :href="'#' + item.textContent.replaceAll(' ','-')">
            {{ item.textContent }}              
        </a>
    </li>
</ul>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1730626443414-31796","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])],-1),H=n("p",null,[s("为何单独写一个toc组件？ 为了后期丰富组件内容。"),n("br"),s(" 维护仅获取h3 h4标签？ 我就用了这H1,H3和H4。H1不处理。H1 后面可以做SEO"),n("br"),s(" 自制toc 仅处理到2级目录，更多级没必要 也不美观！实际效果类似anthonyFu 的，细致处需要精雕~ 😄")],-1),R=n("details",null,[n("summary",null,"完整的Toc 组件"),n("pre",{class:"language-js"},[n("code",{class:"language-js"},[n("span",{class:"token operator"},"<"),s("script setup"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token keyword"},"const"),s(" toc "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(" showPageNav "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" animateClass "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'animate__fadeIn'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"leavePageNav"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("showPageNav"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        animateClass`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'animate__fadeOut'"),s(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            showPageNav`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1500"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"enterPageNav"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("showPageNav"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        animateClass`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'animate__fadeIn'"),s(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            showPageNav`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// 公开方法用于文档组件调用 鼠标移入移出显示或隐藏toc"),s(`
`),n("span",{class:"token function"},"defineExpose"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    leavePageNav`),n("span",{class:"token punctuation"},","),s(` enterPageNav
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"const"),s(" h "),n("span",{class:"token keyword"},"of"),s(" window"),n("span",{class:"token punctuation"},"."),s("document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"app"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelectorAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'h3, h4'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        toc`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"parentId"),n("span",{class:"token operator"},":"),s(" h"),n("span",{class:"token punctuation"},"."),s("tagName "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'H3'"),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"textContent"),n("span",{class:"token operator"},":"),s(" h"),n("span",{class:"token punctuation"},"."),s("textContent"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replaceAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'# '"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("script"),n("span",{class:"token operator"},">"),s(`

`),n("span",{class:"token operator"},"<"),s("template"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"--"),s(" nav bar "),n("span",{class:"token operator"},"&"),s(" menu "),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),s("div "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"mt-2 d-none d-md-block position-fixed"'),s(" v"),n("span",{class:"token operator"},"-"),n("span",{class:"token keyword"},"if"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"toc"'),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),s("div"),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),s("svg xmlns"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"http://www.w3.org/2000/svg"'),s(" width"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"22"'),s(" height"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"22"'),s(" fill"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"currentColor"'),s(),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"bi bi-list"'),s(`
                viewBox`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"0 0 16 16"'),n("span",{class:"token operator"},">"),s(`
                `),n("span",{class:"token operator"},"<"),s("path fill"),n("span",{class:"token operator"},"-"),s("rule"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"evenodd"'),s(`
                    d`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"'),s(),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("svg"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),s("div v"),n("span",{class:"token operator"},"-"),n("span",{class:"token keyword"},"if"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"showPageNav"'),s(),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"mt-2 overflow-auto"'),s(" style"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"height: 70vh;width: 20vw;"'),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),s("ul "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"markdown-body nav d-flex flex-column animate__animated"'),s("  "),n("span",{class:"token operator"},":"),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"animateClass"'),s(`
                style`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"font-size: 13px;"'),n("span",{class:"token operator"},">"),s(`
                `),n("span",{class:"token operator"},"<"),s("li "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"nav-item"'),s(" v"),n("span",{class:"token operator"},"-"),n("span",{class:"token keyword"},"for"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"item in toc"'),s(),n("span",{class:"token operator"},":"),s("key"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"item"'),n("span",{class:"token operator"},">"),s(`                
                    `),n("span",{class:"token operator"},"<"),s("a v"),n("span",{class:"token operator"},"-"),n("span",{class:"token keyword"},"if"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"item.parentId == 0"'),s(),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"cursor-hover py-1 ps-0"'),s(),n("span",{class:"token operator"},":"),s("href"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},`"'#' + item.textContent.replaceAll(' ','-')"`),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s(" item"),n("span",{class:"token punctuation"},"."),s("textContent "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("a"),n("span",{class:"token operator"},">"),s(`
                    `),n("span",{class:"token operator"},"<"),s("a v"),n("span",{class:"token operator"},"-"),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"cursor-hover py-1 ps-0 ms-4 "'),s(),n("span",{class:"token operator"},":"),s("href"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},`"'#' + item.textContent.replaceAll(' ','-')"`),n("span",{class:"token operator"},">"),s(`
                        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s(" item"),n("span",{class:"token punctuation"},"."),s("textContent "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),s(`              
                    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("a"),n("span",{class:"token operator"},">"),s(`
                `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("li"),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("ul"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),s(`    
    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("template"),n("span",{class:"token operator"},">"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1730626443418-7304"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<script setup>
const toc = reactive([])

const showPageNav = ref(true)
const animateClass = ref('animate__fadeIn')
const leavePageNav = () => {
    if (showPageNav.value) {
        animateClass.value = 'animate__fadeOut'
        setTimeout(() => {
            showPageNav.value = false
        }, 1500);
    }
}

const enterPageNav = () => {
    if (!showPageNav.value) {
        animateClass.value = 'animate__fadeIn'
        setTimeout(() => {
            showPageNav.value = true
        }, 300);
    }
}
// 公开方法用于文档组件调用 鼠标移入移出显示或隐藏toc
defineExpose({
    leavePageNav, enterPageNav
})

onMounted(() => {
    for (const h of window.document.getElementById("app").querySelectorAll('h3, h4')) {
        toc.push({
            parentId: h.tagName === 'H3'? 0 : 1,
            textContent: h.textContent.replaceAll('# ','')
        })
    }
})
<\/script>

<template>
    <!-- nav bar & menu -->
    <div class="mt-2 d-none d-md-block position-fixed" v-if="toc">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-list"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
        </div>
        <div v-if="showPageNav" class="mt-2 overflow-auto" style="height: 70vh;width: 20vw;">
            <ul class="markdown-body nav d-flex flex-column animate__animated"  :class="animateClass"
                style="font-size: 13px;">
                <li class="nav-item" v-for="item in toc" :key="item">                
                    <a v-if="item.parentId == 0" class="cursor-hover py-1 ps-0" :href="'#' + item.textContent.replaceAll(' ','-')">{{ item.textContent }}</a>
                    <a v-else class="cursor-hover py-1 ps-0 ms-4 " :href="'#' + item.textContent.replaceAll(' ','-')">
                        {{ item.textContent }}              
                    </a>
                </li>
            </ul>
        </div>    
    </div>
</template>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1730626443418-7304","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])]),n("pre",{class:"language-md"},[n("code",{class:"language-md"},[n("span",{class:"token code"},[n("span",{class:"token punctuation"},"```"),n("span",{class:"token code-language"},"js"),s(`
`),n("span",{class:"token code-block language-js"},[n("span",{class:"token operator"},"<"),s("script setup"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token keyword"},"const"),s(" toc "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token keyword"},"const"),s(" showPageNav "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(" animateClass "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'animate__fadeIn'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"leavePageNav"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("showPageNav"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        animateClass`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'animate__fadeOut'"),s(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            showPageNav`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1500"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"enterPageNav"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("showPageNav"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        animateClass`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'animate__fadeIn'"),s(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
            showPageNav`),n("span",{class:"token punctuation"},"."),s("value "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"300"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// 公开方法用于文档组件调用 鼠标移入移出显示或隐藏toc"),s(`
`),n("span",{class:"token function"},"defineExpose"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    leavePageNav`),n("span",{class:"token punctuation"},","),s(` enterPageNav
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"const"),s(" h "),n("span",{class:"token keyword"},"of"),s(" window"),n("span",{class:"token punctuation"},"."),s("document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getElementById"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"app"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelectorAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'h3, h4'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        toc`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"parentId"),n("span",{class:"token operator"},":"),s(" h"),n("span",{class:"token punctuation"},"."),s("tagName "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'H3'"),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"textContent"),n("span",{class:"token operator"},":"),s(" h"),n("span",{class:"token punctuation"},"."),s("textContent"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replaceAll"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'# '"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("script"),n("span",{class:"token operator"},">"),s(`

`),n("span",{class:"token operator"},"<"),s("template"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"!"),n("span",{class:"token operator"},"--"),s(" nav bar "),n("span",{class:"token operator"},"&"),s(" menu "),n("span",{class:"token operator"},"--"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),s("div "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"mt-2 d-none d-md-block position-fixed"'),s(" v"),n("span",{class:"token operator"},"-"),n("span",{class:"token keyword"},"if"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"toc"'),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),s("div"),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),s("svg xmlns"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"http://www.w3.org/2000/svg"'),s(" width"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"22"'),s(" height"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"22"'),s(" fill"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"currentColor"'),s(),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"bi bi-list"'),s(`
                viewBox`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"0 0 16 16"'),n("span",{class:"token operator"},">"),s(`
                `),n("span",{class:"token operator"},"<"),s("path fill"),n("span",{class:"token operator"},"-"),s("rule"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"evenodd"'),s(`
                    d`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"'),s(),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("svg"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),s("div v"),n("span",{class:"token operator"},"-"),n("span",{class:"token keyword"},"if"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"showPageNav"'),s(),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"mt-2 overflow-auto"'),s(" style"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"height: 70vh;width: 20vw;"'),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),s("ul "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"markdown-body nav d-flex flex-column animate__animated"'),s("  "),n("span",{class:"token operator"},":"),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"animateClass"'),s(`
                style`),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"font-size: 13px;"'),n("span",{class:"token operator"},">"),s(`
                `),n("span",{class:"token operator"},"<"),s("li "),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"nav-item"'),s(" v"),n("span",{class:"token operator"},"-"),n("span",{class:"token keyword"},"for"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"item in toc"'),s(),n("span",{class:"token operator"},":"),s("key"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"item"'),n("span",{class:"token operator"},">"),s(`                
                    `),n("span",{class:"token operator"},"<"),s("a v"),n("span",{class:"token operator"},"-"),n("span",{class:"token keyword"},"if"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"item.parentId == 0"'),s(),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"cursor-hover py-1 ps-0"'),s(),n("span",{class:"token operator"},":"),s("href"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},`"'#' + item.textContent.replaceAll(' ','-')"`),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s(" item"),n("span",{class:"token punctuation"},"."),s("textContent "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("a"),n("span",{class:"token operator"},">"),s(`
                    `),n("span",{class:"token operator"},"<"),s("a v"),n("span",{class:"token operator"},"-"),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"cursor-hover py-1 ps-0 ms-4 "'),s(),n("span",{class:"token operator"},":"),s("href"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},`"'#' + item.textContent.replaceAll(' ','-')"`),n("span",{class:"token operator"},">"),s(`
                        `),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s(" item"),n("span",{class:"token punctuation"},"."),s("textContent "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}"),s(`              
                    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("a"),n("span",{class:"token operator"},">"),s(`
                `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("li"),n("span",{class:"token operator"},">"),s(`
            `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("ul"),n("span",{class:"token operator"},">"),s(`
        `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),s(`    
    `),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("div"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("template"),n("span",{class:"token operator"},">")]),s(`
`),n("span",{class:"token punctuation"},"```")]),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1730626443420-91212"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`\`\`\`js
<script setup>
const toc = reactive([])

const showPageNav = ref(true)
const animateClass = ref('animate__fadeIn')
const leavePageNav = () => {
    if (showPageNav.value) {
        animateClass.value = 'animate__fadeOut'
        setTimeout(() => {
            showPageNav.value = false
        }, 1500);
    }
}

const enterPageNav = () => {
    if (!showPageNav.value) {
        animateClass.value = 'animate__fadeIn'
        setTimeout(() => {
            showPageNav.value = true
        }, 300);
    }
}
// 公开方法用于文档组件调用 鼠标移入移出显示或隐藏toc
defineExpose({
    leavePageNav, enterPageNav
})

onMounted(() => {
    for (const h of window.document.getElementById("app").querySelectorAll('h3, h4')) {
        toc.push({
            parentId: h.tagName === 'H3'? 0 : 1,
            textContent: h.textContent.replaceAll('# ','')
        })
    }
})
<\/script>

<template>
    <!-- nav bar & menu -->
    <div class="mt-2 d-none d-md-block position-fixed" v-if="toc">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-list"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
        </div>
        <div v-if="showPageNav" class="mt-2 overflow-auto" style="height: 70vh;width: 20vw;">
            <ul class="markdown-body nav d-flex flex-column animate__animated"  :class="animateClass"
                style="font-size: 13px;">
                <li class="nav-item" v-for="item in toc" :key="item">                
                    <a v-if="item.parentId == 0" class="cursor-hover py-1 ps-0" :href="'#' + item.textContent.replaceAll(' ','-')">{{ item.textContent }}</a>
                    <a v-else class="cursor-hover py-1 ps-0 ms-4 " :href="'#' + item.textContent.replaceAll(' ','-')">
                        {{ item.textContent }}              
                    </a>
                </li>
            </ul>
        </div>    
    </div>
</template>
\`\`\`
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1730626443420-91212","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),z=a('<h3 id="%E8%87%AA%E5%8A%A8%E5%A4%84%E7%90%86%E6%96%87%E7%AB%A0%E8%B7%AF%E7%94%B1" tabindex="-1"><a class="header-anchor" href="#%E8%87%AA%E5%8A%A8%E5%A4%84%E7%90%86%E6%96%87%E7%AB%A0%E8%B7%AF%E7%94%B1">#</a> 自动处理文章路由</h3><p>  如何只关注写md文章，然后构建即可发布呢？ 聚焦到本站的blog路由，使用了一个Tabs 用于展示不同tab下的文章列表。每篇文章有固定路由导航到新窗口展示内容。那么，如何收集这些路由信息用于tabs内呢。答案就是使用 <a href="https://github.com/hannoeru/vite-plugin-pages">vite-plugin-pages</a> 插件提供的扩展方法。</p><h4 id="vite-plugin-pages" tabindex="-1"><a class="header-anchor" href="#vite-plugin-pages">#</a> vite plugin pages</h4><h4 id="extendroute" tabindex="-1"><a class="header-anchor" href="#extendroute">#</a> extendRoute</h4>',4),O=n("pre",null,[n("code",null,`Type: (route: any, parent: any | undefined) => any | void
`),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1730626443437-91678"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`Type: (route: any, parent: any | undefined) => any | void
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1730626443437-91678","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])],-1),q=n("p",null,"A function that takes a route and optionally returns a modified route. This is useful for augmenting your routes with extra data (e.g. route metadata).",-1),L=n("p",null,"这个方法提供了可修改或添加路由元数据的能力. 方法本身不支持异步操作async. 如果需要异步处理文件，还可以使用另一个支持异步的方法：",-1),V=n("h4",{id:"onroutesgenerated",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#onroutesgenerated"},"#"),s(" onRoutesGenerated")],-1),S=n("pre",null,[n("code",null,`Type: (clientCode: string) => Awaitable<string | void>
`),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1730626443438-77874"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`Type: (clientCode: string) => Awaitable<string | void>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1730626443438-77874","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])],-1),U=n("p",null,"A function that takes a generated client code and optionally returns a modified generated client code.",-1),J=n("h4",{id:"%E9%A1%B9%E7%9B%AE%E5%86%85%E7%9A%84%E5%A4%84%E7%90%86",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#%E9%A1%B9%E7%9B%AE%E5%86%85%E7%9A%84%E5%A4%84%E7%90%86"},"#"),s(" 项目内的处理")],-1),G=n("p",null,[s("1.每文章路由endpint 获取每md文章的frontmatter data数据存入route meta内"),n("br"),s(" reference: "),n("a",{href:"https://zhuanlan.zhihu.com/p/377593594"},"用 Vite 构建静态网站")],-1),K=n("pre",{class:"language-js"},[n("code",{class:"language-js"},[n("span",{class:"token function"},"extendRoute"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"route"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" path "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("__dirname"),n("span",{class:"token punctuation"},","),s(" route"),n("span",{class:"token punctuation"},"."),s("component"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" md "),n("span",{class:"token operator"},"="),s(" fs"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"readFileSync"),n("span",{class:"token punctuation"},"("),s("path"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'"utf-8"'),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" data "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"matter"),n("span",{class:"token punctuation"},"("),s("md"),n("span",{class:"token punctuation"},")"),s(`
  route`),n("span",{class:"token punctuation"},"."),s("meta "),n("span",{class:"token operator"},"="),s(" Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"assign"),n("span",{class:"token punctuation"},"("),s("route"),n("span",{class:"token punctuation"},"."),s("meta "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"frontmatter"),n("span",{class:"token operator"},":"),s(" data "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token keyword"},"return"),s(` route
`),n("span",{class:"token punctuation"},"}"),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1730626443438-55368"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`extendRoute(route) {
  const path = resolve(__dirname, route.component.slice(1))
  const md = fs.readFileSync(path, "utf-8")
  const { data } = matter(md)
  route.meta = Object.assign(route.meta || {}, { frontmatter: data })

  return route
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1730626443438-55368","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])],-1),Z=n("ol",{start:"2"},[n("li",null,"汇集所有tab 文件夹内的md文章路由信息到blog路由内")],-1),W=n("pre",{class:"language-js"},[n("code",{class:"language-js"},[n("span",{class:"token function"},"onRoutesGenerated"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"routes"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`     
  `),n("span",{class:"token keyword"},"let"),s(" rBlog "),n("span",{class:"token operator"},"="),s(" routes"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"find"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"r"),s(),n("span",{class:"token operator"},"=>"),s(" r"),n("span",{class:"token punctuation"},"."),s("name "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'blog'"),s(),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token comment"},"// unincludes 'blog' route and 'all' route and 'index' route"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" tabs "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token comment"},"// limit which folder can be process"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" tabsFolder "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'posts'"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"'ai'"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"'webfront'"),n("span",{class:"token punctuation"},","),n("span",{class:"token string"},"'net'"),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"const"),s(" route "),n("span",{class:"token keyword"},"of"),s(" routes"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"r"),s(),n("span",{class:"token operator"},"=>"),s(" r"),n("span",{class:"token punctuation"},"."),s("name "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},"'blog'"),s(),n("span",{class:"token operator"},"&&"),s(" r"),n("span",{class:"token punctuation"},"."),s("name "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},"'all'"),s(),n("span",{class:"token operator"},"&&"),s(" r"),n("span",{class:"token punctuation"},"."),s("name "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},"'index'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// build blog's tabs data"),s(`
    `),n("span",{class:"token keyword"},"let"),s(" tab "),n("span",{class:"token operator"},"="),s(" route"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(" route"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'-'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("tabs"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hasOwnProperty"),n("span",{class:"token punctuation"},"("),s("tab"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"&&"),s(" tabsFolder"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),s("tab"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
      tabs`),n("span",{class:"token punctuation"},"["),s("tab"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
    tabs`),n("span",{class:"token punctuation"},"["),s("tab"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token operator"},"..."),s(`route
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  rBlog`),n("span",{class:"token punctuation"},"."),s("meta "),n("span",{class:"token operator"},"="),s(" Object"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"assign"),n("span",{class:"token punctuation"},"("),s("rBlog"),n("span",{class:"token punctuation"},"."),s("meta "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(),n("span",{class:"token literal-property property"},"tabs"),n("span",{class:"token operator"},":"),s(" tabs "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1730626443438-95792"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`onRoutesGenerated(routes) {     
  let rBlog = routes.find(r => r.name === 'blog' )
  // unincludes 'blog' route and 'all' route and 'index' route
  let tabs = {}
  // limit which folder can be process
  let tabsFolder = ['posts','ai','webfront','net']
  for (const route of routes.filter(r => r.name !== 'blog' && r.name !== 'all' && r.name !== 'index')) {
    // build blog's tabs data
    let tab = route.name.slice(0, route.name.indexOf('-'))
    if (!tabs.hasOwnProperty(tab) && tabsFolder.includes(tab))
      tabs[tab] = []
    tabs[tab].push({
      ...route
    })
  }
  rBlog.meta = Object.assign(rBlog.meta || {}, { tabs: tabs })
},
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1730626443438-95792","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])],-1),Y=n("ol",{start:"3"},[n("li",null,"在blog路由组件内使用tabs展示数据并提供导航")],-1),X=n("pre",{class:"language-js"},[n("code",{class:"language-js"},[n("span",{class:"token comment"},"// in setup"),s(`
`),n("span",{class:"token keyword"},"const"),s(" tabs "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"useRoute"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("meta"),n("span",{class:"token punctuation"},"."),s("tabs"),n("span",{class:"token punctuation"},")"),s(`

`),n("span",{class:"token comment"},"// lite code"),s(`
`),n("span",{class:"token operator"},"<"),s("KeepAlive"),n("span",{class:"token operator"},">"),s(`
    `),n("span",{class:"token operator"},"<"),s("TabsList "),n("span",{class:"token operator"},":"),s("list"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"tabs[activeTab]"'),s(),n("span",{class:"token operator"},":"),s("path"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"activeTab"'),s(),n("span",{class:"token operator"},":"),s("key"),n("span",{class:"token operator"},"="),n("span",{class:"token string"},'"activeTab"'),n("span",{class:"token operator"},"/"),n("span",{class:"token operator"},">"),s(`
`),n("span",{class:"token operator"},"<"),n("span",{class:"token operator"},"/"),s("KeepAlive"),n("span",{class:"token operator"},">"),s(`

`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1730626443439-90397"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`// in setup
const tabs = reactive(useRoute().meta.tabs)

// lite code
<KeepAlive>
    <TabsList :list="tabs[activeTab]" :path="activeTab" :key="activeTab"/>
</KeepAlive>

`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1730626443439-90397","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])],-1),Q=n("h3",{id:"%E6%9E%84%E5%BB%BA%E9%A1%B9%E7%9B%AE",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#%E6%9E%84%E5%BB%BA%E9%A1%B9%E7%9B%AE"},"#"),s(" 构建项目")],-1),nn=n("pre",{class:"language-js"},[n("code",{class:"language-js"},`npm run build
`),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1730626443440-77113"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`npm run build
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1730626443440-77113","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])],-1),sn=n("h3",{id:"%E9%83%A8%E7%BD%B2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#%E9%83%A8%E7%BD%B2"},"#"),s(" 部署")],-1),tn=n("p",null,[s("构建的vue应用可以部署到Netlify, Vercel, Cloudflate, Azure 等静态站点托管服务端。具体参考vite 官网介绍 "),n("a",{href:"https://cn.vitejs.dev/guide/static-deploy.html"},"部署静态网站"),s(" 。这里仅说明笔者部署到自有Ecs服务器的Nginx 服务的注意要点！")],-1),an=n("pre",null,[n("code",null,`由于构建了vue应用，需要设置404页面指向 index.html
`),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1730626443440-32880"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`由于构建了vue应用，需要设置404页面指向 index.html
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1730626443440-32880","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])],-1),kn="如何构建这个站点",dn="2024-02-21T00:00:00.000Z",mn="2024-02-22T00:00:00.000Z",yn=!1,hn="test",on={__name:"start-here",setup(en,{expose:e}){const t={title:"如何构建这个站点",date:"2024-02-21T00:00:00.000Z",update:"2024-02-22T00:00:00.000Z",top:!1,tags:"test"};return e({frontmatter:t}),(cn,pn)=>{const c=p;return l(),r("div",d,[i(c,{title:t.title,update:t.update},null,8,["title","update"]),m,y,h,g,f,b,v,w,x,C,E,A,B,_,j,I,N,T,P,M,$,F,D,H,R,z,O,q,L,V,S,U,J,G,K,Z,W,Y,X,Q,nn,sn,tn,an])}}};typeof o=="function"&&o(on);export{dn as date,on as default,hn as tags,kn as title,yn as top,mn as update};
