import React from "react";
import { Card } from "../card/card";
import "./Posts.css";

//parse post data and render componetns
const Posts = (props) => {
  const { post, index } = props;
  //console.log(post.permalink);
  
 

  return (
    <article key={index}>
      <Card ClassName={post.title}>
        <div className="post-wrapper">
          <div className="post-container">
              
            <h3 className="post-title">{post.title}</h3>

            <div className="post-image-container">
              <img src={post.url} alt="" className="post-image" />y
            </div>

            <div className="post-details">
              <span className="post-comments-container">
                <button type="button"
                  className={`icon-action-button ${post.showingComments && 'showing-comments'}`}
                  onClick={props.onToggleComments(index, post.permalink)}
                >
                </button>
              </span>
            </div>
            
          </div>
        </div>
      </Card>
    </article>
  );
};

export default Posts;
