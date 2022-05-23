import "./User.css";
import { useNavigate, useParams } from "react-router";
import { Loader } from "../components/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../store/actions/users";
import { PostListComponent } from "../components/posts/PostListComponent";

export const UserComponent = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/");
  };

  const param = useParams();
  const userId = parseInt(param.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.users.allUsers);

  const user = useSelector((state) =>
    state.users.allUsers.find((u) => u.id === userId)
  );

  if (users.length === 0) {
    return <Loader />;
  }

  return (
    <div className="container">
      <table className="table">
        <tbody>
          <tr>
            <td className="extreme"></td>
            <th colSpan="5">
              <p>{user.username}</p>
            </th>
            <td className="extreme"></td>
          </tr>
          <tr>
            <td className="extreme"></td>
            <td className="td">
              <p>{user.name}</p>
            </td>
            <td className="td">
              <p>{user.email}</p>
            </td>
            <td className="td">{user.phone}</td>
            <td className="td">{user.website}</td>
            <td className="td">
              <p>{user.company.name}</p>
              <p> {user.company.bs}</p>
            </td>
            <td className="extreme"></td>
          </tr>
          <tr></tr>
        </tbody>
      </table>
      <PostListComponent />
      <button className="button" onClick={clickHandler}>
        <p className="buttonp">На главную</p>
      </button>
    </div>
  );
};
