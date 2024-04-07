import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import "./styles.scss";
import { IPieData } from "../../modules";

type Props = {
  pieData: IPieData[];
};

const PieGraph = (props: Props) => {
  const { pieData } = props;

  return (
    <div className="pieChartBox">
      <h1>Leads by Source</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={pieData}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map(({ name, color }) => (
                <Cell key={name} fill={color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {pieData.map(({ name, color, value }) => (
          <div className="option" key={name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: color }} />
              <span>{name}</span>
            </div>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieGraph;
