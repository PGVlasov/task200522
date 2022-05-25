import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUsers } from "../store/actions/users";
import { Loader } from "../components/Loader";
import { UserCard } from "./UserCard";
import classes from "./User.module.css";

export const UserListComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.users.allUsers);

  if (users.length === 0) {
    return <Loader />;
  }

  return (
    <div className={classes["users-list"]}>
      <h1>Список пользователей</h1>
      <div className={classes["users-container"]}>
        {users.map((user) => {
          return <UserCard user={user} key={user.id} />;
        })}
      </div>
    </div>
  );
};
