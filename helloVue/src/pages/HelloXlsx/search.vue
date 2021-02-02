<template>
  <div class="demo-comp">
    <button @click="onOpen">Open Panel</button>
    <vue-search-panel
      v-model="value"
      :fetch-suggestions="getSuggestions"
      @select="onSelect"
      ref="searchPanel"
    >
        <div class="demo-search-item" slot-scope="{ item }">
            <span class="search-item-time">{{ item.serviceCode }}</span>
            <span class="search-item-value">{{ item.interface }}</span>
            <span class="search-item-value">{{ item.interface__zhCN }}</span>
        </div>
    </vue-search-panel>
  </div>
</template>

<script>
import VueSearchPanel from 'vue-search-panel'
export default {
  name: 'Search',
  components: { VueSearchPanel },
  props: {
    searchDatas: {
      type: Array,
      default: () => []
    },
    output: {
      type: Function
    }
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onOpen () {
      this.$refs.searchPanel.show()
    },
    onSelect (item) {
      this.$emit('output', item)
    },
    getSuggestions (query, cb) {
      const filterFn = (data) => {
        return Object.values(data).some(item => item.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
      }
      cb(query ? this.searchDatas.filter(filterFn) : this.searchDatas)
    }
  }
}
</script>
