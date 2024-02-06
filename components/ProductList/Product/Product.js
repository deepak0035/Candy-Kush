import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import {
 
  setProductTypes,
  setTypeImages,
} from "@/Redux/Slices/productDetailsSlice";
import { addToCart, setProductName } from "@/Redux/Slices/cartSlice";

const Product = ({ product }) => {
  const { name, productImage, types } = product;
  const imageLenth = productImage?.length;
  const dispatch = useDispatch();
  const router = useRouter();

  const handleUpdateData = () => {
    dispatch(setProductTypes(product.types));

    dispatch(setProductName(product.name ));
    // Redirect to "/types" after updating the reducers
    router.push("/types");
  };

  return (
    <div>
      {!name ? (
        <div className="grid grid-cols-7 text-gray-400 gap-4 bg-white rounded-2xl border-2 border-gray-300 h-24  px-4 place-items-center	">
          <h1 className="col-span-full text-2xl font-semibold tracking-widest">
            COMING SOON
          </h1>
        </div>
      ) : (
        <div
          className="grid grid-cols-7 text-carpetMoss gap-4 bg-white rounded-2xl shadow-xl h-24 px-4 place-items-center cursor-pointer border-2 border-carpetMoss"
          onClick={handleUpdateData}
        >
          <div className="col-span-2">
            <h2 className="text-base">{name}</h2>
          </div>
          {imageLenth > 1 ? (
            <div className="col-span-3 relative w-full h-24 overflow-hidden ">
              <Image
                src={productImage[0]}
                width={40}
                height={40}
                alt="Picture of the author"
                className="absolute top-2 left-12 transform origin-bottom z-10"
              />
              <Image
                src={productImage[1]}
                width={40}
                height={40}
                alt="Picture of the author"
                className="absolute top-2 left-12 transform -rotate-[20deg] origin-bottom"
              />
              <Image
                src={productImage[2]}
                width={40}
                height={40}
                alt="Picture of the author"
                className="absolute top-2 left-12 transform rotate-[20deg] origin-bottom"
              />
            </div>
          ) : (
            <div className="col-span-3 relative w-full h-24 overflow-hidden">
              <Image
                src={productImage[0]}
                width={40}
                height={40}
                alt="Picture of the author"
                className="absolute top-2 left-12 transform origin-bottom z-10"
              />
            </div>
          )}
          <div className="col-span-2 flex justify-between items-center">
            <span className="text-xs">Go to Category</span>
            <span>
              <IoIosArrowForward className="text-xs" />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
