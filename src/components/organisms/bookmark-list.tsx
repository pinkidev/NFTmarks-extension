import { BookmarkRow } from "../molecules/bookmark-row";
import { Component, For, createEffect } from "solid-js";
import { BookmarkListProps } from "./types";
import { Bookmark } from "../molecules/types";
import useContent from "../../use/useContent/useContent";

export const BookmarkList: Component<BookmarkListProps> = (props) => {

  return (
    <div class={`${props.bookmarks.length > 6 ? 'overflow-y-scroll' : ''} scroller-height pb-20`}>
      <For each={props.bookmarks}>
        {(bookmark) => bookmark.CATEGORY.toLowerCase() === props.category.toLowerCase() ? <BookmarkRow {...bookmark} /> : false }
      </For>
    </div>
  );
};
