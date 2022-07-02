import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 0, name: "Asad" },
  { id: 1, name: "Saad" },
  // { id: 2, name: "Kamran" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
