import { fireEvent, render, screen } from "@testing-library/react";
import ProductCard from "../ProductCard";
import { mockProducts } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

// mock dispatch - create a proper Jest mock
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("Product Card Component", () => {
  // useDispatch mock fonksiyonu çağrılınca geriye mock dispatch methodunu döndürücek
  const dispatchMock = jest.fn();
  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock);
  });

  test("Prop olarak alınan bilgileri ekranda gösterilir", () => {
    render(<ProductCard product={mockProducts[0]} />);

    // resim ekrana gelir
    const image = screen.getByAltText(mockProducts[0].name);
    expect(image).toHaveAttribute("src", mockProducts[0].image);

    // ürün adı ekrana gelir
    screen.getByRole("heading", { name: mockProducts[0].name });

    // fiyat ekrana gelir
    screen.getByText(`₺${mockProducts[0].price} / top`);
  });

  test("Seçeneklerden biri seçilince buton aktif olur", () => {
    render(<ProductCard product={mockProducts[0]} />);

    // buton elementlerini getir
    const cornetBtn = screen.getByRole("button", { name: "Külah" });
    const cupBtn = screen.getByRole("button", { name: "Bardakta" });

    // iki butonda seçili değildir
    expect(cornetBtn).toHaveClass("bg-gray-300");
    expect(cupBtn).toHaveClass("bg-gray-300");

    // külah butonuna tıkla
    fireEvent.click(cornetBtn);

    // külah butonu aktif olur ve bardakta butonu aktif değildir
    expect(cornetBtn).toHaveClass("bg-red-600");
    expect(cupBtn).not.toHaveClass("bg-red-600");

    // bardakta butonuna tıkla
    fireEvent.click(cupBtn);

    // bardakta butonu aktif olur ve külah butonu aktif değildir
    expect(cupBtn).toHaveClass("bg-red-600");
    expect(cornetBtn).not.toHaveClass("bg-red-600");
  });

  test("Sepete ekle butonu düzgün çalışır", () => {
    render(<ProductCard product={mockProducts[0]} />);

    // ekranda Sepete Ekle butonu yoktur
    expect(screen.queryByRole("button", { name: "SEPETE EKLE" })).not.toBeInTheDocument();

    // külah butonuna tıkla
    fireEvent.click(screen.getByRole("button", { name: "Külah" }));

    // ekrana Sepete Ekle butonu gelir
    expect(screen.getByRole("button", { name: "SEPETE EKLE" })).toBeInTheDocument();

    // sepete ekle butonuna tıkla
    fireEvent.click(screen.getByRole("button", { name: "SEPETE EKLE" }));

    // dispatch fonksiyonu doğru parametrelerle çağrılır
    expect(dispatchMock).toHaveBeenCalledWith(
      addToCart({
        productId: mockProducts[0].id,
        name: mockProducts[0].name,
        price: mockProducts[0].price,
        image: mockProducts[0].image,
        format: "Külah",
      })
    );

    // sepete ekle butonu gizlenir
    expect(screen.queryByRole("button", { name: "SEPETE EKLE" })).not.toBeInTheDocument();
  });
});
