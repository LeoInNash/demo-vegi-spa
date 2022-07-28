<script lang="ts">
import { RouterView } from "vue-router";
import AccountMenu from "@/components/AccountMenu.vue";
import AccountButton from "@/components/AccountButton.vue";
import { defineComponent, ref } from "vue";
import type SettingItemType from "./types/SettingItemType";

export default defineComponent({
  components: {
    AccountMenu,
    AccountButton,
    RouterView,
  },
  setup() {
    const menus = ref<SettingItemType[]>([
      {
        title: "Account",
        url: "/account",
        icon: "fa fa-user",
      },
      {
        title: "Address",
        url: "/address",
        icon: "fa fa-address-book",
      },
      {
        title: "Orders",
        url: "/orders",
        icon: "fa fa-shopping-cart",
      },
    ]);
    const settingMenus = ref<SettingItemType[]>([
      {
        title: "My Account",
        url: "/account",
        icon: "fa fa-user",
      },

      {
        title: "Orders",
        url: "/orders",
        icon: "fa fa-shopping-cart",
      },
      {
        title: "Login",
        url: "/login",
        icon: "fa fa-sign-in",
      },
    ]);
    return {
      menus,
      settingMenus,
    };
  },
});
</script>

<template>
  <div class="container pt-4">
    <account-button :menus="settingMenus" :is-auth="true" />
    <div class="row">
      <div class="col-12 col-md-4 col-lg-4">
        <account-menu :menus="menus" />
      </div>
      <div class="col-12 col-md-8 col-lg-8">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/style.css";
@import "@/assets/css/bootstrap.min.css";
@import "@/assets/css/font-awesome.min.css";

.setting-form form input {
  width: 100%;
  height: 50px;
  font-size: 16px;
  color: #6f6f6f;
  padding-left: 20px;
  margin-bottom: 30px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
}
</style>
