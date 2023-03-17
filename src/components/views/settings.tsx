import { Component } from "solid-js";
import Toggler from "../atoms/toggler";
import useSwitches from "../../use/useSettings/useSwitches";

const Settings: Component<{}> = (props) => {
  const {theme, setTheme} = useSwitches();

  return (
    <div class="px-6 pb-4 pt-4">
      <div class="p-2 flex justify-between w-full items-center">
        <div class="text-white text-xl">Dark Theme</div>
        <Toggler enabled={theme()} switch={setTheme} />
      </div>
    </div>
  );
};

export default Settings;