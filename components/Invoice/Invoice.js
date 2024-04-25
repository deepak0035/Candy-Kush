import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.png";
import CurrencyFormat from "react-currency-format";


const Invoice = ({ cartItems, customerNumber }) => {
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  return (
    <div id="invoice-POS" className="shadow-lg py-8 px-4 mx-auto bg-white">
      <div id="top">
        <div className="flex justify-between items-center text-sm font-semibold">
          <p>Date: {currentDate}</p>
          <p>Time: {currentTime}</p>
        </div>
        <div className=" flex items-center justify-center">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="Picture of the author"
            className="cursor-pointer object-cover"
          />
        </div>
        <p className="text-lg text-center font-semibold my-2">
          Invoice: {customerNumber}
        </p>
      </div>

      <div id="bot" className="space-y-2">
        <div id="table">
          <table className="w-full space-y-8">
            <tr className="text-[0.56rem] ">
              <td className="item">
                <h2 className=" font-semibold">Item</h2>
              </td>
              <td className="Hours">
                <h2 className=" font-semibold">Type</h2>
              </td>
              <td className="Hours">
                <h2 className=" font-semibold">Quality</h2>
              </td>
              <td className="Hours">
                <h2 className=" font-semibold">Size</h2>
              </td>
              <td className="Hours">
                <h2 className=" font-semibold">Quantity</h2>
              </td>
              <td className="Rate">
                <h2 className=" font-semibold">Total</h2>
              </td>
            </tr>

            {/* Render cartItems dynamically */}
            {cartItems?.map((item, index) => (
              <tr className="service text-[0.6rem] space-y-2" key={index}>
                <td className="tableitem">
                  <p className="itemtext">{item.productName}</p>
                </td>
                <td className="tableitem">
                  <p className="itemtext">{item.productType}</p>
                </td>
                <td className="tableitem">
                  <p className="itemtext">{item.productQuality}</p>
                </td>
                <td className="tableitem">
                  <p className="itemtext">{item.productSize}</p>
                </td>
                <td className="tableitem">
                  <p className="itemtext">{item.productQuantity}</p>
                </td>
                <td className="tableitem">
                  <CurrencyFormat
                    value={(item.productQuantity * item.productPrice).toFixed(
                      2
                    )}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"฿"}
                    className="text-pottBlack font-medium"
                  />
                </td>
              </tr>
            ))}

            <tr className="tabletitle">
              <td colSpan="4"></td>
              <td className="Rate">
                <h2 className="text-xs font-semibold">Total</h2>
              </td>
              <td className="payment ">
                <h2 className="text-xs font-semibold">
                  <CurrencyFormat
                    value={cartItems
                      .reduce(
                        (total, item) =>
                          total + item.productQuantity * item.productPrice,
                        0
                      )
                      .toFixed(2)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"฿"}
                    className="text-pottBlack font-medium"
                  />
                </h2>
              </td>
            </tr>
          </table>
        </div>

        <div id="legalcopy">
          <p className="legal text-sm text-center">
            <strong>Thank you for choosing us!</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
