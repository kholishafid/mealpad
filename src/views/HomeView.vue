<script setup>
import MealCard from '../components/HomeMeal.vue'

</script>

<template>
  <main class="w-screen">
    <div class="border-x border-paragraph">
      <div class="flex flex-col items-center w-full border-paragraph py-20">
        <div>
          <img class="max-w-[300px]" src="@/assets/vegan-recipe.png" alt="lets - cook - illust">
        </div>
        <div class="text-center my-4">
          <h1 class="text-3xl text-paragraph">Lets Cooking With Me!</h1>
        </div>
        <div class="mt-2">
          <router-link to="/search" class="px-4 py-2 bg-button text-paragraph rounded border border-paragraph block">
            Search
            Recipes</router-link>
        </div>
      </div>
      <div>
        <Suspense>
          <MealCard />
          <template #fallback>
            <div>
              <div class="border border-paragraph border-b-0 py-3 bg-tertiary h-14 box-border"></div>
            </div>
          </template>
        </Suspense>
      </div>
    </div>
  </main>
</template>
