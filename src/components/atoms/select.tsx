import { Component, createSignal } from "solid-js";
import { RiArrowsArrowDropDownFill } from "solid-icons/ri";
import type { Signal, Accessor, Setter } from 'solid-js';

interface SelectProps {
  options: string[],
  name: string,
  value: Accessor<string>,
  setValue: (value:string) => void
}

const Select: Component<SelectProps> = ({ options, name, value, setValue }) => {

  const setValueIntoState = (e: any) => {
    if(e.target.value) {
      setValue(e.target.value)
    }
  }
  let optionsMap = options.map(option => {
    return <option class="text-black bg-white">{option}</option>
  })
  
  return (
    <div class="relative mt-2 border-textLight dark:border-textDark text-textLight dark:text-textDark">
      <RiArrowsArrowDropDownFill size={30} class="absolute right-3 top-1/2 -translate-y-1/2 z-0" />
      <select onChange={(e) => setValueIntoState(e)} value={value()} id="the-select" name={name} class={`cursor-pointer relative z-20 bg-transparent py-2 px-2 w-full font-bold border-solid border-2 border-textLight
  dark:border-textDark text-textLight dark:text-textDark rounded-md`}>
       {[ <option selected disabled class="text-black bg-white ">{name}</option>, ...optionsMap]}
      </select>
    </div>
    )
};

export default Select;