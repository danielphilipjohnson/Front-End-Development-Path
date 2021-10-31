import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { auth } from "./includes/firebase";
import GlobalComponents from "./includes/_globals";

import VeeValidatePlugin from "./includes/validation";

import Icon from "./directives/icon";

import "./assets/tailwind.css";
import "./assets/main.css";
import i18n from "./includes/i18n";
import "./registerServiceWorker";

let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(i18n);

    app.use(store);
    app.use(router);
    app.use(VeeValidatePlugin);
    app.use(GlobalComponents);
    app.directive("icon", Icon);

    app.mount("#app");
  }
});
