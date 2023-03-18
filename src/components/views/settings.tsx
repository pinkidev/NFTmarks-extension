import { Component, createEffect } from "solid-js";
import Toggler from "../atoms/toggler";
import useSettings from "../../use/useSettings/useSettings";
import {
  FaSolidNetworkWired,
  FaRegularMoon,
  FaSolidSun,
  FaSolidChevronRight,
} from "solid-icons/fa";
import {} from "solid-icons/fa";

const Settings: Component<{}> = (props) => {
  const { theme, setTheme, darkSecondary, lightSecondary, darkText, lightText } = useSettings();  


  return (
    <div class={`text-black dark:text-white px-6 pb-4 pt-2 transition-colors`}>
      <div class={`p-2 mt-2 flex justify-between w-full items-center rounded-md`}>
        <div class="flex">
          {theme() ? <FaRegularMoon size={25} /> : <FaSolidSun size={25} />}
          <div class={`text-xl ml-3`}>Theme</div>
        </div>

        <Toggler enabled={theme()} switch={setTheme} />
      </div>
      <div class={`p-2 mt-2 flex justify-between w-full items-center rounded-md`}>
        <div class={`flex`}>
          <FaSolidNetworkWired size={25} />
          <div class="ml-3 text-xl">Network</div>
        </div>
        <FaSolidChevronRight size={15} />
      </div>
    </div>
  );
};

export default Settings;
