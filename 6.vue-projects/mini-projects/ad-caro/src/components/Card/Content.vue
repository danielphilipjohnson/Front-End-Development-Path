<template>
  <div class="px-4 py-3">
    <div class="relative">
      <img
        id="ad-image"
        class="w-full h-96 object-cover"
        src="https://source.unsplash.com/random"
        alt="ad post"
      />
      <div class="absolute bottom-0 left-0 p-4">
        <button
          id="prev-ad"
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
          id="next-ad"
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
        <p id="ad-text" class="font-bold">
          2 easy steps to get better at js
        </p>
        <span id="ad-url" class="text-gray-600">js.fake.com</span>
      </div>

      <a
        id="ad-url-navigation"
        href="/"
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
};
</script>

<style></style>
