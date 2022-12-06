import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
import RecipeView from "../views/RecipeView.vue";
import FavoriteView from "../views/FavoriteView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
    },
    {
      path: "/recipe/:id",
      name: "recipe",
      component: RecipeView,
    },
    {
      path: "/favorite",
      name: "favorite",
      component: FavoriteView,
    },
  ],
});

export default router;
