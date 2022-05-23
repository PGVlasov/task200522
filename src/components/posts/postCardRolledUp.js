import "./Post.css";

export const PostCardRolledUp = ({ post }) => {
  return (
    <div className="postItem" key={post.id}>
      <p className="postTitle"> {post.title}</p>
      <p>{post.body.substr(0, 20)}.....</p>
    </div>
  );
};
