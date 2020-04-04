<template>
  <div class="transaction-item" :class="`${itemType}-item`">
    <div class="transaction-description">
      <p class="transaction-name">{{ title }}</p>
      <p class="transaction-sum">{{ sum }}</p>
      <p class="transaction-category">{{ category }}</p>
      <p class="transaction-date">{{ date }}</p>
    </div>
    <div class="transaction-controls">
      <div class="delete_icon" @click="$emit('delete')">
        <img src="../assets/remove.svg" />
      </div>
      <div class="edit_icon" @click="editable = !editable">
        <img src="../assets/edit.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editable: false,
    };
  },
  props: {
    sum: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    itemType: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.transaction-item {
  width: 90%;
  padding: 5%;
  line-height: 1.5rem;
  margin-bottom: 10px;
  display: flex;
}

.income-item {
  background-color: #14a76c;
  border-radius: 5px;
  color: #272727;
}

.expense-item {
  background-color: #ff652f;
  border-radius: 5px;
  color: #272727;
}
.transaction-name {
  font-size: 1.5rem;
}

.transaction-description {
  width: 80%;
}
.transaction-controls {
  display: flex;

  width: 20%;
}

.delete_icon,
.edit_icon {
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px;
}

.delete_icon:hover,
.edit_icon:hover {
  background-color: #272727;
}
.delete_icon img,
.edit_icon img {
  width: 100%;
  height: 100%;
}
</style>
