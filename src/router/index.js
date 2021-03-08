import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Artists from "../views/Artists.vue";
import Artist from "../views/Artist.vue";
import About from "../views/About.vue"
import Results from "../views/Results.vue"
import Booklet from "../views/Booklet.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/artister",
    name: "Artister",
    component: Artists
  },
  {
    path: "/artist/:id",
    name: "Artist",
    component: Artist
  },
  {
    path: "/om",
    name: "Om",
    component: About
  },
  {
    path: "/resultater/:id",
    name: "Resultater",
    component: Results
  },
  {
    path: "/hefte",
    name: "Hefte",
    component: Booklet
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
