<template>
    <div class="border border-paragraph border-b-0 py-3 bg-slate-200 h-14 box-border">
        <h1 class="text-2xl text-center ">How about this meal?</h1>
    </div>
    <div class=" overflow-hidden border border-paragraph rounded-sm bg-white text-paragraph" v-if="randomRecipe">
        <img :src="randomRecipe.strMealThumb" :alt="randomRecipe.strMeal">
        <div class="p-6 border-paragraph border-t box-border">
            <p class="text-xl font-bold mb-2">{{ randomRecipe.strMeal }}</p>
            <div>
                <span class="mr-2">#{{ randomRecipe.strCategory }}</span>
                <span>#{{ randomRecipe.strArea }}</span>
            </div>
            <button class="border rounded-md px-2 py-0.5 bg-slate-200 mt-2 border-paragraph "
                @click="router.push({ path: `recipe/${randomRecipe.idMeal}` })">Recipe</button>
        </div>
    </div>
    <div v-else>
        <div class="w-screen aspect-square bg-slate-600 text-[50vw] text-slate-500 flex items-center justify-center">
            <div>
                ?
            </div>
        </div>
        <div class="p-6 border-paragraph border-t box-border">
            <p class="text-xl font-bold mb-1">Meal Name</p>
            <div>
                <span class="mr-2"># Category</span>
                <span># Area</span>
            </div>
            <button class="border rounded-md px-2 py-0.5 bg-slate-200 mt-3 border-paragraph">Recipe</button>
        </div>
    </div>
</template>

<script setup>
import axios from "axios"
import { ref } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter()
const props = defineProps(['meal'])

const randomRecipe = ref(null)
axios({
    method: 'get',
    url: 'https://www.themealdb.com/api/json/v1/1/random.php',
}).then((res) => {
    randomRecipe.value = res.data.meals[0]
})

</script>