import Vue from "vue";
import App from "./App.vue";

import Vuex from "vuex";
import store from "./store";
Vue.use(Vuex);

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store: new Vuex.Store(store),
}).$mount("#app");
