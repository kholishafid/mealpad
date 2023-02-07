<script setup>
import MealCard from "../components/HomeMeal.vue";
import { Motion } from "motion/vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <header class="home__header">
    <Motion :initial="{ y: -100, opacity: 0 }" :animate="{ y: 0, opacity: 1 }"
      :transition="{ delay: 0.2, duration: 1 }">
      <div class="home__hero">
        <img src="../assets/vegan-recipe.png" alt="lets cook illust" />
        <h1 class="hero__heading">Lets Cooking With Me!</h1>
      </div>
      <button @click="router.push('/search')" class="header__button">
        Search Recipes
      </button>
    </Motion>
  </header>

  <Suspense>
    <main class="container suggestion">
      <h3 class="suggestion__heading">How About This Meals</h3>
      <div class="home-card-grid">
        <MealCard />
        <MealCard />
        <MealCard />
      </div>
    </main>
    <template #fallback>
      <div>
        <div aria-busy="true"></div>
      </div>
    </template>
  </Suspense>
</template>

<style scoped>

</style>
