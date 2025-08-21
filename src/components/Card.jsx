import React from "react";

const Card = ({title,details,IconName}) => {
  return (
    <>
      <div className="w-[370px] h-[260px] bg-white shadow-2xl rounded-2xl flex flex-col items-center p-10 ">
        <div className="icon w-[40px] h-[40px] ">
          {" "}
          <img src={IconName} alt="icon" />{" "}
        </div>

        <div className="title">
          {" "}
          <p className="text-[20px] font-semibold my-4 "> {title} </p>{" "}
        </div>

        <div className="details flex justify-center text-center text-[18px] font-[400] ">
          {" "}
          <p> {details} </p>{" "}
        </div>
      </div>
    </>
  );
};

export default Card;
