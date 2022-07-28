import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AccountSettingView from "../views/AccountSettingView.vue";
import AddressSettingView from "../views/AddressSettingView.vue";
import OrderView from "../views/OrderView.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/account",
      name: "account",
      component: AccountSettingView,
    },
    {
      path: "/address",
      name: "address",
      component: AddressSettingView,
    },
    {
      path: "/orders",
      name: "orders",
      component: OrderView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

export default router;
