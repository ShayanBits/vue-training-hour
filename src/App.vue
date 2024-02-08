<template>
  <!-- <CatsList/> -->
  <Test/>
</template>

<script setup>
// import {ref, onMounted} from 'vue'
import CatsList from './components/CatsList.vue';
import Test from './components/Test.vue';

// import {cats} from '@/assets/cats'

// const catsList = ref([])
// const setCats = async () => {
//   catsList.value = await cats()
// }

// onMounted(() => {
//   setCats()
// })
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
