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
