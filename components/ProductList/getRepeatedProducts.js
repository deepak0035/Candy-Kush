'use client'
import { useQuery, useMutation } from "react-query";
import { getProducts } from "@/lib/helper";
import { combineReducers } from "@reduxjs/toolkit";


export const  getRepeatedProducts = () => {
  const { data: products } = useQuery("products", getProducts);

  // Repeat the product data up to products.length times, then fill the rest with blanks
  const repeatedProducts = Array.from({ length: 5 }, (_, index) =>
    index < (products?.length || 0) ? products[index] : { blank: true }
  );
    return repeatedProducts
};
