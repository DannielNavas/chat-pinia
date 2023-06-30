import { main } from "@/core/auth.js";
import { Icon } from "@iconify/vue";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";

const app = createApp(App);

const pinia = createPinia();

app.use(router);
app.use(pinia);
app.component("Icon", Icon);

main();

app.mount("#app");
