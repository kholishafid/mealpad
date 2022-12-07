<template>
    <main class="max-w-[800px] flex-1 border-x border-paragraph">
        <div>
            <div v-for="meal in favoriteList" key="meal.idMeal" class="p-5 bg-slate-50 border-b border-paragraph">
                <h3>{{ meal.strMeal }}</h3>
                <div class="text-xs mt-1 flex justify-between items-end">
                    <div>
                        <p class="mr-2"># {{ meal.strCategory }}</p>
                        <p># {{ meal.strArea }}</p>
                    </div>
                    <a class="underline text-highlight"
                        @click="router.push({ path: `recipe/${meal.idMeal}` })">Recipe</a>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router'

const favoriteList = ref(null)

const router = useRouter()

const getLocalStorage = () => {
    favoriteList.value = JSON.parse(localStorage.getItem('favoriteMeals'))
}

const clearFavoriteList = () => {
    favoriteList.value = null
}

onMounted(getLocalStorage)

onUnmounted(clearFavoriteList)

</script>