import { _ as __nuxt_component_0$1 } from "./nuxt-link-cmw8Mios.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sidebar" }, _attrs))} data-v-96f0e4ed><div class="menu-header" data-v-96f0e4ed><h2 data-v-96f0e4ed>Medical School</h2></div><div class="menu-section" data-v-96f0e4ed><h3 data-v-96f0e4ed>Профиль</h3><div class="profile-card" data-v-96f0e4ed><div class="avatar" data-v-96f0e4ed></div><div class="profile-info" data-v-96f0e4ed><p data-v-96f0e4ed>Фамилия Имя Отчество</p><p data-v-96f0e4ed>Ур. 1 <span class="diamond" data-v-96f0e4ed>💎</span></p><button class="edit-button" data-v-96f0e4ed>Редактировать</button></div></div></div><div class="menu-section" data-v-96f0e4ed><h3 data-v-96f0e4ed>Информация</h3><ul data-v-96f0e4ed><li data-v-96f0e4ed>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/index" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`О школе`);
      } else {
        return [
          createTextVNode("О школе")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-96f0e4ed>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/rules" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Правила`);
      } else {
        return [
          createTextVNode("Правила")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-96f0e4ed>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/forum" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Форум`);
      } else {
        return [
          createTextVNode("Форум")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-96f0e4ed>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/olympiads" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Олимпиады`);
      } else {
        return [
          createTextVNode("Олимпиады")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div class="menu-section" data-v-96f0e4ed><h3 data-v-96f0e4ed>Задачник</h3><ul data-v-96f0e4ed><li data-v-96f0e4ed>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/task-archive" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Архив задач`);
      } else {
        return [
          createTextVNode("Архив задач")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-96f0e4ed>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/system-state" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Состояние системы`);
      } else {
        return [
          createTextVNode("Состояние системы")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-96f0e4ed>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/ratings" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Рейтинг`);
      } else {
        return [
          createTextVNode("Рейтинг")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-96f0e4ed>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/courses" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Курсы`);
      } else {
        return [
          createTextVNode("Курсы")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div class="menu-section" data-v-96f0e4ed><h3 data-v-96f0e4ed>Методичка</h3><ul data-v-96f0e4ed><li data-v-96f0e4ed>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/newcomers" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Новичкам`);
      } else {
        return [
          createTextVNode("Новичкам")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-96f0e4ed>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/articles" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Статьи`);
      } else {
        return [
          createTextVNode("Статьи")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-96f0e4ed>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/links" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Ссылки`);
      } else {
        return [
          createTextVNode("Ссылки")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-96f0e4ed>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/how-to-work" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Работа в системе`);
      } else {
        return [
          createTextVNode("Работа в системе")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-96f0e4ed"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=Sidebar-DVsmlh-D.js.map
