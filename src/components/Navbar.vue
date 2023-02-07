<script setup>
import { useUiState } from "../stores/uistate";
import Hamburger from "./Icon/Hamburger.vue";

const uiState = useUiState();
const { changeSidebarVisibility } = uiState;
</script>

<template>
  <nav class="container-fluid navbar">
    <ul>
      <img src="../assets/Bowl.png" alt="bowl" style="width: 50px" />
      <li>
        <h6 class="navbar__brand">MealPad</h6>
      </li>
    </ul>
    <ul class="navbar__menu">
      <li>
        <router-link to="/" class="navbar__link"> Home </router-link>
      </li>
      <li>
        <router-link to="/search" class="navbar__link"> Search </router-link>
      </li>
      <li>
        <router-link to="/favorite" class="navbar__link"> Favorites </router-link>
      </li>
    </ul>
    <ul @click="changeSidebarVisibility" class="navbar__hamburger">
      <li>
        <Hamburger />
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>
