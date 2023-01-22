<template>
  <main class="container" v-if="recipe">
    <img
      :src="recipe.strMealThumb"
      :alt="'image of ' + recipe.strMeal"
      class="meal-thumb"
    />
    <article class="recipe">
      <header>
        <h3>{{ recipe.strMeal }}</h3>
        <div class="sub-heading">
          <div class="tag">
            <span># {{ recipe.strCategory }}</span>
            <span># {{ recipe.strArea }}</span>
          </div>
          <div>
            <span
              class="material-icons-outlined favorite-icon"
              @click="
                pushRecipeToLocal(
                  recipe.idMeal,
                  recipe.strMeal,
                  recipe.strCategory,
                  recipe.strArea
                )
              "
              v-if="!isFavorited"
              >favorite_border</span
            >
            <span
              class="material-icons favorite-icon"
              v-else
              @click="removeFromFavorite"
              data-fav="favorited"
              >favorite</span
            >
          </div>
        </div>
      </header>
      <div class="grid card-body">
        <div>
          <h6>Ingridients</h6>
          <div>
            <ul v-for="item in 20">
              <li v-if="recipe[`strIngredient${item}`]">
                {{ item }}. {{ recipe[`strIngredient${item}`] }}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h6>Measure</h6>
          <div>
            <ul v-for="item in 20">
              <li v-if="recipe[`strMeasure${item}`].length > 1">
                {{ recipe[`strMeasure${item}`] }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
    <article>
      <h6>Istruction</h6>
      <div>
        <pre>{{ recipe.strInstructions }}</pre>
      </div>
      <span>Watch on : </span>
      <a><i class="fa-brands fa-youtube"></i> <span>Youtube</span></a>
    </article>
  </main>
  <main class="loading" v-else>
    <p aria-busy="true"></p>
  </main>
</template>

<style scoped>
.recipe header p {
  margin-right: 10px;
}
.sub-heading {
  position: relative;
}
.meal-thumb {
  border-radius: var(--border-radius);
}
.tag span {
  margin-right: 10px;
  display: inline-block;
}
.favorite-icon {
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
}
.favorite-icon[data-fav="favorited"] {
  color: var(--tertiary);
}

.card-body ul li {
  font-size: small;
}
pre {
  white-space: pre-wrap;
  font-family: Inter;
  line-height: 32px;
  padding: 4px;
}
.loading {
  display: block;
  text-align: center;
}

@media screen and (min-width: 992px) {
  main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr fit-content;
    grid-template-areas:
      "img  card"
      "inst inst";
    gap: 1rem;
  }
  main img {
    grid-area: img;
  }
  main article:nth-child(2) {
    grid-area: card;
    margin: 0;
  }
  main article:nth-child(3) {
    grid-area: inst;
    margin: 0;
  }
}
</style>

<script setup>
import axios from "axios";
import { onMounted, onUnmounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const recipe = ref(null);
const localData = ref([]);
const isFavorited = ref(null);

axios({
  method: "get",
  url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${route.params.id}`,
}).then((res) => {
  recipe.value = res.data.meals[0];
});

const getLocalStorage = () => {
  let dummy = JSON.parse(localStorage.getItem("favoriteMeals"));

  if (typeof dummy !== "object" || !localStorage.getItem("favoriteMeals")) {
    localData.value = [];
    return;
  } else {
    localData.value = dummy;
  }
};

const pushRecipeToLocal = (idMeal, strMeal, strCategory, strArea) => {
  localData.value.push({
    idMeal,
    strMeal,
    strCategory,
    strArea,
  });

  checkFavorited();

  localStorage.setItem("favoriteMeals", JSON.stringify(localData.value));
};

const clearLocalData = () => {
  localData.value = null;
};

const checkFavorited = () => {
  isFavorited.value = localData.value.filter((item) => {
    return item.idMeal == route.params.id;
  });
  if (isFavorited.value.length < 1) {
    isFavorited.value = null;
  }
};

const removeFromFavorite = () => {
  localData.value = localData.value.filter((item) => {
    console.log(item.idMeal);
    return item.idMeal != route.params.id;
  });

  isFavorited.value = null;

  localStorage.setItem("favoriteMeals", JSON.stringify(localData.value));
};

onMounted(() => {
  getLocalStorage();
  checkFavorited();
});

onUnmounted(clearLocalData);
</script>
