import { AiOutlinePlusCircle } from "solid-icons/ai";
import { FaSolidUserAstronaut, FaSolidSliders } from 'solid-icons/fa'
import { TbCurrencyDollar } from "solid-icons/tb";

interface IHeaderProps {}

const Header = () => {
  return (
    <div class="flex justify-between p-4 items-center">
      <div class="cursor-pointer">
        <TbCurrencyDollar size="28" color="white" />
      </div>
      <div class="cursor-pointer">
        <FaSolidUserAstronaut size="25" color="white" />
      </div>
    </div>
  );
};
export default Header;
