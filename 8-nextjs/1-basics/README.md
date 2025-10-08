# Next.js Routing

- Bir next.js projesinde routing için 2 farklı yöntem vardır.
- App router (mordern yöntem): v14 ile birlikte geldi
- Pages router (eski yöntem): v13 öncesinde kullanılan yöntem

# App Router

- Dosya dizinine göre klasör tabanlı sayfalama yapar
- Bütün sayfalar /src/app klasörü altında olmalıdır
- `/app` klasörü içerisinde tanımlanan ve içerisinde `page.jsx` dosyasına sahip klasörler sayfa olarak algılanır
- `/page.jsx` dosyası içerisine bir react component'ı tanımlayıp export ederiz
- `/page.jsx` dosyasını kapsayan klasörün adına sahip yeni bir route oluşur
- Next.js bu sayfayı tespit edip otomatik olarak kendi router'ına ekler

## Nested Routes - İç İçe Yollar

- örn:
- /profile > prfilini görnütüle
- /profile/friends > arakadaşlarını görüntüle
- /profile/edit > profilini düzenle

## Dynamic Routes - Dinamik Yollar

- Url'deki parametreye göre sayfa içeriğini değiştiği detay sayfaları
- `/products/10` `/videos/njhsd6354` `/cars/tesla`
- Bir dinamik sayfa tanımlamak için klasör oluşturuken [] içerisine parametrenin adını yazarız.
- Component ise bu parametreye proplar aracılığıyla erişir
- `/products/[id]`

## Link

- Next.js'in kendi Link component'ı vardır.
- a etiketi yerine kullanırız.
- `href` prop'u ile yönlendireceği adresi söyleriz

## Catch All Segements

- Birden fazla parametreye rişme yöntemi
- Bu yöntemde parametre sayısı birden fazla olduğu için parametreler bir dizi içerisinde gelir

- /docs/belge-1
- /docs/belge-1/sayfa-10
- /docs/belge-1/sayfa-10/satir-17
- `/docs/[...slug]`

## Route Group

- Çok fazla route olduğu seneryoada bu route'ları erişimi kolaylaştırmak ve layout özelliklerini kullanbilmek amacıyla gruplandırmak isteyebiliriz.
- Route'ları normal bir klasör içerisine aldığımızda klasör ismi url'e etki eder ama eğer kapsayıcı klasörünü ismini `()` içerisine yazarsak url'e herhangi bir etkisi olmaz

## Layout

- Bir uygulamanın veya sayfa grubunun genel dizaynını / ortak elementlerini / yetkilendirme durumunu belirlemek için kullandığımız bileşendir.

- Bir sayfa grubunu veya projedeki bütün sayfaları kapsayabilir.

- Layout klasörünü oluşturduğumuz konuma bağlı olarak etkileyecği sayfalar değişir:
- - Eğer app klasörü içerisinde oluşturursak bütün sayfaları etkiler
- - Eğer layout dosyasını bir route grubu içerisine oluşturursak sadece o route grubundaki sayfalara etki eder

## Template

- Layout ile aynı görevi yapar
- Layout'dan tek farkı sayfa değiştiğinde state sıfırlanır

## 404 Sayfası

- Next.js in kendi varsayılan bir 404 sayfası vardır
- Eğer bu 404 sayfasını özelleştirmek istersek not-found.jsx isminde bir dosya oluşturup kendi 404 sayfamızı oluşturabiliyoruz.

## Metadata

- Next.js'de react'dan fareklı olarak her sayfaya özel metadata tanımlayabiliyoruz
- Bu sayede next.js projeleri SEO açısından çok daha iyi olur
- Bir sayfanın metadatasını tanımlamak istiyorsak o sayfada bir `metada` isminde bir nesne export ederiz
- Detay sayfaları için metadata'yıda dinamik olarak tanımlamak isteyebiliriz.
- Bu tarz durumlarda metadata nesnesi yerine generateMetada fonksiyonunu kullanırız

## Özel Dosyalar

- `page.jsx` > sayfa tanımlar
- `layout.jsx` > sayfa düzeni tanımlar
- `template` > sayfa düzeni tanımlar
- `not-found` > 404 sayfası tanımlar

- `loading.jsx`
- - bir bileşen await ile promise'i bekledği süre boyunca otomatik olarak ekrana gelir
- - loading dosyasını oluşturduğumuz klasöre göre etki ettiği sayfalar değişir
- - oluşturduğumuz klasörde layou component'ı varsa children nerede render edilirse loader oraya gelir

- `error.jsx`
- - bir bielşen içerisinden throw ile hata fırlatığında otomatik olarak gelir
- - örneğin bir apii i steği başarısız olduğunda veya throw new Eror() ile hata fırlatılırsa devreye girer.
- - loading'de olduğu gibi oluşturulduğu klasöre bağlı olaraka sayfalara etki eder
- - `use client` kullanmak zorunlu
- - `hata mesajını` ve `api isteğini tekrar atıcak fonksiyonu` prop olarak alır
