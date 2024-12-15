import { _ as __nuxt_component_0 } from "./Sidebar-DVsmlh-D.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
const _sfc_main = {
  components: { Sidebar: __nuxt_component_0 },
  data() {
    return {
      states: [
        { id: 1, date: "18.01.2024", taskNumber: 1219, author: "Фамилия Имя Отчество", status: "Принято" },
        { id: 2, date: "18.11.2024", taskNumber: 1223, author: "Фамилия Имя Отчество", status: "Принято" },
        { id: 4, date: "18.04.2024", taskNumber: 1228, author: "Фамилия Имя Отчество", status: "Принято" },
        { id: 7, date: "18.07.2024", taskNumber: 1211, author: "Фамилия Имя Отчество", status: "Принято" },
        { id: 5, date: "18.02.2024", taskNumber: 1217, author: "Фамилия Имя Отчество", status: "Принято" },
        { id: 3, date: "18.12.2024", taskNumber: 1235, author: "Фамилия Имя Отчество", status: "Принято" },
        { id: 8, date: "18.09.2024", taskNumber: 1255, author: "Фамилия Имя Отчество", status: "Принято" }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "system-state" }, _attrs))} data-v-50d665d1>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`<div class="content" data-v-50d665d1><h1 data-v-50d665d1>Состояние системы</h1><p data-v-50d665d1> Здесь отображается информация о состоянии задач, их ID и статусах выполнения. </p><table data-v-50d665d1><thead data-v-50d665d1><tr data-v-50d665d1><th data-v-50d665d1>ID</th><th data-v-50d665d1>Дата</th><th data-v-50d665d1>№ Задачи</th><th data-v-50d665d1>Автор решения</th><th data-v-50d665d1>Статус ответа</th></tr></thead><tbody data-v-50d665d1><!--[-->`);
  ssrRenderList($data.states, (state) => {
    _push(`<tr data-v-50d665d1><td data-v-50d665d1>${ssrInterpolate(state.id)}</td><td data-v-50d665d1>${ssrInterpolate(state.date)}</td><td data-v-50d665d1>${ssrInterpolate(state.taskNumber)}</td><td data-v-50d665d1>${ssrInterpolate(state.author)}</td><td data-v-50d665d1>${ssrInterpolate(state.status)}</td></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/system-state.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const systemState = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-50d665d1"]]);
export {
  systemState as default
};
//# sourceMappingURL=system-state-C51N_c-I.js.map
