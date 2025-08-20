import { render, screen } from "@testing-library/react";
import App from "./App";

/*
 ! Unit Test
 * Yazdığımız *dinamik* olan bütün bileşenlerin testlerini yazarız.
 * Unit test yazmamız sayesinde kod değişkliği yapıldığında, yaptığımız değişiklikleri githuba göndermden önce projede hata olup olmadığını kontrol etmemizi sağlar
 * Projelerde her işlevi el ile kontrol etmek çok fazla zaman alıcağından ve bir şeylerin gözden kaçme ihtimali yüksek olduğundan test yazmak önemlidir.
 * Bu yüzden unit test ile bileşenlerin doğru çalışıp çalışmadığını kontrol eden testler yazarız.
*/

/*
 ! Dosyalama
 * setup.test.js: jest kütüphanesinin kurulumunu yapıldığı dosya
 * app.test.js: app component'ının testlerinin yazıldığı dosya
 * bir dosyanın test dosyası olduğunu .test.js/.test.jsx uzantısından anlarız
 */

/*
 !  Test Nasıl Yazarız
 * test yazarken `test` veya `it` methodlarını kullanırız
 * test fonksiyonu 2 parametre ister
 * 1) string: testin adı
 * 2) function: testin yapıldığı yer
*/

test("Ekranda selamlar yazar", () => {
  // test edilecek component render edilir (virtual - sanal ortam - ramde)
  render(<App />);

  // renderlanan component içerisinden test edilecek elementi çağıralım
  // eğer component tarayıcıda ekrana basılıyor olsaydı document.querySelector() / getElementById() gibi bir method kullanırdık
  // ram'de render edildiğinden `document` yerine `screen` ve querySelector() methodları yerine farklı methodlar kullanırız
  const h1 = screen.getByText("Selamlar");

  // çağrılan elementten beklentimizi söyleriz
  // beklentimiz: ekranda içinde Selamlar yazan element vardır
  expect(h1).toBeInTheDocument();
});
