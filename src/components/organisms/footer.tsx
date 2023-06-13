import { FaSolidSliders } from "solid-icons/fa";
import { AiOutlinePlusCircle } from "solid-icons/ai";
import { TbCurrencyDollar } from "solid-icons/tb";
import { A } from "@solidjs/router";
interface IFooterProps { }

const Footer = () => {
  return (
    <div class="flex justify-center w-full p-4 items-center dark:bg-primaryDark bg-primaryLight">
      <div class="cursor-pointer text-textLight dark:text-textDark">
        <A href="/add-nft-mark">
          <AiOutlinePlusCircle size="28"  class="fill-textLight dark:fill-textDark" />
        </A>
      </div>
    </div>
  );
};
export default Footer;
