# React Router Dom

- react-router-dom, react uygulamlarında sayfalar yani rotalar arasında geçiş yapmamızı sağlayan bir kütüphanedir. SPA (Single Page Application) URL değiştiğined sayfa yeniden yüklenmeden içeriğin güncellenmesini sağlar

## Kurulum

1. Paketi dahil et:
   `npm i react-router-dom`

2. app.jsx içerisine import et:
   `import { BrowserRouter, Routes, Route } from "react-router-dom";`

### BrowserRouter:

- Uygulamanın router (yönlendirme) sistemini başlatır. Taryıcının adres çubuğundaki URL'i izler ve o URL'e göre hangi sayfanın gösterileceğine karar verir

### Routes

- Tüm `<Rotue />` bileşelerini kapsar, Her url değiştiğinde uygun `Route`'u bulup gösterir. Sadece ilk eşleşen route'u gösterir.

### Route

- Bir URL (örneğin /about) ile eşleştiğinde hangi bileşenin (sayfanın) gösterileceğini belirle

### Link

- Proje içerisinde sayfalar arasında geçiş işlemini SPA'a uygun şekilde gerçekleştirir. Link kullandığımız zaman DOM'a `<a><a>`etiketi basılır

### Sayfalar İçin Ortak Element Tanımı

- Eğerki projenin bütün sayfalarında göstermek istediğim ortak elementler varsa (header,footer,navbar) her sayfa içerisine tek tek yazmak yerine app.js'de routes dışarısına yazılan componentlar bütün sayfalar için ortak olur

### NavLink

- Normal Link elementi gibi yönlendirme var.
- Link elementinden farklı olrak eğerki kullanıcnın bulunuğu sayfanın url'i NavLink component'ının `to` propu aynı ise kendine active class'ı verir
