<template>
  <div class="card">
    <div class="bg-white md:rounded-md md:max-w-3xl">
      <Header />
      <Post />
      <Content />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Post from "./Post.vue";
import Content from "./Content.vue";
import Footer from "./Footer.vue";
export default {
  name: "card",
  components: { Header, Post, Content, Footer },
};
</script>

<style></style>
