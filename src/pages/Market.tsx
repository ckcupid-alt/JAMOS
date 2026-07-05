function Market() {
  const market = [
    {
      name: "KOSPI",
      value: "3,145.72",
      change: "+1.21%",
      color: "#22c55e",
    },
    {
      name: "KOSDAQ",
      value: "812.41",
      change: "-0.34%",
      color: "#ef4444",
    },
    {
      name: "S&P 500",
      value: "6,284.82",
      change: "+0.56%",
      color: "#22c55e",
    },
    {
      name: "NASDAQ",
      value: "20,601.10",
      change: "+0.82%",
      color: "#22c55e",
    },
    {
      name: "DOW",
      value: "44,632.31",
      change: "-0.18%",
      color: "#ef4444",
    },
    {
      name: "USD/KRW",
      value: "1,362.40",
      change: "+0.12%",
      color: "#22c55e",
    },
    {
      name: "Bitcoin",
      value: "$109,200",
      change: "+2.81%",
      color: "#22c55e",
    },
  ];

  return (
    <div className="page">

      <div className="card">
        <h2>🌍 Global Market</h2>

        {market.map((item) => (
          <div
            key={item.name}
            className="stockRow"
          >
            <div>
              <strong>{item.name}</strong>
            </div>

            <div style={{ textAlign: "right" }}>
              <div>{item.value}</div>

              <div
                style={{
                  color: item.color,
                  fontWeight: "bold",
                }}
              >
                {item.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card">

        <h2>📊 Market Score</h2>

        <div
          style={{
            fontSize: 60,
            textAlign: "center",
            fontWeight: "bold",
            color: "#22c55e",
          }}
        >
          82
        </div>

        <p style={{ textAlign: "center" }}>
          시장 상태 : 매우 양호
        </p>

      </div>

      <div className="card">

        <h2>😊 Fear & Greed</h2>

        <div
          style={{
            fontSize: 48,
            textAlign: "center",
            color: "#f59e0b",
            fontWeight: "bold",
          }}
        >
          68
        </div>

        <p style={{ textAlign: "center" }}>
          Greed
        </p>

      </div>

    </div>
  );
}

export default Market;