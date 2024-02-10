import React from "react";
import Quality from "./Quality";
import { getDictionary } from "@/getDictionary";

const page = async ({ params }) => {
  const lang = await getDictionary(params.lang);

  return (
    <Quality
      lang={params.lang}
      quality={lang.quality.heading}
      size={lang.size.heading}
      addtocart={lang.size.addtocart}
    />
  );
};

export default page;
