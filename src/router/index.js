import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "@/views/About.vue"
import Layout from '@/views/event/Layout.vue'
import Passenger from '@/views/event/Passenger.vue'
import Airline from '@/views/event/Airline.vue'
import NotFound from '@/views/NotFound.vue'
import Edit from '@/views/event/Edit.vue'
import NProgress from "nprogress"
import EventService from '@/services/EventService.js'
import GStore from '@/store'
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
    beforeEnter: (to)=>{
      return EventService.getEvent(to.params.id)// Return and params.id
      .then(response =>{
        // Set data here
        GStore.passenger = response.data //<--- Store the events
      })
      .catch((error)=>{
        if (error.response && error.response.status == 204){
          return {// <--- Return
          name: '404Resource',
          params: {resource:'event'}
          }
        }else{
          return {name: 'NetworkError'} // <--- Return
        }
      })
    },

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
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition
    }else {
      return {top:0}
    }
  }
})

router.beforeEach(()=>{
  NProgress.start()
})
router.afterEach(()=>{
  NProgress.done()
})

export default router;
