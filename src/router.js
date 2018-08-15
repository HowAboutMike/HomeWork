import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Users from './views/Users.vue'
import EditUser from './views/EditUser.vue'
import AddUser from './views/AddUser.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/addUser',
      name: 'AddUser',
      component: AddUser
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/editUser/:id',
      name: 'EditUser',
      component: EditUser
    }
  ]
})
