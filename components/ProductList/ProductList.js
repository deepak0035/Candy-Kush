import { useEffect } from "react";
import Product from "./Product/Product";
import { useQuery, useMutation } from "react-query";
import { getProducts } from "@/lib/helper";

const ProductList = () => {
  const { data: products } = useQuery("products", getProducts);

  // Repeat the product data up to products.length times, then fill the rest with blanks
  const repeatedProducts = Array.from({ length: 5 }, (_, index) =>
    index < (products?.length || 0) ? products[index] : { blank: true }
  );



  return (
    <div className="space-y-4 py-4 px-2">
      {repeatedProducts.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
