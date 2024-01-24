import React from "react";
import OrderDetail from "./OederDetail/OrderDetail";

const ProductList = () => {
  return (
    <div className="space-y-4 py-2 px-2">
        <OrderDetail />
        <div className="flex justify-start items-center py-2">
          <button className="relative px-4 py-2 line-clamp-3 backdrop-blur-lg bg-white bg-opacity-40  rounded-full shadow-[0_1px_2px_rgb(0,0,0,0.5)]  text-carpetMoss text-center w-44 h-12  font-semibold">
            Buy More
          </button>
        </div>
      </div>
       );
};

export default ProductList;
