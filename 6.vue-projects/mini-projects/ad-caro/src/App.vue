<template>
  <Nav />
  <Subnav />

  <main class="container mx-auto mt-6">
    <Card />
  </main>
</template>

<script>
import Nav from "./components/Nav.vue";
import Subnav from "./components/Subnav.vue";
import Card from "./components/Card/";
export default {
  name: "App",
  components: { Nav, Subnav, Card },
};
</script>

<style></style>
