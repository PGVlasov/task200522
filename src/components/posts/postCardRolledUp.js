import classes from "./Post.module.css";

export const PostCardRolledUp = ({ post }) => {
  return (
    <div className={classes["post-item"]} key={post.id}>
      <p className={classes["post-title"]}> {post.title}</p>
      <span>{post.body.substr(0, 20)}.....</span>
    </div>
  );
};
