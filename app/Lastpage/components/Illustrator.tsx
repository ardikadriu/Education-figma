import React from "react";

const Illustrator = () => {
  return (
    <div>
      <div className="flex items-center mt-[50px]">
        <div className="w-[64px] h-[64px] bg-[#F63D33] flex items-center justify-center rounded-[16px] mr-[9px]">
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.66098 17.5116L8.76472 23.7891V28.2347C8.76472 28.7298 8.96142 29.2046 9.31153 29.5548C9.66164 29.9049 10.1365 30.1016 10.6316 30.1016H21.8331C22.3282 30.1016 22.8031 29.9049 23.1532 29.5548C23.5033 29.2046 23.7 28.7298 23.7 28.2347V23.7891L26.8038 17.5116C26.9541 17.2035 27.0172 16.8601 26.9864 16.5187C26.9555 16.1773 26.8319 15.8508 26.6287 15.5747L16.9791 2.48295C16.8937 2.36486 16.7814 2.26872 16.6516 2.20243C16.5218 2.13613 16.3781 2.10156 16.2324 2.10156C16.0866 2.10156 15.9429 2.13613 15.8131 2.20243C15.6833 2.26872 15.5711 2.36486 15.4856 2.48295L5.83601 15.5747C5.63288 15.8508 5.50919 16.1773 5.47834 16.5187C5.44749 16.8601 5.51065 17.2035 5.66098 17.5116ZM10.6316 28.2347V24.5008H21.8331V28.2347H10.6316ZM16.2324 15.1663C16.5093 15.1663 16.78 15.2484 17.0103 15.4022C17.2405 15.5561 17.42 15.7748 17.526 16.0306C17.6319 16.2865 17.6597 16.568 17.6056 16.8396C17.5516 17.1112 17.4183 17.3607 17.2224 17.5565C17.0266 17.7524 16.7771 17.8857 16.5055 17.9397C16.2339 17.9938 15.9524 17.966 15.6965 17.8601C15.4407 17.7541 15.222 17.5746 15.0682 17.3444C14.9143 17.1141 14.8322 16.8434 14.8322 16.5665C14.8322 16.1951 14.9797 15.839 15.2423 15.5764C15.5049 15.3138 15.861 15.1663 16.2324 15.1663ZM15.2989 5.87839V13.4394C14.5469 13.6636 13.9006 14.151 13.4784 14.8125C13.0562 15.474 12.8862 16.2654 12.9995 17.042C13.1128 17.8185 13.5018 18.5283 14.0954 19.0416C14.6891 19.5549 15.4476 19.8374 16.2324 19.8374C17.0171 19.8374 17.7757 19.5549 18.3693 19.0416C18.9629 18.5283 19.3519 17.8185 19.4652 17.042C19.5785 16.2654 19.4085 15.474 18.9863 14.8125C18.5641 14.151 17.9179 13.6636 17.1658 13.4394V5.87839L25.1235 16.6831L22.1831 22.6339H10.2816L7.34121 16.6831L15.2989 5.87839Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="mr-[53px]">
          <h1 className="text-white text-[32px] font-semibold">Illustrator</h1>
          <div className="flex items-center - ">
            <div className="items-center">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.2755 20.1213L16.4255 22.6313C17.1855 23.0913 18.1155 22.4113 17.9155 21.5513L16.8155 16.8313L20.4855 13.6513C21.1555 13.0713 20.7955 11.9713 19.9155 11.9013L15.0855 11.4913L13.1955 7.03133C12.8555 6.22133 11.6955 6.22133 11.3555 7.03133L9.46546 11.4813L4.63546 11.8913C3.75546 11.9613 3.39546 13.0613 4.06546 13.6413L7.73546 16.8213L6.63546 21.5413C6.43546 22.4013 7.36546 23.0813 8.12546 22.6213L12.2755 20.1213Z"
                  fill="white"
                />
              </svg>
            </div>
            <h2 className="text-white">4.5</h2>
          </div>
        </div>
        <div>
          <h1 className="text-white text-[48px] ">
            <sup className=" text-[34px] text-white font-bold ml-[2px]">$</sup>
            60
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Illustrator;