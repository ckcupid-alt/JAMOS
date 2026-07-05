import type { Stock } from "../types/Stock";

const STORAGE_KEY = "jamos_portfolio";

export function loadPortfolio(): Stock[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) return [];

    return JSON.parse(data);

  } catch {

    return [];

  }
}

export function savePortfolio(stocks: Stock[]) {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(stocks)
  );

}

export function clearPortfolio() {

  localStorage.removeItem(STORAGE_KEY);

}