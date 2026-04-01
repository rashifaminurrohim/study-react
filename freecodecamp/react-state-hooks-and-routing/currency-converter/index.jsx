const { useState, useMemo, useEffect } = React;

export function CurrencyConverter() {
  const [startCurrency, setStartCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [convertedMoney, setConvertedMoney] = useState(0);
  const [money, setMoney] = useState(1);

  const rate = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7,
  };

  const usdValue = useMemo(() => {
    return money / rate[startCurrency];
  }, [money, startCurrency]);

  useEffect(() => {
    if (!startCurrency || !targetCurrency) return;
    setConvertedMoney((usdValue * rate[targetCurrency]).toFixed(2));
  }, [usdValue, targetCurrency]);

  return (
    <div>
      <h1>Currency Converter</h1>
      <div className="box">
        <h2>
          {startCurrency} to {targetCurrency} Conversion
        </h2>
        <input
          type="number"
          value={money}
          onChange={(e) => setMoney(e.target.value)}
        />
        <p>Start Currency</p>
        <select
          value={startCurrency}
          onChange={(e) => setStartCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
          <option value="JPY">JPY</option>
        </select>
        <p>Target Currency</p>
        <select
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
          <option value="JPY">JPY</option>
        </select>
      </div>
      <h2>
        Converted Amount: {convertedMoney} {targetCurrency}
      </h2>
    </div>
  );
}
