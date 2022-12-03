<template>
    <div class="">
        <div>
            <h3>{{ meal.strMeal }}</h3>
            <div class="text-xs mt-1 flex justify-between items-end">
                <div>
                    <p class="mr-2"># {{ meal.strCategory }}</p>
                    <p># {{ meal.strArea }}</p>
                </div>
                <a class="underline text-highlight" @click="router.push({ path: `recipe/${meal.idMeal}` })">Recipe</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';


const router = useRouter()
const props = defineProps(['meal'])
</script>