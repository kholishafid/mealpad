<script setup>
import { Motion } from "@motionone/vue";
import axios from "axios";
import { onMounted, ref } from "vue";

const props = defineProps(["meal"]);

const stillLoad = ref(true);

const randomRecipe = ref(null);

const getRandomRecipe = async () => {
  stillLoad.value = true;

  await axios({
    method: "get",
    url: "https://www.themealdb.com/api/json/v1/1/random.php",
  }).then((res) => {
    randomRecipe.value = res.data.meals[0];
    stillLoad.value == false
  });
};

onMounted(getRandomRecipe);
</script>

<template>
  <Motion :initial="{ y: -20 }" :animate="{ y: 0 }" :transition="{ duration: 0.8 }" class="recipe">
    <article class="recipe__card" v-if="randomRecipe">
      <img :src="randomRecipe.strMealThumb" :alt="randomRecipe.strMeal" @load="stillLoad = false"
        :style="{ display: stillLoad === true ? 'none' : 'block' }" />
      <div class="recipe__thumb recipe__thumb--loading" v-if="stillLoad">
        <span aria-busy="true"></span>
      </div>
      <footer class="recipefooter" v-if="!stillLoad">
        <div class="recipefooter__head">
          <h4>{{ randomRecipe.strMeal }}</h4>
          <div>
            <span>#{{ randomRecipe.strCategory }}</span>
            <span>#{{ randomRecipe.strArea }}</span>
          </div>
        </div>
        <div class="recipefooter__action">
          <router-link :to="'/recipe/' + randomRecipe.idMeal">
            Recipe
          </router-link>
          <span role="link" @click="getRandomRecipe">Another</span>
        </div>
      </footer>
      <footer class="recipefooter recipefooter--loading" v-else></footer>
    </article>
    <article v-else class="recipe__card">
      <div class="recipe__thumb--loading">
        <span aria-busy="true"></span>
      </div>
      <footer class="recipefooter recipefooter--loading"></footer>
    </article>
  </Motion>
</template>
