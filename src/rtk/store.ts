import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "@/rtk/slices/productSlice";
import cartSlice from "@/rtk/slices/cartSlice";
import favoriteSlice from "@/rtk/slices/favoriteSlice";
// import categoriesReducer from "@/rtk/slices/categoriesSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
    favorite :favoriteSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; // Define AppDispatch
