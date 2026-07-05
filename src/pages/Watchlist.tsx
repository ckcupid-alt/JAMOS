import { useState } from "react";

function Watchlist() {
  const [items, setItems] = useState<string[]>([]);
  const [keyword, setKeyword] = useState("");

  function addItem() {
    if (!keyword.trim()) return;

    if (items.includes(keyword)) {
      alert("이미 등록된 종목입니다.");
      return;
    }

    setItems([...items, keyword]);
    setKeyword("");
  }

  function removeItem(name: string) {
    setItems(items.filter((item) => item !== name));
  }

  return (
    <div className="page">

      <div className="card">

        <h2>⭐ Watchlist</h2>

        <input
          placeholder="관심종목 입력"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <button onClick={addItem}>
          관심종목 추가
        </button>

      </div>

      {items.length === 0 ? (

        <div className="card">
          등록된 관심종목이 없습니다.
        </div>

      ) : (

        items.map((item) => (

          <div
            className="card"
            key={item}
          >

            <div className="stockRow">

              <strong>{item}</strong>

              <button
                style={{
                  width: 80,
                  background: "#ef4444",
                }}
                onClick={() => removeItem(item)}
              >
                삭제
              </button>

            </div>

          </div>

        ))

      )}

    </div>
  );
}

export default Watchlist;