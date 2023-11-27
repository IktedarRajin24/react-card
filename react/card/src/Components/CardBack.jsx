/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Tilt } from "react-tilt";

const CardBack = ({ cvc, dispatch }) => {
  return (
    <>
      <Tilt className="card-back rounded-3xl shadow-gray-800 shadow-md py-10">
        <div className="w-full h-10 bg-slate-600"></div>
        <div className="card-body text-white md:px-10 px-7 md:py-10 py-8">
          <div className="w-1/2 bg-slate-300 text-black flex items-center">
            <p className="w-9/12 text-right"></p>
            <input
              type="text"
              placeholder="CVC"
              className="bg-white text-black w-1/2 focus:outline-none text-right"
              value={cvc}
              onChange={(e) =>
                dispatch({ type: "cvc", payload: e.target.value })
              }
            />
          </div>
        </div>
      </Tilt>
    </>
  );
};

export default CardBack;
