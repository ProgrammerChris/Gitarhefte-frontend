import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Artists from "../views/Artists.vue";
import Artist from "../components/Artist.vue";

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
    component: Artist,
    children: [
      {
        path: '', 
        component: Artist
      }
    ]
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
