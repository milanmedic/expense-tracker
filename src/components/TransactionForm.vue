<template>
  <form
    id="add-transaction-form"
    @submit.prevent="addTransaction"
    @reset="resetFields"
  >
    <TransactionInputField
      description="Name"
      id="name-input"
      type="text"
      v-model="title"
    />
    <TransactionInputField
      description="Sum"
      id="sum-input"
      type="number"
      v-model="sum"
    />
    <TransactionInputField
      description="Category"
      id="category-input"
      type="text"
      v-model="category"
    />
    <TransactionInputField
      description="Date"
      id="date-input"
      type="date"
      v-model="date"
    />
    <div class="form-buttons">
      <ButtonComponent
        button-type="submit"
        :disabled="!transactionType"
        description="Add Transaction"
      />
      <ButtonComponent button-type="reset" description="Reset" />
    </div>
  </form>
</template>

<script>
import TransactionInputField from "./TransactionInputField";
import ButtonComponent from "./ButtonComponent";
export default {
  data() {
    return {
      title: "",
      date: "",
      sum: 0,
      category: "",
    };
  },
  props: {
    transactionType: {
      type: String,
      required: true,
    },
  },
  methods: {
    resetFields() {
      this.title = "";
      this.date = "";
      this.sum = 0;
      this.category = "";
      this.$emit("resetTypeField");
    },
    addTransaction() {
      let transaction = {
        title: this.title,
        sum: this.sum,
        date: this.date,
        category: this.category,
        itemType: this.transactionType,
      };
      this.resetFields();
      this.$store.dispatch("addNewTransaction", transaction);
    },
  },
  components: {
    TransactionInputField: TransactionInputField,
    ButtonComponent: ButtonComponent,
  },
};
</script>

<style>
#add-transaction-form {
  width: 80%;
  height: 100%;
  margin-top: 2.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
