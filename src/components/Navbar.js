import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

export const Navbar = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/notReady");
  };

  return (
    <nav>
      <div className="navbar">
        <div className="navbar-header">
          <NavLink to="/" className="nav-link">
            Post viewing
          </NavLink>
        </div>

        <ul>
          <li>
            <button
              className="nav-button-special"
              onClick={() => clickHandler()}
            >
              Версия для слабовидящих
            </button>
          </li>
          <li>
            <button
              className="nav-button-my-profile"
              onClick={() => clickHandler()}
            >
              Мой профиль
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
