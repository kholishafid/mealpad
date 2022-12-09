<template>
    <header class="p-5 border-b border-paragraph bg-gray-200">
        <nav class="flex items-center justify-between">
            <router-link to="/" class="flex items-center text-lg">
                <img src="@/assets/Bowl.png" alt="logo" class="w-12 mr-2">
                <p>MealPad</p>
            </router-link>
            <div class="flex items-center">
                <span class="material-icons-outlined text-2xl cursor-pointer" @click="changeSidebarVisibility">
                    {{ (sidebarVisibility == true ? "close" : "menu") }}
                </span>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue';
import { useUiState } from '../stores/uistate';
import { storeToRefs } from 'pinia'

const uiState = useUiState()
const { changeSidebarVisibility } = uiState
const { sidebarVisibility } = storeToRefs(uiState)


</script>