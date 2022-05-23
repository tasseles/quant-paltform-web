import { http } from "../utils/http";

interface userType extends Promise<any> {
  svg?: string;
  code?: number;
  info?: object;
}

interface AdminLoginRes extends Promise<any> {
  code?: number;
  msg?: string;
  data?: object;
}

interface AdminLoginData {
  password: string;
  username: string;
}

// 获取验证码
export const getVerify = (): userType => {
  return http.request("get", "/captcha");
};

// 登录
export const getLogin = (data: AdminLoginData): AdminLoginRes => {
  return http.request("post", "/users/login", { data });
};

// 刷新token
export const refreshToken = (data: object) => {
  return http.request("post", "/refreshToken", { data });
};

// export const searchVague = (data: object) => {
//   return http.request("post", "/searchVague", { data });
// };
