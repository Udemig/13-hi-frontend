import { useState } from "react";
import { useSelector } from "react-redux";
import { HiShoppingCart } from "react-icons/hi";
import CartModal from "./CartModal";

const CartButton = () => {
  const { totalItems } = useSelector((state) => state.cart);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCartClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="fixed bottom-8 left-[37%] z-50">
      <button
        data-testid="cart-button"
        onClick={handleCartClick}
        className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
        role="button"
        tabIndex={0}
        aria-label={`Sepet, ${totalItems} ürün`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleCartClick();
          }
        }}
      >
        {/* Cart Icon */}
        <HiShoppingCart className="w-5 h-5" />

        <span className="text-lg">Sepet</span>

        {/* Cart Count Badge */}
        {totalItems > 0 && (
          <span
            data-testid="cart-count"
            className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center"
          >
            {totalItems}
          </span>
        )}
      </button>

      {/* Cart Modal */}
      <CartModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default CartButton;
