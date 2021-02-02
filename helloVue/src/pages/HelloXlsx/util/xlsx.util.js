/* eslint-disable */
import XLSX from "xlsx";
const patt = /[\u4E00-\u9FA5|\\！|\\，|\\。|\\（|\\）|\\《|\\》|\\“|\\”|\\？|\\：|\\；|\\【|\\】]/g
const SOA = 'SOA'
const SOTP = 'SOTP'
export default class WorkBookUtil {
    constructor(filesData) {
        /**
         * workbookMap: XLSX 实例对象集合
         * key 是 工作簿的 id
         * value 是 
         * { 
         *  workbook,  // xlsx 实例对象
         *  name,  // 工作簿名称
         *  path, // 工作簿 gitlab 地址
         *  type, // enum { SOA, SOTP }
         * }
         */
        this.workbookMap = {}
        
        // 搜索的工作簿 id
        this.queryId = ''
        // 搜索的工作表名
        this.querySheetName = ''
        // 工作表数据
        this.sheetList = [] 
        // 表头数据
        this.sheetHeadList = [] 

        this.__initBaseOpts(filesData)
    }
    // 初始化 XLSX 实例
    __initBaseOpts (filesData) {
        let workbookMap = {}
        filesData.forEach(fd => {
            // 单个实例对象
            if(fd.base64Body && fd.base64Body.content && fd.name && fd.path) {
                const workbook = XLSX.read(fd.base64Body.content, {type: "base64"})
                workbookMap[fd.id] = {
                    workbook,
                    name: fd.name,
                    path: fd.path,
                    type: this.__getWorkbookType(fd.name)
                }
            }
        })
        this.workbookMap = workbookMap
    }

    __getWorkbookType(name) {
        let type = SOTP
        if(name.toLocaleLowerCase().includes('soa')) type = SOA
        return type
    }

    /**
     * 从工作簿数据的 Overview 工作表中构建数据
     * @param {String} id 工作簿 id
     * @param {Object} content 工作簿数据
     * 
     * @returns {Array}
     *  [{
     *      id: '', // string 所属工作簿 id
     *      sheetName: '', // string 工作表名称 | 接口中文名
     *      interface: '', // string 接口名
     *      serviceCode: '', // string serviceCode
     *      interface__zhCN: '', // 接口中文名
     *  }]
     */
    __buildSearchDataByWorkbook(id, content = {}) {
        const { workbook, type, name } = content
        if(!workbook || !workbook.Sheets || !workbook.Sheets.Overview) return []
        const { Sheets: { Overview }} = workbook
        let arr = []

        /**
         * FIXME:
         * SOA
         *  1. interface 在 C 列
         *  2. sheetName 在 D 列
         *  3. serviceCode 在 B 列
         * 
         * SOTP
         *  1. interface 在 D 列
         *  2. sheetName 在 E 列
         *  3. serviceCode 在 B 列
         */
        switch(type) {
            case SOA:{
                let serviceCode = ''
                for(let [k, v] of Object.entries(Overview)) {
                    let o = Object.create(null)
                    if(!!~k.indexOf('C') && !!v.v) {
                        if(!!~v.v.indexOf('接口名')) {
                            serviceCode = Overview[`B${Number(k.substr(1)) - 1}`] && Overview[`B${Number(k.substr(1)) - 1}`].v
                        }
                        if(!patt.test(v.v)) {
                            const C_reflect_D = k.replace('C', 'D')
                            o.id = id
                            o.interface = v.v
                            o.interface__zhCN = o.sheetName = Overview[C_reflect_D] && Overview[C_reflect_D].v
                            o.serviceCode = serviceCode != null ? String(serviceCode) : ''
                            o.workbookName = name
                            arr.push(o)
                        }
                    }
                }
                return arr
            }
            case SOTP:{
                for(let [k, v] of Object.entries(Overview)) {
                    let o = Object.create(null)
                    if(!!~k.indexOf('D') && !!v.v.toLocaleLowerCase() !== 'service name') {
                        const serviceCode = Overview[k.replace('D', 'B')] && Overview[k.replace('D', 'B')].v
                        o.id = id
                        o.interface = v.v
                        o.sheetName = serviceCode != null ? String(serviceCode) : ''
                        o.serviceCode = serviceCode != null ? String(serviceCode) : ''
                        o.interface__zhCN = Overview[k.replace('D', 'E')] && Overview[k.replace('D', 'E')].v
                        o.workbookName = name
                        arr.push(o)
                    }
                }
                return arr
            }
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

    /**
     * 构建模糊查询数据
     * @returns {Array} [@__buildSearchDataByWorkbook]
     */
    getSearchData() {
        let searchDatas = []
        for(let [id, content] of Object.entries(this.workbookMap)) {
            const searchData = this.__buildSearchDataByWorkbook(id, content)
            searchDatas.push(...searchData)
        }
        return searchDatas
    }

    /**
     * 获取工作表数据
     * @param {*} queryId 
     * @param {*} querySheetName 
     */
    getWorkSheetDataByName (queryId, querySheetName) {
        try {
            if (!queryId || !querySheetName) return {}
            this.queryId = queryId
            this.querySheetName = querySheetName
            
            const workSheet = this.workbookMap[this.queryId].workbook.Sheets[this.querySheetName]
            const sheetJson = XLSX.utils.sheet_to_json(workSheet, {
                header: 1,
            })

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
        } catch (error) {
            console.error('getWorkSheetDataByName', error)
            return {}
        }
    }
}