import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "@/views/About.vue"
import Layout from '@/views/event/Layout.vue'
import Passenger from '@/views/event/Passenger.vue'
import Airline from '@/views/event/Airline.vue'

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
    name:"Layout",
    component: Layout,
    props: true,

    children: [
      {
        path: '',
        name: 'Passenger',
        component: Passenger
      },
      {
        path: 'airline',
        name: 'Airline',
        props: true,
        component: Airline
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
