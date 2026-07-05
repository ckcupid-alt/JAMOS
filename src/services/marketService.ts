export const stockList = [
  "삼성전자",
  "SK하이닉스",
  "현대차",
  "기아",
  "LG에너지솔루션",
  "POSCO홀딩스",
  "NAVER",
  "카카오",
  "셀트리온",
  "삼성바이오로직스",
  "KB금융",
  "신한지주",
  "하나금융지주",
  "S-OIL",
  "한화에어로스페이스",
  "LIG넥스원",
  "현대로템",
  "두산에너빌리티",
  "HD현대일렉트릭",
  "삼성전기",
  "LG전자",
  "대한항공",
  "한국전력",
  "SK이노베이션",
  "포스코퓨처엠"
];

export function searchStocks(keyword: string) {
  if (!keyword) return [];

  return stockList.filter((stock) =>
    stock.toLowerCase().includes(keyword.toLowerCase())
  );
}