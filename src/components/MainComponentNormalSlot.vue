<template>
    
    <Cart>
        <template #firstName>
            Mr X
        </template>
            Mr X family name
        <template v-slot:id>
            XXX
        </template>
    </Cart>

    <Cart v-for="item in myItems">
        {{ item.name }}
        {{ item.lastName }}
        <template #id>
            {{ item.id }}
        </template>
    </Cart>

</template>

<script setup>
import Cart from './Cart.vue';

const myItems= [
    {name:"John", lastName: "Wick", id: "XXX"},
    {name:"John", lastName: "Doe", id: "YYY "},
    {name:"Albert", lastName: "Ion", id: "XXX "},
    {name:"Walter", lastName: "White", id: "XXX "},
]

</script>