import { useNavigate } from "react-router";
import classes from "./User.module.css";

export const UserCard = ({ user }) => {
  const navigate = useNavigate("");

  const handleGoToProfile = () => {
    navigate(`/userPage/${user.id}`);
  };

  return (
    <div className={classes["list-item"]} key={user.id}>
      <span className={classes["user-name"]}> {user.name}</span>
      <button className={classes["profile-button"]}>
        <span
          className={classes["profile-button-text"]}
          onClick={handleGoToProfile}
        >
          Смотреть профиль
        </span>
      </button>
    </div>
  );
};
