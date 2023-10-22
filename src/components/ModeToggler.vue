<template>
    <div class="bg-transparent fixed top-3 right-3 sm:top-12 sm:right-12 text-blue-600 dark:text-white text-7xl">
        <font-awesome-icon :icon="props.class" />
    </div>
</template>

<script setup>
const props = defineProps({
    class: {
        type: String,
        default: 'fa-solid fa-moon'
    }
})
</script>