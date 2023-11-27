/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Tilt } from "react-tilt";

const CardFront = ({ name, number, expiryDate, dispatch }) => {
  return (
    <>
      <Tilt className="card-front rounded-3xl shadow-gray-800 shadow-md">
        <div className="flex items-center justify-between md:px-7 px-5 pt-8">
          <img src="images/chip.png" alt="" />
          <img src="images/visa.png" alt="" />
        </div>
        <div className="card-body text-white md:px-7 px-5 lg:py-6 md:py-5 py-3">
          <input
            type="text"
            placeholder="XXXX XXXX XXXX XXXX"
            className="md:text-2xl text-xl bg-transparent text-white pt-3 focus:outline-none"
            value={number}
            onChange={(e) =>
              dispatch({ type: "number", payload: e.target.value })
            }
          />
          <div className="flex items-center justify-between w-full pt-10">
            <div className="w-full">
              <p className="text-xs m-0">Card Holder Name</p>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="text-lg font-light w-full bg-transparent text-white focus: outline-none"
                value={name}
                onChange={(e) =>
                  dispatch({ type: "name", payload: e.target.value })
                }
              />
            </div>
            <div className="w-1/2">
              <p className="text-xs m-0">Expiry Date </p>
              <input
                type="text"
                placeholder="00/00"
                className="text-lg font-light w-full bg-transparent text-white focus: outline-none"
                value={expiryDate}
                onChange={(e) =>
                  dispatch({ type: "expiryDate", payload: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      </Tilt>
    </>
  );
};

export default CardFront;
