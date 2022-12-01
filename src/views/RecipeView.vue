<template>
    <div v-if="recipe">

        <img :src="recipe.strMealThumb" :alt="recipe.strMeal" class="w-screen aspect-square">
        <div class="relative p-5 border-y border-paragraph bg-white">
            <h1 class="text-2xl mb-2">{{ recipe.strMeal }}</h1>
            <div class="flex">
                <p class="mr-2">#{{ recipe.strCategory }}</p>
                <p>#{{ recipe.strArea }}</p>
            </div>
            <span class="material-icons-outlined top-5 right-5 absolute">favorite_border</span>
        </div>

        <div class="flex">

            <div class="flex-1 border-b border-x border-paragraph">
                <h4 class="px-5 py-2 border-b border-paragraph bg-secondary">Ingridients</h4>
                <div class="p-5">
                    <ul v-for="item in 20" :key="item.id">
                        <li v-if="recipe[`strIngredient${item}`]">
                            {{ item }}. {{ recipe[`strIngredient${item}`] }}
                        </li>
                    </ul>
                </div>
            </div>

            <div class="flex-1 border-b border-r border-paragraph">
                <h4 class="px-5 py-2 border-b border-paragraph bg-secondary">Measure</h4>
                <div class="p-5">
                    <ul v-for="item in 20" :key="item.id">
                        <li v-if="recipe[`strMeasure${item}`]">
                            {{ recipe[`strMeasure${item}`] }}
                        </li>
                    </ul>
                </div>
            </div>

        </div>

        <div class="border-b  border-paragraph">
            <div class="px-5 py-2 border-b border-x border-paragraph  font-bold">Istruction</div>
            <div class="p-5">
                <pre class="whitespace-pre-wrap font-Signika">{{ recipe.strInstructions }}</pre>
            </div>
        </div>
        <div class="p-5 flex">
            <span>Watch on : </span>
            <a :href="recipe.strYoutube" class="flex items-center px-2 w-fit"><i
                    class="fa-brands fa-youtube mr-2 text-[#ff0000]"></i>
                <span class="border-b border-paragraph">Youtube</span></a>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const recipe = ref(null);

axios({
    method: 'get',
    url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`,
}).then((res) => {
    recipe.value = res.data.meals[0]
})

</script>