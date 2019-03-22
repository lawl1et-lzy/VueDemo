<template>
  <div>
    <!-- comment -->
    <div class="comment">
      <div v-for="(item, index) in list" :key="item.id" class="comment-item">
        <!-- title -->
        <div class="title">{{ item.name }}</div>
        <!-- 星星选项组件 -->
        <v-star
          :starArr="item.new_star_label_list_list.star_label_list_list"
          v-model="starSelected[index]"
        >
        </v-star>
      </div>
    </div>
  </div>
</template>

<script>
import VStar from './Star'
export default {
  name: 'ScoreStar',
  props: {
    list: {
      type: Array
    }
  },
  data () {
    return {
      starSelected: [] // 星星选中的数组
    }
  },
  components: {
    VStar
  }
}
</script>

<style lang="scss" scoped>
$pd30: 30px;
$mg14: 14px;
// 评论
.comment {
  padding: 0 $pd30 40px;
  .comment-item {
    padding-top: 46px;
    width: 100%;
    .title {
      font-size: 30px;
      color: #333333;
    }
    // 得分
    .score-wrap {
      .score-wrap-star {
        margin-top: $mg14;
        display: flex;
        justify-content: space-between;
        .score-star {
          display: flex;
          flex-wrap: nowrap;
          & > div {
            margin-right: 20px;
          }
        }
        .score-desc {
          display: flex;
          align-items: center;
          font-size: 30px;
          color: #f5a623;
        }
      }
    }
  }
}

</style>
