<template>
  <div class="btn-group">
    <div class="btn-item" v-for="(item, index) in btnArr" :key="index">
      <input
        class="btn-input"
        :id="[item.id, index].join('')"
        :type="inputType"
        :value="item.id"
        v-model="selected"
      >
      <label
        :for="[item.id, index].join('')"
        :class="{ 'btn-rect': inputType == 'checkbox' ? true : false, 'btn-circle': inputType == 'radio' ? true : false }"
        class="btn btn-label"
      >{{ item.name | change2dot }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonGroup',
  props: {
    // 按钮数组
    btnArr: {
      type: Array
    },
    selectType: {
      type: [String, Number],
      default: 1
    }
  },
  data () {
    return {
      selected: []
    }
  },
  computed: {
    // 按钮类型
    inputType () {
      return this.selectType === '1' ? 'radio' : 'checkbox'
    }
  },
  watch: {
    selected: {
      handler (n) {
        if (this.selectType > 0 && this.selectType !== 1) {
          if (n.length > this.selectType) {
            alert(`最多只能选择${this.selectType}个哦`)
            // 还原选项
            this.selected.pop()
          }
        }
        this.$emit('input', n)
      },
      deep: true,
      immediate: true
    },
    // 当渲染的数据改变的时候，清空已选择的项目
    btnArr (n) {
      if (n) {
        this.selected = []
      }
    }
  },
  filters: {
    change2dot (value) {
      if (value.length > 8) {
        return value.substring(0, 8) + '...'
      } else {
        return value
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/score.scss";
@import "@/style/border.scss";
// button
.btn-group {
  display: flex;
  flex-wrap: wrap;
  padding-top: 12px;
  .btn-item {
    margin-right: 12px;
    margin-top: 20px;
    .btn {
      padding: 10px 24px;
      color: #666666;
    }
    .btn-input {
      display: none;
    }
    .btn-input:checked + .btn-label {
      border-color: #4385f5;
      color: #4385f5;
      background-color: #e6efff;
    }
  }
}
.btn-circle {
  @include borderHalfPxRound(#cccccc, 30px);
}
.btn-rect {
  @include borderHalfPxRound(#cccccc, 4px);
}
</style>
