import { Component, createSignal } from "solid-js";
import { BsClipboard2CheckFill } from 'solid-icons/bs'
import { FiLink2 } from 'solid-icons/fi'
import { RiArrowsArrowDropDownFill } from 'solid-icons/ri'
import { Bookmark } from "./types";

export const BookmarkRow: Component<Bookmark> = (props) => {
  const [dropdown, setDropdown] = createSignal(false);

  return (
    <div class="py-2 mt-2 px-2 font-bold border-solid border-2 border-textLight dark:border-textDark text-textLight dark:text-textDark rounded-md">
      <div class="flex justify-between items-center">
        <div>{props.NAME}</div>
        <div class="flex items-center">
          <a href={props.URL} target="_blank">
            <FiLink2  size={20} class="mr-4 cursor-pointer" />
          </a>
          <BsClipboard2CheckFill
            size={16}
            onClick={() => navigator.clipboard.writeText(props.URL)}
            class="mr-2 cursor-pointer"
          />
          <RiArrowsArrowDropDownFill
            onClick={() => setDropdown(dropdown() ? false : true)}
            size={30}
            class="cursor-pointer"
          />
        </div>
      </div>
      {dropdown() ? <div class="dropdown">{props.URL}</div> : false}
    </div>
  );
};
