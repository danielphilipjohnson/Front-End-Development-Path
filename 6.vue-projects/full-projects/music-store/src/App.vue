<template>
  <app-header />

  <router-view />
  <auth-modal />
</template>
<script>
import AppHeader from "./components/layout/Header.vue";
import AuthModal from "./components/auth/AuthModal.vue";
export default {
  components: {
    AppHeader,
    AuthModal,
  },
  created() {
    this.$store.dispatch("init_login");
  },
};
</script>
