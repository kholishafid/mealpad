<script setup>
import axios from "axios";
import { ref, watchEffect } from "vue";
import { $ref } from "vue/macros";
import SearchMealCard from "../components/SearchMealCard.vue";

const data = ref(null);
const searchQuery = ref(null);
const timeoutInterval = ref(null);
const loading = $ref(null);
const recipeUnavaible = $ref(null);

watchEffect(() => {
  searchQuery.value;

  clearTimeout(timeoutInterval.value);

  loading = true;

  timeoutInterval.value = setTimeout(() => {
    axios
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery.value}`
      )
      .then((res) => {
        loading = false;
        if (searchQuery.value && res.data.meals === null) {
          return (recipeUnavaible = true);
        }
        data.value = res.data.meals;
      });
  }, 1000);
});

const getMealByArea = async (area) => {
  let config = {
    method: "get",
    url: "https://www.themealdb.com/api/json/v1/1/filter.php?a=" + area,
    headers: {},
  };

  loading = true;
  await axios(config)
    .then(function (response) {
      data.value = response.data.meals;
      loading = false;
    })
    .catch(function (error) {
      console.log(error);
    });
};

const getMealByCategory = async (category) => {
  loading = true;
  await axios
    .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category)
    .then((res) => {
      loading = false;
      data.value = res.data.meals;
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

<template>
  <header class="container">
    <div>
      <div>
        <input type="text" name="" id="" v-model="searchQuery" />
      </div>
    </div>
    <details>
      <summary>Show with this category :</summary>
      <div class="categories">
        <div v-for="item in mealCategory" :key="item.id">
          <span @click="getMealByCategory(item.strCategory)">
            {{ item.strCategory }}
          </span>
        </div>
      </div>
    </details>
    <details>
      <summary>Show with this Area :</summary>
      <div class="categories">
        <div v-for="item in mealArea" :key="item.id">
          <span @click="getMealByArea(item.strArea)">
            {{ item.strArea }}
          </span>
        </div>
      </div>
    </details>
  </header>
  <main class="container">
    <div>
      <h5>Search Result</h5>
    </div>
    <div v-if="data && loading !== true" class="grided-result">
      <template v-for="meal in data" :key="meal.id">
        <SearchMealCard :meal="meal" />
      </template>
    </div>
    <div v-else-if="loading" aria-busy="true"></div>
    <div v-else-if="recipeUnavaible === true">
      Sorry we cannot find the recipe {{ recipeUnavaible }}
    </div>
    <div v-else>
      <p>Nothing to show.</p>
    </div>
  </main>
</template>

<style scoped>
header {
  padding-bottom: 0;
}
details {
  display: flex;
}

.grided-result {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.categories {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.categories div {
  cursor: pointer;
}
@media screen and (max-width: 992px) {
  .grided-result {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 576px) {
  .grided-result {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
