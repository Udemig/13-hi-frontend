import Footer from "./components/Footer";
import Header from "./components/Header";
import Category from "./pages/Category";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Novel from "./pages/Novel";
import Story from "./pages/Story";

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

            {/* Dynamic Route - Dinamik Yol */}
            <Route path="/detail/:book_id" element={<Detail />} />

            {/* Nested Routes - İç İçe Yollar */}
            <Route path="/category" element={<Category />}>
              <Route path="story" element={<Story />} />
              <Route path="novel" element={<Novel />} />
            </Route>

            {/* Eğerki kullanıcı yukarıdaki route'lardan hiçbirinde değilse 404 route'unu ekrana bas */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
