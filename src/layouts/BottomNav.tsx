import { NavLink } from "react-router-dom";

import "./BottomNav.css";

const menus = [
  {
    path: "/",
    label: "Home",
    icon: "🏠",
  },
  {
    path: "/portfolio",
    label: "Portfolio",
    icon: "💼",
  },
  {
    path: "/watchlist",
    label: "Watch",
    icon: "⭐",
  },
  {
    path: "/market",
    label: "Market",
    icon: "📈",
  },
  {
    path: "/ai",
    label: "AI",
    icon: "🤖",
  },
];

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      {menus.map((menu) => (
        <NavLink
          key={menu.path}
          to={menu.path}
          className={({ isActive }) =>
            isActive ? "bottom-nav__item active" : "bottom-nav__item"
          }
        >
          <span className="bottom-nav__icon">{menu.icon}</span>

          <span className="bottom-nav__label">
            {menu.label}
          </span>
        </NavLink>
      ))}
    </nav>
  );
}