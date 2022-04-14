import React from "react";
import Skeleton from "react-loading-skeleton";
import Card from "../Card/card";
import "./Posts.css";
import Comment from "../Comment/Comment";

//parse post data and render componetns
const Posts = (props) => {
  const { post, index } = props;
  //console.log(post.permalink);

  const renderComments = () => {
    //if comments are not showing return nothing
    if (!post.showingComments) {
      return;
    }

    //if comments are showing render the comments
    if (post.loadingComments) {
      //console.log('loading comments')
      return (
        <div>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      );
    }

    if (post.commentComplete) {
      //console.log("showing comments")
      return (
        <div>
          {post.comments.payload.map((comment, index) => (
            <Comment comment={comment} key={index} />
          ))}
        </div>
      );
    }
  };

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
                <button
                  type="button"
                  className={`icon-action-button ${
                    post.showingComments && "showing-comments"
                  }`}
                  onClick={() => props.onToggleComments(index, post.permalink)}
                  aria-label="Show comments"
                >
                  Show Comments
                </button>
              </span>
            </div>
            {renderComments()}
          </div>
        </div>
      </Card>
    </article>
  );
};

export default Posts;
