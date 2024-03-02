<script setup>
import { RouterLink, RouterView } from "vue-router";
import dotenv from "dotenv";
import NavMenuComponent from "./components/NavMenuComponent.vue";
</script>

<template>
  <NavMenuComponent />


  <RouterView />
</template>

<style scoped></style>
