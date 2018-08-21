<template>
  <div>

    <div class="form-group">
      <label>Имя</label>
      <input 
        v-model="localUser.firstName" 
        type="text" 
        class="form-control">
    </div>

    <div class="form-group">
      <label>Фамилия</label>
      <input 
        v-model="localUser.lastName" 
        type="text" 
        class="form-control">
    </div>

    <div class="form-group">
      <label>Возраст</label>
      <input 
        v-model.number="localUser.age" 
        type="number" 
        class="form-control">
    </div>

    <div class="form-group">
      <label>Баланс</label>
      <input 
        v-model="localUser.balance" 
        type="text" 
        class="form-control">
    </div>

    <div class="form-group">
      <label>Роль</label>
      <select 
        v-model="localUser.accessLevel" 
        class="form-control">
        <option 
          disabled 
          value="">Выберите один из вариантов</option>
        <option value="admin">Администратор</option>
        <option value="user">Пользователь</option>
      </select>
    </div>

    <div class="form-group">
      <label>Email</label>
      <input 
        v-model="localUser.email" 
        type="email" 
        class="form-control">
    </div>
    <div class="form-group">
      <label>Avatar</label>
      <br>
      <img 
        :src="localUser.picture" 
        class="img-thumbnail">
      <input 
        v-model="localUser.picture" 
        type="text" 
        class="form-control">

      <input 
        ref="fileUploader" 
        type="file" 
        class="hidden"
        @change="uploadFile">
      <button 
        type="button" 
        class="btn btn-primary"
        @click="selectNewImage">
        Загрузить новый файл
      </button>
    </div>

    <div class="form-group">
      <label>Телефон</label>
      <input 
        v-model="localUser.phone" 
        type="text" 
        class="form-control">
    </div>

    <div class="form-group">
      <label>Адрес</label>
      <input 
        v-model="localUser.address" 
        type="text" 
        class="form-control">
    </div>

    <div class="form-group">
      <label>Компания</label>
      <input 
        v-model="localUser.company" 
        type="text" 
        class="form-control">
    </div>

    <div class="form-group">
      <label>О вас</label>
      <textarea 
        v-model="localUser.about" 
        class="form-control"/>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

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
    },
    selectNewImage() {
      this.$refs.fileUploader.click()
    },
    uploadFile() {
      const url = 'https://api.imgur.com/3/image'
      const data = new FormData()
      data.append('image', this.$refs.fileUploader.files[0])

      const config = {
        headers: {
          Authorization: 'Client-ID af37c739d4ab817'
        }
      }
      axios
        .post(url, data, config)
        .then(response => response.data)
        .then(response => {
          this.localUser.picture = response.data.link
          this.$refs.fileUploader.value = ''
        })
    }
  }
}
</script>
<style>
.hidden {
  display: none;
}
</style>
