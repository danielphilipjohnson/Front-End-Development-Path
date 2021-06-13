<template>
  <div class="px-4 py-2 flex">
    <div class="rounded-md mr-3">
      <img class="h-12 rounded-md" :src="adLogo" alt="profile" />
    </div>

    <div>
      <p class="font-bold">{{ adName }}</p>
      <p class="text-sm text-gray-600">
        Sponsored ·<i class="fas fa-globe-europe text-gray-300"></i>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["adName", "adLogo"],
};
</script>
