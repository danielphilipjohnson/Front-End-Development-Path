<template>
  <button type="button" @click="onClickAge">Increase age</button>
  <h2 v-if="age >= 21">Greeting {{ age }}</h2>
  <h2 v-else>Greeting you must be 21 or over</h2>
</template>

<script>
export default {
  name: "Greeting",
  props: {
    age: Number,
  },
  methods: {
    onClickAge() {
      this.$emit("age-change", 3);
    },
  },
};
</script>
