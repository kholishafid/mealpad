<template>
    <div class="border-t border-paragraph py-3 bg-gray-200 box-border">
        <h1 class="text-2xl text-center ">How about this meal?</h1>
    </div>
    <div class=" overflow-hidden border border-paragraph rounded-sm bg-white text-paragraph m-5 box-border"
        v-if="randomRecipe">
        <Motion :initial="{ opacity: 0, scale: 0.8 }" :animate="{ opacity: 1, scale: 1 }"
            :transition="{ delay: 0.2, duration: 1 }">
            <div class=" flex items-center">
                <div class="w-2/5 aspect-square border-r border-paragraph bg-slate-500">
                    <img :src="randomRecipe.strMealThumb" :alt="randomRecipe.strMeal" class="w-full aspect-square">
                </div>
                <div class="w-3/5 p-5 flex flex-col justify-center">
                    <h3 class="text-xl font-bold mb-2">{{ randomRecipe.strMeal }}</h3>
                    <div class="flex flex-wrap">
                        <span class="mr-2">#{{ randomRecipe.strCategory }}</span>
                        <span>#{{ randomRecipe.strArea }}</span>
                    </div>
                </div>
            </div>
            <div class="py-5 px-4 border-paragraph border-t box-border flex justify-end">
                <button class="border rounded-md px-2 bg-slate-200 border-paragraph ml-3"
                    @click="router.push({ path: `recipe/${randomRecipe.idMeal}` })">Recipe</button>
                <button class="border rounded-md px-2 bg-slate-200 border-paragraph ml-3"
                    @click="getRandomRecipe">Another</button>
            </div>
        </Motion>
    </div>
    <div v-else class=" overflow-hidden border border-paragraph rounded-sm bg-white text-paragraph m-5 box-border">
        <Motion :initial="{ opacity: 0, scale: 0.8 }" :animate="{ opacity: 1, scale: 1 }"
            :transition="{ delay: 0.2, duration: 1 }">
            <div class=" flex items-center">
                <div class="w-2/5 aspect-square border-r border-paragraph bg-slate-500">
                </div>
                <div class="w-3/5 p-5 flex flex-col justify-center">
                    <h3 class="text-xl font-bold mb-2">Meal</h3>
                    <div class="flex flex-wrap">
                        <span class="mr-2"># Category</span>
                        <span># Area</span>
                    </div>
                </div>
            </div>
            <div class="py-5 px-4 border-paragraph border-t box-border flex justify-end">
                <button class="border rounded-md px-2 bg-slate-200 border-paragraph ml-3">Button 1</button>
                <button class="border rounded-md px-2 bg-slate-200 border-paragraph ml-3">Button 2</button>
            </div>
        </Motion>
    </div>
</template>

<script setup>
import { Motion } from "@motionone/vue";
import axios from "axios"
import { onMounted, ref } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter()
const props = defineProps(['meal'])

const randomRecipe = ref(null)

const getRandomRecipe = () => {
    axios({
        method: 'get',
        url: 'https://www.themealdb.com/api/json/v1/1/random.php',
    }).then((res) => {
        randomRecipe.value = res.data.meals[0]
    })
}

onMounted(getRandomRecipe)
</script>