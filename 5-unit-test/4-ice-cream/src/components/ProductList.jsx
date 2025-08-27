import { useState, useEffect } from "react";
import axios from "axios";
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
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h4a1 1 0 110 2H4a1 1 0 01-1-1z" />
              </svg>
            </button>

            <button
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-200 border border-white/30"
              aria-label="Filtre 2"
              role="button"
              tabIndex={0}
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>

            <button
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-200 border border-white/30"
              aria-label="Filtre 3"
              role="button"
              tabIndex={0}
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>

            <button
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-200 border border-white/30"
              aria-label="Filtre 4"
              role="button"
              tabIndex={0}
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
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
