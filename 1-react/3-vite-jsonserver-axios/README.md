# Vite

- Proje oluşturma aracıdır.
- React projeleri oluşturmak için kullanıcaz.
- `Create React App` yerine `Create Vite` tercih etmemizin sebebi vite'ın proje kurma / ayağa kaldırma / değişklerin ekrana yansıma süresinde daha hızlı olması

# CRA vs Vite Farkları

- Vite her konuda daha hızlı

- Vite ile kurulan projede gereksiz dosyalar oluşmaz

- `App.js` ve `index.js` yerine `App.jsx` ve `main.jsx` dosyaları oluşur

- `vite.config.js` dosyası oluşur, Vite'ın ayar dosyasıdır

- vite kurulumda ihtiyaç duyulmayan paketleri indirmez

- vite tarafında projeyi ayağa kaldırmak için `npm start` yerine `npm run dev` kullanırız

- vite tarafında `index.html` dosyası public klasörünün dışarısında oluşur

# JSON-Server

- Hızlıca bir REST API oluşturmak için kullanılan, hafif basit bir Node.JS kütüphanedir. Mock (Sahte) bir backend oluşturmak isteyeb frontend geliştiricileri için işe yarar.
- Gerçek bir veritbanı kurmata gerek kalmadan sadece `db.json` dosyası üzerinden çalışan bir API sunar

## Neden sahte bir api oluşturmak istiyim?

- Sahte api'lar prototipleme amacıyla kullanabiliriz çünkü sahte api kullandığımı bir projeyi yayınlayamayız

- Sahte api'ları get post put patch delete isteği atarak kendimizi test ediceğimiz basit projeler yazarken kullanabiliriz

## JSON Server Kullanımı

- Projeye `json server` kütüphanesi dahil edilmeli.
- - `npm install json-server`

- Projenin en dış klasöründe örnek datalara sahip bir `db.json` dosyası oluşturulmalı

- Terminale `json-server --watch db.json --port 4000` kodunu yazarak db.json üzeirinden çalışan `get/post/put/patch/delete` isteklerini kabul eden sahte bir api oluşturabilirsiniz.

- Terminale her seferinde bu kodu yazmak zorunda kalmamak için package.json dosyasına kestirme bir komut ekleyelim

## Özellikler

- `Get` isteği ile verileri alabilirsiniz
- `Post` isteği ile yeni veri oluşturabilirsiniz
- `Put` isteği ile bütün veriyi güncelleyebilirsiniz
- `Patch` isteği ile veriyi kısmi güncelleyebilirsiniz
- `Delete` isteği ile veriyi silebilirsiniz

- `/endpoint/id` adersi ile diyerek spesifik bir veriyi alabilirsiniz

- filtreleme / sıralama / sayfalama özelliklerini gerekli parametereleri göndeerek kullanabiliyosunuz

# Axios

- Axios, Tarayıcıda (frontend) ve Node.js (backend) ortamında HTTP istkleri yapmamızı sağlayan Javascript kğtüphanesidir.

## Neden Axios

- `fetch` yöntemine göre kullanımı daha kolaydır
- istekleri otomatik olarak JSON'a çevirir
- interceptor özelliği ile istek ve cevaplara müdahale edebilirsin
- timeout, baseURL,headers gibi ayarları kolaylıkla yapılır
- tarayıcı uymluluğu daha yüksektir

- Get İsteği:

```js
// Fetch isteğinde json cevabını js'e çevirmemeiz gerekir (.json())
fetch("http://localhost:4000/todos")
  .then((res) => res.json())
  .then((data) => console.log("fetch", data));

// Axios json cevabını otomatik olarak js'e çevirir
axios
  .get("http://localhost:4000/todos") //
  .then((res) => console.log("axios", res.data));
```

- Post İsteği:

```js
// Fetch isteğinde gönderilcek veriyi json'a çevirmemeiz gerekir (.json())
fetch("http://localhost:4000/todos", {
  method: "POST",
  body: JSON.stringify({
    username: "ali",
    age: 56,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log("fetch", data));

// Axios gönderilcek veriyi json'a otomatik olarak çevirir
axios
  .post("http://localhost:4000/todos", {
    username: "ali",
    age: 56,
  }) //
  .then((res) => console.log("axios", res.data));
```

## Parametre Gönderme

- axios, fetch yönteminde farklı olarak parametreleri nesne formatında göndermemize olanak sağlar bu yöten parametrelerin dinamik olduğunda oldukça işimize yarar

```js
// 1.yol url ekliyoruz
fetch("/todos?_sort=date&_order=desc"); //

// 2.yol: nesne formatında gönderiyoruz
const options = { params: { _sort: "date", _order: "desc" } };

api.get("/todos", options);
```

# Object Destructing

- Object Destructring ({})
- Bir nesne içerisindeki değerlere doğrudan erişmemizi sağlar
- Props nesnesi içerisindeki todo verisine doğrudan eirişerek kod tekrarını engelledik

```js
const ListItem = ({ todo }) => {
  const { title, id, status, date } = todo;

  return (
    <div>
      <h1>{title}</h1>
      <h4>{id}</h4>
      <h4>{status}</h4>
      <h4>{date}</h4>
    </div>
  );
};
```

# Formdaki Verilere Erişme

- 2 yol vardır:

1. useState yöntemi:

- anlık güncellemeleri takip etmemiz gerekirse kullanırız

```js
// Form state'leri
const [title, setTitle] = useState("");

// Form gönderilince çalışan fonksiyon
const handleSubmit = (e) => {
  e.preventDefault(); // sayfa yenilemesini engelle

  console.log("değerler", title);
};

// inputlara onchange yazmak gerekir
<input onChange={(e) => setTitle(e.target.value)} />;
```

2. event.target yöntemi:

- anlık güncellemyi takip etmek gerekmiyorsa form gönderilince veriler bize lazımsa bu yöntemi kullanırız

```js
// Form gönderilince çalışan fonksiyon
const handleSubmit = (e) => {
  e.preventDefault(); // sayfa yenilemesini engelle

  console.log(e.target[0].value);
};

// inputu oluşturmak yeterli
<input />;
```

# [{}] State'de tutulan veriyü güncelleme

- 2 yaygın yol mevcut:

1. Map:

```js
// State'de tutulan todo state'ini maple dönüyoruz
// Eğer dizideki eleman'ın id'si güncellenicek elemanın id'sine eşit ise yeni oluşturucağımız diziyi todo nun güncel verilerini içeren nesneyi ekliyoruz
// Eğer dizideki eleman'In id'si güncellenicek elemanın id'sinden farklı ise o todoyu olduğu gibi yeni diziye ekliyoruz
const updatedTodos = todos.map((todo) => (todo.id === id ? { id, ...updateData } : todo));

setTodos(updatedTodos);
```

2. Splice:

```js
// splice veriyi direkt değiştirdiği için todos verisinin kopyasını al
const temp = [...todos];

// güncellenicek elemanın id'si üzerinden dizideki sırasını bul
const index = temp.findIndex((todo) => todo.id === id);

// sırasını bildiğimiz elemanı güncelle
temp.splice(index, 1, { id, ...updateData });

// state'i güncelle
setTodos(temp);
```

# CRUD (Create Read Update Delete)

- Frontende nererdeyse her uygulama bir CRUD uyuglmasıdır.
- Sosyal Medya, E-Ticaret, Mesajlaşma

# todo Interceptors
