import React from "react";
import { useRef } from "react";
import { useState } from "react";

function AppExchange() {
  const [total, setTotal] = useState();
  const coinsRef = useRef();
  const amountRef = useRef();

  function showMoney() {
    const total = coinsRef.current.value * amountRef.current.value;
    setTotal(total.toFixed(2));
  }
  return (
    <div className="col-lg-6 p-3 shadow mt-3 mx-auto">
      <h2>Enter the coin you want</h2>
      <select onChange={showMoney} ref={coinsRef} className="form-select">
        <option value="3.58">USD</option>
        <option value="3.74">EURO</option>
        <option value="0.11">BATH</option>
      </select>
      <h2>Enter the amount you want</h2>
      <input
        onChange={showMoney}
        ref={amountRef}
        defaultValue={"100"}
        type="number"
        className="form-control"
      />
      <h3 className="mt-4">You will get {total} NIS</h3>
    </div>
  );
}

export default AppExchange;
