import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>JAMOS</h1>
        <p>JAMI Lite Investment Assistant</p>
      </header>

      <main className="dashboard">
        <div className="card">
          <h2>Market Score</h2>
          <span>--</span>
        </div>

        <div className="card">
          <h2>Portfolio</h2>
          <span>0 종목</span>
        </div>

        <div className="card">
          <h2>Watchlist</h2>
          <span>0 종목</span>
        </div>

        <div className="card">
          <h2>JAMI Lite</h2>
          <p>안녕하세요. 무엇을 분석해드릴까요?</p>
        </div>
      </main>
    </div>
  );
}

export default App;