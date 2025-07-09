# Kütüphaneler

- react
- axios
- tailwindcss
- react-router-dom

# Kaynaklar

- API: https://rapidapi.com/ytjar/api/yt-api/playground/endpoint_facba415-c341-4af1-b542-6f17c9fc464a

# Enviroment Variables

- Ortam değişkenleri, projenizde kullanmanız gereken ama herkessle paylaşmak istemeyeciğiniz ve githuba gönderilmesini engellediğiniz değişkenlerdir.
- (api key, veritabanı url, admin variables)

- Proje içerisinde bir `.env` isimli dosya açarak
- `VITE_DEGİSKEN_İSMİ=degisken_degeri` formatıyle env dosyasında değişkenlerinizi tutabilirsiniz.
- proje içerisinde `import.meta.env.VITE_DEGİSKEN_İSMİ` ifadesiyle ihitiyacınız olan noktalarda bu değişkenelere erişebilirsiniz.
- .env klasörünü .gitignore ekleyerek bu değişkenlerin githuba gönderilmesinide engelleyebilirsiniz.
- daha sonradan projeyi githubdan çeken klişilerde .env dosyası olmayacağı çin hangi değişkenleri tanımlaması gerektiğini gösterecek bir `.env.example` dosyası işe yarar

# Infınite Scroll

- Bir pagination türü.
- Kullanıcı içeriğin sonuna kadar kaydırınca otomatik olarka devamını almak için api isteği atar ve bu içerik bitene kadar eder.
