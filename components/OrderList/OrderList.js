import React, { useEffect, useState } from "react";
import OrderDetail from "./OederDetail/OrderDetail";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCheckout,
  selectCartItems,
  selectCheckoutItems,
  selectProductDetails,
  selectTotal,
} from "@/Redux/Slices/cartSlice";
import { useRouter } from "next/navigation";

const ProductList = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector(selectCartItems);


  const handleUpdateData = () => {
    // Redirect to "/types" after updating the reducers
    router.push("/products");
  };

  return (
    <>
      <div className="space-y-4 py-2 px-2 max-h-[27rem] overflow-y-auto">
        {cartItems.map((product, index) => (
          <OrderDetail
            key={index}
            // Pass the necessary properties from the cartItem to OrderDetail
            product={product}
          />
        ))}
      </div>
      <div className="flex justify-start items-center py-2">
        <button
          className="relative px-4 py-2 line-clamp-3 backdrop-blur-lg bg-white bg-opacity-40  rounded-full shadow-[0_1px_2px_rgb(0,0,0,0.5)]  text-carpetMoss text-center w-44 h-12  font-semibold"
          onClick={handleUpdateData}
        >
          Buy More
        </button>
      </div>
    </>
  );
};

export default ProductList;
