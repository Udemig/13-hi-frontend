import Footer from "./components/Footer";
import Header from "./components/Header";
import Category from "./pages/Category";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Products from "./pages/Products";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Header />

        <main className="flex-grow-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/category" element={<Category />} />
            <Route path="/detail/:book_id" element={<Detail />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
