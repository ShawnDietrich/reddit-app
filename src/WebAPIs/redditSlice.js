import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { getSubredditPosts } from "./reddit";

export const fetchPosts = createAsyncThunk(
  "reddit/loadRedditPosts",
  async (subreddit, dispatch) => {
    try {
      const posts = await getSubredditPosts(subreddit);
      return posts;
    } catch (error) {}
  }
);

const RedditPosts = createSlice({
  name: "redditPosts",
  initialState: {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: "",
    selectedSubreddit: "/r/pics/",
    reducers: {},
    extraReducers: {
      [fetchPosts.pending]: (state, action) => {
        state.isLoading = true;
        state.error = false;
      },
      [fetchPosts.fulfilled]: (state, action) => {
          state.posts.push(action.payload);
        state.isLoading = false;
        state.error = false;
      },
      [fetchPosts.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = true;
      },
    },
  },
});

//selectors
export const selectPosts = (state) => state.reddit;
//Thunk states
export const isLoading = (state) => state.redditPosts.isLoading;
//reducers
export default RedditPosts.reducer;
