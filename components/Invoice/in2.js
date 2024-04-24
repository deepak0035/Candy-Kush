import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.png";

const Invoice = ({ cartItems, customerNumber }) => {
  return (
    <div id="invoice-POS" className="shadow-lg p-8 mx-auto bg-white">
      <div id="top">
        <div className="logo h-16 w-16 bg-cover bg-center mx-auto"></div>
        <div className="info flex items-center justify-center">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="Picture of the author"
            className="cursor-pointer object-cover"
          />
          <h2 className="text-xl font-bold">Candy Kush</h2>
        </div>
        <p className="text-sm font-semibold mt-2">
          Customer Number: {customerNumber}
        </p>
      </div>

      <div id="bot">
        <div id="table">
          <table className="w-full">
            <tr className="tabletitle">
              <td className="item">
                <h2 className="text-xs font-semibold">Item</h2>
              </td>
              <td className="Hours">
                <h2 className="text-xs font-semibold">Types</h2>
              </td>
              <td className="Hours">
                <h2 className="text-xs font-semibold">Quality</h2>
              </td>
              <td className="Hours">
                <h2 className="text-xs font-semibold">Quantity</h2>
              </td>
              <td className="Rate">
                <h2 className="text-xs font-semibold">Sub Total</h2>
              </td>
            </tr>

            {/* Render cartItems dynamically */}
            {cartItems.map((item, index) => (
              <tr className="service" key={index}>
                <td className="tableitem">
                  <p className="itemtext">{item.productName}</p>
                </td>
                <td className="tableitem">
                  <p className="itemtext">{item.type}</p>
                </td>
                <td className="tableitem">
                  <p className="itemtext">{item.quality}</p>
                </td>
                <td className="tableitem">
                  <p className="itemtext">{item.productQuantity}</p>
                </td>
                <td className="tableitem">
                  <p className="itemtext">
                    ${(item.productQuantity * item.productPrice).toFixed(2)}
                  </p>
                </td>
              </tr>
            ))}

            <tr className="tabletitle">
              <td colSpan="4"></td>
              <td className="Rate">
                <h2 className="text-lg font-semibold">Total</h2>
              </td>
              <td className="payment">
                <h2 className="text-lg font-semibold">
                  $
                  {cartItems
                    .reduce(
                      (total, item) =>
                        total + item.productQuantity * item.productPrice,
                      0
                    )
                    .toFixed(2)}
                </h2>
              </td>
            </tr>
          </table>
        </div>

        <div id="legalcopy">
          <p className="legal text-sm">
            <strong>Thank you for choosing us!</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
