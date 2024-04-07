import "./home.scss";
import { areaData, revenueData, salesLeaders, visitsData } from "../../modules";
import { BarGraph, AreaGraph } from "../../components/charts";
import { SalesLeaders } from "../../components";

const Home = () => {
  return (
    <div className="home">
      <div className="box top-box">
        <SalesLeaders data={salesLeaders} />
      </div>
      <div className="box box7">
        <AreaGraph areaData={areaData} />
      </div>
      <div className="box">
        <BarGraph barData={visitsData} />
      </div>
      <div className="box">
        <BarGraph barData={revenueData} />
      </div>
    </div>
  );
};

export default Home;
