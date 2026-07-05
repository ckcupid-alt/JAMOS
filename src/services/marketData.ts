export interface MarketStock {
  code: string;
  name: string;
}

export const marketStocks: MarketStock[] = [
  { code: "005930", name: "삼성전자" },
  { code: "000660", name: "SK하이닉스" },
  { code: "005380", name: "현대차" },
  { code: "000270", name: "기아" },
  { code: "373220", name: "LG에너지솔루션" },
  { code: "207940", name: "삼성바이오로직스" },
  { code: "035420", name: "NAVER" },
  { code: "035720", name: "카카오" },
  { code: "012330", name: "현대모비스" },
  { code: "068270", name: "셀트리온" },
  { code: "105560", name: "KB금융" },
  { code: "055550", name: "신한지주" },
  { code: "086790", name: "하나금융지주" },
  { code: "010950", name: "S-OIL" },
  { code: "012450", name: "한화에어로스페이스" },
  { code: "079550", name: "LIG넥스원" },
  { code: "064350", name: "현대로템" },
  { code: "034020", name: "두산에너빌리티" },
  { code: "267260", name: "HD현대일렉트릭" },
  { code: "009150", name: "삼성전기" },
  { code: "066570", name: "LG전자" },
  { code: "003490", name: "대한항공" },
  { code: "015760", name: "한국전력" },
  { code: "096770", name: "SK이노베이션" },
  { code: "003670", name: "포스코퓨처엠" }
];

export function searchMarket(keyword: string) {

  if (!keyword) return [];

  return marketStocks.filter(stock =>
    stock.name.includes(keyword) ||
    stock.code.includes(keyword)
  );

}