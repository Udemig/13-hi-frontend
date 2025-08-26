import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import Header from "../pages/detail/header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockDetailData } from "../utils/constants";

// sahte store kurulumu
const createMockStore = configureStore([thunk]);

it("store yüklenme durumundayken ekrana loader gelir", () => {
  // bu teste özel loading durumunda sahte bir store oluştur
  const mockStore = createMockStore({
    isLoading: true,
    error: null,
    data: null,
  });

  // componen içerisind react-router-dom ve redux elementleri kullandığı için component'I renderlarken gerekli sağlayıclar ile sarmaldık. Gerçekten api isteği atmaması için sahte store tanımladık
  render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  // ekrana loader geliyor mu
  screen.getByTestId("loader");
});

it("store'a veri geldiğinde ekrana ülke ismi ve bayrağı gelir", () => {
  // bu teste özel verilere sahip sahte store oluştur
  const mockStore = createMockStore({
    isLoading: false,
    error: null,
    data: mockDetailData,
  });

  // component'ı renderla
  render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  // loader ekranda olmadığından emin ol
  const loader = screen.queryByTestId("loader");
  expect(loader).toBeNull();

  //ülke ismi ekranda mı
  // 1. yol
  const title = screen.getByRole("heading");
  expect(title).toHaveTextContent("Turkey");

  // 2.yol
  screen.getByRole("heading", { name: "Turkey" });

  // ülke bayrağı ekranda mı
  const img = screen.getByAltText(mockDetailData.flag.alt);

  // ülke bayrağının kaynağı (src) doğru mu
  expect(img).toHaveAttribute("src", mockDetailData.flag.png);
});
