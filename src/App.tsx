import { useState } from "react";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/Portfolio";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="app">

      {page === "dashboard" && <Dashboard />}

      {page === "portfolio" && <Portfolio />}

      <nav className="bottomNav">

        <button
          className={page === "dashboard" ? "active" : ""}
          onClick={() => setPage("dashboard")}
        >
          🏠
          <span>Home</span>
        </button>

        <button
          className={page === "portfolio" ? "active" : ""}
          onClick={() => setPage("portfolio")}
        >
          📈
          <span>Portfolio</span>
        </button>

      </nav>

    </div>
  );
}

export default App;