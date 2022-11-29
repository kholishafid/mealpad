<template>
    <div class="border border-paragraph border-b-0 mx-1 py-3 bg-tertiary h-14 box-border">
        <h1 class="text-2xl text-center text-white">Wanna try something new?</h1>
    </div>
    <div class=" overflow-hidden border border-paragraph rounded-sm bg-slate-200 flex mx-1 text-paragraph">
        <img :src="randomRecipe.strMealThumb" :alt="randomRecipe.strMeal" class="w-[150px] object-cover">
        <div class="p-6 border-paragraph border-l box-border">
            <p class="text-2xl font-bold mb-2">{{ randomRecipe.strMeal }}</p>
            <div>
                <span class="mr-2">#{{ randomRecipe.strCategory }}</span>
                <span>#{{ randomRecipe.strArea }}</span>
            </div>
        </div>
    </div>
    <div class="border border-t-0 border-paragraph mx-1 p-5">
        <div class="flex">
            <div class="mr-10">
                <h4 class="mb-5">Ingridients</h4>
                <ul v-for="item in 20" :key="item.id">
                    <li v-if="randomRecipe[`strIngredient${item}`]">
                        {{ item }}. {{ randomRecipe[`strIngredient${item}`] }}
                    </li>
                </ul>
            </div>
            <div>
                <h4 class="mb-5">Measure</h4>
                <ul v-for="item in 20" :key="item.id">
                    <li v-if="randomRecipe[`strMeasure${item}`]">
                        {{ randomRecipe[`strMeasure${item}`] }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="mt-5 border-t border-paragraph py-5">
            <h4>Intructions</h4>
            <pre class="mt-5  whitespace-pre-wrap font-Signika">{{ randomRecipe.strInstructions }}</pre>
        </div>
    </div>
    <div class="border border-paragraph border-b-0 mx-1 py-3 bg-tertiary h-14 box-border">
    </div>
</template>

<script setup>
import axios from "axios"
import { ref } from 'vue';

const props = defineProps(['meal'])

const randomRecipe = ref(null)

await axios({
    method: 'post',
    url: 'https://www.themealdb.com/api/json/v1/1/random.php',
}).then((res) => {
    randomRecipe.value = res.data.meals[0]
})
</script>