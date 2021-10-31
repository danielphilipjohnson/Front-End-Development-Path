<template>
  <nav class="bg-blue-600 px-4 py-4">
    <ul class="flex justify-between items-center text-white">
      <li>
        <div class="border-b border-gray-200 pb-2">
          <i class="fas fa-search mr-2"></i>
          <input
            class="bg-transparent placeholder-white"
            type="text"
            placeholder="Search"
          />
        </div>
      </li>
      <li><i class="fab fa-facebook-messenger text-xl"></i></li>
      <li><i class="fas fa-user-friends text-xl"></i></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "nav",
};
</script>

<style></style>
