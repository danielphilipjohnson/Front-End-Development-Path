<template>
  <call-to-action />
  <main-content />
  <player-UI />
</template>

<script>
// @ is an alias to /src
import CallToAction from "../components/home/CallToAction.vue";
import MainContent from "../components/home/MainContent.vue";
import PlayerUI from "../components/player/PlayerUI.vue";
export default {
  name: "Home",
  components: { CallToAction, MainContent, PlayerUI },
};
</script>
