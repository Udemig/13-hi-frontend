import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ProductCard = ({ product }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleAddToCart = () => {
    if (selectedOption) {
      // Dispatch addToCart action with the required data structure
      dispatch(
        addToCart({
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          format: selectedOption, // "Külah" or "Bardakta"
        })
      );

      console.log(`Added ${product.name} (${selectedOption}) to cart`);
      // Reset selection after adding to cart
      setSelectedOption(null);
    }
  };

  return (
    <div className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-200">
      {/* Product Image */}
      <div className="relative mb-6">
        <div className="w-full h-48 flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden">
          <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
        </div>
      </div>

      {/* Product Info */}
      <div className="text-center space-y-4">
        <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>

        <div className="text-2xl font-bold text-red-600">₺{product.price} / top</div>

        {/* Selection Options */}
        <div className="space-y-3">
          <p className="text-gray-600 font-medium">Sipariş Tipi Seçin</p>

          <div className="flex gap-3 justify-center">
            <button
              onClick={() => handleOptionSelect("Külah")}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                selectedOption === "Külah" ? "bg-red-600 text-white" : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOptionSelect("Külah");
                }
              }}
            >
              Külah
            </button>

            <button
              onClick={() => handleOptionSelect("Bardakta")}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                selectedOption === "Bardakta" ? "bg-red-600 text-white" : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOptionSelect("Bardakta");
                }
              }}
            >
              Bardakta
            </button>
          </div>
        </div>

        {/* Add to Cart Button - Fixed height container to prevent UI shift */}
        <div className="mt-4 h-12 flex items-center">
          {selectedOption ? (
            <button
              onClick={handleAddToCart}
              className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-full hover:bg-red-700 transition-all duration-200 transform hover:scale-105"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleAddToCart();
                }
              }}
            >
              SEPETE EKLE
            </button>
          ) : (
            <div className="w-full h-12"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
