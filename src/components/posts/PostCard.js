import "./Post.css";
import { useNavigate } from "react-router";

export const PostCard = ({ post }) => {
  const navigate = useNavigate("");

  const clickHandler = () => {
    navigate(`/post/${post.id}`);
  };
  return (
    <div className="postItem" key={post.id}>
      <p className="postTitle"> {post.title}</p>
      <button className="button">
        <p className="buttonp" onClick={clickHandler}>
          Смотреть пост
        </p>
      </button>
    </div>
  );
};
