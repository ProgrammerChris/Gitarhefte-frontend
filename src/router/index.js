import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Add from "../views/Add.vue";
import Artists from "../views/Artists.vue";
import Artist from "../components/Artist.vue";
import Booklets from "../views/Booklets.vue";
import Booklet from '../components/Booklet.vue';
import Login from "../views/Login.vue";
import Results from "../views/Results.vue";

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
    path: "/:id/sanger",
    name: "Sanger",
    component: Artists,
    children: [
      {
        path: '',
        component: Artist
      }
    ]
  },
  {
    path: "/hefter/:id",
    name: "Hefte",
    component: Booklets,
    children: [
      {
        path: '',
        component: Booklet
      }
    ]
  },
  {
    path: "/resultater/:id",
    name: "Results",
    component: Results,
    children: [
      {
        path: '',
        component: Artists
      }
    ]
  },
  {
    path: "/logginn",
    name: "Logg inn",
    component: Login
  },
  {
    path: "/leggtil",
    name: "Legg til",
    component: Add
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
