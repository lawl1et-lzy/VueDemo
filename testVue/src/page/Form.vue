<template>
  <div>
    <form id="form" ref="form" @submit.prevent>
      name: <input type="text" name="name" v-model="name">
      <br />
      sex:
      man:<input type="radio" name="sex" v-model="sex" value="man">
      male:<input type="radio" name="sex" v-model="sex" value="male">
      <br />
      age: <input type="text" name="age" v-model="age">
      <button @click="upload">submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data () {
    return {
      name: '',
      sex: '',
      age: ''
    }
  },
  methods: {
    upload () {
      let formdata = new FormData(this.$refs.form)
      console.log(this.$refs.form)
      console.log(formdata)
    }
  }
}
</script>

<style scoped>
  input {
    border: 1px solid black;
  }
</style>
