import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import './home.css';
import { useEffect } from "react";
import { fetchComments, fetchPosts, finishComments, selectPosts, showComments, startComments } from "../../WebAPIs/redditSlice";
import { getSubredditPosts } from "../../WebAPIs/reddit";
import Posts from "../Posts/Posts";

//Map results from get posts on to each card

const Home = () => {
  const redditPosts = useSelector(selectPosts)
  const {isLoading, error, searchTerm, posts} = redditPosts;
  const dispatch = useDispatch();

  //const handleClick = () => {
 //  dispatch(fetchPosts());
  //  console.log(redditPosts.posts);
 // }
  //use effect to call the fetch posts when the page loads or renders
    useEffect(() => {
      dispatch(fetchPosts())
    },[searchTerm]);

    const handleToggleComments = async (index, permaLink) => {
      dispatch(showComments(index))
      dispatch(startComments(index))
      const comments = await dispatch(fetchComments(permaLink))
      return dispatch(finishComments({index, comments}))
    }

    return (
      <>
        {posts.map((post, index) => (
          <Posts
          key={post.id}
          post={post}
          index = {index}
          onToggleComments={handleToggleComments}
          />
        ))}
        
      </>
    )
  }


export default Home 
