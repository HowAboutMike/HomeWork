<template>
  <div>

    <div class="form-group">
      <label>Имя</label>
      <input type="text" class="form-control" v-model="localUser.firstName">
    </div>

    <div class="form-group">
      <label>Фамилия</label>
      <input type="text" class="form-control" v-model="localUser.lastName">
    </div>

    <div class="form-group">
      <label>Возраст</label>
      <input type="number" class="form-control" v-model="localUser.age">
    </div>

    <div class="form-group">
      <label>Баланс</label>
      <input type="text" class="form-control" v-model="localUser.balance">
    </div>

    <div class="form-group">
      <label>Роль</label>
      <select v-model="localUser.accessLevel" class="form-control">
        <option disabled value="">Выберите один из вариантов</option>
        <option value="admin">Администратор</option>
        <option value="user">Пользователь</option>
      </select>
    </div>

    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" v-model="localUser.email">
    </div>

    <div class="form-group">
      <label>Телефон</label>
      <input type="text" class="form-control" v-model="localUser.phone">
    </div>

    <div class="form-group">
    <label>Адрес</label>
      <input type="text" class="form-control" v-model="localUser.address">
    </div>

    <div class="form-group">
      <label>Компания</label>
      <input type="text" class="form-control" v-model="localUser.company">
    </div>

    <div class="form-group">
      <label>О вас</label>
      <textarea class="form-control" v-model="localUser.about"/>
    </div>

  </div>
</template>

<script>
export default {
  name: 'UserForm',
  model: {
    prop: 'user',
    event: 'userChanged'
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    //Local user obj
    localUser: null
  }),
  watch: {
    localUser: {
      deep: true,
      handler() {
        this.$emit('userChanged', this.localUser)
      }
    },
    $route() {
      this.updateLocalUser()
    }
  },
  created() {
    this.updateLocalUser()
  },
  methods: {
    updateLocalUser() {
      this.localUser = Object.assign({}, this.user)
    }
  }
}
</script>
