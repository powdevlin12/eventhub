// src/api/client.ts
import axios from 'axios';

const baseURL = 'http://localhost:1236';

// Tạo instance Axios
const apiClient = axios.create({
  baseURL, // Thay bằng URL API của bạn
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjdiMmI4OWVmOTNmYWEyYmM5MDQwMzMxIiwidG9rZW5fdHlwZSI6MCwidmVyaWZ5IjowLCJpYXQiOjE3Mzk3NjU5MTgsImV4cCI6MTczOTc2NjgxOH0.wGH3-_HCDj_AoqwulDOU7D4Das__1gPMtp1hWmofOxQ', // (Optional) Thêm token nếu cần
  },
});

// Định nghĩa các phương thức HTTP
export const http = {
  get: <T>(url: string) => apiClient.get<T>(url),
  post: <T>(url: string, data: unknown) => apiClient.post<T>(url, data),
  put: <T>(url: string, data: unknown) => apiClient.put<T>(url, data),
  delete: <T>(url: string) => apiClient.delete<T>(url),
};

export const API_ROUTE = {
  LOGIN: '/users/login',
  REGISTER: '/users/register',
};
