interface IProductInfo {
  productId: string;
  color: string;
  price: string;
  producer: string;
  export: string;
}

interface IUserInfo {
  username: string;
  fullname: string;
  email: string;
  phone: string;
  status: string;
}

interface IDataProps {
  name: string;
  visits: number;
}

interface IProductDataProps extends IDataProps {
  orders: number;
}

interface IUserDataProps extends IDataProps {
  clicks: number;
}

export interface IDescription {
  id: number;
  img?: string;
  title: string;
  info: IProductInfo | IUserInfo;
  chart?: {
    dataKeys: { name: string; color: string }[];
    data: IProductDataProps[] | IUserDataProps[];
  };
  activities?: { time: string; text: string }[];
}

export const descriptionProduct: IDescription = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "Petro Zagrava purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Oleh Kliapko added Playstation 5 Digital Edition into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Liudmila Paganets purchased Playstation 5 Digital Edition",
      time: "2 weeks ago",
    },
    {
      text: "Stepan Bogomolets reviewed the product",
      time: "1 month ago",
    },
    {
      text: "Svitlana Laska added Playstation 5 Digital Edition into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Roman Trasch reviewed the product",
      time: "2 months ago",
    },
  ],
};

export const descriptionUser: IDescription = {
  id: 1,
  title: "Oleh Kliapko",
  img: "/user.jpg",
  info: {
    username: "Bayraktar",
    fullname: "Oleh Kliapko",
    email: "gold@gmail.com",
    phone: "067 XXX 88 77",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: "Bayraktar purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Bayraktar added 3 items into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Bayraktar purchased Sony Bravia KD-32w800",
      time: "2 weeks ago",
    },
    {
      text: "Bayraktar reviewed a product",
      time: "1 month ago",
    },
    {
      text: "Bayraktar added 1 items into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Bayraktar reviewed a product",
      time: "2 months ago",
    },
  ],
};
