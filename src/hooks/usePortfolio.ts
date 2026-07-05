import { useEffect, useState } from "react";
import type { Stock } from "../types/Stock";
import {
  loadPortfolio,
  savePortfolio,
} from "../services/database";

export function usePortfolio() {
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    setStocks(loadPortfolio());
  }, []);

  useEffect(() => {
    savePortfolio(stocks);
  }, [stocks]);

  function addStock(stock: Stock) {
    setStocks((prev) => [...prev, stock]);
  }

  function deleteStock(id: number) {
    setStocks((prev) =>
      prev.filter((s) => s.id !== id)
    );
  }

  function clearStocks() {
    setStocks([]);
  }

  return {
    stocks,
    addStock,
    deleteStock,
    clearStocks,
  };
}