<script lang="ts">
import { defineComponent } from "vue";
import BillingAddress from "../components/Address/BillingAddress.vue";
import ShippingAddress from "../components/Address/ShippingAddress.vue";
export default defineComponent({
  components: {
    BillingAddress,
    ShippingAddress,
  },
    methods: {
    updateBillingAddress(data: any) {
      console.log(data);
    },
    updateShippingAddress(data: any) {
      console.log(data);
    },
  },
});
</script>

<template>
  <div>
    <BillingAddress :onSubmit="updateBillingAddress" />
    <ShippingAddress :onSubmit="updateShippingAddress"/>
  </div>
</template>
