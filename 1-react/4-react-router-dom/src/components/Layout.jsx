import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

// Projedeki bütün sayfaların kapsayan sayfa düzenini belirleyen element
const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1 p-4">
        {/* Sayfa içeriğini yerleştiği nokta */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
