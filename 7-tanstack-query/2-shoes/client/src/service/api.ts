import axios from "axios";
import { authService } from "./auth";

const api = axios.create({
  // api url
  baseURL: "http://localhost:5000/api",
  // cookie ile gelen verileri backend'e geri gönder
  withCredentials: true,
  // api'a gönderilecek verinin tipini
  headers: {
    "Content-Type": "application/json",
  },
});

// axios interceptor
// api'a atılan her istekte veya api'dan gelen her cevapta bir fonksiyon çalıştırmaya yarar
api.interceptors.response.use(
  // api'dan olumlu cevap geldiğinde çalışır
  (response) => response,
  // api'dan olumsuz cevap geldiğinde çalışır
  async (error) => {
    // hata aldığımız api isteğini değişkene aktar
    const originalRequest = error.config;

    // hata access tokenın süresi dolmasından kaynaklıysa
    if (
      error.response.status === 401 &&
      error.response.data.message === "Access token expired"
    ) {
      try {
        // refresh endpointine istek atıp yeni bir access tokenı al
        await authService.refresh();

        // tokenın süresi dolmasından kaynaklı hata aldığımız api isteğini tekrar at
        return api.request(originalRequest);
      } catch (error) {
        // refres tokenıında süresi dolduysa çıkış yap:
        await authService.logout();

        // login sayfasına yönlendir:
        window.location.href = "/login";
      }
    }
    // hatayı fırlat
    return Promise.reject(error);
  }
);

export default api;
