<script lang="ts">
import type OrderType from "@/types/OrderType";
import { defineComponent } from "vue";
import type { PropType } from "vue";
import Pagination from "./Pagination.vue";
export default defineComponent({
  components: {
    Pagination,
  },
  props: {
    orders: {
      type: Array as PropType<OrderType[]>,
    },
  },
  methods: {
    getOrderStatus(order: OrderType): string {
      switch (order.status) {
        case "completed":
          return "text-success";
        case "delivering":
          return "text-info";
        case "delivered":
          return "text-primary";
        case "pending":
          return "text-secondary";
        case "cancel":
          return "text-danger";
        case "confirmed":
          return "text-warnin";
        default:
          return "text-body";
      }
    },
  },
});
</script>

<template>
  <div class="card">
    <div class="card-header">Orders History</div>
    <div class="card-body">
      <table class="table table-borderless table-striped">
        <thead>
          <tr>
            <th scope="col">Order ID</th>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.date }}</td>
            <td>{{ order.amount }} $</td>
            <td :class="'text-capitalize ' + getOrderStatus(order)">
              {{ order.status }}
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  </div>
</template>
