import { useState, useEffect } from "react";
import axios from "axios";
import { HiAdjustments, HiViewGrid, HiCheckCircle, HiUsers } from "react-icons/hi";
import ProductCard from "./ProductCard";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from API using axios
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get("http://localhost:3001/products");
      setProducts(response.data);
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || "Ürünler yüklenirken bir hata oluştu";
      setError(errorMessage);
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Loading state
  if (loading) {
    return <Loader message="Ürünler yükleniyor..." />;
  }

  // Error state
  if (error) {
    return <ErrorMessage message={error} onRetry={fetchProducts} />;
  }

  return (
    <section className="bg-red-600 py-16 relative overflow-hidden">
      {/* Background decoration matching Hero */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-red-800"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header with title and filter buttons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-0">Kategori Seçiniz</h2>

          {/* Filter Icons */}
          <div className="flex space-x-3">
            <button
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-200 border border-white/30"
              aria-label="Filtre 1"
              role="button"
              tabIndex={0}
            >
              <HiAdjustments className="w-6 h-6 text-white" />
            </button>

            <button
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-200 border border-white/30"
              aria-label="Filtre 2"
              role="button"
              tabIndex={0}
            >
              <HiViewGrid className="w-6 h-6 text-white" />
            </button>

            <button
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-200 border border-white/30"
              aria-label="Filtre 3"
              role="button"
              tabIndex={0}
            >
              <HiCheckCircle className="w-6 h-6 text-white" />
            </button>

            <button
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-200 border border-white/30"
              aria-label="Filtre 4"
              role="button"
              tabIndex={0}
            >
              <HiUsers className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty state */}
        {products.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-red-100 text-lg">Henüz ürün bulunmuyor.</p>
          </div>
        )}
      </div>

      {/* Decorative Elements matching Hero */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-red-400 rounded-full opacity-15 hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-200 rounded-full opacity-10 hidden lg:block"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-red-300 rounded-full opacity-20 hidden xl:block"></div>
      <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-red-200 rounded-full opacity-15 hidden lg:block"></div>
    </section>
  );
};

export default ProductList;
