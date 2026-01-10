import { Routes, Route } from "react-router-dom";
import Head from "./components/Head";
import Dashboard from "./components/Dashboard";
import Sales from "./components/Sales";
import Goods from "./components/Goods";
import Analytics from "./components/Analytics";
import { TotalProvider } from "./components/TotalProvider";

function App() {
  return (
    <>
    <TotalProvider>
      <Head/>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Sales" element={<Sales />} />
        <Route path="/Goods" element={<Goods />} />
        <Route path="/Analytics" element={<Analytics />} />
      </Routes>
    </TotalProvider>
    </>
  );
}

export default App;
