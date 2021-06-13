<template>
  <div class="px-4 py-3">
    <div class="relative">
      <img class="w-full h-96 object-cover" :src="image" alt="ad post" />
      <div class="absolute bottom-0 left-0 p-4">
        <button
          id="prev-ad"
          @click.prevent="emitPrevAd"
          class="
                    md:w-auto
                    px-2
                    h-12
                    ml-2
                    border
                    rounded-md
                    font-bold
                    text-white text-xs
                    md:text-md
                    bg-gray-700
                  "
        >
          Previous Ad
        </button>
      </div>
      <div class="absolute bottom-0 right-0 p-4">
        <button
          @click.prevent="emitNextAd"
          class="
                    md:w-auto
                    px-2
                    h-12
                    ml-2
                    border
                    rounded-md
                    font-bold
                    text-white text-xs
                    md:text-md
                    bg-gray-700
                  "
        >
          Next Ad
        </button>
      </div>
    </div>

    <div class="flex justify-between p-2 border">
      <div class="w-2/3 md:w-auto">
        <p class="font-bold">
          {{ adText }}
        </p>
        <span class="text-gray-600">{{ adUrl }}</span>
      </div>

      <a
        id="ad-url-navigation"
        :href="adUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          class="
                    block
                    w-auto
                    px-4
                    py-3
                    ml-2
                    border
                    rounded-md
                    font-bold
                    text-gray-700 text-xs
                    md:text-md
                  "
        >
          Learn more
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  props: ["image", "adText", "adUrl"],
  emits: ["nextAd", "prevAd"],
  methods: {
    emitNextAd() {
      this.$emit("nextAd");
    },
    emitPrevAd() {
      this.$emit("prevAd");
    },
  },
};
</script>
