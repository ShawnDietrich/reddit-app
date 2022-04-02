import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import './home.css';
import { useEffect } from "react";
import { fetchPosts, selectPosts } from "../../WebAPIs/redditSlice";
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
    },[]);

    return (
      <>
        {posts.map((post, index) => (
          <Posts
          key={index}
          post={post}
          />
        ))}
        
      </>
    )
  }


export default Home 