import { _ as __nuxt_component_0 } from "./Sidebar-DVsmlh-D.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-cmw8Mios.js";
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
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
      tasks: [
        { solved: "Да", id: 1, name: "Задача 1", topic: "Тема 1", analysis: "Есть", difficulty: "5%", completion: "99%" },
        { solved: "Да", id: 2, name: "Задача 2", topic: "Тема 2", analysis: "Есть", difficulty: "10%", completion: "99%" },
        { solved: "Да", id: 3, name: "Задача 3", topic: "Тема 3", analysis: "Есть", difficulty: "35%", completion: "45%" },
        { solved: "Да", id: 4, name: "Задача 4", topic: "Тема 25", analysis: "Есть", difficulty: "86%", completion: "99%" },
        { solved: "Да", id: 5, name: "Задача 5", topic: "Тема 8", analysis: "Есть", difficulty: "18%", completion: "20%" }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "task-archive" }, _attrs))} data-v-26e7c8a4>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`<div class="content" data-v-26e7c8a4><h1 data-v-26e7c8a4>Архив задач</h1><p data-v-26e7c8a4></p><table data-v-26e7c8a4><thead data-v-26e7c8a4><tr data-v-26e7c8a4><th data-v-26e7c8a4>Решено</th><th data-v-26e7c8a4>ID</th><th data-v-26e7c8a4>Название задачи</th><th data-v-26e7c8a4>Тема</th><th data-v-26e7c8a4>Разбор</th><th data-v-26e7c8a4>Сложность</th><th data-v-26e7c8a4>Решаемость</th></tr></thead><tbody data-v-26e7c8a4><!--[-->`);
  ssrRenderList($data.tasks, (task) => {
    _push(`<tr data-v-26e7c8a4><td data-v-26e7c8a4>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/task-details/" + task.id
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(task.name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(task.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td data-v-26e7c8a4>${ssrInterpolate(task.solved)}</td><td data-v-26e7c8a4>${ssrInterpolate(task.id)}</td><td data-v-26e7c8a4>${ssrInterpolate(task.name)}</td><td data-v-26e7c8a4>${ssrInterpolate(task.topic)}</td><td data-v-26e7c8a4>${ssrInterpolate(task.analysis)}</td><td data-v-26e7c8a4>${ssrInterpolate(task.difficulty)}</td><td data-v-26e7c8a4>${ssrInterpolate(task.completion)}</td></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/task-archive.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const taskArchive = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-26e7c8a4"]]);
export {
  taskArchive as default
};
//# sourceMappingURL=task-archive-Ca7463tJ.js.map
