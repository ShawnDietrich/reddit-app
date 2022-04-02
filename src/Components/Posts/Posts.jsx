import React from "react";
import { Card } from "../card/card";
import "./Posts.css";

//parse post data and render componetns
const Posts = (props) => {
  const { post, index } = props;
  //console.log(props.post);
  return (
    <article key={index}>
      <Card>
        <div className="post-wrapper">
          <div className="post-container">
              
            <h3 className="post-title">{post.title}</h3>

            <div className="post-image-container">
              <img src={post.url} alt="" className="post-image" />y
              
            </div>

            <div className="post-details">
            
            </div>
          </div>
        </div>
      </Card>
    </article>
  );
};

export default Posts;
