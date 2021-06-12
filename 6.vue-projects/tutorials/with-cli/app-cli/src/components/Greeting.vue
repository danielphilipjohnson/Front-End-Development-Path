<template>
  <h2 v-if="age >= 21">Greeting {{ age }}</h2>
  <h2 v-else>Greeting you must be 21 or over</h2>
</template>

<script>
export default {
  name: "Greeting",
  props: {
    age: Number,
  },
};
</script>
