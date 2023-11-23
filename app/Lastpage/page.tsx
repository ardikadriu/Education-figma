import Coursedetails from "./components/Coursedetails";
import Icons from "./components/Icons";
import Illustrator from "./components/Illustrator";
import Foter from "./components/Footer";
import Unlockmore from "./components/Unlockmore";

const page = () => {
  return (
    <div className="max-w-[428px] flex flex-col items-center pr-[31px] pl-[31px] bg-black">
      <Icons />
      <Illustrator />
      <Coursedetails />
      <Foter />
      <Unlockmore />
    </div>
  );
};

export default page;
