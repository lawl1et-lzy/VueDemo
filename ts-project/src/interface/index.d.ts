// 登录接口
interface LoginParams {
  phone: string;
  password: string;
}

// 歌单列表接口
interface SongSheetParams {
  uid: string
}


export {
  LoginParams,
  SongSheetParams
}