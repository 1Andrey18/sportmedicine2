import { _ as __nuxt_component_0 } from "./Sidebar-DVsmlh-D.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrInterpolate } from "vue/server-renderer";
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
      options: ["Вариант 1", "Вариант 2", "Вариант 3", "Вариант 4"],
      selectedOptions: [],
      answer: ""
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    submitAnswer() {
      console.log("Выбранные варианты:", this.selectedOptions);
      console.log("Ответ пользователя:", this.answer);
      alert("Ваш ответ отправлен!");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "task-details" }, _attrs))} data-v-6605b84d>`);
  _push(ssrRenderComponent(_component_Sidebar, null, null, _parent));
  _push(`<div class="content" data-v-6605b84d><button class="back-btn" data-v-6605b84d>Вернуться</button><h1 data-v-6605b84d>Название задачи</h1><p class="date" data-v-6605b84d>18 января 13:15</p><div class="task-text" data-v-6605b84d><p data-v-6605b84d> ... </p><p data-v-6605b84d> ... </p></div><div class="options" data-v-6605b84d><!--[-->`);
  ssrRenderList($data.options, (option, index) => {
    _push(`<label class="option" data-v-6605b84d><input type="checkbox"${ssrRenderAttr("value", option)}${ssrIncludeBooleanAttr(Array.isArray($data.selectedOptions) ? ssrLooseContain($data.selectedOptions, option) : $data.selectedOptions) ? " checked" : ""} data-v-6605b84d> ${ssrInterpolate(option)}</label>`);
  });
  _push(`<!--]--></div><div class="answer-box" data-v-6605b84d><h3 data-v-6605b84d>Добавьте свой ответ</h3><textarea rows="5" placeholder="Введите текст ответа" data-v-6605b84d>${ssrInterpolate($data.answer)}</textarea><button class="submit-btn" data-v-6605b84d>Добавить ответ</button></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/task-details.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const taskDetails = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6605b84d"]]);
export {
  taskDetails as default
};
//# sourceMappingURL=task-details-BGu5Wx5Q.js.map
