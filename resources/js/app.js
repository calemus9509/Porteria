import "./bootstrap";
import { createApp } from "vue/dist/vue.esm-bundler.js";
import { createRouter, createWebHashHistory } from "vue-router";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
import Example from "@/pages/Example.vue";
import Pokemon from "@/pages/Pokemon.vue";

const routes = [
    { path: "/Example", component: Example },
    { path: "/Pokemon", component: Pokemon },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp();
app.use(router);
app.mount("#app");

// const app = createApp({ components: { Example } });
// app.mount("#app");

// window.app = createApp({
//     setup() {
//         const selectedComponent = ref(Pokemon);
//         return {
//             selectedComponent,
//         };
//     },
//     components: {
//         Example,
//         Pokemon,
//     },
// }).mount("#app");
