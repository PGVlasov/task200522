import "./Comment.css";

export const CommentCard = ({ comment }) => {
  return (
    <div className="listItem" key={comment.id}>
      <div className="commentText">
        <p className="header">Name:</p> {comment.name}
      </div>
      <div className="commentText">
        <p className="header">Email:</p> {comment.email}
      </div>
      <div className="commentText">
        <p className="header">Comment:</p> {comment.body}
      </div>
    </div>
  );
};
