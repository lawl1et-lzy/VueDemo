<template>
  <div class="starWrap">
    <div class="">星级：{{ level }}</div>
    <div class="starList">
      <div class="star" v-for="(item, index) in starList" :key="index" @click="handleStarClick(index)">
        <img :src="item.imgUrl" alt="">
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
const STAR_OFF = require('../assets/star/star24_off@3x.png')
const STAR_ON = require('../assets/star/star24_on@3x.png')
export default {
  name: 'Star',
  data () {
    return {
      starList: [
        {
          imgUrl: STAR_OFF,
          active: false,
          text: '1'
        },
        {
          imgUrl: STAR_OFF,
          active: false,
          text: '2'
        },
        {
          imgUrl: STAR_OFF,
          active: false,
          text: '3'
        },
        {
          imgUrl: STAR_OFF,
          active: false,
          text: '4'
        },
        {
          imgUrl: STAR_OFF,
          active: false,
          text: '5'
        }
      ],
      level: 0,
    }
  },
  methods: {
    handleStarClick(index) {
      if(this.level == (index + 1)){
        if(this.starList[index].active === true){
          this.starList.forEach((item) => {
            item.imgUrl = STAR_OFF
            item.active = false
          })
          this.level = 0
        } else {
          this.starList.forEach((item, idx) => {
            if(idx <= index){
              item.imgUrl = STAR_ON
              item.active = true
            }else{
              item.imgUrl = STAR_OFF
              item.active = false
            }
            this.level = index + 1
          })
        }
      } else {
        this.starList.forEach((item, idx) => {
          if(idx <= index){
            item.imgUrl = STAR_ON
            item.active = true
          }else{
            item.imgUrl = STAR_OFF
            item.active = false
          }
          this.level = index + 1
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.starWrap{
  .starList{
    display: flex;
    flex-direction: row;
    .star{
      margin-left: 10px;
    }
  }
}
</style>
