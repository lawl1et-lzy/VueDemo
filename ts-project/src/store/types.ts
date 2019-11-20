interface RootState {
  version: string
}

// 歌单列表接口
interface SongSheetList {
  [propName: string]: any
}

// 歌单列表继承接口
interface SongSheetListState {
  songSheetList: Array<SongSheetList>
  error: Boolean
}

// 歌单详情接口
interface SongSheetObjState {
  songSheetObj: object
}

export {
  RootState,
  SongSheetListState,
  SongSheetObjState
}