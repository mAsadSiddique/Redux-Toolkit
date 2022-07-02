import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    title: "Learning Redux Toolkit",
    content: "I've heared good things ",
  },
  {
    id: 1,
    title: "Slices",
    content: "I say Slices. The more I want pizza ",
  },
];

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.post;

export const { postAdded } = postSlice.actions;

export default postSlice.reducer;
