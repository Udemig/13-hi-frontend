import { useState } from "react";

const CartButton = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleCartClick = () => {
    // Handle cart functionality
    console.log("Cart clicked");
  };

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <button
        onClick={handleCartClick}
        className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
        role="button"
        tabIndex={0}
        aria-label={`Sepet, ${cartCount} ürün`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleCartClick();
          }
        }}
      >
        {/* Cart Icon */}
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h10m-10 0a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z"
          />
        </svg>

        <span className="text-lg">Sepet</span>

        {/* Cart Count Badge */}
        {cartCount > 0 && (
          <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
            {cartCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default CartButton;
