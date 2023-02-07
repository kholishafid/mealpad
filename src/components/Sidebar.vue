<script setup>
import Close from "../components/Icon/Close.vue";
import { useUiState } from "../stores/uistate";
import { storeToRefs } from "pinia";

const uiState = useUiState();
const { sidebarVisibility } = storeToRefs(uiState);
const { changeSidebarVisibility } = uiState;
</script>

<template>
  <div class="sidebar" v-if="sidebarVisibility">
    <div class="close-button">
      <span @click="changeSidebarVisibility">
        <Close />
      </span>
    </div>
    <h5>Mealpad</h5>

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
  </div>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  z-index: 99999;
  background-color: var(--card-background-color);
  backdrop-filter: blur(100px);
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 0 var(--block-spacing-vertical);
  border-left: 1px solid hsla(0, 0%, 50%, 0.1);
  box-shadow: var(--card-box-shadow);
}

.sidebar ul li {
  list-style: disc;
}

.sidebar .close-button {
  text-align: right;
  margin: 1rem 0;
}

.router-link-exact-active {
  text-underline-offset: 4px;
  text-decoration-color: var(--primary);
}
</style>
