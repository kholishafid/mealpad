<template>
  <header class="container">
    <div>
      <div>
        <input type="text" name="" id="" v-model="searchQuery" />
      </div>
    </div>
    <div class="categories">
      <h5>Show this category :</h5>
      <div v-for="item in mealCategory" :key="item.id">
        <span @click="getMealByCategory(item.strCategory)">
          {{ item.strCategory }}
        </span>
      </div>
    </div>
    <div class="categories">
      <h5>Show this Area :</h5>
      <div v-for="item in mealArea" :key="item.id">
        <span @click="getMealByArea(item.strArea)">
          {{ item.strArea }}
        </span>
      </div>
    </div>
  </header>
  <main class="container">
    <div>
      <h5>Search Result</h5>
    </div>
    <div v-if="data" class="grided-result">
      <div v-for="meal in data" :key="meal.id">
        <SearchMealCard :meal="meal" />
      </div>
    </div>
    <div v-else>
      <p>Nothing to show......</p>
    </div>
  </main>
</template>

<style scoped>
header {
  padding-bottom: 0;
}
.categories {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
}

.categories span {
  cursor: pointer;
}

.categories h5 {
  margin: 0;
}

.grided-result {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
@media screen and (max-width: 992px) {
  .grided-result {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 576px) {
  .grided-result {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>

<script setup>
import axios from "axios";
import { ref, watchEffect } from "vue";
import SearchMealCard from "../components/SearchMealCard.vue";

const data = ref(null);
const searchQuery = ref(null);
const timeoutInterval = ref(null);

watchEffect(() => {
  searchQuery.value;

  clearTimeout(timeoutInterval.value);

  timeoutInterval.value = setTimeout(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery.value}`
      )
      .then((res) => {
        data.value = res.data.meals;
      });
    console.log("oke");
  }, 500);
});

const getMealByArea = (area) => {
  let config = {
    method: "get",
    url: "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + area,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      data.value = response.data.meals;
    })
    .catch(function (error) {
      console.log(error);
    });
};

const getMealByCategory = (category) => {
  console.log(category);
  axios
    .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category)
    .then((res) => {
      data.value = res.data.meals;
      console.log(res.data);
    });
};

const mealCategory = [
  { strCategory: "Beef" },
  { strCategory: "Breakfast" },
  { strCategory: "Chicken" },
  { strCategory: "Dessert" },
  { strCategory: "Goat" },
  { strCategory: "Lamb" },
  { strCategory: "Miscellaneous" },
  { strCategory: "Pasta" },
  { strCategory: "Pork" },
  { strCategory: "Seafood" },
  { strCategory: "Side" },
  { strCategory: "Starter" },
  { strCategory: "Vegan" },
  { strCategory: "Vegetarian" },
];

const mealArea = [
  {
    strArea: "American",
  },
  {
    strArea: "British",
  },
  {
    strArea: "Canadian",
  },
  {
    strArea: "Chinese",
  },
  {
    strArea: "Croatian",
  },
  {
    strArea: "Dutch",
  },
  {
    strArea: "Egyptian",
  },
  {
    strArea: "French",
  },
  {
    strArea: "Greek",
  },
  {
    strArea: "Indian",
  },
  {
    strArea: "Irish",
  },
  {
    strArea: "Italian",
  },
  {
    strArea: "Jamaican",
  },
  {
    strArea: "Japanese",
  },
  {
    strArea: "Kenyan",
  },
  {
    strArea: "Malaysian",
  },
  {
    strArea: "Mexican",
  },
  {
    strArea: "Moroccan",
  },
  {
    strArea: "Polish",
  },
  {
    strArea: "Portuguese",
  },
  {
    strArea: "Russian",
  },
  {
    strArea: "Spanish",
  },
  {
    strArea: "Thai",
  },
  {
    strArea: "Tunisian",
  },
  {
    strArea: "Turkish",
  },
  {
    strArea: "Unknown",
  },
  {
    strArea: "Vietnamese",
  },
];
</script>
