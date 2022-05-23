import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="navbarHeader">
          <p> Post viewing</p>
        </div>

        <ul>
          <li>
            <button className="navButtonSpecial">
              Версия для слабовидящих
            </button>
          </li>
          <li>
            <button className="navButtonMyProfile">Мой профиль</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
