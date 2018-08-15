<template>
<div>

  <table class="table table-hover">
    <thead>
    <tr>
      <th colspan="6">
      Всего пользователей: {{ totalUsers }}
      </th>
    </tr>
    <tr>
      <th colspan="8">
      <choose-list v-model="currentUsersShown" :options="[5,7,10,15]"/>
      </th>
    </tr>
    <tr>
      <th colspan="8">
      Выбрано элементов на страницу: {{ currentUsersShown }}
      </th>
    </tr>
      <tr>
        <th>#</th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Активен</th>
        <th>Баланс</th>
        <th>Email</th>
        <th>Телефон</th>
        <th>Зарегестрирован</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in paginationUserList" v-bind:key ="item.id">
        <td><router-link :to="'/editUser/' + item.id">#{{item.id}}</router-link></td>
        <td>{{item.firstName}}</td>
        <td>{{item.lastName}}</td>
        <td>{{item.isActive}}</td>
        <td>{{item.balance}}</td>
        <td>{{item.email}}</td>
        <td>{{item.phone}}</td>
        <td>{{item.registered}}</td>
      </tr>
    </tbody>
  </table>
  <p>Выбранная страница: {{currentPage}}</p>
  <Pagination v-model="currentPage" :total-users = "totalUsers" :current-users-shown="currentUsersShown"></Pagination>
</div>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  components: {
    Pagination: () => import('@/components/Pagination.vue'),
    ChooseList: () => import('@/components/ChooseList.vue')
  },
  data: () => ({
    currentUsersShown: 5,
    currentPage: 1
  }),
  watch: {
    currentUsersShown() {
      this.currentPage = 1
    }
  },
  computed: {
    totalUsers() {
      return this.users.length
    },
    paginationUserList() {
      return this.users.slice(
        (this.currentPage - 1) * this.currentUsersShown,
        (this.currentPage - 1) * this.currentUsersShown + this.currentUsersShown
      )
    }
  }
}
</script>
