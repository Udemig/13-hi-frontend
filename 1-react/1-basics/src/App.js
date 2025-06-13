import "./App.css";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Card from "./components/Card";
import Footer from "./components/Footer";

/* 
      App.js: Ana react component'ıdır

      <ComponentIsmı /> (Self Closing)
      yönetimyle oluştruduğumuz componetları çağırabilir
*/

function App() {
  // Ürünler verisini maplemek için bir dizi oluşturuyoruz
  const urunler = [
    {
      baslik: "Lays",
      fiyat: 90,
      url: "https://cdn-image.getir.com/market/product/c496944d-873f-4e30-84e8-03a050b435e5.jpg",
      stok: 0,
    },
    {
      baslik: "Ruffles",
      fiyat: 87,
      url: "https://cdn-image.getir.com/market/product/3f8327db-80c3-45ac-998a-d2858a595a60.jpg",
      stok: 10,
    },
    {
      baslik: "Doritos",
      fiyat: 78,
      url: "https://cdn-image.getir.com/market/product/b681abee-015c-4469-948c-8e2100d8fab0.jpg",
      stok: 20,
    },
  ];

  return (
    <div className="app">
      <Header />

      <div>
        <Aside />

        <main>
          {/* Çoklu Renderlama */}
          {urunler.map((urun, index) => (
            <Card key={index} baslik={urun.baslik} fiyat={urun.fiyat} url={urun.url} stok={urun.stok} />
          ))}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
