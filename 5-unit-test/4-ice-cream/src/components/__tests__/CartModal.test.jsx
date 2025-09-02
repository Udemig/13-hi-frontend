import { fireEvent, render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import CartModal from "../CartModal";
import { Provider, useDispatch } from "react-redux";
import { mockCart, mockCartEmpty } from "../../utils/constants";
import { clearCart, removeFromCart, updateQuantity } from "../../store/cartSlice";
import userEvent from "@testing-library/user-event";

// mock useDispatch
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

const createMockStore = configureStore();

describe("CartModal Component", () => {
  const dispatchMock = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock);
  });

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

  test("Ürün miktarını artırıp azaltabiliriz", () => {
    render(
      <Provider store={createMockStore({ cart: mockCart })}>
        <CartModal isOpen={true} onClose={() => {}} />
      </Provider>
    );

    // butonları al
    const increaseButton = screen.getAllByTestId("increase");
    const decreaseButton = screen.getAllByTestId("decrease");

    // miktarı 2 olan ürünün arttır butonuna tıkla
    fireEvent.click(increaseButton[0]);

    // updateQuantity aksiyonu doğru parametrelerle dispatch edilir
    expect(dispatchMock).toHaveBeenCalledWith(
      updateQuantity({ id: mockCart.items[0].id, quantity: mockCart.items[0].quantity + 1 })
    );

    // miktarı 2 olan ürünün azalt butonuna tıkla
    fireEvent.click(decreaseButton[0]);

    // updateQuantity aksiyonu doğru parametrelerle dispatch edilir
    expect(dispatchMock).toHaveBeenCalledWith(
      updateQuantity({ id: mockCart.items[0].id, quantity: mockCart.items[0].quantity - 1 })
    );

    // miktarı 1 olan ürünün azalt butonuna tıkla
    fireEvent.click(decreaseButton[1]);

    // removeFromCart aksiyonu doğru parametrelerle dispatch edilir
    expect(dispatchMock).toHaveBeenCalledWith(removeFromCart(mockCart.items[1].id));

    // sil butonunu al
    const deleteBtn = screen.getAllByTestId("delete");

    // sil butonuna tıkla
    fireEvent.click(deleteBtn[0]);

    // removeFromCart aksiyonu doğru parametrelerle dispatch edilir
    expect(dispatchMock).toHaveBeenCalledWith(removeFromCart(mockCart.items[0].id));
  });

  test("fiyat hesaplamaları doğru şekilde yapılır", () => {
    render(
      <Provider store={createMockStore({ cart: mockCart })}>
        <CartModal isOpen={true} onClose={() => {}} />
      </Provider>
    );

    // ara toplam ve toplam alannlarını al
    const subtotal = screen.getByTestId("subtotal");
    const total = screen.getByTestId("total");

    // ara toplam değeri doğru şekilde hesaplanır
    expect(subtotal).toHaveTextContent(`₺${mockCart.totalAmount}`);

    // toplam değeri doğru şekilde hesaplanır
    expect(total).toHaveTextContent(`₺${mockCart.totalAmount + 20}`);
  });

  test("Sipariş ver butonuna tıklandığında sipariş verilir", async () => {
    // userEvent kurulumunu yap
    const user = userEvent.setup();

    render(
      <Provider store={createMockStore({ cart: mockCart })}>
        <CartModal isOpen={true} onClose={() => {}} />
      </Provider>
    );

    // sipariş ver butonunu al
    const button = screen.getByRole("button", { name: "Sipariş Ver" });

    // sipariş ver butonuna tıkla
    await user.click(button);

    // doğru aksiyon dispatch edilir
    expect(dispatchMock).toHaveBeenCalledWith(clearCart());
  });
});
