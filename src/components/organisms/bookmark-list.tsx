import { BookmarkRow } from "../molecules/bookmark-row";
import { Component } from "solid-js";
import { BookmarkListProps } from "./types";
import { Bookmark } from "../molecules/types";
import useContent from "../../use/useContent/useContent";

export const BookmarkList: Component<BookmarkListProps> = ({ bookmarks }) => {
  const { category } = useContent();

  return (
    <div class={`${bookmarks.length > 6 ? 'overflow-y-scroll' : '' } scroller-height pb-20`}>
      {bookmarks.map((bookmark: Bookmark) => {
        return bookmark.category === category() ? <BookmarkRow {...bookmark} /> : false;
      })}
    </div>
  );
};
