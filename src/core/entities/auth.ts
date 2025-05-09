export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface LoginCallbacks {
  onSuccess: (data: LoginResponse) => void;
  onError: (error: Error) => void;
}
