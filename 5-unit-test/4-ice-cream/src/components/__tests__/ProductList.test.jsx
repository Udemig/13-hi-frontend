import { render, screen, waitFor } from "@testing-library/react";
import ProductList from "../ProductList";
import axios from "axios";
import { mockProducts } from "../../utils/constants";
import ProductCard from "../ProductCard";

// mock axios
jest.mock("axios");

// product card component'ını mockla
// test içerisinde her component ekrana basılınca orjinal versiyon yerine mock versiyonu kullanılır
jest.mock("../ProductCard", () => () => <div data-testid="product-card" />);

describe("ProductList Component", () => {
  test("başlangıçta loader ekrana gelir", () => {
    // api isteği atılnca dönücek veriyi belirle
    axios.get.mockReturnValue(() => new Promise(() => {}));

    // component'i render et
    render(<ProductList />);

    // loader ekrana gelir
    screen.getByTestId("loader");
  });

  test("hata durumunda error mesajı gözükür", async () => {
    // api isteği atılnca dönücek veriyi belirle
    axios.get.mockRejectedValue(new Error("İnternetin çok yavaş"));

    // component'i render et
    render(<ProductList />);

    // loader ekrandan kaybolana kadar bekle
    await waitFor(() => expect(screen.queryByTestId("loader")).not.toBeInTheDocument());

    // ekrana hata mesajı gözükür
    screen.getByText("İnternetin çok yavaş");
  });

  test("veri yüklenince ürünler ekrana gelir", async () => {
    // api isteği atılnca dönücek veriyi belirle
    axios.get.mockResolvedValue({ data: mockProducts });

    // component'i render et
    render(<ProductList />);

    // loader ekrandan kaybolana kadar bekle
    await waitFor(() => expect(screen.queryByTestId("loader")).not.toBeInTheDocument());

    // ekrana mock'ladığımız card component'lar gelir
    const products = screen.getAllByTestId("product-card");
    expect(products).toHaveLength(mockProducts.length);
  });
});
