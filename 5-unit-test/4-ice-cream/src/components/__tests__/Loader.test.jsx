import { render, screen } from "@testing-library/react";
import Loader from "../Loader";

test("Prop olarak aldığı mesajı kullanır", () => {
  // component'ı renderla
  const { rerender } = render(<Loader />);

  // ekranda yükleniyor... yazısı görünür
  screen.getByText("Yükleniyor...");

  // message göndererek component'ı tekrar renderla
  rerender(<Loader message="İndiriliyor..." />);

  // ekranda indiriliyor... yazısı görünür
  screen.getByText("İndiriliyor...");
});
