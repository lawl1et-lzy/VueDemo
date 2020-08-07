<template>
  <div class="container">
    <!-- <input id="input" type="file" @change="handleFileChange" /> -->
    <input id="input" type="file" />
    <button @click="handleUpload">上传</button>
  </div>
</template>

<script>
// import './dataStructure/Recursion'
// import BinarySearchTree from './dataStructure/tree/BinarySearchTree'
// import './dataStructure/sort/insertionSort'
// import './dataStructure/sort/selectionSort'
// import './dataStructure/sort/mergeSort'
// import './dataStructure/sort/quickSort'
// import './dataStructure/search/binarySearch'
import './dataStructure/test'
// import './designMode/Observer'
const SIZE = 10 * 1024 * 1024
export default {
  name: 'Index',
  data: () => ({
    container: {
      file: null
    },
    data: []
  }),
  created () {

  },
  mounted () {
    const inputEl = document.querySelector('#input')
    inputEl.addEventListener('change', (e) => {
      const [file] = e.target.files
      if (!file) return
      Object.assign(this.$data, this.$options.data())
      console.log('data', this.$data)
      console.log('options', this.$options.data())
      this.container.file = file
    })
  },
  methods: {
    // handleFileChange (e) {
    //   const [file] = e.target.files
    //   if (!file) return
    //   Object.assign(this.$data, this.$options.data())
    //   console.log('data', this.$data)
    //   console.log('options', this.$options.data())
    //   this.container.file = file
    // },
    // 切片
    createFileChunk (file, size = SIZE) {
      const fileChunkList = []
      let cur = 0
      while (cur < file.size) {
        fileChunkList.push({ file: file.slice(cur, cur + size) })
        cur += size
      }
      console.log('fileChunkList', fileChunkList)
      return fileChunkList
    },
    // 点击上传
    async handleUpload () {
      const fileChunkList = this.createFileChunk(this.container.file, SIZE)
      this.data = fileChunkList.map((chunk, idx) => {
        return {
          chunk: chunk.file,
          hash: `${this.container.file.name}_${idx}`,
          fileHash: '(spark-md5) 根据内容生成 hash '
        }
      })
      await this.uploadChunks()
    },
    async uploadChunks () {
      const requestList = this.data.map(({chunk, hash}) => {
        const formData = new FormData()
        formData.append('chunk', chunk)
        formData.append('name', this.container.file.name)
        formData.append('hash', hash)
        return formData
      })
      const promises = requestList.map(({ formData }) => {
        return this.request({
          url: 'http://localhost:3000',
          data: formData
        })
      })
      await Promise.all(promises)
    },
    request ({
      url,
      method = 'post',
      data,
      headers = {},
      requestList
    }) {
      return new Promise(resolve => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        Object.keys(headers).forEach(key =>
          xhr.setRequestHeader(key, headers[key])
        )
        xhr.send(data)
        xhr.onload = e => {
          resolve({
            data: e.target.response
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.bfc {
  overflow: hidden;
}
.box {
  width: 100%;
  height: 150px;
}
.box1 {
  background: chocolate;
  margin-bottom: 50px;
}
.box2 {
  background: cornsilk;
  margin-top: 100px;
}
</style>
