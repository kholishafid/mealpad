<template>
    <div class="">
        <div class="sm:flex">
            <img :src="meal.strMealThumb" alt="" class="w-full sm:w-1/3 aspect-square object-cover">
            <div class="sm:border-l border-paragraph p-5 flex-1">
                <h3>{{ meal.strMeal }}</h3>
                <a class="underline text-highlight cursor-pointer"
                    @click="router.push({ path: `recipe/${meal.idMeal}` })">Recipe</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';


const router = useRouter()
const props = defineProps(['meal'])
</script>