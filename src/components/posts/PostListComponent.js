import "./Post.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Loader } from "../Loader";
import { loadPosts } from "../../store/actions/posts";
import { PostCard } from "./PostCard";

export const PostListComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts.allPosts);

  if (posts.length === 0) {
    return <Loader />;
  }

  return (
    <div className="userList">
      <h1>Post List</h1>
      <div className="listContainer">
        {posts.map((post) => {
          return <PostCard post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
};
