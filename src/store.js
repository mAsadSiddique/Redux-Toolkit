import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./ReducerSlices/Counter/counterSlice";

export const store = configureStore({
  reducer: {
    counterReducer,
  },
});
