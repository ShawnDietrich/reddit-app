import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./comment.css";

//Rener each comment
const Comment = (props) => {
  const { comment } = props;
  return (
    <div className="comment">
      <div className="comment-metadata">
        <img
          src={`https://api.adorable.io/avatars/10/${comment.author}`}
          alt={comment.author}
          className="avatar-profile-image"
        />
        <p className="comment-author">{comment.author}</p>
      </div>
      <ReactMarkdown children={comment.body} />
    </div>
  );
};

export default Comment;
