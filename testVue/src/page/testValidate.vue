<template>
  <div>
    <!-- name: <input name="name" type="text" v-validate="{required: true}" v-model="name">
    {{!errors.has('name')}}<br />
    age: <input name="age" type="text" v-validate="{required: true}" v-model="age">
    {{!errors.has('age')}}<br /> -->

    <v-model-com name="phone" v-model="validateParams" v-validate="{required: true, phone: true}"></v-model-com>{{!errors.has('phone')}}

    <button @click="handleClick">VModel click</button>
  </div>
</template>

<script>
import VModelCom from '@/components/VModelCom'
import '@/assets/validate'
export default {
  $_veeValidate: {
    validator: 'new'
  },
  name: 'testValidate',
  data () {
    return {
      validateParams: {
        phone: ''
      }
    }
  },
  components: {
    VModelCom
  },
  methods: {
    handleClick () {
      this.$validator.validateAll().then((result) => {
        console.log(result)
      })
      // this.$children.forEach(vm => {
      //   vm.$validator.validateAll().then((result) => {
      //     console.log(result)
      //   })
      // })
    }
  }
}
</script>

<style scoped>
input{
  border: 1px solid black
}
</style>
