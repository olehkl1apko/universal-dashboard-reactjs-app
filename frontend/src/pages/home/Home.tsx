import { BarGraph, AreaGraph } from "../../components/charts";

import "./home.scss";
import { areaData, revenueData, visitsData } from "../../modules";

const Home = () => {
  return (
    <div className="home">
      <div className="box box7">
        <AreaGraph areaData={areaData} />
      </div>
      <div className="box box8">
        <BarGraph barData={visitsData} />
      </div>
      <div className="box box9">
        <BarGraph barData={revenueData} />
      </div>
    </div>
  );
};

export default Home;
