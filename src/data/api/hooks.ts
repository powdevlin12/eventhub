// src/api/hooks.ts

import {QueryClient, useMutation, useQuery} from '@tanstack/react-query';
import {http} from './client';

// Khởi tạo QueryClient
export const queryClient = new QueryClient();

// GET - Lấy dữ liệu
export const useFetch = <T>(queryKey: string[], url: string) => {
  return useQuery<T>({
    queryKey, // Key để cache dữ liệu (ví dụ: ['posts', postId])
    queryFn: async () => {
      const response = await http.get<T>(url);
      return response.data;
    },
  });
};

// POST - Tạo mới dữ liệu
export const usePost = <T>(url: string) => {
  return useMutation<T, Error, unknown>({
    mutationFn: async data => {
      const response = await http.post<T>(url, data);
      return response.data;
    },
    onSuccess: () => {
      // Làm mới dữ liệu sau khi thành công
      queryClient.invalidateQueries({queryKey: [url.split('/')[1]]});
    },
  });
};

// PUT - Cập nhật dữ liệu
export const usePut = <T>(url: string) => {
  return useMutation<T, Error, unknown>({
    mutationFn: async data => {
      const response = await http.put<T>(url, data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [url.split('/')[1]]});
    },
  });
};

// DELETE - Xóa dữ liệu
export const useDelete = <T>(url: string) => {
  return useMutation<T, Error>({
    mutationFn: async () => {
      const response = await http.delete<T>(url);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [url.split('/')[1]]});
    },
  });
};
