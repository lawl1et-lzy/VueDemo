<template>
  <div class="v-radio">
    <!-- <div class="radio-item" v-for="(item, index) in radioArr" :key="index">
      <label :for="'radio' + index" class="radio-label">
        <input class="radio-input" :id="'radio' + index" type="radio" :value="item.value" v-model="select">
        <i class="icon"></i>
        {{item.value}}
      </label>
    </div> -->
    <div class="radio-item" v-for="(item, index) in radioArr" :key="index">
      <label :for="'radio' + index" class="radio-label">
        <input class="radio-input" :id="'radio' + index" type="checkbox" :value="item.value" v-model="select1">
        <i class="icon"></i>
        {{item.value}}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vradio',
  data () {
    return {
      radioArr: [
        {
          value: '见过'
        },
        {
          value: '没见过'
        }
      ],
      select: '',
      select1: []
    }
  }
}
</script>

<style lang="scss" scoped>
.v-radio{
  display: flex;
}
.radio-input{
  display: none;
}
.icon{
  display: inline-block;
  width: 26px;
  height: 26px;
  background: url('../assets/images/icon-radio.png') no-repeat;
  background-size: 100% 100%;
  margin-right: 10px;
}
.radio-item{
  display: flex;
  align-items: center;
}
.radio-input:checked + .icon{
  background-image: url('../assets/images/icon-radio-select.png');
}
.radio-label{
  display: flex;
  align-items: center;
}
</style>
