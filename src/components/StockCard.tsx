import { useEffect, useState } from "react";
import type { Stock } from "../types/Stock";
import { getQuote, type Quote } from "../services/marketApi";

type Props = {
  stock: Stock;
  onDelete: (id: number) => void;
};

function StockCard({ stock, onDelete }: Props) {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    getQuote(stock.code).then(setQuote);
  }, [stock.code]);

  if (!quote) {
    return (
      <div className="card">
        <p>시세 불러오는 중...</p>
      </div>
    );
  }

  const buyAmount = stock.averagePrice * stock.quantity;
  const evaluationAmount = quote.price * stock.quantity;
  const profit = evaluationAmount - buyAmount;
  const profitRate =
    buyAmount === 0 ? 0 : (profit / buyAmount) * 100;

  return (
    <div className="card">

      <div className="stockRow">
        <div>
          <h2>{quote.name}</h2>
          <small>{quote.code}</small>
        </div>

        <button
          style={{
            width: 80,
            background: "#ef4444",
          }}
          onClick={() => onDelete(stock.id)}
        >
          삭제
        </button>
      </div>

      <hr />

      <div className="stockRow">
        <span>평단가</span>
        <strong>
          ₩{stock.averagePrice.toLocaleString()}
        </strong>
      </div>

      <div className="stockRow">
        <span>현재가</span>
        <strong>
          ₩{quote.price.toLocaleString()}
        </strong>
      </div>

      <div className="stockRow">
        <span>등락률</span>
        <strong
          className={
            quote.changeRate >= 0 ? "green" : "red"
          }
        >
          {quote.changeRate.toFixed(2)}%
        </strong>
      </div>

      <div className="stockRow">
        <span>보유수량</span>
        <strong>{stock.quantity}주</strong>
      </div>

      <hr />

      <div className="stockRow">
        <span>매수금액</span>
        <strong>
          ₩{buyAmount.toLocaleString()}
        </strong>
      </div>

      <div className="stockRow">
        <span>평가금액</span>
        <strong>
          ₩{evaluationAmount.toLocaleString()}
        </strong>
      </div>

      <div className="stockRow">
        <span>평가손익</span>
        <strong
          className={
            profit >= 0 ? "green" : "red"
          }
        >
          ₩{profit.toLocaleString()}
        </strong>
      </div>

      <div className="stockRow">
        <span>수익률</span>
        <strong
          className={
            profit >= 0 ? "green" : "red"
          }
        >
          {profitRate.toFixed(2)}%
        </strong>
      </div>

    </div>
  );
}

export default StockCard;