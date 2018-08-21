<template>
  <select v-model="currentUsersShown" >
    <option 
      disabled 
      value="">Выберите один из вариантов</option>
    <option 
      v-for="(option, index) in options" 
      :key="index">{{ option }}</option>
  </select>
</template>

<script>
export default {
  name: 'ChooseList',
  model: {
    prop: 'currentUsersShown',
    event: 'rowsChanged'
  },
  props: {
    options: {
      type: Array,
      default() {
        return [5, 7, 10]
      }
    },
    currentUsersShown: {
      type: Number,
      required: true
    }
  },
  watch: {
    currentUsersShown() {
      this.$emit('rowsChanged', parseInt(this.currentUsersShown))
    }
  }
}
</script>
