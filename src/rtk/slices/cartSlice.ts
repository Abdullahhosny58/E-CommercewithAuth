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
      const findProduct = state.find((product) => product.id === action.payload.id);
      if (findProduct) {
        // If the product is already in the cart, increment its quantity
        findProduct.quantity = (findProduct.quantity || 0) + 1;
      } else {
        // If the product is not in the cart, add it with a quantity of 1
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
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