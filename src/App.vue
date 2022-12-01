<script setup>
import Header from './components/Header.vue';

</script>

<template>
  <Header />

  <router-view v-slot="{ Component }" :max="3">
    <keep-alive include="HomeView">
      <component :is="Component" />
    </keep-alive>
  </router-view>

</template>

<style scoped>

</style>
