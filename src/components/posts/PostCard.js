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
      <p>{post.body.substr(0, 20)}.....</p>
      <button className="postButton">
        <p className="buttonp" onClick={clickHandler}>
          Смотреть пост
        </p>
      </button>
    </div>
  );
};
