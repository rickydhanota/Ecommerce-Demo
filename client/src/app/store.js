import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "../state/globalSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "../state/api";

export default configureStore({
  reducer: {
    global: globalSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
