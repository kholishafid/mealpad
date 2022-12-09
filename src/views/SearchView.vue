<template>
    <main>
        <div class="p-5">
            <div class="flex gap-1">
                <input type="text" name="" id=""
                    class="px-3 py-1 rounded-md outline-none border border-paragraph bg-slate-100 w-full"
                    v-model="searchQuery">
                <button class=" w-12 h-10 border border-paragraph rounded-md"><span
                        class="material-icons-outlined flex items-center justify-center">
                        search
                    </span></button>
            </div>
        </div>
        <div class="flex flex-wrap px-5  mb-5">
            <h3 class="mr-3">Show this category : </h3>
            <div v-for="item in mealCategory" :key="item.id">
                <span class="mr-3 hover:underline hover:text-highlight cursor-pointer"
                    @click="getMealByCategory(item.strCategory)">{{
                            item.strCategory
                    }}</span>
            </div>
        </div>
        <div class="flex flex-wrap px-5 mb-5">
            <h3 class="mr-3">Show this Area : </h3>
            <div v-for="item in mealArea" :key="item.id">
                <span class="mr-3 hover:underline hover:text-highlight cursor-pointer "
                    @click="getMealByArea(item.strArea)">{{
                            item.strArea
                    }}</span>
            </div>
        </div>
        <div class="px-5 py-3 border-y border-paragraph bg-slate-200 mb-6">
            <h3>Search Result</h3>
        </div>
        <div class="grid grid-cols-2 border-t border-l border-paragraph m-2" v-if="data">
            <div v-for="meal in data" :key="meal.id" class="box-border bg-slate-50 border-b border-r border-paragraph">
                <SearchMealCard :meal="meal" />
            </div>
        </div>
    </main>
</template>

<script setup>
import axios from 'axios';
import { ref, watchEffect } from 'vue';
import SearchMealCard from '../components/SearchMealCard.vue';

const data = ref(null)
const searchQuery = ref(null)
const timeoutInterval = ref(null)

watchEffect(() => {

    searchQuery.value

    clearTimeout(timeoutInterval.value)

    timeoutInterval.value = setTimeout(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery.value}`).then(res => {
            data.value = res.data.meals
        })
        console.log('oke')
    }, 500);


})

const getMealByArea = (area) => {
    let config = {
        method: 'get',
        url: 'https://www.themealdb.com/api/json/v1/1/filter.php?a=' + area,
        headers: {}
    };

    axios(config)
        .then(function (response) {
            data.value = response.data.meals
        })
        .catch(function (error) {
            console.log(error);
        });
}

const getMealByCategory = (category) => {
    console.log(category);
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category).then(res => {
        data.value = res.data.meals
        console.log(res.data)
    })
}

const mealCategory = [
    { "strCategory": "Beef" }, { "strCategory": "Breakfast" }, { "strCategory": "Chicken" }, { "strCategory": "Dessert" }, { "strCategory": "Goat" }, { "strCategory": "Lamb" }, { "strCategory": "Miscellaneous" }, { "strCategory": "Pasta" }, { "strCategory": "Pork" }, { "strCategory": "Seafood" }, { "strCategory": "Side" }, { "strCategory": "Starter" }, { "strCategory": "Vegan" }, { "strCategory": "Vegetarian" }
]

const mealArea = [
    {
        "strArea": "American"
    },
    {
        "strArea": "British"
    },
    {
        "strArea": "Canadian"
    },
    {
        "strArea": "Chinese"
    },
    {
        "strArea": "Croatian"
    },
    {
        "strArea": "Dutch"
    },
    {
        "strArea": "Egyptian"
    },
    {
        "strArea": "French"
    },
    {
        "strArea": "Greek"
    },
    {
        "strArea": "Indian"
    },
    {
        "strArea": "Irish"
    },
    {
        "strArea": "Italian"
    },
    {
        "strArea": "Jamaican"
    },
    {
        "strArea": "Japanese"
    },
    {
        "strArea": "Kenyan"
    },
    {
        "strArea": "Malaysian"
    },
    {
        "strArea": "Mexican"
    },
    {
        "strArea": "Moroccan"
    },
    {
        "strArea": "Polish"
    },
    {
        "strArea": "Portuguese"
    },
    {
        "strArea": "Russian"
    },
    {
        "strArea": "Spanish"
    },
    {
        "strArea": "Thai"
    },
    {
        "strArea": "Tunisian"
    },
    {
        "strArea": "Turkish"
    },
    {
        "strArea": "Unknown"
    },
    {
        "strArea": "Vietnamese"
    }
]
</script>