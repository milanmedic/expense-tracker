<template>
  <section class="transaction-list-component">
    <h3>Transaction List Title</h3>
    <div class="transaction-list">
      <TransactionItem />
    </div>
  </section>
</template>

<script>
import TransactionItem from "./TransactionItem";
export default {
  components: {
    TransactionItem: TransactionItem
  }
};
</script>

<style>
.transaction-list-component {
  background-color: cadetblue;
  padding: 10px;
}
</style>