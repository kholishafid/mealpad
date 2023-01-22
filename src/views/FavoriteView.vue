<template>
  <main class="container" v-if="favoriteList">
    <div v-if="favoriteList.length > 0">
      <article v-for="meal in favoriteList" key="meal.idMeal">
        <span
          data-tooltip="remove"
          @click="removeFromFavorite(meal.idMeal)"
          class="remove-button"
        >
          <span class="material-icons-outlined"> remove </span>
        </span>
        <h5>{{ meal.strMeal }}</h5>
        <div>
          <div class="tag">
            <span># {{ meal.strCategory }}</span>
            <span># {{ meal.strArea }}</span>
          </div>
          <span
            role="link"
            @click="router.push({ path: `recipe/${meal.idMeal}` })"
            class="link"
            >Recipe</span
          >
        </div>
      </article>
    </div>
    <div v-else>
      <p>You haven't added yet....</p>
    </div>
  </main>
</template>

<style scoped>
article {
  margin: 1rem;
  padding: 1rem;
  position: relative;
}
article h5 {
  margin: 0;
}
.remove-button {
  position: absolute;
  right: var(--block-spacing-horizontal);
  border: none;
  cursor: pointer;
}
.tag span {
  margin-right: 10px;
}
.link {
  cursor: pointer;
}
</style>
<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";

const favoriteList = ref(null);

const router = useRouter();

const getLocalStorage = () => {
  favoriteList.value = JSON.parse(localStorage.getItem("favoriteMeals"));
};

const clearFavoriteList = () => {
  favoriteList.value = null;
};

const removeFromFavorite = (id) => {
  favoriteList.value = favoriteList.value.filter((item) => {
    console.log(item.idMeal);
    return item.idMeal != id;
  });

  localStorage.setItem("favoriteMeals", JSON.stringify(favoriteList.value));
};

onMounted(getLocalStorage);

onUnmounted(clearFavoriteList);
</script>
