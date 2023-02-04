import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "../state/globalSlice";

export default configureStore({
  reducer: {
    global: globalSlice,
  },
});
