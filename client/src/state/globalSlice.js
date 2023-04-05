import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userID: "63701cc1f03239b7f700000e",
  // Not doing login/authentication, this ID is in the backend and I'm assuming the user is already logged in
};

export const globalSlice = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
