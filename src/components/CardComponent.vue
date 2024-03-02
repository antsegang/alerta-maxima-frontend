<template>
    <div class="card">
        <div class="card-header" v-if="title">
            <h3 class="card-title">{{ title }}</h3>
        </div>
        <div class="card-body">
            <slot name="card-content"></slot>
        </div>
    </div>
</template>

<script setup>
defineProps({

    title: {
        type: String,
        required: false,
    }
});
</script>

<style scoped></style>

