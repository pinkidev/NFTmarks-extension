import { Component } from "solid-js";
import Toggler from "../atoms/toggler";
import useSwitches from "../../use/useSettings/useSettings";
import {
  FaSolidNetworkWired,
  FaRegularMoon,
  FaSolidSun,
  FaSolidChevronRight,
} from "solid-icons/fa";
import {} from "solid-icons/fa";

const Settings: Component<{}> = (props) => {
  const { theme, setTheme } = useSwitches();


  return (
    <div class="px-6 pb-4 pt-2">
      <div class="p-2 mt-2 flex justify-between w-full items-center hover:bg-neutral-600 rounded-md">
        <div class="flex">
          <FaRegularMoon size={25} color="white" />
          <div class="text-white text-xl ml-3">Theme</div>
        </div>

        <Toggler enabled={theme()} switch={setTheme} />
      </div>
      <div class="p-2 mt-2 flex justify-between w-full items-center hover:bg-neutral-600 rounded-md">
        <div class="flex">
          <FaSolidNetworkWired size={25} color="white" />
          <div class="text-white ml-3 text-xl">Network</div>
        </div>
        <FaSolidChevronRight size={15} color="white" />
      </div>
    </div>
  );
};

export default Settings;

