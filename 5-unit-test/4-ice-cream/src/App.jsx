import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import CartButton from "./components/CartButton";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <ProductList />
      </main>
      <CartButton />
    </div>
  );
};

export default App;
