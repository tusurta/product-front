import { createAction, createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { enhancedApi as userApi } from "./services/user";
import type { RootState } from "./index";
import { setItemLocalStorage } from "common/localStorage";
import { LOCALSTORAGE_KEY } from "common/constants";

const initialState = {
  isAuthenticated: false,
} as { isAuthenticated: boolean };

const authISelector = (state: RootState) => state.auth;
export const isAuthenticatedSelecor = createSelector(
  authISelector,
  (state) => state.isAuthenticated
);

export const setIsAuthenticated = createAction<boolean>("auth/setIsAuthenticated");

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(setIsAuthenticated, (state, { payload: isAuthenticated }) => {
        state.isAuthenticated = isAuthenticated;
      })
      .addMatcher(userApi.endpoints.createUser.matchFulfilled, (state, action) => {
        state.isAuthenticated = true;
        setItemLocalStorage(LOCALSTORAGE_KEY.AUTH_TOKEN, "Test_Token");
      })
      .addMatcher(userApi.endpoints.createUser.matchRejected, (state, action) => {
        state.isAuthenticated = false;
      })
      .addMatcher(
        isAnyOf(
          userApi.endpoints.logoutUser.matchFulfilled,
          userApi.endpoints.logoutUser.matchRejected
        ),
        (state) => {
          state.isAuthenticated = false;
        }
      );
  },
});

export const { logout } = slice.actions;
export default slice.reducer;
