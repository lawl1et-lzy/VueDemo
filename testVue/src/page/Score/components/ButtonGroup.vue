<template>
  <div class="btn-group">
    <div class="btn-item" v-for="(item, index) in btnArr" :key="index">
      <input
        class="btn-input"
        :id="[mainid, item.id].join('')"
        :type="inputType"
        :value="item.id"
        v-model="selected"
      >
      <label
        :for="[mainid, item.id].join('')"
        :class="{ 'btn-rect': inputType == 'checkbox' ? true : false, 'btn-circle': inputType == 'radio' ? true : false }"
        class="btn btn-label"
      >{{ item.name | change2dot }}</label>
    </div>
  </div>
</template>

<script>
import Toast from './toast'
export default {
  name: 'ButtonGroup',
  props: {
    btnArr: {
      type: Array
    },
    // true: 单选， false: 多选
    selectType: {
      type: [String, Number],
      default: 1
    },
    mainid: {
      type: [String, Number]
    },
    selectedVal: {}
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
            this.toast(`最多只能选择${this.selectType}个哦`)
            // 还原选项
            this.selected.pop()
          }
        }
        this.$emit('input', n)
      },
      deep: true,
      immediate: true
    },
    btnArr: {
      handler (n) {
        this.selected = []
        this.selected = this.selectedVal
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    // Toast
    toast (message) {
      Toast({
        iconClass: this.iconClass,
        message: message || '服务器错误'
      })
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
@import "@/assets/style/base.scss";
@import "@/assets/style/border.scss";
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
