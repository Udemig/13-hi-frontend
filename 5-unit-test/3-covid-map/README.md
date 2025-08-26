# Gerekli Kütüphaneler

- @testing-library/jest-dom
- @testing-library/react
- axios
- millify
- react-simple-maps
- react-router-dom
- react-icons
- tailwindcss
- @reduxjs/toolkit
- react-redux
- redux-thunk

# Kaynaklar

- Detay Verileri İçin API:
  https://rapidapi.com/api-sports/api/covid-193

- Toplam Veriler İçin API:
  https://rapidapi.com/axisbits-axisbits-default/api/covid-19-statistics

# Describe Methodları

```jsx
// her test'ten önce birer kere çalışır
beforeEach(() => {
  console.log("beforeEach çalıştı");
});

// bütün testlerden önce sadece bir kez çalışır
beforeAll(() => {
  console.log("beforeAll çalıştı");
});

// her test'ten sonra birer kere çalışır
afterEach(() => {
  console.log("afterEach çalıştı");
});

// bütün testlerden sonra sadece bir kez çalışır
afterAll(() => {
  console.log("afterAll çalıştı");
});
```

# Selector Anatomisi

- Selector, test ortamında ekrandaki elementleri almak için kullandığımız methodlardır.
- Seçiciler temelde 3 ana parçadan oluşur

1. Yöntem\*

- Get: Ekrandaki elementi alır, alamazsa hata verir.
  Bir elementin ekranda olduğunu kontrol etmek için kullanırız

- Query: Ekrandaki elementi alır, alamazsa null döndürür ve hata vermez.
  Ekranda olmadığını düşündüğümüz elementleri almak için kullanırız.

- Find: Ekrana asenkron olaraka basılan elementleri almak için kullanılır.
  Eğe api isteğini mock'lamadıysak, api isteği sonrasında ekrana basılan elementleri seçmek için kullanırız

2. All İfadesi (Opsiyonel)

- Eğerki ekrandan aynı koşula uyan birden fazla element almak istiyorsak kullandığımız yöntemin devamını All ifadesini ekleriz
- All ifadesi kullanırsak dönen cevap her zaman bir dizi içerisinde olur.
- getAllBy | queryAllBy | findAllBy
- - örn: ekrandaki bütün button elementleri almak istersek: `getAllByRole("button")`

3. Sorgu\*

- Hangi yöntemle elemenyi seçiceğimizi belirleyen methodlar
- ByRole
- ByLabelText
- ByText
- ByDisplayValue
- ByAltText
- ByTitle
- ByTestId

- Artık yukarıdaki 3 parçayu istediğiniz gibi birleştirip kullanabilirsiniz.
- Örn: `queryByTitle() | findAllByText() | getAllByTestId()`

# TDD (Test Driven Development)

- Test güdümlü geliştirme, yazaılım geliştirme sürecinde testlerin koddan önce yazıldığı bir tekniktir.
- Red-To-Green test olarakda bilinir.

### TDD Süreci

1. Test Yaz: İstenen özellik için önce test yazılır
2. Test Çalıştır: Testler başarısız olur
3. Kod Yaz: Testi geçicek minimumn kodu yaz
4. Test Geç: Tüm testler başarılı olmalı
5. Refactor: Kodu iyileştir, testler hala geçmeli

### TDD Avantajları

- Daha temiz ve sürderilebilir kod
- Erken hata tespiti
- Değişiklik yaparken güven sağlar

### TDD Zorlukları

- Bu tekniği öğrenmek biraz zaman alır
- İyi test yazma becerisi gerektirir
