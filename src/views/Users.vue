<template>
<div>
  <h2>Список пользователей</h2>

  <div v-if="loading" class="alert alert-warning">
    Загрузка...
  </div>
  <div v-if="!users.length">
    Нет пользователей
  </div>
  <user-list v-else :users="users"></user-list>

  <button type="button" class="button button-primary" @click = "loadData">
    Обновить
  </button>
</div>


</template>

<script>
import axios from 'axios'

export default {
  name: 'Users',
  components: {
    UserList: () => import('@/components/UserList.vue')
  },
  data: () => ({
    // Список пользователей
    users: [],
    loading: true
  }),
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.loading = true

      axios
        .get('http://localhost:3000/users')
        .then(response => {
          this.users = response.data
          this.loading = false
        })
        .catch(error => console.error(error))
    }
  }
}
</script>

<style>
</style>
