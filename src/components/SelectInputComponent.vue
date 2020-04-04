<template>
  <select @input="updateValue($event.target.value)" :value="value">
    <option disabled selected>Please select one</option>
    <option
      v-for="{ value, description } in options"
      :value="value"
      :key="description"
      >{{ description }}</option
    >
  </select>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style></style>
