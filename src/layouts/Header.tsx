import "./Header.css";

export default function Header() {
  const currentTime = new Date().toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <header className="header">
      <div className="header__left">
        <span className="header__logo">JAMOS</span>
      </div>

      <div className="header__center">
        <span>{currentTime}</span>
      </div>

      <div className="header__right">
        <span className="header__status">🟢</span>
        <span className="header__notification">🔔</span>
      </div>
    </header>
  );
}