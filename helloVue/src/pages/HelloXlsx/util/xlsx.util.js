/* eslint-disable */
import XLSX from "xlsx";

export default class WorkBookUtil {
    constructor(fileData) {
        this.workbook = null // XLSX 实例对象

        // 当前工作表对应数据
        this.sheetName = '' // 工作表名
        this.sheetList = [] // 工作表数据
        this.sheetHeadList = [] // 表头数据

        this.__initInstance(fileData)
    }
    // 初始化 XLSX 实例
    __initInstance (fileData) {
        const d = new Uint8Array(fileData)
        this.workbook = XLSX.read(d, {
            type: "array",
        })
    }

    // 通过 工作表名 获取 当前表数据
    getWorkSheetDataByName (sheetName) {
        if (!sheetName) return []

        this.sheetName = sheetName

        const workSheet = this.workbook.Sheets[this.sheetName]
        const sheetJson = XLSX.utils.sheet_to_json(workSheet, {
            header: 1,
        })

        console.log('sheetJson', sheetJson)

        if (!Array.isArray(sheetJson) || sheetJson.length === 0) return []
        // 合并单元格数据
        const sheetMergeList = workSheet['!merges']
        const __mergeCells = this.__formatSheetMergeList(sheetMergeList)

        // 当前工作表数据
        const __sheetList = this.__formatSheetJSON(sheetJson)
        const headList = __sheetList.splice(0, 1)[0] // 截取表头数据
        this.sheetList = __sheetList

        // 当前工作表对应的表头数据
        this.sheetHeadList = this.__getsheetHeadList(headList)

        const __tableColumns = this.__formatSheetHeadList(this.sheetHeadList)

        // 数据适配
        const __tableData = this.__translateDataAdapter(this.sheetList, this.sheetHeadList)
        return {
            tableColumns: __tableColumns,
            tableData: __tableData,
            mergeCells: __mergeCells
        }
    }

    // 格式化表头数据
    __formatSheetHeadList (headList) {
        const firstColum = { type: 'seq', width: 60, fixed: 'left' }
        const formatData = headList.map(head => {
            return {
                field: head,
                title: head,
            }
        })
        return [
            firstColum,
            ...formatData
        ]
    }

    // 格式化合并单元格数据
    __formatSheetMergeList (sheetMergeList) {
        // [
        //     { row: 0, col: 0, rowspan: 2, colspan: 1 }
        // ]
        if (!Array.isArray(sheetMergeList) || sheetMergeList.length === 0) return []
        return sheetMergeList.map(m => {
            const row = m.s.r - 1 // xlsx !merges 数据 把标题也算在内所以要 -1
            const col = m.s.c + 1 // TODO: 有待扩展，目前默认在表头添加一列
            const rowspan = m.e.r - m.s.r === 0 ? 0 : m.e.r - m.s.r + 1
            const colspan = m.e.c - m.s.c === 0 ? 0 : m.e.c - m.s.c + 1
            return {
                row,
                col,
                rowspan,
                colspan
            }
        })
    }

    // 格式化工作表数据
    __formatSheetJSON (sheetJson) {
        return sheetJson.filter(sheet => Array.isArray(sheet) && sheet.length > 0)
    }

    // 获取工作表头数据
    __getsheetHeadList (headList) {
        const __headList = Array.from(headList) // 为了遍历 empty
        return __headList.map((head, index) => !!head ? head : `title_${index}`)
    }

    // 转换数据格式
    __translateDataAdapter (sheetList, sheetHeadList) {
        let newList = sheetList.map(rowData => {
            return this.__buildObject(sheetHeadList, rowData)
        })
        return newList
    }

    __buildObject (keys, values) {
        if (!Array.isArray(keys) || keys.length === 0) return {}
        if (!Array.isArray(values) || values.length === 0) return {}

        let obj = {}
        keys.forEach((key, index) => obj[key] = values[index])
        return obj
    }
}