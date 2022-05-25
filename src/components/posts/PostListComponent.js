import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../Loader";
import { loadPosts } from "../../store/actions/posts";
import { PostCard } from "./PostCard";
import { PostCardRolledUp } from "./postCardRolledUp";
import classes from "./Post.module.css";

export const PostListComponent = () => {
  const [arePostsExpanded, setPostsExpand] = useState(false);

  const rollUp = () => {
    setPostsExpand(false);
  };

  const expand = () => {
    setPostsExpand(true);
  };

  const param = useParams();
  const userId = parseInt(param.id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts(userId));
  }, [dispatch, userId]);

  const posts = useSelector((state) => state.posts.allPosts);

  if (posts.length === 0) {
    return <Loader />;
  }

  if (!arePostsExpanded) {
    let previewPosts = posts.slice(0, 3);

    return (
      <div className={classes["post-wrapper"]}>
        <h1>Посты</h1>
        <div className={classes["all-posts-container"]}>
          {previewPosts.map((post) => {
            return <PostCardRolledUp post={post} key={post.id} />;
          })}
          <button
            className={classes["post-button-roll-up-extand"]}
            onClick={expand}
          >
            <p className={classes["post-button-text"]}>Развернуть----&gt;</p>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={classes["post-wrapper"]}>
      <h1>Посты</h1>
      <div className={classes["all-posts-container"]}>
        {posts.map((post) => {
          return <PostCard post={post} key={post.id} userId={userId} />;
        })}
        <button
          className={classes["post-button-roll-up-extand"]}
          onClick={rollUp}
        >
          <p className={classes["post-button-text"]}>&lt;------ Свернуть</p>
        </button>
      </div>
    </div>
  );
};
