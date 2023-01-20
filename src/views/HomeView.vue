<script setup>
import MealCard from "../components/HomeMeal.vue";
import { Motion } from "motion/vue";
</script>

<template>
  <header>
    <Motion
      :initial="{ y: -100, opacity: 0 }"
      :animate="{ y: 0, opacity: 1 }"
      :transition="{ delay: 0.2, duration: 1 }"
    >
      <img src="../assets/vegan-recipe.png" alt="lets cook illust" />
      <h1>Lets Cooking With Me!</h1>
    </Motion>
    <button>
      <router-link to="/search">
        <h6>Search Recipes</h6>
      </router-link>
    </button>
  </header>

  <Suspense>
    <main class="container">
      <h3>How About This Meals</h3>
      <div class="main-grid">
        <MealCard />
        <MealCard />
        <MealCard />
      </div>
    </main>
    <template #fallback>
      <div>
        <div></div>
      </div>
    </template>
  </Suspense>
</template>

<style scoped>
header {
  display: grid;
  place-items: center;
}
header div:first-child {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

header a {
  display: flex;
  justify-content: center;
}

header h6 {
  display: inline-block;
}
header span {
  font-size: 1.2rem;
}

main h3 {
  text-align: center;
}

.main-grid {
  display: flex;
  gap: 2rem;
  justify-content: center;
}

@media screen and (min-width: 992px) {
  header div h1 {
    margin: 0 0 0 3rem;
  }

  header button h6 {
    margin: 0;
  }

  header button {
    width: 20%;
    margin-top: 4rem;
  }
}
</style>
