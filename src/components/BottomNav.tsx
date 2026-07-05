import { NavLink } from "react-router-dom";

function BottomNav() {
  return (
    <nav className="bottomNav">

      <NavLink to="/">🏠<br />Home</NavLink>

      <NavLink to="/portfolio">📈<br />Portfolio</NavLink>

      <NavLink to="/market">🌍<br />Market</NavLink>

      <NavLink to="/watchlist">⭐<br />Watch</NavLink>

      <NavLink to="/statistics">📊<br />Stats</NavLink>

      <NavLink to="/settings">⚙<br />More</NavLink>

    </nav>
  );
}

export default BottomNav;