import { main } from "@/core/auth.js";
import { Icon } from "@iconify/vue";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";

// import useProfileStore from "./stores/profile.js";

const app = createApp(App);

const pinia = createPinia();

app.use(router);
app.use(pinia);
app.component("Icon", Icon);

// const profileStore = useProfileStore();

// console.log(profileStore);
// TODO: se llama a la funcion main para obtener los datos del usuario logueado POR BUENA PARACTICA SE HACE EN EL MAIN POR UN ARCHIO POR FUERA DE MAIN DE VUE
main();

app.mount("#app");
