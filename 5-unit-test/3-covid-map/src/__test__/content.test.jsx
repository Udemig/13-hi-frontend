import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { mockDetailData } from "../utils/constants";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Content from "../pages/detail/content";

const createMockStore = configureStore([thunk]);

// TDD
it("store yüklenme durumundayken ekrana loader gelir", () => {
  const store = createMockStore({
    isLoading: true,
    error: null,
    data: null,
  });

  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );

  screen.getByTestId("loader");
});

it("store hata durumundayken ekrana hata gelir", () => {
  const store = createMockStore({
    isLoading: false,
    error: "Ülke bulunamadı",
    data: null,
  });

  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );

  screen.getByText("Ülke bulunamadı");
});

it("store'a veri geldiğinde her bir değer ekrana  basılır", () => {
  const store = createMockStore({
    isLoading: false,
    error: null,
    data: mockDetailData,
  });

  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );

  // data nesnesini diziye çevir
  const arr = Object.entries(mockDetailData).filter(([key]) => key !== "flag");

  // dizideki her bir key ve value ekrana basılyor mu
  arr.forEach((item) => {
    // ekrana item'ın key değeri basılıyor mu
    screen.getByText(item[0]);

    // ekrana item'ın value değeri basılır
    screen.getByText(item[1]);
  });
});
