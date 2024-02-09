<template>
  <List :items="myItems">
    <template #bla="{ itemtobePassed }">
      <ListItem :personalInformation="itemtobePassed" />
    </template>
  </List>
</template>

<script setup>
import List from "@/components/List.vue"
import ListItem from "@/components/ListItem.vue"

const myItems= [
    {name:"John", lastName: "Wick", id: "XXX"},
    {name:"John", lastName: "Doe", id: "XXX "},
    {name:"Albert", lastName: "Ion", id: "XXX "},
    {name:"Walter", lastName: "White", id: "XXX "},
]

</script>
