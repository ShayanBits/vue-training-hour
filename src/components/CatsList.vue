<template>
  <div class="flex flex-col w-3/5 h-1">
    <div v-for="item in list" :key="item.id" class="flex justify-between m-3 p-3 bg-slate-300 border-spacing-2 text-black">
      <div class="flex w-[20%] h-auto overflow-hidden rounded-full justify-center">
        <img  :src="item.avatar" class="w-auto h-auto" alt="User Avatar">
      </div>
      <p class="self-center font-bold">
        {{ item.name }}
      </p>
      <p class="self-center">
        {{ item.jobTitle }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
const props = defineProps({
  list: {
    type: Array,
  }
})


// catsList.value = await cats()
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
.avatar {
  width: 50px; /* or the size of your choice */
  height: 50px; /* or the size of your choice */
  border-radius: 50%; /* this makes the image round */
  margin-right: 10px; /* adds spacing between avatars */
}
.avatar-list {
  display: flex;
  align-items: center;
}
</style>
