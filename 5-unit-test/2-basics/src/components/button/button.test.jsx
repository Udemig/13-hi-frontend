import { render, screen, fireEvent } from "@testing-library/react";
import Button from ".";

// unit test yazmak, yazdığımız kodun algoritmik olarak doğru çalılşıp çalışmadığını kontrol etmek için kullanılır
test("Butona tıklama olayında renk ve yazı değişir", () => {
  // test edilecek bileşen render edilir
  render(<Button />);

  // test edilecek buton elementini çağırı
  const button = screen.getByRole("button");

  // --------- tıklamadan önce değişicek değerlerin kontrolü -------------------
  // butonun arkaplan rengi "red" mi kontrol et
  expect(button).toHaveStyle({ background: "red" });

  // yazı "maviye çevir" mi kontrol et
  expect(button).toHaveTextContent("Maviye Çevir");

  // butona tıkla
  fireEvent.click(button);

  // --------- tıklamadan sonra değişen değerlerin kontrolü -------------------
  // butonun arkaplan rengi "aqua" mi kontrol et
  expect(button).toHaveStyle({ background: "aqua" });

  // yazı "kırmızıya çevir" mi kontrol et
  expect(button).toHaveTextContent("Kırmızıya Çevir");
});
