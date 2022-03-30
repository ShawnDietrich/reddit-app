import React from "react";
import { Cards } from "../Card/cards";
import "./Posts.css";

//parse post data and render componetns
const Posts = (props) => {
  const { post, index } = props;
  //console.log(props.post);
  return (
    <article key={index}>
      <Cards>
        <div className="post-wrapper">
          <div className="post-container">
            <h3 className="post-title">{post.title}</h3>

            <div className="post-image-container">
              <img src={post.url} alt="" className="post-image" />
            </div>

            <div className="post-details">
            
            </div>
          </div>
        </div>
      </Cards>
    </article>
  );
};

export default Posts;
