import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

import "./styles.scss";
import { IBarData } from "../../modules";

type Props = {
  barData: IBarData;
};

const BarGraph = (props: Props) => {
  const {
    barData: { title, chartData, dataKey, color },
  } = props;

  return (
    <div className="bar">
      <h1>{title}</h1>
      <div>
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={dataKey} fill={color} />
            <XAxis dataKey="name" fontSize={12} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarGraph;
