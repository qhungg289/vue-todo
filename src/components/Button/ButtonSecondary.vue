<script setup>
    defineProps({
        onClick: Function
    })
</script>

<template>
    <button @click="onClick" class="px-6 py-2 rounded-lg bg-zinc-200 font-medium hover:bg-zinc-300">
        <slot></slot>
    </button>
</template>