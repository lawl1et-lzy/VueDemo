// 登录接口
interface LoginParams {
  phone: string;
  password: string;
}

// 歌单列表接口
interface SongSheetParams {
  uid: string
}

// 歌单详情接口
interface SongSheetObjParams {
  id: string
}

export {
  LoginParams,
  SongSheetParams,
  SongSheetObjParams
}