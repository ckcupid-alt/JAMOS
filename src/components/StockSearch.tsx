import { useMemo } from "react";
import { searchMarket } from "../services/marketData";

type Props = {
  keyword: string;
  onSelect: (name: string) => void;
};

function StockSearch({ keyword, onSelect }: Props) {

  const result = useMemo(() => {

    if (!keyword) return [];

    return searchMarket(keyword).slice(0, 10);

  }, [keyword]);

  if (!keyword) return null;

  if (result.length === 0) return null;

  return (

    <div
      className="card"
      style={{
        marginTop: 10,
        padding: 10,
      }}
    >

      {result.map(stock => (

        <button

          key={stock.code}

          onClick={() => onSelect(stock.name)}

          style={{
            width: "100%",
            background: "#23324d",
            color: "white",
            border: "none",
            borderRadius: 10,
            padding: 12,
            marginBottom: 8,
            textAlign: "left"
          }}

        >

          <strong>{stock.name}</strong>

          <br />

          <small>{stock.code}</small>

        </button>

      ))}

    </div>

  );

}

export default StockSearch;