export interface Quote {
  code: string;
  name: string;
  price: number;
  change: number;
  changeRate: number;
}

const quoteMap: Record<string, Quote> = {
  "005930": {
    code: "005930",
    name: "삼성전자",
    price: 61200,
    change: 700,
    changeRate: 1.16,
  },
  "000660": {
    code: "000660",
    name: "SK하이닉스",
    price: 287500,
    change: 2500,
    changeRate: 0.88,
  },
  "005380": {
    code: "005380",
    name: "현대차",
    price: 224500,
    change: -500,
    changeRate: -0.22,
  },
};

export async function getQuote(code: string): Promise<Quote> {
  await new Promise((resolve) => setTimeout(resolve, 200));

  return (
    quoteMap[code] ?? {
      code,
      name: "Unknown",
      price: 0,
      change: 0,
      changeRate: 0,
    }
  );
}