import { useState } from "react";
import { Stock } from "../types/Stock";

function Portfolio() {
  const [stocks, setStocks] = useState<Stock[]>([]);

  const [name, setName] = useState("");
  const [averagePrice, setAveragePrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const addStock = () => {
    if (!name || !averagePrice || !quantity) {
      alert("모든 항목을 입력하세요.");
      return;
    }

    const stock: Stock = {
      id: Date.now(),
      name,
      averagePrice: Number(averagePrice),
      quantity: Number(quantity),
    };

    setStocks([...stocks, stock]);

    setName("");
    setAveragePrice("");
    setQuantity("");
  };

  const removeStock = (id: number) => {
    setStocks(stocks.filter((s) => s.id !== id));
  };

  return (
    <div className="page">

      <h1>📈 Portfolio</h1>

      <div className="card">

        <input
          placeholder="종목명"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="평단가"
          value={averagePrice}
          onChange={(e) => setAveragePrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="보유수량"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button onClick={addStock}>
          + 종목 추가
        </button>

      </div>

      <br />

      {stocks.length === 0 ? (
        <p>등록된 종목이 없습니다.</p>
      ) : (
        stocks.map((stock) => {

          const buyAmount =
            stock.averagePrice * stock.quantity;

          return (

            <div className="card" key={stock.id}>

              <h2>{stock.name}</h2>

              <p>
                평단가 :
                {" "}
                {stock.averagePrice.toLocaleString()}원
              </p>

              <p>
                보유수량 :
                {" "}
                {stock.quantity.toLocaleString()}주
              </p>

              <p
                style={{
                  marginTop: "10px",
                  fontWeight: "bold",
                  color: "#22c55e",
                }}
              >
                총 매수금액 :
                {" "}
                {buyAmount.toLocaleString()}원
              </p>

              <button
                style={{
                  background: "#ef4444",
                  marginTop: "15px",
                }}
                onClick={() => removeStock(stock.id)}
              >
                삭제
              </button>

            </div>

          );

        })
      )}

    </div>
  );
}

export default Portfolio;