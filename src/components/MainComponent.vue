<template>
  <div class="flex-col">
    <div><button @click="switchComponent">toggle component</button></div>
    <div>
      <!-- <KeepAlive> -->
        <component :is="currentComponent" />
      <!-- </KeepAlive> -->
    </div>
    <!-- <dir>
      <component :is="currentComponentFromURLPath"/>
    </dir> -->
  </div>
</template>

<script setup>
import ComponentA from "./ComponentA.vue";
import ComponentB from "./ComponentB.vue";
import ComponentC from "./ComponentC.vue";
import ComponentD from "./ComponentD.vue";
import { ref, computed, onMounted } from "vue";

const components = [ComponentA, ComponentB, ComponentC, ComponentD];
const currentIndex = ref(0);
const currentComponent = computed(() => components[currentIndex.value]);
const switchComponent = () => {
  currentIndex.value = (currentIndex.value + 1) % components.length;
};



// const componentMap = {
//   'ComponentA': ComponentA,
//   'ComponentB': ComponentB,
//   'ComponentC': ComponentC,
//   'ComponentD': ComponentD,
// };

// const currentComponentFromURLPath = computed(() => {
//   const path = window.location.pathname.replace('/', '');
//   return componentMap[path] || ComponentA;
// });

onMounted(() => {
  
})


</script>
