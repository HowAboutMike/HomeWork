<template>

  <div>
    <h2>Добавление пользователя</h2>
    <user-form v-model="user"/>

    <input type="button" class="button button-primary" @click="saveData" value="Сохранить"/>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'AddUser',
  components: {
    UserForm: () => import('@/components/UserForm.vue')
  },
  data: function() {
    return {
      user: {}
    }
  },
  methods: {
    saveData() {
      axios.post(`http://localhost:3000/users`, this.user)
    }
  }
}
</script>
