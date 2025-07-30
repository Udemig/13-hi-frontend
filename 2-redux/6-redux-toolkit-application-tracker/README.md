# Kütüphaneler

- react-router-dom
- @reduxjs/toolkit
- react-redux
- react-toastify
- json-server
- axios
- lucide-react
- dayjs
- sass

# Module CSS

### Scoped (Bileşene Özel)

- `*.module.scss` ile tanımlanan class'lar otomatik olarak local scope'a alınır. Yani yalnızca import edildiği bileşende geçerlidir.
- çakışma riski yoktur

### Global CSS Karmaşasını Önler

- Global css dosyalarında yazılan her class globaldir. Bu da büyük projelerde isim çakışmalarına, istenmeyen override'lara neden olabilir
- Daha düzenli ve kontrollü css yazarız

### İzolosyon

- Her bileşenin stili ayrı tutulduğu için
- Yeni bir class tanımlarken "bu isim başa bir yerde kullanıldı mı?" derdi kalmaz

### Kullanım

- `*.module.scss` iismli dosya oluşturup stilleri yazarız
- kullanılacak component'da `import styles from "*.module.scss"` stilleri import ederiz
- styles nesnesi içerisindeki class'isimlerini elementler üzerinde kullanırız
