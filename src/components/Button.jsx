import React from "react";

const Button = ({buttonText}) => {
  return (
    <>
      <button className="bg-red-500 text-white w-[180px] h-[55px] text-[17px] rounded-md hover:scale-110 transition-all active:scale-100 cursor-pointer">
        {buttonText}
      </button>
    </>
  );
};

export default Button;
