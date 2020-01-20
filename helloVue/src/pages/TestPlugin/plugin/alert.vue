<template>
    <div class="alert" v-if="notices.length > 0">
        <div class="alert-main" v-for="item in notices" :key="item.name">
            <div class="alert-content">{{ item.content }} - {{ name }}</div>
        </div>
    </div>
</template>
<script>
let seed = 0

function getUuid () {
  return 'alert_' + (seed++)
}

export default {
  name: 'Alert',
  props: {
    name: String
  },
  data () {
    return {
      notices: []
    }
  },
  methods: {
    add (notice) {
      const name = getUuid()

      let _notice = Object.assign({
        name: name
      }, notice)

      this.notices.push(_notice)

      // 定时移除，单位：秒
      const duration = notice.duration
      setTimeout(() => {
        this.remove(name)
      }, duration * 1000)
    },
    remove (name) {
      const notices = this.notices

      for (let i = 0; i < notices.length; i++) {
        if (notices[i].name === name) {
          this.notices.splice(i, 1)
          break
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.alert{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.7);
  .alert-main{
    display: flex;
  }
}
</style>
