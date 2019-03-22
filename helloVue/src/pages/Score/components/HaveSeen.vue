<template>
  <div>
    <!-- 是否见过老师 -->
    <div class="haveSeen">
      <!-- top -->
      <div class="haveSeen-wrap">
        {{ list.name }}
        <!-- v-radio -->
        <v-radio
          :radioArr="list.sub_dimensionality_list_list.sub_dimensionality_list_list"
          v-model="radioSelected"
        ></v-radio>
      </div>
    </div>
    <!-- button group -->
    <button-group
      v-if="radioSelected"
      :btnArr="radioSelected.label_list"
      :selectType="list.can_choose_label_num"
      v-model="radioSelected.btnSelected"
    ></button-group>
  </div>
</template>

<script>
import VRadio from './VRadio'
import ButtonGroup from './ButtonGroup'
export default {
  name: 'HaveSeen',
  props: {
    list: {
      type: Object
    }
  },
  data () {
    return {
      radioSelected: '' // 单选框选中
    }
  },
  components: {
    VRadio,
    ButtonGroup
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
$pd30: 30px;
$mg14: 14px;
// 见过老师
.haveSeen {
  display: flex;
  padding: 35px $pd30;
  flex-direction: column;
  .haveSeen-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 34px;
    color: #333333;
  }
}
</style>
