import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

export const Navbar = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/notReady");
  };

  return (
    <nav>
      <div className={classes["navbar"]}>
        <div className={classes["navbar-header"]}>
          <NavLink to="/" className={classes["nav-link"]}>
            POST VIEWING
          </NavLink>
        </div>
        <div className={classes["button-wrap"]}>
          <button
            className={classes["nav-button-special"]}
            onClick={() => clickHandler()}
          >
            Версия для слабовидящих
          </button>
          <button
            className={classes["nav-button-my-profile"]}
            onClick={() => clickHandler()}
          >
            Мой профиль
          </button>
        </div>
      </div>
    </nav>
  );
};
