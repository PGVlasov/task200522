import { useNavigate, useParams } from "react-router";
import { Loader } from "../components/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers } from "../store/actions/users";
import { PostListComponent } from "../components/posts/PostListComponent";
import classes from "./User.module.css";

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

  if (!user) {
    navigate("*");
  }

  if (users.length === 0) {
    return <Loader />;
  }

  return (
    <div className={classes["container"]}>
      <table className={classes["table"]}>
        <tbody>
          <tr>
            <td className={classes["extreme"]}></td>
            <th colSpan="5">
              <span className={classes["username-table"]}>{user.username}</span>
            </th>
            <td className={classes["extreme"]}></td>
          </tr>
          <tr>
            <td className={classes["extreme"]}></td>
            <td className={classes["td"]}>
              <span className={classes["user-span"]}>{user.name}</span>
            </td>
            <td className={classes["td"]}>
              <span className={classes["user-span"]}>{user.email}</span>
            </td>
            <td className={classes["td"]}>
              <span className={classes["user-span"]}>{user.phone}</span>
            </td>
            <td className={classes["td"]}>
              <span className={classes["user-span"]}>{user.website}</span>
            </td>
            <td className={classes["td"]}>
              <span className={classes["user-span"]}>{user.company.name}</span>
              <span className={classes["user-span"]}> {user.company.bs}</span>
            </td>
            <td className={classes["extreme"]}></td>
          </tr>
          <tr></tr>
        </tbody>
      </table>
      <PostListComponent />
      <button className={classes["profile-button-back"]} onClick={clickHandler}>
        <span className={classes["profile-button-text"]}>На главную</span>
      </button>
    </div>
  );
};
