interface LoginParams {
  phone: string;
  password: string;
}

interface LoginRes {
  code: number;
  account: object;
}

export {
  LoginParams,
  LoginRes
}