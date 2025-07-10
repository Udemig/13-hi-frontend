import axios from "axios";

// axios örneği oluşturalım
const apiClient = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    "x-cg-demo-api-key": import.meta.env.VITE_API_KEY,
  },
});

// API isteği atan fonksiyonarlı bir ara tanımlayalaım
// Yönetim kolyalığı sağlar
// Component içerisindeki kod karşışıklığını azaltır
export const coinApi = {
  // Top coinleri getir (mar cap'e göre sırala)
  async getTopCoins() {
    try {
      const res = await apiClient.get("/coins/markets", {
        params: { vs_currency: "usd" },
      });

      return res.data;
    } catch (error) {
      throw new Error(`Coin verisi çekilemedi: ${error.message}`);
    }
  },
};
