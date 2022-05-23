import "./Post.css";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadPosts } from "../../store/actions/posts";
import { Loader } from "../Loader";
import { CommentList } from "../comments/CommentList";

export const PostComponent = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/");
  };

  const param = useParams();
  const postId = parseInt(param.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts.allPosts);

  const post = useSelector((state) =>
    state.posts.allPosts.find((p) => p.id === postId)
  );

  if (posts.length === 0) {
    return <Loader />;
  }

  return (
    <div className="container">
      <p>{post.title}</p>
      <p>{post.body}</p>
      <p>Comments:</p>
      <CommentList />
      <button className="button" onClick={clickHandler}>
        <p className="buttonp">На главную</p>
      </button>
    </div>
  );
};
