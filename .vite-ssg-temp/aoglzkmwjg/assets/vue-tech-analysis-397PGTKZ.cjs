"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const _sfc_main = {
  __name: "vue-tech-analysis",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = {};
    __expose({ frontmatter });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "markdown-body" }, _attrs))}><h3>vue是什么</h3><h3>vue产生的背景</h3><h3>同类型的库比较</h3><h3>系统化设计</h3></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/vue-tech-analysis.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports.default = _sfc_main;
