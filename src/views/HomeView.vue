<script setup>
import MealCard from "../components/HomeMeal.vue";
import { Motion } from "motion/vue";
import { useRouter } from "vue-router";

const router = useRouter();
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
    <button @click="router.push('/search')">
      <h6>Search Recipes</h6>
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
        <div aria-busy="true"></div>
      </div>
    </template>
  </Suspense>
</template>

<style scoped>
header {
  display: grid;
  place-items: center;
}

header h1 {
  text-align: center;
  margin: 3rem 0;
}
header div:first-child {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

header button {
  width: fit-content;
}

header h6 {
  display: inline-block;
  margin: 0;
}
header span {
  font-size: 1.2rem;
}

main h3 {
  text-align: center;
}

.main-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
@media screen and (max-width: 992px) {
  .main-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (max-width: 576px) {
  .main-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 828px) {
  header div h1 {
    margin: 0 0 0 3rem;
  }
  header button {
    margin-top: 4rem;
  }
}
</style>
