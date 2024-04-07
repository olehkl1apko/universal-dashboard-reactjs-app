import "./home.scss";
import {
  areaData,
  revenueData,
  salesLeaders,
  visitsData,
  usersData,
  productsData,
  totalRevenueData,
  conversionData,
  pieData,
} from "../../modules";
import {
  BarGraph,
  AreaGraph,
  LineGraph,
  PieGraph,
} from "../../components/charts";
import { SalesLeaders } from "../../components";

const Home = () => {
  return (
    <div className="home">
      <div className="box sales-leaders">
        <SalesLeaders data={salesLeaders} />
      </div>
      <div className="box">
        <LineGraph data={usersData} />
      </div>
      <div className="box">
        <LineGraph data={productsData} />
      </div>
      <div className="box pie">
        <PieGraph pieData={pieData} />
      </div>
      <div className="box">
        <LineGraph data={totalRevenueData} />
      </div>
      <div className="box">
        <LineGraph data={conversionData} />
      </div>
      <div className="box area">
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
