<template>
  <div class="wrap">
    localForage
    <div class="btn-group">
      <!-- <div class="btn create" @click="createDB">createDB</div> -->
      <!-- <div class="btn create" @click="createTable">createTable</div> -->
      <div class="btn add" @click="add">add</div>
      <div class="btn read" @click="read">read</div>
      <div class="btn readAll" @click="readAll">readAll</div>
      <div class="btn update" @click="update">update</div>
      <div class="btn remove" @click="remove">remove</div>
    </div>
    <div class="userId">
      userId: <input class="form-item" type="text" v-model="userId">
    </div>
    <div class="name">
      name: <input class="form-item" type="text" v-model="name">
    </div>
    <div class="email">
      age: <input class="form-item" type="text" v-model="age">
    </div>
    <div class="email">
      email: <input class="form-item" type="text" v-model="email">
    </div>
  </div>
</template>

<script>
import * as localForage from 'localforage'
export default {
  name: 'localForage',
  data () {
    return {
      name: '',
      email: '',
      age: 0,
      userId: 0
    }
  },
  created () {
    localForage.config({
      driver: localForage.INDEXEDDB,
      name: 'QingQing',
      storeName: 'Person',
      version: 1.0,
      description: '还行'
    })
  },
  methods: {
    async add () {
      const { userId, name, age, email } = this
      let res = await localForage.setItem(userId, { userId, name, age, email })
      console.log('add res', res)
    },
    async read () {
      const { userId } = this
      let res = await localForage.getItem(userId)
      console.log('read res', res)
    },
    async readAll () {

    },
    async update () {

    },
    async remove () {

    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  .btn-group {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .btn {
      padding: 10px;
      border: 1px solid black; /*no*/
      border-radius: 10px;
    }
  }
  .form-item {
    border: 1px solid black;/*no*/
  }
}

</style>
