import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "@/views/About.vue"
import Layout from '@/views/event/Layout.vue'
import Passenger from '@/views/event/Passenger.vue'
import Airline from '@/views/event/Airline.vue'
import NotFound from '@/views/NotFound.vue'
import Edit from '@/views/event/Edit.vue'

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
      },
      {
        path: 'edit',
        name: 'Edit',
        component: Edit
      }
    ]
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
