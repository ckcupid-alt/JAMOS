import Header from "../components/Header";

function Dashboard() {
  return (
    <>
      <Header />

      <section className="summary">

        <div className="scoreCard">
          <span>시장점수</span>
          <h2>82</h2>
          <small>매우 양호</small>
        </div>

        <div className="portfolioCard">
          <span>내 자산</span>
          <h2>₩0</h2>
          <small>등록된 종목 없음</small>
        </div>

      </section>

      <section className="menu">

        <button>📈 Portfolio</button>

        <button>⭐ Watchlist</button>

        <button>🌍 Market</button>

        <button>📊 Statistics</button>

        <button>🤖 JAMI Lite</button>

        <button>⚙ Settings</button>

      </section>

    </>
  );
}

export default Dashboard;