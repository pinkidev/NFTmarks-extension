import { Component } from "solid-js";
import { FaSolidChevronRight } from "solid-icons/fa";

interface SettingsNavRowProps {
  title: string,
  navTo: string,
  Icon: any
}

const SettingsNavRow: Component<SettingsNavRowProps> = ({navTo, Icon, title}) => {
  
  return (
    <div class={`p-2 mt-2 flex justify-between w-full items-center rounded-md hover:dark:bg-secondaryDark hover:bg-secondaryLight`}>
    <div class={`flex`}>
        <Icon size={25} />
      <div class="ml-3 text-xl">{title}</div>
    </div>
    <FaSolidChevronRight size={15} />
  </div>
  );
};

export default SettingsNavRow