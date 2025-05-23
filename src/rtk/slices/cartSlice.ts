import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of a product
interface Product {
  id: number;
  name: string;
  price: number;
  quantity?: number;
}

// Define the initial state as an array of Product
const initialState: Product[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingProductIndex = state.findIndex((item) => item.id === product.id);
      const quantityChange = product.quantity ?? 1;
    
      if (existingProductIndex !== -1) {
        const existingProduct = state[existingProductIndex];
        const newQuantity = (existingProduct.quantity || 0) + quantityChange;
    
        if (newQuantity <= 0) {
          // احذف المنتج من الـ cart
          state.splice(existingProductIndex, 1); // ❗️حل آمن بدون إرجاع state جديد
        } else {
          existingProduct.quantity = newQuantity;
        }
      } else {
        if (quantityChange > 0) {
          state.push({ ...product, quantity: quantityChange });
        }
      }
    },
    
    
    // Remove a product from the cart
    deleteFromCart: (state, action: PayloadAction<number>) => {
      return state.filter((product) => product.id !== action.payload);
    },
    // Clear the cart
    clear: () => {
      return [];
    },
  },
});

// Export the actions
export const { addToCart, deleteFromCart, clear } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;