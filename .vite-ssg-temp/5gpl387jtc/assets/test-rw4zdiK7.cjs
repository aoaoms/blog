"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const main = require("../main.cjs");
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
require("vite-ssg");
const title = "test";
const date = "2021-06-02T00:00:00.000Z";
const _sfc_main = {
  __name: "test",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "test", "date": "2021-06-02T00:00:00.000Z" };
    __expose({ frontmatter });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = main._sfc_main;
      const _component_back_to_top = main.__unplugin_components_1;
      const _component_Footer = main._sfc_main$1;
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "markdown-body" }, _attrs))}><link href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.3.1/css/bootstrap.min.css" rel="stylesheet">`);
      _push(serverRenderer.ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<h1>vue是什么</h1><h5>vue产生的背景</h5><h3>同类型的库比较</h3><h3>系统化设计</h3><ul><li>列表项目 1 <ul><li>列表项目 1.1</li><li>列表项目 1.2</li></ul></li><li>列表项目 2</li><li><ul><li>列表项目 1</li><li>列表项目 1.1</li><li>列表项目 1.2</li></ul></li><li>列表项目 2</li><li><ul><li>列表项目 1</li><li>列表项目 1.1</li><li>列表项目 1.2</li></ul></li><li>列表项目 2</li><li><ul><li>列表项目 1</li><li>列表项目 1.1</li><li>列表项目 1.2</li></ul></li><li>列表项目 2</li><li><ul><li>列表项目 1</li><li>列表项目 1.1</li><li>列表项目 1.2</li></ul></li><li>列表项目 2</li><li><ul><li>列表项目 1</li><li>列表项目 1.1</li><li>列表项目 1.2</li></ul></li><li>列表项目 2</li><li><ul><li>列表项目 1</li><li>列表项目 1.1</li><li>列表项目 1.2</li></ul></li><li>列表项目 2</li><li><ul><li>列表项目 1</li><li>列表项目 1.1</li><li>列表项目 1.2</li></ul></li><li>列表项目 2</li><li><ul><li>列表项目 1</li><li>列表项目 1.1</li><li>列表项目 1.2</li></ul></li><li>列表项目 2</li><li><ul><li>列表项目 1</li><li>列表项目 1.1</li><li>列表项目 1.2</li></ul></li><li>列表项目 2</li></ul><p>纳米好法大师傅 范德萨发</p>`);
      _push(serverRenderer.ssrRenderComponent(_component_back_to_top, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/test.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports.date = date;
exports.default = _sfc_main;
exports.title = title;
