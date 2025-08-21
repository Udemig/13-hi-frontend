import { fireEvent, render, screen } from "@testing-library/react";
import Accordion from ".";

it("accordion component'ı düzgün çalışır", () => {
  // 1) test edilecek component render edilir
  render(<Accordion />);

  // 2) gerekli elementleri çağır (p,button)
  const button = screen.getByRole("button");
  const paragraph = screen.getByRole("paragraph");

  // 3) butonun içerisinde "göster" yazıyor mu kontrol et
  expect(button).toHaveTextContent("Göster");

  // 4) paragraf elementinde "hide" class'ı var mı kontrol et
  expect(paragraph).toHaveClass("hide");

  // 5) butona tıkla
  fireEvent.click(button);

  // 6) butonun içerisinde "gizle" yazıyor mu kontrol et
  expect(button).toHaveTextContent("Gizle");

  // 7) paragraf elementinde "show" class'ı var mı kontrol et
  expect(paragraph).toHaveClass("show");

  // 8) butona tıkla
  fireEvent.click(button);

  // 9) butonun içerisinde "göster" yazıyor mu kontrol et
  expect(button).toHaveTextContent("Göster");

  // 10) paragraf elementinde "hide" class'ı var mı kontrol et
  expect(paragraph).toHaveClass("hide");
});
