# Parallel Routes

- Parallel routes, aynı aynda birden fazla bağımsız sayfayı aynı layout içerisinde render etmeye yarar.

- `@slot` formatında tanımlanır (örn: `@notification`, `@revenue`)
- slot'lar layout'a prop olarak gönderilir
- layout içerisinde birden fazla sayfayı parallel olarak yükleyeibilirm

# Neden Component Oluşturmak Yerine Parallel Routes ile Sayfa Oluşturmak?

| Normal Components | Sayfa Componentı |
| ----------------- | ---------------- |
| SSR desteği yok   | SSR desteği var  |
| SSG desteği yok   | SSG desteği var  |
| Metadata yok      | Metadata var     |
| Midddleware yok   | Midddleware var  |
| Loading/Err yok   | Loading/Err var  |

# Intercepting Routes

- Interceptin routes, kullanıcı deneyimi arttırmak amacıyla modal tabanlı navigasyon sağlar
- Bu sayede farklı bir sayfa içeriğini kullanıcnın bulunduğu sayfada bir modal olarak gösterebiliriz

# Imports

## Relative Import

- dosya konumuna bağlı olarak `../../` ifadeleriyle kullandığımız import yöntemi

## Absolute Import

- varsayılan olarak `@` kullandığımızda yol olarak src klasörüne gideriz
- bu yöntemle yapılan importlar sayesinde dosya konumunu değiştirsek bile import yolunu değiştirmeye gerek duymayız

# Font

## Remote Font

- Next.js'de goggle fonts'dan alıcağımız fontları `next/fonts/google` adresinden import eder ve kurulumunu yapabiliriz.

## Local Font

- Projemize dahil ettiğimiz bir ttf dosyasını `LocalFont` fonksiyonu ilr kurulumunu yapıp kullanabiliriz.

- Fontların kuurlumunu yaptıktan sonra kullanmak için en iyi yol variable'larını projeye tanıtmak ardından `@theme` ile tailwind entegrasyonunu yaptıktan sonra istediğimiz yerde istediğimiz fontu kullanaviliriz

# Rendering Yöntemleri

### Server Side Rendering (SSR)

- Bu yötemde, kullanıcı sayfaya girdiğinde, js kodu `sunucuda` çalışır ve html içeriğini sunucuda oluşturur ve kullanıcı sadece `dolu html dosyası` nı indirir ve kullanıcı sayfa içeriğini görür

### Client Side Rendering (CSR)

- Bu yöntemde, kullanıcı sayfaya girdiğinde `boş html dosyası` ve `javascript kodları` indirir, indirdiği js kodları `kullanıcının cihazında` çalışır, html dosyasını doldurur ve kullanıcı sayfa içeriğini görür

- Bu iki yöntemi karşılaştırdığımızda SSR, hem SEO hem Performans açısından daha iyidir.

# Component Çeşitleri

### Server Component

- Next.js'de varsayılan component çeşididir.
- Yeni bir component oluşturduğumuzda direkt server component olarak oluşur
- Bu component'un içerikleri `SSR` ile render olur
- Hem SEO hemde Performans açısından daha iyidir
- Kullanıcı etkileşimleri takip edilemez ve hooks kullanılamaz

### Client Compoent

- Bir component'da `use client` ifadesini kullandığımızda client component'a dönüşür
- Bu component'ın içerikleri `CSR` ile render olur
- Kullanıcı etkileşimleri izlenebilir ve react hooks kullanılabilir

[Foto](https://miro.medium.com/v2/resize:fit:1400/1*Ez-tFvQl1O5yM4k3bU4qpw.png)

- Sonuç olarak; server component'lar daha performanslı olduğu için projelerimizde olabildiğince çok server component kullanmaya çalışıcaz sadece zorunda kaldığımız durumlarda (kullanıcı etkileşimi gerektiren, react hooks kullanılması gereken) client component kullanılmalı

- Not: Next.js bizden olabildiğince çok server component (HIZ & SEO) kullanmamızı istediği için eğer bir sayfa içerisinde kullanıcı etkileşimi veya hook kullanımı gereken bir yer varsa bütün sayfayı client component'a çevirmek yerine ilgili kısmı ayrı bir client component yaparız ve sayfa server component kalmaya devam eder

## İç İçe Kullanım

- `Aynı türden` iki component'ı iç içe kullanmakta bir problem yok.

- Bir `server component` içerisinde `client component` kullanmaktada bir problem yok

- Bir `client component` içerisinde `server component` kullanırsa server component'da client'a dönüşür

- Bir `client component` içerisinde `server component` `Higher Order Component` ile birlikte kullanırsa server component, client'a dönüşmez

# Data Fetching

- Next.js çekilen veriyi belirli bir süre boyunca cache'de tutar ve veriyi çeken fonksiyonu kısa süre içerisinde tekrar çalıştırdığımızda api'a tekrar istek atmak yerine cache'de tutulan veriyi kullanır.

- Bu sayede,
- - ilk isteğin ardından api'dan cevap beklmeye gerek kalmaz > daha hızlı
- - api'a gereksiz istekler gitmez > daha az maliyetli
- - asenkron state'ler için context veya redux'a gereke kalmaz > daha pratik

- Next.js varsayılan olarak bütün api isteklerini cache'ler ama bazen biz cache'lemesini istemeyebiliriz bu durunmda fetch methodunun ayarlarını buna göre yapabiliriz

# Next.js Methodlar

## useRouter

- sadece `client` component'larda kullanılabilir
- proje içerisinde yönlendirme yapmak için kullanılır
- back() | forward() | push() | replace() | reload() methodlarına sahiptir

## redirect

- sadece `server` component'larda kullanılabilir
- yönlendirme yapmak için kullanılır
- genelde auth için kullanırız

## notFound

- hem `server` hem `client` component'larda kullanılabilir
- 404 sayfasını ekrana basar

## usePathname

- sadece `client` component'larda kullanılabilir
- url'deki kullanıcının bulunduğu yolu getirir

## useParams

- sadece `client` component'larda kullanılabilir
- url'deki parameterlere erişmememizi sağlar

## useSearchParams

- sadece `client` component'larda kullanılabilir
- url'deki arama parameterlere erişmememizi sağlar

# Form

- Kullanıcın arattığı kelimeyi url'e parametre olarak eklemek aynı zamanda kullanıcyı search sayfasına yönlendirmek istiyoruz
- Normal şartlarda bunu ancak client component yazarak başarabileceğimizi düşünürüz ama server component ile de yapmak mümkündür

# Static Site Generation (SSG)

- SSG, next.js'in build (derleme) sırasında sayfaları önceden html olarak üretip sunucuda saklamasıdır.
- Kullanıcı siteyi ziyaret ettiğinde sayfalar anında ve çok hızlı şekilde sunulur çünkü önceden hazırlanmıştır

## Static Sayfa

- Build anında html'i hazırlanıp sunucuda saklanır, kullanıcı sayfaya girdiği anda tekrar hazırlanmadan direkt kullanıcıya sunulur

## Dinamik Sayfa

- Kullanıcı sayfaya girdiği anda hazırlanıp kullanıcıya sunulan sayfalardır
- Genelde url'de parametresi olan ve sayfa içeriğini url'deki parametreye göre değiştiği sayfalardır

## Static Bir Sayfayı Dinamik Hale Getirme (revalidate | dynamic)

- Next.js varsayılan olarak parametreye sahip olmayan bütün sayfaları statik yapar.
- Amaz bazen biz bu saydfa içeriklerinin belirli aralıklara güncelleneceğinden tamamen statik olmasını istemeyebiliriz.
- Bu durumda revalidate veya dynamic özellikleri kullanılır

## Dinamik Sayfları Statik Hale Çevirme (generateStaticParams)

- Fonksiyon dinamik olan sayfaları statik hale çevirir
- Build sırasında çağrılan dinamik route'lar için bir parametre listesi döndürür
- Next.js'de bu listedeki herbir parametre için o detay sayfasının statik bir versiyonunu oluşturur

# Fullstack Framework

- Next.js ile hem frontend hemden backend kodlarını tek bir proje içerisinde yazabiliyoruz.
- Backend route'u oluşturmak için api istminde bir klasör oluştururuz
