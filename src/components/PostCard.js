import "./UserListComponent.css";
import { useNavigate } from "react-router";

export const PostCard = ({ post }) => {
  const navigate = useNavigate("");

  const clickHandler = () => {
    navigate(`/post/${post.id}`);
  };
  return (
    <div className="listItem" key={post.id}>
      <p className="userName"> {post.name}</p>
      <button className="button">
        <p className="buttonp" onClick={clickHandler}>
          Смотреть пост
        </p>
      </button>
    </div>
  );
};
