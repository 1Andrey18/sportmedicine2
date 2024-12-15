import { _ as __nuxt_component_0 } from "./Sidebar-DVsmlh-D.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-cmw8Mios.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
const _sfc_main = {
  components: { Sidebar: __nuxt_component_0 },
  data() {
    return {
      topics: [
        {
          id: 1,
          title: " название какой-то темы",
          author: "Фамилия И. О.",
          date: "18 января 13:15",
          description: "..."
        },
        {
          id: 2,
          title: " название какой-то темы",
          author: "Фамилия И. О.",
          date: "18 января 13:15",
          description: "..."
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "forum" }, _attrs))} data-v-3c1cc3a0>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`<div class="content" data-v-3c1cc3a0><h1 data-v-3c1cc3a0>Форум</h1><div class="topics-grid" data-v-3c1cc3a0><!--[-->`);
  ssrRenderList($data.topics, (topic, index) => {
    _push(`<div class="topic-card" data-v-3c1cc3a0><h3 data-v-3c1cc3a0>${ssrInterpolate(topic.title)}</h3><p class="author" data-v-3c1cc3a0>${ssrInterpolate(topic.author)} • ${ssrInterpolate(topic.date)}</p><p class="description" data-v-3c1cc3a0>${ssrInterpolate(topic.description)}</p>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/forum/" + topic.id,
      class: "details-link"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`Подробнее`);
        } else {
          return [
            createTextVNode("Подробнее")
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forum.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const forum = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3c1cc3a0"]]);
export {
  forum as default
};
//# sourceMappingURL=forum-BG3GS4jm.js.map
