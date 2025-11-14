<script setup>
import Navbar from "@/components/Navbar.vue";
import { RouterView } from "vue-router";
import "sweetalert2/dist/sweetalert2.min.css";
</script>

<template>
  <Navbar />
  <RouterView />
</template>
