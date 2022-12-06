import { defineStore } from "pinia";
import { ref } from "vue";

export const useUiState = defineStore("uistate", () => {
  const sidebarVisibility = ref(false);

  function changeSidebarVisibility() {
    sidebarVisibility.value = !sidebarVisibility.value;
  }

  return { sidebarVisibility, changeSidebarVisibility };
});
