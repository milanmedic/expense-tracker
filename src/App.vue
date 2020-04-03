<template>
  <div id="app">
    <HeaderComponent />
    <StatsDashboard />
    <TransactionList />
    <TransactionList />
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
  components: {
    HeaderComponent: Header,
    StatsDashboard: StatsDashboard,
    TransactionList: TransactionList,
    AddTransactionComponent: AddTransactionComponent
  }
};
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
}
</style>
