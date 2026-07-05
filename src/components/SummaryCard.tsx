type Props = {
  buyAmount: number;
  evaluationAmount: number;
};

function SummaryCard({
  buyAmount,
  evaluationAmount,
}: Props) {

  const profit = evaluationAmount - buyAmount;

  const profitRate =
    buyAmount === 0
      ? 0
      : (profit / buyAmount) * 100;

  return (
    <div className="card">

      <h2>💰 Portfolio Summary</h2>

      <div className="stockRow">
        <span>총 매수금액</span>
        <strong>
          ₩{buyAmount.toLocaleString()}
        </strong>
      </div>

      <div className="stockRow">
        <span>총 평가금액</span>
        <strong>
          ₩{evaluationAmount.toLocaleString()}
        </strong>
      </div>

      <hr />

      <div className="stockRow">
        <span>총 평가손익</span>

        <strong
          className={
            profit >= 0
              ? "green"
              : "red"
          }
        >
          ₩{profit.toLocaleString()}
        </strong>

      </div>

      <div className="stockRow">
        <span>총 수익률</span>

        <strong
          className={
            profit >= 0
              ? "green"
              : "red"
          }
        >
          {profitRate.toFixed(2)}%
        </strong>

      </div>

      <hr />

      <div className="stockRow">
        <span>보유종목</span>
        <strong>
          {buyAmount === 0 ? "0" : "-"}
        </strong>
      </div>

    </div>
  );
}

export default SummaryCard;