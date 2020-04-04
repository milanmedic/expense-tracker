<template>
  <div id="app">
    <HeaderComponent />
    <StatsDashboard />
    <div id="all-transactions">
      <TransactionList list-title="All Income" :transactions="income" />
      <TransactionList list-title="All Expense" :transactions="expenses" />
    </div>
    <AddTransactionComponent />
  </div>
</template>

<script>
import Header from "./components/Header";
import StatsDashboard from "./components/StatsDashboard";
import TransactionList from "./components/TransactionList";
import AddTransactionComponent from "./components/AddTransactionComponent";
export default {
  name: "App",
  computed: {
    expenses() {
      return this.$store.getters.getExpenses;
    },
    income() {
      return this.$store.getters.getIncome;
    },
  },
  components: {
    HeaderComponent: Header,
    StatsDashboard: StatsDashboard,
    TransactionList: TransactionList,
    AddTransactionComponent: AddTransactionComponent,
  },
};
</script>

<style>
/*
  * background-color: #272727
  * border & text-color: #5c5a5a
  * expenses: #FF652F
  * yellow: #FFE400
  * income: #14A76C
 */
#app {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 5% 20% 40% 30%;
  grid-gap: 1%;
  background-color: #272727;
  color: #f5f5f5;
}
#all-transactions {
  padding: 2.5%;
  display: flex;
  justify-content: space-between;
}
</style>
