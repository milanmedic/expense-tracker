<template>
  <section class="transaction-list-component">
    <h3>{{ listTitle }}</h3>
    <p>Sort by:</p>

    <SelectInputComponent
      v-model="sortTerm"
      :options="options"
      :value="sortTerm"
    />
    <div class="transaction-list">
      <TransactionItem
        v-for="{ id, title, sum, category, date, itemType } in transactions"
        :title="title"
        :sum="sum"
        :category="category"
        :date="date"
        :item-type="itemType"
        :key="id"
        @delete="deleteTransaction(id, itemType)"
      />
    </div>
  </section>
</template>

<script>
import TransactionItem from "./TransactionItem";
import SelectInputComponent from "./SelectInputComponent";
export default {
  data() {
    return {
      sortTerm: "",
      options: [
        {
          value: "title",
          description: "Title",
        },
        {
          value: "sum",
          description: "Sum",
        },
        {
          value: "date",
          description: "Date",
        },
      ],
    };
  },
  props: {
    transactions: {
      type: Array,
      required: true,
    },
    listTitle: {
      type: String,
      required: true,
    },
  },
  methods: {
    deleteTransaction(id, itemType) {
      this.$store.dispatch("deleteTransaction", { id, itemType });
    },
  },
  watch: {
    sortTerm() {
      let list = this.listTitle.toLowerCase().split(" ")[1];
      this.$store.dispatch("sortData", { sortTerm: this.sortTerm, list });
    },
  },
  components: {
    TransactionItem: TransactionItem,
    SelectInputComponent: SelectInputComponent,
  },
};
</script>

<style scoped>
.transaction-list-component {
  border: 2px solid #5c5a5a;
  padding: 2.5%;
  height: 90%;
  width: 42.5%;
  border-radius: 5px;
}

.transaction-list-component h3 {
  text-align: center;
  font-weight: bold;
  font-size: 1.5rem;
}

.transaction-list {
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
  height: 70%;
}
</style>
