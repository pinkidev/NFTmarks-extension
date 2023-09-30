import { Component, createSignal } from "solid-js";
import type { Signal, Accessor, Setter } from 'solid-js';

interface InputProps {
  placeholder?: string,
  name: string,
  value: Accessor<string>,
  setValue: Setter<string>
}

const Select: Component<InputProps> = ({ name, value, setValue, placeholder }) => {
  return (
    <input id="nft-mark" placeholder={placeholder} class={`dark:border-textDark border-textLight border-2 border-solid
    dark:bg-primaryDark bg-primaryLight focus:bg-secondaryLight dark:focus:bg-secondaryDark p-2 flex font-bold w-full rounded-md 
    hover:dark:bg-secondaryDark hover:bg-secondaryLight`} name={name} value={value()} onChange={(e) => setValue((e.target as HTMLInputElement).value)}></input>
  )
};

export default Select;