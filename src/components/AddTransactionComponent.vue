<template>
  <div id="add-transaction-component">
    <label>Add:</label>
    <select>
      <option>Expense</option>
      <option>Income</option>
    </select>
    <TransactionForm />
  </div>
</template>

<script>
import TransactionForm from "./TransactionForm";
export default {
  components: {
    TransactionForm: TransactionForm
  }
};
</script>

<style>
#add-transaction-component {
  background-color: coral;
  padding: 10px;
}
</style>