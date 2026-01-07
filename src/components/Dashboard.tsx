import NavBar from "./NavBar";
import RemainingGoods from "./RemainingGoods";
import ProfitPerDay from "./ProfitPerDay";
import ProfitForTheWeek from "./ProfitForTheWeek";

const Dashboard = () => {
  return(
    <>
      <div>
        <h1>Добро пожаловать!</h1>
        <h3>Ваш обзор на сегодня</h3>

        <RemainingGoods/>
        <ProfitPerDay/>
        <ProfitForTheWeek/>

        <NavBar/>
      </div>
    </>
  )
};

export default Dashboard;
