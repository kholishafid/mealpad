<script setup>
import Header from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <Header />

  <router-view v-slot="{ Component }">
    <keep-alive include="HomeView" :max="3">
      <component :is="Component" />
    </keep-alive>
  </router-view>

  <Teleport to="#main-section">
    <sidebar />
  </Teleport>
  <footer class="container" style="text-align: center">
    <strong> &copy; hafnurme 2022 </strong>
  </footer>
</template>
<style scoped></style>
