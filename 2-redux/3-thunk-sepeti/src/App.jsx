import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Restaurant from "./pages/restaurant";
import Cart from "./pages/cart";
import Header from "./components/header";
import Footer from "./components/footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRestaurants } from "./redux/actions/restActions";
import { getBasket } from "./redux/actions/basketAction";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // restoran verilerini api'dan alıp store'a aktarıcak aksiyonu tetikle
    dispatch(getRestaurants());

    // sepet verilerini api'dan alıp store'a aktarıcak aksiyonu tetikle
    dispatch(getBasket());
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurant/:id" element={<Restaurant />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
