import React from "react";
import CheckOutPage from "./CheckOutPage";
import { getDictionary } from "@/getDictionary";

const page = async ({ params }) => {
  const lang = await getDictionary(params.lang);

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
    />
  );
};

export default page;
