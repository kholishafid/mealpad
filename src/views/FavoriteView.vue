<template>
    <main class="max-w-[800px] flex-1" v-if="favoriteList">
        <div class="mt-5 border-t border-paragraph" v-if="favoriteList.length > 0">
            <div v-for="meal in favoriteList" key="meal.idMeal"
                class="p-5 bg-slate-50 border-b border-paragraph relative">
                <div class="absolute right-4 top-4 cursor-pointer rounded-full"
                    @click="removeFromFavorite(meal.idMeal)">
                    <span class="material-icons-outlined">
                        remove
                    </span>
                </div>
                <h3>{{ meal.strMeal }}</h3>
                <div class="text-xs mt-1 flex justify-between items-end">
                    <div>
                        <p class="mr-2"># {{ meal.strCategory }}</p>
                        <p># {{ meal.strArea }}</p>
                    </div>
                    <a class="underline text-highlight cursor-pointer"
                        @click="router.push({ path: `recipe/${meal.idMeal}` })">Recipe</a>
                </div>
            </div>
        </div>
        <div v-else class="text-center pt-5">
            <p>You haven't added yet....</p>
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

const removeFromFavorite = (id) => {
    favoriteList.value = favoriteList.value.filter((item) => {
        console.log(item.idMeal)
        return item.idMeal != id
    })

    localStorage.setItem('favoriteMeals', JSON.stringify(favoriteList.value))
}


onMounted(getLocalStorage)

onUnmounted(clearFavoriteList)

</script>