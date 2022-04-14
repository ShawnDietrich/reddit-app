import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { getSubReddits } from "./reddit";

const sideRedditSlice = createSlice({
  name: "sideReddits",
  initialState: {
    posts: [],
    error: false,
    isLoading: false,
  },
  reducers: {
    startLoading(state, action) {
      state.isLoading = true;
      state.error = false;
    },
    errorLoading(state, action) {
      state.isLoading = false;
      state.error = true;
    },
    finishLoading(state, action) {
      state.isLoading = false;
      state.error = false;
      state.posts = action.payload;
    },
  },
});

//setup actions actions
export const { startLoading, errorLoading, finishLoading } = sideRedditSlice.actions;

//export selector not used
//accessed state in sideReddit.jsx

//export reducer
export default sideRedditSlice.reducer;

//use thunk to call APi
export const fetchSideReddit = async (dispatch) => {
  try {
    dispatch(startLoading());
    const sideRedditPosts = await getSubReddits();
    dispatch(finishLoading(sideRedditPosts));
  } catch (error) {
    dispatch(errorLoading());
  }
};
