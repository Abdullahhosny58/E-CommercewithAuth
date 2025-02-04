import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "@/rtk/slices/productSlice"; 
import cartSlice from "@/rtk/slices/cartSlice"; 

export const store = configureStore({
  reducer: { products: productsSlice, cart: cartSlice },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; // Define AppDispatch
