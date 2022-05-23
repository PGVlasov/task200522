import "./Post.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Loader } from "../Loader";
import { loadPosts } from "../../store/actions/posts";
import { PostCard } from "./PostCard";
import { PostCardRolledUp } from "./postCardRolledUp";
import { useParams } from "react-router";

export const PostListComponent = () => {
  const [arePostsExpended, setPostsExpend] = useState(false);

  const rollUp = () => {
    setPostsExpend(false);
  };

  const expand = () => {
    setPostsExpend(true);
  };

  const param = useParams();
  const userId = parseInt(param.id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts(userId));
  }, [dispatch]);

  const posts = useSelector((state) => state.posts.allPosts);

  if (posts.length === 0) {
    return <Loader />;
  }

  let previewPosts = posts.slice(0, 3);

  if (!arePostsExpended)
    return (
      <div className="userList">
        <h1>Список Постов</h1>
        <div className="postContainer">
          {previewPosts.map((post) => {
            return <PostCardRolledUp post={post} key={post.id} />;
          })}
          <button className="postButton" onClick={expand}>
            <p className="buttonp">Ращвернуть----&gt;</p>
          </button>
        </div>
      </div>
    );

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
