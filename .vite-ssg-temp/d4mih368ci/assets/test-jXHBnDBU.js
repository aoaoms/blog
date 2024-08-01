import { _ as _sfc_main$1, a as __unplugin_components_1, b as _sfc_main$2 } from "../main.mjs";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "vue-router";
import "vite-ssg";
const title = "test";
const date = "2021-06-02T00:00:00.000Z";
const _sfc_main = {
  __name: "test",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "test", "date": "2021-06-02T00:00:00.000Z" };
    __expose({ frontmatter });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = _sfc_main$1;
      const _component_back_to_top = __unplugin_components_1;
      const _component_Footer = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "markdown-body" }, _attrs))}><link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.3.1/css/bootstrap.min.css" rel="stylesheet">`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<h1>vue是什么</h1><h5>vue产生的背景</h5><h3>同类型的库比较</h3><h3>系统化设计</h3><ul><li>列表项目 1 <ul><li>列表项目 1.1</li><li>列表项目 1.2</li></ul></li><li>列表项目 2</li><li><ul><li>列表项目 1</li><li>列表项目 1.1</li><li>列表项目 1.2</li></ul></li><li>列表项目 2</li><li><ul><li>列表项目 1</li><li>列表项目 1.1</li><li>列表项目 1.2</li></ul></li><li>列表项目 2</li><li><ul><li>列表项目 1</li><li>列表项目 1.1</li><li>列表项目 1.2</li></ul></li><li>列表项目 2</li><li><ul><li>列表项目 1</li><li>列表项目 1.1</li><li>列表项目 1.2</li></ul></li><li>列表项目 2</li><li><ul><li>列表项目 1</li><li>列表项目 1.1</li><li>列表项目 1.2</li></ul></li><li>列表项目 2</li><li><ul><li>列表项目 1</li><li>列表项目 1.1</li><li>列表项目 1.2</li></ul></li><li>列表项目 2</li><li><ul><li>列表项目 1</li><li>列表项目 1.1</li><li>列表项目 1.2</li></ul></li><li>列表项目 2</li><li><ul><li>列表项目 1</li><li>列表项目 1.1</li><li>列表项目 1.2</li></ul></li><li>列表项目 2</li><li><ul><li>列表项目 1</li><li>列表项目 1.1</li><li>列表项目 1.2</li></ul></li><li>列表项目 2</li></ul><p>纳米好法大师傅 范德萨发</p>`);
      _push(ssrRenderComponent(_component_back_to_top, null, null, _parent));
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/test.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  date,
  _sfc_main as default,
  title
};
