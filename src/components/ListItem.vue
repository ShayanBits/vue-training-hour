<template>
    <div class="flex border-2 border-spacing-2 border-red-400 rounded gap-2 m-3 p-3">
        <p>
            {{ personalInformation.name }}
        </p>
        <p>
            {{ personalInformation.lastName }}
        </p>
        <p>
            {{ personalInformation.id }}
        </p>
    </div>
</template>

<script setup>
defineProps({
    personalInformation: {
        type: Object,
        required: true
    }
})
</script>