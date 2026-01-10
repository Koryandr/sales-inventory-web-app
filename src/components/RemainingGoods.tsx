import { TotalContext } from "./TotalContext";
import React, { useContext } from "react";

const RemainingGoods = () => {
  const { total } = useContext(TotalContext);
  return (
    <>
      <h2>Остаток на складе</h2>
      <p>Общее количество товаров: {total}</p>
    </>
  );
};

export default RemainingGoods;