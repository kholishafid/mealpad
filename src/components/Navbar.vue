<script setup>
import { useUiState } from "../stores/uistate";
import Hamburger from "./Icon/Hamburger.vue";

const uiState = useUiState();
const { changeSidebarVisibility } = uiState;
</script>

<template>
  <nav class="container-fluid">
    <ul>
      <img src="../assets/Bowl.png" alt="bowl" style="width: 50px" />
      <li><strong>MealPad</strong></li>
    </ul>
    <ul>
      <li>
        <router-link to="/"> Home </router-link>
      </li>
      <li>
        <router-link to="/search"> Search </router-link>
      </li>
      <li>
        <router-link to="/favorite"> Favorites </router-link>
      </li>
    </ul>
    <ul @click="changeSidebarVisibility">
      <li><Hamburger /></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: hsla(247, 24%, 7%, 0.8);
  backdrop-filter: blur(100px);
  border-bottom: 1px solid hsla(0, 0%, 50%, 0.1);
  position: sticky;
  top: 0;
  z-index: 999;
}

nav ul:nth-child(3) {
  display: none;
}

nav ul li a {
  color: #fffffe;
}

.router-link-exact-active {
  text-decoration: underline;
  text-decoration-color: var(--primary);
  text-underline-offset: 4px;
}

strong {
  color: var(--contrast);
}

@media screen and (max-width: 576px) {
  nav ul:nth-child(2) {
    display: none;
    z-index: -9999;
  }
  nav ul:nth-child(3) {
    display: block;
  }
}
</style>
