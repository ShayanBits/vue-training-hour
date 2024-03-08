<template>
  <div class="w-full p-20 bg-blue-300 rounded-md text-black">
    <p>Parent Component</p>
    <ChildComponent />
  </div>
</template>

<script setup>
import ChildComponent from "./ChildComponent.vue";

import { provide, ref, computed } from 'vue';

// static 
const staticValue = 'Static value';
provide('staticValue', staticValue);


const updateCounter = () => {
  counter.value++
}

const counter = ref(0);
const computedValue = computed(() => counter.value);
provide('computedValue', {computedValue, updateCounter});

const ParentComponent = ref({
  staticValue: "Static value",
  counterValue: computedValue,
});

provide('ParentComponent', ParentComponent)





</script>
