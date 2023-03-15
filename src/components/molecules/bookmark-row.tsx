import { Component } from "solid-js";
import { AiFillCopy } from "solid-icons/ai";
import { BiRegularLinkExternal } from 'solid-icons/bi'
import { RiSystemArrowDropDownFill } from 'solid-icons/ri'
import { BookmarkRowProps } from "./types";

export const BookmarkRow: Component<BookmarkRowProps> = ({ bookmark }) => {
  return (
    <div class="py-2 mt-2 px-2 flex justify-between items-center border-solid border-2 border-sky-200 rounded-md">
      <div class="text-sky-200">{bookmark.name}</div>
      <div class=" text-sky-200 flex items-center">
        <BiRegularLinkExternal size={20} class="mr-4 cursor-pointer" />
        <AiFillCopy size={20}  class="mr-2 cursor-pointer" />
        <RiSystemArrowDropDownFill size={30} class="cursor-pointer"/>
      </div>
    </div>
  );
};
