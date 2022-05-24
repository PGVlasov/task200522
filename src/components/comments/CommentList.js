import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadComments } from "../../store/actions/comments";
import { CommentCard } from "./CommentCard";
import { Loader } from "../Loader";
import { useParams } from "react-router";

export const CommentList = () => {
  const param = useParams();
  const postId = parseInt(param.postId, 10);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadComments(postId));
  }, [dispatch, postId]);

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
