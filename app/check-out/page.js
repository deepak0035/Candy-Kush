'use client'
import { useState, useEffect } from "react";
import LogoSection from "@/components/logoSection/LogoSection";
import StepIndicator from "@/components/Indicators/StepIndicator";
import OrderList from "@/components/OrderList/OrderList";
import { selectCartItems, selectTotal } from "@/Redux/Slices/cartSlice";
import { useSelector } from "react-redux";
import CurrencyFormat from "react-currency-format";
import { useRouter } from "next/navigation";


const Page = () => {
  const totalSteps = 6;
  const activeStep = 4;

  const cartItems = useSelector(selectCartItems);
  const router = useRouter();


  const handleUpdateData = () => {
    // Redirect to "/quality" after updating the reducers
    router.push("/thankyou");
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
      <LogoSection cart={true}/>
      <OrderList />

      <div className="fixed bottom-6 left-0 right-0 flex flex-col justify-center items-center py-2">
        <p className="text-gray-500 text-lg ">
          Total Price:
          <CurrencyFormat
            value={updatedTotal}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            className="text-carpetMoss px-1 font-medium"
          />
        </p>
        <button
          onClick={handleUpdateData}
          className=" px-4 py-2 line-clamp-3 rounded-full bg-gradient-to-r from-carpetMoss to-carpetMoss via-green-500 text-white text-center h-12 w-4/5 md:h-16 md:w-96 font-semibold"
        >
          CHECK OUT
        </button>
      </div>
    </div>
  );
};

export default Page;
