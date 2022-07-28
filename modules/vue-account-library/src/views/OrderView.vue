<script lang="ts">
import type OrderType from "@/types/OrderType";
import { defineComponent, ref } from "vue";
import OrdersHistory from "../components/Orders/OrdersHistory.vue";
export default defineComponent({
  components: {
    OrdersHistory,
  },
  setup() {
    const orders = ref<OrderType[]>([
      {
        id: "NS0001",
        date: "12/12/2021",
        amount: 15,
        status: "completed",
        items: [],
      },
      {
        id: "NS0002",
        date: "25/09/2021",
        amount: 30,
        status: "pending",
        items: [],
      },
      {
        id: "NS0003",
        date: "22/08/2021",
        amount: 50,
        status: "delivered",
        items: [],
      },
      {
        id: "NS0004",
        date: "22/02/2021",
        amount: 15,
        status: "delivering",
        items: [],
      },
      {
        id: "NS0005",
        date: "08/11/2021",
        amount: 35,
        status: "cancel",
        items: [],
      },
      {
        id: "NS0006",
        date: "12/03/2021",
        amount: 45,
        status: "confirmed",
        items: [],
      },
    ]);
    return {
      orders,
    };
  },
});
</script>

<template>
  <div>
    <OrdersHistory :orders="orders" />
  </div>
</template>
