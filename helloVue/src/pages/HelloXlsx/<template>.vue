<template>
  <div id="app">
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

    <ag-grid-vue
      class="table ag-theme-balham"
      :columnDefs="columnDefs"
      :gridOptions="gridOptions"
      :rowData="rowData"
      :suppressRowTransform="true"
    >
    </ag-grid-vue>
  </div>
</template>

<script>
import XLSXUtil from './util/xlsx.util'
import { AgGridVue } from 'ag-grid-vue'
export default {
  data () {
    return {
      files: [],
      columnDefs: [
        {
          headerName: '姓名',
          field: 'name',
          cellClassRules: {
            'cell-span': "value==='A'"
          },
          rowSpan: function (params) {
            if (params.data.name === 'A') {
              console.log('params', params)
              return 2
            } else {
              return 1
            }
          }
        },
        { headerName: '性别', field: 'gender' },
        { headerName: '年龄', field: 'age' }
      ],
      rowData: [
        { name: 'A', gender: '男', age: 20 },
        { name: 'B', gender: '女', age: 25 },
        { name: 'C', gender: '男', age: 18 }
      ],
      gridOptions: {}
    }
  },

  components: {
    AgGridVue
  },
  methods: {
    addFiles () {
      this.$refs.files.click()
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
        const xlsx = new XLSXUtil(data)
        const { columnDefs, rowData } = xlsx.getAgGridDataBySheetName('Sheet3')
        $this.columnDefs = columnDefs
        $this.rowData = rowData
      }
      reader.readAsArrayBuffer(f)
    }
  }
}
</script>
<style scoped>
.table {
  width: 100%;
  height: 1000px;
}
.table /deep/ .cell-span {
  background-color: #00e5ff;
}
</style>
