import axios from "axios";

// Axios ayarlarını bizim belirlediğimiz bir kopyasını oluşturuyoruz
const api = axios.create({
  baseURL: "http://localhost:4001", // temel adres
  timeout: 3000, // zaman aşım süresi
  headers: { Authorization: "api-key" }, // header
});

export default api;
