import { v4 as uuidv4 } from "uuid";

const state = {
  transactions: {
    expense: [
      {
        id: "1",
        title: "Bought Food",
        sum: 150,
        category: "food",
        date: "2010-10-05",
        itemType: "expense",
      },
      {
        id: "3",
        title: "Kurve",
        sum: 15000,
        category: "Zadovoljstvo",
        date: "2010-10-05",
        itemType: "expense",
      },
      {
        id: "4",
        title: "Ananas",
        sum: 150,
        category: "food",
        date: "2010-10-05",
        itemType: "expense",
      },
      {
        id: "5",
        title: "Burgeri",
        sum: 150,
        category: "food",
        date: "2010-10-03",
        itemType: "expense",
      },
    ],
    income: [
      {
        id: "2",
        title: "Got paid for project",
        sum: 1000,
        category: "paycheck",
        date: "2010-10-06",
        itemType: "income",
      },
    ],
  },
};

const getters = {
  //state.getters.getExpenses is not a function
  /**Because getters are properties, not functions, unless the return value in your getter is a function. */
  getExpenses: (state) => {
    return state.transactions.expense;
  },
  getIncome: (state) => {
    return state.transactions.income;
  },
  totalIncome: (state) => {
    return state.transactions.income.reduce((acc, cur) => acc + cur.sum, 0);
  },
  totalExpense: (state) => {
    return state.transactions.expense.reduce((acc, cur) => acc + cur.sum, 0);
  },
};

const actions = {
  addNewTransaction: ({ commit }, { title, sum, category, date, itemType }) => {
    let transaction = {
      id: uuidv4(),
      title,
      sum: +sum,
      category,
      date,
      itemType,
    };
    commit("addTransaction", transaction);
  },
  deleteTransaction: ({ commit }, data) => {
    commit("deleteTransaction", data);
  },
  sortData: ({ commit }, payload) => {
    commit("sortData", payload);
  },
};

const mutations = {
  addTransaction: (state, transaction) => {
    let type = transaction.itemType.split("-")[0];
    state.transactions[type].push(transaction);
  },
  deleteTransaction: (state, data) => {
    state.transactions[data.itemType] = state.transactions[
      data.itemType
    ].filter((item) => {
      if (item.id !== data.id) {
        return item;
      }
    });
  },
  sortData: (state, { sortTerm, list }) => {
    console.log(sortTerm);
    state.transactions[list].sort((a, b) => {
      console.log(a[sortTerm]);
      console.log(b[sortTerm]);
      return a[sortTerm] > b[sortTerm];
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
