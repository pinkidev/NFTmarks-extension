import { Component } from "solid-js";
import useTheme from "../../../use/useTheme/useTheme";
import SettingsRow from "../../molecules/settings-row";

interface NetworksProps {

}

const Networks: Component<NetworksProps> = ({ }) => {
  const {theme, setTheme} = useTheme();
  const networks = ['Ethereum', 'Fantom'];
  const networksMap = networks.map(network => {
    return <SettingsRow name={network} />
  })
  return (
    <div class={`text-textLight dark:text-textDark px-6 pt-2 transition-colors`}>
      {networksMap}
    </div>
  )
};

export default Networks

