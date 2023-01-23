<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { $ref } from "vue/macros";

const router = useRouter();
const props = defineProps(["meal"]);
const imgLoad = $ref(true);
const isImgLoading = computed(() => {
  return imgLoad ? "hidden" : "block";
});
</script>

<template>
  <article>
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMealThumb"
      loading="lazy"
      :style="{ display: isImgLoading }"
      @load="imgLoad = false"
    />
    <div v-if="imgLoad" class="recipe__thumb--loading">
      <span aria-busy="true"></span>
    </div>
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
  margin: 0;
  overflow: hidden;
}

article footer {
  padding: 1rem;
  margin: 0;
}

footer h5 {
  margin-bottom: 5px;
  height: 28px;
  overflow: hidden;
  text-overflow: ellipsis;
}

footer a {
  cursor: pointer;
}

.recipe__thumb--loading {
  width: 100%;
  aspect-ratio: 1/ 1;
  background-color: rgba(255, 255, 255, 0.1);
  display: grid;
  place-items: center;
}
</style>
