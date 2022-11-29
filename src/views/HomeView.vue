<script setup>
import MealCard from '../components/HomeMeal.vue'

</script>

<template>
  <main class="w-screen mt-20 flex">
    <div class="flex flex-col items-center w-full h-screen">
      <div>
        <img class="max-w-[250px]" src="@/assets/vegan-recipe.png" :alt="lets - cook - illust">
      </div>
      <div class="text-center my-4">
        <h1 class="text-3xl text-paragraph">Lets Cooking With Me!</h1>
      </div>
      <div class="mt-2">
        <router-link to="/search" class="px-4 py-2 bg-button text-paragraph rounded border border-paragraph block">
          Search
          Recipes</router-link>
      </div>
      <div class="my-40">
        <Suspense>
          <MealCard />
          <template #fallback>
            <p>loading..</p>
          </template>
        </Suspense>
      </div>
    </div>
  </main>
</template>
