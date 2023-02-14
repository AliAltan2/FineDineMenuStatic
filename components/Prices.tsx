import React from "react";

function Prices(definiton: any, currencies: any) {
  console.log(definiton.en);
  return (
    <div>
      <h1>{definiton.en}</h1>
      <div>{currencies.value}</div>
      <div>{currencies.symbol}</div>
    </div>
  );
}

export default Prices;
