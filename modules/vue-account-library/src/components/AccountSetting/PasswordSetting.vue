<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
type UpdatePasswordType = {
  currentPassword: string;
  newPassword: string;
};
type SubmitCallback = (profile: UpdatePasswordType) => void;
export default defineComponent({
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  props: {
    onSubmit: { type: Function as PropType<SubmitCallback>, required: true },
  },
  data: () => ({
    currentPassword: "",
    newPassword: "",
    confirmation: "",
  }),
  methods: {
    handleSubmit() {
      this.onSubmit({
        currentPassword: this.currentPassword,
        newPassword: this.newPassword,
      });
    },
  },
});
</script>

<template>
  <div>
    <p class="text-body">Password</p>
    <div class="setting-form">
      <Form @submit="handleSubmit">
        <div class="form-group">
          <label for="current-password">Current Password</label>
          <Field
            type="password"
            v-model="currentPassword"
            name="currentPassword"
            rules="required"
            id="current-password"
          />
          <ErrorMessage name="currentPassword" as="span" />
        </div>
        <div class="form-group">
          <label for="new-password">New Password</label>
          <Field
            type="password"
            v-model="newPassword"
            name="newPassword"
            rules="required"
            id="new-password"
          />
          <ErrorMessage name="newPassword" as="span" />
        </div>
        <div class="form-group">
          <label for="Confirm new password">Confirm new password</label>
          <Field
            type="password"
            name="confirmation"
            id="confirm-new-password"
            rules="confirmed:@newPassword"
            v-model="confirmation"
          />
          <ErrorMessage name="confirmation" as="span" />
        </div>
        <div class="d-flex justify-content-end">
          <button type="submit" class="site-btn">Update</button>
        </div>
      </Form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
span {
  color: var(--danger);
}

.setting-form input {
  margin-bottom: 0;
}
</style>
