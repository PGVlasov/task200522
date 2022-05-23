import "./Comment.css";

export const CommentCard = ({ comment }) => {
  return (
    <div className="listItem" key={comment.id}>
      <p className="commentText">
        <p className="header">Name:</p> {comment.name}
      </p>
      <p className="commentText">
        <p className="header">Email:</p> {comment.email}
      </p>
      <p className="commentText">
        <p className="header">Comment:</p> {comment.body}
      </p>
    </div>
  );
};
