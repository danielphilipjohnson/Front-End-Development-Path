<template>
  <div>
    <h1>Hello</h1>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Greeting :age="age" @age-change="updateAge" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Greeting from "./components/Greeting.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    Greeting,
  },
  data() {
    return {
      age: 19,
    };
  },
  methods: {
    updateAge(num) {
      this.age += num;
    },
  },
};
</script>

<style></style>
