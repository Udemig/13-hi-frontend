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

- Terminale `json-server --watch db.json --port 4000` kodunu yazarak db.json üzeirnden çalışan `get/post/put/patch/delete` isteklerini kabul eden sahte bir api oluşturabilirsiniz.

- Terminale her seferinde bu kodu yazmak zorunda kalmamak için package.json dosyasına kestirme bir komut ekleyelim

## Özellikler

- `Get` isteği ile verileri alabilirsiniz
- `Post` isteği ile yeni veri oluşturabilirsiniz
- `Put` isteği ile bütün veriyi güncelleyebilirsiniz
- `Patch` isteği ile veriyi kısmi güncelleyebilirsiniz
- `Delete` isteği ile veriyi silebilirsiniz

- `/endpoint/id` adersi ile diyerek spesifik bir veriyi alabilirsiniz

- filtreleme / sıralama / sayfalama özelliklerini gerekli parametereleri göndeerek kullanabiliyosunuz
