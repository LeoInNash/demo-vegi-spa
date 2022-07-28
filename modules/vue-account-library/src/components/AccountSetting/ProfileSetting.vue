<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
type ProfileType = {
  firstName: string;
  lastName: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
};

type SubmitCallback = (profile: ProfileType) => void;
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
    firstName: "",
    lastName: "",
    phone: "",
    dateOfBirth: "",
    gender: "male",
  }),
  methods: {
    handleSubmit() {
      this.onSubmit({
        firstName: this.firstName,
        lastName: this.lastName,
        phone: this.phone,
        dateOfBirth: this.dateOfBirth,
        gender: this.gender,
      });
    },
  },
});
</script>

<template>
  <div class="mb-4">
    <p class="text-body">Account Detail</p>
    <div class="setting-form">
      <Form @submit="handleSubmit">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            disabled
            type="email"
            id="email"
            placeholder="name@example.com"
          />
        </div>
        <div class="form-group">
          <label for="first-name">First name</label>
          <Field
            type="text"
            id="first-name"
            name="firstName"
            v-model="firstName"
            rules="required"
          />
          <ErrorMessage name="firstName" as="span" />
        </div>
        <div class="form-group">
          <label for="last-name">Last name</label>
          <Field
            type="text"
            id="last-name"
            name="lastName"
            rules="required"
            v-model="lastName"
          />
          <ErrorMessage name="lastName" as="span" />
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <Field
            type="text"
            id="phone"
            name="phone"
            v-model="phone"
            rules="required"
          />
          <ErrorMessage name="phone" as="span" />
        </div>
        <div class="form-group">
          <label for="dateOfBirth">Date of birth</label>
          <Field
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            v-model="phone"
            rules="required"
          />
          <ErrorMessage name="dateOfBirth" as="span" />
        </div>
        <div class="form-group">
          <label for="gender">Gender</label>
          <div class="d-flex">
            <div class="d-flex mr-4">
              <Field
                type="radio"
                name="gender"
                value="male"
                v-model="gender"
                rules="required"
              />Male
            </div>
            <div class="d-flex">
              <Field
                type="radio"
                name="gender"
                value="female"
                v-model="gender"
                rules="required"
              />Female
            </div>
          </div>

          <ErrorMessage name="dateOfBirth" as="span" />
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
