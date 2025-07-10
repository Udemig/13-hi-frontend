# Kütüphaneler

- react-router-dom
- axios
- tailwindcss
- react-icons

# Canlı Veri Çekme

- Bazı projelerde api'dan veriyi bir kere çekip ekrana basmak yeterli olmaz onun yerine sürekli olarak anlık güncellemleri alıp listelemek gerekir
- ÖRN: Message App | Crypto App | Tracker |
- Anlık veri almak için 2 yöntem vardır:

# Belirli aralıklara veri çekme

- Veri çekme fonksiyonu her 30sn / 1dk bir çağırarak arayüzdeki verlerin güncel kalmasını sağlayabiliriz
- Bu yöntemi her api'da kullanabilirim.

# Websocket

- API'yla frontend arasında bir köprü kurar ve veritbanındaki veri her değiştiğinde anlık olarak güncellemeyi api'dan frontende aktarır
- Bu yöntemi kullanmak için apı'ın websocketi desteklemesi lazım

# Kaynaklar

- https://www.coingecko.com/en/api/pricing

- https://docs.coinapi.io/market-data/
