<template>
    <div v-if="sidebarVisibility"
        class="w-4/5 h-screen bg-slate-100 absolute top-0 right-0 py-6 px-8 border-l border-paragraph">
        <router-link to="/search" class="block mb-5">
            Search
        </router-link>
        <router-link to="/favorite" class="block mb-5">
            Favorites
        </router-link>
    </div>
</template>

<script setup>
import { useUiState } from '../stores/uistate'
import { storeToRefs } from 'pinia'

const uiState = useUiState()
const { sidebarVisibility } = storeToRefs(uiState)

</script>