import "./User.css";
import { useNavigate } from "react-router";

export const UserCard = ({ user }) => {
  const navigate = useNavigate("");

  const clickHandler = () => {
    navigate(`/userPage/${user.id}`);
  };
  return (
    <div className="listItem" key={user.id}>
      <p className="userName"> {user.name}</p>
      <button className="button">
        <p className="buttonp" onClick={clickHandler}>
          Смотреть профиль
        </p>
      </button>
    </div>
  );
};
