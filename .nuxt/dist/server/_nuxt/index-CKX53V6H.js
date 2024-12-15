import { _ as __nuxt_component_0 } from "./Sidebar-DVsmlh-D.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./nuxt-link-cmw8Mios.js";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "destr";
import "klona";
import "element-plus";
const _imports_0 = "data:image/svg+xml,";
const _sfc_main = {
  components: { Sidebar: __nuxt_component_0 }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-page" }, _attrs))} data-v-23f7beb9>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`<div class="content" data-v-23f7beb9><h1 data-v-23f7beb9>О сайте Medical School</h1><p data-v-23f7beb9> Сайт работает для студентов медицины, предоставляя информацию об обучении. Здесь вы найдете архив задач, состояние системы, а также методические материалы. </p><img${ssrRenderAttr("src", _imports_0)} alt="Medical illustration" data-v-23f7beb9></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-23f7beb9"]]);
export {
  index as default
};
//# sourceMappingURL=index-CKX53V6H.js.map
