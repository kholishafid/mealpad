<script setup>
import { Motion } from "@motionone/vue";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { $ref } from "vue/macros";

const props = defineProps(["meal"]);
const imgLoad = $ref(true);
const isImgLoading = computed(() => {
  return imgLoad ? "none" : "block";
});
</script>

<template>
  <Motion class="recipe">
    <article class="recipe__card">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMealThumb"
        :style="{ display: isImgLoading }"
        loading="lazy"
        @load="imgLoad = false"
      />
      <div v-if="imgLoad" class="recipe_thumb recipe__thumb--loading">
        <span aria-busy="true"></span>
      </div>
      <footer class="recipefooter">
        <div class="recipefooter__head">
          <h4>
            {{ meal.strMeal }}
          </h4>
        </div>
        <div class="recipefooter__action">
          <router-link :to="`recipe/${meal.idMeal}`">Recipe</router-link>
        </div>
      </footer>
    </article>
  </Motion>
</template>
