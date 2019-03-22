<template>
  <div class="score-wrap" @click="handlePropagationClick">
    <!-- star -->
    <div class="score-wrap-star">
      <div class="score-star">
        <!-- 星星 -->
        <div
          v-for="(item, index) in newStarArr"
          :key="index"
          :class="{ 'icon-star-on': item.selected, 'icon-star-off': !item.selected }"
          @click="handleStarClick(index);"
          class="icon icon-size-60"
        ></div>
      </div>
      <!-- desc -->
    </div>
    <!-- button group -->
    <button-group
      v-if="selectedStarData"
      :btnArr="selectedStarData.label_list"
      v-model="selectedStarData.selectedBtn"
    >
    </button-group>
  </div>
</template>

<script>
import ButtonGroup from './ButtonGroup'
export default {
  name: 'Star',
  props: {
    starArr: {
      type: Array
    }
  },
  data () {
    return {
      newStarArr: [...this.starArr], // 深拷贝一份数组
      selectedStarData: '' // 当前选中星星对应的标签
    }
  },
  components: {
    ButtonGroup
  },
  methods: {
    handleStarClick (index) {
      let newStarArr = this.newStarArr
      if (Array.isArray(newStarArr) && newStarArr.length > 0) {
        newStarArr.forEach(item => {
          if (Number(item.star) > (Number(index) + 1)) {
            item.selected = false
          } else {
            item.selected = true
          }
        })
        this.selectedStarData = newStarArr[index] // 当前选中星星对应的标签

        // vue强制更新视图
        newStarArr.push('a')
        newStarArr.pop()
      }
    },
    // 只要出现click 就把当前选中的抛出
    handlePropagationClick () {
      this.$emit('input', this.selectedStarData) // 当前选中的星星抛出
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/score.scss';
.score-star {
  display: flex;
  flex-wrap: nowrap;
  & > div {
    margin-right: 20px;
  }
}

.icon-star-off {
  background-image: url("~@/images/icon/icon-star-off.png");
}

.icon-star-on {
  background-image: url("~@/images/icon/icon-star-on.png");
}
</style>
