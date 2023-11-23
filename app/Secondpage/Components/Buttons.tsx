import Link from "next/link";

const buttons = () => {
  return (
    <div className="flex">
      <div className="flex items-center ml-[26px]">
        <button className=" bg-[#191919] w-[80px] h-[40px] hover:bg-[#3200E0] hover:text-white text-[#8C8C8C] rounded-[20px] t ">
          Design
        </button>{" "}
        <div className="w-[326px] h-[14px] shrink-0 bg-[#191919] flex items-center   ">
          <Link href={"Lastpage"}>
            <button className=" bg-[#191919] w-[100px] h-[40px] hover:bg-[#3200E0]  hover:text-white text-[#8C8C8C] rounded-[20px] ml-2.5 ">
              Illustration
            </button>{" "}
          </Link>
          <button className=" bg-[#191919] w-[100px] h-[40px] hover:bg-[#3200E0] hover:text-white text-[#8C8C8C] rounded-[20px] ml-2.5 ">
            Marketing
          </button>
          <button className=" bg-[#191919] w-[72px] h-[40px] hover:bg-[#3200E0] hover:text-white text-[#8C8C8C] rounded-[20px] ml-2.5 ">
            Music
          </button>
        </div>
      </div>
    </div>
  );
};

export default buttons;
