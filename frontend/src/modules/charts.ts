export interface IAreaData {
  name: string;
  books: number;
  clothes: number;
  electronic: number;
}

export const areaData: IAreaData[] = [
  {
    name: "Mon",
    books: 3000,
    clothes: 1398,
    electronic: 2210,
  },
  {
    name: "Tue",
    books: 2000,
    clothes: 9800,
    electronic: 2290,
  },
  {
    name: "Wed",
    books: 2780,
    clothes: 3908,
    electronic: 2000,
  },
  {
    name: "Thu",
    books: 1890,
    clothes: 4800,
    electronic: 2181,
  },
  {
    name: "Fri",
    books: 2390,
    clothes: 3800,
    electronic: 2500,
  },
  {
    name: "Sat",
    books: 3490,
    clothes: 4300,
    electronic: 2100,
  },
  {
    name: "Sun",
    books: 4000,
    clothes: 2400,
    electronic: 2250,
  },
];

export interface IBarData {
  title: string;
  color: string;
  dataKey: string;
  chartData: {
    name: string;
    value: number;
  }[];
}

export const revenueData: IBarData = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "value",
  chartData: [
    {
      name: "Sun",
      value: 4000,
    },
    {
      name: "Mon",
      value: 3000,
    },
    {
      name: "Tue",
      value: 2000,
    },
    {
      name: "Wed",
      value: 2780,
    },
    {
      name: "Thu",
      value: 1890,
    },
    {
      name: "Fri",
      value: 2390,
    },
    {
      name: "Sat",
      value: 3490,
    },
  ],
};

export const visitsData: IBarData = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "value",
  chartData: [
    {
      name: "Sun",
      value: 4000,
    },
    {
      name: "Mon",
      value: 3000,
    },
    {
      name: "Tue",
      value: 2000,
    },
    {
      name: "Wed",
      value: 2780,
    },
    {
      name: "Thu",
      value: 1890,
    },
    {
      name: "Fri",
      value: 2390,
    },
    {
      name: "Sat",
      value: 3490,
    },
  ],
};
