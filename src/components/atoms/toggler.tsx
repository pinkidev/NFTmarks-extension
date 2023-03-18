import { Component, createSignal, Setter } from "solid-js";

export interface TogglerValue {
  enabled: boolean
  switch: (theme: boolean) => void
  height?: number
}

const Toggler: Component<TogglerValue> = (props) => {
  const height = props.height ? props.height : 8;
  const width = height * 2 * 2 + 8 + 4;
  // double height times 2 to double the length, account for padding and border width

  const [toggle, moveToggle] = createSignal(true);
  const enable = () => {
    const theme = toggle() ? false : true
    props.switch(theme);
    moveToggle(toggle() ? false : true);
  }

  return (
    <div style={{ width: width + 'px', padding: '4px', border: `2px solid ${toggle() ? 'white' : 'black'}` }} onClick={enable} 
      class={`cursor-pointer toggle-body rounded-full bg-neutral-700 w-12 flex transition-all duration-500 `}>
      <div style={{ padding: height + 'px' }} class={`toggle rounded-full bg-white transition-all duration-500 ${toggle() ? 'translate-x-full bg-white' : 'bg-black'}`}/>
    </div>);
};


export default Toggler;