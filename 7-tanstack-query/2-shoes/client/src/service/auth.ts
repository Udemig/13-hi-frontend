import type { LoginValues, RegisterValues } from "../types";
import api from "./api";
import type { UserResponse, TokenResponse, MessageResponse } from "../types";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import type { AxiosError } from "axios";

// auth ile atılacak bütün api isteklerini
export const authService = {
  register: async (data: RegisterValues) =>
    api.post<UserResponse>("/auth/register", data),
  login: async (data: LoginValues) =>
    api.post<UserResponse>("/auth/login", data),
  refresh: async () => api.post<TokenResponse>("/auth/refresh"),
  logout: async () => api.post<MessageResponse>("/auth/logout"),
  me: async () => api.get<UserResponse>("/auth/me"),
};

// api isteklerini tanstack query ile hazırlayalım
export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: RegisterValues) => authService.register(data),
    onSuccess: () => {
      navigate("/");
      toast.success("Hesap başarıyla oluşturuldu");
    },
    onError: (error) => {
      const axiosError = error as AxiosError<MessageResponse>;
      toast.error(
        "Hesap oluşturulurken bir hata oluştu: " +
          axiosError.response?.data.message
      );
    },
  });
};

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: LoginValues) => authService.login(data),
    onSuccess: () => {
      navigate("/");
      toast.success("Giriş yapıldı");
    },
    onError: (error) => {
      const axiosError = error as AxiosError<MessageResponse>;
      toast.error(
        "Hesap oluşturulurken bir hata oluştu: " +
          axiosError.response?.data.message
      );
    },
  });
};

export const useProfile = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["profile"],
    queryFn: () => authService.me(),
    select: (res) => res.data.user,
    retry: false,
  });

  return { user: data, isLoading, error };
};

export const useLogout = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      navigate("/login");
      toast.success("Çıkış yapıldı");
    },
    onError: (error) => {
      toast.error("Çıkış yapılırken bir hata oluştu");
    },
  });
};
