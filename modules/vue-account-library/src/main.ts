import { h, createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./lib/validation/vee-validate";
import singleSpaVue from "single-spa-vue";

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App);
    },
  },
  handleInstance: (app) => {
    app.use(router);
  },
});
export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
