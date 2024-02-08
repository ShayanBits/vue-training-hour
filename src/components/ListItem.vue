<template>
    <div>
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

<script>
defineProps({
    item: {
        type: Object,
        required: true
    }
})
</script>