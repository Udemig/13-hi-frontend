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

  // coin detay verisini çek
  async getCoinDetail(id) {
    try {
      const res = await apiClient.get(`/coins/${id}`);

      return res.data;
    } catch (err) {
      throw new Error(`Coin verisi alınamadı: ${error.message}`);
    }
  },

  // coin geçmiş fiyat verisini çek
  async getPriceHistory(id, days = 7) {
    try {
      const res = await apiClient.get(`/coins/${id}/market_chart`, {
        params: {
          vs_currency: "usd",
          days: days,
          interval: days <= 1 ? undefined : "daily",
        },
      });

      // api'dan gelen fiyat verisini daha kullanaiblir formata çevir
      return res.data.prices.map(([timestamp, price]) => ({
        timestamp,
        price,
        date: new Date(timestamp).toISOString(),
      }));
    } catch (err) {
      throw new Error(`Coin verisi alınamadı: ${err.message}`);
    }
  },
};
