<script lang="ts">
import ProfileSetting from "../components/AccountSetting/ProfileSetting.vue";
import PasswordSetting from "../components/AccountSetting/PasswordSetting.vue";
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  components: {
    ProfileSetting,
    PasswordSetting,
  },
  methods: {
    updateProfile(data: any) {
      console.log(data);
    },
    updatePassword(data: any) {
      console.log(data);
    },
  },
});
</script>

<template>
  <div>
    <ProfileSetting :onSubmit="updateProfile" />
    <PasswordSetting :onSubmit="updatePassword" />
  </div>
</template>
