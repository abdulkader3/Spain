import React from "react";
import Button from "./Button";

const Page2 = () => {
  return (
    <>
      <div className="main w-full pt-[190px] h-full ">
        <div className="sPfR w-full ">
          <div className="flex justify-center gap-[70px]">
            <div className="right flex gap-[25px] ">
              <div className="w-[170px] h-[385px] bg-white rounded-2xl overflow-hidden ">
                {" "}
                <img
                  className=" w-full h-full "
                  src="Photos/2pageImage2.jpeg"
                  alt="work we do"
                />
              </div>
              <div className="w-[170px] h-[385px] bg-white rounded-2xl overflow-hidden ">
                {" "}
                <img
                  className=" w-full h-full "
                  src="Photos/2pageImage1.jpeg"
                  alt="work we do"
                />
              </div>
              <div className="w-[170px] h-[385px] bg-white rounded-2xl overflow-hidden ">
                {" "}
                <img
                  className=" w-full h-full "
                  src="Photos/2pageImage3.jpg"
                  alt="work we do"
                />
              </div>
            </div>

            <div className="left">
              <div className="bigText ">
                <h2 className=" text-[43px] font-semibold ">
                  {" "}
                  <span className="text-red-500">Experts</span> At What We Do
                </h2>

                <p className=" w-[540px] text-[19px] font-[400] my-[12px] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <p className=" w-[540px] text-[19px] font-[400] ">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>

                <div className=" mt-[30px] ">
                  {" "}
                  <Button buttonText={"Request a Quote"} />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="line flex justify-center my-[90px] ">
            {" "}
            <div className="redLine red_line w-[95%] h-[1.1px] bg-red-400 "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
