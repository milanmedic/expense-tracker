<template>
  <div id="add-transaction-component">
    <div id="add-transaction-selection-controls">
      <label>Add:</label>
      <SelectInputComponent
        v-model="transactionType"
        :options="options"
        :value="transactionType"
      />
    </div>
    <TransactionForm
      :transactionType="transactionType"
      @resetTypeField="transactionType = ''"
    />
  </div>
</template>

<script>
import TransactionForm from "./TransactionForm";
import SelectInputComponent from "./SelectInputComponent";
export default {
  data() {
    return {
      transactionType: "",
      options: [
        {
          value: "expense",
          description: "Expense",
        },
        {
          value: "income",
          description: "Income",
        },
      ],
    };
  },
  components: {
    TransactionForm: TransactionForm,
    SelectInputComponent: SelectInputComponent,
  },
};
</script>

<style>
#add-transaction-component {
  width: 95%;
  padding: 2.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#add-transaction-selection-controls {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
}
#add-transaction-selection-controls label {
  margin-right: 2.5%;
}
</style>
