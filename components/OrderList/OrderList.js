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

const ProductList = ({
  type,
  quality,
  size,
  price,
  buymore,
  lang
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector(selectCartItems);

  const handleUpdateData = () => {
    // Redirect to "/types" after updating the reducers
    const route = `/${lang}/products`; // Assuming "products" is a dynamic segment

    // Push the updated route to the router
    router.push(route, undefined, {
      locale: lang,
    });  };

  return (
    <>
      <div className="space-y-4 py-2 px-2 max-h-[27rem] overflow-y-auto">
        {cartItems.map((product, index) => (
          <OrderDetail
            key={index}
            // Pass the necessary properties from the cartItem to OrderDetail
            product={product}
            quality={quality}
            size={size}
            price={price}
            type={type}
          />
        ))}
      </div>
      <div className="flex justify-start items-center py-2">
        <button
          className="relative px-4 py-2 line-clamp-3 backdrop-blur-lg bg-white bg-opacity-40  rounded-full shadow-[0_1px_2px_rgb(0,0,0,0.5)]  text-carpetMoss text-center w-44 h-12  font-semibold"
          onClick={handleUpdateData}
        >
          {buymore}
        </button>
      </div>
    </>
  );
};

export default ProductList;
