import { Component } from "solid-js";
import './common.css'
interface Props {
  width: string
}
const NftmarkBox: Component<Props> = (props) => {

  return (
    <div style={{ background: '/assets/temp-box.png', width: props.width }} class="relative responsive-square border-2 border-red self-start rounded-md">
        <div class="absolute w-full h-full"></div>
    </div>);
};

export default NftmarkBox;