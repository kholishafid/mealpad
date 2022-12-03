<script setup>
import Header from './components/Header.vue';

</script>

<template>
  <Header />

  <router-view v-slot="{ Component }">
    <keep-alive include="HomeView" :max="3">
      <component :is="Component" />
    </keep-alive>
  </router-view>

</template>

<style scoped>

</style>
