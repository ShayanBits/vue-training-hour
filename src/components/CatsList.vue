<template>
  <div class="flex flex-col ">
    <p>Hello</p>
    <p>world!</p>
    
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
</style>
