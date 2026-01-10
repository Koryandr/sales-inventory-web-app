import React, { useState } from "react";
import { TotalContext } from "./TotalContext";

interface Props {
  children: React.ReactNode;
}

export const TotalProvider: React.FC<Props> = ({ children }) => {
  const [total, setTotal] = useState<number>(0);

  return (
    <TotalContext.Provider value={{ total, setTotal }}>
      {children}
    </TotalContext.Provider>
  );
};
