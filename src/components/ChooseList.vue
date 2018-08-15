<template>
<select v-model="localcurrentUsersShown" >
<option disabled value="">Выберите один из вариантов</option>
  <option v-for="(option, index) in options" :key="index">{{option}}</option>
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
      required: true
    },
    currentUsersShown: {
      type: Number,
      default: 5
    }
  },
  data: () => ({
    localcurrentUsersShown: null
  }),
  watch: {
    localcurrentUsersShown() {
      this.$emit('rowsChanged', parseInt(this.localcurrentUsersShown))
    }
  },
  created() {
    this.localcurrentUsersShown = this.currentUsersShown
  }
}
</script>
