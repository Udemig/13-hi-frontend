# Thunk

- Aksiyonlar!ın asenkron işlemler yapmasını sağlayan bir redux middleware'i.
- Aksiyon'ların içerisinde api istğei atıp gelen cevaba göre reducer!a haber göndeririz.
- KLasik redux'ta thunk aksiyiuonunu 2 fonkiyonu içi içe yazarak oluştururuz

# Toolkit Thunk

- Thunk kullanımı toolkit ile daha sadece bir hale geldi.
- Toolkit store'u içerisinde entegre olarak thunk kurulur gelir yani ekstra kurulama kalma.
- `createAsyncThunk` fonksiyonu aracılığıyşa asenkron thunk aksiyonları oluşturabiliyoruz
