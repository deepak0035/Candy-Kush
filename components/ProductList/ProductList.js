'use client'
import { motion, useAnimation } from "framer-motion";
import Product from "./Product/Product";
import { useEffect } from "react";

const ProductList = ({ comingsoon, lang, gotocategory, prerolled, products }) => {
  const controls = useAnimation();
  useEffect(() => {
    if (products) {
      controls.start((i) => ({
        x: 0,
        opacity: 1,
        transition: { delay: i * 0.2 }, // Adjust the delay as needed
      }));
    }
  }, [products, controls]);

  // Repeat the product data up to products.length times, then fill the rest with blanks
  const repeatedProducts = Array.from({ length: 5 }, (_, index) =>
    index < (products?.length || 0) ? products[index] : { blank: true }
  );

  return (
    <div className="space-y-8 py-4 px-2">
      {repeatedProducts.map((product, index) => (
        <motion.div
          key={index}
          custom={index}
          initial={{ x: -100, opacity: 0 }}
          animate={controls}
        >
          <Product
            key={index}
            product={product}
            comingsoon={comingsoon}
            lang={lang}
            gotocategory={gotocategory}
            prerolled={prerolled}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ProductList;
