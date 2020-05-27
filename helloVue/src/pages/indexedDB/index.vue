<template>
  <div class="wrap">
    IndexedDB
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
let db
let indexedDB =
  window.indexedDB ||
  window.webkitIndexedDB ||
  window.mozIndexedDB ||
  window.msIndexedDB
export default {
  name: 'IndexedDB',
  data () {
    return {
      name: '',
      email: '',
      age: 0,
      userId: 0
    }
  },
  created () {
    this.createDB()
  },
  methods: {
    createDB () {
      const self = this
      const request = indexedDB.open('person', 1)
      request.onerror = function (event) {
        console.log('onerror', event)
      }
      request.onsuccess = function (event) {
        console.log('onsuccess', event)
        db = request.result
      }
      request.onupgradeneeded = function (event) {
        console.log('onupgradeneeded', event)
        db = event.target.result
        self.createObjectStore()
      }
    },
    createObjectStore () {
      let objectStore
      if (!db.objectStoreNames.contains('person')) {
        objectStore = db.createObjectStore('person', { keyPath: 'userId', autoIncrement: false })
        objectStore.createIndex('name', 'name', { unique: false })
        objectStore.createIndex('email', 'email', { unique: true })
      }
    },
    add () {
      const { userId, name, age, email } = this
      let request = db.transaction(['person'], 'readwrite')
        .objectStore('person')
        .add({ userId, name, age, email })

      request.onsuccess = function (event) {
        console.log('数据写入成功', event)
      }

      request.onerror = function (event) {
        console.log('数据写入失败', event)
      }
    },
    read () {
      var transaction = db.transaction(['person'])
      var objectStore = transaction.objectStore('person')
      console.log(objectStore)
      var request = objectStore.get('1')

      request.onerror = function (event) {
        console.log('事务失败')
      }

      request.onsuccess = function (event) {
        if (request.result) {
          console.log('read request.result: ', request.result)
        } else {
          console.log('未获得数据记录')
        }
      }
    },
    readAll () {
      var objectStore = db.transaction('person').objectStore('person')

      objectStore.openCursor().onsuccess = function (event) {
        var cursor = event.target.result

        if (cursor) {
          console.log('readAll cursor', cursor)
          cursor.continue()
        } else {
          console.log('没有更多数据了！')
        }
      }
    },
    update () {
      const { userId, name, age, email } = this
      var request = db.transaction(['person'], 'readwrite')
        .objectStore('person')
        .put({ userId, name, age, email })

      request.onsuccess = function (event) {
        console.log('数据更新成功')
      }

      request.onerror = function (event) {
        console.log('数据更新失败')
      }
    },
    remove () {
      var request = db.transaction(['person'], 'readwrite')
        .objectStore('person')
        .delete(1)

      request.onsuccess = function (event) {
        console.log('数据删除成功')
      }
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
