<template>
  <!-- Main Content -->
  <section class="container mx-auto pb-24">
    <div class="bg-white rounded border border-gray-200 relative flex flex-col">
      <div
        class="px-6 pt-6 pb-5 font-bold border-b border-gray-200"
        v-icon-secondary="{ icon: 'headphones-alt', right: true }"
      >
        <span class="card-title">Songs</span>
      </div>
      <!-- Playlist seperate -->
      <play-list />
      <!-- .. end Playlist -->
    </div>
  </section>
</template>

<script>
import PlayList from "../player/PlayList.vue";
import IconSecondary from "@/directives/icon-secondary";

export default {
  name: "MainContent",
  components: {
    PlayList,
  },
  directives: {
    "icon-secondary": IconSecondary,
  },
};
</script>
