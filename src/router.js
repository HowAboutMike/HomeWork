import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/addUser',
      name: 'AddUser',
      component: () => import('./views/AddUser.vue')
    },
    {
      path: '/users',
      name: 'Users',
      component: () => import('./views/Users.vue')
    },
    {
      path: '/phoneBook',
      name: 'PhoneBook',
      component: () => import('./views/PhoneBook.vue')
    },
    {
      path: '/editUser/:id',
      name: 'EditUser',
      component: () => import('./views/EditUser.vue')
    }
  ]
})
