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
      <div style="height: 100%">
        <img :src="randomRecipe.strMealThumb" :alt="randomRecipe.strMeal" />
      </div>
    </Motion>
    <footer v-if="randomRecipe">
      <div>
        <h4>{{ randomRecipe.strMeal }}</h4>
        <div>
          <span>#{{ randomRecipe.strCategory }}</span>
          <span>#{{ randomRecipe.strArea }}</span>
        </div>
      </div>
    </footer>
    <!-- <footer>
      <div>
        <button @click="router.push({ path: `recipe/${randomRecipe.idMeal}` })">
          Recipe
        </button>
        <button @click="getRandomRecipe">Another</button>
      </div>
    </footer> -->
  </article>
</template>

<style scoped>
article {
  padding: 0;
  margin: 0;
  width: 350px;
  max-height: fit-content;
  background-color: #fffffe;
  overflow: hidden;
}
article footer {
  padding: 1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fffffe;
}

footer h4 {
  margin: 0;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #0f0e17;
}

footer span {
  margin-right: 10px;
  color: #2e2f3e;
}

article .body {
  box-sizing: border-box;
  display: grid;
  place-items: center;
}
.body img {
  height: 100%;
  aspect-ratio: square;
  object-fit: cover;
}
</style>
