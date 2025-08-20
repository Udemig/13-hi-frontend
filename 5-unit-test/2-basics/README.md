# Yazılım Neden Test Edilmeli

- Çünkü hatalı çalışan bir yazılım, kullanıcıya, şirkete, geliştiriciye, zaman / para / itibar kaybettir.
- Testler ise bu tarz hataların son kullanıcya ulaşmadın farkına varılmasını sağlar

1. Hataları erken yakalarız
2. Yazılım kalitesini arttırır
3. Otomasyon Süreçlerinde fayda sağlar

Bu yüzden sektördeki nderdeyse bütün projeler çeşitli test yöntemleri ile test edilir.

# Unit Test Kütüphaneleri

- jest
- react-testing-library (rtl)

# Unit Test Temel Kavramlar

## Selectors - Seçici Methodları

- Screen nesnesi aracılığıyla erişilen methodlardır.
- Test içerisinde renderlanan jsx elementlerini çağırmaya yarar.
- https://testing-library.com/docs/queries/about/
- İlk tercihimiz getByRole, olmazsa diğerleri, diğer methodlarda olmazsa son tercih getByTestId

## HTML Element rolleri

- Çoğu html elementinin görevini temsil eden bir rolü vardır.
- Bazen etiket ismi ile aynı bazen farklı olabilir.
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles

## Matchers - Kontrolcü Methodları

- Matcherlar expect ile birlikte kullanılan bir element veya değişkeni kontrol etmek için kullanılır

- İki çeşit matcher vardır:
- DOM: https://github.com/testing-library/jest-dom
- Değişkenler: https://jestjs.io/docs/using-matchers
