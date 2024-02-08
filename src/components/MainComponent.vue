<template>
  <List :items="myItems">
    <!-- Define the template for the named slot "item" -->
    <template #item="{ item }">
      <!-- Use your ListItem component or any custom template here -->
      <ListItem :item="item" />
    </template>
  </List>
</template>

<script setup>
import List from "@/components/List.vue"
import ListItem from "@/components/ListItem.vue"

const myItems= [
    {name:"John", lastName: "Wick", id: ""},
    {name:"John", lastName: "Doe", id: ""},
    {name:"Albert", lastName: "Ion", id: ""},
    {name:"Walter", lastName: "White", id: ""},
]

</script>
