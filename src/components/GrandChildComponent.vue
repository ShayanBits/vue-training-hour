<template>
  <div class="w-full p-20 bg-orange-200 rounded-md text-black">
    <p>Grandchild Component</p>
    <p>Static Value: {{ ParentComponent.staticValue }}</p>
    <p>Computed Value: {{ ParentComponent.counterValue }}</p>
    <button class="text-white" @click="updateCounter()"> increment </button>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const staticValue = inject('staticValue', 'default value of mine');

// TODO try to mutate the injected value
const {computedValue, updateCounter} = inject('computedValue');
const ParentComponent = inject('ParentComponent');
</script>