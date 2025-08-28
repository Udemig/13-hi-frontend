import { fireEvent, render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import CartModal from "../CartModal";
import { Provider } from "react-redux";
import { mockCart, mockCartEmpty } from "../../utils/constants";

const createMockStore = configureStore();

describe("CartModal Component", () => {
  test("isOpen prop'una göre component görünür veya gizli olur", () => {
    // component'ı renderla (isOpen false)
    render(
      <Provider store={createMockStore({ cart: mockCart })}>
        <CartModal isOpen={false} onClose={() => {}} />
      </Provider>
    );

    // modal ekranda yoktur
    expect(screen.queryByTestId("cart-modal")).not.toBeInTheDocument();

    // component'ı renderla (isOpen true)
    render(
      <Provider store={createMockStore({ cart: mockCart })}>
        <CartModal isOpen={true} onClose={() => {}} />
      </Provider>
    );

    // modal ekranda gözükür
    expect(screen.getByTestId("cart-modal")).toBeInTheDocument();
  });

  test("onClose prop'u doğru zamanda çalışır", () => {
    // component'ı renderla
    const onClose = jest.fn();
    render(
      <Provider store={createMockStore({ cart: mockCart })}>
        <CartModal isOpen={true} onClose={onClose} />
      </Provider>
    );

    // X butonunu al
    const closeButton = screen.getByTestId("close-button");

    // X butonuna tıkla
    fireEvent.click(closeButton);

    // onClose fonksiyonu çağrılır
    expect(onClose).toHaveBeenCalled();
  });

  test("Sepette ürün yoksa uyarı mesajı görünür", () => {
    render(
      <Provider store={createMockStore({ cart: mockCartEmpty })}>
        <CartModal isOpen={true} onClose={() => {}} />
      </Provider>
    );

    // uyarı mesajı ekranda gözükür
    screen.getByText("Sepetiniz boş");
  });

  test("Sepette ürün varsa ürünler listelenir", () => {
    render(
      <Provider store={createMockStore({ cart: mockCart })}>
        <CartModal isOpen={true} onClose={() => {}} />
      </Provider>
    );

    // item dizisindeki her bir veri için aşağıdaki kontrolleri yap
    mockCart.items.forEach((item) => {
      // ürünün adı ekranda gözükür
      screen.getByText(item.name);

      // ürünün fiyatı ekranda gözükür
      screen.getByText(`₺${item.price}`);

      // ürünün resmi ekranda gözükür
      const image = screen.getByRole("img", { name: item.name });
      expect(image).toHaveAttribute("src", item.image);

      // ürünün tipi ekranda gözükür
      screen.getByText(item.format === "cup" ? "Bardak" : "Külah");

      // ürünün miktarı ekranda gözükür
      screen.getByText(item.quantity);
    });
  });
});
