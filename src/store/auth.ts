import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { enhancedApi as userApi } from "./services/user";
import type { RootState } from "./index";

const initialState = {
  token: null,
  isAuthenticated: false,
} as { token: string | null; isAuthenticated: boolean };

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(userApi.endpoints.createUser.matchFulfilled, (state, action) => {
        state.token = "";
        state.isAuthenticated = true;
      })
      .addMatcher(userApi.endpoints.createUser.matchRejected, (state, action) => {
        state.token = null;
        state.isAuthenticated = false;
      })
      .addMatcher(
        isAnyOf(
          userApi.endpoints.logoutUser.matchFulfilled,
          userApi.endpoints.logoutUser.matchRejected
        ),
        (state) => {
          state.token = null;
          state.isAuthenticated = false;
        }
      );
  },
});

export const { logout } = slice.actions;
export default slice.reducer;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
