<script lang="ts">
import { defineComponent } from "vue";
import LoginForm from "@/components/Auth/LoginForm.vue";

export default defineComponent({
  components: { LoginForm },
  props: {},
  data: () => ({}),
  methods: {
    login() {},
  },
});
</script>
<template>
  <login-form :login="login" />
</template>
<style lang="scss" scoped></style>
