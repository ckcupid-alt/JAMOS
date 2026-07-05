import { useEffect, useState } from "react";

import "./Header.css";

function Header() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setCurrentTime(
        now.toLocaleTimeString("ko-KR", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();

    const timer = window.setInterval(updateTime, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <header className="header">
      <div className="header__brand">
        <h1 className="header__title">JAMOS</h1>

        <p className="header__subtitle">
          JAMI Lite Investment Assistant
        </p>
      </div>

      <div className="header__right">
        <span className="header__time">
          {currentTime}
        </span>

        <span
          className="header__network"
          title="Network Connected"
        >
          🟢
        </span>

        <button
          className="profileBtn"
          type="button"
          aria-label="Profile"
        >
          👤
        </button>
      </div>
    </header>
  );
}

export default Header;