import { RiMapSpaceShipLine } from "solid-icons/ri";
import { FaSolidUserAstronaut, FaSolidSliders } from "solid-icons/fa";
import { TbCurrencyDollar } from "solid-icons/tb";
import { IoChevronBack } from 'solid-icons/io'
import { A, useLocation } from "@solidjs/router";
import { createEffect, on } from "solid-js";

interface IHeaderProps {}

const Header = () => {
  const location = useLocation()

  // able to listen to url changes
  createEffect(on(
    () => location.pathname,
    () => {}
  ));


  return (
    <div class="flex justify-between p-4 items-center text-textLight dark:text-textDark">
      <div class="cursor-pointer">
        <TbCurrencyDollar size="28" />
      </div>
      <div class="cursor-pointer">
        {location.pathname.includes('/account/') ?
            <A href="/account">
            <IoChevronBack size="25"  />
          </A>
         : location.pathname === "/" ? (
          <A href="/account">
            <FaSolidUserAstronaut size="25" class="fill-textLight dark:fill-textDark"/>
          </A>
        ) : 
        (
          <A href="/">
            <RiMapSpaceShipLine size="25"  />
          </A>
        )}
      </div>
    </div>
  );
};
export default Header;
