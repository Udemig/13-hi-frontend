/* 
! Component (Bileşen)
  React'ta bir arayüz parçasıdır.
  Sayfayı küçük, yeniden kullanılabilir parçalara bölmeni sağlar

? Ne işe yarar ?
  Kod tekrarını önler
  Kolay okunur ve yönetilir
  Bir kez yaz, her yerde kullanırız

? Nasıl Oluşturulur ?
  Component'lar bir javascript fonksiyonunda oluşur
  Fonksiyonu isimlendiriken PascalCase kullanırız
  Mutlaka bir jsx kodu return etmelidir
  İleride kullanılmak üzere export edilmelidir
  */

function Header() {
  const title = "GETİR";

  return (
    <header className="box">
      <h2
        style={{
          background: "purple",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {title}
      </h2>

      <nav>
        <a>{10 + 10} Ürün</a>
        <a>Anasayfa</a>
        <a>Hakkımızda</a>
        <a>İleitşim</a>
        {console.log("selamlar")}
      </nav>
    </header>
  );
}

export default Header;
