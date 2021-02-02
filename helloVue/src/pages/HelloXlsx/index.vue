<template>
  <div class="container">
    <div>
      <Search :searchDatas="searchDatas" @output="handleSearchOutput"></Search>
    </div>

    <template v-if="Array.isArray(tableData) && tableData.length > 0">
      <vxe-table
        border="full"
        :highlight-hover-row="true"
        :highlight-current-row="true"
        :highlight-hover-column="true"
        :highlight-current-column="true"
        ref="xTable"
        :data="tableData"
        :merge-cells="mergeCells"
        height="800px"
        :resizable="true"
        fixed="left"
        :stripe="true"
        :round="true"
        size="mini"
        showOverflow="tooltip"
      >
        <vxe-table-column
          v-for="(config, index) in tableColumns"
          :key="index"
          v-bind="config"
        ></vxe-table-column>
      </vxe-table>
    </template>
  </div>
</template>

<script>
/* eslint */
import WorkBookUtil from './util/xlsx.util'
import mockData from '@/assets/getAllExcelFiles'
import Search from './search'
let xlsx = null
export default {
  name: 'Xlsx',
  components: {
    Search
  },
  data () {
    return {
      tableData: [],
      mergeCells: [],
      searchDatas: [],
      tableColumns: []
    }
  },
  created () {
    // this.$axios.get('http://localhost:8080/getAllExcelFiles')
    //   .then(res => {
    //     console.log(res)
    //     this.handleCtripFiles(res)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })

    this.handleCtripFiles(mockData)
  },
  mounted () { },

  methods: {
    handleSearchOutput (data) {
      const { id, sheetName } = data
      console.log('handleSearchOutput: ', data)
      const { tableData, mergeCells, tableColumns } = xlsx.getWorkSheetDataByName(id, sheetName)
      this.tableData = tableData
      this.mergeCells = mergeCells
      this.tableColumns = tableColumns
    },
    handleCtripFiles (res) {
      //   const { data } = res
      //   const { base64Body: { content } } = data[0]
      //   const xlsx = new WorkBookUtil(content)
      //   window.xlsx = xlsx
      //   const { tableData, mergeCells, tableColumns } = xlsx.getWorkSheetDataByName('获取常见问题列表接口')
      //   this.tableData = tableData
      //   this.mergeCells = mergeCells
      //   this.tableColumns = tableColumns

      const { data } = res
      xlsx = new WorkBookUtil(data)
      window.xlsx = xlsx
      const searchDatas = xlsx.getSearchData()
      this.searchDatas = searchDatas
      //   console.log('searchDatas: ', searchDatas)
    }
  }
}
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
