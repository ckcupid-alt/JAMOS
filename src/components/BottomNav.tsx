import { NavLink } from "react-router-dom";

function BottomNav() {
  const menus = [
    { to: "/", label: "Home", icon: "🏠" },
    { to: "/portfolio", label: "Portfolio", icon: "📈" },
    { to: "/market", label: "Market", icon: "🌍" },
    { to: "/watchlist", label: "Watch", icon: "⭐" },
    { to: "/statistics", label: "Stats", icon: "📊" },
    { to: "/settings", label: "More", icon: "⚙" },
  ];

  return (
    <nav className="bottomNav" aria-label="Bottom Navigation">
      {menus.map((menu) => (
        <NavLink
          key={menu.to}
          to={menu.to}
          className={({ isActive }) =>
            isActive ? "bottomNav__item active" : "bottomNav__item"
          }
        >
          <span className="bottomNav__icon">{menu.icon}</span>

          <span className="bottomNav__label">{menu.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default BottomNav;