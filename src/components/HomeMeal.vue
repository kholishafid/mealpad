<script setup>
import { Motion } from "@motionone/vue";
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps(["meal"]);

const randomRecipe = ref(null);

const getRandomRecipe = () => {
  axios({
    method: "get",
    url: "https://www.themealdb.com/api/json/v1/1/random.php",
  }).then((res) => {
    randomRecipe.value = res.data.meals[0];
  });
};

onMounted(getRandomRecipe);
</script>

<template>
  <article>
    <Motion
      :initial="{ opacity: 0, scale: 0.8 }"
      :animate="{ opacity: 1, scale: 1 }"
      :transition="{ delay: 0.2, duration: 1 }"
      v-if="randomRecipe"
      class="body"
    >
      <div v-if="randomRecipe.strMealThumb">
        <img
          :src="randomRecipe.strMealThumb"
          :alt="randomRecipe.strMeal"
          loading="eager"
        />
      </div>
    </Motion>
    <div v-else aria-busy="true"></div>
    <footer v-if="randomRecipe">
      <div>
        <h4>{{ randomRecipe.strMeal }}</h4>
        <div>
          <span>#{{ randomRecipe.strCategory }}</span>
          <span>#{{ randomRecipe.strArea }}</span>
        </div>
      </div>
      <div>
        <router-link :to="'/recipe/' + randomRecipe.idMeal">
          Recipe
        </router-link>
        <span role="link" @click="getRandomRecipe">Another</span>
      </div>
    </footer>
  </article>
</template>

<style scoped>
article {
  margin: 0;
  padding: 0;
  width: 100%;
  max-height: fit-content;
  overflow: hidden;
  background-color: transparent;
}
article footer {
  padding: 1rem;
  margin: 0;
}

footer h4 {
  margin: 0;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

footer span {
  margin: 0 10px 4px 0;
}

footer div:nth-child(2) a {
  margin-right: 10px;
}
footer div:nth-child(2) span {
  cursor: pointer;
}
article .body {
  box-sizing: border-box;
  display: grid;
  place-items: center;
}
.body img {
  width: 100%;
  height: 100%;
  aspect-ratio: square;
  object-fit: cover;
}
</style>
