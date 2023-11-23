import Titlee from "./Components/Titlee";
import Buttons from "./Components/Buttons";
import Firstcard from "./Components/Firstcard";
import Secondcard from "./Components/Secondcard";

const page = () => {
  return (
    <div className="max-w-[428px] bg-black relative overflow-hidden">
      <Titlee />
      <Buttons />
      <Firstcard />
      <Secondcard />
    </div>
  );
};

export default page;
