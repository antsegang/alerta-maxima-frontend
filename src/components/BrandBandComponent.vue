<template>
    <div class="slider">
        <h3 class="slide-title" v-if="title">{{ title }}</h3>
        <div class="slide-track">
            <slot name="slide-content">

            </slot>
        </div>
        <div class="slide-track">
            <slot name="slide-content2">

            </slot>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: String
})
</script>

