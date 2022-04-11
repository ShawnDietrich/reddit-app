import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSubredditPosts } from "./reddit";

export const root = "https://www.reddit.com";

//Call to get Sub Reddit Posts using API
export const fetchPosts = createAsyncThunk(
  "reddit/loadRedditPosts",
  async (searchResult = '') => {
    try {
      const response = await fetch("https://www.reddit.com/r/pics/.json"); //fetch(`${root}${subreddit}.json`);
      const json = await response.json();
      const posts = json.data.children.map((post) => post.data);
      const postsWithMetaData = posts.map((post) => ({
        ...post,
        showingComments: false,
        commentsLoading: false,
        commentComplete: false,
        errorComments: false,
        comments: [],
      }));
      return postsWithMetaData;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchComments = createAsyncThunk(
  "reddit/loadRedditComments",
  async (permaLink) => {
    try {
      const response = await fetch(`${root}${permaLink}.json`);
      const json = await response.json();
      return await json[1].data.children.map((subreddit) => subreddit.data);
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
  reducers: {
    showComments(state, action) {
      //console.log(state.posts[action.payload])
      state.posts[action.payload].showingComments =
        !state.posts[action.payload].showingComments;
    },
    startComments(state, action) {
      state.posts[action.payload].commentsLoading = true;
    },
    finishComments(state, action) {
      state.posts[action.payload.index].commentsLoading = false;
      state.posts[action.payload.index].errorComments = false;
      state.posts[action.payload.index].commentComplete = true;
      state.posts[action.payload.index].comments = action.payload.comments;
    },
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
export const { showComments, startComments, finishComments } =
  redditPosts.actions;
//reducers
export default redditPosts.reducer;
