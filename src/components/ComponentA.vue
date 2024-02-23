<template >
    <div>
        <p>
            Hellow wrold from Component A
        </p>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    console.log("Component A is just mounted")
})

</script>
<style lang="">
    
</style>