import "./UserListComponent.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUsers } from "../store/actions/users";
import { Loader } from "./Loader";
import { UserCard } from "./UserCard";

export const UserListComponent = ({ user }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.image.allUsers);

  if (users.length === 0) {
    return <Loader />;
  }

  return (
    <div className="userList">
      <h1>UserList</h1>
      <div className="userListBackground"></div>
      <div className="listContainer">
        {users.map((user) => {
          return <UserCard user={user} key={user.id} />;
        })}
      </div>
    </div>
  );
};
