<template>
  <h2>Home page</h2>
</template>

<script>
export default {
  unmounted() {
    console.log("home is unmounted");
  },
  activated() {
    console.log("home activated");
  },
  deactivated() {
    console.log("home deactivated");
  },
};
</script>
