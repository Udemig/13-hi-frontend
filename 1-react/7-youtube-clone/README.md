# Kütüphaneler

- react
- axios
- tailwindcss
- react-router-dom

# Enviroment Variables

- Ortam değişkenleri, projenizde kullanmanız gereken ama herkessle paylaşmak istemeyeciğiniz ve githuba gönderilmesini engellediğiniz değişkenlerdir.
- (api key, veritabanı url, admin variables)

- Proje içerisinde bir `.env` isimli dosya açarak
- `VITE_DEGİSKEN_İSMİ=degisken_degeri` formatıyle env dosyasında değişkenlerinizi tutabilirsiniz.
- proje içerisinde `import.meta.env.VITE_DEGİSKEN_İSMİ` ifadesiyle ihitiyacınız olan noktalarda bu değişkenelere erişebilirsiniz.
- .env klasörünü .gitignore ekleyerek bu değişkenlerin githuba gönderilmesinide engelleyebilirsiniz.
- daha sonradan projeyi githubdan çeken klişilerde .env dosyası olmayacağı çin hangi değişkenleri tanımlaması gerektiğini gösterecek bir `.env.example` dosyası işe yarar
