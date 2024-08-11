import { configureStore } from "@reduxjs/toolkit";
import exReducer from "./exSlice";

const store = configureStore({
  reducer: {
    ex: exReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
