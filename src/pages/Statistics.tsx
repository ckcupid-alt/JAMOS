function Statistics() {
  return (
    <div className="page">

      <div className="card">

        <h2>📊 Statistics</h2>

        <div className="stockRow">
          <span>총 수익률</span>
          <strong className="green">
            +5.24%
          </strong>
        </div>

        <div className="stockRow">
          <span>총 평가손익</span>
          <strong className="green">
            +₩1,253,000
          </strong>
        </div>

        <div className="stockRow">
          <span>승률</span>
          <strong>
            71%
          </strong>
        </div>

      </div>

      <div className="card">

        <h2>📈 자산 비중</h2>

        <div
          style={{
            height: 220,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#94a3b8",
            fontSize: 18,
          }}
        >
          Pie Chart
          <br />
          (Release 4 구현)
        </div>

      </div>

      <div className="card">

        <h2>📅 월별 수익률</h2>

        <div
          style={{
            height: 220,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#94a3b8",
            fontSize: 18,
          }}
        >
          Line Chart
          <br />
          (Release 4 구현)
        </div>

      </div>

    </div>
  );
}

export default Statistics;