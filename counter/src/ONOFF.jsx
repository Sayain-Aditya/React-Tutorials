import React from "react";
import { useState } from "react";

const ONOFF = () => {
  const [isON, setIsOn] = useState(false);
  const [counter, setCounter] = useState(0);
  const handleOnClick = () => {
    if (counter < 20) {
        setCounter(counter + 1);
    }
    setIsOn("green");
  };
  const handleOffClick = () => {
    if (counter > 0){
        setCounter(counter - 1);
    } 
    setIsOn("red");
  };
  return (
    <>
      <div className="w-full h-screen">
        <div className="text-white">
          <h3>Counter {counter}</h3>

          <div
            className="flex justify-center items-center h-screen gap-3 w-full duration-200"
            style={{ backgroundColor: isON }}
          >
            <button
              onClick={handleOnClick}
              className="text-white bg-green-500 px-3 py-3 rounded"
              style={{ backgroundColor: "green" }}
            >
              on
            </button>
            <button
              onClick={handleOffClick}
              className="text-white bg-red-500 px-3 py-3 rounded"
              style={{ backgroundColor: "red" }}
            >
              off
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ONOFF;
