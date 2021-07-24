import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "@/views/About.vue"
import PDetails from "@/views/PDetails.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/passenger/:id",
    name:"PDetails",
    component: PDetails,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
