import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CustomerCard from "./CustomerCard.jsx";

const Page4 = () => {
  return (
    <>
      <div className="w-full h-fit bg-white px-[130px] py-[50px] ">
        <div className=" flex justify-between h-fit items-center ">
          <div className="text text-[42px] font-[700] ">
            {" "}
            <p>
              See What <span className="text-red-500">Our Customers</span> Have
              To Say
            </p>{" "}
          </div>

          <div className="button text-[50px] flex gap-[50px] ">
            <button className=" hover:text-red-500 transition-all ">
              {" "}
              <IoIosArrowBack />{" "}
            </button>
            <button className=" hover:text-red-500 transition-all ">
              {" "}
              <IoIosArrowForward />{" "}
            </button>
          </div>
        </div>

        <div className="card w-full h-fit font-poppins flex justify-center gap-20 pt-[50px] ">
          <CustomerCard
            details={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
            name={"Customer Name"}
          />

          <CustomerCard
            details={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
            name={"Customer Name"}
          />
        </div>
      </div>
    </>
  );
};

export default Page4;
