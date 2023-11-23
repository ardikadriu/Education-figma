import React from "react";

const Coursedetails = () => {
  return (
    <div className="flex items-center mt-[55px]">
      <div className="text-white">
        <h1 className="text-[24px] font-semibold">Course Details</h1>
        <h2 className="text-[15px] text-[#8C8C8C] font-normal">
          12 Lesson &bull; 28 hrs 40 mins
        </h2>
      </div>
      <div className="w-[105px] h-[28px] rounded-[20px] bg-[#FFB71E] flex items-center justify-center ml-[65px]">
        <h1 className="text-[14px] font-semibold tracking-[-1]">
          3 Free videos
        </h1>
      </div>
    </div>
  );
};

export default Coursedetails;
