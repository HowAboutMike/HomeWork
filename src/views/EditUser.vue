<template>

  <div>
    <h2>Редактирование пользователя</h2>
    <div 
      v-if="!user" 
      class="alert alert-warning">
      Загрузка...
    </div>
    <user-form 
      v-else 
      v-model="user"/>

    <button 
      class="btn btn-primary" 
      @click="saveData"> Сохранить</button>
    <button 
      class="btn btn-danger" 
      @click="deleteData">Удалить</button>
    <button 
      v-if="hasPrevUser" 
      class="btn btn-primary" 
      @click="prevUser">Предыдущий </button>
    <button 
      v-if="hasNextUser" 
      class="btn btn-primary" 
      @click="nextUser">Следующий</button>
  </div>

</template>

<script>
import axios from '@/axiosConfig.js'

export default {
  name: 'EditUser',
  components: {
    UserForm: () => import('@/components/UserForm.vue')
  },
  data: function() {
    return {
      user: null,
      userCount: null
    }
  },
  computed: {
    id() {
      return parseInt(this.$route.params.id, 10)
    },
    hasPrevUser() {
      return !(this.id === 0)
    },
    hasNextUser() {
      return !(this.id === this.userCount)
    }
  },
  watch: {
    $route: 'loadData'
  },
  mounted() {
    this.loadData()
    this.loadUsersCount()
  },
  methods: {
    loadUsersCount() {
      axios.get(`/users/`).then(response => {
        this.userCount = response.data.length
      })
    },
    loadData() {
      axios.get(`/users/${this.id}`).then(response => {
        this.user = response.data
      })
    },
    saveData() {
      axios.patch(`/users/${this.id}`, this.user)
      this.goToList()
    },
    deleteData() {
      axios.delete(`/users/${this.id}`)
      this.goToList()
    },
    nextUser() {
      this.$router.push(`${this.id + 1}`)
    },
    prevUser() {
      this.$router.push(`${this.id - 1}`)
    },
    goToList() {
      this.$router.replace({ name: 'Users' })
    }
  }
}
</script>

<style>
.btn {
  margin: 10px;
}
</style>
