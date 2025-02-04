import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fatctServerProduct, TGetAllProducts } from "@/services/Products/fatctServerProduct";

export interface ProductsState {
  products: TGetAllProducts[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [], // Ensure products is initialized as an array
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProductWithRedux",
  async (limit: number, { rejectWithValue }) => {
    try {
      const data = await fatctServerProduct(limit);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload; 
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productsSlice.reducer;