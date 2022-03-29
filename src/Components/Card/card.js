import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import './card.css';
import { useEffect } from "react";
import { fetchPosts } from "../../WebAPIs/redditSlice";
import { getSubredditPosts } from "../../WebAPIs/reddit";
import { getPosts } from "../../WebAPIs/redditSlice";

//Map results from get posts on to each card

const Card = () => {
  const redditPosts = useSelector(getPosts)
  const {isLoading, error, searchTerm, selectedSubreddit} = redditPosts;
  const dispatch = useDispatch();

  //use effect to call the fetch posts when the page loads or renders
    useEffect(() => {
      dispatch(fetchPosts(selectedSubreddit))
    }, [getSubredditPosts]);

    return (
      <div>
        
      </div>
    )
  }


export default Card 
