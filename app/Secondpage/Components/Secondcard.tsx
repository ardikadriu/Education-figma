import backgroundImage from "@/public/Firstcard.png";

const Secondcard = () => {
  return (
    <div className="flex justify-center">
      <div
        className=" w-[376px] h-[301px] rounded-[38px] bg-[#3200E0] mix-blend-hard-light flex flex-col items-center  "
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" mt-[32px] flex items-top">
          <svg
            className="mr-[10px]"
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 14.3516H28C28.5303 14.351 29.0387 14.1401 29.4136 13.7652C29.7886 13.3902 29.9995 12.8818 30 12.3516V4.35156C29.9995 3.82129 29.7886 3.31289 29.4136 2.93793C29.0387 2.56298 28.5303 2.35209 28 2.35156H20C19.4697 2.35209 18.9613 2.56298 18.5864 2.93793C18.2114 3.31289 18.0005 3.82129 18 4.35156H9C8.46973 4.35209 7.96133 4.56298 7.58637 4.93793C7.21141 5.31289 7.00053 5.82129 7 6.35156V10.3516H4C3.46973 10.3521 2.96133 10.563 2.58637 10.9379C2.21141 11.3129 2.00053 11.8213 2 12.3516V20.3516C2.00053 20.8818 2.21141 21.3902 2.58637 21.7652C2.96133 22.1402 3.46973 22.351 4 22.3516H6V26.3516C6.00053 26.8818 6.21141 27.3902 6.58637 27.7652C6.96133 28.1402 7.46973 28.351 8 28.3516H18C18.0005 28.8818 18.2114 29.3902 18.5864 29.7652C18.9613 30.1402 19.4697 30.351 20 30.3516H28C28.5303 30.351 29.0387 30.1402 29.4136 29.7652C29.7886 29.3902 29.9995 28.8818 30 28.3516V20.3516C29.9995 19.8213 29.7886 19.3129 29.4136 18.9379C29.0387 18.563 28.5303 18.3521 28 18.3516H20C19.4697 18.3521 18.9613 18.563 18.5864 18.9379C18.2114 19.3129 18.0005 19.8213 18 20.3516V26.3516H8V22.3516H12C12.5303 22.351 13.0387 22.1402 13.4136 21.7652C13.7886 21.3902 13.9995 20.8818 14 20.3516V12.3516C13.9995 11.8213 13.7886 11.3129 13.4136 10.9379C13.0387 10.563 12.5303 10.3521 12 10.3516H9V6.35156H18V12.3516C18.0005 12.8818 18.2114 13.3902 18.5864 13.7652C18.9613 14.1401 19.4697 14.351 20 14.3516ZM20 28.3516V24.3516H28V28.3516H20ZM28 20.3516V22.3516H20V20.3516H28ZM4 20.3516V16.3516H12V20.3516H4ZM12 14.3516H4V12.3516H12V14.3516ZM20 12.3516V8.35156H28V12.3516H20ZM28 4.35156V6.35156H20V4.35156H28Z"
              fill="white"
            />
          </svg>

          <h1 className="text-white text-[32px] mr-[35px] leading-[35px]">
            Figma
            <br /> Prototyping
          </h1>
          <h2 className="text-white">
            <sup className="text-[30px]">$</sup>
            <span className="text-[48px]">60</span>
          </h2>
        </div>{" "}
        <div className="bg-white w-[320px] rounded-[18px] mt-[138px] flex items-center h-[69px] justify-center  mb-[25px]">
          <h1 className=" mr-[19px] text-[20px]">08 Lesson</h1>
          <svg
            width="7"
            height="7"
            viewBox="0 0 7 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="3.25" cy="3.34375" r="3" fill="black" />
          </svg>
          <h2 className="ml-[18px] text-[20px]">20 hrs 15 mins</h2>
        </div>
      </div>
    </div>
  );
};

export default Secondcard;
