import { RiMapSpaceShipLine } from "solid-icons/ri";
import { FaSolidUserAstronaut, FaSolidSliders } from "solid-icons/fa";
import { TbCurrencyDollar } from "solid-icons/tb";
import { A, useLocation } from "@solidjs/router";
import { createEffect, createSignal, on } from "solid-js";

interface IHeaderProps {}

const Header = () => {
  const location = useLocation()

  createEffect(on(
    () => location.pathname,
    () => {}
  ));

  return (
    <div class="flex justify-between p-4 items-center">
      <div class="cursor-pointer">
        <TbCurrencyDollar size="28" color="white" />
      </div>
      <div class="cursor-pointer">
        {location.pathname === "/" ? (
          <A href="/account">
            <FaSolidUserAstronaut size="25" color="white" />
          </A>
        ) : (
          <A href="/">
            <RiMapSpaceShipLine size="25" color="white" />
          </A>
        )}
      </div>
    </div>
  );
};
export default Header;
