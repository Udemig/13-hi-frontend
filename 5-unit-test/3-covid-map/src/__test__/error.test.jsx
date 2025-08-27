import { fireEvent, render, screen } from "@testing-library/react";
import Error from "../components/error";

test("prop olarak alınan hata mesajı ekrana basılır", () => {
  render(<Error message="Aradığınız ülke bulunamadı" retry={() => {}} />);

  // hata mesajı ekrana geldi mi
  screen.getByText(/aradığınız/i); // regex | i:insensetive
});

test("prop olarak alınan fonksiyon butona tıklanınca çalışır", () => {
  // jest ile sahate fonksiyon oluştur
  const mockFn = jest.fn();

  // bileşeni renderla
  render(<Error message="Aradığınız ülke bulunamadı" retry={mockFn} />);

  // fonksiyonun daha önce çağrılmadığını kontrol et
  expect(mockFn).not.toHaveBeenCalled();

  // tekrar dene butonunu al
  const button = screen.getByRole("button");

  // butona tıkla
  fireEvent.click(button);

  // retry fonksiyonu çağrıldı mı kontrol et
  expect(mockFn).toHaveBeenCalled();
});
