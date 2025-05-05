import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity?: number;
}

export const favoriteSlice = createSlice({
  name: "favoriteSlice",
  initialState: [] as Product[],
  reducers: {
    addToFavorite: (state, action: PayloadAction<Product>) => {
      const product = action.payload;
      const existingProductIndex = state.findIndex((item) => item.id === product.id);
      const quantityChange = product.quantity ?? 1;

      if (existingProductIndex !== -1) {
        const existingProduct = state[existingProductIndex];
        const newQuantity = (existingProduct.quantity || 0) + quantityChange;

        if (newQuantity <= 0) {
          // احذف المنتج من الـ favorites
          state.splice(existingProductIndex, 1);
        } else {
          existingProduct.quantity = newQuantity;
        }
      } else {
        if (quantityChange > 0) {
          state.push({ ...product, quantity: quantityChange });
        }
      }
    },

    deleteFromFavorite: (state, action: PayloadAction<number>) => {
      // احذف المنتج حسب الـ id
      return state.filter((item) => item.id !== action.payload);
    },

    clear: () => {
      // أفرغ المفضلة تمامًا
      return [];
    },
  },
});

export const { addToFavorite, deleteFromFavorite, clear } = favoriteSlice.actions;

export default favoriteSlice.reducer;