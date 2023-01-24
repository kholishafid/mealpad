import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "../pico.min.css";
import "../style.css";
import "../global.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
