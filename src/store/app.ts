import { createAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";

export type ModalType = "confirm" | "warning";

const initialState = {
  isLoading: false,
  modalType: undefined,
} as { modalType?: ModalType; isLoading: boolean };

const appISelector = (state: RootState) => state.app;
export const modalStateSelector = createSelector(appISelector, (state) => state.modalType);

export const updateModalState = createAction<ModalType | undefined>("app/updateModalState");
const slice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateModalState, (state, { payload }) => {
      state.modalType = payload;
    });
  },
});

export default slice.reducer;
