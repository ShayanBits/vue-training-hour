<template>
    <div class="flex border-2 border-spacing-2 border-red-400 rounded gap-2 m-3 p-3">
        <p>
            {{ item.name }}
        </p>
        <p>
            {{ item.lastName }}
        </p>
        <p>
            {{ item.id }}
        </p>
    </div>
</template>

<script setup>
defineProps({
    item: {
        type: Object,
        required: true
    }
})
</script>