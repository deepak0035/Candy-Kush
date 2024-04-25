import React from "react";
import CheckOutPage from "./CheckOutPage";
import { getDictionary } from "@/getDictionary";

const page = async ({ params }) => {
  const lang = await getDictionary(params.lang);
 const generateRandomId = () => {
    const randomNumber = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0"); // Generate random number between 0 and 9999 and pad to ensure it has 4 digits

    return `CK-${randomNumber}`; // Concatenate "ck-" with the padded random numbers
  };
  return (
    <CheckOutPage
      
      lang={params.lang}
      quality={lang.checkout.quality}
      size={lang.checkout.size}
      price={lang.checkout.price}
      type={lang.checkout.type}
      buymore={lang.checkout.buymore}
      buynow={lang.checkout.buynow}
      checkout={lang.checkout.checkoutbtn}
      totalprice={lang.checkout.totalprice}
      customerNumber={generateRandomId()}
    />
  );
};

export default page;
