/* eslint-disable no-unused-vars */
import React from "react";

// eslint-disable-next-line react/prop-types
const CardDetails = ({ dispatch, name, number, expiryDate, cvc }) => {
  return (
    <div className="bg-slate-200 xl:w-[30%] lg:w-[45%] md:w-1/4 w-11/12 rounded-3xl h-auto shadow-gray-800 shadow-md px-5 py-5 card-details">
      <h1 className="text-xl mb-10 font-bold text-center">Card Details</h1>
      <div className="flex items-center justify-between w-11/12 mb-3">
        <p className="w-3/4">Card Holder Name:</p>
        <p className="border-b-2 border-dotted border-black w-9/12 text-sm text-slate-700">
          {name}
        </p>
      </div>
      <div className="flex items-center justify-between w-11/12 mb-3">
        <p className="w-3/4">Card Number:</p>
        <p className="border-b-2 border-dotted border-black w-9/12 text-xs text-slate-700">
          {number}
        </p>
      </div>
      <div className="flex items-center justify-between w-11/12 mb-3">
        <p className="w-3/4">Card Expiration Date:</p>
        <p className="border-b-2 border-dotted border-black w-9/12 text-sm text-slate-700">
          {expiryDate}
        </p>
      </div>
      <div className="flex items-center justify-between w-11/12 mb-3">
        <p className="w-3/4">CVC:</p>
        <p className="border-b-2 border-dotted border-black w-9/12 text-sm text-slate-700">
          {cvc}
        </p>
      </div>
      <button
        className="md:w-1/5 w-1/4 mt-10 font-bold border-2 border-black bg-black hover:bg-slate-100 text-white hover:text-black px-2 py-1 rounded-full"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
};

export default CardDetails;
