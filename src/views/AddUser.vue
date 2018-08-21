<template>

  <div>
    <h2>Добавление пользователя</h2>
    <user-form v-model="user"/>

    <input 
      type="button" 
      class="button button-primary" 
      value="Сохранить" 
      @click="saveData">
  </div>

</template>

<script>
import axios from '@/axiosConfig.js'

const defaultUser = {
  id: null,
  guid: '',
  isActive: false,
  balance: '',
  picture: 'http://placehold.it/128x128',
  age: 0,
  eyeColor: '',
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  address: '',
  about: '',
  registered: ''
}

export default {
  name: 'AddUser',
  components: {
    UserForm: () => import('@/components/UserForm.vue')
  },
  data: () => ({
    user: defaultUser
  }),
  methods: {
    saveData() {
      axios.post(`/users`, this.user), this.goToList()
    },
    goToList() {
      this.$router.replace({ name: 'Users' })
    }
  }
}
</script>
