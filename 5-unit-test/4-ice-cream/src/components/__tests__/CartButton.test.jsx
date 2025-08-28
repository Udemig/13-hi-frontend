import { fireEvent, render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import CartButton from "../CartButton";
import { Provider } from "react-redux";
import { mockCart } from "../../utils/constants";
const createMockStore = configureStore();

describe("CartButton Component", () => {
  test("Toplam ürün sayısını gösterir", () => {
    const store1 = createMockStore({ cart: { totalItems: 0 } });

    const { rerender } = render(
      <Provider store={store1}>
        <CartButton />
      </Provider>
    );

    // ürün sayısı ekranda gözükmez
    expect(screen.queryByTestId("cart-count")).not.toBeInTheDocument();

    // ürün sayısını arttırıp component'ı tekrar renderla
    const store2 = createMockStore({ cart: { totalItems: 5 } });
    rerender(
      <Provider store={store2}>
        <CartButton />
      </Provider>
    );

    // ürün sayısı ekranda gözükür
    const cartCount = screen.getByTestId("cart-count");
    expect(cartCount).toHaveTextContent("5");
  });

  test("Sepet butonuna tıklandığında modal açılır kapanır", () => {
    // sahte store oluştur
    const store = createMockStore({ cart: mockCart });

    // 1: compoenent'ı renderla
    render(
      <Provider store={store}>
        <CartButton />
      </Provider>
    );

    // 2: modal ekranda yoktur
    expect(screen.queryByTestId("cart-modal")).not.toBeInTheDocument();

    // 3: sepet butonunu al
    const cartButton = screen.getByTestId("cart-button");

    // 4: sepet butonuna tıkla
    fireEvent.click(cartButton);

    // 5: modal ekranda gözükür
    expect(screen.getByTestId("cart-modal")).toBeInTheDocument();
  });
});
