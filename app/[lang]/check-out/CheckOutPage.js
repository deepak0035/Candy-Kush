"use client";
import { useState, useEffect } from "react";
import LogoSection from "@/components/logoSection/LogoSection";
import StepIndicator from "@/components/Indicators/StepIndicator";
import OrderList from "@/components/OrderList/OrderList";
import { clearCart, selectCartItems } from "@/Redux/Slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import CurrencyFormat from "react-currency-format";
import { useRouter } from "next/navigation";
import { clearProductDetails } from "@/Redux/Slices/productDetailsSlice";

const CheckOutPage = ({lang,type, quality,size,price, totalprice, checkout, buymore}) => {
  const totalSteps = 6;
  const activeStep = 4;

  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const router = useRouter();

  const handleUpdateData = async() => {

    // Push the updated route to the router
    await router.push(`/${lang}/thankyou`)
    dispatch(clearCart());
    dispatch(clearProductDetails());

    // Redirect to "/types" after updating the reducers
  };

  // Function to calculate the updated total based on cart items
  const calculateUpdatedTotal = () => {
    let updatedTotal = 0;
    cartItems.forEach((item) => {
      updatedTotal += item.productQuantity * item.productPrice;
    });
    return updatedTotal;
  };

  const [updatedTotal, setUpdatedTotal] = useState(calculateUpdatedTotal());

  useEffect(() => {
    setUpdatedTotal(calculateUpdatedTotal());
  }, [cartItems]);

  return (
    <div className="relative bg-texture bg-no-repeat bg-cover overflow-hidden w-full max-w-lg min-h-screen space-y-6 px-4 py-8">
      <StepIndicator totalSteps={totalSteps} activeStep={activeStep} />
      <LogoSection cart={true} />
      <OrderList
        quality={quality}
        size={size}
        price={price}
        type={type}
        buymore={buymore}
        lang={lang}
      />

      <div className="fixed bottom-6 left-0 right-0 flex flex-col justify-center items-center py-2">
        <p className="text-gray-500 text-lg ">
          {totalprice}:{" "}
          <CurrencyFormat
            value={updatedTotal}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"฿"}
            className="text-carpetMoss px-1 font-medium"
          />
        </p>
        <button
          onClick={handleUpdateData}
          // Apply different styles when cartItems is empty
          className={`px-4 py-2 line-clamp-3 rounded-full ${
            cartItems.length === 0
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-gradient-to-r from-carpetMoss to-carpetMoss via-green-500 text-white cursor-pointer"
          } text-center h-12 w-4/5 md:h-16 md:w-96 font-semibold`}
          disabled={cartItems.length === 0}
        >
          {checkout}
        </button>
      </div>
    </div>
  );
};

export default CheckOutPage;
