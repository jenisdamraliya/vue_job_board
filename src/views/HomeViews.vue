<script setup>
import Hero from "@/components/Hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListings from "@/components/JobListings.vue";
</script>

<template>
  <Hero title="Find Your Dream Job" desc="Discover opportunities that match your skills and career goals" />
  <HomeCards />
  <JobListings :limit="3" :showButton="true" />
</template>
