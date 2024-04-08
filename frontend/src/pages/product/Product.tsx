import { DescriptionItem } from "../../components";
import { descriptionProduct } from "../../modules";

const Product = () => {
  //Using API - fetch data and send to DescriptionItem

  return <DescriptionItem data={descriptionProduct} />;
};

export default Product;
