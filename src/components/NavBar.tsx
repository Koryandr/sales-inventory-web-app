import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <Link to="/">🏠 Главная</Link>
        <Link to="/Goods">📦 Товары</Link>
        <Link to="/Sales">🛒 Продажи</Link>
        <Link to="/Analytics">📊 Аналитика</Link>
      </nav>
    </>
  );
};

export default NavBar;
