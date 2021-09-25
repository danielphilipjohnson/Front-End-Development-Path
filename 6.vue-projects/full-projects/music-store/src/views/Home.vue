<template>
  <main>
    <call-to-action />
    <main-content />
  </main>
</template>

<script>
// @ is an alias to /src
import CallToAction from "../components/home/CallToAction.vue";
import MainContent from "../components/home/MainContent.vue";

export default {
  name: "Home",
  components: { CallToAction, MainContent },
};
</script>
