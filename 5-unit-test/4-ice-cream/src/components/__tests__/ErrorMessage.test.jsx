import { fireEvent, render, screen } from "@testing-library/react";
import ErrorMessage from "../ErrorMessage";

describe("ErrorMessage Component", () => {
  test("prop olarak aldığı mesajı kullanır", () => {
    // component'ı renderla
    render(<ErrorMessage message="Ürünler yüklenmedi" />);

    // ekranda Ürünler yüklenmedi yazısı görünür
    screen.getByText("Ürünler yüklenmedi");
  });

  test("prop olarak aldığı fonksiyonu kullanır", () => {
    // component'ı renderla
    const { rerender } = render(<ErrorMessage message="Ürünler yüklenmedi" />);

    // tekrar dene butonu ekranda yoktur
    expect(screen.queryByRole("button")).not.toBeInTheDocument();

    // onRetry fonksiyonuyla birlikte component'ı tekrar renderla
    const onRetry = jest.fn();
    rerender(<ErrorMessage message="Ürünler yüklenmedi" onRetry={onRetry} />);

    // tekrar dene butonunu al
    const retryBtn = screen.getByRole("button");

    // tekrar dene butonuna tıklanınca onRetry fonksiyonu çağrılır
    fireEvent.click(retryBtn);

    // onRetry fonksiyonu çağrılır
    expect(onRetry).toHaveBeenCalled();
  });
});
