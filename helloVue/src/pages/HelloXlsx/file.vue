<template>
  <div>
    <div>
      Files
      <input
        type="file"
        id="files"
        ref="files"
        multiple
        v-on:change="handleFilesUpload()"
      />
    </div>
    <vxe-toolbar>
      <template v-slot:buttons>
        <vxe-button @click="allAlign = 'left'">居左</vxe-button>
        <vxe-button @click="allAlign = 'center'">居中</vxe-button>
        <vxe-button @click="allAlign = 'right'">居右</vxe-button>
      </template>
    </vxe-toolbar>

    <!-- <vxe-table :align="allAlign" :data="tableData" :merge-cells="mergeCells">
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column field="article" title="article"></vxe-table-column>
      <vxe-table-column field="age" title="age"></vxe-table-column>
      <vxe-table-column field="sex" title="sex"></vxe-table-column>
      <vxe-table-column field="是否发表" title="是否发表"></vxe-table-column>
      <vxe-table-column field="是否签约" title="是否签约"></vxe-table-column>
    </vxe-table> -->
    <vxe-table
      border="full"
      highlight-hover-row="true"
      highlight-current-row="true"
      highlight-hover-column="true"
      highlight-current-column="true"
      ref="xTable"
      :data="tableData"
      :merge-cells="mergeCells"
      height="800"
      resizable="true"
      fixed="left"
      stripe="true"
      round="true"
      size="mini"
      showOverflow="tooltip"
    >
      <vxe-table-column
        v-for="(config, index) in tableColumns"
        :key="index"
        v-bind="config"
      ></vxe-table-column>
    </vxe-table>
  </div>
</template>

<script>
/* eslint */
import WorkBookUtil from './util/xlsx.util'
export default {
  name: 'Xlsx',
  data () {
    return {
      files: [],
      allAlign: null,
      tableData: [
        // { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃' },
        // { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        // { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        // { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 24, address: 'Shanghai' }
      ],
      mergeCells: [
      ],
      searchDatas: [],
      fuse: null,
      tableColumns: [],
      searchVal: ''
    }
  },
  created () {
  },
  mounted () {

  },

  methods: {
    handleSearchOutput (data) {
      console.log('handleSearchOutput: ', data)
    },
    handleFilesUpload () {
      const $this = this
      let uploadedFiles = this.$refs.files.files

      for (var i = 0; i < uploadedFiles.length; i++) {
        this.files.push(uploadedFiles[i])
      }

      var f = uploadedFiles[0]
      var reader = new FileReader()
      reader.onload = function (e) {
        var data = e.target.result
        const xlsx = new WorkBookUtil(data)
        window.xlsx = xlsx
        // orderCreateV4下单(抢票下单接口)
        // Sheet3
        const { tableData, mergeCells, tableColumns } = xlsx.getWorkSheetDataByName('orderCreateV4下单(抢票下单接口)')
        $this.tableData = tableData
        $this.mergeCells = mergeCells
        $this.tableColumns = tableColumns
      }
      reader.readAsArrayBuffer(f)
    }
  }
}
</script>
<style scoped>
</style>
