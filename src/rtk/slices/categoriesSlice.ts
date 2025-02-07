// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { fetchServerCategories, TCategories } from "@/services/categories/fatctServerCategories";

// export interface CategoriesState {
//   categories: TCategories; // ✅ اجعلها string[]
//   loading: boolean;
//   error: string | null;
// }

// const initialState: CategoriesState = {
//   categories: [], // ✅ متوافق مع string[]
//   loading: false,
//   error: null,
// };

// export const fetchCategories = createAsyncThunk(
//   "categoriesSlice/fetchCategoriesWithRedux",
//   async (_, { rejectWithValue }) => {
//     try {
//       const data = await fetchServerCategories();
//       console.log("Fetched categories:", data); // ✅ تحقق من البيانات المسترجعة
//       return data;
//     } catch (error: any) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const categoriesSlice = createSlice({
//   name: "categoriesSlice",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCategories.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchCategories.fulfilled, (state, action) => {
//         state.loading = false;
//         state.categories = action.payload; // ✅ الآن هذا يعمل بشكل صحيح
//       })
//       .addCase(fetchCategories.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       });
//   },
// });

// export default categoriesSlice.reducer;
