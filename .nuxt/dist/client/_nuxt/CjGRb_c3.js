import{_ as i}from"./Cyt7Ta0R.js";import{_ as c,c as l,b as m,a as t,F as b,m as k,n as a,v,o as r,q as _,d as x,t as w}from"./x6JfeW_I.js";import"./uz7kDLvf.js";const g={components:{Sidebar:i},data(){return{options:["Вариант 1","Вариант 2","Вариант 3","Вариант 4"],selectedOptions:[],answer:""}},methods:{goBack(){this.$router.go(-1)},submitAnswer(){console.log("Выбранные варианты:",this.selectedOptions),console.log("Ответ пользователя:",this.answer),alert("Ваш ответ отправлен!")}}},f={class:"task-details"},B={class:"content"},V={class:"options"},O=["value"],y={class:"answer-box"};function A(C,s,D,N,o,n){const d=i;return r(),l("div",f,[m(d),t("div",B,[t("button",{onClick:s[0]||(s[0]=(...e)=>n.goBack&&n.goBack(...e)),class:"back-btn"},"Вернуться"),s[5]||(s[5]=t("h1",null,"Название задачи",-1)),s[6]||(s[6]=t("p",{class:"date"},"18 января 13:15",-1)),s[7]||(s[7]=t("div",{class:"task-text"},[t("p",null," ... "),t("p",null," ... ")],-1)),t("div",V,[(r(!0),l(b,null,k(o.options,(e,u)=>(r(),l("label",{key:u,class:"option"},[a(t("input",{type:"checkbox",value:e,"onUpdate:modelValue":s[1]||(s[1]=p=>o.selectedOptions=p)},null,8,O),[[_,o.selectedOptions]]),x(" "+w(e),1)]))),128))]),t("div",y,[s[4]||(s[4]=t("h3",null,"Добавьте свой ответ",-1)),a(t("textarea",{"onUpdate:modelValue":s[2]||(s[2]=e=>o.answer=e),rows:"5",placeholder:"Введите текст ответа"},null,512),[[v,o.answer]]),t("button",{onClick:s[3]||(s[3]=(...e)=>n.submitAnswer&&n.submitAnswer(...e)),class:"submit-btn"},"Добавить ответ")])])])}const T=c(g,[["render",A],["__scopeId","data-v-6605b84d"]]);export{T as default};