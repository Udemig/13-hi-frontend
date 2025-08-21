import { render, screen } from "@testing-library/react";
import Item from "../pages/home/item";

// Normal şartlarda bir bileşeni kullanırken hangi propları gönderiyorsak normalde gönderdiğimiz değerlere benzer proplar gönderiririz
test("Gönderilen proplar doğru şekilde kullanılır", () => {
  // test edilecek bileşeni renderla
  render(<Item color="text-red-500" text="Toplam Test" value="290M" />);

  // gereki elementleri çağır (icon,span,h2)
  const icon = screen.getByRole("img");
  const span = screen.getByRole("span");
  const h2 = screen.getByRole("heading");

  // color prop'u ile gelen değer icon'ın class'ında var mı kontrol et
  expect(icon).toHaveClass("text-red-500");

  // text prop'u ile gelen değer span'a yazıldı mı kontrol et
  expect(span).toHaveTextContent("Toplam Test");

  // value propu ile gelen değer h2'ye yazıldı mı kontrol et
  expect(h2).toHaveTextContent("290M");
});
