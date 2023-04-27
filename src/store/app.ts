import { createAction, createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
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

// Slice
const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateModalState: (state, { payload }: PayloadAction<ModalType | undefined>) => {
      state.modalType = payload;
    },
    updateSelectedProduct: (state, { payload }: PayloadAction<Product | undefined>) => {
      state.selectedProduct = payload;
    },
  },
});

export const { updateModalState, updateSelectedProduct } = slice.actions;
export default slice.reducer;
