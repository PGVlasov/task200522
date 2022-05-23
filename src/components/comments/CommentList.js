import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadComments } from "../../store/actions/comments";
import { CommentCard } from "./CommentCard";
import { Loader } from "../Loader";

export const CommentList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadComments());
  }, [dispatch]);

  const comments = useSelector((state) => state.comments.allComments);

  if (comments.length === 0) {
    return <Loader />;
  }
  return (
    <div className="commentList">
      <div className="listContainer">
        {comments.map((comment) => {
          return <CommentCard comment={comment} key={comment.id} />;
        })}
      </div>
    </div>
  );
};
