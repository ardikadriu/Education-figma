import Image from "next/image";
import Wave from "@/public/Wave.png";

const Titlee = () => {
  return (
    <div
      className="flex mt-[53px] mb-[45px]
    "
    >
      <div className="flex items-end ml-[24px]  ">
        <h1 className="text-white text-[41px] w-[]">
          Hello,
          <br /> Anni
        </h1>
        <Image
          className="shrink-0 object-contain"
          src={Wave}
          width={60}
          height={60}
          alt="hand"
        />
      </div>
      <div className="w-[373px] flex justify-end ">
        <svg
          className="mr-[25px]"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0436 15.1691L20.0001 20.1256"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.84783 16.8207C13.1821 16.8207 16.6957 13.3071 16.6957 8.97283C16.6957 4.63859 13.1821 1.125 8.84783 1.125C4.51359 1.125 1 4.63859 1 8.97283C1 13.3071 4.51359 16.8207 8.84783 16.8207Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <svg
          className="mr-[31px]"
          width="19"
          height="21"
          viewBox="0 0 19 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6769 16.4712V17.2019C12.6769 17.9772 12.3689 18.7207 11.8208 19.2688C11.2726 19.817 10.5291 20.125 9.75383 20.125C8.97858 20.125 8.23509 19.817 7.6869 19.2688C7.13872 18.7207 6.83075 17.9772 6.83075 17.2019V16.4712M17.595 14.9836C16.4221 13.5481 15.594 12.8173 15.594 8.85974C15.594 5.23558 13.7434 3.9444 12.2202 3.31731C12.0178 3.23418 11.8274 3.04327 11.7657 2.83546C11.4985 1.92611 10.7495 1.125 9.75383 1.125C8.75816 1.125 8.00866 1.92656 7.74422 2.83637C7.68256 3.04647 7.4921 3.23418 7.28977 3.31731C5.76475 3.94531 3.9159 5.23192 3.9159 8.85974C3.91362 12.8173 3.08556 13.5481 1.91268 14.9836C1.42672 15.5782 1.85239 16.4712 2.70237 16.4712H16.8099C17.6553 16.4712 18.0782 15.5755 17.595 14.9836Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Titlee;
