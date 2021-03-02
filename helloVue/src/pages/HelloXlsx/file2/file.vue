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
  </div>
</template>

<script>
/* eslint-disable */
// import Excel from 'exceljs'
import '../util/exceljs.min'
import mockData from '@/assets/getAllExcelFiles'
/* eslint */
export default {
  name: 'Xlsx',
  data () {
    return {
      files: []
    }
  },
  created () {
  },
  async mounted () {
    // const { data } = mockData
    // const fileBase64Data = data[0].base64Body
    // console.log('fileBase64Data', fileBase64Data)
    // var Excel = window.ExcelJS
    // var workbook = new Excel.Workbook()
    // const buffer = this._base64ToArrayBuffer(fileBase64Data.content)
    // await workbook.xlsx.load(buffer)
    // workbook.eachSheet(function (worksheet, sheetId) {
    // console.log('worksheet: ', worksheet)
    // console.log('sheetId: ', sheetId)
    // window.worksheet = worksheet 
    // })
  },

  methods: {
    _base64ToArrayBuffer(base64) {
        var binary_string =  window.atob(base64);
        var len = binary_string.length;
        var bytes = new Uint8Array( len );
        for (var i = 0; i < len; i++)        {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes.buffer;
    },
    transformArrayBufferToBase64 (buffer) {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        for (var len = bytes.byteLength, i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    },
    handleFilesUpload () {
        var $this = this
      let uploadedFiles = this.$refs.files.files

      for (var i = 0; i < uploadedFiles.length; i++) {
        this.files.push(uploadedFiles[i])
      }

      var f = uploadedFiles[0]
      var reader = new FileReader()
      reader.onload = async function (e) {
        var data = e.target.result
        var Excel = window.ExcelJS
        var workbook = new Excel.Workbook()
        console.log('lawl1et base64', $this.transformArrayBufferToBase64(data));
        await workbook.xlsx.load(data)
        workbook.eachSheet(function (worksheet, sheetId) {
            console.log('worksheet: ', worksheet)
            console.log('sheetId: ', sheetId)
            window.worksheet = worksheet
        })
      }
      reader.readAsArrayBuffer(f)
    }
  }
}
</script>
<style scoped>
</style>
