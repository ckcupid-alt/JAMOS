import { useMemo, useState } from "react";
import type { Stock } from "../types/Stock";

import SummaryCard from "../components/SummaryCard";
import StockCard from "../components/StockCard";
import StockSearch from "../components/StockSearch";

import { searchMarket } from "../services/marketData";
import { usePortfolio } from "../hooks/usePortfolio";

function Portfolio() {
  const {
    stocks,
    addStock,
    deleteStock,
  } = usePortfolio();

  const [keyword, setKeyword] = useState("");
  const [selectedCode, setSelectedCode] = useState("");

  const [averagePrice, setAveragePrice] = useState("");
  const [quantity, setQuantity] = useState("");

  function selectStock(name: string) {
    const stock = searchMarket(name)[0];

    if (!stock) return;

    setKeyword(stock.name);
    setSelectedCode(stock.code);
  }

  function handleAddStock() {
    if (
      !selectedCode ||
      !keyword ||
      !averagePrice ||
      !quantity
    ) {
      alert("모든 항목을 입력하세요.");
      return;
    }

    const stock: Stock = {
      id: Date.now(),
      code: selectedCode,
      name: keyword,
      averagePrice: Number(averagePrice),
      quantity: Number(quantity),
    };

    addStock(stock);

    setKeyword("");
    setSelectedCode("");
    setAveragePrice("");
    setQuantity("");
  }

  const totalBuy = useMemo(() => {
    return stocks.reduce(
      (sum, stock) =>
        sum + stock.averagePrice * stock.quantity,
      0
    );
  }, [stocks]);

  // 현재는 임시 계산
  // Release3에서 실시간 시세 API로 교체
  const totalEvaluation = useMemo(() => {
    return stocks.reduce(
      (sum, stock) =>
        sum +
        Math.round(stock.averagePrice * 1.05) *
          stock.quantity,
      0
    );
  }, [stocks]);

  return (
    <div className="page">

      <SummaryCard
        buyAmount={totalBuy}
        evaluationAmount={totalEvaluation}
      />

      <div className="card">

        <h2>종목 추가</h2>

        <input
          placeholder="종목 검색"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
            setSelectedCode("");
          }}
        />

        <StockSearch
          keyword={keyword}
          onSelect={selectStock}
        />

        <input
          type="number"
          placeholder="평단가"
          value={averagePrice}
          onChange={(e) =>
            setAveragePrice(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="보유수량"
          value={quantity}
          onChange={(e) =>
            setQuantity(e.target.value)
          }
        />

        <button onClick={handleAddStock}>
          종목 추가
        </button>

      </div>

      {stocks.length === 0 ? (
        <div className="card">
          등록된 종목이 없습니다.
        </div>
      ) : (
        stocks.map((stock) => (
          <StockCard
            key={stock.id}
            stock={stock}
            onDelete={deleteStock}
          />
        ))
      )}

    </div>
  );
}

export default Portfolio;