import React from "react";

const CustomerCard = ({details,name}) => {
  return (
    <>
      <div className="card1 w-[560px] h-[320px] bg-[#ac646412] rounded-md py-[50px] px-[30px] ">
        <div className="quotes w-[30px] h-[30px] ">
          {" "}
          <img src="Photos/double-quotes.png" alt="" />{" "}
        </div>

        <p className="text-[18px] my-5 ">
          {" "}
          {details}
          {" "}
        </p>

        <p className="text-[20px] font-[500] "> {name} </p>
      </div>
    </>
  );
};

export default CustomerCard;
