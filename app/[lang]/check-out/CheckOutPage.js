"use client";
import { useState, useEffect, useRef } from "react";
import LogoSection from "@/components/logoSection/LogoSection";
import StepIndicator from "@/components/Indicators/StepIndicator";
import OrderList from "@/components/OrderList/OrderList";
import { clearCart, selectCartItems } from "@/Redux/Slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import CurrencyFormat from "react-currency-format";
import { useRouter } from "next/navigation";
import { clearProductDetails } from "@/Redux/Slices/productDetailsSlice";
import { postOrder } from "@/lib/helper";
import { useReactToPrint } from "react-to-print";

import { useQueryClient, useQuery, useMutation } from "react-query";
import Invoice from "@/components/Invoice/Invoice";

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
  const receiptRef = useRef();

  const printReceipt = useReactToPrint({
    content: () => receiptRef.current,
  pageStyle: `@media print {
  @page {
    size: 80mm 100%;
    margin: 0;
  }
  body {
    margin: 0;
  }

}`,
    onBeforeGetContent: async () => {},
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
    await printReceipt();

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
    <>
      <div className="relative  overflow-hidden w-screen max-w-[1080px]  min-h-[1920px] space-y-6 px-8 py-12">
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

        <div className="fixed bottom-6 left-0 right-0 flex flex-col justify-center items-center py-2 space-y-2">
          <p className="text-gray-500 text-4xl ">
            {totalprice}:
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
            } text-center text-3xl h-12 w-4/5 md:h-24 md:w-[40rem] font-semibold`}
            disabled={cartItems.length === 0}
          >
            {checkout}
          </button>
        </div>
      </div>
      <div style={{ display: "none" }}>
        <div ref={receiptRef}>
          <Invoice cartItems={cartItems} />
        </div>
      </div>
    </>
  );
};

export default CheckOutPage;
