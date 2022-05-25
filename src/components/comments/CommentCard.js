import classes from "./Comment.module.css";

export const CommentCard = ({ comment }) => {
  return (
    <div className={classes["list-item"]} key={comment.id}>
      <div className={classes["comment-text"]}>
        <p className={classes["header"]}>Name:</p> {comment.name}
      </div>
      <div className={classes["comment-text"]}>
        <p className={classes["header"]}>Email:</p> {comment.email}
      </div>
      <div className={classes["comment-text"]}>
        <p className={classes["header"]}>Comment:</p> {comment.body}
      </div>
    </div>
  );
};
