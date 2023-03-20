import { FaSolidSliders } from "solid-icons/fa";
import { AiOutlinePlusCircle } from "solid-icons/ai";
import { TbCurrencyDollar } from "solid-icons/tb";

interface IFooterProps {}

const Footer = () => {
  return (
    <div class="flex justify-center w-full p-4 items-center">
      <div class="cursor-pointer text-textLight dark:text-textDark">
        <AiOutlinePlusCircle size="28" />
      </div>
    </div>
  );
};
export default Footer;
