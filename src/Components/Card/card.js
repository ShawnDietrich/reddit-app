import React from "react";
import {useSelector} from 'react-redux'
import './reddit.css';
import { useEffect } from "react";

//Map results from get posts on to each card

const RedditBlock = () => {
  const redditPosts = useSelector(getPosts)



    return (
      <div>
        
      </div>
    )
  }


export default RedditBlock 
