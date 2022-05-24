import { useNavigate } from "react-router";
import "./User.css";

export const UserCard = ({ user }) => {
  const navigate = useNavigate("");

  const handleGoToProfile = () => {
    navigate(`/userPage/${user.id}`);
  };

  return (
    <div className="list-item" key={user.id}>
      <p className="userName"> {user.name}</p>
      <button className="button">
        <p className="button-text" onClick={handleGoToProfile}>
          Смотреть профиль
        </p>
      </button>
    </div>
  );
};
