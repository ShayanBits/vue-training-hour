<template>
    <div>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          {{ index }}: <input v-model="item" placeholder="Enter text here">
        </li>
      </ul>
      <button @click="addItem">Add Item at Start</button>
      <button @click="removeFirstItem">Remove First Item</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: ['Apple', 'Banana', 'Cherry']
      };
    },
    methods: {
      addItem() {
        // Add a new item at the start of the list
        this.items.unshift(`New Item ${this.items.length + 1}`);
      },
      removeFirstItem() {
        // Remove the first item in the list
        this.items.shift();
      }
    }
  };
  </script>
  