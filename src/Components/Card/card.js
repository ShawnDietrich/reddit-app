import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import './card.css';
import { useEffect } from "react";
import { fetchPosts, selectPosts } from "../../WebAPIs/redditSlice";
import { getSubredditPosts } from "../../WebAPIs/reddit";

//Map results from get posts on to each card

const Card = () => {
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
      <div>
        <button >Get Reddit Posts</button>
      </div>
    )
  }


export default Card 
