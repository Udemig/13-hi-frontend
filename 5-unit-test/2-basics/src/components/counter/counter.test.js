import { fireEvent, render, screen } from "@testing-library/react";
import Counter from ".";

it("sayaç doğru şekilde çalışır", () => {
  // 1) test edilecek bileşen render edilir
  render(<Counter />);

  // 2) gerekli elementleri al (button,p)
  const decBtn = screen.getByRole("button", { name: "Azalt" });
  const incBtn = screen.getByRole("button", { name: "Arttır" });
  const countP = screen.getByText("0"); // 3) sayacın değeri 0 mı kontrol et

  // 4) azalt butonuna inaktif mi kontrol et
  expect(decBtn).toBeDisabled();

  // 5) arttır butonuna tıkla
  fireEvent.click(incBtn);

  // 6) sayacın değeri 1 mi kontrol et
  expect(countP).toHaveTextContent("1");

  // 7) azalt butonuna aktif mi kontrol et
  expect(decBtn).toBeEnabled();

  // 8) arttır butonuna tıkla
  fireEvent.click(incBtn);

  // 9) sayacın değeri 2 mi kontrol et
  expect(countP).toHaveTextContent("2");

  // 10) azalt butonuna tıkla
  fireEvent.click(decBtn);

  // 11) sayacın değeri 1 mı kontrol et
  expect(countP).toHaveTextContent("1");

  // 12) azalt butonuna tıkla
  fireEvent.click(decBtn);

  // 13) sayacın değeri 0 mı kontrol et
  expect(countP).toHaveTextContent("0");

  // 14) azalt butonuna inaktif mi kontrol et
  expect(decBtn).toBeDisabled();
});
