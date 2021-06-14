<template>
  <!-- Main Content -->
  <section class="container mx-auto pb-24">
    <div class="bg-white rounded border border-gray-200 relative flex flex-col">
      <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
        <span class="card-title">Songs</span>
        <i class="fa fa-headphones-alt float-right text-green-400 text-2xl"></i>
      </div>
      <!-- Playlist seperate -->
      <play-list />
      <!-- .. end Playlist -->
    </div>
  </section>
</template>

<script>
import PlayList from "../player/PlayList.vue";
export default {
  name: "MainContent",
  components: {
    PlayList,
  },
};
</script>
