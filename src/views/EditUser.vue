<template>

  <div>
    <h2>Редактирование пользователя</h2>
    <div v-if="!user" class="alert alert-warning">
      Загрузка...
    </div>
    <user-form v-else v-model="user"/>

    <button class="btn btn-primary" @click="saveData"> Сохранить</button>
    <button class="btn btn-danger" @click="deleteData">Удалить</button>
    <button class="btn btn-primary" v-if="hasPrevUser" @click="prevUser">Предыдущий </button>
    <button class="btn btn-danger" v-if="hasNextUser" @click="nextUser">Следующий</button>
  </div>

</template>

<script>
import axios from 'axios'

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
      return parseInt(this.$route.params.id)
    },
    hasPrevUser() {
      return !(this.id === 0)
    },
    hasNextUser() {
      return !(this.id === this.userCount)
    }
  },
  mounted() {
    this.loadData()
    this.loadUsersCount()
  },
  watch: {
    $route() {
      this.loadData()
    }
  },
  methods: {
    loadUsersCount() {
      axios.get(`http://localhost:3000/users/`).then(response => {
        this.userCount = response.data.length
      })
    },
    loadData() {
      axios.get(`http://localhost:3000/users/${this.id}`).then(response => {
        this.user = response.data
      })
    },
    saveData() {
      axios.patch(`http://localhost:3000/users/${this.id}`, this.user)
      this.goToList()
    },
    deleteData() {
      axios.delete(`http://localhost:3000/users/${this.id}`)
      this.goToList()
    },
    nextUser() {
      this.$router.push(`${this.id + 1}`)
      //  this.loadData()
    },
    prevUser() {
      this.$router.push(`${this.id - 1}`)
      //this.loadData()
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
