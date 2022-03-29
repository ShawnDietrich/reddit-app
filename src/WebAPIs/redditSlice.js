import {createSlice, createSelector} from '@reduxjs/toolkit';
import { getSubredditPosts } from './reddit';

const RedditPosts = createSlice ({
    name: 'redditPosts',
    initialState: {
        posts: [],
        error: false,
        isLoading: false,
        searchTerm: '',
        selectedSubreddit: '/r/pics/',
        reducers: {
            getPosts (state, action){
                state.isLoading = true;
                state.error = false;
            },
            getPostsError (state){
                state.isLoading = false;
                state.error = true;
            }
        }
    }
    
})

export const fetchPosts = (subreddit) => async (dispatch) => {
    try {
        dispatch(getPosts());
        const posts = await getSubredditPosts(subreddit);
    } catch (error) {
        dispatch(getPostsError());   
    }
}

//selectors
export const selectPosts = (state) => state.reddit.redditPosts;
//actions
export const {getPosts, getPostsError} = RedditPosts.actions;
//reducers
export default RedditPosts.reducer;