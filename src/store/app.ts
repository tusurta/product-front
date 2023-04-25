import { createAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";
import { Product } from "store/services/product";

export type ModalType = "confirm" | "warning" | "purchase";

type AppState = {
  modalType?: ModalType;
  isLoading: boolean;
  selectedProduct?: Product;
};
const initialState: AppState = {
  isLoading: false,
};

//Selector
const appISelector = (state: RootState) => state.app;
export const modalStateSelector = createSelector(appISelector, (state) => state.modalType);
export const selectedProductSelector = createSelector(
  appISelector,
  (state) => state.selectedProduct
);

// Action
export const updateModalState = createAction<ModalType | undefined>("app/updateModalState");
export const updateSelectedProduct = createAction<Product | undefined>("app/updateSelectedProduct");

// Slice
const slice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateModalState, (state, { payload }) => {
        state.modalType = payload;
      })
      .addCase(updateSelectedProduct, (state, { payload }) => {
        state.selectedProduct = payload;
      });
  },
});

export default slice.reducer;
