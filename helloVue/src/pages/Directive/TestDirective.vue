<template>
  <div>
    <div class="btn" v-sensor-log="msg">
      {{msg}}
    </div>
    <button @click="handleBtnClick">button</button>
  </div>
</template>

<script>
export default {
  name: 'TestDirective',
  data () {
    return {
      msg: {name: 'lawl1et', age: 1}
    }
  },
  methods: {
    handleBtnClick () {
      this.msg.name = 'niya'
    },
    handleLog () {
      this.msg.name = 'niya'
      return this.msg
    }
  },
  directives: {
    sensorLog: {
      bind (el, binding) {
        console.log('bind el', el)
        console.log('bind value', binding.value)
        console.log('bind modifiers', binding.modifiers)
        console.log('------------------------>')
        el.addEventListener('click', (e) => {
          let data = binding.value
          console.log(data)
        })
      },
      update (el, binding, vnode, oldVnode) {
        console.log('update el', el)
        console.log('update value', binding.value)
        console.log('update vnode', vnode)
        console.log('update oldVnode', oldVnode)
        console.log('------------------------>')
      }
    }
  }
}
</script>

<style scoped>

</style>
