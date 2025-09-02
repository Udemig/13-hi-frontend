import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart, clearCart } from "../store/cartSlice";
import { HiX, HiMinus, HiPlus, HiTrash } from "react-icons/hi";
import { toast } from "react-toastify";

const CartModal = ({ isOpen, onClose }) => {
  const { items, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleDeleteItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handlePlaceOrder = () => {
    // Show success notification
    toast.success("Siparişiniz başarıyla alındı! Teşekkür ederiz.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // Clear the cart
    dispatch(clearCart());

    // Close the modal
    onClose();
  };

  const subtotal = totalAmount;
  const cargoFee = 20; // Fixed cargo fee
  const total = subtotal + cargoFee;

  if (!isOpen) return null;

  return (
    <div data-testid="cart-modal" className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />

      {/* Modal */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Sipariş</h2>
          <button
            onClick={onClose}
            data-testid="close-button"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Kapat"
          >
            <HiX className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Sepetiniz boş</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  {/* Product Image */}
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                    <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600 capitalize">{item.format === "cup" ? "Bardak" : "Külah"}</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                      data-testid="decrease"
                    >
                      <HiMinus className="w-4 h-4 text-gray-600" />
                    </button>

                    <span className="w-8 text-center font-semibold text-gray-900">{item.quantity}</span>

                    <button
                      data-testid="increase"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                    >
                      <HiPlus className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <p className="font-bold text-gray-900">₺{item.price}</p>
                  </div>

                  {/* Delete Button */}
                  <button
                    data-testid="delete"
                    onClick={() => handleDeleteItem(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                  >
                    <HiTrash className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with Pricing */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-6 bg-white">
            {/* Pricing Summary */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Ara Toplam</span>
                <span data-testid="subtotal">₺{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Kargo</span>
                <span>₺{cargoFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-gray-900 pt-3 border-t border-gray-200">
                <span>Toplam</span>
                <span data-testid="total">₺{total.toFixed(2)}</span>
              </div>
            </div>

            {/* Order Button */}
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-red-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-red-700 transition-colors text-lg"
            >
              Sipariş Ver
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
