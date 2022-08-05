<script lang="ts">
import type { PropType } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import { defineComponent } from "vue";
import type AuthDataType from "@/types/AuthDataType";

type SubmitCallback = (data: AuthDataType) => void;
export default defineComponent({
  components: { Form, Field, ErrorMessage },
  props: {
    login: { type: Function as PropType<SubmitCallback>, required: true },
  },
  data: () => ({
    password: "",
    email: "",
    isRemember: false,
  }),
  methods: {
    handleSubmit() {
      this.login({
        password: this.password,
        email: this.email,
      });
    },
  },
});
</script>
<template>
  <div class="card auth-form mb-4">
    <div class="card-body">
      <Form @submit="handleSubmit">
        <div class="form-group">
          <label for="email">Email</label>
          <Field
            type="text"
            name="email"
            rules="required"
            v-model="email"
            id="email"
          />
          <ErrorMessage name="email" as="span" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <Field
            type="text"
            name="password"
            rules="required"
            v-model="password"
            id="last-name"
          />
          <ErrorMessage name="lastName" as="span" />
        </div>
        <div class="d-flex align-items-center">
          <button type="submit" class="site-btn rounded mr-3">Login</button>
          <div class="form-group form-check mb-0">
            <input
              type="checkbox"
              class="form-check-input"
              id="rememberMe"
              v-model="isRemember"
            />
            <label class="form-check-label" for="rememberMe">Remember me</label>
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
span {
  color: var(--danger);
}

.auth-form input {
  margin-bottom: 0;
  width: 100%;
}
.auth-form input[type="checkbox"] {
  margin-bottom: 0;
  width: 24px;
}
.auth-form label {
  width: 100%;
}
</style>
