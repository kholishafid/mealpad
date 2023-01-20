<template>
  <nav class="container-fluid">
    <ul>
      <img src="../assets/Bowl.png" alt="bowl" style="width: 50px" />
      <li><strong>MealPad</strong></li>
    </ul>
    <ul class="items-center gap-3 hidden sm:flex">
      <li>
        <router-link to="/" class="contrast"> Home </router-link>
      </li>
      <li>
        <router-link to="/search" class="contrast"> Search </router-link>
      </li>
      <li>
        <router-link to="/favorite" class="contrast"> Favorites </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
navs {
  background-color: hsla(0, 0%, 0%, 0.1);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid hsla(0, 0%, 50%, 0.1);
}

strong {
  color: var(--contrast);
}
</style>
