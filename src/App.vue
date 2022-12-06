<script setup>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';

</script>

<template>
  <Header />

  <router-view v-slot="{ Component }">
    <div class="relative overflow-hidden flex-1" id="main-section">
      <keep-alive include="HomeView" :max="3">
        <component :is="Component" />
      </keep-alive>
    </div>
  </router-view>

  <Teleport to="#main-section">
    <sidebar />
  </Teleport>

</template>

<style scoped>

</style>
