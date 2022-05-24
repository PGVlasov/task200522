import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loadPosts } from "../../store/actions/posts";
import { Loader } from "../Loader";
import { CommentList } from "../comments/CommentList";
import { Form } from "./Form";
import "./Post.css";

export const PostComponent = () => {
  const [isCommentNeeded, setCommentNeeded] = useState(false);
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/");
  };

  const commentButtonClick = () => {
    setCommentNeeded(true);
    console.log("STATE", isCommentNeeded);
  };

  const commentButtonCancel = () => {
    setCommentNeeded(false);
    console.log("STATE", isCommentNeeded);
  };

  const param = useParams();

  const userId = parseInt(param.userId, 10);
  const postId = parseInt(param.postId, 10);

  // const postId = parseInt(param.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts(userId));
  }, [dispatch]);

  const posts = useSelector((state) => state.posts.allPosts);

  const post = useSelector((state) =>
    state.posts.allPosts.find((p) => p.id === postId)
  );
  console.log("!!!!!--->>", posts);
  console.log("=====", post);
  if (posts.length === 0) {
    return <Loader />;
  }
  if (!isCommentNeeded)
    return (
      <div className="container">
        <p>{post.title}</p>
        <p>{post.body}</p>
        <p>Comments:</p>
        <CommentList />
        <button className="button" onClick={clickHandler}>
          <p className="buttonp">На главную</p>
        </button>
        <button className="button" onClick={() => commentButtonClick()}>
          <p className="buttonp">Прокомментировать</p>
        </button>
      </div>
    );
  return (
    <div className="container">
      <p>{post.title}</p>
      <p>{post.body}</p>
      <p>Comments:</p>
      <CommentList />
      <button className="button" onClick={clickHandler}>
        <p className="buttonp">На главную</p>
      </button>
      <Form />
      <button className="button" onClick={() => commentButtonCancel()}>
        <p className="buttonp">Отменить</p>
      </button>
    </div>
  );
};
