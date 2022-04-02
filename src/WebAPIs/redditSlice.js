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
    } catch (error) {
      console.log(error)
    }
  }
);

export const fetchComments = createAsyncThunk(
  "reddit/loadRedditComments",
  async (index, permaLink) => {
    try {
      const response = await fetch(`${root}${permaLink}.json`)
      const json = await response.json;
      return json[1].data.children.map((subreddit) => subreddit.data)
    } catch (error) {
      
    }
  }
)

const redditPosts = createSlice({
  name: "redditPosts",
  initialState: {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: "",
    selectedSubreddit: "/r/pics/",
  },
  reducers: {
    showComments(state, payload) {
      state.posts[payload.action].showingComments = !state.posts[payload.action].showingComments
    },
    startGetComments(state, payload) {
      
      state.posts[payload.action].loadingComments = true;
      state.posts[payload.action].error = false;
    },
    finishedGetComments(state, payload) {
      state.posts[payload.action].loadingComments = true;
      state.posts[payload.action].error = false;
    }
  },
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
//actions
export const {startGetComments} = redditPosts.actions;
//reducers
export default redditPosts.reducer;
