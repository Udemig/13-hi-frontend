# Redux Toolkit

- Klasik redux'a göre daha az kod yazarak aynı sonucu elde etmemizi sağlar, yaptığımız bir çok manuel işlem için (action-types tanımlama, reducer oluşturma...) hazır methodlara sahip, klasik redux'ın gelişmiş bir versiyonudur.
- İçerisinde redux-thunk ve redux-dev-tools paketleri kurulur olarak gelir

# Kurulum

- npm install @reduxjs/toolkit react-redux
- store'u ve reducer'ları oluştur
- store'u projeye tanıt

# Klasik reduxta oluşturuğumuz yapılar

- reducer - action - action types - store

# Toolkitte oluşturduğumuz yapılar

- slice - store

# Slice

- klsik redux'ta aksiyonları, aksiyon tiplerini, reducer'ları ayrı dosyalarda tanımlıyorduk
- redux toolkit içerisinde yer alan slice yapısı sayesinde tek bir noktada aksiyonları, aksiyon tiplerini, reducer'ları tanımlayabiliyoruz
