import { useNavigate } from "react-router";
import classes from "./Post.module.css";

export const PostCard = ({ userId, post }) => {
  const navigate = useNavigate("");

  const clickHandler = () => {
    navigate(`/users/${userId}/posts/${post.id}`);
  };
  return (
    <div className={classes["post-item"]} key={post.id}>
      <p className={classes["post-title"]}> {post.title}</p>
      <span className={classes["post-span"]}>
        {post.body.substr(0, 20)}.....
      </span>
      <button className={classes["post-button"]}>
        <span className={classes["post-button-text"]} onClick={clickHandler}>
          Смотреть пост
        </span>
      </button>
    </div>
  );
};
