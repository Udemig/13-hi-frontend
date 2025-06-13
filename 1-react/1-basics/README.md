# React Projesi Oluşturma

- Bir react projesi oluşturmanın birden fazla yol olsa da:

- ``npx create-react-app klasör_ismi` > klasörü oluşturur ardından içerisine react projesini kurar
- ``npx create-react-app .` > terminalin olduğu dizine react projesni kurar

## React Projesini Ayağa Kaldır

- `npm start` > react projesini ayağa kaldırır

## Oluşan Klasör ve Dosyaların Açıklaması

- benim-projem/
  |-- node_modules/
  |-- public/
  |-- src/
  |-- .gitignore
  |-- package.json
  |-- README.md

#### node_modules/

- Tüm indirdiğimiz npm paketlerinin (React dahil) bulunuğu klasör
- Asla elle düzeltme yapılmaz
- Bu klasör çok büyük olur ama .gitignore sayesinde githuba gönderilmez

### public/

- statik (değişmeyen) dosyaların bulunduğu klasör.
- örneğin: index.html, favicon, logo, resimler

### .gitignore

- Git kullanılarken hangi dosyların yok sayılacağını.
- Yani githuba gönderilmeyecek dosyları belirlediğimiz dosya.

### .package.json/package-lock.json

- Projeye ait tüm bağımlıkları içerir.
- Hangi paket kurulu, hangi komutlar çalıştırılır (örn: start, build, test) yazar.
- Elle değiştirlmez

### src/

- Tüm react bileşenleri ve javascript/css kodlarını buraya yazarız

|-- index.css > Tüm uygulama için genel css dosyası
|-- app.css > App bileşeni için css ayarları
|-- app.js > Ana bileşendir.
|-- index.js > Uygulamanın giriş noktasıdır. React burada app.js'i çağırır ve index.html içerisinde #root id'li div içerisine ekrana basar

### Github

- Bir react projesini githuba gönderirken farklı hiç bir adım yoktur
- Sadece projeyi çektiğimiz zaman çalıştırmadan önce node_modules'ü indirmemiz lazım

### NPM Komutlar

- NPM (Node Package Manager)
- Yani javascript projesinde kullandığınız hazır paketleri (kütüphaneleri) indirip yöneten araçtır.
- Muadili yarn aynı işe yarar.

- `npm install`: package.json'daki bütün paketleri indirir
- `npm install paket_ismi`: ismini yazdığımız paketi indirir
- `npm uninstall paket_ismi`: ismini yazdığımız paketi kaldırır
- `npm start`: react projesini ayağa kaldırır (node_modules olması zorunlu)
- `npm run build`: react projesini derleyerek yayınlamaya hazır hale getirir

# JSX Nedir?

- JSX, "Javascript XML" anlamına gelir.
- React'ta HTML gibi görünen ama javascript içinde yazılan özel bir söz dizimidir

### Neden Kullanılır

- HTML gibi görünüyor ama javascript gibi çalışır
- Arka planda .createElement() fonksiyonuna dönüşür

### JSX ile HTML arasındaki Farklar

1. Class tanımı: `class` yerine `className` kullanılır

- ```html
  <div class="box red open"></div>
  ```
- ```html
  <div className="box red open"></div>
  ```

2. For tanımı: `for` yerine `htmlFor` kullanılır

- ```html
  <label for="image"></label>
  ```
- ```html
  <label htmlFor="image"></label>
  ```

3. Stil ekleme: `string` yerine `nesne` tanımı kullanılır

- ```html
  <div style="background:red;paddin:20px"></div>
  ```
- ```html
  <div
    style={{
      background: "purple",
      color: "white",
      padding: "10px",
      borderRadius: "5px",
    }}
  ></div>
  ```

4. Javasript Yazımı

- html'de: html kodu içerisine javascript kodu yazılama

- jsx'de: `{}` içerisinde javascript kodu yazabiliyoruz

# Component (Bileşen)

React'ta bir arayüz parçasıdır.
Sayfayı küçük, yeniden kullanılabilir parçalara bölmeni sağlar

### Ne işe yarar ?

Kod tekrarını önler
Kolay okunur ve yönetilir
Bir kez yaz, her yerde kullanırız

### Nasıl Oluşturulur ?

Component'lar bir javascript fonksiyonunda oluşur
Fonksiyonu isimlendiriken PascalCase kullanırız
Mutlaka bir jsx kodu return etmelidir
İleride kullanılmak üzere export edilmelidir

# Component Props

- Bir veri aktarım yöntemidir.
- Veri aktarımı her zaman yukarıdan aşşağıya gerçekleşir
- Component'lar prop'lar olmadan tamamen statik bir şekilde kullanılır.
- React'da component'ların içeriklerinin dinamik hale gelmesi için props yapısını kullanırız

1. Öncelikle prop olarak gönderileck içeriği component'ı kullandığımız yerden gönderiririz.

2. Prop gönderdiğimiz component içerisine gidip gönderilen proplar'ı fonksiypnun parametre bölümünde karşılar ve kullanırız

# Çoklu Renderlama

- Birden fazla elemanı renderlama işlemine çoklu renderlama denir

- Map kullanarak bir diziyi döneriz ve dizideki her bir eleman için arayüze bir element/component basarız. Bu sayede kod tekrarını önleriz

- React map'leyip ekrana bastığımız elementlere benzersiz bir key değeri vermemizi bekler.

- Bu key değeleri sayesinde react ekrana basılıan elementleri birbirinden ayırt edebilir ve güncelleme / ekleme / çıkaram durumlarında sadece değişen elemanı güncelleyerek performans optimizasyonu sağlar.

- Key vermediğimiz seneryoda değişene elmenti ayırt edemez ve bütün elementrleri tekrara renderlar

# Koşullu Renderlama

- Render: Ekrana bir içeriğin basılmasıdır.

- Koşullu renderlama: Renderlama işlemininin bir koşula bağlı olduğu durumdur

- Koşullu renderlama iki farklı şekilde yapılabilir.

- if else / switch case yapılarını jsx içerisinde kullanamayız

1. Terneray Operatörü (? :)

- Koşulun hem gerçekleştiği hem de gerçekleşmediği durumda ekrana basılacak içerik varsa kullanırız
- `?` koşulun gerçekleştiği durumu ifade eder
- `:` koşulun gerçekleşmediği durumu gösterir

2. Ve Operatörü (&&)

- Sadece koşulun gerçekleştiği durumda ekrana içerik basmak istiyorsak kullanırız.
- Yani koşulun gerçekleşmdiği seneryoda ekrana bir şey basmak istemiyorsa && operatörünü tercih ederiz

Elbette! İşte **React Virtual DOM** kavramının detaylı açıklaması, Markdown formatında:

---

# 🧠 React Virtual DOM Nedir?

**Virtual DOM (Sanal DOM)**, React'in yüksek performanslı kullanıcı arayüzleri oluşturmak için kullandığı temel bir tekniktir. Gerçek DOM üzerinde doğrudan işlem yapmak yerine, sanal bir kopyasını bellekte tutar ve değişiklikleri önce bu sanal yapı üzerinde uygular. Ardından minimum sayıda gerçek DOM güncellemesi yapar.

---

## 📦 Virtual DOM'un Tanımı

> Virtual DOM, **hafızada (memory)** tutulan, **gerçek DOM'un hafif ve soyut bir kopyasıdır**.

React her bileşeni render ettiğinde, bunun sanal DOM karşılığını oluşturur ve önceki versiyonla karşılaştırır. Bu sürece **Reconciliation (uzlaştırma)** denir.

---

## 🧩 Neden Virtual DOM Kullanılır?

Gerçek DOM üzerinde yapılan işlemler yavaştır. Sayfadaki en küçük bir değişiklik bile tüm ağaç yapısının yeniden render edilmesine neden olabilir. Virtual DOM bu sorunu çözer:

1. **Performansı artırır.**
2. **Gereksiz DOM manipülasyonlarını önler.**
3. **Daha iyi kullanıcı deneyimi sağlar.**

---

## 🔁 Çalışma Prensibi (Adım Adım)

```mermaid
graph TD
A[React Bileşeni Render Edilir] --> B[Virtual DOM Oluşturulur]
B --> C[Yeni Virtual DOM ile Eski Karşılaştırılır (Diffing)]
C --> D[Değişiklikler Belirlenir]
D --> E[Sadece Gerekli Kısımlar Gerçek DOM'a Uygulanır]
```

### 🔍 1. Virtual DOM Oluşturma

React bileşenleri çalıştığında, JSX yapısı virtual DOM’a çevrilir.

### 🔍 2. Diffing Algoritması

Yeni oluşturulan virtual DOM, önceki versiyonla karşılaştırılır. Değişen kısımlar tespit edilir.

### 🔍 3. Patch (Yama) Süreci

Sadece değişen parçalar gerçek DOM üzerinde güncellenir. Bu işlem hızlıdır çünkü minimum sayıda işlem yapılır.

---

## 💡 Gerçek DOM vs Virtual DOM

| Özellik          | Gerçek DOM (Real DOM)  | Sanal DOM (Virtual DOM)   |
| ---------------- | ---------------------- | ------------------------- |
| Performans       | Yavaş                  | Hızlı                     |
| Güncelleme Şekli | Her seferinde doğrudan | Fark tespitiyle seçici    |
| Maliyet          | Yüksek                 | Düşük                     |
| Kullanıldığı Yer | Tarayıcı               | React gibi kütüphanelerde |

---

## 🛠️ Örnek

```jsx
function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Sayac: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Artır</button>
    </div>
  );
}
```

Yukarıdaki örnekte her `count` değiştiğinde sadece `<h1>` etiketi yeniden render edilir, tüm `<div>` değil. Bu optimizasyon Virtual DOM sayesinde olur.

---

## 🧠 Sonuç

React'in **Virtual DOM** yapısı sayesinde:

- Performans artar,
- Gereksiz render’lar önlenir,
- UI daha akıcı ve hızlı çalışır.

Virtual DOM, modern web uygulamalarında React’in en güçlü özelliklerinden biridir.
