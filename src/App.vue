<script setup>
import Header from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";
import { ref } from "vue";

const darkTheme = ref(true)

const changeTheme = () => {

  darkTheme.value = !darkTheme.value

  window.document.querySelector('[data-theme]').setAttribute('data-theme', darkTheme.value === false ? 'light' : 'dark');

}

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

  <div class="theme__switcher" :class="{ 'theme__switcher-dark': darkTheme }" @click="changeTheme">
    <i class="material-icons-outlined">
      contrast
    </i>
  </div>
</template>

