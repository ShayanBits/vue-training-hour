<template>
  <div>
    <template v-for="(item, index) in items" :key="index">
      <slot name="bla" :itemtobePassed="item"></slot>
    </template>
  </div>
</template>

<script setup>
defineProps({
  items: {
      type: Array,
      required: true,
    },
})

</script>