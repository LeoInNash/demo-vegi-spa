<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type SettingItemType from "@/types/SettingItemType";

export default defineComponent({
  name: "AccountMenu",
  props: {
    menus: { type: Array as PropType<SettingItemType[]>, required: true },
  },
});
</script>

<template>
  <div class="menu card bg-light mb-3 border-0">
    <router-link
      v-for="item in menus"
      active-class="active_item"
      :key="item.url"
      :to="item.url"
      v-slot="{ isActive }"
    >
      <div
        :class="[
          'p-3 border-bottom border-white',
          isActive ? 'text-white' : 'text-primary',
        ]"
      >
        <i :class="item.icon" />{{ item.title }}
      </div>
    </router-link>
    <div class="p-3 border-bottom border-white text-primary">
      <i class="fa fa-sign-out" />Logout
    </div>
  </div>
</template>

<style scoped>
.menu a:hover {
  text-decoration: none;
}

.menu i {
  margin-right: 0.5rem;
}
</style>
