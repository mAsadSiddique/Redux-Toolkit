import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./ReducerSlices/Counter/counterSlice";
import postReducer from "./ReducerSlices/PostSlice/postSlice";
import userReducer from "./ReducerSlices/User/userSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
    users: userReducer,
    // counterReducer,
  },
});
