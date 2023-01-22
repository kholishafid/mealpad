<script setup>
import Header from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />

  <router-view v-slot="{ Component }">
    <keep-alive include="HomeView" :max="3">
      <component :is="Component" />
    </keep-alive>
  </router-view>

  <Teleport to="#app">
    <sidebar />
  </Teleport>

  <Footer />
</template>
<style scoped></style>
