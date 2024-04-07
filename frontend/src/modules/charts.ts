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

export interface ILineData {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: {
    name: string;
    value: number;
  }[];
}

export const usersData: ILineData = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Total Users",
  number: "11.238",
  dataKey: "value",
  percentage: 45,
  chartData: [
    { name: "Sun", value: 400 },
    { name: "Mon", value: 600 },
    { name: "Tue", value: 500 },
    { name: "Wed", value: 700 },
    { name: "Thu", value: 400 },
    { name: "Fri", value: 500 },
    { name: "Sat", value: 450 },
  ],
};

export const productsData: ILineData = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Products",
  number: "238",
  dataKey: "value",
  percentage: 21,
  chartData: [
    { name: "Sun", value: 400 },
    { name: "Mon", value: 600 },
    { name: "Tue", value: 500 },
    { name: "Wed", value: 700 },
    { name: "Thu", value: 400 },
    { name: "Fri", value: 500 },
    { name: "Sat", value: 450 },
  ],
};

export const totalRevenueData: ILineData = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  number: "$56.432",
  dataKey: "value",
  percentage: -12,
  chartData: [
    { name: "Sun", value: 400 },
    { name: "Mon", value: 600 },
    { name: "Tue", value: 500 },
    { name: "Wed", value: 700 },
    { name: "Thu", value: 400 },
    { name: "Fri", value: 500 },
    { name: "Sat", value: 450 },
  ],
};

export const conversionData: ILineData = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "value",
  percentage: 12,
  chartData: [
    { name: "Sun", value: 400 },
    { name: "Mon", value: 600 },
    { name: "Tue", value: 500 },
    { name: "Wed", value: 700 },
    { name: "Thu", value: 400 },
    { name: "Fri", value: 500 },
    { name: "Sat", value: 450 },
  ],
};
