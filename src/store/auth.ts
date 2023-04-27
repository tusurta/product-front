import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./index";
import { setItemLocalStorage } from "common/localStorage";
import { LOCALSTORAGE_KEY } from "common/constants";
import { enhancedUserApi as userApi } from "store/services/enhanceEndpoints";

const initialState = {
  isAuthenticated: false,
} as { isAuthenticated: boolean };

const authISelector = (state: RootState) => state.auth;
export const isAuthenticatedSelecor = createSelector(
  authISelector,
  (state) => state.isAuthenticated
);

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
    setIsAuthenticated: (state, { payload: isAuthenticated }: PayloadAction<boolean>) => {
      state.isAuthenticated = isAuthenticated;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(userApi.endpoints.login.matchFulfilled, (state, { payload }) => {
        state.isAuthenticated = true;
        setItemLocalStorage(LOCALSTORAGE_KEY.AUTH_TOKEN, payload.access_token ?? "");
      })
      .addMatcher(userApi.endpoints.login.matchRejected, (state, action) => {
        state.isAuthenticated = false;
      });
  },
});

export const { logout, setIsAuthenticated } = slice.actions;
export default slice.reducer;
