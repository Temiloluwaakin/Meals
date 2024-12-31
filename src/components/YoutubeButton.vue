<template>
    <a 
        :href="href" 
        target="_blank"
        class="px-3 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition-colors"
    >
        <slot></slot>
    </a>
</template>

<script setup>

const props = defineProps({
    href: String
})

</script>