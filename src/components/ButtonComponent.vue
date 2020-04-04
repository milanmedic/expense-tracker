<template>
  <button :type="buttonType">{{description}}</button>
</template>

<script>
export default {
  props: {
    buttonType: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
</style>