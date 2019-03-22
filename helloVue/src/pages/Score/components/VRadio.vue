<template>
  <div class="v-radio">
    <div class="radio-item" v-for="(item, index) in radioArr" :key="index">
      <label :for="[item.id, index].join('')" class="radio-label">
        <input
          :id="[item.id, index].join('')"
          :value="item"
          v-model="radioSelect"
          class="radio-input"
          type="radio"
        >
        <i class="icon"></i>
        {{ item.name }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VRadio',
  props: {
    radioArr: {
      type: Array
    }
  },
  data () {
    return {
      radioSelect: ''
    }
  },
  watch: {
    radioSelect: {
      handler (n) {
        this.$emit('input', n)
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/score.scss';
.v-radio {
  display: flex;
  justify-content: space-between;
  color: #666666;
  .radio-item {
    display: flex;
    color: #666666;
    margin-left: 40px;
    font-size: 30px;
    .radio-label {
      display: flex;
      align-items: center;
      font-weight: normal;
      .radio-input {
        display: none;
      }
      .icon {
        display: inline-block;
        width: 36px;
        height: 36px;
        background: url('~@/images/icon/icon-radio.png') no-repeat;
        background-size: 100% 100%;
        margin-right: 14px;
      }
      .radio-input:checked + .icon {
        background-image: url('~@/images/icon/icon-radio-select.png');
      }
    }
  }
}
</style>
