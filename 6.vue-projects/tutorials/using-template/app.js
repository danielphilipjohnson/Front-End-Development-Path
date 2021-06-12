let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!",
    };
  },
  template: `{{ message }}`,
});

vm.mount("#app");
