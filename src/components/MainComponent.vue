<template>
  <div class="flex-col">
    <div><button @click="toggle = !toggle">toggle component</button></div>
    <div>
      <component :is="toggleComponent" />
    </div>
  </div>
</template>

<script setup>
import ComponentA from "./ComponentA.vue";
import ComponentB from "./ComponentB.vue";
import { ref, computed } from "vue";

const toggle = ref(true);

const toggleComponent = computed(() => toggle.value ? ComponentA : ComponentB);

const myItems = [
  { name: "John", lastName: "Wick", id: "XXX" },
  { name: "John", lastName: "Doe", id: "XXX " },
  { name: "Albert", lastName: "Ion", id: "XXX " },
  { name: "Walter", lastName: "White", id: "XXX " },
];
</script>
