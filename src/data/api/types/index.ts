export interface ApiResponse<T> {
  data: T; // Dữ liệu trả về
  status?: number; // Mã trạng thái HTTP
  message?: string; // Thông báo (nếu có)
}

export interface LoginPost {
  accessToken: string;
  refreshToken: string;
}

export type LoginResponse = ApiResponse<LoginPost>;

export interface IRegisterPost {
  accessToken: string;
  refreshToken: string;
}

export type TRegisterResponse = ApiResponse<IRegisterPost>;
