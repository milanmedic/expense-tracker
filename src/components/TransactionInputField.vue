<template>
  <div class="transaction-input-field">
    <label>{{ description }}:</label>
    <input
      :type="type"
      :id="id"
      @input="updateValue($event.target.value)"
      :value="value"
    />
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      default: "text",
    },
    value: {
      type: [String, Number],
    },
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped>
.transaction-input-field {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: baseline;
  height: 25%;
  align-content: center;
  align-items: center;
  margin-bottom: 2.5%;
}

.transaction-input-field label {
  width: 25%;
}

.transaction-input-field input {
  width: 70%;
  height: 50%;
}
</style>
