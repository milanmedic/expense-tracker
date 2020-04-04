<template>
  <div id="stats-dashboard">
    <section id="total-funds">
      <p id="remaining-funds">
        Remaining Funds:
        <br />
        <span id="total-funds-value">{{ remainingFunds }}</span>
      </p>
    </section>
    <section id="transaction-sums-section">
      <p>Total Income: {{ totalIncome }}</p>
      <p>Total Expenses: {{ totalExpenses }}</p>
      <p>Progress bar placeholder</p>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    totalIncome() {
      return this.$store.getters.totalIncome;
    },
    totalExpenses() {
      return this.$store.getters.totalExpense;
    },
    remainingFunds() {
      return this.totalIncome - this.totalExpenses;
    },
  },
};
</script>

<style scoped>
#remaining-funds {
  font-weight: bold;
  font-size: 1.5rem;
}
#total-funds-value {
  font-size: 5rem;
}
#stats-dashboard {
  padding: 1.5% 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
#total-funds {
  width: 100%;
  text-align: center;
  height: 55%;
  padding: 1% 0;
}
#transaction-sums-section {
  width: 100%;
  text-align: center;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
