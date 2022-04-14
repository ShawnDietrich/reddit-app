import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSideReddit,
  sideRedditPosts,
} from "../../WebAPIs/sideRedditSlice";
import Card from "../Card/card";
import Posts from "../Posts/Posts";
import "./sideReddit.css";

const SideReddit = () => {
  const sideReddit = useSelector((state) => state.sideReddit.posts);
  const dispatch = useDispatch();

  //Create react hook for calling API
  useEffect(() => {
    dispatch(fetchSideReddit);
    console.log(sideReddit);
  }, [dispatch]);

  return (
    <>
      {sideReddit.map((post, index) => (
        <article key={index}>
          <Card classname={post.title}>
            <div className="title">{post.title}</div>
            <div className="iconImage">
              <img src={post.icon_img || `https://api.adorable.io/avatars/25/${post.display_name}`}/>
            </div>
          </Card>
        </article>
      ))}
    </>
  );
};

export default SideReddit;
