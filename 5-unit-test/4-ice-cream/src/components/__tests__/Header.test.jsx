import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header Component", () => {
  test("Mobile menu toggle functionality", () => {
    render(<Header />);

    // menu butonunu al
    const menuButton = screen.getByLabelText("Toggle menu");

    // anasayfa linki var mı kontrol et
    expect(screen.queryByText("Anasayfa")).toBeInTheDocument();

    // menu butonuna tıkla
    fireEvent.click(menuButton);

    // anasayfa linki 2 tane var mı kontrol et (1 tane header içinde, 1 tane açılan menu içinde)
    const homeLinks = screen.getAllByText("Anasayfa");
    expect(homeLinks).toHaveLength(2);

    // menu butonuna tıkla
    fireEvent.click(menuButton);

    // anasayfa linki 1 tane var mı kontrol et
    const homeLinkAgain = screen.getAllByText("Anasayfa");
    expect(homeLinkAgain).toHaveLength(1);
  });

  test("Keyboard navigation", () => {
    render(<Header />);

    // menu butonunu al
    const menuButton = screen.getByLabelText("Toggle menu");

    // enter tuşuna bas
    fireEvent.keyDown(menuButton, { key: "Enter" });

    // anasayfa linki 2 tane var mı kontrol et (1 tane header içinde, 1 tane açılan menu içinde)
    const homeLinks = screen.getAllByText("Anasayfa");
    expect(homeLinks).toHaveLength(2);

    // space tuşuna bas
    fireEvent.keyDown(menuButton, { key: " " });

    // anasayfa linki 1 tane var mı kontrol et
    const homeLinkAgain = screen.getAllByText("Anasayfa");
    expect(homeLinkAgain).toHaveLength(1);
  });
});
