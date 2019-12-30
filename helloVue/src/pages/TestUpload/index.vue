<template>
  <div class="wrap">
    <h2>原始图片</h2>
    <div class="img-gallery">
      <div class="img" v-for="(item, index) in originImgs" :key="index">
        <div class="orientation">{{ item.orientation }}</div>
        <img :src="item.src" alt="">
      </div>
    </div>
    <br />
    <h2>转化后图片</h2>
    <div class="img-gallery">
      <template v-if="hasList(imgs)">
        <div class="img" v-for="(item, index) in imgs" :key="index">
          <div class="orientation">{{ item.name }}</div>
          <img :src="item.src" alt="">
        </div>
      </template>
    </div>
    <div class="btn-upload" @click="handleUploadClick">
      上传
    </div>
  </div>
</template>

<script>
import Upload from './Upload'
const ORIGIN_IMGS = [
  {
    src: require('@/images/1.jpg'),
    orientation: '1'
  },
  {
    src: require('@/images/3.jpg'),
    orientation: '3'
  },
  {
    src: require('@/images/6.jpg'),
    orientation: '6'
  },
  {
    src: require('@/images/8.jpg'),
    orientation: '8'
  }
]
export default {
  name: 'TestUpload',
  data () {
    return {
      imgs: [],
      originImgs: ORIGIN_IMGS, // 原图片
      upload: new Upload({showLog: true}) // 图片上传对象
    }
  },
  methods: {
    hasList (arr) {
      return arr && Array.isArray(arr) && arr.length > 0
    },
    handleUploadClick () {
      this.upload.select()
        .then(res => {
          if (this.hasList(res)) {
            this.imgs = res
          }
        })
        .catch(err => {
          console.log('handleUploadClick err', err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  .img-gallery{
    display: flex;
    align-items: center;
    padding: 10px;
    .img{
      width: 25%;
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .btn-upload{
    width: 100px;
    padding: 8px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;/*no*/
  }
}
</style>
