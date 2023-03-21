import { Component, createSignal } from "solid-js";
import { AiFillCopy } from "solid-icons/ai";
import { BiRegularLinkExternal } from "solid-icons/bi";
import { RiSystemArrowDropDownFill } from "solid-icons/ri";
import { Bookmark } from "./types";

export const BookmarkRow: Component<Bookmark> = ({ name, url }) => {
  const [dropdown, setDropdown] = createSignal(false);

  return (
    <div class="py-2 mt-2 px-2 border-solid border-2 border-text-textLight dark:border-textDark text-textLight dark:text-textDark rounded-md">
      <div class="flex justify-between items-center">
        <div>{name}</div>
        <div class="flex items-center">
          <a href={url} target="_blank">
            <BiRegularLinkExternal size={20} class="mr-4 cursor-pointer" />
          </a>
          <AiFillCopy
            size={20}
            onClick={() => navigator.clipboard.writeText(url)}
            class="mr-2 cursor-pointer"
          />
          <RiSystemArrowDropDownFill
            onClick={() => setDropdown(dropdown() ? false : true)}
            size={30}
            class="cursor-pointer"
          />
        </div>
      </div>
      {dropdown() ? <div class="dropdown">{url}</div> : false}
    </div>
  );
};
