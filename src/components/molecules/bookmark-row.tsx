import { Component, createSignal } from "solid-js";
import { AiFillCopy } from "solid-icons/ai";
import { BiRegularLinkExternal } from "solid-icons/bi";
import { RiSystemArrowDropDownFill } from "solid-icons/ri";
import { Bookmark } from "./types";

export const BookmarkRow: Component<Bookmark> = ({ name, url }) => {
  const [dropdown, setDropdown] = createSignal(false);

  return (
    <div class="py-2 mt-2 px-2 border-solid border-2 border-sky-200 rounded-md">
      <div class="flex justify-between items-center">
        <div class="text-sky-200">{name}</div>
        <div class=" text-sky-200 flex items-center">
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
      {dropdown() ? <div class="dropdown text-white">{url}</div> : false}
    </div>
  );
};
