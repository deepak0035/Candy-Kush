import React from "react";
import { getDictionary } from "@/getDictionary";
import ThankYou from "./Thankyou";

const page = async ({ params }) => {
  const lang = await getDictionary(params.lang);

  return (
    <ThankYou
      lang={params.lang}
      thankyoumsg={lang.thankyou.thankyoumsg}
      gohome={lang.thankyou.gohome}
    />
  );
};

export default page;
