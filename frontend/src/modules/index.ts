import {
  IDescription,
  descriptionUser,
  descriptionProduct,
} from "./descriptionItem";
import { ISalesLeader, salesLeaders } from "./salesLeaders";
import { menu } from "./menu";
import {
  IAreaData,
  areaData,
  revenueData,
  IBarData,
  visitsData,
  usersData,
  ILineData,
  productsData,
  totalRevenueData,
  conversionData,
  pieData,
  IPieData,
} from "./charts";
import { productsColumns, productListData, IProduct } from "./products";
import { usersColumns, userListData, IUser } from "./users";

export {
  menu,
  areaData,
  revenueData,
  visitsData,
  salesLeaders,
  usersData,
  productsData,
  totalRevenueData,
  conversionData,
  pieData,
  productsColumns,
  productListData,
  usersColumns,
  userListData,
  descriptionProduct,
  descriptionUser,
};
export type {
  IAreaData,
  IBarData,
  ISalesLeader,
  ILineData,
  IPieData,
  IProduct,
  IUser,
  IDescription,
};
