import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loadPosts } from "../../store/actions/posts";
import { Loader } from "../Loader";
import { CommentList } from "../comments/CommentList";
import { Form } from "./Form";
import classes from "./Post.module.css";

export const PostComponent = () => {
  const [isCommentNeeded, setCommentNeeded] = useState(false);
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/");
  };

  const commentButtonClick = () => {
    setCommentNeeded(true);
  };

  const commentButtonCancel = () => {
    setCommentNeeded(false);
  };

  const param = useParams();

  const userId = parseInt(param.userId, 10);
  const postId = parseInt(param.postId, 10);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts(userId));
  }, [dispatch, userId]);

  const posts = useSelector((state) => state.posts.allPosts);

  const post = useSelector((state) =>
    state.posts.allPosts.find((p) => p.id === postId)
  );

  if (!post) {
    navigate("*");
  }

  if (posts.length === 0) {
    return <Loader />;
  }
  if (!isCommentNeeded)
    return (
      <div className={classes["post-container"]}>
        <p className={classes["post-title"]}>{post.title}</p>
        <div className={classes["post-body"]}>{post.body}</div>
        <p>Comments:</p>
        <CommentList />
        <button
          className={classes["post-button"]}
          onClick={() => commentButtonClick()}
        >
          <p className={classes["post-button-text"]}>Прокомментировать</p>
        </button>
        <hr />
        <button className={classes["post-button"]} onClick={clickHandler}>
          <span className={classes["post-button-text"]}>На главную</span>
        </button>
      </div>
    );
  return (
    <div className={classes["post-container"]}>
      <span className={classes["post-title"]}>{post.title}</span>
      <div className={classes["post-body"]}>{post.body}</div>
      <span>Comments:</span>
      <CommentList />
      <Form />
      <button
        className={classes["post-button"]}
        onClick={() => commentButtonCancel()}
      >
        <span className={classes["post-button-text"]}>Отменить</span>
      </button>
      <hr />
      <button className={classes["post-button"]} onClick={clickHandler}>
        <span className={classes["post-button-text"]}>На главную</span>
      </button>
    </div>
  );
};
