<template>
  <div class="dropdown">
    <a class="text-body" href="#" @click.prevent="toggleDropdown">
      <i class="fa fa-cog" />
    </a>
    <div
      :class="['dropdown-menu', { 'd-block': isShow }]"
      @mouseleave="toggleDropdown"
    >
      <router-link
        v-for="item in menus"
        :key="item.url"
        class="w-100 p-3"
        type="button"
        :to="item.url"
      >
        <i :class="item.icon" />{{ item.title }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import type SettingItemType from "@/types/SettingItemType";
import type { PropType } from "vue";

export default defineComponent({
  props: {
    isAuth: { type: Boolean, required: true },
    menus: { type: Array as PropType<SettingItemType[]>, required: true },
  },
  setup() {
    const router = useRouter();
    const isShow = ref(false);
    function toggleDropdown() {
      isShow.value = !isShow.value;
    }
    return {
      router,
      isShow,
      toggleDropdown,
    };
  },
  methods: {
    goToLoginPage() {
      this.router.push("/login");
    },
  },
});
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

i {
  margin-right: 0.5rem;
}
</style>
