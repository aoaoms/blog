import { resolveComponent, useSSRContext, mergeProps, ref, onMounted } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { ViteSSG } from "vite-ssg";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_router_view = resolveComponent("router-view");
  _push(ssrRenderComponent(_component_router_view, _attrs, null, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-b0e8ab5f"]]);
const _sfc_main$4 = {
  __name: "Footer",
  __ssrInlineRender: true,
  props: {},
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "w-100 text-center py-3 mt-5",
        style: { "font-size": "13PX" }
      }, _attrs))}><p class="d-inline-block"><a href="https://creativecommons.org/licenses/by-sa/4.0/" class="">CC BY-NC-SA 4.0 </a> 2024-PRESENT © AOAOMS.COM <a href="https://beian.miit.gov.cn/#/Integrated/index">鄂ICP备18030355号-1 </a></p></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Footer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "BackToTop",
  __ssrInlineRender: true,
  setup(__props) {
    const isVisible = ref(false);
    onMounted(() => {
      window.document.addEventListener("scroll", (e) => {
        isVisible.value = window.scrollY >= 220;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (isVisible.value) {
        _push(`<button${ssrRenderAttrs(mergeProps({
          type: "button",
          class: "btn btn-lg bbtt",
          id: "btn-back-to-top"
        }, _attrs))} data-v-758dbd97><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up fs-2" viewBox="0 0 16 16" data-v-758dbd97><path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" data-v-758dbd97></path></svg></button>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/BackToTop.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-758dbd97"]]);
const _sfc_main$2 = {
  __name: "MainBoard",
  __ssrInlineRender: true,
  props: {},
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container d-flex justify-content-center" }, _attrs))}><div class="col-md-3 col-sm-0"></div><div class="d-flex flex-column justify-content-end col-md-7 col-sm-12"><ul class="nav nav-underline mt-5 flex-sm-colume"><li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Title Board</a></li><li class="nav-item"><a class="nav-link" href="#">Bilibili</a></li><li class="nav-item"><a class="nav-link" href="#">Web Front</a></li><li class="nav-item"><a class="nav-link" href="#">.Net</a></li></ul><div class="" style="${ssrRenderStyle({ "height": "30px" })}"></div><div class=""><div class="text-bg-light bg-opacity-25 p-3"><a href="/test" target="_blank" class="text-decoration-none">.Nat Maui Blazor 混合开发</a></div><div class="text-bg-light bg-opacity-25 p-3"><a href="Maui Blazor Hybird 混合开发.html" target="_blank" class="text-decoration-none">.Nat Maui Blazor 混合开发</a></div><div class="text-bg-light bg-opacity-25 p-3">Success with contrasting color</div><div class="text-bg-light bg-opacity-25 p-3">Danger with contrasting color</div><div class="text-bg-light bg-opacity-25 p-3">Warning with contrasting color</div><div class="text-bg-light bg-opacity-25 p-3">Info with contrasting color</div><div class="text-bg-light bg-opacity-25 p-3">Light with contrasting color</div><div class="text-bg-light bg-opacity-25 p-3">Dark with contrasting color</div><div class="text-bg-light bg-opacity-25 p-3">Primary with contrasting color</div><div class="text-bg-light bg-opacity-25 p-3">Secondary with contrasting color</div><div class="text-bg-light bg-opacity-25 p-3">Success with contrasting color</div><div class="text-bg-light bg-opacity-25 p-3">Danger with contrasting color</div><div class="text-bg-light bg-opacity-25 p-3">Warning with contrasting color</div><div class="text-bg-light bg-opacity-25 p-3">Info with contrasting color</div><div class="text-bg-light bg-opacity-25 p-3">Light with contrasting color</div><div class="text-bg-light bg-opacity-25 p-3">Dark with contrasting color</div></div></div><div class="col-md-2 col-sm-0"></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MainBoard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Header",
  __ssrInlineRender: true,
  props: {},
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar navbar-expand-md bg-body-tertiary bg-opacity-10" }, _attrs))}><div class="container-sm"><a class="navbar-brand">aoaoms</a><div class="collapse navbar-collapse me-3" id="navbarNav"><div class="d-flex justify-content-end w-100"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link active" aria-current="page" href="/">博客</a></li><li class="nav-item"><a class="nav-link active" aria-current="page" href="#">项目</a></li><li class="nav-item"><a class="nav-link active" aria-current="page" href="#">社交</a></li><li class="nav-item"><a class="nav-link active" aria-current="page" href="#">留言</a></li><li class="nav-item"><a class="nav-link active" aria-current="page" href="#">关于</a></li></ul></div></div><div class="d-flex justify-content-end hstack gap-3"><a class="icon-link d-md-none" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16"><path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"></path><path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"></path></svg></a><a class="icon-link d-md-none" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16"><path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"></path></svg></a><a class="icon-link d-md-none" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16"><path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"></path></svg></a><a class="icon-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16"><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"></path></svg></a></div></div></nav>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = _sfc_main$1;
  const _component_MainBoard = _sfc_main$2;
  const _component_BackToTop = __unplugin_components_1;
  const _component_Footer = _sfc_main$4;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(ssrRenderComponent(_component_MainBoard, null, null, _parent));
  _push(ssrRenderComponent(_component_BackToTop, null, null, _parent));
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __pages_import_2__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const __pages_import_0__ = () => import("./assets/vue-tech-analysis-2u_mqg5h.js");
const __pages_import_1__ = () => import("./assets/test-E2dumlyM.js");
const routes = [{ "name": "vue-tech-analysis", "path": "/vue-tech-analysis", "component": __pages_import_0__, "props": true }, { "name": "test", "path": "/test", "component": __pages_import_1__, "props": true }, { "name": "index", "path": "/", "component": __pages_import_2__, "props": true }];
console.log(routes);
ViteSSG(App, { routes });
export {
  _sfc_main$1 as _,
  __unplugin_components_1 as a,
  _sfc_main$4 as b
};
