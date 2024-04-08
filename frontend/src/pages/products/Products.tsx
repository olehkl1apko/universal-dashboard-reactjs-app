import { useState } from "react";

import "./products.scss";
import { AddItem, DataTable } from "../../components";
import { productsColumns, productListData } from "../../modules";

const Products = () => {
  const [open, setOpen] = useState(false);

  // Using API
  // const { isLoading, data } = useQuery({
  //   queryKey: ["allproducts"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/products").then(
  //       (res) => res.json()
  //     ),
  // });

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>
      <DataTable
        slug="products"
        columns={productsColumns}
        rows={productListData}
      />
      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="products" columns={productsColumns} rows={data} />
      )} */}
      {open && (
        <AddItem slug="product" columns={productsColumns} setOpen={setOpen} />
      )}
    </div>
  );
};

export default Products;
