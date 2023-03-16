import { AiOutlinePlusCircle } from "solid-icons/ai";
import { FaSolidUserAstronaut, FaSolidSliders } from "solid-icons/fa";
import { TbCurrencyDollar } from "solid-icons/tb";
import { A } from "@solidjs/router";

interface IHeaderProps {}

const Header = () => {
  return (
    <div class="flex justify-between p-4 items-center">
      <div class="cursor-pointer">
        <TbCurrencyDollar size="28" color="white" />
      </div>
      <div class="cursor-pointer">
        <A href="/settings">
          <FaSolidUserAstronaut size="25" color="white" />
        </A>
      </div>
    </div>
  );
};
export default Header;
