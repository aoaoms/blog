import '@/assets/css/main.css'

// import { createApp } from 'vue'
// import { createPinia } from 'pinia'

// Import our custom CSS
// import './scss/styles.scss'

// // Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'
// use VueKonva
import VueKonva from 'vue-konva'

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

// element plus icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
// app.use(createPinia())
app.use(createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL
    ),
    routes: layoutRoutes,
})).use(VueKonva)

console.log(routes)
app.mount('#app')


// 使用ssg 静态页面
// vite-plugin-pages 生成的路由信息
// import routes from "pages-generated";
// import { ViteSSG } from 'vite-ssg'

// import { setupLayouts } from 'virtual:generated-layouts'
// import App from './App.vue'
// const layoutRoutes = setupLayouts(routes)
// export const createApp = ViteSSG(App, { routes: layoutRoutes })