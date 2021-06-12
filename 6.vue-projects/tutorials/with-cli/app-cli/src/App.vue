<template>
  <div>
    <h1>Hello</h1>
    <button type="button" @click="age++">Increase age</button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Greeting :age="age" />
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
};
</script>

<style></style>
