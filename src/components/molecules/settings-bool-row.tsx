import { Component } from "solid-js";
import Toggler from "../atoms/toggler";

interface SettingsBoolRowProps {
  title: string;
  value: () => boolean;
  setter: (theme: boolean) => void;
  IconTrue: any;
  IconFalse: any;
}

const SettingsBoolRow: Component<SettingsBoolRowProps> = ({ title, value, setter, IconTrue, IconFalse }) => {
  return (
    <div class={`p-2 mt-2 flex justify-between w-full items-center rounded-md hover:dark:bg-secondaryDark hover:bg-secondaryLight`}>
      <div class="flex">
        {value() ? <IconTrue size={25} /> : <IconFalse size={25} />}
        <div class={`text-xl ml-3`}>{title}</div>
      </div>

      <Toggler enabled={value()} switch={setter} />
    </div>
  );
};

export default SettingsBoolRow;
