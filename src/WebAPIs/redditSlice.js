import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSubredditPosts } from "./reddit";

export const root = "https://www.reddit.com";

//Call to get Sub Reddit Posts using API
export const fetchPosts = createAsyncThunk(
  "reddit/loadRedditPosts",
  async (payload, { getState }) => {
    try {
      const response = await fetch("https://www.reddit.com/r/pics/.json"); //fetch(`${root}${subreddit}.json`);
      const json = await response.json();
      return json.data.children.map((post) => post.data);
    } catch (error) {}
  }
);

const redditPosts = createSlice({
  name: "redditPosts",
  initialState: {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: "",
    selectedSubreddit: "/r/pics/",
  },
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.isLoading = true;
      state.error = false;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      //Push posts into state array
      action.payload.map((post) => state.posts.push(post));
      state.isLoading = false;
      state.error = false;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

//selectors
export const selectPosts = (state) => state.reddit;
//Thunk states
export const isLoading = (state) => state.redditPosts.isLoading;
//reducers
export default redditPosts.reducer;
