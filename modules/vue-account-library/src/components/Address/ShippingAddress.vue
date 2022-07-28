<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";

type ShippingAddressType = {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  email: string;
};
type SubmitCallback = (profile: ShippingAddressType) => void;
export default defineComponent({
  components: { Form, Field, ErrorMessage },
  props: {
    onSubmit: { type: Function as PropType<SubmitCallback>, required: true },
  },
  data: () => ({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    email: "",
  }),
  methods: {
    handleSubmit() {
      this.onSubmit({
        firstName: this.firstName,
        lastName: this.lastName,
        phone: this.phone,
        address: this.address,
        email: this.email,
      });
    },
  },
});
</script>

<template>
  <div class="mb-4">
    <p class="text-body">Shipping Address</p>
    <div class="setting-form">
      <Form @submit="handleSubmit">
        <div class="form-group">
          <label for="first-name">First name</label>
          <Field
            type="text"
            name="firstName"
            rules="required"
            v-model="firstName"
            id="first-name"
          />
          <ErrorMessage name="firstName" as="span" />
        </div>
        <div class="form-group">
          <label for="last-name">Last name</label>
          <Field
            type="text"
            name="lastName"
            rules="required"
            v-model="lastName"
            id="last-name"
          />
          <ErrorMessage name="lastName" as="span" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <Field
            type="text"
            name="email"
            rules="required|email"
            v-model="email"
            id="email"
          />
          <ErrorMessage name="firstName" as="span" />
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <Field type="text" name="phone" v-model="phone" id="phone" />
          <ErrorMessage name="phone" as="span" />
        </div>
        <div class="form-group">
          <label for="address">Address</label>
          <Field
            type="text"
            rules="required"
            name="address"
            v-model="address"
            id="address"
          />
          <ErrorMessage name="address" as="span" />
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
.setting-form input[type="radio"] {
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
}
</style>
