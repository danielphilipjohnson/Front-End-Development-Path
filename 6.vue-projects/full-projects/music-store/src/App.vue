<template>
  <app-header />

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <auth-modal />
  <player-UI />
</template>
<script>
import AppHeader from "./components/layout/Header.vue";
import AuthModal from "./components/auth/AuthModal.vue";
import PlayerUI from "@/components/player/PlayerUI.vue";
export default {
  components: {
    AppHeader,
    AuthModal,
    PlayerUI,
  },
  created() {
    this.$store.dispatch("init_login");
  },
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>
