<template>
  <article>
    <img :src="meal.strMealThumb" :alt="meal.strMealThumb" />
    <footer>
      <h5>
        {{ meal.strMeal }}
      </h5>
      <a @click="router.push({ path: `recipe/${meal.idMeal}` })">Recipe</a>
    </footer>
  </article>
</template>

<style scoped>
article {
  width: 100%;
  padding: 0;
  background-color: #fffffe;
  margin: 0;
}

article footer {
  padding: 1rem;
  margin: 0;
  background-color: #fffffe;
}

footer h5 {
  margin-bottom: 5px;
  color: #0f0e17;
  height: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
}

footer a {
  cursor: pointer;
}

article span {
  color: #2e2f3e;
}
</style>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps(["meal"]);
</script>
