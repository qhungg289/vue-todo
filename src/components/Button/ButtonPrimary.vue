<script setup>
defineProps({
    onClick: Function
})
</script>

<template>
    <button @click="onClick" class="px-6 py-2 rounded-lg bg-emerald-600 font-medium text-zinc-50 hover:bg-emerald-700">
        <slot></slot>
    </button>
</template>