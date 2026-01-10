import { createContext } from "react";

interface TotalContextType {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
}

export const TotalContext = createContext<TotalContextType>({
  total: 0,
  setTotal: () => {}, // пустая функция для дефолта
});
