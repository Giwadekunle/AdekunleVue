import {createRouter, createWebHistory} from 'vue-router'

import Homepage from "./../components/homepage.vue"
import menu from "./../components/Menu.vue"
import aboutus from "../components/Aboutus.vue"
import Contactus from "./../components/Contactus.vue"
import Menu from './../components/Menu.vue'


const routes = [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
        path: '/Aboutus',
        name: 'aboutus',
        component: aboutus,
      },
      {
        path: '/Menu',
        name: 'menu',
        component: Menu,
      },
      {
        path: '/Contactus',
        name: 'contactus',
        component: Contactus,
      },

]
const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router