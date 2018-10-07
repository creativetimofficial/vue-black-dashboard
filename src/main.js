import Vue from "vue";
import App from "./App";
import router from "./router/index";

import BlackDashboard from "./plugins/blackDashboard";
import LiveDemo from "./plugins/liveDemo";

import i18n from "./i18n"
Vue.use(BlackDashboard);
Vue.use(LiveDemo);

/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
