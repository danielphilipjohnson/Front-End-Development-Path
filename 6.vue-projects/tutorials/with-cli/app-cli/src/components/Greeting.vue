<template>
  <button type="button" @click="onClickAge">Increase age</button>
  <button type="button" @click="ageChangeFn(3)">Increase age callback</button>

  <h2 v-if="age >= 21">Greeting {{ age }}</h2>
  <h2 v-else>Greeting you must be 21 or over</h2>
  <p>{{ ageDoubled }}</p>
</template>

<script>
export default {
  name: "Greeting",
  props: {
    age: {
      type: Number,
      required: true,
      default: 20,
      validator(value) {
        return value < 130;
      },
    },
    ageChangeFn: Function,
  },
  computed: {
    ageDoubled() {
      return this.age * 2;
    },
  },
  emits: ["age-change"],
  methods: {
    onClickAge() {
      this.$emit("age-change", 3);
    },
  },
};
</script>
