import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItems: 0,
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { productId, name, price, image, format } = action.payload;

      // Generate unique id for cart item
      const id = Date.now() + Math.random();

      // Check if item with same productId and format already exists
      const existingItemIndex = state.items.findIndex((item) => item.productId === productId && item.format === format);

      if (existingItemIndex >= 0) {
        // If exists, increase quantity
        state.items[existingItemIndex].quantity += 1;
      } else {
        // If not exists, add new item
        const newItem = {
          id,
          productId,
          name,
          price,
          image,
          format: format === "Külah" ? "cornet" : "cup", // Map Turkish to English
          quantity: 1,
        };
        state.items.push(newItem);
      }

      // Update totals
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);

      // Update totals
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item && quantity > 0) {
        item.quantity = quantity;
      }

      // Update totals
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
