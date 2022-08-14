<script setup lang="ts">
const props = defineProps({
    text: String,
    active: Boolean
})
defineEmits(['click'])
</script>

<template>
<div :class="['tab__pane', active ? 'tab__pane--active' : '']">
    <a href="#" @click.prevent="$emit('click')">{{ text }}</a>
</div>
</template>
<style>
.tab__pane a {
    padding: .5rem;
    border-radius: var(--pane-top-left-radius);
    font-size: var(--vp-code-font-size);
    display: block;
    color: rgba(204, 204, 204, 0.336);
}
.tab__pane--active a {
    background-color: var(--vp-c-black-mute);
    color: var(--vp-c-brand);
    pointer-events: none;
}
</style>