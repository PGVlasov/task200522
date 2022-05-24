import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../Loader";
import { loadPosts } from "../../store/actions/posts";
import { PostCard } from "./PostCard";
import { PostCardRolledUp } from "./postCardRolledUp";
import "./Post.css";

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
      <div className="userList">
        <h1>Список Постов</h1>
        <div className="postContainer">
          {previewPosts.map((post) => {
            return <PostCardRolledUp post={post} key={post.id} />;
          })}
          <button className="postButton" onClick={expand}>
            <p className="buttonp">Развернуть----&gt;</p>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="userList">
      <h1>Список Постов</h1>
      <div className="postContainer">
        {posts.map((post) => {
          return <PostCard post={post} key={post.id} userId={userId} />;
        })}
        <button className="postButton" onClick={rollUp}>
          <p className="buttonp">&lt;------ Свернуть</p>
        </button>
      </div>
    </div>
  );
};
