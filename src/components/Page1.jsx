import React from "react";
import { LuCircleCheckBig } from "react-icons/lu";

const Page1 = () => {
  return (
    <>
      <div className="w-full bg-[#a8a8a817] ">
        <div className="flex w-full justify-between pr-[65px] pt-[65px] pl-[65px]">
          <div className=" w-fit head-left font-poppins">
            <h1 className=" mb-[45px] w-[445px] text-5xl font-semibold">
              The Best Solutions for Every Problem
            </h1>

            <p className="w-[490px] text-[19px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>

            <div className="button mt-[70px] flex gap-[50px] ">
              <button className="bg-red-500 text-white w-[180px] h-[55px] text-[17px] rounded-md hover:scale-110 transition-all active:scale-100 cursor-pointer">
                Request a Quote
              </button>

              <button className="bg-red-500 text-white w-[180px] h-[55px] text-[17px] rounded-md hover:scale-110 transition-all active:scale-100 cursor-pointer">
                View Our Service
              </button>
            </div>
          </div>

          <div className="head-right">
            <img src="Photos/hatora_badal.png" alt="Equipment" />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="red_line w-[95%] h-[3px] bg-red-400 "></div>{" "}
        </div>

        <div className="w-full flex justify-center relative  ">
          <div className=" absolute top-[-30px] w-[1250px] h-[120px] bg-white rounded-md shadow-2xl flex justify-between px-[60px] ">
            <div className="icon flex items-center gap-[8px] text-[19px] font-semibold ">
              {" "}
              <LuCircleCheckBig className="text-[33px] text-red-500 " /> Quality
              Services{" "}
            </div>
            <div className="icon flex items-center gap-[8px] text-[19px] font-semibold ">
              {" "}
              <LuCircleCheckBig className="text-[33px] text-red-500 " /> 100%
              Guarantee
            </div>
            <div className="icon flex items-center gap-[8px] text-[19px] font-semibold ">
              {" "}
              <LuCircleCheckBig className="text-[33px] text-red-500 " /> Routine
              Maintenance
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
