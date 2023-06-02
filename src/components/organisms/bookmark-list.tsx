import { BookmarkRow } from "../molecules/bookmark-row";
import { Component } from "solid-js";
import { BookmarkListProps } from "./types";
import { Bookmark } from "../molecules/types";
export const BookmarkList: Component<BookmarkListProps> = ({ bookmarks }) => {
  return (
    <div class={`${bookmarks.length > 6 ? 'overflow-y-scroll' : '' } scroller-height pb-20`}>
      {bookmarks.map((bookmark: Bookmark) => {
        return <BookmarkRow {...bookmark} />;
      })}
    </div>
  );
};
