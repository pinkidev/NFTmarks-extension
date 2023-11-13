import { RiMapSpaceShipLine } from "solid-icons/ri";
import { FaSolidUserAstronaut, FaSolidSliders } from "solid-icons/fa";
import { TbCurrencyDollar } from "solid-icons/tb";
import { IoChevronBack } from 'solid-icons/io'
import { A, useLocation } from "@solidjs/router";
import { createEffect, createSignal, on } from "solid-js";
import { BiRegularStoreAlt } from 'solid-icons/bi'
interface IHeaderProps { }

const Header = () => {
  const location = useLocation()

  createEffect(on(
    () => location.pathname,
    () => { }
  ));

  return (
    <div class="flex justify-between p-4 items-center text-textLight dark:text-textDark">
      <div class="cursor-pointer">
        <TbCurrencyDollar size="28" />
      </div>
      <div class="cursor-pointer ">
        {location.pathname.includes('/market') ?
          <A href="/">
            <RiMapSpaceShipLine size="32" class="text-primaryButtonLight dark:text-primaryButtonDark" />
          </A> :
          <A href="/market">
            <BiRegularStoreAlt size="32" class="fill-primaryButtonLight dark:fill-primaryButtonDark text-primaryButtonLight dark:text-primaryButtonDark" />
          </A>}
      </div>

      <div class="cursor-pointer">
        {location.pathname.includes('/account') ?
          <A href="/">
            <IoChevronBack size="25" />
          </A>
          : (
            <A href="/account">
              <FaSolidUserAstronaut size="23" class="fill-textLight dark:fill-textDark" />
            </A>
          )}
      </div>
    </div>
  );
};
export default Header;
