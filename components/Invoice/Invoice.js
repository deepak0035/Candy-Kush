import React from "react";

const Invoice = () => {
  return (
    <div id="invoice-POS" className="shadow-lg p-8 mx-auto bg-white">
      <div id="top">
        <div className="logo h-16 w-16 bg-cover bg-center mx-auto"></div>
        <div className="info text-center">
          <h2 className="text-xl font-bold">Candy Kush</h2>
        </div>
      </div>

      <div id="bot">
        <div id="table">
          <table className="w-full">
            <tr className="tabletitle">
              <td className="item">
                <h2 className="text-lg font-semibold">Item</h2>
              </td>
              <td className="Hours">
                <h2 className="text-lg font-semibold">Qty</h2>
              </td>
              <td className="Rate">
                <h2 className="text-lg font-semibold">Sub Total</h2>
              </td>
            </tr>

            <tr className="service">
              <td className="tableitem">
                <p className="itemtext">Pre-rolled</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">3</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">$75.00</p>
              </td>
            </tr>

            <tr className="service">
              <td className="tableitem">
                <p className="itemtext">Pre-rolled</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">3</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">$75.00</p>
              </td>
            </tr>

            <tr className="service">
              <td className="tableitem">
                <p className="itemtext">Pre-rolled</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">3</p>
              </td>
              <td className="tableitem">
                <p className="itemtext">$75.00</p>
              </td>
            </tr>

            <tr className="tabletitle">
              <td></td>
              <td className="Rate">
                <h2 className="text-lg font-semibold">Total</h2>
              </td>
              <td className="payment">
                <h2 className="text-lg font-semibold">75.00</h2>
              </td>
            </tr>
          </table>
        </div>

        <div id="legalcopy">
          <p className="legal text-sm">
            <strong>Thank you for your choosing us!</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
