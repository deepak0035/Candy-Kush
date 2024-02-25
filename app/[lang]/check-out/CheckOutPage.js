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
import { postOrder } from "@/lib/helper";
import { useQueryClient, useQuery, useMutation } from "react-query";

const CheckOutPage = ({
  lang,
  type,
  quality,
  size,
  price,
  totalprice,
  checkout,
  buymore,
  buynow,
}) => {
  const totalSteps = 6;
  const activeStep = 4;

  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const router = useRouter();
const generateRandomId = () => {
  const randomNumber = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0"); // Generate random number between 0 and 9999 and pad to ensure it has 4 digits

  return `ck-${randomNumber}`; // Concatenate "ck-" with the padded random numbers
};




  const addMutation = useMutation(postOrder, {
    onSuccess: () => {
      console.log("data received");
    },
  });

  const handleUpdateData = async () => {
    if (Object.keys(cartItems).length === 0) {
      console.log("Don't have any data");
    }

    const model = {
      customerNumber: generateRandomId(),
      totalPrice: updatedTotal,
      orderItems: cartItems,
    };

    console.log(model);
    addMutation.mutate(model);

    if (addMutation.isLoading) return console.log("loading");
    if (addMutation.isError) return console.log("error");
    if (addMutation.isSuccess) return console.log("success");

    // Push the updated route to the router
    await router.push(`/${lang}/thankyou`);
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
    <div className="relative  overflow-hidden w-screen max-w-md  min-h-screen space-y-6 px-4 py-8">
      <StepIndicator totalSteps={totalSteps} activeStep={activeStep} />
      <LogoSection cart={true} />
      <OrderList
        quality={quality}
        size={size}
        price={price}
        type={type}
        buymore={buymore}
        buynow={buynow}
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
